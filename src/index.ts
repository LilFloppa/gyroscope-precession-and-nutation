import { Shader } from "./shader";
import { Camera } from "./camera";
import { DirectionalLight } from "./directionalLight";
import { Trajectory } from "./trajectory";

import * as model from "./model";
import { Gyroscope } from "./gyroscope";

import * as glm from "gl-matrix";
import * as objmodels from "./objmodels";
import * as shadersources from "./shadersources";

export let gl: WebGL2RenderingContext;
let glCanvas: HTMLCanvasElement;

let shader: Shader;
let trajectoryShader: Shader;
let camera: Camera;

let Models: model.IModel[];
let Lights: DirectionalLight[];

let width: number;
let height: number;

let lastX: number = 0;
let lastY: number = 0;

let currentX: number = 0;
let currentY: number = 0;

let wheelOffset: number = 0;

let firstMove: boolean = true;
let mouseDown: boolean = false;

function glCanvasOnMouseDown(e: MouseEvent) {
  mouseDown = true;
}

function glCanvasOnMouseUp(e: MouseEvent) {
  mouseDown = false;
}

function glCanvasOnMouseMove(e: MouseEvent): void {
  var rect = glCanvas.getBoundingClientRect();
  currentX = e.clientX - rect.left;
  currentY = e.clientY - rect.top;

  if (firstMove) {
    lastX = currentX;
    lastY = currentY;
    firstMove = false;
  }
}

function glCanvasOnWheel(e: WheelEvent): void {
  wheelOffset = e.deltaY;
}

function glCanvasOnResize(): void {
  width = glCanvas.clientWidth;
  height = glCanvas.clientHeight;

  console.log(width, "  ", height);

  gl.canvas.width = width;
  gl.canvas.height = height;

  gl.viewport(0, 0, width, height);

  let proj: glm.mat4 = glm.mat4.create();
  proj = glm.mat4.identity(proj);

  glm.mat4.perspective(proj, glm.glMatrix.toRadian(45.0), width / height, 0.1, 1000);

  shader.use();
  shader.setMat4("proj", proj as Float32Array);

  trajectoryShader.use();
  trajectoryShader.setMat4("proj", proj as Float32Array);
}

let gyroscope: Gyroscope;
let trajectory: Trajectory;
let gyroRunning: boolean = false;

let min: number = 0;
let sec: number = 0;
let ms: number = 0;
let timerRunning: boolean = false;

function updateTimer(dt: number): void {
  if (timerRunning) {
    ms += dt * 1000;

    if (ms >= 1000) {
      ms = 0;
      sec++;
    }

    if (sec >= 60) {
      min++;
      sec = 0;
    }
  }

  let msecond: string = "000";
  let seconds: string = sec < 10 ? "0" + sec : sec.toString();
  let minutes: string = min < 10 ? "0" + min : min.toString();

  if (ms < 10) msecond = "00" + ms;
  else if (ms < 100) msecond = "0" + ms;
  else msecond = ms.toString();

  document.getElementById("timer__milliseconds").innerHTML = msecond;
  document.getElementById("timer__seconds").innerHTML = seconds;
  document.getElementById("timer__minutes").innerHTML = minutes;
}

function TimerControl() {
  if (document.getElementById("check").classList.contains("is-checked")) {
    document.getElementById("start-timer").classList.add("disabled");

    document.getElementById("start").onclick = function (ev: MouseEvent) {
      gyroRunning = true;
      document.getElementById("start").classList.add("disabled");
      timerRunning = true;

      setTimeout(function () {
        document.getElementById("timer__checkbox").classList.add("disabled");
      }, 250);
      document.getElementById("polyline").classList.add("disabled");
    };

    document.getElementById("pause").onclick = function (ev: MouseEvent) {
      gyroRunning = false;
      document.getElementById("pause").classList.add("disabled");
      timerRunning = false;
    };

    document.getElementById("reset").onclick = function (ev: MouseEvent) {
      gyroRunning = false;
      gyroscope.Reset();
      trajectory.Clear();

      document.getElementById("reset").classList.add("disabled");
      timerRunning = false;

      document.getElementById("timer__milliseconds").innerHTML = "000";
      document.getElementById("timer__seconds").innerHTML = "00";
      document.getElementById("timer__minutes").innerHTML = "00";

      min = 0;
      sec = 0;
      ms = 0;

      setTimeout(function () {
        document.getElementById("timer__checkbox").classList.remove("disabled");
      }, 250);
      document.getElementById("polyline").classList.remove("disabled");
    };
  } else {
    document.getElementById("start-timer").classList.remove("disabled");

    document.getElementById("start").onclick = function (ev: MouseEvent) {
      gyroRunning = true;
      document.getElementById("start").classList.add("disabled");

      document.getElementById("timer__checkbox").classList.add("disabled");
    };

    document.getElementById("pause").onclick = function (ev: MouseEvent) {
      gyroRunning = false;
      document.getElementById("pause").classList.add("disabled");
    };

    document.getElementById("reset").onclick = function (ev: MouseEvent) {
      gyroRunning = false;
      gyroscope.Reset();
      trajectory.Clear();

      document.getElementById("reset").classList.add("disabled");
      document.getElementById("timer__checkbox").classList.remove("disabled");
    };
  }
}

function startup(): void {
  // Init canvas
  glCanvas = document.getElementById("canvas") as HTMLCanvasElement;

  glCanvas.addEventListener("mousemove", glCanvasOnMouseMove);
  glCanvas.addEventListener("wheel", glCanvasOnWheel);
  glCanvas.addEventListener("mousedown", glCanvasOnMouseDown);
  glCanvas.addEventListener("mouseup", glCanvasOnMouseUp);

  gl = glCanvas.getContext("webgl2");

  width = glCanvas.clientWidth;
  height = glCanvas.clientHeight;

  gl.canvas.width = width;
  gl.canvas.height = height;
  gl.viewport(0, 0, width, height);

  // Init scene shader
  shader = new Shader(shadersources.vertBase, shadersources.FragBase);
  // Init trajectory shader
  trajectoryShader = new Shader(shadersources.vertTrajectory, shadersources.FragTrajectory);
  // Init camera
  camera = new Camera();

  // Load models
  let floor: model.Model = new model.Model();
  model.LoadModel(objmodels.floor, "assets/floorMat.jpg", floor);
  let table: model.Model = new model.Model();
  model.LoadModel(objmodels.table, "assets/tableMat.jpg", table);

  // Init gyroscope
  gyroscope = new Gyroscope(
    parseFloat((document.getElementById("distance") as HTMLInputElement).value),
    parseFloat((document.getElementById("mass") as HTMLInputElement).value),
    parseFloat((document.getElementById("radius") as HTMLInputElement).value),
    parseFloat((document.getElementById("rotation-speed") as HTMLInputElement).value),
    parseFloat((document.getElementById("initial-speed") as HTMLInputElement).value),
    glm.glMatrix.toRadian(parseFloat((document.getElementById("initial-angle") as HTMLInputElement).value))
  );

  // Init trajectory
  trajectory = new Trajectory(2000);

  // Push models to model-container
  Models = [];

  Models.push(gyroscope.axis);
  Models.push(gyroscope.disk);
  Models.push(gyroscope.box);
  Models.push(gyroscope.stand);
  Models.push(table);
  Models.push(floor);

  // Load lights
  Lights = [];
  Lights.push(new DirectionalLight([0.0, -1.0, 0.0], [0.1, 0.1, 0.1], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
  Lights.push(new DirectionalLight([0.0, 0.0, -1.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
  Lights.push(new DirectionalLight([0.0, 0.0, 1.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
  Lights.push(new DirectionalLight([1.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
  Lights.push(new DirectionalLight([-1.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));

  // Set light
  shader.use();
  let i: number = 0;
  for (let light of Lights) {
    shader.setVec3("lights[" + i + "].ambient", light.ambient as Float32Array);
    shader.setVec3("lights[" + i + "].diffuse", light.diffuse as Float32Array);
    shader.setVec3("lights[" + i + "].specular", light.specular as Float32Array);
    shader.setVec3("lights[" + i + "].direction", light.direction as Float32Array);
    i++;
  }

  // Set projection matrix
  let proj: glm.mat4 = glm.mat4.create();
  proj = glm.mat4.identity(proj);
  glm.mat4.perspective(proj, glm.glMatrix.toRadian(45.0), width / height, 0.1, 1000);
  shader.setMat4("proj", proj as Float32Array);

  trajectoryShader.use();
  trajectoryShader.setMat4("t_proj", proj as Float32Array);

  // Init Buttons
  document.getElementById("start").addEventListener("click", function (ev: MouseEvent) {
    gyroRunning = true;
    document.getElementById("start").classList.add("disabled");

    document.getElementById("timer__checkbox").classList.add("disabled");
  });

  document.getElementById("pause").addEventListener("click", function (ev: MouseEvent) {
    gyroRunning = false;
    document.getElementById("pause").classList.add("disabled");
  });

  document.getElementById("reset").addEventListener("click", function (ev: MouseEvent) {
    gyroRunning = false;
    gyroscope.Reset();
    trajectory.Clear();

    document.getElementById("reset").classList.add("disabled");
    document.getElementById("timer__checkbox").classList.remove("disabled");
  });

  // Init sliders
  (document.getElementById("distance") as HTMLInputElement).addEventListener("input", function () {
    gyroscope.length = parseFloat(this.value);
    gyroscope.SetTransform();

    trajectory.Clear();
  });

  (document.getElementById("mass") as HTMLInputElement).addEventListener("input", function () {
    gyroscope.mass = parseFloat(this.value);
    gyroscope.SetTransform();

    trajectory.Clear();
  });

  (document.getElementById("radius") as HTMLInputElement).addEventListener("input", function () {
    gyroscope.radius = parseFloat(this.value);
    gyroscope.SetTransform();

    trajectory.Clear();
  });

  (document.getElementById("rotation-speed") as HTMLInputElement).addEventListener("input", function () {
    gyroscope.psi_dot = parseFloat(this.value);
    gyroscope.SetTransform();

    trajectory.Clear();
  });

  (document.getElementById("initial-speed") as HTMLInputElement).addEventListener("input", function () {
    gyroscope.phi_dot = parseFloat(this.value);
    gyroscope.SetTransform();

    trajectory.Clear();
  });

  (document.getElementById("initial-angle") as HTMLInputElement).addEventListener("input", function () {
    gyroscope.theta = glm.glMatrix.toRadian(parseFloat(this.value));
    gyroscope.SetTransform();

    trajectory.Clear();
  });

  document.getElementById("start-timer").onclick = function () {
    document.getElementById("start-timer").classList.add("disabled");
    document.getElementById("pause-timer").classList.remove("disabled");
    document.getElementById("reset-timer").classList.remove("disabled");
    timerRunning = true;

    document.getElementById("timer__checkbox").classList.add("disabled");
  };

  document.getElementById("pause-timer").onclick = function () {
    document.getElementById("start-timer").classList.remove("disabled");
    document.getElementById("pause-timer").classList.add("disabled");
    timerRunning = false;
  };

  document.getElementById("reset-timer").onclick = function () {
    document.getElementById("pause-timer").classList.add("disabled");
    document.getElementById("reset-timer").classList.add("disabled");
    document.getElementById("start-timer").classList.remove("disabled");

    document.getElementById("timer__milliseconds").innerHTML = "000";
    document.getElementById("timer__seconds").innerHTML = "00";
    document.getElementById("timer__minutes").innerHTML = "00";

    min = 0;
    sec = 0;
    ms = 0;

    timerRunning = false;

    if (!gyroRunning) document.getElementById("timer__checkbox").classList.remove("disabled");
  };

  document.getElementById("timer__checkbox").onclick = function () {
    document.getElementById("check").classList.toggle("is-checked");
    TimerControl();
  };
}

let currentTime: number = 0;
let lastTime: number = 0;
let firstTime: boolean = true;

function draw(): void {
  // Calculate dt
  if (firstTime) {
    currentTime = new Date().getTime();
    lastTime = currentTime;
    firstTime = false;
  }

  currentTime = new Date().getTime();
  let dt: number = (currentTime - lastTime) / 1000;

  glCanvasOnResize();

  // Clear scene
  gl.clearColor(0.82, 0.88, 0.94, 1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Process mouse input for camera
  if (mouseDown) camera.ProcessMouseMovement(currentX - lastX, currentY - lastY);
  lastX = currentX;
  lastY = currentY;

  camera.ProcessMouseWheel(wheelOffset);
  wheelOffset = 0;
  let view: glm.mat4 = camera.GetLookAt();

  // Update gyroscope
  if (gyroRunning) {
    for (let i: number = 0; i * 0.0001 < dt / 3; i++) gyroscope.Update(0.0001);
    trajectory.AddPoint(gyroscope.phi, gyroscope.theta);
  }

  // Set scene shader
  shader.use();
  shader.setMat4("view", view as Float32Array);
  shader.setVec3("viewPos", camera.position as Float32Array);

  // Draw models
  for (let model of Models) {
    model.array.use();
    model.texture.Use();
    shader.setMat4("model", model.modelMat as Float32Array);

    gl.drawArrays(gl.TRIANGLES, 0, model.array.size);
  }

  // Draw trajectory
  trajectoryShader.use();
  trajectoryShader.setMat4("t_view", view as Float32Array);
  gl.lineWidth(4.0);
  trajectory.Draw();

  //Update timer
  if (timerRunning) updateTimer(dt);

  // Next frame
  lastTime = currentTime;
  window.requestAnimationFrame(draw);
}

startup();
draw();
