import { Shader } from "./shader";
import { Camera } from "./camera";
import { DirectionalLight } from "./directionalLight";

import * as model from "./model";
import * as gyro from "./gyroscope";

import * as glm from "gl-matrix";
import * as objmodels from "./objmodels";
import * as shadersources from "./shadersources";

export let gl: WebGL2RenderingContext | null;
let glCanvas: HTMLElement | null;

let shader: Shader;
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

let gyroscope: gyro.Gyroscope;

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

  gl.canvas.width = width;
  gl.canvas.height = height;

  gl.viewport(0, 0, width, height);
}

function startup(): void {
  glCanvas = document.getElementById("canvas");

  glCanvas.addEventListener("mousemove", glCanvasOnMouseMove);
  glCanvas.addEventListener("wheel", glCanvasOnWheel);
  glCanvas.addEventListener("resize", glCanvasOnResize);
  glCanvas.addEventListener("mousedown", glCanvasOnMouseDown);
  glCanvas.addEventListener("mouseup", glCanvasOnMouseUp);

  gl = (glCanvas as HTMLCanvasElement).getContext("webgl2");

  width = glCanvas.clientWidth;
  height = glCanvas.clientHeight;

  gl.canvas.width = width;
  gl.canvas.height = height;
  gl.viewport(0, 0, width, height);

  shader = new Shader(shadersources.vertBase, shadersources.FragBase);
  camera = new Camera();

  let floor: model.Model = new model.Model();
  model.LoadModel(objmodels.floor, "assets/floorMat.jpg", floor);
  gyroscope = gyro.LoadGyroscope();
  let table: model.Model = new model.Model();
  model.LoadModel(objmodels.table, "assets/tableMat.jpg", table);

  glm.mat4.translate(gyroscope.disk.modelMat, gyroscope.disk.modelMat, [0.0, 0.0, 2.5]);

  Models = [];

  Models.push(gyroscope.axis);
  Models.push(gyroscope.disk);
  Models.push(gyroscope.box);
  Models.push(gyroscope.stand);
  Models.push(table);
  Models.push(floor);

  Lights = [];
  Lights.push(new DirectionalLight([0.0, -1.0, 0.0], [0.1, 0.1, 0.1], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
  Lights.push(new DirectionalLight([0.0, 0.0, -1.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
  Lights.push(new DirectionalLight([0.0, 0.0, 1.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
  Lights.push(new DirectionalLight([1.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
  Lights.push(new DirectionalLight([-1.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));

  shader.use();
  let i: number = 0;
  for (let light of Lights) {
    shader.setVec3("lights[" + i + "].ambient", light.ambient as Float32Array);
    shader.setVec3("lights[" + i + "].diffuse", light.diffuse as Float32Array);
    shader.setVec3("lights[" + i + "].specular", light.specular as Float32Array);
    shader.setVec3("lights[" + i + "].direction", light.direction as Float32Array);
    i++;
  }

  let proj: glm.mat4 = glm.mat4.create();
  proj = glm.mat4.identity(proj);
  glm.mat4.perspective(proj, glm.glMatrix.toRadian(45.0), width / height, 0.1, 1000);
  shader.setMat4("proj", proj as Float32Array);
}

function draw(): void {
  gl.clearColor(0.82, 0.88, 0.94, 1.0);
  gl.enable(gl.DEPTH_TEST);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  if (mouseDown) camera.ProcessMouseMovement(currentX - lastX, currentY - lastY);

  lastX = currentX;
  lastY = currentY;

  camera.ProcessMouseWheel(wheelOffset);
  wheelOffset = 0;

  let view: glm.mat4 = camera.GetLookAt();

  shader.use();
  shader.setMat4("view", view as Float32Array);
  shader.setVec3("viewPos", camera.position as Float32Array);

  for (let model of Models) {
    model.array.use();
    model.texture.Use();
    shader.setMat4("model", model.modelMat as Float32Array);

    gl.drawArrays(gl.TRIANGLES, 0, model.array.size);
  }

  window.requestAnimationFrame(draw);
}

startup();
draw();
