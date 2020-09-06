/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (value, mode) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", { enumerable: true, value: value });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              });
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, "default", { enumerable: true, value: v });
            }
          : function (o, v) {
              o["default"] = v;
            });
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
          __setModuleDefault(result, mod);
          return result;
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.gl = void 0;
      var shader_1 = __webpack_require__(4);
      var camera_1 = __webpack_require__(5);
      var directionalLight_1 = __webpack_require__(6);
      var trajectory_1 = __webpack_require__(7);
      var model = __importStar(__webpack_require__(2));
      var gyroscope_1 = __webpack_require__(11);
      var glm = __importStar(__webpack_require__(1));
      var objmodels = __importStar(__webpack_require__(3));
      var shadersources = __importStar(__webpack_require__(12));
      var glCanvas;
      var shader;
      var trajectoryShader;
      var camera;
      var Models;
      var Lights;
      var width;
      var height;
      var lastX = 0;
      var lastY = 0;
      var currentX = 0;
      var currentY = 0;
      var wheelOffset = 0;
      var firstMove = true;
      var mouseDown = false;

      let ThetaFromPhiDataX = [];
      let ThetaFromPhiDataY = [];

      let ThetaFromTDataX = [];
      let ThetaFromTDataY = [];

      let KineticDataX = [];
      let KineticDataY = [];

      let PotentialDataX = [];
      let PotentialDataY = [];

      let TotalDataX = [];
      let TotalDataY = [];

      let brdThetaFromPhi;
      let ThetaFromPhiPlot;

      let brdThetaFromT;
      let ThetaFromTPlot;

      let brdKinetic;
      let KineticPlot;

      let brdPotential;
      let PotentialPlot;

      let brdTotal;
      let TotalPlot;

      let time = 0;

      function CreatePlots() {
        // Theta from phi
        brdThetaFromPhi = JXG.JSXGraph.initBoard("ThetaFromPhi", {
          boundingbox: [-0.5, 3, 2, -0.3],
          grid: true,
          keepAspectRatio: true,
          showCopyright: false,
          showNavigation: false,
          pan: {
            enabled: true,
            needShift: false,
          },
          zoom: {
            factorX: 1.25,
            factorY: 1.25,
            wheel: true,
            needShift: false,
            min: 0.1,
            max: 10.0,
          },
        });

        brdThetaFromPhi.create(
          "axis",
          [
            [0, 0],
            [1, 0],
          ],
          {
            name: "$$φ$$",
            withLabel: true,
            label: { position: "rt", offset: [-6, -15] },
          }
        );

        brdThetaFromPhi.create(
          "axis",
          [
            [0, 0],
            [0, 1],
          ],
          {
            name: "$$θ$$",
            withLabel: true,
            label: { position: "rt", offset: [8, -3] },
          }
        );

        brdThetaFromPhi.suspendUpdate();

        ThetaFromPhiPlot = brdThetaFromPhi.create("curve", [ThetaFromPhiDataX, ThetaFromPhiDataY], { strokeWidth: 3, strokeColor: "#1e28ff" });
        brdThetaFromPhi.unsuspendUpdate();

        // Theta from time
        brdThetaFromT = JXG.JSXGraph.initBoard("ThetaFromT", {
          boundingbox: [-0.5, 3, 2, -0.3],
          grid: true,
          keepAspectRatio: true,
          showCopyright: false,
          showNavigation: false,
          pan: {
            enabled: true,
            needShift: false,
          },
          zoom: {
            factorX: 1.25,
            factorY: 1.25,
            wheel: true,
            needShift: false,
            min: 0.1,
            max: 10.0,
          },
        });

        brdThetaFromT.create(
          "axis",
          [
            [0, 0],
            [1, 0],
          ],
          {
            name: "$$t$$",
            withLabel: true,
            label: { position: "rt", offset: [-1, -18] },
          }
        );

        brdThetaFromT.create(
          "axis",
          [
            [0, 0],
            [0, 1],
          ],
          {
            name: "$$θ$$",
            withLabel: true,
            label: { position: "rt", offset: [8, -3] },
          }
        );

        brdThetaFromT.suspendUpdate();

        ThetaFromTPlot = brdThetaFromT.create("curve", [ThetaFromTDataX, ThetaFromTDataY], { strokeWidth: 3, strokeColor: "#1e28ff" });
        brdThetaFromT.unsuspendUpdate();

        // Kinetic energy from time
        brdKinetic = JXG.JSXGraph.initBoard("kinetic", {
          boundingbox: [-0.5, 3, 2, -0.3],
          grid: true,
          keepAspectRatio: true,
          showCopyright: false,
          showNavigation: false,
          pan: {
            enabled: true,
            needShift: false,
          },
          zoom: {
            factorX: 1.25,
            factorY: 1.25,
            wheel: true,
            needShift: false,
            min: 0.1,
            max: 10.0,
          },
        });

        brdKinetic.create(
          "axis",
          [
            [0, 0],
            [1, 0],
          ],
          {
            name: "$$t$$",
            withLabel: true,
            label: { position: "rt", offset: [-1, -18] },
          }
        );

        brdKinetic.create(
          "axis",
          [
            [0, 0],
            [0, 1],
          ],
          {
            name: "$$Ek$$",
            withLabel: true,
            label: { position: "rt", offset: [6, -5] },
          }
        );

        brdKinetic.suspendUpdate();

        KineticPlot = brdKinetic.create("curve", [KineticDataX, KineticDataY], { strokeWidth: 3, strokeColor: "#1e28ff" });
        brdKinetic.unsuspendUpdate();

        // Potential energy from time
        brdPotential = JXG.JSXGraph.initBoard("potential", {
          boundingbox: [-0.5, 3, 2, -0.3],
          grid: true,
          keepAspectRatio: true,
          showCopyright: false,
          showNavigation: false,
          pan: {
            enabled: true,
            needShift: false,
          },
          zoom: {
            factorX: 1.25,
            factorY: 1.25,
            wheel: true,
            needShift: false,
            min: 0.1,
            max: 10.0,
          },
        });

        brdPotential.create(
          "axis",
          [
            [0, 0],
            [1, 0],
          ],
          {
            name: "$$t$$",
            withLabel: true,
            label: { position: "rt", offset: [-1, -18] },
          }
        );

        brdPotential.create(
          "axis",
          [
            [0, 0],
            [0, 1],
          ],
          {
            name: "$$U$$",
            withLabel: true,
            label: { position: "rt", offset: [7, -5] },
          }
        );

        brdPotential.suspendUpdate();

        PotentialPlot = brdPotential.create("curve", [PotentialDataX, PotentialDataY], { strokeWidth: 3, strokeColor: "#1e28ff" });
        brdPotential.unsuspendUpdate();

        // Total energy from time
        brdTotal = JXG.JSXGraph.initBoard("total", {
          boundingbox: [-0.5, 3, 2, -0.3],
          grid: true,
          keepAspectRatio: true,
          showCopyright: false,
          showNavigation: false,
          pan: {
            enabled: true,
            needShift: false,
          },
          zoom: {
            factorX: 1.25,
            factorY: 1.25,
            wheel: true,
            needShift: false,
            min: 0.1,
            max: 10.0,
          },
        });

        brdTotal.create(
          "axis",
          [
            [0, 0],
            [1, 0],
          ],
          {
            name: "$$t$$",
            withLabel: true,
            label: { position: "rt", offset: [-1, -18] },
          }
        );

        brdTotal.create(
          "axis",
          [
            [0, 0],
            [0, 1],
          ],
          {
            name: "$$E$$",
            withLabel: true,
            label: { position: "rt", offset: [6, -5] },
          }
        );

        brdTotal.suspendUpdate();

        TotalPlot = brdTotal.create("curve", [TotalDataX, TotalDataY], { strokeWidth: 3, strokeColor: "#1e28ff" });
        brdTotal.unsuspendUpdate();
      }

      function UpdatePlots(gyroscope, time) {
        // Draw graphs

        // Theta from phi
        ThetaFromPhiDataX.push(gyroscope.GetPhi());
        ThetaFromPhiDataY.push(gyroscope.GetTheta());

        brdThetaFromPhi.suspendUpdate();
        brdThetaFromPhi.unsuspendUpdate();

        // Theta from time
        ThetaFromTDataX.push(time);
        ThetaFromTDataY.push(gyroscope.GetTheta());

        brdThetaFromT.suspendUpdate();
        brdThetaFromT.unsuspendUpdate();

        // Kinetic energy from time
        KineticDataX.push(time);
        KineticDataY.push(gyroscope.GetEk());

        brdKinetic.suspendUpdate();
        brdKinetic.unsuspendUpdate();

        // Potential energy from time
        PotentialDataX.push(time);
        PotentialDataY.push(gyroscope.GetU());

        brdPotential.suspendUpdate();
        brdPotential.unsuspendUpdate();

        // Total energy from time
        TotalDataX.push(time);
        TotalDataY.push(gyroscope.GetE());

        brdTotal.suspendUpdate();
        brdTotal.unsuspendUpdate();
      }

      // Clear graphs
      function ClearPlots() {
        // Theta from phi
        ThetaFromPhiDataX = [];
        ThetaFromPhiDataY = [];

        brdThetaFromPhi.removeObject(ThetaFromPhiPlot);
        ThetaFromPhiPlot = brdThetaFromPhi.create("curve", [ThetaFromPhiDataX, ThetaFromPhiDataY], { strokeWidth: 3, strokeColor: "#1e28ff" });

        // Theta from time
        ThetaFromTDataX = [];
        ThetaFromTDataY = [];

        time = 0;

        brdThetaFromT.removeObject(ThetaFromTPlot);
        ThetaFromTPlot = brdThetaFromT.create("curve", [ThetaFromTDataX, ThetaFromTDataY], { strokeWidth: 3, strokeColor: "#1e28ff" });

        // Kinetic energy from time
        KineticDataX = [];
        KineticDataY = [];

        brdKinetic.removeObject(KineticPlot);
        KineticPlot = brdKinetic.create("curve", [KineticDataX, KineticDataY], { strokeWidth: 3, strokeColor: "#1e28ff" });

        // Potential energy from time
        PotentialDataX = [];
        PotentialDataY = [];

        brdPotential.removeObject(PotentialPlot);
        PotentialPlot = brdPotential.create("curve", [PotentialDataX, PotentialDataY], { strokeWidth: 3, strokeColor: "#1e28ff" });

        // Total energy from time
        TotalDataX = [];
        TotalDataY = [];

        brdTotal.removeObject(TotalPlot);
        TotalPlot = brdTotal.create("curve", [TotalDataX, TotalDataY], { strokeWidth: 3, strokeColor: "#1e28ff" });
      }

      // Update graphs on resize
      $(window).resize(function () {
        // Theta from phi
        brdThetaFromPhi.resizeContainer($("#ThetaFromPhi").width(), $("#ThetaFromPhi").height(), true, true);
        brdThetaFromPhi.setBoundingBox([-0.5, 3, 2, -0.3], false);

        // Theta from time
        brdThetaFromT.resizeContainer($("#ThetaFromT").width(), $("#ThetaFromT").height(), true, true);
        brdThetaFromT.setBoundingBox([-0.5, 3, 2, -0.3], false);

        // Kinetic energy from time
        brdKinetic.resizeContainer($("#kinetic").width(), $("#kinetic").height(), true, true);
        brdKinetic.setBoundingBox([-0.5, 3, 2, -0.3], false);

        // Potential energy from time
        brdPotential.resizeContainer($("#potential").width(), $("#potential").height(), true, true);
        brdPotential.setBoundingBox([-0.5, 3, 2, -0.3], false);

        // Total energy from time
        brdTotal.resizeContainer($("#total").width(), $("#total").height(), true, true);
        brdTotal.setBoundingBox([-0.5, 3, 2, -0.3], false);
      });

      function glCanvasOnMouseDown(e) {
        mouseDown = true;
      }
      function glCanvasOnMouseUp(e) {
        mouseDown = false;
      }
      function glCanvasOnMouseMove(e) {
        var rect = glCanvas.getBoundingClientRect();
        currentX = e.clientX - rect.left;
        currentY = e.clientY - rect.top;
        if (firstMove) {
          lastX = currentX;
          lastY = currentY;
          firstMove = false;
        }
      }
      function glCanvasOnWheel(e) {
        wheelOffset = e.deltaY;
      }
      function glCanvasOnResize() {
        width = glCanvas.clientWidth;
        height = glCanvas.clientHeight;
        console.log(width, "  ", height);
        exports.gl.canvas.width = width;
        exports.gl.canvas.height = height;
        exports.gl.viewport(0, 0, width, height);
        var proj = glm.mat4.create();
        proj = glm.mat4.identity(proj);
        glm.mat4.perspective(proj, glm.glMatrix.toRadian(45.0), width / height, 0.1, 1000);
        shader.use();
        shader.setMat4("proj", proj);
        trajectoryShader.use();
        trajectoryShader.setMat4("proj", proj);
      }
      var gyroscope;
      var trajectory;
      var gyroRunning = false;
      var min = 0;
      var sec = 0;
      var ms = 0;
      var timerRunning = false;
      function updateTimer(dt) {
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
        var msecond = "000";
        var seconds = sec < 10 ? "0" + sec : sec.toString();
        var minutes = min < 10 ? "0" + min : min.toString();
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
          document.getElementById("start").onclick = function (ev) {
            gyroRunning = true;
            document.getElementById("start").classList.add("disabled");
            timerRunning = true;
            setTimeout(function () {
              document.getElementById("timer__checkbox").classList.add("disabled");
            }, 250);
            document.getElementById("polyline").classList.add("disabled");
          };
          document.getElementById("pause").onclick = function (ev) {
            gyroRunning = false;
            document.getElementById("pause").classList.add("disabled");
            timerRunning = false;
          };
          document.getElementById("reset").onclick = function (ev) {
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
          document.getElementById("start").onclick = function (ev) {
            gyroRunning = true;
            document.getElementById("start").classList.add("disabled");
            document.getElementById("timer__checkbox").classList.add("disabled");
          };
          document.getElementById("pause").onclick = function (ev) {
            gyroRunning = false;
            document.getElementById("pause").classList.add("disabled");
          };
          document.getElementById("reset").onclick = function (ev) {
            gyroRunning = false;
            gyroscope.Reset();
            trajectory.Clear();
            document.getElementById("reset").classList.add("disabled");
            document.getElementById("timer__checkbox").classList.remove("disabled");
          };
        }
      }
      function startup() {
        // Init canvas
        glCanvas = document.getElementById("canvas");
        glCanvas.addEventListener("mousemove", glCanvasOnMouseMove);
        glCanvas.addEventListener("wheel", glCanvasOnWheel);
        glCanvas.addEventListener("mousedown", glCanvasOnMouseDown);
        glCanvas.addEventListener("mouseup", glCanvasOnMouseUp);
        exports.gl = glCanvas.getContext("webgl2");
        width = glCanvas.clientWidth;
        height = glCanvas.clientHeight;
        exports.gl.canvas.width = width;
        exports.gl.canvas.height = height;
        exports.gl.viewport(0, 0, width, height);
        // Init scene shader
        shader = new shader_1.Shader(shadersources.vertBase, shadersources.FragBase);
        // Init trajectory shader
        trajectoryShader = new shader_1.Shader(shadersources.vertTrajectory, shadersources.FragTrajectory);
        // Init camera
        camera = new camera_1.Camera();
        // Load models
        var floor = new model.Model();
        model.LoadModel(objmodels.floor, "assets/floorMat.jpg", floor);
        var table = new model.Model();
        model.LoadModel(objmodels.table, "assets/tableMat.jpg", table);
        // Init gyroscope
        gyroscope = new gyroscope_1.Gyroscope(
          parseFloat(document.getElementById("distance").value),
          parseFloat(document.getElementById("mass").value),
          parseFloat(document.getElementById("radius").value),
          parseFloat(document.getElementById("rotation-speed").value),
          parseFloat(document.getElementById("initial-speed").value),
          glm.glMatrix.toRadian(parseFloat(document.getElementById("initial-angle").value))
        );
        // Init trajectory
        trajectory = new trajectory_1.Trajectory(2000);
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
        Lights.push(new directionalLight_1.DirectionalLight([0.0, -1.0, 0.0], [0.1, 0.1, 0.1], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
        Lights.push(new directionalLight_1.DirectionalLight([0.0, 0.0, -1.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
        Lights.push(new directionalLight_1.DirectionalLight([0.0, 0.0, 1.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
        Lights.push(new directionalLight_1.DirectionalLight([1.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
        Lights.push(new directionalLight_1.DirectionalLight([-1.0, 0.0, 0.0], [0.0, 0.0, 0.0], [0.7, 0.7, 0.7], [0.2, 0.2, 0.2]));
        // Set light
        shader.use();
        var i = 0;
        for (var _i = 0, Lights_1 = Lights; _i < Lights_1.length; _i++) {
          var light = Lights_1[_i];
          shader.setVec3("lights[" + i + "].ambient", light.ambient);
          shader.setVec3("lights[" + i + "].diffuse", light.diffuse);
          shader.setVec3("lights[" + i + "].specular", light.specular);
          shader.setVec3("lights[" + i + "].direction", light.direction);
          i++;
        }
        // Set projection matrix
        var proj = glm.mat4.create();
        proj = glm.mat4.identity(proj);
        glm.mat4.perspective(proj, glm.glMatrix.toRadian(45.0), width / height, 0.1, 1000);
        shader.setMat4("proj", proj);
        trajectoryShader.use();
        trajectoryShader.setMat4("t_proj", proj);
        // Init Buttons
        document.getElementById("start").addEventListener("click", function (ev) {
          gyroRunning = true;
          document.getElementById("start").classList.add("disabled");
          document.getElementById("timer__checkbox").classList.add("disabled");
        });
        document.getElementById("pause").addEventListener("click", function (ev) {
          gyroRunning = false;
          document.getElementById("pause").classList.add("disabled");
        });
        document.getElementById("reset").addEventListener("click", function (ev) {
          gyroRunning = false;
          gyroscope.Reset();
          trajectory.Clear();
          document.getElementById("reset").classList.add("disabled");
          document.getElementById("timer__checkbox").classList.remove("disabled");

          ClearPlots();
        });
        // Init sliders
        document.getElementById("distance").addEventListener("input", function () {
          gyroscope.length = parseFloat(this.value);
          gyroscope.SetTransform();
          trajectory.Clear();

          ClearPlots();
        });
        document.getElementById("mass").addEventListener("input", function () {
          gyroscope.mass = parseFloat(this.value);
          gyroscope.SetTransform();
          trajectory.Clear();

          ClearPlots();
        });
        document.getElementById("radius").addEventListener("input", function () {
          gyroscope.radius = parseFloat(this.value);
          gyroscope.SetTransform();
          trajectory.Clear();

          ClearPlots();
        });
        document.getElementById("rotation-speed").addEventListener("input", function () {
          gyroscope.psi_dot = parseFloat(this.value);
          gyroscope.SetTransform();
          trajectory.Clear();

          ClearPlots();
        });
        document.getElementById("initial-speed").addEventListener("input", function () {
          gyroscope.phi_dot = parseFloat(this.value);
          gyroscope.SetTransform();
          trajectory.Clear();

          ClearPlots();
        });
        document.getElementById("initial-angle").addEventListener("input", function () {
          gyroscope.theta = glm.glMatrix.toRadian(parseFloat(this.value));
          gyroscope.SetTransform();
          trajectory.Clear();

          ClearPlots();
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

        CreatePlots();
      }

      var currentTime = 0;
      var lastTime = 0;
      var firstTime = true;
      function draw() {
        // Calculate dt
        if (firstTime) {
          currentTime = new Date().getTime();
          lastTime = currentTime;
          firstTime = false;
        }
        currentTime = new Date().getTime();
        var dt = (currentTime - lastTime) / 1000;
        glCanvasOnResize();
        // Clear scene
        exports.gl.clearColor(0.82, 0.88, 0.94, 1.0);
        exports.gl.enable(exports.gl.DEPTH_TEST);
        exports.gl.clear(exports.gl.COLOR_BUFFER_BIT | exports.gl.DEPTH_BUFFER_BIT);
        // Process mouse input for camera
        if (mouseDown) camera.ProcessMouseMovement(currentX - lastX, currentY - lastY);
        lastX = currentX;
        lastY = currentY;
        camera.ProcessMouseWheel(wheelOffset);
        wheelOffset = 0;
        var view = camera.GetLookAt();
        // Update gyroscope
        if (gyroRunning) {
          for (var i = 0; i * 0.0001 < dt / 3; i++) gyroscope.Update(0.0001);
          trajectory.AddPoint(gyroscope.phi, gyroscope.theta);
        }
        // Set scene shader
        shader.use();
        shader.setMat4("view", view);
        shader.setVec3("viewPos", camera.position);
        // Draw models
        for (var _i = 0, Models_1 = Models; _i < Models_1.length; _i++) {
          var model_1 = Models_1[_i];
          model_1.array.use();
          model_1.texture.Use();
          shader.setMat4("model", model_1.modelMat);
          exports.gl.drawArrays(exports.gl.TRIANGLES, 0, model_1.array.size);
        }
        // Draw trajectory
        trajectoryShader.use();
        trajectoryShader.setMat4("t_view", view);
        exports.gl.lineWidth(4.0);
        trajectory.Draw();
        //Update timer
        if (timerRunning) updateTimer(dt);
        // Update plots
        if (gyroRunning) {
          time += dt;
          UpdatePlots(gyroscope, time);
        }
        // Next frame
        lastTime = currentTime;
        window.requestAnimationFrame(draw);
      }
      startup();
      draw();

      /***/
    },
    /* 1 */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      // ESM COMPAT FLAG
      __webpack_require__.r(__webpack_exports__);

      // EXPORTS
      __webpack_require__.d(__webpack_exports__, "glMatrix", function () {
        return /* reexport */ common_namespaceObject;
      });
      __webpack_require__.d(__webpack_exports__, "mat2", function () {
        return /* reexport */ mat2_namespaceObject;
      });
      __webpack_require__.d(__webpack_exports__, "mat2d", function () {
        return /* reexport */ mat2d_namespaceObject;
      });
      __webpack_require__.d(__webpack_exports__, "mat3", function () {
        return /* reexport */ mat3_namespaceObject;
      });
      __webpack_require__.d(__webpack_exports__, "mat4", function () {
        return /* reexport */ mat4_namespaceObject;
      });
      __webpack_require__.d(__webpack_exports__, "quat", function () {
        return /* reexport */ quat_namespaceObject;
      });
      __webpack_require__.d(__webpack_exports__, "quat2", function () {
        return /* reexport */ quat2_namespaceObject;
      });
      __webpack_require__.d(__webpack_exports__, "vec2", function () {
        return /* reexport */ vec2_namespaceObject;
      });
      __webpack_require__.d(__webpack_exports__, "vec3", function () {
        return /* reexport */ vec3_namespaceObject;
      });
      __webpack_require__.d(__webpack_exports__, "vec4", function () {
        return /* reexport */ vec4_namespaceObject;
      });

      // NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/common.js
      var common_namespaceObject = {};
      __webpack_require__.r(common_namespaceObject);
      __webpack_require__.d(common_namespaceObject, "EPSILON", function () {
        return EPSILON;
      });
      __webpack_require__.d(common_namespaceObject, "ARRAY_TYPE", function () {
        return ARRAY_TYPE;
      });
      __webpack_require__.d(common_namespaceObject, "RANDOM", function () {
        return RANDOM;
      });
      __webpack_require__.d(common_namespaceObject, "setMatrixArrayType", function () {
        return setMatrixArrayType;
      });
      __webpack_require__.d(common_namespaceObject, "toRadian", function () {
        return toRadian;
      });
      __webpack_require__.d(common_namespaceObject, "equals", function () {
        return equals;
      });

      // NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat2.js
      var mat2_namespaceObject = {};
      __webpack_require__.r(mat2_namespaceObject);
      __webpack_require__.d(mat2_namespaceObject, "create", function () {
        return create;
      });
      __webpack_require__.d(mat2_namespaceObject, "clone", function () {
        return clone;
      });
      __webpack_require__.d(mat2_namespaceObject, "copy", function () {
        return copy;
      });
      __webpack_require__.d(mat2_namespaceObject, "identity", function () {
        return identity;
      });
      __webpack_require__.d(mat2_namespaceObject, "fromValues", function () {
        return fromValues;
      });
      __webpack_require__.d(mat2_namespaceObject, "set", function () {
        return set;
      });
      __webpack_require__.d(mat2_namespaceObject, "transpose", function () {
        return transpose;
      });
      __webpack_require__.d(mat2_namespaceObject, "invert", function () {
        return invert;
      });
      __webpack_require__.d(mat2_namespaceObject, "adjoint", function () {
        return adjoint;
      });
      __webpack_require__.d(mat2_namespaceObject, "determinant", function () {
        return determinant;
      });
      __webpack_require__.d(mat2_namespaceObject, "multiply", function () {
        return multiply;
      });
      __webpack_require__.d(mat2_namespaceObject, "rotate", function () {
        return rotate;
      });
      __webpack_require__.d(mat2_namespaceObject, "scale", function () {
        return mat2_scale;
      });
      __webpack_require__.d(mat2_namespaceObject, "fromRotation", function () {
        return fromRotation;
      });
      __webpack_require__.d(mat2_namespaceObject, "fromScaling", function () {
        return fromScaling;
      });
      __webpack_require__.d(mat2_namespaceObject, "str", function () {
        return str;
      });
      __webpack_require__.d(mat2_namespaceObject, "frob", function () {
        return frob;
      });
      __webpack_require__.d(mat2_namespaceObject, "LDU", function () {
        return LDU;
      });
      __webpack_require__.d(mat2_namespaceObject, "add", function () {
        return add;
      });
      __webpack_require__.d(mat2_namespaceObject, "subtract", function () {
        return subtract;
      });
      __webpack_require__.d(mat2_namespaceObject, "exactEquals", function () {
        return exactEquals;
      });
      __webpack_require__.d(mat2_namespaceObject, "equals", function () {
        return mat2_equals;
      });
      __webpack_require__.d(mat2_namespaceObject, "multiplyScalar", function () {
        return multiplyScalar;
      });
      __webpack_require__.d(mat2_namespaceObject, "multiplyScalarAndAdd", function () {
        return multiplyScalarAndAdd;
      });
      __webpack_require__.d(mat2_namespaceObject, "mul", function () {
        return mul;
      });
      __webpack_require__.d(mat2_namespaceObject, "sub", function () {
        return sub;
      });

      // NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat2d.js
      var mat2d_namespaceObject = {};
      __webpack_require__.r(mat2d_namespaceObject);
      __webpack_require__.d(mat2d_namespaceObject, "create", function () {
        return mat2d_create;
      });
      __webpack_require__.d(mat2d_namespaceObject, "clone", function () {
        return mat2d_clone;
      });
      __webpack_require__.d(mat2d_namespaceObject, "copy", function () {
        return mat2d_copy;
      });
      __webpack_require__.d(mat2d_namespaceObject, "identity", function () {
        return mat2d_identity;
      });
      __webpack_require__.d(mat2d_namespaceObject, "fromValues", function () {
        return mat2d_fromValues;
      });
      __webpack_require__.d(mat2d_namespaceObject, "set", function () {
        return mat2d_set;
      });
      __webpack_require__.d(mat2d_namespaceObject, "invert", function () {
        return mat2d_invert;
      });
      __webpack_require__.d(mat2d_namespaceObject, "determinant", function () {
        return mat2d_determinant;
      });
      __webpack_require__.d(mat2d_namespaceObject, "multiply", function () {
        return mat2d_multiply;
      });
      __webpack_require__.d(mat2d_namespaceObject, "rotate", function () {
        return mat2d_rotate;
      });
      __webpack_require__.d(mat2d_namespaceObject, "scale", function () {
        return mat2d_scale;
      });
      __webpack_require__.d(mat2d_namespaceObject, "translate", function () {
        return translate;
      });
      __webpack_require__.d(mat2d_namespaceObject, "fromRotation", function () {
        return mat2d_fromRotation;
      });
      __webpack_require__.d(mat2d_namespaceObject, "fromScaling", function () {
        return mat2d_fromScaling;
      });
      __webpack_require__.d(mat2d_namespaceObject, "fromTranslation", function () {
        return fromTranslation;
      });
      __webpack_require__.d(mat2d_namespaceObject, "str", function () {
        return mat2d_str;
      });
      __webpack_require__.d(mat2d_namespaceObject, "frob", function () {
        return mat2d_frob;
      });
      __webpack_require__.d(mat2d_namespaceObject, "add", function () {
        return mat2d_add;
      });
      __webpack_require__.d(mat2d_namespaceObject, "subtract", function () {
        return mat2d_subtract;
      });
      __webpack_require__.d(mat2d_namespaceObject, "multiplyScalar", function () {
        return mat2d_multiplyScalar;
      });
      __webpack_require__.d(mat2d_namespaceObject, "multiplyScalarAndAdd", function () {
        return mat2d_multiplyScalarAndAdd;
      });
      __webpack_require__.d(mat2d_namespaceObject, "exactEquals", function () {
        return mat2d_exactEquals;
      });
      __webpack_require__.d(mat2d_namespaceObject, "equals", function () {
        return mat2d_equals;
      });
      __webpack_require__.d(mat2d_namespaceObject, "mul", function () {
        return mat2d_mul;
      });
      __webpack_require__.d(mat2d_namespaceObject, "sub", function () {
        return mat2d_sub;
      });

      // NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat3.js
      var mat3_namespaceObject = {};
      __webpack_require__.r(mat3_namespaceObject);
      __webpack_require__.d(mat3_namespaceObject, "create", function () {
        return mat3_create;
      });
      __webpack_require__.d(mat3_namespaceObject, "fromMat4", function () {
        return fromMat4;
      });
      __webpack_require__.d(mat3_namespaceObject, "clone", function () {
        return mat3_clone;
      });
      __webpack_require__.d(mat3_namespaceObject, "copy", function () {
        return mat3_copy;
      });
      __webpack_require__.d(mat3_namespaceObject, "fromValues", function () {
        return mat3_fromValues;
      });
      __webpack_require__.d(mat3_namespaceObject, "set", function () {
        return mat3_set;
      });
      __webpack_require__.d(mat3_namespaceObject, "identity", function () {
        return mat3_identity;
      });
      __webpack_require__.d(mat3_namespaceObject, "transpose", function () {
        return mat3_transpose;
      });
      __webpack_require__.d(mat3_namespaceObject, "invert", function () {
        return mat3_invert;
      });
      __webpack_require__.d(mat3_namespaceObject, "adjoint", function () {
        return mat3_adjoint;
      });
      __webpack_require__.d(mat3_namespaceObject, "determinant", function () {
        return mat3_determinant;
      });
      __webpack_require__.d(mat3_namespaceObject, "multiply", function () {
        return mat3_multiply;
      });
      __webpack_require__.d(mat3_namespaceObject, "translate", function () {
        return mat3_translate;
      });
      __webpack_require__.d(mat3_namespaceObject, "rotate", function () {
        return mat3_rotate;
      });
      __webpack_require__.d(mat3_namespaceObject, "scale", function () {
        return mat3_scale;
      });
      __webpack_require__.d(mat3_namespaceObject, "fromTranslation", function () {
        return mat3_fromTranslation;
      });
      __webpack_require__.d(mat3_namespaceObject, "fromRotation", function () {
        return mat3_fromRotation;
      });
      __webpack_require__.d(mat3_namespaceObject, "fromScaling", function () {
        return mat3_fromScaling;
      });
      __webpack_require__.d(mat3_namespaceObject, "fromMat2d", function () {
        return fromMat2d;
      });
      __webpack_require__.d(mat3_namespaceObject, "fromQuat", function () {
        return fromQuat;
      });
      __webpack_require__.d(mat3_namespaceObject, "normalFromMat4", function () {
        return normalFromMat4;
      });
      __webpack_require__.d(mat3_namespaceObject, "projection", function () {
        return projection;
      });
      __webpack_require__.d(mat3_namespaceObject, "str", function () {
        return mat3_str;
      });
      __webpack_require__.d(mat3_namespaceObject, "frob", function () {
        return mat3_frob;
      });
      __webpack_require__.d(mat3_namespaceObject, "add", function () {
        return mat3_add;
      });
      __webpack_require__.d(mat3_namespaceObject, "subtract", function () {
        return mat3_subtract;
      });
      __webpack_require__.d(mat3_namespaceObject, "multiplyScalar", function () {
        return mat3_multiplyScalar;
      });
      __webpack_require__.d(mat3_namespaceObject, "multiplyScalarAndAdd", function () {
        return mat3_multiplyScalarAndAdd;
      });
      __webpack_require__.d(mat3_namespaceObject, "exactEquals", function () {
        return mat3_exactEquals;
      });
      __webpack_require__.d(mat3_namespaceObject, "equals", function () {
        return mat3_equals;
      });
      __webpack_require__.d(mat3_namespaceObject, "mul", function () {
        return mat3_mul;
      });
      __webpack_require__.d(mat3_namespaceObject, "sub", function () {
        return mat3_sub;
      });

      // NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/mat4.js
      var mat4_namespaceObject = {};
      __webpack_require__.r(mat4_namespaceObject);
      __webpack_require__.d(mat4_namespaceObject, "create", function () {
        return mat4_create;
      });
      __webpack_require__.d(mat4_namespaceObject, "clone", function () {
        return mat4_clone;
      });
      __webpack_require__.d(mat4_namespaceObject, "copy", function () {
        return mat4_copy;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromValues", function () {
        return mat4_fromValues;
      });
      __webpack_require__.d(mat4_namespaceObject, "set", function () {
        return mat4_set;
      });
      __webpack_require__.d(mat4_namespaceObject, "identity", function () {
        return mat4_identity;
      });
      __webpack_require__.d(mat4_namespaceObject, "transpose", function () {
        return mat4_transpose;
      });
      __webpack_require__.d(mat4_namespaceObject, "invert", function () {
        return mat4_invert;
      });
      __webpack_require__.d(mat4_namespaceObject, "adjoint", function () {
        return mat4_adjoint;
      });
      __webpack_require__.d(mat4_namespaceObject, "determinant", function () {
        return mat4_determinant;
      });
      __webpack_require__.d(mat4_namespaceObject, "multiply", function () {
        return mat4_multiply;
      });
      __webpack_require__.d(mat4_namespaceObject, "translate", function () {
        return mat4_translate;
      });
      __webpack_require__.d(mat4_namespaceObject, "scale", function () {
        return mat4_scale;
      });
      __webpack_require__.d(mat4_namespaceObject, "rotate", function () {
        return mat4_rotate;
      });
      __webpack_require__.d(mat4_namespaceObject, "rotateX", function () {
        return rotateX;
      });
      __webpack_require__.d(mat4_namespaceObject, "rotateY", function () {
        return rotateY;
      });
      __webpack_require__.d(mat4_namespaceObject, "rotateZ", function () {
        return rotateZ;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromTranslation", function () {
        return mat4_fromTranslation;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromScaling", function () {
        return mat4_fromScaling;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromRotation", function () {
        return mat4_fromRotation;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromXRotation", function () {
        return fromXRotation;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromYRotation", function () {
        return fromYRotation;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromZRotation", function () {
        return fromZRotation;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromRotationTranslation", function () {
        return fromRotationTranslation;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromQuat2", function () {
        return fromQuat2;
      });
      __webpack_require__.d(mat4_namespaceObject, "getTranslation", function () {
        return getTranslation;
      });
      __webpack_require__.d(mat4_namespaceObject, "getScaling", function () {
        return getScaling;
      });
      __webpack_require__.d(mat4_namespaceObject, "getRotation", function () {
        return getRotation;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromRotationTranslationScale", function () {
        return fromRotationTranslationScale;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromRotationTranslationScaleOrigin", function () {
        return fromRotationTranslationScaleOrigin;
      });
      __webpack_require__.d(mat4_namespaceObject, "fromQuat", function () {
        return mat4_fromQuat;
      });
      __webpack_require__.d(mat4_namespaceObject, "frustum", function () {
        return frustum;
      });
      __webpack_require__.d(mat4_namespaceObject, "perspective", function () {
        return perspective;
      });
      __webpack_require__.d(mat4_namespaceObject, "perspectiveFromFieldOfView", function () {
        return perspectiveFromFieldOfView;
      });
      __webpack_require__.d(mat4_namespaceObject, "ortho", function () {
        return ortho;
      });
      __webpack_require__.d(mat4_namespaceObject, "lookAt", function () {
        return lookAt;
      });
      __webpack_require__.d(mat4_namespaceObject, "targetTo", function () {
        return targetTo;
      });
      __webpack_require__.d(mat4_namespaceObject, "str", function () {
        return mat4_str;
      });
      __webpack_require__.d(mat4_namespaceObject, "frob", function () {
        return mat4_frob;
      });
      __webpack_require__.d(mat4_namespaceObject, "add", function () {
        return mat4_add;
      });
      __webpack_require__.d(mat4_namespaceObject, "subtract", function () {
        return mat4_subtract;
      });
      __webpack_require__.d(mat4_namespaceObject, "multiplyScalar", function () {
        return mat4_multiplyScalar;
      });
      __webpack_require__.d(mat4_namespaceObject, "multiplyScalarAndAdd", function () {
        return mat4_multiplyScalarAndAdd;
      });
      __webpack_require__.d(mat4_namespaceObject, "exactEquals", function () {
        return mat4_exactEquals;
      });
      __webpack_require__.d(mat4_namespaceObject, "equals", function () {
        return mat4_equals;
      });
      __webpack_require__.d(mat4_namespaceObject, "mul", function () {
        return mat4_mul;
      });
      __webpack_require__.d(mat4_namespaceObject, "sub", function () {
        return mat4_sub;
      });

      // NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/vec3.js
      var vec3_namespaceObject = {};
      __webpack_require__.r(vec3_namespaceObject);
      __webpack_require__.d(vec3_namespaceObject, "create", function () {
        return vec3_create;
      });
      __webpack_require__.d(vec3_namespaceObject, "clone", function () {
        return vec3_clone;
      });
      __webpack_require__.d(vec3_namespaceObject, "length", function () {
        return vec3_length;
      });
      __webpack_require__.d(vec3_namespaceObject, "fromValues", function () {
        return vec3_fromValues;
      });
      __webpack_require__.d(vec3_namespaceObject, "copy", function () {
        return vec3_copy;
      });
      __webpack_require__.d(vec3_namespaceObject, "set", function () {
        return vec3_set;
      });
      __webpack_require__.d(vec3_namespaceObject, "add", function () {
        return vec3_add;
      });
      __webpack_require__.d(vec3_namespaceObject, "subtract", function () {
        return vec3_subtract;
      });
      __webpack_require__.d(vec3_namespaceObject, "multiply", function () {
        return vec3_multiply;
      });
      __webpack_require__.d(vec3_namespaceObject, "divide", function () {
        return divide;
      });
      __webpack_require__.d(vec3_namespaceObject, "ceil", function () {
        return ceil;
      });
      __webpack_require__.d(vec3_namespaceObject, "floor", function () {
        return floor;
      });
      __webpack_require__.d(vec3_namespaceObject, "min", function () {
        return min;
      });
      __webpack_require__.d(vec3_namespaceObject, "max", function () {
        return max;
      });
      __webpack_require__.d(vec3_namespaceObject, "round", function () {
        return round;
      });
      __webpack_require__.d(vec3_namespaceObject, "scale", function () {
        return vec3_scale;
      });
      __webpack_require__.d(vec3_namespaceObject, "scaleAndAdd", function () {
        return scaleAndAdd;
      });
      __webpack_require__.d(vec3_namespaceObject, "distance", function () {
        return distance;
      });
      __webpack_require__.d(vec3_namespaceObject, "squaredDistance", function () {
        return squaredDistance;
      });
      __webpack_require__.d(vec3_namespaceObject, "squaredLength", function () {
        return squaredLength;
      });
      __webpack_require__.d(vec3_namespaceObject, "negate", function () {
        return negate;
      });
      __webpack_require__.d(vec3_namespaceObject, "inverse", function () {
        return inverse;
      });
      __webpack_require__.d(vec3_namespaceObject, "normalize", function () {
        return normalize;
      });
      __webpack_require__.d(vec3_namespaceObject, "dot", function () {
        return vec3_dot;
      });
      __webpack_require__.d(vec3_namespaceObject, "cross", function () {
        return cross;
      });
      __webpack_require__.d(vec3_namespaceObject, "lerp", function () {
        return lerp;
      });
      __webpack_require__.d(vec3_namespaceObject, "hermite", function () {
        return hermite;
      });
      __webpack_require__.d(vec3_namespaceObject, "bezier", function () {
        return bezier;
      });
      __webpack_require__.d(vec3_namespaceObject, "random", function () {
        return random;
      });
      __webpack_require__.d(vec3_namespaceObject, "transformMat4", function () {
        return transformMat4;
      });
      __webpack_require__.d(vec3_namespaceObject, "transformMat3", function () {
        return transformMat3;
      });
      __webpack_require__.d(vec3_namespaceObject, "transformQuat", function () {
        return transformQuat;
      });
      __webpack_require__.d(vec3_namespaceObject, "rotateX", function () {
        return vec3_rotateX;
      });
      __webpack_require__.d(vec3_namespaceObject, "rotateY", function () {
        return vec3_rotateY;
      });
      __webpack_require__.d(vec3_namespaceObject, "rotateZ", function () {
        return vec3_rotateZ;
      });
      __webpack_require__.d(vec3_namespaceObject, "angle", function () {
        return angle;
      });
      __webpack_require__.d(vec3_namespaceObject, "zero", function () {
        return zero;
      });
      __webpack_require__.d(vec3_namespaceObject, "str", function () {
        return vec3_str;
      });
      __webpack_require__.d(vec3_namespaceObject, "exactEquals", function () {
        return vec3_exactEquals;
      });
      __webpack_require__.d(vec3_namespaceObject, "equals", function () {
        return vec3_equals;
      });
      __webpack_require__.d(vec3_namespaceObject, "sub", function () {
        return vec3_sub;
      });
      __webpack_require__.d(vec3_namespaceObject, "mul", function () {
        return vec3_mul;
      });
      __webpack_require__.d(vec3_namespaceObject, "div", function () {
        return div;
      });
      __webpack_require__.d(vec3_namespaceObject, "dist", function () {
        return dist;
      });
      __webpack_require__.d(vec3_namespaceObject, "sqrDist", function () {
        return sqrDist;
      });
      __webpack_require__.d(vec3_namespaceObject, "len", function () {
        return vec3_len;
      });
      __webpack_require__.d(vec3_namespaceObject, "sqrLen", function () {
        return sqrLen;
      });
      __webpack_require__.d(vec3_namespaceObject, "forEach", function () {
        return forEach;
      });

      // NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/vec4.js
      var vec4_namespaceObject = {};
      __webpack_require__.r(vec4_namespaceObject);
      __webpack_require__.d(vec4_namespaceObject, "create", function () {
        return vec4_create;
      });
      __webpack_require__.d(vec4_namespaceObject, "clone", function () {
        return vec4_clone;
      });
      __webpack_require__.d(vec4_namespaceObject, "fromValues", function () {
        return vec4_fromValues;
      });
      __webpack_require__.d(vec4_namespaceObject, "copy", function () {
        return vec4_copy;
      });
      __webpack_require__.d(vec4_namespaceObject, "set", function () {
        return vec4_set;
      });
      __webpack_require__.d(vec4_namespaceObject, "add", function () {
        return vec4_add;
      });
      __webpack_require__.d(vec4_namespaceObject, "subtract", function () {
        return vec4_subtract;
      });
      __webpack_require__.d(vec4_namespaceObject, "multiply", function () {
        return vec4_multiply;
      });
      __webpack_require__.d(vec4_namespaceObject, "divide", function () {
        return vec4_divide;
      });
      __webpack_require__.d(vec4_namespaceObject, "ceil", function () {
        return vec4_ceil;
      });
      __webpack_require__.d(vec4_namespaceObject, "floor", function () {
        return vec4_floor;
      });
      __webpack_require__.d(vec4_namespaceObject, "min", function () {
        return vec4_min;
      });
      __webpack_require__.d(vec4_namespaceObject, "max", function () {
        return vec4_max;
      });
      __webpack_require__.d(vec4_namespaceObject, "round", function () {
        return vec4_round;
      });
      __webpack_require__.d(vec4_namespaceObject, "scale", function () {
        return vec4_scale;
      });
      __webpack_require__.d(vec4_namespaceObject, "scaleAndAdd", function () {
        return vec4_scaleAndAdd;
      });
      __webpack_require__.d(vec4_namespaceObject, "distance", function () {
        return vec4_distance;
      });
      __webpack_require__.d(vec4_namespaceObject, "squaredDistance", function () {
        return vec4_squaredDistance;
      });
      __webpack_require__.d(vec4_namespaceObject, "length", function () {
        return vec4_length;
      });
      __webpack_require__.d(vec4_namespaceObject, "squaredLength", function () {
        return vec4_squaredLength;
      });
      __webpack_require__.d(vec4_namespaceObject, "negate", function () {
        return vec4_negate;
      });
      __webpack_require__.d(vec4_namespaceObject, "inverse", function () {
        return vec4_inverse;
      });
      __webpack_require__.d(vec4_namespaceObject, "normalize", function () {
        return vec4_normalize;
      });
      __webpack_require__.d(vec4_namespaceObject, "dot", function () {
        return vec4_dot;
      });
      __webpack_require__.d(vec4_namespaceObject, "cross", function () {
        return vec4_cross;
      });
      __webpack_require__.d(vec4_namespaceObject, "lerp", function () {
        return vec4_lerp;
      });
      __webpack_require__.d(vec4_namespaceObject, "random", function () {
        return vec4_random;
      });
      __webpack_require__.d(vec4_namespaceObject, "transformMat4", function () {
        return vec4_transformMat4;
      });
      __webpack_require__.d(vec4_namespaceObject, "transformQuat", function () {
        return vec4_transformQuat;
      });
      __webpack_require__.d(vec4_namespaceObject, "zero", function () {
        return vec4_zero;
      });
      __webpack_require__.d(vec4_namespaceObject, "str", function () {
        return vec4_str;
      });
      __webpack_require__.d(vec4_namespaceObject, "exactEquals", function () {
        return vec4_exactEquals;
      });
      __webpack_require__.d(vec4_namespaceObject, "equals", function () {
        return vec4_equals;
      });
      __webpack_require__.d(vec4_namespaceObject, "sub", function () {
        return vec4_sub;
      });
      __webpack_require__.d(vec4_namespaceObject, "mul", function () {
        return vec4_mul;
      });
      __webpack_require__.d(vec4_namespaceObject, "div", function () {
        return vec4_div;
      });
      __webpack_require__.d(vec4_namespaceObject, "dist", function () {
        return vec4_dist;
      });
      __webpack_require__.d(vec4_namespaceObject, "sqrDist", function () {
        return vec4_sqrDist;
      });
      __webpack_require__.d(vec4_namespaceObject, "len", function () {
        return vec4_len;
      });
      __webpack_require__.d(vec4_namespaceObject, "sqrLen", function () {
        return vec4_sqrLen;
      });
      __webpack_require__.d(vec4_namespaceObject, "forEach", function () {
        return vec4_forEach;
      });

      // NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/quat.js
      var quat_namespaceObject = {};
      __webpack_require__.r(quat_namespaceObject);
      __webpack_require__.d(quat_namespaceObject, "create", function () {
        return quat_create;
      });
      __webpack_require__.d(quat_namespaceObject, "identity", function () {
        return quat_identity;
      });
      __webpack_require__.d(quat_namespaceObject, "setAxisAngle", function () {
        return setAxisAngle;
      });
      __webpack_require__.d(quat_namespaceObject, "getAxisAngle", function () {
        return getAxisAngle;
      });
      __webpack_require__.d(quat_namespaceObject, "getAngle", function () {
        return getAngle;
      });
      __webpack_require__.d(quat_namespaceObject, "multiply", function () {
        return quat_multiply;
      });
      __webpack_require__.d(quat_namespaceObject, "rotateX", function () {
        return quat_rotateX;
      });
      __webpack_require__.d(quat_namespaceObject, "rotateY", function () {
        return quat_rotateY;
      });
      __webpack_require__.d(quat_namespaceObject, "rotateZ", function () {
        return quat_rotateZ;
      });
      __webpack_require__.d(quat_namespaceObject, "calculateW", function () {
        return calculateW;
      });
      __webpack_require__.d(quat_namespaceObject, "exp", function () {
        return exp;
      });
      __webpack_require__.d(quat_namespaceObject, "ln", function () {
        return ln;
      });
      __webpack_require__.d(quat_namespaceObject, "pow", function () {
        return pow;
      });
      __webpack_require__.d(quat_namespaceObject, "slerp", function () {
        return slerp;
      });
      __webpack_require__.d(quat_namespaceObject, "random", function () {
        return quat_random;
      });
      __webpack_require__.d(quat_namespaceObject, "invert", function () {
        return quat_invert;
      });
      __webpack_require__.d(quat_namespaceObject, "conjugate", function () {
        return conjugate;
      });
      __webpack_require__.d(quat_namespaceObject, "fromMat3", function () {
        return fromMat3;
      });
      __webpack_require__.d(quat_namespaceObject, "fromEuler", function () {
        return fromEuler;
      });
      __webpack_require__.d(quat_namespaceObject, "str", function () {
        return quat_str;
      });
      __webpack_require__.d(quat_namespaceObject, "clone", function () {
        return quat_clone;
      });
      __webpack_require__.d(quat_namespaceObject, "fromValues", function () {
        return quat_fromValues;
      });
      __webpack_require__.d(quat_namespaceObject, "copy", function () {
        return quat_copy;
      });
      __webpack_require__.d(quat_namespaceObject, "set", function () {
        return quat_set;
      });
      __webpack_require__.d(quat_namespaceObject, "add", function () {
        return quat_add;
      });
      __webpack_require__.d(quat_namespaceObject, "mul", function () {
        return quat_mul;
      });
      __webpack_require__.d(quat_namespaceObject, "scale", function () {
        return quat_scale;
      });
      __webpack_require__.d(quat_namespaceObject, "dot", function () {
        return quat_dot;
      });
      __webpack_require__.d(quat_namespaceObject, "lerp", function () {
        return quat_lerp;
      });
      __webpack_require__.d(quat_namespaceObject, "length", function () {
        return quat_length;
      });
      __webpack_require__.d(quat_namespaceObject, "len", function () {
        return quat_len;
      });
      __webpack_require__.d(quat_namespaceObject, "squaredLength", function () {
        return quat_squaredLength;
      });
      __webpack_require__.d(quat_namespaceObject, "sqrLen", function () {
        return quat_sqrLen;
      });
      __webpack_require__.d(quat_namespaceObject, "normalize", function () {
        return quat_normalize;
      });
      __webpack_require__.d(quat_namespaceObject, "exactEquals", function () {
        return quat_exactEquals;
      });
      __webpack_require__.d(quat_namespaceObject, "equals", function () {
        return quat_equals;
      });
      __webpack_require__.d(quat_namespaceObject, "rotationTo", function () {
        return rotationTo;
      });
      __webpack_require__.d(quat_namespaceObject, "sqlerp", function () {
        return sqlerp;
      });
      __webpack_require__.d(quat_namespaceObject, "setAxes", function () {
        return setAxes;
      });

      // NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/quat2.js
      var quat2_namespaceObject = {};
      __webpack_require__.r(quat2_namespaceObject);
      __webpack_require__.d(quat2_namespaceObject, "create", function () {
        return quat2_create;
      });
      __webpack_require__.d(quat2_namespaceObject, "clone", function () {
        return quat2_clone;
      });
      __webpack_require__.d(quat2_namespaceObject, "fromValues", function () {
        return quat2_fromValues;
      });
      __webpack_require__.d(quat2_namespaceObject, "fromRotationTranslationValues", function () {
        return fromRotationTranslationValues;
      });
      __webpack_require__.d(quat2_namespaceObject, "fromRotationTranslation", function () {
        return quat2_fromRotationTranslation;
      });
      __webpack_require__.d(quat2_namespaceObject, "fromTranslation", function () {
        return quat2_fromTranslation;
      });
      __webpack_require__.d(quat2_namespaceObject, "fromRotation", function () {
        return quat2_fromRotation;
      });
      __webpack_require__.d(quat2_namespaceObject, "fromMat4", function () {
        return quat2_fromMat4;
      });
      __webpack_require__.d(quat2_namespaceObject, "copy", function () {
        return quat2_copy;
      });
      __webpack_require__.d(quat2_namespaceObject, "identity", function () {
        return quat2_identity;
      });
      __webpack_require__.d(quat2_namespaceObject, "set", function () {
        return quat2_set;
      });
      __webpack_require__.d(quat2_namespaceObject, "getReal", function () {
        return getReal;
      });
      __webpack_require__.d(quat2_namespaceObject, "getDual", function () {
        return getDual;
      });
      __webpack_require__.d(quat2_namespaceObject, "setReal", function () {
        return setReal;
      });
      __webpack_require__.d(quat2_namespaceObject, "setDual", function () {
        return setDual;
      });
      __webpack_require__.d(quat2_namespaceObject, "getTranslation", function () {
        return quat2_getTranslation;
      });
      __webpack_require__.d(quat2_namespaceObject, "translate", function () {
        return quat2_translate;
      });
      __webpack_require__.d(quat2_namespaceObject, "rotateX", function () {
        return quat2_rotateX;
      });
      __webpack_require__.d(quat2_namespaceObject, "rotateY", function () {
        return quat2_rotateY;
      });
      __webpack_require__.d(quat2_namespaceObject, "rotateZ", function () {
        return quat2_rotateZ;
      });
      __webpack_require__.d(quat2_namespaceObject, "rotateByQuatAppend", function () {
        return rotateByQuatAppend;
      });
      __webpack_require__.d(quat2_namespaceObject, "rotateByQuatPrepend", function () {
        return rotateByQuatPrepend;
      });
      __webpack_require__.d(quat2_namespaceObject, "rotateAroundAxis", function () {
        return rotateAroundAxis;
      });
      __webpack_require__.d(quat2_namespaceObject, "add", function () {
        return quat2_add;
      });
      __webpack_require__.d(quat2_namespaceObject, "multiply", function () {
        return quat2_multiply;
      });
      __webpack_require__.d(quat2_namespaceObject, "mul", function () {
        return quat2_mul;
      });
      __webpack_require__.d(quat2_namespaceObject, "scale", function () {
        return quat2_scale;
      });
      __webpack_require__.d(quat2_namespaceObject, "dot", function () {
        return quat2_dot;
      });
      __webpack_require__.d(quat2_namespaceObject, "lerp", function () {
        return quat2_lerp;
      });
      __webpack_require__.d(quat2_namespaceObject, "invert", function () {
        return quat2_invert;
      });
      __webpack_require__.d(quat2_namespaceObject, "conjugate", function () {
        return quat2_conjugate;
      });
      __webpack_require__.d(quat2_namespaceObject, "length", function () {
        return quat2_length;
      });
      __webpack_require__.d(quat2_namespaceObject, "len", function () {
        return quat2_len;
      });
      __webpack_require__.d(quat2_namespaceObject, "squaredLength", function () {
        return quat2_squaredLength;
      });
      __webpack_require__.d(quat2_namespaceObject, "sqrLen", function () {
        return quat2_sqrLen;
      });
      __webpack_require__.d(quat2_namespaceObject, "normalize", function () {
        return quat2_normalize;
      });
      __webpack_require__.d(quat2_namespaceObject, "str", function () {
        return quat2_str;
      });
      __webpack_require__.d(quat2_namespaceObject, "exactEquals", function () {
        return quat2_exactEquals;
      });
      __webpack_require__.d(quat2_namespaceObject, "equals", function () {
        return quat2_equals;
      });

      // NAMESPACE OBJECT: ./node_modules/gl-matrix/esm/vec2.js
      var vec2_namespaceObject = {};
      __webpack_require__.r(vec2_namespaceObject);
      __webpack_require__.d(vec2_namespaceObject, "create", function () {
        return vec2_create;
      });
      __webpack_require__.d(vec2_namespaceObject, "clone", function () {
        return vec2_clone;
      });
      __webpack_require__.d(vec2_namespaceObject, "fromValues", function () {
        return vec2_fromValues;
      });
      __webpack_require__.d(vec2_namespaceObject, "copy", function () {
        return vec2_copy;
      });
      __webpack_require__.d(vec2_namespaceObject, "set", function () {
        return vec2_set;
      });
      __webpack_require__.d(vec2_namespaceObject, "add", function () {
        return vec2_add;
      });
      __webpack_require__.d(vec2_namespaceObject, "subtract", function () {
        return vec2_subtract;
      });
      __webpack_require__.d(vec2_namespaceObject, "multiply", function () {
        return vec2_multiply;
      });
      __webpack_require__.d(vec2_namespaceObject, "divide", function () {
        return vec2_divide;
      });
      __webpack_require__.d(vec2_namespaceObject, "ceil", function () {
        return vec2_ceil;
      });
      __webpack_require__.d(vec2_namespaceObject, "floor", function () {
        return vec2_floor;
      });
      __webpack_require__.d(vec2_namespaceObject, "min", function () {
        return vec2_min;
      });
      __webpack_require__.d(vec2_namespaceObject, "max", function () {
        return vec2_max;
      });
      __webpack_require__.d(vec2_namespaceObject, "round", function () {
        return vec2_round;
      });
      __webpack_require__.d(vec2_namespaceObject, "scale", function () {
        return vec2_scale;
      });
      __webpack_require__.d(vec2_namespaceObject, "scaleAndAdd", function () {
        return vec2_scaleAndAdd;
      });
      __webpack_require__.d(vec2_namespaceObject, "distance", function () {
        return vec2_distance;
      });
      __webpack_require__.d(vec2_namespaceObject, "squaredDistance", function () {
        return vec2_squaredDistance;
      });
      __webpack_require__.d(vec2_namespaceObject, "length", function () {
        return vec2_length;
      });
      __webpack_require__.d(vec2_namespaceObject, "squaredLength", function () {
        return vec2_squaredLength;
      });
      __webpack_require__.d(vec2_namespaceObject, "negate", function () {
        return vec2_negate;
      });
      __webpack_require__.d(vec2_namespaceObject, "inverse", function () {
        return vec2_inverse;
      });
      __webpack_require__.d(vec2_namespaceObject, "normalize", function () {
        return vec2_normalize;
      });
      __webpack_require__.d(vec2_namespaceObject, "dot", function () {
        return vec2_dot;
      });
      __webpack_require__.d(vec2_namespaceObject, "cross", function () {
        return vec2_cross;
      });
      __webpack_require__.d(vec2_namespaceObject, "lerp", function () {
        return vec2_lerp;
      });
      __webpack_require__.d(vec2_namespaceObject, "random", function () {
        return vec2_random;
      });
      __webpack_require__.d(vec2_namespaceObject, "transformMat2", function () {
        return transformMat2;
      });
      __webpack_require__.d(vec2_namespaceObject, "transformMat2d", function () {
        return transformMat2d;
      });
      __webpack_require__.d(vec2_namespaceObject, "transformMat3", function () {
        return vec2_transformMat3;
      });
      __webpack_require__.d(vec2_namespaceObject, "transformMat4", function () {
        return vec2_transformMat4;
      });
      __webpack_require__.d(vec2_namespaceObject, "rotate", function () {
        return vec2_rotate;
      });
      __webpack_require__.d(vec2_namespaceObject, "angle", function () {
        return vec2_angle;
      });
      __webpack_require__.d(vec2_namespaceObject, "zero", function () {
        return vec2_zero;
      });
      __webpack_require__.d(vec2_namespaceObject, "str", function () {
        return vec2_str;
      });
      __webpack_require__.d(vec2_namespaceObject, "exactEquals", function () {
        return vec2_exactEquals;
      });
      __webpack_require__.d(vec2_namespaceObject, "equals", function () {
        return vec2_equals;
      });
      __webpack_require__.d(vec2_namespaceObject, "len", function () {
        return vec2_len;
      });
      __webpack_require__.d(vec2_namespaceObject, "sub", function () {
        return vec2_sub;
      });
      __webpack_require__.d(vec2_namespaceObject, "mul", function () {
        return vec2_mul;
      });
      __webpack_require__.d(vec2_namespaceObject, "div", function () {
        return vec2_div;
      });
      __webpack_require__.d(vec2_namespaceObject, "dist", function () {
        return vec2_dist;
      });
      __webpack_require__.d(vec2_namespaceObject, "sqrDist", function () {
        return vec2_sqrDist;
      });
      __webpack_require__.d(vec2_namespaceObject, "sqrLen", function () {
        return vec2_sqrLen;
      });
      __webpack_require__.d(vec2_namespaceObject, "forEach", function () {
        return vec2_forEach;
      });

      // CONCATENATED MODULE: ./node_modules/gl-matrix/esm/common.js
      /**
       * Common utilities
       * @module glMatrix
       */
      // Configuration Constants
      var EPSILON = 0.000001;
      var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
      var RANDOM = Math.random;
      /**
       * Sets the type of array used when creating new vectors and matrices
       *
       * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
       */

      function setMatrixArrayType(type) {
        ARRAY_TYPE = type;
      }
      var degree = Math.PI / 180;
      /**
       * Convert Degree To Radian
       *
       * @param {Number} a Angle in Degrees
       */

      function toRadian(a) {
        return a * degree;
      }
      /**
       * Tests whether or not the arguments have approximately the same value, within an absolute
       * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
       * than or equal to 1.0, and a relative tolerance is used for larger values)
       *
       * @param {Number} a The first number to test.
       * @param {Number} b The second number to test.
       * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
       */

      function equals(a, b) {
        return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
      }
      if (!Math.hypot)
        Math.hypot = function () {
          var y = 0,
            i = arguments.length;

          while (i--) {
            y += arguments[i] * arguments[i];
          }

          return Math.sqrt(y);
        };
      // CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat2.js

      /**
       * 2x2 Matrix
       * @module mat2
       */

      /**
       * Creates a new identity mat2
       *
       * @returns {mat2} a new 2x2 matrix
       */

      function create() {
        var out = new ARRAY_TYPE(4);

        if (ARRAY_TYPE != Float32Array) {
          out[1] = 0;
          out[2] = 0;
        }

        out[0] = 1;
        out[3] = 1;
        return out;
      }
      /**
       * Creates a new mat2 initialized with values from an existing matrix
       *
       * @param {ReadonlyMat2} a matrix to clone
       * @returns {mat2} a new 2x2 matrix
       */

      function clone(a) {
        var out = new ARRAY_TYPE(4);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      /**
       * Copy the values from one mat2 to another
       *
       * @param {mat2} out the receiving matrix
       * @param {ReadonlyMat2} a the source matrix
       * @returns {mat2} out
       */

      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      /**
       * Set a mat2 to the identity matrix
       *
       * @param {mat2} out the receiving matrix
       * @returns {mat2} out
       */

      function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
      }
      /**
       * Create a new mat2 with the given values
       *
       * @param {Number} m00 Component in column 0, row 0 position (index 0)
       * @param {Number} m01 Component in column 0, row 1 position (index 1)
       * @param {Number} m10 Component in column 1, row 0 position (index 2)
       * @param {Number} m11 Component in column 1, row 1 position (index 3)
       * @returns {mat2} out A new 2x2 matrix
       */

      function fromValues(m00, m01, m10, m11) {
        var out = new ARRAY_TYPE(4);
        out[0] = m00;
        out[1] = m01;
        out[2] = m10;
        out[3] = m11;
        return out;
      }
      /**
       * Set the components of a mat2 to the given values
       *
       * @param {mat2} out the receiving matrix
       * @param {Number} m00 Component in column 0, row 0 position (index 0)
       * @param {Number} m01 Component in column 0, row 1 position (index 1)
       * @param {Number} m10 Component in column 1, row 0 position (index 2)
       * @param {Number} m11 Component in column 1, row 1 position (index 3)
       * @returns {mat2} out
       */

      function set(out, m00, m01, m10, m11) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m10;
        out[3] = m11;
        return out;
      }
      /**
       * Transpose the values of a mat2
       *
       * @param {mat2} out the receiving matrix
       * @param {ReadonlyMat2} a the source matrix
       * @returns {mat2} out
       */

      function transpose(out, a) {
        // If we are transposing ourselves we can skip a few steps but have to cache
        // some values
        if (out === a) {
          var a1 = a[1];
          out[1] = a[2];
          out[2] = a1;
        } else {
          out[0] = a[0];
          out[1] = a[2];
          out[2] = a[1];
          out[3] = a[3];
        }

        return out;
      }
      /**
       * Inverts a mat2
       *
       * @param {mat2} out the receiving matrix
       * @param {ReadonlyMat2} a the source matrix
       * @returns {mat2} out
       */

      function invert(out, a) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3]; // Calculate the determinant

        var det = a0 * a3 - a2 * a1;

        if (!det) {
          return null;
        }

        det = 1.0 / det;
        out[0] = a3 * det;
        out[1] = -a1 * det;
        out[2] = -a2 * det;
        out[3] = a0 * det;
        return out;
      }
      /**
       * Calculates the adjugate of a mat2
       *
       * @param {mat2} out the receiving matrix
       * @param {ReadonlyMat2} a the source matrix
       * @returns {mat2} out
       */

      function adjoint(out, a) {
        // Caching this value is nessecary if out == a
        var a0 = a[0];
        out[0] = a[3];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a0;
        return out;
      }
      /**
       * Calculates the determinant of a mat2
       *
       * @param {ReadonlyMat2} a the source matrix
       * @returns {Number} determinant of a
       */

      function determinant(a) {
        return a[0] * a[3] - a[2] * a[1];
      }
      /**
       * Multiplies two mat2's
       *
       * @param {mat2} out the receiving matrix
       * @param {ReadonlyMat2} a the first operand
       * @param {ReadonlyMat2} b the second operand
       * @returns {mat2} out
       */

      function multiply(out, a, b) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
        var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
        out[0] = a0 * b0 + a2 * b1;
        out[1] = a1 * b0 + a3 * b1;
        out[2] = a0 * b2 + a2 * b3;
        out[3] = a1 * b2 + a3 * b3;
        return out;
      }
      /**
       * Rotates a mat2 by the given angle
       *
       * @param {mat2} out the receiving matrix
       * @param {ReadonlyMat2} a the matrix to rotate
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat2} out
       */

      function rotate(out, a, rad) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = a0 * c + a2 * s;
        out[1] = a1 * c + a3 * s;
        out[2] = a0 * -s + a2 * c;
        out[3] = a1 * -s + a3 * c;
        return out;
      }
      /**
       * Scales the mat2 by the dimensions in the given vec2
       *
       * @param {mat2} out the receiving matrix
       * @param {ReadonlyMat2} a the matrix to rotate
       * @param {ReadonlyVec2} v the vec2 to scale the matrix by
       * @returns {mat2} out
       **/

      function mat2_scale(out, a, v) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
        var v0 = v[0],
          v1 = v[1];
        out[0] = a0 * v0;
        out[1] = a1 * v0;
        out[2] = a2 * v1;
        out[3] = a3 * v1;
        return out;
      }
      /**
       * Creates a matrix from a given angle
       * This is equivalent to (but much faster than):
       *
       *     mat2.identity(dest);
       *     mat2.rotate(dest, dest, rad);
       *
       * @param {mat2} out mat2 receiving operation result
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat2} out
       */

      function fromRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = -s;
        out[3] = c;
        return out;
      }
      /**
       * Creates a matrix from a vector scaling
       * This is equivalent to (but much faster than):
       *
       *     mat2.identity(dest);
       *     mat2.scale(dest, dest, vec);
       *
       * @param {mat2} out mat2 receiving operation result
       * @param {ReadonlyVec2} v Scaling vector
       * @returns {mat2} out
       */

      function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = v[1];
        return out;
      }
      /**
       * Returns a string representation of a mat2
       *
       * @param {ReadonlyMat2} a matrix to represent as a string
       * @returns {String} string representation of the matrix
       */

      function str(a) {
        return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
      }
      /**
       * Returns Frobenius norm of a mat2
       *
       * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
       * @returns {Number} Frobenius norm
       */

      function frob(a) {
        return Math.hypot(a[0], a[1], a[2], a[3]);
      }
      /**
       * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
       * @param {ReadonlyMat2} L the lower triangular matrix
       * @param {ReadonlyMat2} D the diagonal matrix
       * @param {ReadonlyMat2} U the upper triangular matrix
       * @param {ReadonlyMat2} a the input matrix to factorize
       */

      function LDU(L, D, U, a) {
        L[2] = a[2] / a[0];
        U[0] = a[0];
        U[1] = a[1];
        U[3] = a[3] - L[2] * U[1];
        return [L, D, U];
      }
      /**
       * Adds two mat2's
       *
       * @param {mat2} out the receiving matrix
       * @param {ReadonlyMat2} a the first operand
       * @param {ReadonlyMat2} b the second operand
       * @returns {mat2} out
       */

      function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        return out;
      }
      /**
       * Subtracts matrix b from matrix a
       *
       * @param {mat2} out the receiving matrix
       * @param {ReadonlyMat2} a the first operand
       * @param {ReadonlyMat2} b the second operand
       * @returns {mat2} out
       */

      function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        return out;
      }
      /**
       * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
       *
       * @param {ReadonlyMat2} a The first matrix.
       * @param {ReadonlyMat2} b The second matrix.
       * @returns {Boolean} True if the matrices are equal, false otherwise.
       */

      function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
      }
      /**
       * Returns whether or not the matrices have approximately the same elements in the same position.
       *
       * @param {ReadonlyMat2} a The first matrix.
       * @param {ReadonlyMat2} b The second matrix.
       * @returns {Boolean} True if the matrices are equal, false otherwise.
       */

      function mat2_equals(a, b) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
        var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
        return (
          Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3))
        );
      }
      /**
       * Multiply each element of the matrix by a scalar.
       *
       * @param {mat2} out the receiving matrix
       * @param {ReadonlyMat2} a the matrix to scale
       * @param {Number} b amount to scale the matrix's elements by
       * @returns {mat2} out
       */

      function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        return out;
      }
      /**
       * Adds two mat2's after multiplying each element of the second operand by a scalar value.
       *
       * @param {mat2} out the receiving vector
       * @param {ReadonlyMat2} a the first operand
       * @param {ReadonlyMat2} b the second operand
       * @param {Number} scale the amount to scale b's elements by before adding
       * @returns {mat2} out
       */

      function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        return out;
      }
      /**
       * Alias for {@link mat2.multiply}
       * @function
       */

      var mul = multiply;
      /**
       * Alias for {@link mat2.subtract}
       * @function
       */

      var sub = subtract;
      // CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat2d.js

      /**
       * 2x3 Matrix
       * @module mat2d
       * @description
       * A mat2d contains six elements defined as:
       * <pre>
       * [a, b,
       *  c, d,
       *  tx, ty]
       * </pre>
       * This is a short form for the 3x3 matrix:
       * <pre>
       * [a, b, 0,
       *  c, d, 0,
       *  tx, ty, 1]
       * </pre>
       * The last column is ignored so the array is shorter and operations are faster.
       */

      /**
       * Creates a new identity mat2d
       *
       * @returns {mat2d} a new 2x3 matrix
       */

      function mat2d_create() {
        var out = new ARRAY_TYPE(6);

        if (ARRAY_TYPE != Float32Array) {
          out[1] = 0;
          out[2] = 0;
          out[4] = 0;
          out[5] = 0;
        }

        out[0] = 1;
        out[3] = 1;
        return out;
      }
      /**
       * Creates a new mat2d initialized with values from an existing matrix
       *
       * @param {ReadonlyMat2d} a matrix to clone
       * @returns {mat2d} a new 2x3 matrix
       */

      function mat2d_clone(a) {
        var out = new ARRAY_TYPE(6);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        return out;
      }
      /**
       * Copy the values from one mat2d to another
       *
       * @param {mat2d} out the receiving matrix
       * @param {ReadonlyMat2d} a the source matrix
       * @returns {mat2d} out
       */

      function mat2d_copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        return out;
      }
      /**
       * Set a mat2d to the identity matrix
       *
       * @param {mat2d} out the receiving matrix
       * @returns {mat2d} out
       */

      function mat2d_identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = 0;
        out[5] = 0;
        return out;
      }
      /**
       * Create a new mat2d with the given values
       *
       * @param {Number} a Component A (index 0)
       * @param {Number} b Component B (index 1)
       * @param {Number} c Component C (index 2)
       * @param {Number} d Component D (index 3)
       * @param {Number} tx Component TX (index 4)
       * @param {Number} ty Component TY (index 5)
       * @returns {mat2d} A new mat2d
       */

      function mat2d_fromValues(a, b, c, d, tx, ty) {
        var out = new ARRAY_TYPE(6);
        out[0] = a;
        out[1] = b;
        out[2] = c;
        out[3] = d;
        out[4] = tx;
        out[5] = ty;
        return out;
      }
      /**
       * Set the components of a mat2d to the given values
       *
       * @param {mat2d} out the receiving matrix
       * @param {Number} a Component A (index 0)
       * @param {Number} b Component B (index 1)
       * @param {Number} c Component C (index 2)
       * @param {Number} d Component D (index 3)
       * @param {Number} tx Component TX (index 4)
       * @param {Number} ty Component TY (index 5)
       * @returns {mat2d} out
       */

      function mat2d_set(out, a, b, c, d, tx, ty) {
        out[0] = a;
        out[1] = b;
        out[2] = c;
        out[3] = d;
        out[4] = tx;
        out[5] = ty;
        return out;
      }
      /**
       * Inverts a mat2d
       *
       * @param {mat2d} out the receiving matrix
       * @param {ReadonlyMat2d} a the source matrix
       * @returns {mat2d} out
       */

      function mat2d_invert(out, a) {
        var aa = a[0],
          ab = a[1],
          ac = a[2],
          ad = a[3];
        var atx = a[4],
          aty = a[5];
        var det = aa * ad - ab * ac;

        if (!det) {
          return null;
        }

        det = 1.0 / det;
        out[0] = ad * det;
        out[1] = -ab * det;
        out[2] = -ac * det;
        out[3] = aa * det;
        out[4] = (ac * aty - ad * atx) * det;
        out[5] = (ab * atx - aa * aty) * det;
        return out;
      }
      /**
       * Calculates the determinant of a mat2d
       *
       * @param {ReadonlyMat2d} a the source matrix
       * @returns {Number} determinant of a
       */

      function mat2d_determinant(a) {
        return a[0] * a[3] - a[1] * a[2];
      }
      /**
       * Multiplies two mat2d's
       *
       * @param {mat2d} out the receiving matrix
       * @param {ReadonlyMat2d} a the first operand
       * @param {ReadonlyMat2d} b the second operand
       * @returns {mat2d} out
       */

      function mat2d_multiply(out, a, b) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5];
        var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3],
          b4 = b[4],
          b5 = b[5];
        out[0] = a0 * b0 + a2 * b1;
        out[1] = a1 * b0 + a3 * b1;
        out[2] = a0 * b2 + a2 * b3;
        out[3] = a1 * b2 + a3 * b3;
        out[4] = a0 * b4 + a2 * b5 + a4;
        out[5] = a1 * b4 + a3 * b5 + a5;
        return out;
      }
      /**
       * Rotates a mat2d by the given angle
       *
       * @param {mat2d} out the receiving matrix
       * @param {ReadonlyMat2d} a the matrix to rotate
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat2d} out
       */

      function mat2d_rotate(out, a, rad) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5];
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = a0 * c + a2 * s;
        out[1] = a1 * c + a3 * s;
        out[2] = a0 * -s + a2 * c;
        out[3] = a1 * -s + a3 * c;
        out[4] = a4;
        out[5] = a5;
        return out;
      }
      /**
       * Scales the mat2d by the dimensions in the given vec2
       *
       * @param {mat2d} out the receiving matrix
       * @param {ReadonlyMat2d} a the matrix to translate
       * @param {ReadonlyVec2} v the vec2 to scale the matrix by
       * @returns {mat2d} out
       **/

      function mat2d_scale(out, a, v) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5];
        var v0 = v[0],
          v1 = v[1];
        out[0] = a0 * v0;
        out[1] = a1 * v0;
        out[2] = a2 * v1;
        out[3] = a3 * v1;
        out[4] = a4;
        out[5] = a5;
        return out;
      }
      /**
       * Translates the mat2d by the dimensions in the given vec2
       *
       * @param {mat2d} out the receiving matrix
       * @param {ReadonlyMat2d} a the matrix to translate
       * @param {ReadonlyVec2} v the vec2 to translate the matrix by
       * @returns {mat2d} out
       **/

      function translate(out, a, v) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5];
        var v0 = v[0],
          v1 = v[1];
        out[0] = a0;
        out[1] = a1;
        out[2] = a2;
        out[3] = a3;
        out[4] = a0 * v0 + a2 * v1 + a4;
        out[5] = a1 * v0 + a3 * v1 + a5;
        return out;
      }
      /**
       * Creates a matrix from a given angle
       * This is equivalent to (but much faster than):
       *
       *     mat2d.identity(dest);
       *     mat2d.rotate(dest, dest, rad);
       *
       * @param {mat2d} out mat2d receiving operation result
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat2d} out
       */

      function mat2d_fromRotation(out, rad) {
        var s = Math.sin(rad),
          c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = -s;
        out[3] = c;
        out[4] = 0;
        out[5] = 0;
        return out;
      }
      /**
       * Creates a matrix from a vector scaling
       * This is equivalent to (but much faster than):
       *
       *     mat2d.identity(dest);
       *     mat2d.scale(dest, dest, vec);
       *
       * @param {mat2d} out mat2d receiving operation result
       * @param {ReadonlyVec2} v Scaling vector
       * @returns {mat2d} out
       */

      function mat2d_fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = v[1];
        out[4] = 0;
        out[5] = 0;
        return out;
      }
      /**
       * Creates a matrix from a vector translation
       * This is equivalent to (but much faster than):
       *
       *     mat2d.identity(dest);
       *     mat2d.translate(dest, dest, vec);
       *
       * @param {mat2d} out mat2d receiving operation result
       * @param {ReadonlyVec2} v Translation vector
       * @returns {mat2d} out
       */

      function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = v[0];
        out[5] = v[1];
        return out;
      }
      /**
       * Returns a string representation of a mat2d
       *
       * @param {ReadonlyMat2d} a matrix to represent as a string
       * @returns {String} string representation of the matrix
       */

      function mat2d_str(a) {
        return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
      }
      /**
       * Returns Frobenius norm of a mat2d
       *
       * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
       * @returns {Number} Frobenius norm
       */

      function mat2d_frob(a) {
        return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
      }
      /**
       * Adds two mat2d's
       *
       * @param {mat2d} out the receiving matrix
       * @param {ReadonlyMat2d} a the first operand
       * @param {ReadonlyMat2d} b the second operand
       * @returns {mat2d} out
       */

      function mat2d_add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        return out;
      }
      /**
       * Subtracts matrix b from matrix a
       *
       * @param {mat2d} out the receiving matrix
       * @param {ReadonlyMat2d} a the first operand
       * @param {ReadonlyMat2d} b the second operand
       * @returns {mat2d} out
       */

      function mat2d_subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        return out;
      }
      /**
       * Multiply each element of the matrix by a scalar.
       *
       * @param {mat2d} out the receiving matrix
       * @param {ReadonlyMat2d} a the matrix to scale
       * @param {Number} b amount to scale the matrix's elements by
       * @returns {mat2d} out
       */

      function mat2d_multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        return out;
      }
      /**
       * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
       *
       * @param {mat2d} out the receiving vector
       * @param {ReadonlyMat2d} a the first operand
       * @param {ReadonlyMat2d} b the second operand
       * @param {Number} scale the amount to scale b's elements by before adding
       * @returns {mat2d} out
       */

      function mat2d_multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        out[4] = a[4] + b[4] * scale;
        out[5] = a[5] + b[5] * scale;
        return out;
      }
      /**
       * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
       *
       * @param {ReadonlyMat2d} a The first matrix.
       * @param {ReadonlyMat2d} b The second matrix.
       * @returns {Boolean} True if the matrices are equal, false otherwise.
       */

      function mat2d_exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
      }
      /**
       * Returns whether or not the matrices have approximately the same elements in the same position.
       *
       * @param {ReadonlyMat2d} a The first matrix.
       * @param {ReadonlyMat2d} b The second matrix.
       * @returns {Boolean} True if the matrices are equal, false otherwise.
       */

      function mat2d_equals(a, b) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5];
        var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3],
          b4 = b[4],
          b5 = b[5];
        return (
          Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5))
        );
      }
      /**
       * Alias for {@link mat2d.multiply}
       * @function
       */

      var mat2d_mul = mat2d_multiply;
      /**
       * Alias for {@link mat2d.subtract}
       * @function
       */

      var mat2d_sub = mat2d_subtract;
      // CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat3.js

      /**
       * 3x3 Matrix
       * @module mat3
       */

      /**
       * Creates a new identity mat3
       *
       * @returns {mat3} a new 3x3 matrix
       */

      function mat3_create() {
        var out = new ARRAY_TYPE(9);

        if (ARRAY_TYPE != Float32Array) {
          out[1] = 0;
          out[2] = 0;
          out[3] = 0;
          out[5] = 0;
          out[6] = 0;
          out[7] = 0;
        }

        out[0] = 1;
        out[4] = 1;
        out[8] = 1;
        return out;
      }
      /**
       * Copies the upper-left 3x3 values into the given mat3.
       *
       * @param {mat3} out the receiving 3x3 matrix
       * @param {ReadonlyMat4} a   the source 4x4 matrix
       * @returns {mat3} out
       */

      function fromMat4(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[4];
        out[4] = a[5];
        out[5] = a[6];
        out[6] = a[8];
        out[7] = a[9];
        out[8] = a[10];
        return out;
      }
      /**
       * Creates a new mat3 initialized with values from an existing matrix
       *
       * @param {ReadonlyMat3} a matrix to clone
       * @returns {mat3} a new 3x3 matrix
       */

      function mat3_clone(a) {
        var out = new ARRAY_TYPE(9);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
      }
      /**
       * Copy the values from one mat3 to another
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat3} a the source matrix
       * @returns {mat3} out
       */

      function mat3_copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
      }
      /**
       * Create a new mat3 with the given values
       *
       * @param {Number} m00 Component in column 0, row 0 position (index 0)
       * @param {Number} m01 Component in column 0, row 1 position (index 1)
       * @param {Number} m02 Component in column 0, row 2 position (index 2)
       * @param {Number} m10 Component in column 1, row 0 position (index 3)
       * @param {Number} m11 Component in column 1, row 1 position (index 4)
       * @param {Number} m12 Component in column 1, row 2 position (index 5)
       * @param {Number} m20 Component in column 2, row 0 position (index 6)
       * @param {Number} m21 Component in column 2, row 1 position (index 7)
       * @param {Number} m22 Component in column 2, row 2 position (index 8)
       * @returns {mat3} A new mat3
       */

      function mat3_fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        var out = new ARRAY_TYPE(9);
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
      }
      /**
       * Set the components of a mat3 to the given values
       *
       * @param {mat3} out the receiving matrix
       * @param {Number} m00 Component in column 0, row 0 position (index 0)
       * @param {Number} m01 Component in column 0, row 1 position (index 1)
       * @param {Number} m02 Component in column 0, row 2 position (index 2)
       * @param {Number} m10 Component in column 1, row 0 position (index 3)
       * @param {Number} m11 Component in column 1, row 1 position (index 4)
       * @param {Number} m12 Component in column 1, row 2 position (index 5)
       * @param {Number} m20 Component in column 2, row 0 position (index 6)
       * @param {Number} m21 Component in column 2, row 1 position (index 7)
       * @param {Number} m22 Component in column 2, row 2 position (index 8)
       * @returns {mat3} out
       */

      function mat3_set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
      }
      /**
       * Set a mat3 to the identity matrix
       *
       * @param {mat3} out the receiving matrix
       * @returns {mat3} out
       */

      function mat3_identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }
      /**
       * Transpose the values of a mat3
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat3} a the source matrix
       * @returns {mat3} out
       */

      function mat3_transpose(out, a) {
        // If we are transposing ourselves we can skip a few steps but have to cache some values
        if (out === a) {
          var a01 = a[1],
            a02 = a[2],
            a12 = a[5];
          out[1] = a[3];
          out[2] = a[6];
          out[3] = a01;
          out[5] = a[7];
          out[6] = a02;
          out[7] = a12;
        } else {
          out[0] = a[0];
          out[1] = a[3];
          out[2] = a[6];
          out[3] = a[1];
          out[4] = a[4];
          out[5] = a[7];
          out[6] = a[2];
          out[7] = a[5];
          out[8] = a[8];
        }

        return out;
      }
      /**
       * Inverts a mat3
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat3} a the source matrix
       * @returns {mat3} out
       */

      function mat3_invert(out, a) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2];
        var a10 = a[3],
          a11 = a[4],
          a12 = a[5];
        var a20 = a[6],
          a21 = a[7],
          a22 = a[8];
        var b01 = a22 * a11 - a12 * a21;
        var b11 = -a22 * a10 + a12 * a20;
        var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

        var det = a00 * b01 + a01 * b11 + a02 * b21;

        if (!det) {
          return null;
        }

        det = 1.0 / det;
        out[0] = b01 * det;
        out[1] = (-a22 * a01 + a02 * a21) * det;
        out[2] = (a12 * a01 - a02 * a11) * det;
        out[3] = b11 * det;
        out[4] = (a22 * a00 - a02 * a20) * det;
        out[5] = (-a12 * a00 + a02 * a10) * det;
        out[6] = b21 * det;
        out[7] = (-a21 * a00 + a01 * a20) * det;
        out[8] = (a11 * a00 - a01 * a10) * det;
        return out;
      }
      /**
       * Calculates the adjugate of a mat3
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat3} a the source matrix
       * @returns {mat3} out
       */

      function mat3_adjoint(out, a) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2];
        var a10 = a[3],
          a11 = a[4],
          a12 = a[5];
        var a20 = a[6],
          a21 = a[7],
          a22 = a[8];
        out[0] = a11 * a22 - a12 * a21;
        out[1] = a02 * a21 - a01 * a22;
        out[2] = a01 * a12 - a02 * a11;
        out[3] = a12 * a20 - a10 * a22;
        out[4] = a00 * a22 - a02 * a20;
        out[5] = a02 * a10 - a00 * a12;
        out[6] = a10 * a21 - a11 * a20;
        out[7] = a01 * a20 - a00 * a21;
        out[8] = a00 * a11 - a01 * a10;
        return out;
      }
      /**
       * Calculates the determinant of a mat3
       *
       * @param {ReadonlyMat3} a the source matrix
       * @returns {Number} determinant of a
       */

      function mat3_determinant(a) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2];
        var a10 = a[3],
          a11 = a[4],
          a12 = a[5];
        var a20 = a[6],
          a21 = a[7],
          a22 = a[8];
        return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
      }
      /**
       * Multiplies two mat3's
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat3} a the first operand
       * @param {ReadonlyMat3} b the second operand
       * @returns {mat3} out
       */

      function mat3_multiply(out, a, b) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2];
        var a10 = a[3],
          a11 = a[4],
          a12 = a[5];
        var a20 = a[6],
          a21 = a[7],
          a22 = a[8];
        var b00 = b[0],
          b01 = b[1],
          b02 = b[2];
        var b10 = b[3],
          b11 = b[4],
          b12 = b[5];
        var b20 = b[6],
          b21 = b[7],
          b22 = b[8];
        out[0] = b00 * a00 + b01 * a10 + b02 * a20;
        out[1] = b00 * a01 + b01 * a11 + b02 * a21;
        out[2] = b00 * a02 + b01 * a12 + b02 * a22;
        out[3] = b10 * a00 + b11 * a10 + b12 * a20;
        out[4] = b10 * a01 + b11 * a11 + b12 * a21;
        out[5] = b10 * a02 + b11 * a12 + b12 * a22;
        out[6] = b20 * a00 + b21 * a10 + b22 * a20;
        out[7] = b20 * a01 + b21 * a11 + b22 * a21;
        out[8] = b20 * a02 + b21 * a12 + b22 * a22;
        return out;
      }
      /**
       * Translate a mat3 by the given vector
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat3} a the matrix to translate
       * @param {ReadonlyVec2} v vector to translate by
       * @returns {mat3} out
       */

      function mat3_translate(out, a, v) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8],
          x = v[0],
          y = v[1];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a10;
        out[4] = a11;
        out[5] = a12;
        out[6] = x * a00 + y * a10 + a20;
        out[7] = x * a01 + y * a11 + a21;
        out[8] = x * a02 + y * a12 + a22;
        return out;
      }
      /**
       * Rotates a mat3 by the given angle
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat3} a the matrix to rotate
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat3} out
       */

      function mat3_rotate(out, a, rad) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8],
          s = Math.sin(rad),
          c = Math.cos(rad);
        out[0] = c * a00 + s * a10;
        out[1] = c * a01 + s * a11;
        out[2] = c * a02 + s * a12;
        out[3] = c * a10 - s * a00;
        out[4] = c * a11 - s * a01;
        out[5] = c * a12 - s * a02;
        out[6] = a20;
        out[7] = a21;
        out[8] = a22;
        return out;
      }
      /**
       * Scales the mat3 by the dimensions in the given vec2
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat3} a the matrix to rotate
       * @param {ReadonlyVec2} v the vec2 to scale the matrix by
       * @returns {mat3} out
       **/

      function mat3_scale(out, a, v) {
        var x = v[0],
          y = v[1];
        out[0] = x * a[0];
        out[1] = x * a[1];
        out[2] = x * a[2];
        out[3] = y * a[3];
        out[4] = y * a[4];
        out[5] = y * a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
      }
      /**
       * Creates a matrix from a vector translation
       * This is equivalent to (but much faster than):
       *
       *     mat3.identity(dest);
       *     mat3.translate(dest, dest, vec);
       *
       * @param {mat3} out mat3 receiving operation result
       * @param {ReadonlyVec2} v Translation vector
       * @returns {mat3} out
       */

      function mat3_fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = v[0];
        out[7] = v[1];
        out[8] = 1;
        return out;
      }
      /**
       * Creates a matrix from a given angle
       * This is equivalent to (but much faster than):
       *
       *     mat3.identity(dest);
       *     mat3.rotate(dest, dest, rad);
       *
       * @param {mat3} out mat3 receiving operation result
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat3} out
       */

      function mat3_fromRotation(out, rad) {
        var s = Math.sin(rad),
          c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = 0;
        out[3] = -s;
        out[4] = c;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }
      /**
       * Creates a matrix from a vector scaling
       * This is equivalent to (but much faster than):
       *
       *     mat3.identity(dest);
       *     mat3.scale(dest, dest, vec);
       *
       * @param {mat3} out mat3 receiving operation result
       * @param {ReadonlyVec2} v Scaling vector
       * @returns {mat3} out
       */

      function mat3_fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = v[1];
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }
      /**
       * Copies the values from a mat2d into a mat3
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat2d} a the matrix to copy
       * @returns {mat3} out
       **/

      function fromMat2d(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = 0;
        out[3] = a[2];
        out[4] = a[3];
        out[5] = 0;
        out[6] = a[4];
        out[7] = a[5];
        out[8] = 1;
        return out;
      }
      /**
       * Calculates a 3x3 matrix from the given quaternion
       *
       * @param {mat3} out mat3 receiving operation result
       * @param {ReadonlyQuat} q Quaternion to create matrix from
       *
       * @returns {mat3} out
       */

      function fromQuat(out, q) {
        var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var yx = y * x2;
        var yy = y * y2;
        var zx = z * x2;
        var zy = z * y2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - yy - zz;
        out[3] = yx - wz;
        out[6] = zx + wy;
        out[1] = yx + wz;
        out[4] = 1 - xx - zz;
        out[7] = zy - wx;
        out[2] = zx - wy;
        out[5] = zy + wx;
        out[8] = 1 - xx - yy;
        return out;
      }
      /**
       * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
       *
       * @param {mat3} out mat3 receiving operation result
       * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
       *
       * @returns {mat3} out
       */

      function normalFromMat4(out, a) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
        var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
        var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
        var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) {
          return null;
        }

        det = 1.0 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        return out;
      }
      /**
       * Generates a 2D projection matrix with the given bounds
       *
       * @param {mat3} out mat3 frustum matrix will be written into
       * @param {number} width Width of your gl context
       * @param {number} height Height of gl context
       * @returns {mat3} out
       */

      function projection(out, width, height) {
        out[0] = 2 / width;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = -2 / height;
        out[5] = 0;
        out[6] = -1;
        out[7] = 1;
        out[8] = 1;
        return out;
      }
      /**
       * Returns a string representation of a mat3
       *
       * @param {ReadonlyMat3} a matrix to represent as a string
       * @returns {String} string representation of the matrix
       */

      function mat3_str(a) {
        return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
      }
      /**
       * Returns Frobenius norm of a mat3
       *
       * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
       * @returns {Number} Frobenius norm
       */

      function mat3_frob(a) {
        return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
      }
      /**
       * Adds two mat3's
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat3} a the first operand
       * @param {ReadonlyMat3} b the second operand
       * @returns {mat3} out
       */

      function mat3_add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        return out;
      }
      /**
       * Subtracts matrix b from matrix a
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat3} a the first operand
       * @param {ReadonlyMat3} b the second operand
       * @returns {mat3} out
       */

      function mat3_subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        return out;
      }
      /**
       * Multiply each element of the matrix by a scalar.
       *
       * @param {mat3} out the receiving matrix
       * @param {ReadonlyMat3} a the matrix to scale
       * @param {Number} b amount to scale the matrix's elements by
       * @returns {mat3} out
       */

      function mat3_multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        out[8] = a[8] * b;
        return out;
      }
      /**
       * Adds two mat3's after multiplying each element of the second operand by a scalar value.
       *
       * @param {mat3} out the receiving vector
       * @param {ReadonlyMat3} a the first operand
       * @param {ReadonlyMat3} b the second operand
       * @param {Number} scale the amount to scale b's elements by before adding
       * @returns {mat3} out
       */

      function mat3_multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        out[4] = a[4] + b[4] * scale;
        out[5] = a[5] + b[5] * scale;
        out[6] = a[6] + b[6] * scale;
        out[7] = a[7] + b[7] * scale;
        out[8] = a[8] + b[8] * scale;
        return out;
      }
      /**
       * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
       *
       * @param {ReadonlyMat3} a The first matrix.
       * @param {ReadonlyMat3} b The second matrix.
       * @returns {Boolean} True if the matrices are equal, false otherwise.
       */

      function mat3_exactEquals(a, b) {
        return (
          a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8]
        );
      }
      /**
       * Returns whether or not the matrices have approximately the same elements in the same position.
       *
       * @param {ReadonlyMat3} a The first matrix.
       * @param {ReadonlyMat3} b The second matrix.
       * @returns {Boolean} True if the matrices are equal, false otherwise.
       */

      function mat3_equals(a, b) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5],
          a6 = a[6],
          a7 = a[7],
          a8 = a[8];
        var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3],
          b4 = b[4],
          b5 = b[5],
          b6 = b[6],
          b7 = b[7],
          b8 = b[8];
        return (
          Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8))
        );
      }
      /**
       * Alias for {@link mat3.multiply}
       * @function
       */

      var mat3_mul = mat3_multiply;
      /**
       * Alias for {@link mat3.subtract}
       * @function
       */

      var mat3_sub = mat3_subtract;
      // CONCATENATED MODULE: ./node_modules/gl-matrix/esm/mat4.js

      /**
       * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
       * @module mat4
       */

      /**
       * Creates a new identity mat4
       *
       * @returns {mat4} a new 4x4 matrix
       */

      function mat4_create() {
        var out = new ARRAY_TYPE(16);

        if (ARRAY_TYPE != Float32Array) {
          out[1] = 0;
          out[2] = 0;
          out[3] = 0;
          out[4] = 0;
          out[6] = 0;
          out[7] = 0;
          out[8] = 0;
          out[9] = 0;
          out[11] = 0;
          out[12] = 0;
          out[13] = 0;
          out[14] = 0;
        }

        out[0] = 1;
        out[5] = 1;
        out[10] = 1;
        out[15] = 1;
        return out;
      }
      /**
       * Creates a new mat4 initialized with values from an existing matrix
       *
       * @param {ReadonlyMat4} a matrix to clone
       * @returns {mat4} a new 4x4 matrix
       */

      function mat4_clone(a) {
        var out = new ARRAY_TYPE(16);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
      }
      /**
       * Copy the values from one mat4 to another
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the source matrix
       * @returns {mat4} out
       */

      function mat4_copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
      }
      /**
       * Create a new mat4 with the given values
       *
       * @param {Number} m00 Component in column 0, row 0 position (index 0)
       * @param {Number} m01 Component in column 0, row 1 position (index 1)
       * @param {Number} m02 Component in column 0, row 2 position (index 2)
       * @param {Number} m03 Component in column 0, row 3 position (index 3)
       * @param {Number} m10 Component in column 1, row 0 position (index 4)
       * @param {Number} m11 Component in column 1, row 1 position (index 5)
       * @param {Number} m12 Component in column 1, row 2 position (index 6)
       * @param {Number} m13 Component in column 1, row 3 position (index 7)
       * @param {Number} m20 Component in column 2, row 0 position (index 8)
       * @param {Number} m21 Component in column 2, row 1 position (index 9)
       * @param {Number} m22 Component in column 2, row 2 position (index 10)
       * @param {Number} m23 Component in column 2, row 3 position (index 11)
       * @param {Number} m30 Component in column 3, row 0 position (index 12)
       * @param {Number} m31 Component in column 3, row 1 position (index 13)
       * @param {Number} m32 Component in column 3, row 2 position (index 14)
       * @param {Number} m33 Component in column 3, row 3 position (index 15)
       * @returns {mat4} A new mat4
       */

      function mat4_fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        var out = new ARRAY_TYPE(16);
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m03;
        out[4] = m10;
        out[5] = m11;
        out[6] = m12;
        out[7] = m13;
        out[8] = m20;
        out[9] = m21;
        out[10] = m22;
        out[11] = m23;
        out[12] = m30;
        out[13] = m31;
        out[14] = m32;
        out[15] = m33;
        return out;
      }
      /**
       * Set the components of a mat4 to the given values
       *
       * @param {mat4} out the receiving matrix
       * @param {Number} m00 Component in column 0, row 0 position (index 0)
       * @param {Number} m01 Component in column 0, row 1 position (index 1)
       * @param {Number} m02 Component in column 0, row 2 position (index 2)
       * @param {Number} m03 Component in column 0, row 3 position (index 3)
       * @param {Number} m10 Component in column 1, row 0 position (index 4)
       * @param {Number} m11 Component in column 1, row 1 position (index 5)
       * @param {Number} m12 Component in column 1, row 2 position (index 6)
       * @param {Number} m13 Component in column 1, row 3 position (index 7)
       * @param {Number} m20 Component in column 2, row 0 position (index 8)
       * @param {Number} m21 Component in column 2, row 1 position (index 9)
       * @param {Number} m22 Component in column 2, row 2 position (index 10)
       * @param {Number} m23 Component in column 2, row 3 position (index 11)
       * @param {Number} m30 Component in column 3, row 0 position (index 12)
       * @param {Number} m31 Component in column 3, row 1 position (index 13)
       * @param {Number} m32 Component in column 3, row 2 position (index 14)
       * @param {Number} m33 Component in column 3, row 3 position (index 15)
       * @returns {mat4} out
       */

      function mat4_set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m03;
        out[4] = m10;
        out[5] = m11;
        out[6] = m12;
        out[7] = m13;
        out[8] = m20;
        out[9] = m21;
        out[10] = m22;
        out[11] = m23;
        out[12] = m30;
        out[13] = m31;
        out[14] = m32;
        out[15] = m33;
        return out;
      }
      /**
       * Set a mat4 to the identity matrix
       *
       * @param {mat4} out the receiving matrix
       * @returns {mat4} out
       */

      function mat4_identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Transpose the values of a mat4
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the source matrix
       * @returns {mat4} out
       */

      function mat4_transpose(out, a) {
        // If we are transposing ourselves we can skip a few steps but have to cache some values
        if (out === a) {
          var a01 = a[1],
            a02 = a[2],
            a03 = a[3];
          var a12 = a[6],
            a13 = a[7];
          var a23 = a[11];
          out[1] = a[4];
          out[2] = a[8];
          out[3] = a[12];
          out[4] = a01;
          out[6] = a[9];
          out[7] = a[13];
          out[8] = a02;
          out[9] = a12;
          out[11] = a[14];
          out[12] = a03;
          out[13] = a13;
          out[14] = a23;
        } else {
          out[0] = a[0];
          out[1] = a[4];
          out[2] = a[8];
          out[3] = a[12];
          out[4] = a[1];
          out[5] = a[5];
          out[6] = a[9];
          out[7] = a[13];
          out[8] = a[2];
          out[9] = a[6];
          out[10] = a[10];
          out[11] = a[14];
          out[12] = a[3];
          out[13] = a[7];
          out[14] = a[11];
          out[15] = a[15];
        }

        return out;
      }
      /**
       * Inverts a mat4
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the source matrix
       * @returns {mat4} out
       */

      function mat4_invert(out, a) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
        var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
        var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
        var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) {
          return null;
        }

        det = 1.0 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
        return out;
      }
      /**
       * Calculates the adjugate of a mat4
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the source matrix
       * @returns {mat4} out
       */

      function mat4_adjoint(out, a) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
        var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
        var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
        var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
        out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
        out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
        out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
        out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
        out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
        out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
        out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
        out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
        out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
        out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
        out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
        out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
        out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
        out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
        out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
        out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
        return out;
      }
      /**
       * Calculates the determinant of a mat4
       *
       * @param {ReadonlyMat4} a the source matrix
       * @returns {Number} determinant of a
       */

      function mat4_determinant(a) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
        var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
        var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
        var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
      }
      /**
       * Multiplies two mat4s
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the first operand
       * @param {ReadonlyMat4} b the second operand
       * @returns {mat4} out
       */

      function mat4_multiply(out, a, b) {
        var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
        var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
        var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
        var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15]; // Cache only the current line of the second matrix

        var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
        out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[4];
        b1 = b[5];
        b2 = b[6];
        b3 = b[7];
        out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[8];
        b1 = b[9];
        b2 = b[10];
        b3 = b[11];
        out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[12];
        b1 = b[13];
        b2 = b[14];
        b3 = b[15];
        out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return out;
      }
      /**
       * Translate a mat4 by the given vector
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the matrix to translate
       * @param {ReadonlyVec3} v vector to translate by
       * @returns {mat4} out
       */

      function mat4_translate(out, a, v) {
        var x = v[0],
          y = v[1],
          z = v[2];
        var a00, a01, a02, a03;
        var a10, a11, a12, a13;
        var a20, a21, a22, a23;

        if (a === out) {
          out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
          out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
          out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
          out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
        } else {
          a00 = a[0];
          a01 = a[1];
          a02 = a[2];
          a03 = a[3];
          a10 = a[4];
          a11 = a[5];
          a12 = a[6];
          a13 = a[7];
          a20 = a[8];
          a21 = a[9];
          a22 = a[10];
          a23 = a[11];
          out[0] = a00;
          out[1] = a01;
          out[2] = a02;
          out[3] = a03;
          out[4] = a10;
          out[5] = a11;
          out[6] = a12;
          out[7] = a13;
          out[8] = a20;
          out[9] = a21;
          out[10] = a22;
          out[11] = a23;
          out[12] = a00 * x + a10 * y + a20 * z + a[12];
          out[13] = a01 * x + a11 * y + a21 * z + a[13];
          out[14] = a02 * x + a12 * y + a22 * z + a[14];
          out[15] = a03 * x + a13 * y + a23 * z + a[15];
        }

        return out;
      }
      /**
       * Scales the mat4 by the dimensions in the given vec3 not using vectorization
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the matrix to scale
       * @param {ReadonlyVec3} v the vec3 to scale the matrix by
       * @returns {mat4} out
       **/

      function mat4_scale(out, a, v) {
        var x = v[0],
          y = v[1],
          z = v[2];
        out[0] = a[0] * x;
        out[1] = a[1] * x;
        out[2] = a[2] * x;
        out[3] = a[3] * x;
        out[4] = a[4] * y;
        out[5] = a[5] * y;
        out[6] = a[6] * y;
        out[7] = a[7] * y;
        out[8] = a[8] * z;
        out[9] = a[9] * z;
        out[10] = a[10] * z;
        out[11] = a[11] * z;
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
      }
      /**
       * Rotates a mat4 by the given angle around the given axis
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the matrix to rotate
       * @param {Number} rad the angle to rotate the matrix by
       * @param {ReadonlyVec3} axis the axis to rotate around
       * @returns {mat4} out
       */

      function mat4_rotate(out, a, rad, axis) {
        var x = axis[0],
          y = axis[1],
          z = axis[2];
        var len = Math.hypot(x, y, z);
        var s, c, t;
        var a00, a01, a02, a03;
        var a10, a11, a12, a13;
        var a20, a21, a22, a23;
        var b00, b01, b02;
        var b10, b11, b12;
        var b20, b21, b22;

        if (len < EPSILON) {
          return null;
        }

        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c;
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11]; // Construct the elements of the rotation matrix

        b00 = x * x * t + c;
        b01 = y * x * t + z * s;
        b02 = z * x * t - y * s;
        b10 = x * y * t - z * s;
        b11 = y * y * t + c;
        b12 = z * y * t + x * s;
        b20 = x * z * t + y * s;
        b21 = y * z * t - x * s;
        b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

        out[0] = a00 * b00 + a10 * b01 + a20 * b02;
        out[1] = a01 * b00 + a11 * b01 + a21 * b02;
        out[2] = a02 * b00 + a12 * b01 + a22 * b02;
        out[3] = a03 * b00 + a13 * b01 + a23 * b02;
        out[4] = a00 * b10 + a10 * b11 + a20 * b12;
        out[5] = a01 * b10 + a11 * b11 + a21 * b12;
        out[6] = a02 * b10 + a12 * b11 + a22 * b12;
        out[7] = a03 * b10 + a13 * b11 + a23 * b12;
        out[8] = a00 * b20 + a10 * b21 + a20 * b22;
        out[9] = a01 * b20 + a11 * b21 + a21 * b22;
        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        out[11] = a03 * b20 + a13 * b21 + a23 * b22;

        if (a !== out) {
          // If the source and destination differ, copy the unchanged last row
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        }

        return out;
      }
      /**
       * Rotates a matrix by the given angle around the X axis
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the matrix to rotate
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat4} out
       */

      function rotateX(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];

        if (a !== out) {
          // If the source and destination differ, copy the unchanged rows
          out[0] = a[0];
          out[1] = a[1];
          out[2] = a[2];
          out[3] = a[3];
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        } // Perform axis-specific matrix multiplication

        out[4] = a10 * c + a20 * s;
        out[5] = a11 * c + a21 * s;
        out[6] = a12 * c + a22 * s;
        out[7] = a13 * c + a23 * s;
        out[8] = a20 * c - a10 * s;
        out[9] = a21 * c - a11 * s;
        out[10] = a22 * c - a12 * s;
        out[11] = a23 * c - a13 * s;
        return out;
      }
      /**
       * Rotates a matrix by the given angle around the Y axis
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the matrix to rotate
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat4} out
       */

      function rotateY(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];

        if (a !== out) {
          // If the source and destination differ, copy the unchanged rows
          out[4] = a[4];
          out[5] = a[5];
          out[6] = a[6];
          out[7] = a[7];
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        } // Perform axis-specific matrix multiplication

        out[0] = a00 * c - a20 * s;
        out[1] = a01 * c - a21 * s;
        out[2] = a02 * c - a22 * s;
        out[3] = a03 * c - a23 * s;
        out[8] = a00 * s + a20 * c;
        out[9] = a01 * s + a21 * c;
        out[10] = a02 * s + a22 * c;
        out[11] = a03 * s + a23 * c;
        return out;
      }
      /**
       * Rotates a matrix by the given angle around the Z axis
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the matrix to rotate
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat4} out
       */

      function rotateZ(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];

        if (a !== out) {
          // If the source and destination differ, copy the unchanged last row
          out[8] = a[8];
          out[9] = a[9];
          out[10] = a[10];
          out[11] = a[11];
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        } // Perform axis-specific matrix multiplication

        out[0] = a00 * c + a10 * s;
        out[1] = a01 * c + a11 * s;
        out[2] = a02 * c + a12 * s;
        out[3] = a03 * c + a13 * s;
        out[4] = a10 * c - a00 * s;
        out[5] = a11 * c - a01 * s;
        out[6] = a12 * c - a02 * s;
        out[7] = a13 * c - a03 * s;
        return out;
      }
      /**
       * Creates a matrix from a vector translation
       * This is equivalent to (but much faster than):
       *
       *     mat4.identity(dest);
       *     mat4.translate(dest, dest, vec);
       *
       * @param {mat4} out mat4 receiving operation result
       * @param {ReadonlyVec3} v Translation vector
       * @returns {mat4} out
       */

      function mat4_fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from a vector scaling
       * This is equivalent to (but much faster than):
       *
       *     mat4.identity(dest);
       *     mat4.scale(dest, dest, vec);
       *
       * @param {mat4} out mat4 receiving operation result
       * @param {ReadonlyVec3} v Scaling vector
       * @returns {mat4} out
       */

      function mat4_fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = v[1];
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = v[2];
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from a given angle around a given axis
       * This is equivalent to (but much faster than):
       *
       *     mat4.identity(dest);
       *     mat4.rotate(dest, dest, rad, axis);
       *
       * @param {mat4} out mat4 receiving operation result
       * @param {Number} rad the angle to rotate the matrix by
       * @param {ReadonlyVec3} axis the axis to rotate around
       * @returns {mat4} out
       */

      function mat4_fromRotation(out, rad, axis) {
        var x = axis[0],
          y = axis[1],
          z = axis[2];
        var len = Math.hypot(x, y, z);
        var s, c, t;

        if (len < EPSILON) {
          return null;
        }

        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c; // Perform rotation-specific matrix multiplication

        out[0] = x * x * t + c;
        out[1] = y * x * t + z * s;
        out[2] = z * x * t - y * s;
        out[3] = 0;
        out[4] = x * y * t - z * s;
        out[5] = y * y * t + c;
        out[6] = z * y * t + x * s;
        out[7] = 0;
        out[8] = x * z * t + y * s;
        out[9] = y * z * t - x * s;
        out[10] = z * z * t + c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from the given angle around the X axis
       * This is equivalent to (but much faster than):
       *
       *     mat4.identity(dest);
       *     mat4.rotateX(dest, dest, rad);
       *
       * @param {mat4} out mat4 receiving operation result
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat4} out
       */

      function fromXRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad); // Perform axis-specific matrix multiplication

        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = c;
        out[6] = s;
        out[7] = 0;
        out[8] = 0;
        out[9] = -s;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from the given angle around the Y axis
       * This is equivalent to (but much faster than):
       *
       *     mat4.identity(dest);
       *     mat4.rotateY(dest, dest, rad);
       *
       * @param {mat4} out mat4 receiving operation result
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat4} out
       */

      function fromYRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad); // Perform axis-specific matrix multiplication

        out[0] = c;
        out[1] = 0;
        out[2] = -s;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = s;
        out[9] = 0;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from the given angle around the Z axis
       * This is equivalent to (but much faster than):
       *
       *     mat4.identity(dest);
       *     mat4.rotateZ(dest, dest, rad);
       *
       * @param {mat4} out mat4 receiving operation result
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat4} out
       */

      function fromZRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad); // Perform axis-specific matrix multiplication

        out[0] = c;
        out[1] = s;
        out[2] = 0;
        out[3] = 0;
        out[4] = -s;
        out[5] = c;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from a quaternion rotation and vector translation
       * This is equivalent to (but much faster than):
       *
       *     mat4.identity(dest);
       *     mat4.translate(dest, vec);
       *     let quatMat = mat4.create();
       *     quat4.toMat4(quat, quatMat);
       *     mat4.multiply(dest, quatMat);
       *
       * @param {mat4} out mat4 receiving operation result
       * @param {quat4} q Rotation quaternion
       * @param {ReadonlyVec3} v Translation vector
       * @returns {mat4} out
       */

      function fromRotationTranslation(out, q, v) {
        // Quaternion math
        var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - (yy + zz);
        out[1] = xy + wz;
        out[2] = xz - wy;
        out[3] = 0;
        out[4] = xy - wz;
        out[5] = 1 - (xx + zz);
        out[6] = yz + wx;
        out[7] = 0;
        out[8] = xz + wy;
        out[9] = yz - wx;
        out[10] = 1 - (xx + yy);
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
      }
      /**
       * Creates a new mat4 from a dual quat.
       *
       * @param {mat4} out Matrix
       * @param {ReadonlyQuat2} a Dual Quaternion
       * @returns {mat4} mat4 receiving operation result
       */

      function fromQuat2(out, a) {
        var translation = new ARRAY_TYPE(3);
        var bx = -a[0],
          by = -a[1],
          bz = -a[2],
          bw = a[3],
          ax = a[4],
          ay = a[5],
          az = a[6],
          aw = a[7];
        var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

        if (magnitude > 0) {
          translation[0] = ((ax * bw + aw * bx + ay * bz - az * by) * 2) / magnitude;
          translation[1] = ((ay * bw + aw * by + az * bx - ax * bz) * 2) / magnitude;
          translation[2] = ((az * bw + aw * bz + ax * by - ay * bx) * 2) / magnitude;
        } else {
          translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
          translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
          translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
        }

        fromRotationTranslation(out, a, translation);
        return out;
      }
      /**
       * Returns the translation vector component of a transformation
       *  matrix. If a matrix is built with fromRotationTranslation,
       *  the returned vector will be the same as the translation vector
       *  originally supplied.
       * @param  {vec3} out Vector to receive translation component
       * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
       * @return {vec3} out
       */

      function getTranslation(out, mat) {
        out[0] = mat[12];
        out[1] = mat[13];
        out[2] = mat[14];
        return out;
      }
      /**
       * Returns the scaling factor component of a transformation
       *  matrix. If a matrix is built with fromRotationTranslationScale
       *  with a normalized Quaternion paramter, the returned vector will be
       *  the same as the scaling vector
       *  originally supplied.
       * @param  {vec3} out Vector to receive scaling factor component
       * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
       * @return {vec3} out
       */

      function getScaling(out, mat) {
        var m11 = mat[0];
        var m12 = mat[1];
        var m13 = mat[2];
        var m21 = mat[4];
        var m22 = mat[5];
        var m23 = mat[6];
        var m31 = mat[8];
        var m32 = mat[9];
        var m33 = mat[10];
        out[0] = Math.hypot(m11, m12, m13);
        out[1] = Math.hypot(m21, m22, m23);
        out[2] = Math.hypot(m31, m32, m33);
        return out;
      }
      /**
       * Returns a quaternion representing the rotational component
       *  of a transformation matrix. If a matrix is built with
       *  fromRotationTranslation, the returned quaternion will be the
       *  same as the quaternion originally supplied.
       * @param {quat} out Quaternion to receive the rotation component
       * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
       * @return {quat} out
       */

      function getRotation(out, mat) {
        var scaling = new ARRAY_TYPE(3);
        getScaling(scaling, mat);
        var is1 = 1 / scaling[0];
        var is2 = 1 / scaling[1];
        var is3 = 1 / scaling[2];
        var sm11 = mat[0] * is1;
        var sm12 = mat[1] * is2;
        var sm13 = mat[2] * is3;
        var sm21 = mat[4] * is1;
        var sm22 = mat[5] * is2;
        var sm23 = mat[6] * is3;
        var sm31 = mat[8] * is1;
        var sm32 = mat[9] * is2;
        var sm33 = mat[10] * is3;
        var trace = sm11 + sm22 + sm33;
        var S = 0;

        if (trace > 0) {
          S = Math.sqrt(trace + 1.0) * 2;
          out[3] = 0.25 * S;
          out[0] = (sm23 - sm32) / S;
          out[1] = (sm31 - sm13) / S;
          out[2] = (sm12 - sm21) / S;
        } else if (sm11 > sm22 && sm11 > sm33) {
          S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
          out[3] = (sm23 - sm32) / S;
          out[0] = 0.25 * S;
          out[1] = (sm12 + sm21) / S;
          out[2] = (sm31 + sm13) / S;
        } else if (sm22 > sm33) {
          S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
          out[3] = (sm31 - sm13) / S;
          out[0] = (sm12 + sm21) / S;
          out[1] = 0.25 * S;
          out[2] = (sm23 + sm32) / S;
        } else {
          S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
          out[3] = (sm12 - sm21) / S;
          out[0] = (sm31 + sm13) / S;
          out[1] = (sm23 + sm32) / S;
          out[2] = 0.25 * S;
        }

        return out;
      }
      /**
       * Creates a matrix from a quaternion rotation, vector translation and vector scale
       * This is equivalent to (but much faster than):
       *
       *     mat4.identity(dest);
       *     mat4.translate(dest, vec);
       *     let quatMat = mat4.create();
       *     quat4.toMat4(quat, quatMat);
       *     mat4.multiply(dest, quatMat);
       *     mat4.scale(dest, scale)
       *
       * @param {mat4} out mat4 receiving operation result
       * @param {quat4} q Rotation quaternion
       * @param {ReadonlyVec3} v Translation vector
       * @param {ReadonlyVec3} s Scaling vector
       * @returns {mat4} out
       */

      function fromRotationTranslationScale(out, q, v, s) {
        // Quaternion math
        var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        var sx = s[0];
        var sy = s[1];
        var sz = s[2];
        out[0] = (1 - (yy + zz)) * sx;
        out[1] = (xy + wz) * sx;
        out[2] = (xz - wy) * sx;
        out[3] = 0;
        out[4] = (xy - wz) * sy;
        out[5] = (1 - (xx + zz)) * sy;
        out[6] = (yz + wx) * sy;
        out[7] = 0;
        out[8] = (xz + wy) * sz;
        out[9] = (yz - wx) * sz;
        out[10] = (1 - (xx + yy)) * sz;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
      }
      /**
       * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
       * This is equivalent to (but much faster than):
       *
       *     mat4.identity(dest);
       *     mat4.translate(dest, vec);
       *     mat4.translate(dest, origin);
       *     let quatMat = mat4.create();
       *     quat4.toMat4(quat, quatMat);
       *     mat4.multiply(dest, quatMat);
       *     mat4.scale(dest, scale)
       *     mat4.translate(dest, negativeOrigin);
       *
       * @param {mat4} out mat4 receiving operation result
       * @param {quat4} q Rotation quaternion
       * @param {ReadonlyVec3} v Translation vector
       * @param {ReadonlyVec3} s Scaling vector
       * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
       * @returns {mat4} out
       */

      function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
        // Quaternion math
        var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        var sx = s[0];
        var sy = s[1];
        var sz = s[2];
        var ox = o[0];
        var oy = o[1];
        var oz = o[2];
        var out0 = (1 - (yy + zz)) * sx;
        var out1 = (xy + wz) * sx;
        var out2 = (xz - wy) * sx;
        var out4 = (xy - wz) * sy;
        var out5 = (1 - (xx + zz)) * sy;
        var out6 = (yz + wx) * sy;
        var out8 = (xz + wy) * sz;
        var out9 = (yz - wx) * sz;
        var out10 = (1 - (xx + yy)) * sz;
        out[0] = out0;
        out[1] = out1;
        out[2] = out2;
        out[3] = 0;
        out[4] = out4;
        out[5] = out5;
        out[6] = out6;
        out[7] = 0;
        out[8] = out8;
        out[9] = out9;
        out[10] = out10;
        out[11] = 0;
        out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
        out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
        out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
        out[15] = 1;
        return out;
      }
      /**
       * Calculates a 4x4 matrix from the given quaternion
       *
       * @param {mat4} out mat4 receiving operation result
       * @param {ReadonlyQuat} q Quaternion to create matrix from
       *
       * @returns {mat4} out
       */

      function mat4_fromQuat(out, q) {
        var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var yx = y * x2;
        var yy = y * y2;
        var zx = z * x2;
        var zy = z * y2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - yy - zz;
        out[1] = yx + wz;
        out[2] = zx - wy;
        out[3] = 0;
        out[4] = yx - wz;
        out[5] = 1 - xx - zz;
        out[6] = zy + wx;
        out[7] = 0;
        out[8] = zx + wy;
        out[9] = zy - wx;
        out[10] = 1 - xx - yy;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      /**
       * Generates a frustum matrix with the given bounds
       *
       * @param {mat4} out mat4 frustum matrix will be written into
       * @param {Number} left Left bound of the frustum
       * @param {Number} right Right bound of the frustum
       * @param {Number} bottom Bottom bound of the frustum
       * @param {Number} top Top bound of the frustum
       * @param {Number} near Near bound of the frustum
       * @param {Number} far Far bound of the frustum
       * @returns {mat4} out
       */

      function frustum(out, left, right, bottom, top, near, far) {
        var rl = 1 / (right - left);
        var tb = 1 / (top - bottom);
        var nf = 1 / (near - far);
        out[0] = near * 2 * rl;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = near * 2 * tb;
        out[6] = 0;
        out[7] = 0;
        out[8] = (right + left) * rl;
        out[9] = (top + bottom) * tb;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = far * near * 2 * nf;
        out[15] = 0;
        return out;
      }
      /**
       * Generates a perspective projection matrix with the given bounds.
       * Passing null/undefined/no value for far will generate infinite projection matrix.
       *
       * @param {mat4} out mat4 frustum matrix will be written into
       * @param {number} fovy Vertical field of view in radians
       * @param {number} aspect Aspect ratio. typically viewport width/height
       * @param {number} near Near bound of the frustum
       * @param {number} far Far bound of the frustum, can be null or Infinity
       * @returns {mat4} out
       */

      function perspective(out, fovy, aspect, near, far) {
        var f = 1.0 / Math.tan(fovy / 2),
          nf;
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[15] = 0;

        if (far != null && far !== Infinity) {
          nf = 1 / (near - far);
          out[10] = (far + near) * nf;
          out[14] = 2 * far * near * nf;
        } else {
          out[10] = -1;
          out[14] = -2 * near;
        }

        return out;
      }
      /**
       * Generates a perspective projection matrix with the given field of view.
       * This is primarily useful for generating projection matrices to be used
       * with the still experiemental WebVR API.
       *
       * @param {mat4} out mat4 frustum matrix will be written into
       * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
       * @param {number} near Near bound of the frustum
       * @param {number} far Far bound of the frustum
       * @returns {mat4} out
       */

      function perspectiveFromFieldOfView(out, fov, near, far) {
        var upTan = Math.tan((fov.upDegrees * Math.PI) / 180.0);
        var downTan = Math.tan((fov.downDegrees * Math.PI) / 180.0);
        var leftTan = Math.tan((fov.leftDegrees * Math.PI) / 180.0);
        var rightTan = Math.tan((fov.rightDegrees * Math.PI) / 180.0);
        var xScale = 2.0 / (leftTan + rightTan);
        var yScale = 2.0 / (upTan + downTan);
        out[0] = xScale;
        out[1] = 0.0;
        out[2] = 0.0;
        out[3] = 0.0;
        out[4] = 0.0;
        out[5] = yScale;
        out[6] = 0.0;
        out[7] = 0.0;
        out[8] = -((leftTan - rightTan) * xScale * 0.5);
        out[9] = (upTan - downTan) * yScale * 0.5;
        out[10] = far / (near - far);
        out[11] = -1.0;
        out[12] = 0.0;
        out[13] = 0.0;
        out[14] = (far * near) / (near - far);
        out[15] = 0.0;
        return out;
      }
      /**
       * Generates a orthogonal projection matrix with the given bounds
       *
       * @param {mat4} out mat4 frustum matrix will be written into
       * @param {number} left Left bound of the frustum
       * @param {number} right Right bound of the frustum
       * @param {number} bottom Bottom bound of the frustum
       * @param {number} top Top bound of the frustum
       * @param {number} near Near bound of the frustum
       * @param {number} far Far bound of the frustum
       * @returns {mat4} out
       */

      function ortho(out, left, right, bottom, top, near, far) {
        var lr = 1 / (left - right);
        var bt = 1 / (bottom - top);
        var nf = 1 / (near - far);
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 2 * nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;
        return out;
      }
      /**
       * Generates a look-at matrix with the given eye position, focal point, and up axis.
       * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
       *
       * @param {mat4} out mat4 frustum matrix will be written into
       * @param {ReadonlyVec3} eye Position of the viewer
       * @param {ReadonlyVec3} center Point the viewer is looking at
       * @param {ReadonlyVec3} up vec3 pointing up
       * @returns {mat4} out
       */

      function lookAt(out, eye, center, up) {
        var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
        var eyex = eye[0];
        var eyey = eye[1];
        var eyez = eye[2];
        var upx = up[0];
        var upy = up[1];
        var upz = up[2];
        var centerx = center[0];
        var centery = center[1];
        var centerz = center[2];

        if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
          return mat4_identity(out);
        }

        z0 = eyex - centerx;
        z1 = eyey - centery;
        z2 = eyez - centerz;
        len = 1 / Math.hypot(z0, z1, z2);
        z0 *= len;
        z1 *= len;
        z2 *= len;
        x0 = upy * z2 - upz * z1;
        x1 = upz * z0 - upx * z2;
        x2 = upx * z1 - upy * z0;
        len = Math.hypot(x0, x1, x2);

        if (!len) {
          x0 = 0;
          x1 = 0;
          x2 = 0;
        } else {
          len = 1 / len;
          x0 *= len;
          x1 *= len;
          x2 *= len;
        }

        y0 = z1 * x2 - z2 * x1;
        y1 = z2 * x0 - z0 * x2;
        y2 = z0 * x1 - z1 * x0;
        len = Math.hypot(y0, y1, y2);

        if (!len) {
          y0 = 0;
          y1 = 0;
          y2 = 0;
        } else {
          len = 1 / len;
          y0 *= len;
          y1 *= len;
          y2 *= len;
        }

        out[0] = x0;
        out[1] = y0;
        out[2] = z0;
        out[3] = 0;
        out[4] = x1;
        out[5] = y1;
        out[6] = z1;
        out[7] = 0;
        out[8] = x2;
        out[9] = y2;
        out[10] = z2;
        out[11] = 0;
        out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
        out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
        out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
        out[15] = 1;
        return out;
      }
      /**
       * Generates a matrix that makes something look at something else.
       *
       * @param {mat4} out mat4 frustum matrix will be written into
       * @param {ReadonlyVec3} eye Position of the viewer
       * @param {ReadonlyVec3} center Point the viewer is looking at
       * @param {ReadonlyVec3} up vec3 pointing up
       * @returns {mat4} out
       */

      function targetTo(out, eye, target, up) {
        var eyex = eye[0],
          eyey = eye[1],
          eyez = eye[2],
          upx = up[0],
          upy = up[1],
          upz = up[2];
        var z0 = eyex - target[0],
          z1 = eyey - target[1],
          z2 = eyez - target[2];
        var len = z0 * z0 + z1 * z1 + z2 * z2;

        if (len > 0) {
          len = 1 / Math.sqrt(len);
          z0 *= len;
          z1 *= len;
          z2 *= len;
        }

        var x0 = upy * z2 - upz * z1,
          x1 = upz * z0 - upx * z2,
          x2 = upx * z1 - upy * z0;
        len = x0 * x0 + x1 * x1 + x2 * x2;

        if (len > 0) {
          len = 1 / Math.sqrt(len);
          x0 *= len;
          x1 *= len;
          x2 *= len;
        }

        out[0] = x0;
        out[1] = x1;
        out[2] = x2;
        out[3] = 0;
        out[4] = z1 * x2 - z2 * x1;
        out[5] = z2 * x0 - z0 * x2;
        out[6] = z0 * x1 - z1 * x0;
        out[7] = 0;
        out[8] = z0;
        out[9] = z1;
        out[10] = z2;
        out[11] = 0;
        out[12] = eyex;
        out[13] = eyey;
        out[14] = eyez;
        out[15] = 1;
        return out;
      }
      /**
       * Returns a string representation of a mat4
       *
       * @param {ReadonlyMat4} a matrix to represent as a string
       * @returns {String} string representation of the matrix
       */

      function mat4_str(a) {
        return (
          "mat4(" +
          a[0] +
          ", " +
          a[1] +
          ", " +
          a[2] +
          ", " +
          a[3] +
          ", " +
          a[4] +
          ", " +
          a[5] +
          ", " +
          a[6] +
          ", " +
          a[7] +
          ", " +
          a[8] +
          ", " +
          a[9] +
          ", " +
          a[10] +
          ", " +
          a[11] +
          ", " +
          a[12] +
          ", " +
          a[13] +
          ", " +
          a[14] +
          ", " +
          a[15] +
          ")"
        );
      }
      /**
       * Returns Frobenius norm of a mat4
       *
       * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
       * @returns {Number} Frobenius norm
       */

      function mat4_frob(a) {
        return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
      }
      /**
       * Adds two mat4's
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the first operand
       * @param {ReadonlyMat4} b the second operand
       * @returns {mat4} out
       */

      function mat4_add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        out[9] = a[9] + b[9];
        out[10] = a[10] + b[10];
        out[11] = a[11] + b[11];
        out[12] = a[12] + b[12];
        out[13] = a[13] + b[13];
        out[14] = a[14] + b[14];
        out[15] = a[15] + b[15];
        return out;
      }
      /**
       * Subtracts matrix b from matrix a
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the first operand
       * @param {ReadonlyMat4} b the second operand
       * @returns {mat4} out
       */

      function mat4_subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        out[9] = a[9] - b[9];
        out[10] = a[10] - b[10];
        out[11] = a[11] - b[11];
        out[12] = a[12] - b[12];
        out[13] = a[13] - b[13];
        out[14] = a[14] - b[14];
        out[15] = a[15] - b[15];
        return out;
      }
      /**
       * Multiply each element of the matrix by a scalar.
       *
       * @param {mat4} out the receiving matrix
       * @param {ReadonlyMat4} a the matrix to scale
       * @param {Number} b amount to scale the matrix's elements by
       * @returns {mat4} out
       */

      function mat4_multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        out[8] = a[8] * b;
        out[9] = a[9] * b;
        out[10] = a[10] * b;
        out[11] = a[11] * b;
        out[12] = a[12] * b;
        out[13] = a[13] * b;
        out[14] = a[14] * b;
        out[15] = a[15] * b;
        return out;
      }
      /**
       * Adds two mat4's after multiplying each element of the second operand by a scalar value.
       *
       * @param {mat4} out the receiving vector
       * @param {ReadonlyMat4} a the first operand
       * @param {ReadonlyMat4} b the second operand
       * @param {Number} scale the amount to scale b's elements by before adding
       * @returns {mat4} out
       */

      function mat4_multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        out[4] = a[4] + b[4] * scale;
        out[5] = a[5] + b[5] * scale;
        out[6] = a[6] + b[6] * scale;
        out[7] = a[7] + b[7] * scale;
        out[8] = a[8] + b[8] * scale;
        out[9] = a[9] + b[9] * scale;
        out[10] = a[10] + b[10] * scale;
        out[11] = a[11] + b[11] * scale;
        out[12] = a[12] + b[12] * scale;
        out[13] = a[13] + b[13] * scale;
        out[14] = a[14] + b[14] * scale;
        out[15] = a[15] + b[15] * scale;
        return out;
      }
      /**
       * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
       *
       * @param {ReadonlyMat4} a The first matrix.
       * @param {ReadonlyMat4} b The second matrix.
       * @returns {Boolean} True if the matrices are equal, false otherwise.
       */

      function mat4_exactEquals(a, b) {
        return (
          a[0] === b[0] &&
          a[1] === b[1] &&
          a[2] === b[2] &&
          a[3] === b[3] &&
          a[4] === b[4] &&
          a[5] === b[5] &&
          a[6] === b[6] &&
          a[7] === b[7] &&
          a[8] === b[8] &&
          a[9] === b[9] &&
          a[10] === b[10] &&
          a[11] === b[11] &&
          a[12] === b[12] &&
          a[13] === b[13] &&
          a[14] === b[14] &&
          a[15] === b[15]
        );
      }
      /**
       * Returns whether or not the matrices have approximately the same elements in the same position.
       *
       * @param {ReadonlyMat4} a The first matrix.
       * @param {ReadonlyMat4} b The second matrix.
       * @returns {Boolean} True if the matrices are equal, false otherwise.
       */

      function mat4_equals(a, b) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
        var a4 = a[4],
          a5 = a[5],
          a6 = a[6],
          a7 = a[7];
        var a8 = a[8],
          a9 = a[9],
          a10 = a[10],
          a11 = a[11];
        var a12 = a[12],
          a13 = a[13],
          a14 = a[14],
          a15 = a[15];
        var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
        var b4 = b[4],
          b5 = b[5],
          b6 = b[6],
          b7 = b[7];
        var b8 = b[8],
          b9 = b[9],
          b10 = b[10],
          b11 = b[11];
        var b12 = b[12],
          b13 = b[13],
          b14 = b[14],
          b15 = b[15];
        return (
          Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) &&
          Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) &&
          Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) &&
          Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) &&
          Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) &&
          Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) &&
          Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) &&
          Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) &&
          Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15))
        );
      }
      /**
       * Alias for {@link mat4.multiply}
       * @function
       */

      var mat4_mul = mat4_multiply;
      /**
       * Alias for {@link mat4.subtract}
       * @function
       */

      var mat4_sub = mat4_subtract;
      // CONCATENATED MODULE: ./node_modules/gl-matrix/esm/vec3.js

      /**
       * 3 Dimensional Vector
       * @module vec3
       */

      /**
       * Creates a new, empty vec3
       *
       * @returns {vec3} a new 3D vector
       */

      function vec3_create() {
        var out = new ARRAY_TYPE(3);

        if (ARRAY_TYPE != Float32Array) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
        }

        return out;
      }
      /**
       * Creates a new vec3 initialized with values from an existing vector
       *
       * @param {ReadonlyVec3} a vector to clone
       * @returns {vec3} a new 3D vector
       */

      function vec3_clone(a) {
        var out = new ARRAY_TYPE(3);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
      }
      /**
       * Calculates the length of a vec3
       *
       * @param {ReadonlyVec3} a vector to calculate length of
       * @returns {Number} length of a
       */

      function vec3_length(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        return Math.hypot(x, y, z);
      }
      /**
       * Creates a new vec3 initialized with the given values
       *
       * @param {Number} x X component
       * @param {Number} y Y component
       * @param {Number} z Z component
       * @returns {vec3} a new 3D vector
       */

      function vec3_fromValues(x, y, z) {
        var out = new ARRAY_TYPE(3);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
      }
      /**
       * Copy the values from one vec3 to another
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the source vector
       * @returns {vec3} out
       */

      function vec3_copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
      }
      /**
       * Set the components of a vec3 to the given values
       *
       * @param {vec3} out the receiving vector
       * @param {Number} x X component
       * @param {Number} y Y component
       * @param {Number} z Z component
       * @returns {vec3} out
       */

      function vec3_set(out, x, y, z) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
      }
      /**
       * Adds two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @returns {vec3} out
       */

      function vec3_add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
      }
      /**
       * Subtracts vector b from vector a
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @returns {vec3} out
       */

      function vec3_subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
      }
      /**
       * Multiplies two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @returns {vec3} out
       */

      function vec3_multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out;
      }
      /**
       * Divides two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @returns {vec3} out
       */

      function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out;
      }
      /**
       * Math.ceil the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a vector to ceil
       * @returns {vec3} out
       */

      function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        return out;
      }
      /**
       * Math.floor the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a vector to floor
       * @returns {vec3} out
       */

      function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        return out;
      }
      /**
       * Returns the minimum of two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @returns {vec3} out
       */

      function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        return out;
      }
      /**
       * Returns the maximum of two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @returns {vec3} out
       */

      function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        return out;
      }
      /**
       * Math.round the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a vector to round
       * @returns {vec3} out
       */

      function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        return out;
      }
      /**
       * Scales a vec3 by a scalar number
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the vector to scale
       * @param {Number} b amount to scale the vector by
       * @returns {vec3} out
       */

      function vec3_scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        return out;
      }
      /**
       * Adds two vec3's after scaling the second operand by a scalar value
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @param {Number} scale the amount to scale b by before adding
       * @returns {vec3} out
       */

      function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        return out;
      }
      /**
       * Calculates the euclidian distance between two vec3's
       *
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @returns {Number} distance between a and b
       */

      function distance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        return Math.hypot(x, y, z);
      }
      /**
       * Calculates the squared euclidian distance between two vec3's
       *
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @returns {Number} squared distance between a and b
       */

      function squaredDistance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        return x * x + y * y + z * z;
      }
      /**
       * Calculates the squared length of a vec3
       *
       * @param {ReadonlyVec3} a vector to calculate squared length of
       * @returns {Number} squared length of a
       */

      function squaredLength(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        return x * x + y * y + z * z;
      }
      /**
       * Negates the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a vector to negate
       * @returns {vec3} out
       */

      function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
      }
      /**
       * Returns the inverse of the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a vector to invert
       * @returns {vec3} out
       */

      function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        out[2] = 1.0 / a[2];
        return out;
      }
      /**
       * Normalize a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a vector to normalize
       * @returns {vec3} out
       */

      function normalize(out, a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var len = x * x + y * y + z * z;

        if (len > 0) {
          //TODO: evaluate use of glm_invsqrt here?
          len = 1 / Math.sqrt(len);
        }

        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        return out;
      }
      /**
       * Calculates the dot product of two vec3's
       *
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @returns {Number} dot product of a and b
       */

      function vec3_dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      }
      /**
       * Computes the cross product of two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @returns {vec3} out
       */

      function cross(out, a, b) {
        var ax = a[0],
          ay = a[1],
          az = a[2];
        var bx = b[0],
          by = b[1],
          bz = b[2];
        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out;
      }
      /**
       * Performs a linear interpolation between two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {vec3} out
       */

      function lerp(out, a, b, t) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        return out;
      }
      /**
       * Performs a hermite interpolation with two control points
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @param {ReadonlyVec3} c the third operand
       * @param {ReadonlyVec3} d the fourth operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {vec3} out
       */

      function hermite(out, a, b, c, d, t) {
        var factorTimes2 = t * t;
        var factor1 = factorTimes2 * (2 * t - 3) + 1;
        var factor2 = factorTimes2 * (t - 2) + t;
        var factor3 = factorTimes2 * (t - 1);
        var factor4 = factorTimes2 * (3 - 2 * t);
        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
        return out;
      }
      /**
       * Performs a bezier interpolation with two control points
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the first operand
       * @param {ReadonlyVec3} b the second operand
       * @param {ReadonlyVec3} c the third operand
       * @param {ReadonlyVec3} d the fourth operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {vec3} out
       */

      function bezier(out, a, b, c, d, t) {
        var inverseFactor = 1 - t;
        var inverseFactorTimesTwo = inverseFactor * inverseFactor;
        var factorTimes2 = t * t;
        var factor1 = inverseFactorTimesTwo * inverseFactor;
        var factor2 = 3 * t * inverseFactorTimesTwo;
        var factor3 = 3 * factorTimes2 * inverseFactor;
        var factor4 = factorTimes2 * t;
        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
        return out;
      }
      /**
       * Generates a random vector with the given scale
       *
       * @param {vec3} out the receiving vector
       * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
       * @returns {vec3} out
       */

      function random(out, scale) {
        scale = scale || 1.0;
        var r = RANDOM() * 2.0 * Math.PI;
        var z = RANDOM() * 2.0 - 1.0;
        var zScale = Math.sqrt(1.0 - z * z) * scale;
        out[0] = Math.cos(r) * zScale;
        out[1] = Math.sin(r) * zScale;
        out[2] = z * scale;
        return out;
      }
      /**
       * Transforms the vec3 with a mat4.
       * 4th vector component is implicitly '1'
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the vector to transform
       * @param {ReadonlyMat4} m matrix to transform with
       * @returns {vec3} out
       */

      function transformMat4(out, a, m) {
        var x = a[0],
          y = a[1],
          z = a[2];
        var w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
      }
      /**
       * Transforms the vec3 with a mat3.
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the vector to transform
       * @param {ReadonlyMat3} m the 3x3 matrix to transform with
       * @returns {vec3} out
       */

      function transformMat3(out, a, m) {
        var x = a[0],
          y = a[1],
          z = a[2];
        out[0] = x * m[0] + y * m[3] + z * m[6];
        out[1] = x * m[1] + y * m[4] + z * m[7];
        out[2] = x * m[2] + y * m[5] + z * m[8];
        return out;
      }
      /**
       * Transforms the vec3 with a quat
       * Can also be used for dual quaternions. (Multiply it with the real part)
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec3} a the vector to transform
       * @param {ReadonlyQuat} q quaternion to transform with
       * @returns {vec3} out
       */

      function transformQuat(out, a, q) {
        // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
        var qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3];
        var x = a[0],
          y = a[1],
          z = a[2]; // var qvec = [qx, qy, qz];
        // var uv = vec3.cross([], qvec, a);

        var uvx = qy * z - qz * y,
          uvy = qz * x - qx * z,
          uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

        var uuvx = qy * uvz - qz * uvy,
          uuvy = qz * uvx - qx * uvz,
          uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

        var w2 = qw * 2;
        uvx *= w2;
        uvy *= w2;
        uvz *= w2; // vec3.scale(uuv, uuv, 2);

        uuvx *= 2;
        uuvy *= 2;
        uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

        out[0] = x + uvx + uuvx;
        out[1] = y + uvy + uuvy;
        out[2] = z + uvz + uuvz;
        return out;
      }
      /**
       * Rotate a 3D vector around the x-axis
       * @param {vec3} out The receiving vec3
       * @param {ReadonlyVec3} a The vec3 point to rotate
       * @param {ReadonlyVec3} b The origin of the rotation
       * @param {Number} rad The angle of rotation in radians
       * @returns {vec3} out
       */

      function vec3_rotateX(out, a, b, rad) {
        var p = [],
          r = []; //Translate point to the origin

        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2]; //perform rotation

        r[0] = p[0];
        r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
        r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
      }
      /**
       * Rotate a 3D vector around the y-axis
       * @param {vec3} out The receiving vec3
       * @param {ReadonlyVec3} a The vec3 point to rotate
       * @param {ReadonlyVec3} b The origin of the rotation
       * @param {Number} rad The angle of rotation in radians
       * @returns {vec3} out
       */

      function vec3_rotateY(out, a, b, rad) {
        var p = [],
          r = []; //Translate point to the origin

        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2]; //perform rotation

        r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
        r[1] = p[1];
        r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
      }
      /**
       * Rotate a 3D vector around the z-axis
       * @param {vec3} out The receiving vec3
       * @param {ReadonlyVec3} a The vec3 point to rotate
       * @param {ReadonlyVec3} b The origin of the rotation
       * @param {Number} rad The angle of rotation in radians
       * @returns {vec3} out
       */

      function vec3_rotateZ(out, a, b, rad) {
        var p = [],
          r = []; //Translate point to the origin

        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2]; //perform rotation

        r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
        r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
        r[2] = p[2]; //translate to correct position

        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
      }
      /**
       * Get the angle between two 3D vectors
       * @param {ReadonlyVec3} a The first operand
       * @param {ReadonlyVec3} b The second operand
       * @returns {Number} The angle in radians
       */

      function angle(a, b) {
        var ax = a[0],
          ay = a[1],
          az = a[2],
          bx = b[0],
          by = b[1],
          bz = b[2],
          mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
          mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
          mag = mag1 * mag2,
          cosine = mag && vec3_dot(a, b) / mag;
        return Math.acos(Math.min(Math.max(cosine, -1), 1));
      }
      /**
       * Set the components of a vec3 to zero
       *
       * @param {vec3} out the receiving vector
       * @returns {vec3} out
       */

      function zero(out) {
        out[0] = 0.0;
        out[1] = 0.0;
        out[2] = 0.0;
        return out;
      }
      /**
       * Returns a string representation of a vector
       *
       * @param {ReadonlyVec3} a vector to represent as a string
       * @returns {String} string representation of the vector
       */

      function vec3_str(a) {
        return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
      }
      /**
       * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
       *
       * @param {ReadonlyVec3} a The first vector.
       * @param {ReadonlyVec3} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */

      function vec3_exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
      }
      /**
       * Returns whether or not the vectors have approximately the same elements in the same position.
       *
       * @param {ReadonlyVec3} a The first vector.
       * @param {ReadonlyVec3} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */

      function vec3_equals(a, b) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2];
        var b0 = b[0],
          b1 = b[1],
          b2 = b[2];
        return (
          Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2))
        );
      }
      /**
       * Alias for {@link vec3.subtract}
       * @function
       */

      var vec3_sub = vec3_subtract;
      /**
       * Alias for {@link vec3.multiply}
       * @function
       */

      var vec3_mul = vec3_multiply;
      /**
       * Alias for {@link vec3.divide}
       * @function
       */

      var div = divide;
      /**
       * Alias for {@link vec3.distance}
       * @function
       */

      var dist = distance;
      /**
       * Alias for {@link vec3.squaredDistance}
       * @function
       */

      var sqrDist = squaredDistance;
      /**
       * Alias for {@link vec3.length}
       * @function
       */

      var vec3_len = vec3_length;
      /**
       * Alias for {@link vec3.squaredLength}
       * @function
       */

      var sqrLen = squaredLength;
      /**
       * Perform some operation over an array of vec3s.
       *
       * @param {Array} a the array of vectors to iterate over
       * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
       * @param {Number} offset Number of elements to skip at the beginning of the array
       * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
       * @param {Function} fn Function to call for each vector in the array
       * @param {Object} [arg] additional argument to pass to fn
       * @returns {Array} a
       * @function
       */

      var forEach = (function () {
        var vec = vec3_create();
        return function (a, stride, offset, count, fn, arg) {
          var i, l;

          if (!stride) {
            stride = 3;
          }

          if (!offset) {
            offset = 0;
          }

          if (count) {
            l = Math.min(count * stride + offset, a.length);
          } else {
            l = a.length;
          }

          for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
          }

          return a;
        };
      })();
      // CONCATENATED MODULE: ./node_modules/gl-matrix/esm/vec4.js

      /**
       * 4 Dimensional Vector
       * @module vec4
       */

      /**
       * Creates a new, empty vec4
       *
       * @returns {vec4} a new 4D vector
       */

      function vec4_create() {
        var out = new ARRAY_TYPE(4);

        if (ARRAY_TYPE != Float32Array) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
          out[3] = 0;
        }

        return out;
      }
      /**
       * Creates a new vec4 initialized with values from an existing vector
       *
       * @param {ReadonlyVec4} a vector to clone
       * @returns {vec4} a new 4D vector
       */

      function vec4_clone(a) {
        var out = new ARRAY_TYPE(4);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      /**
       * Creates a new vec4 initialized with the given values
       *
       * @param {Number} x X component
       * @param {Number} y Y component
       * @param {Number} z Z component
       * @param {Number} w W component
       * @returns {vec4} a new 4D vector
       */

      function vec4_fromValues(x, y, z, w) {
        var out = new ARRAY_TYPE(4);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
      }
      /**
       * Copy the values from one vec4 to another
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the source vector
       * @returns {vec4} out
       */

      function vec4_copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      /**
       * Set the components of a vec4 to the given values
       *
       * @param {vec4} out the receiving vector
       * @param {Number} x X component
       * @param {Number} y Y component
       * @param {Number} z Z component
       * @param {Number} w W component
       * @returns {vec4} out
       */

      function vec4_set(out, x, y, z, w) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
      }
      /**
       * Adds two vec4's
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the first operand
       * @param {ReadonlyVec4} b the second operand
       * @returns {vec4} out
       */

      function vec4_add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        return out;
      }
      /**
       * Subtracts vector b from vector a
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the first operand
       * @param {ReadonlyVec4} b the second operand
       * @returns {vec4} out
       */

      function vec4_subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        return out;
      }
      /**
       * Multiplies two vec4's
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the first operand
       * @param {ReadonlyVec4} b the second operand
       * @returns {vec4} out
       */

      function vec4_multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        out[3] = a[3] * b[3];
        return out;
      }
      /**
       * Divides two vec4's
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the first operand
       * @param {ReadonlyVec4} b the second operand
       * @returns {vec4} out
       */

      function vec4_divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        out[3] = a[3] / b[3];
        return out;
      }
      /**
       * Math.ceil the components of a vec4
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a vector to ceil
       * @returns {vec4} out
       */

      function vec4_ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        out[3] = Math.ceil(a[3]);
        return out;
      }
      /**
       * Math.floor the components of a vec4
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a vector to floor
       * @returns {vec4} out
       */

      function vec4_floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        out[3] = Math.floor(a[3]);
        return out;
      }
      /**
       * Returns the minimum of two vec4's
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the first operand
       * @param {ReadonlyVec4} b the second operand
       * @returns {vec4} out
       */

      function vec4_min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        out[3] = Math.min(a[3], b[3]);
        return out;
      }
      /**
       * Returns the maximum of two vec4's
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the first operand
       * @param {ReadonlyVec4} b the second operand
       * @returns {vec4} out
       */

      function vec4_max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        out[3] = Math.max(a[3], b[3]);
        return out;
      }
      /**
       * Math.round the components of a vec4
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a vector to round
       * @returns {vec4} out
       */

      function vec4_round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        out[3] = Math.round(a[3]);
        return out;
      }
      /**
       * Scales a vec4 by a scalar number
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the vector to scale
       * @param {Number} b amount to scale the vector by
       * @returns {vec4} out
       */

      function vec4_scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        return out;
      }
      /**
       * Adds two vec4's after scaling the second operand by a scalar value
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the first operand
       * @param {ReadonlyVec4} b the second operand
       * @param {Number} scale the amount to scale b by before adding
       * @returns {vec4} out
       */

      function vec4_scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        return out;
      }
      /**
       * Calculates the euclidian distance between two vec4's
       *
       * @param {ReadonlyVec4} a the first operand
       * @param {ReadonlyVec4} b the second operand
       * @returns {Number} distance between a and b
       */

      function vec4_distance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        var w = b[3] - a[3];
        return Math.hypot(x, y, z, w);
      }
      /**
       * Calculates the squared euclidian distance between two vec4's
       *
       * @param {ReadonlyVec4} a the first operand
       * @param {ReadonlyVec4} b the second operand
       * @returns {Number} squared distance between a and b
       */

      function vec4_squaredDistance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        var w = b[3] - a[3];
        return x * x + y * y + z * z + w * w;
      }
      /**
       * Calculates the length of a vec4
       *
       * @param {ReadonlyVec4} a vector to calculate length of
       * @returns {Number} length of a
       */

      function vec4_length(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        return Math.hypot(x, y, z, w);
      }
      /**
       * Calculates the squared length of a vec4
       *
       * @param {ReadonlyVec4} a vector to calculate squared length of
       * @returns {Number} squared length of a
       */

      function vec4_squaredLength(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        return x * x + y * y + z * z + w * w;
      }
      /**
       * Negates the components of a vec4
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a vector to negate
       * @returns {vec4} out
       */

      function vec4_negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = -a[3];
        return out;
      }
      /**
       * Returns the inverse of the components of a vec4
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a vector to invert
       * @returns {vec4} out
       */

      function vec4_inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        out[2] = 1.0 / a[2];
        out[3] = 1.0 / a[3];
        return out;
      }
      /**
       * Normalize a vec4
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a vector to normalize
       * @returns {vec4} out
       */

      function vec4_normalize(out, a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        var len = x * x + y * y + z * z + w * w;

        if (len > 0) {
          len = 1 / Math.sqrt(len);
        }

        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
        return out;
      }
      /**
       * Calculates the dot product of two vec4's
       *
       * @param {ReadonlyVec4} a the first operand
       * @param {ReadonlyVec4} b the second operand
       * @returns {Number} dot product of a and b
       */

      function vec4_dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
      }
      /**
       * Returns the cross-product of three vectors in a 4-dimensional space
       *
       * @param {ReadonlyVec4} result the receiving vector
       * @param {ReadonlyVec4} U the first vector
       * @param {ReadonlyVec4} V the second vector
       * @param {ReadonlyVec4} W the third vector
       * @returns {vec4} result
       */

      function vec4_cross(out, u, v, w) {
        var A = v[0] * w[1] - v[1] * w[0],
          B = v[0] * w[2] - v[2] * w[0],
          C = v[0] * w[3] - v[3] * w[0],
          D = v[1] * w[2] - v[2] * w[1],
          E = v[1] * w[3] - v[3] * w[1],
          F = v[2] * w[3] - v[3] * w[2];
        var G = u[0];
        var H = u[1];
        var I = u[2];
        var J = u[3];
        out[0] = H * F - I * E + J * D;
        out[1] = -(G * F) + I * C - J * B;
        out[2] = G * E - H * C + J * A;
        out[3] = -(G * D) + H * B - I * A;
        return out;
      }
      /**
       * Performs a linear interpolation between two vec4's
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the first operand
       * @param {ReadonlyVec4} b the second operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {vec4} out
       */

      function vec4_lerp(out, a, b, t) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var aw = a[3];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        out[3] = aw + t * (b[3] - aw);
        return out;
      }
      /**
       * Generates a random vector with the given scale
       *
       * @param {vec4} out the receiving vector
       * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
       * @returns {vec4} out
       */

      function vec4_random(out, scale) {
        scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
        // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
        // http://projecteuclid.org/euclid.aoms/1177692644;

        var v1, v2, v3, v4;
        var s1, s2;

        do {
          v1 = RANDOM() * 2 - 1;
          v2 = RANDOM() * 2 - 1;
          s1 = v1 * v1 + v2 * v2;
        } while (s1 >= 1);

        do {
          v3 = RANDOM() * 2 - 1;
          v4 = RANDOM() * 2 - 1;
          s2 = v3 * v3 + v4 * v4;
        } while (s2 >= 1);

        var d = Math.sqrt((1 - s1) / s2);
        out[0] = scale * v1;
        out[1] = scale * v2;
        out[2] = scale * v3 * d;
        out[3] = scale * v4 * d;
        return out;
      }
      /**
       * Transforms the vec4 with a mat4.
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the vector to transform
       * @param {ReadonlyMat4} m matrix to transform with
       * @returns {vec4} out
       */

      function vec4_transformMat4(out, a, m) {
        var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
        out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
        out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
        out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
        out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
        return out;
      }
      /**
       * Transforms the vec4 with a quat
       *
       * @param {vec4} out the receiving vector
       * @param {ReadonlyVec4} a the vector to transform
       * @param {ReadonlyQuat} q quaternion to transform with
       * @returns {vec4} out
       */

      function vec4_transformQuat(out, a, q) {
        var x = a[0],
          y = a[1],
          z = a[2];
        var qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3]; // calculate quat * vec

        var ix = qw * x + qy * z - qz * y;
        var iy = qw * y + qz * x - qx * z;
        var iz = qw * z + qx * y - qy * x;
        var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

        out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        out[3] = a[3];
        return out;
      }
      /**
       * Set the components of a vec4 to zero
       *
       * @param {vec4} out the receiving vector
       * @returns {vec4} out
       */

      function vec4_zero(out) {
        out[0] = 0.0;
        out[1] = 0.0;
        out[2] = 0.0;
        out[3] = 0.0;
        return out;
      }
      /**
       * Returns a string representation of a vector
       *
       * @param {ReadonlyVec4} a vector to represent as a string
       * @returns {String} string representation of the vector
       */

      function vec4_str(a) {
        return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
      }
      /**
       * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
       *
       * @param {ReadonlyVec4} a The first vector.
       * @param {ReadonlyVec4} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */

      function vec4_exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
      }
      /**
       * Returns whether or not the vectors have approximately the same elements in the same position.
       *
       * @param {ReadonlyVec4} a The first vector.
       * @param {ReadonlyVec4} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */

      function vec4_equals(a, b) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
        var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
        return (
          Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3))
        );
      }
      /**
       * Alias for {@link vec4.subtract}
       * @function
       */

      var vec4_sub = vec4_subtract;
      /**
       * Alias for {@link vec4.multiply}
       * @function
       */

      var vec4_mul = vec4_multiply;
      /**
       * Alias for {@link vec4.divide}
       * @function
       */

      var vec4_div = vec4_divide;
      /**
       * Alias for {@link vec4.distance}
       * @function
       */

      var vec4_dist = vec4_distance;
      /**
       * Alias for {@link vec4.squaredDistance}
       * @function
       */

      var vec4_sqrDist = vec4_squaredDistance;
      /**
       * Alias for {@link vec4.length}
       * @function
       */

      var vec4_len = vec4_length;
      /**
       * Alias for {@link vec4.squaredLength}
       * @function
       */

      var vec4_sqrLen = vec4_squaredLength;
      /**
       * Perform some operation over an array of vec4s.
       *
       * @param {Array} a the array of vectors to iterate over
       * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
       * @param {Number} offset Number of elements to skip at the beginning of the array
       * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
       * @param {Function} fn Function to call for each vector in the array
       * @param {Object} [arg] additional argument to pass to fn
       * @returns {Array} a
       * @function
       */

      var vec4_forEach = (function () {
        var vec = vec4_create();
        return function (a, stride, offset, count, fn, arg) {
          var i, l;

          if (!stride) {
            stride = 4;
          }

          if (!offset) {
            offset = 0;
          }

          if (count) {
            l = Math.min(count * stride + offset, a.length);
          } else {
            l = a.length;
          }

          for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            vec[3] = a[i + 3];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
            a[i + 3] = vec[3];
          }

          return a;
        };
      })();
      // CONCATENATED MODULE: ./node_modules/gl-matrix/esm/quat.js

      /**
       * Quaternion
       * @module quat
       */

      /**
       * Creates a new identity quat
       *
       * @returns {quat} a new quaternion
       */

      function quat_create() {
        var out = new ARRAY_TYPE(4);

        if (ARRAY_TYPE != Float32Array) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
        }

        out[3] = 1;
        return out;
      }
      /**
       * Set a quat to the identity quaternion
       *
       * @param {quat} out the receiving quaternion
       * @returns {quat} out
       */

      function quat_identity(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
      }
      /**
       * Sets a quat from the given angle and rotation axis,
       * then returns it.
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyVec3} axis the axis around which to rotate
       * @param {Number} rad the angle in radians
       * @returns {quat} out
       **/

      function setAxisAngle(out, axis, rad) {
        rad = rad * 0.5;
        var s = Math.sin(rad);
        out[0] = s * axis[0];
        out[1] = s * axis[1];
        out[2] = s * axis[2];
        out[3] = Math.cos(rad);
        return out;
      }
      /**
       * Gets the rotation axis and angle for a given
       *  quaternion. If a quaternion is created with
       *  setAxisAngle, this method will return the same
       *  values as providied in the original parameter list
       *  OR functionally equivalent values.
       * Example: The quaternion formed by axis [0, 0, 1] and
       *  angle -90 is the same as the quaternion formed by
       *  [0, 0, 1] and 270. This method favors the latter.
       * @param  {vec3} out_axis  Vector receiving the axis of rotation
       * @param  {ReadonlyQuat} q     Quaternion to be decomposed
       * @return {Number}     Angle, in radians, of the rotation
       */

      function getAxisAngle(out_axis, q) {
        var rad = Math.acos(q[3]) * 2.0;
        var s = Math.sin(rad / 2.0);

        if (s > EPSILON) {
          out_axis[0] = q[0] / s;
          out_axis[1] = q[1] / s;
          out_axis[2] = q[2] / s;
        } else {
          // If s is zero, return any axis (no rotation - axis does not matter)
          out_axis[0] = 1;
          out_axis[1] = 0;
          out_axis[2] = 0;
        }

        return rad;
      }
      /**
       * Gets the angular distance between two unit quaternions
       *
       * @param  {ReadonlyQuat} a     Origin unit quaternion
       * @param  {ReadonlyQuat} b     Destination unit quaternion
       * @return {Number}     Angle, in radians, between the two quaternions
       */

      function getAngle(a, b) {
        var dotproduct = quat_dot(a, b);
        return Math.acos(2 * dotproduct * dotproduct - 1);
      }
      /**
       * Multiplies two quat's
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a the first operand
       * @param {ReadonlyQuat} b the second operand
       * @returns {quat} out
       */

      function quat_multiply(out, a, b) {
        var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
        var bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];
        out[0] = ax * bw + aw * bx + ay * bz - az * by;
        out[1] = ay * bw + aw * by + az * bx - ax * bz;
        out[2] = az * bw + aw * bz + ax * by - ay * bx;
        out[3] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
      }
      /**
       * Rotates a quaternion by the given angle about the X axis
       *
       * @param {quat} out quat receiving operation result
       * @param {ReadonlyQuat} a quat to rotate
       * @param {number} rad angle (in radians) to rotate
       * @returns {quat} out
       */

      function quat_rotateX(out, a, rad) {
        rad *= 0.5;
        var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
        var bx = Math.sin(rad),
          bw = Math.cos(rad);
        out[0] = ax * bw + aw * bx;
        out[1] = ay * bw + az * bx;
        out[2] = az * bw - ay * bx;
        out[3] = aw * bw - ax * bx;
        return out;
      }
      /**
       * Rotates a quaternion by the given angle about the Y axis
       *
       * @param {quat} out quat receiving operation result
       * @param {ReadonlyQuat} a quat to rotate
       * @param {number} rad angle (in radians) to rotate
       * @returns {quat} out
       */

      function quat_rotateY(out, a, rad) {
        rad *= 0.5;
        var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
        var by = Math.sin(rad),
          bw = Math.cos(rad);
        out[0] = ax * bw - az * by;
        out[1] = ay * bw + aw * by;
        out[2] = az * bw + ax * by;
        out[3] = aw * bw - ay * by;
        return out;
      }
      /**
       * Rotates a quaternion by the given angle about the Z axis
       *
       * @param {quat} out quat receiving operation result
       * @param {ReadonlyQuat} a quat to rotate
       * @param {number} rad angle (in radians) to rotate
       * @returns {quat} out
       */

      function quat_rotateZ(out, a, rad) {
        rad *= 0.5;
        var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
        var bz = Math.sin(rad),
          bw = Math.cos(rad);
        out[0] = ax * bw + ay * bz;
        out[1] = ay * bw - ax * bz;
        out[2] = az * bw + aw * bz;
        out[3] = aw * bw - az * bz;
        return out;
      }
      /**
       * Calculates the W component of a quat from the X, Y, and Z components.
       * Assumes that quaternion is 1 unit in length.
       * Any existing W component will be ignored.
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a quat to calculate W component of
       * @returns {quat} out
       */

      function calculateW(out, a) {
        var x = a[0],
          y = a[1],
          z = a[2];
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
        return out;
      }
      /**
       * Calculate the exponential of a unit quaternion.
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a quat to calculate the exponential of
       * @returns {quat} out
       */

      function exp(out, a) {
        var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
        var r = Math.sqrt(x * x + y * y + z * z);
        var et = Math.exp(w);
        var s = r > 0 ? (et * Math.sin(r)) / r : 0;
        out[0] = x * s;
        out[1] = y * s;
        out[2] = z * s;
        out[3] = et * Math.cos(r);
        return out;
      }
      /**
       * Calculate the natural logarithm of a unit quaternion.
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a quat to calculate the exponential of
       * @returns {quat} out
       */

      function ln(out, a) {
        var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
        var r = Math.sqrt(x * x + y * y + z * z);
        var t = r > 0 ? Math.atan2(r, w) / r : 0;
        out[0] = x * t;
        out[1] = y * t;
        out[2] = z * t;
        out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
        return out;
      }
      /**
       * Calculate the scalar power of a unit quaternion.
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a quat to calculate the exponential of
       * @param {Number} b amount to scale the quaternion by
       * @returns {quat} out
       */

      function pow(out, a, b) {
        ln(out, a);
        quat_scale(out, out, b);
        exp(out, out);
        return out;
      }
      /**
       * Performs a spherical linear interpolation between two quat
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a the first operand
       * @param {ReadonlyQuat} b the second operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {quat} out
       */

      function slerp(out, a, b, t) {
        // benchmarks:
        //    http://jsperf.com/quaternion-slerp-implementations
        var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
        var bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];
        var omega, cosom, sinom, scale0, scale1; // calc cosine

        cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

        if (cosom < 0.0) {
          cosom = -cosom;
          bx = -bx;
          by = -by;
          bz = -bz;
          bw = -bw;
        } // calculate coefficients

        if (1.0 - cosom > EPSILON) {
          // standard case (slerp)
          omega = Math.acos(cosom);
          sinom = Math.sin(omega);
          scale0 = Math.sin((1.0 - t) * omega) / sinom;
          scale1 = Math.sin(t * omega) / sinom;
        } else {
          // "from" and "to" quaternions are very close
          //  ... so we can do a linear interpolation
          scale0 = 1.0 - t;
          scale1 = t;
        } // calculate final values

        out[0] = scale0 * ax + scale1 * bx;
        out[1] = scale0 * ay + scale1 * by;
        out[2] = scale0 * az + scale1 * bz;
        out[3] = scale0 * aw + scale1 * bw;
        return out;
      }
      /**
       * Generates a random unit quaternion
       *
       * @param {quat} out the receiving quaternion
       * @returns {quat} out
       */

      function quat_random(out) {
        // Implementation of http://planning.cs.uiuc.edu/node198.html
        // TODO: Calling random 3 times is probably not the fastest solution
        var u1 = RANDOM();
        var u2 = RANDOM();
        var u3 = RANDOM();
        var sqrt1MinusU1 = Math.sqrt(1 - u1);
        var sqrtU1 = Math.sqrt(u1);
        out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
        out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
        out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
        out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
        return out;
      }
      /**
       * Calculates the inverse of a quat
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a quat to calculate inverse of
       * @returns {quat} out
       */

      function quat_invert(out, a) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
        var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

        out[0] = -a0 * invDot;
        out[1] = -a1 * invDot;
        out[2] = -a2 * invDot;
        out[3] = a3 * invDot;
        return out;
      }
      /**
       * Calculates the conjugate of a quat
       * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a quat to calculate conjugate of
       * @returns {quat} out
       */

      function conjugate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a[3];
        return out;
      }
      /**
       * Creates a quaternion from the given 3x3 rotation matrix.
       *
       * NOTE: The resultant quaternion is not normalized, so you should be sure
       * to renormalize the quaternion yourself where necessary.
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyMat3} m rotation matrix
       * @returns {quat} out
       * @function
       */

      function fromMat3(out, m) {
        // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
        // article "Quaternion Calculus and Fast Animation".
        var fTrace = m[0] + m[4] + m[8];
        var fRoot;

        if (fTrace > 0.0) {
          // |w| > 1/2, may as well choose w > 1/2
          fRoot = Math.sqrt(fTrace + 1.0); // 2w

          out[3] = 0.5 * fRoot;
          fRoot = 0.5 / fRoot; // 1/(4w)

          out[0] = (m[5] - m[7]) * fRoot;
          out[1] = (m[6] - m[2]) * fRoot;
          out[2] = (m[1] - m[3]) * fRoot;
        } else {
          // |w| <= 1/2
          var i = 0;
          if (m[4] > m[0]) i = 1;
          if (m[8] > m[i * 3 + i]) i = 2;
          var j = (i + 1) % 3;
          var k = (i + 2) % 3;
          fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
          out[i] = 0.5 * fRoot;
          fRoot = 0.5 / fRoot;
          out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
          out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
          out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
        }

        return out;
      }
      /**
       * Creates a quaternion from the given euler angle x, y, z.
       *
       * @param {quat} out the receiving quaternion
       * @param {x} Angle to rotate around X axis in degrees.
       * @param {y} Angle to rotate around Y axis in degrees.
       * @param {z} Angle to rotate around Z axis in degrees.
       * @returns {quat} out
       * @function
       */

      function fromEuler(out, x, y, z) {
        var halfToRad = (0.5 * Math.PI) / 180.0;
        x *= halfToRad;
        y *= halfToRad;
        z *= halfToRad;
        var sx = Math.sin(x);
        var cx = Math.cos(x);
        var sy = Math.sin(y);
        var cy = Math.cos(y);
        var sz = Math.sin(z);
        var cz = Math.cos(z);
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
        return out;
      }
      /**
       * Returns a string representation of a quatenion
       *
       * @param {ReadonlyQuat} a vector to represent as a string
       * @returns {String} string representation of the vector
       */

      function quat_str(a) {
        return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
      }
      /**
       * Creates a new quat initialized with values from an existing quaternion
       *
       * @param {ReadonlyQuat} a quaternion to clone
       * @returns {quat} a new quaternion
       * @function
       */

      var quat_clone = vec4_clone;
      /**
       * Creates a new quat initialized with the given values
       *
       * @param {Number} x X component
       * @param {Number} y Y component
       * @param {Number} z Z component
       * @param {Number} w W component
       * @returns {quat} a new quaternion
       * @function
       */

      var quat_fromValues = vec4_fromValues;
      /**
       * Copy the values from one quat to another
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a the source quaternion
       * @returns {quat} out
       * @function
       */

      var quat_copy = vec4_copy;
      /**
       * Set the components of a quat to the given values
       *
       * @param {quat} out the receiving quaternion
       * @param {Number} x X component
       * @param {Number} y Y component
       * @param {Number} z Z component
       * @param {Number} w W component
       * @returns {quat} out
       * @function
       */

      var quat_set = vec4_set;
      /**
       * Adds two quat's
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a the first operand
       * @param {ReadonlyQuat} b the second operand
       * @returns {quat} out
       * @function
       */

      var quat_add = vec4_add;
      /**
       * Alias for {@link quat.multiply}
       * @function
       */

      var quat_mul = quat_multiply;
      /**
       * Scales a quat by a scalar number
       *
       * @param {quat} out the receiving vector
       * @param {ReadonlyQuat} a the vector to scale
       * @param {Number} b amount to scale the vector by
       * @returns {quat} out
       * @function
       */

      var quat_scale = vec4_scale;
      /**
       * Calculates the dot product of two quat's
       *
       * @param {ReadonlyQuat} a the first operand
       * @param {ReadonlyQuat} b the second operand
       * @returns {Number} dot product of a and b
       * @function
       */

      var quat_dot = vec4_dot;
      /**
       * Performs a linear interpolation between two quat's
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a the first operand
       * @param {ReadonlyQuat} b the second operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {quat} out
       * @function
       */

      var quat_lerp = vec4_lerp;
      /**
       * Calculates the length of a quat
       *
       * @param {ReadonlyQuat} a vector to calculate length of
       * @returns {Number} length of a
       */

      var quat_length = vec4_length;
      /**
       * Alias for {@link quat.length}
       * @function
       */

      var quat_len = quat_length;
      /**
       * Calculates the squared length of a quat
       *
       * @param {ReadonlyQuat} a vector to calculate squared length of
       * @returns {Number} squared length of a
       * @function
       */

      var quat_squaredLength = vec4_squaredLength;
      /**
       * Alias for {@link quat.squaredLength}
       * @function
       */

      var quat_sqrLen = quat_squaredLength;
      /**
       * Normalize a quat
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a quaternion to normalize
       * @returns {quat} out
       * @function
       */

      var quat_normalize = vec4_normalize;
      /**
       * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
       *
       * @param {ReadonlyQuat} a The first quaternion.
       * @param {ReadonlyQuat} b The second quaternion.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */

      var quat_exactEquals = vec4_exactEquals;
      /**
       * Returns whether or not the quaternions have approximately the same elements in the same position.
       *
       * @param {ReadonlyQuat} a The first vector.
       * @param {ReadonlyQuat} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */

      var quat_equals = vec4_equals;
      /**
       * Sets a quaternion to represent the shortest rotation from one
       * vector to another.
       *
       * Both vectors are assumed to be unit length.
       *
       * @param {quat} out the receiving quaternion.
       * @param {ReadonlyVec3} a the initial vector
       * @param {ReadonlyVec3} b the destination vector
       * @returns {quat} out
       */

      var rotationTo = (function () {
        var tmpvec3 = vec3_create();
        var xUnitVec3 = vec3_fromValues(1, 0, 0);
        var yUnitVec3 = vec3_fromValues(0, 1, 0);
        return function (out, a, b) {
          var dot = vec3_dot(a, b);

          if (dot < -0.999999) {
            cross(tmpvec3, xUnitVec3, a);
            if (vec3_len(tmpvec3) < 0.000001) cross(tmpvec3, yUnitVec3, a);
            normalize(tmpvec3, tmpvec3);
            setAxisAngle(out, tmpvec3, Math.PI);
            return out;
          } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
          } else {
            cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return quat_normalize(out, out);
          }
        };
      })();
      /**
       * Performs a spherical linear interpolation with two control points
       *
       * @param {quat} out the receiving quaternion
       * @param {ReadonlyQuat} a the first operand
       * @param {ReadonlyQuat} b the second operand
       * @param {ReadonlyQuat} c the third operand
       * @param {ReadonlyQuat} d the fourth operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {quat} out
       */

      var sqlerp = (function () {
        var temp1 = quat_create();
        var temp2 = quat_create();
        return function (out, a, b, c, d, t) {
          slerp(temp1, a, d, t);
          slerp(temp2, b, c, t);
          slerp(out, temp1, temp2, 2 * t * (1 - t));
          return out;
        };
      })();
      /**
       * Sets the specified quaternion with values corresponding to the given
       * axes. Each axis is a vec3 and is expected to be unit length and
       * perpendicular to all other specified axes.
       *
       * @param {ReadonlyVec3} view  the vector representing the viewing direction
       * @param {ReadonlyVec3} right the vector representing the local "right" direction
       * @param {ReadonlyVec3} up    the vector representing the local "up" direction
       * @returns {quat} out
       */

      var setAxes = (function () {
        var matr = mat3_create();
        return function (out, view, right, up) {
          matr[0] = right[0];
          matr[3] = right[1];
          matr[6] = right[2];
          matr[1] = up[0];
          matr[4] = up[1];
          matr[7] = up[2];
          matr[2] = -view[0];
          matr[5] = -view[1];
          matr[8] = -view[2];
          return quat_normalize(out, fromMat3(out, matr));
        };
      })();
      // CONCATENATED MODULE: ./node_modules/gl-matrix/esm/quat2.js

      /**
       * Dual Quaternion<br>
       * Format: [real, dual]<br>
       * Quaternion format: XYZW<br>
       * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
       * @module quat2
       */

      /**
       * Creates a new identity dual quat
       *
       * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
       */

      function quat2_create() {
        var dq = new ARRAY_TYPE(8);

        if (ARRAY_TYPE != Float32Array) {
          dq[0] = 0;
          dq[1] = 0;
          dq[2] = 0;
          dq[4] = 0;
          dq[5] = 0;
          dq[6] = 0;
          dq[7] = 0;
        }

        dq[3] = 1;
        return dq;
      }
      /**
       * Creates a new quat initialized with values from an existing quaternion
       *
       * @param {ReadonlyQuat2} a dual quaternion to clone
       * @returns {quat2} new dual quaternion
       * @function
       */

      function quat2_clone(a) {
        var dq = new ARRAY_TYPE(8);
        dq[0] = a[0];
        dq[1] = a[1];
        dq[2] = a[2];
        dq[3] = a[3];
        dq[4] = a[4];
        dq[5] = a[5];
        dq[6] = a[6];
        dq[7] = a[7];
        return dq;
      }
      /**
       * Creates a new dual quat initialized with the given values
       *
       * @param {Number} x1 X component
       * @param {Number} y1 Y component
       * @param {Number} z1 Z component
       * @param {Number} w1 W component
       * @param {Number} x2 X component
       * @param {Number} y2 Y component
       * @param {Number} z2 Z component
       * @param {Number} w2 W component
       * @returns {quat2} new dual quaternion
       * @function
       */

      function quat2_fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
        var dq = new ARRAY_TYPE(8);
        dq[0] = x1;
        dq[1] = y1;
        dq[2] = z1;
        dq[3] = w1;
        dq[4] = x2;
        dq[5] = y2;
        dq[6] = z2;
        dq[7] = w2;
        return dq;
      }
      /**
       * Creates a new dual quat from the given values (quat and translation)
       *
       * @param {Number} x1 X component
       * @param {Number} y1 Y component
       * @param {Number} z1 Z component
       * @param {Number} w1 W component
       * @param {Number} x2 X component (translation)
       * @param {Number} y2 Y component (translation)
       * @param {Number} z2 Z component (translation)
       * @returns {quat2} new dual quaternion
       * @function
       */

      function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
        var dq = new ARRAY_TYPE(8);
        dq[0] = x1;
        dq[1] = y1;
        dq[2] = z1;
        dq[3] = w1;
        var ax = x2 * 0.5,
          ay = y2 * 0.5,
          az = z2 * 0.5;
        dq[4] = ax * w1 + ay * z1 - az * y1;
        dq[5] = ay * w1 + az * x1 - ax * z1;
        dq[6] = az * w1 + ax * y1 - ay * x1;
        dq[7] = -ax * x1 - ay * y1 - az * z1;
        return dq;
      }
      /**
       * Creates a dual quat from a quaternion and a translation
       *
       * @param {ReadonlyQuat2} dual quaternion receiving operation result
       * @param {ReadonlyQuat} q a normalized quaternion
       * @param {ReadonlyVec3} t tranlation vector
       * @returns {quat2} dual quaternion receiving operation result
       * @function
       */

      function quat2_fromRotationTranslation(out, q, t) {
        var ax = t[0] * 0.5,
          ay = t[1] * 0.5,
          az = t[2] * 0.5,
          bx = q[0],
          by = q[1],
          bz = q[2],
          bw = q[3];
        out[0] = bx;
        out[1] = by;
        out[2] = bz;
        out[3] = bw;
        out[4] = ax * bw + ay * bz - az * by;
        out[5] = ay * bw + az * bx - ax * bz;
        out[6] = az * bw + ax * by - ay * bx;
        out[7] = -ax * bx - ay * by - az * bz;
        return out;
      }
      /**
       * Creates a dual quat from a translation
       *
       * @param {ReadonlyQuat2} dual quaternion receiving operation result
       * @param {ReadonlyVec3} t translation vector
       * @returns {quat2} dual quaternion receiving operation result
       * @function
       */

      function quat2_fromTranslation(out, t) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = t[0] * 0.5;
        out[5] = t[1] * 0.5;
        out[6] = t[2] * 0.5;
        out[7] = 0;
        return out;
      }
      /**
       * Creates a dual quat from a quaternion
       *
       * @param {ReadonlyQuat2} dual quaternion receiving operation result
       * @param {ReadonlyQuat} q the quaternion
       * @returns {quat2} dual quaternion receiving operation result
       * @function
       */

      function quat2_fromRotation(out, q) {
        out[0] = q[0];
        out[1] = q[1];
        out[2] = q[2];
        out[3] = q[3];
        out[4] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        return out;
      }
      /**
       * Creates a new dual quat from a matrix (4x4)
       *
       * @param {quat2} out the dual quaternion
       * @param {ReadonlyMat4} a the matrix
       * @returns {quat2} dual quat receiving operation result
       * @function
       */

      function quat2_fromMat4(out, a) {
        //TODO Optimize this
        var outer = quat_create();
        getRotation(outer, a);
        var t = new ARRAY_TYPE(3);
        getTranslation(t, a);
        quat2_fromRotationTranslation(out, outer, t);
        return out;
      }
      /**
       * Copy the values from one dual quat to another
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat2} a the source dual quaternion
       * @returns {quat2} out
       * @function
       */

      function quat2_copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        return out;
      }
      /**
       * Set a dual quat to the identity dual quaternion
       *
       * @param {quat2} out the receiving quaternion
       * @returns {quat2} out
       */

      function quat2_identity(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        out[4] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        return out;
      }
      /**
       * Set the components of a dual quat to the given values
       *
       * @param {quat2} out the receiving quaternion
       * @param {Number} x1 X component
       * @param {Number} y1 Y component
       * @param {Number} z1 Z component
       * @param {Number} w1 W component
       * @param {Number} x2 X component
       * @param {Number} y2 Y component
       * @param {Number} z2 Z component
       * @param {Number} w2 W component
       * @returns {quat2} out
       * @function
       */

      function quat2_set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
        out[0] = x1;
        out[1] = y1;
        out[2] = z1;
        out[3] = w1;
        out[4] = x2;
        out[5] = y2;
        out[6] = z2;
        out[7] = w2;
        return out;
      }
      /**
       * Gets the real part of a dual quat
       * @param  {quat} out real part
       * @param  {ReadonlyQuat2} a Dual Quaternion
       * @return {quat} real part
       */

      var getReal = quat_copy;
      /**
       * Gets the dual part of a dual quat
       * @param  {quat} out dual part
       * @param  {ReadonlyQuat2} a Dual Quaternion
       * @return {quat} dual part
       */

      function getDual(out, a) {
        out[0] = a[4];
        out[1] = a[5];
        out[2] = a[6];
        out[3] = a[7];
        return out;
      }
      /**
       * Set the real component of a dual quat to the given quaternion
       *
       * @param {quat2} out the receiving quaternion
       * @param {ReadonlyQuat} q a quaternion representing the real part
       * @returns {quat2} out
       * @function
       */

      var setReal = quat_copy;
      /**
       * Set the dual component of a dual quat to the given quaternion
       *
       * @param {quat2} out the receiving quaternion
       * @param {ReadonlyQuat} q a quaternion representing the dual part
       * @returns {quat2} out
       * @function
       */

      function setDual(out, q) {
        out[4] = q[0];
        out[5] = q[1];
        out[6] = q[2];
        out[7] = q[3];
        return out;
      }
      /**
       * Gets the translation of a normalized dual quat
       * @param  {vec3} out translation
       * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
       * @return {vec3} translation
       */

      function quat2_getTranslation(out, a) {
        var ax = a[4],
          ay = a[5],
          az = a[6],
          aw = a[7],
          bx = -a[0],
          by = -a[1],
          bz = -a[2],
          bw = a[3];
        out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
        return out;
      }
      /**
       * Translates a dual quat by the given vector
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat2} a the dual quaternion to translate
       * @param {ReadonlyVec3} v vector to translate by
       * @returns {quat2} out
       */

      function quat2_translate(out, a, v) {
        var ax1 = a[0],
          ay1 = a[1],
          az1 = a[2],
          aw1 = a[3],
          bx1 = v[0] * 0.5,
          by1 = v[1] * 0.5,
          bz1 = v[2] * 0.5,
          ax2 = a[4],
          ay2 = a[5],
          az2 = a[6],
          aw2 = a[7];
        out[0] = ax1;
        out[1] = ay1;
        out[2] = az1;
        out[3] = aw1;
        out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
        out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
        out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
        out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
        return out;
      }
      /**
       * Rotates a dual quat around the X axis
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat2} a the dual quaternion to rotate
       * @param {number} rad how far should the rotation be
       * @returns {quat2} out
       */

      function quat2_rotateX(out, a, rad) {
        var bx = -a[0],
          by = -a[1],
          bz = -a[2],
          bw = a[3],
          ax = a[4],
          ay = a[5],
          az = a[6],
          aw = a[7],
          ax1 = ax * bw + aw * bx + ay * bz - az * by,
          ay1 = ay * bw + aw * by + az * bx - ax * bz,
          az1 = az * bw + aw * bz + ax * by - ay * bx,
          aw1 = aw * bw - ax * bx - ay * by - az * bz;
        quat_rotateX(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
      }
      /**
       * Rotates a dual quat around the Y axis
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat2} a the dual quaternion to rotate
       * @param {number} rad how far should the rotation be
       * @returns {quat2} out
       */

      function quat2_rotateY(out, a, rad) {
        var bx = -a[0],
          by = -a[1],
          bz = -a[2],
          bw = a[3],
          ax = a[4],
          ay = a[5],
          az = a[6],
          aw = a[7],
          ax1 = ax * bw + aw * bx + ay * bz - az * by,
          ay1 = ay * bw + aw * by + az * bx - ax * bz,
          az1 = az * bw + aw * bz + ax * by - ay * bx,
          aw1 = aw * bw - ax * bx - ay * by - az * bz;
        quat_rotateY(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
      }
      /**
       * Rotates a dual quat around the Z axis
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat2} a the dual quaternion to rotate
       * @param {number} rad how far should the rotation be
       * @returns {quat2} out
       */

      function quat2_rotateZ(out, a, rad) {
        var bx = -a[0],
          by = -a[1],
          bz = -a[2],
          bw = a[3],
          ax = a[4],
          ay = a[5],
          az = a[6],
          aw = a[7],
          ax1 = ax * bw + aw * bx + ay * bz - az * by,
          ay1 = ay * bw + aw * by + az * bx - ax * bz,
          az1 = az * bw + aw * bz + ax * by - ay * bx,
          aw1 = aw * bw - ax * bx - ay * by - az * bz;
        quat_rotateZ(out, a, rad);
        bx = out[0];
        by = out[1];
        bz = out[2];
        bw = out[3];
        out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        return out;
      }
      /**
       * Rotates a dual quat by a given quaternion (a * q)
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat2} a the dual quaternion to rotate
       * @param {ReadonlyQuat} q quaternion to rotate by
       * @returns {quat2} out
       */

      function rotateByQuatAppend(out, a, q) {
        var qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3],
          ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
        out[0] = ax * qw + aw * qx + ay * qz - az * qy;
        out[1] = ay * qw + aw * qy + az * qx - ax * qz;
        out[2] = az * qw + aw * qz + ax * qy - ay * qx;
        out[3] = aw * qw - ax * qx - ay * qy - az * qz;
        ax = a[4];
        ay = a[5];
        az = a[6];
        aw = a[7];
        out[4] = ax * qw + aw * qx + ay * qz - az * qy;
        out[5] = ay * qw + aw * qy + az * qx - ax * qz;
        out[6] = az * qw + aw * qz + ax * qy - ay * qx;
        out[7] = aw * qw - ax * qx - ay * qy - az * qz;
        return out;
      }
      /**
       * Rotates a dual quat by a given quaternion (q * a)
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat} q quaternion to rotate by
       * @param {ReadonlyQuat2} a the dual quaternion to rotate
       * @returns {quat2} out
       */

      function rotateByQuatPrepend(out, q, a) {
        var qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3],
          bx = a[0],
          by = a[1],
          bz = a[2],
          bw = a[3];
        out[0] = qx * bw + qw * bx + qy * bz - qz * by;
        out[1] = qy * bw + qw * by + qz * bx - qx * bz;
        out[2] = qz * bw + qw * bz + qx * by - qy * bx;
        out[3] = qw * bw - qx * bx - qy * by - qz * bz;
        bx = a[4];
        by = a[5];
        bz = a[6];
        bw = a[7];
        out[4] = qx * bw + qw * bx + qy * bz - qz * by;
        out[5] = qy * bw + qw * by + qz * bx - qx * bz;
        out[6] = qz * bw + qw * bz + qx * by - qy * bx;
        out[7] = qw * bw - qx * bx - qy * by - qz * bz;
        return out;
      }
      /**
       * Rotates a dual quat around a given axis. Does the normalisation automatically
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat2} a the dual quaternion to rotate
       * @param {ReadonlyVec3} axis the axis to rotate around
       * @param {Number} rad how far the rotation should be
       * @returns {quat2} out
       */

      function rotateAroundAxis(out, a, axis, rad) {
        //Special case for rad = 0
        if (Math.abs(rad) < EPSILON) {
          return quat2_copy(out, a);
        }

        var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
        rad = rad * 0.5;
        var s = Math.sin(rad);
        var bx = (s * axis[0]) / axisLength;
        var by = (s * axis[1]) / axisLength;
        var bz = (s * axis[2]) / axisLength;
        var bw = Math.cos(rad);
        var ax1 = a[0],
          ay1 = a[1],
          az1 = a[2],
          aw1 = a[3];
        out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
        out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
        out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
        out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
        var ax = a[4],
          ay = a[5],
          az = a[6],
          aw = a[7];
        out[4] = ax * bw + aw * bx + ay * bz - az * by;
        out[5] = ay * bw + aw * by + az * bx - ax * bz;
        out[6] = az * bw + aw * bz + ax * by - ay * bx;
        out[7] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
      }
      /**
       * Adds two dual quat's
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat2} a the first operand
       * @param {ReadonlyQuat2} b the second operand
       * @returns {quat2} out
       * @function
       */

      function quat2_add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        return out;
      }
      /**
       * Multiplies two dual quat's
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat2} a the first operand
       * @param {ReadonlyQuat2} b the second operand
       * @returns {quat2} out
       */

      function quat2_multiply(out, a, b) {
        var ax0 = a[0],
          ay0 = a[1],
          az0 = a[2],
          aw0 = a[3],
          bx1 = b[4],
          by1 = b[5],
          bz1 = b[6],
          bw1 = b[7],
          ax1 = a[4],
          ay1 = a[5],
          az1 = a[6],
          aw1 = a[7],
          bx0 = b[0],
          by0 = b[1],
          bz0 = b[2],
          bw0 = b[3];
        out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
        out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
        out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
        out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
        out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
        out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
        out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
        out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
        return out;
      }
      /**
       * Alias for {@link quat2.multiply}
       * @function
       */

      var quat2_mul = quat2_multiply;
      /**
       * Scales a dual quat by a scalar number
       *
       * @param {quat2} out the receiving dual quat
       * @param {ReadonlyQuat2} a the dual quat to scale
       * @param {Number} b amount to scale the dual quat by
       * @returns {quat2} out
       * @function
       */

      function quat2_scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        return out;
      }
      /**
       * Calculates the dot product of two dual quat's (The dot product of the real parts)
       *
       * @param {ReadonlyQuat2} a the first operand
       * @param {ReadonlyQuat2} b the second operand
       * @returns {Number} dot product of a and b
       * @function
       */

      var quat2_dot = quat_dot;
      /**
       * Performs a linear interpolation between two dual quats's
       * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
       *
       * @param {quat2} out the receiving dual quat
       * @param {ReadonlyQuat2} a the first operand
       * @param {ReadonlyQuat2} b the second operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {quat2} out
       */

      function quat2_lerp(out, a, b, t) {
        var mt = 1 - t;
        if (quat2_dot(a, b) < 0) t = -t;
        out[0] = a[0] * mt + b[0] * t;
        out[1] = a[1] * mt + b[1] * t;
        out[2] = a[2] * mt + b[2] * t;
        out[3] = a[3] * mt + b[3] * t;
        out[4] = a[4] * mt + b[4] * t;
        out[5] = a[5] * mt + b[5] * t;
        out[6] = a[6] * mt + b[6] * t;
        out[7] = a[7] * mt + b[7] * t;
        return out;
      }
      /**
       * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat2} a dual quat to calculate inverse of
       * @returns {quat2} out
       */

      function quat2_invert(out, a) {
        var sqlen = quat2_squaredLength(a);
        out[0] = -a[0] / sqlen;
        out[1] = -a[1] / sqlen;
        out[2] = -a[2] / sqlen;
        out[3] = a[3] / sqlen;
        out[4] = -a[4] / sqlen;
        out[5] = -a[5] / sqlen;
        out[6] = -a[6] / sqlen;
        out[7] = a[7] / sqlen;
        return out;
      }
      /**
       * Calculates the conjugate of a dual quat
       * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
       *
       * @param {quat2} out the receiving quaternion
       * @param {ReadonlyQuat2} a quat to calculate conjugate of
       * @returns {quat2} out
       */

      function quat2_conjugate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a[3];
        out[4] = -a[4];
        out[5] = -a[5];
        out[6] = -a[6];
        out[7] = a[7];
        return out;
      }
      /**
       * Calculates the length of a dual quat
       *
       * @param {ReadonlyQuat2} a dual quat to calculate length of
       * @returns {Number} length of a
       * @function
       */

      var quat2_length = quat_length;
      /**
       * Alias for {@link quat2.length}
       * @function
       */

      var quat2_len = quat2_length;
      /**
       * Calculates the squared length of a dual quat
       *
       * @param {ReadonlyQuat2} a dual quat to calculate squared length of
       * @returns {Number} squared length of a
       * @function
       */

      var quat2_squaredLength = quat_squaredLength;
      /**
       * Alias for {@link quat2.squaredLength}
       * @function
       */

      var quat2_sqrLen = quat2_squaredLength;
      /**
       * Normalize a dual quat
       *
       * @param {quat2} out the receiving dual quaternion
       * @param {ReadonlyQuat2} a dual quaternion to normalize
       * @returns {quat2} out
       * @function
       */

      function quat2_normalize(out, a) {
        var magnitude = quat2_squaredLength(a);

        if (magnitude > 0) {
          magnitude = Math.sqrt(magnitude);
          var a0 = a[0] / magnitude;
          var a1 = a[1] / magnitude;
          var a2 = a[2] / magnitude;
          var a3 = a[3] / magnitude;
          var b0 = a[4];
          var b1 = a[5];
          var b2 = a[6];
          var b3 = a[7];
          var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
          out[0] = a0;
          out[1] = a1;
          out[2] = a2;
          out[3] = a3;
          out[4] = (b0 - a0 * a_dot_b) / magnitude;
          out[5] = (b1 - a1 * a_dot_b) / magnitude;
          out[6] = (b2 - a2 * a_dot_b) / magnitude;
          out[7] = (b3 - a3 * a_dot_b) / magnitude;
        }

        return out;
      }
      /**
       * Returns a string representation of a dual quatenion
       *
       * @param {ReadonlyQuat2} a dual quaternion to represent as a string
       * @returns {String} string representation of the dual quat
       */

      function quat2_str(a) {
        return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
      }
      /**
       * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
       *
       * @param {ReadonlyQuat2} a the first dual quaternion.
       * @param {ReadonlyQuat2} b the second dual quaternion.
       * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
       */

      function quat2_exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
      }
      /**
       * Returns whether or not the dual quaternions have approximately the same elements in the same position.
       *
       * @param {ReadonlyQuat2} a the first dual quat.
       * @param {ReadonlyQuat2} b the second dual quat.
       * @returns {Boolean} true if the dual quats are equal, false otherwise.
       */

      function quat2_equals(a, b) {
        var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5],
          a6 = a[6],
          a7 = a[7];
        var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3],
          b4 = b[4],
          b5 = b[5],
          b6 = b[6],
          b7 = b[7];
        return (
          Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) &&
          Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) &&
          Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) &&
          Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) &&
          Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) &&
          Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) &&
          Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) &&
          Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7))
        );
      }
      // CONCATENATED MODULE: ./node_modules/gl-matrix/esm/vec2.js

      /**
       * 2 Dimensional Vector
       * @module vec2
       */

      /**
       * Creates a new, empty vec2
       *
       * @returns {vec2} a new 2D vector
       */

      function vec2_create() {
        var out = new ARRAY_TYPE(2);

        if (ARRAY_TYPE != Float32Array) {
          out[0] = 0;
          out[1] = 0;
        }

        return out;
      }
      /**
       * Creates a new vec2 initialized with values from an existing vector
       *
       * @param {ReadonlyVec2} a vector to clone
       * @returns {vec2} a new 2D vector
       */

      function vec2_clone(a) {
        var out = new ARRAY_TYPE(2);
        out[0] = a[0];
        out[1] = a[1];
        return out;
      }
      /**
       * Creates a new vec2 initialized with the given values
       *
       * @param {Number} x X component
       * @param {Number} y Y component
       * @returns {vec2} a new 2D vector
       */

      function vec2_fromValues(x, y) {
        var out = new ARRAY_TYPE(2);
        out[0] = x;
        out[1] = y;
        return out;
      }
      /**
       * Copy the values from one vec2 to another
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the source vector
       * @returns {vec2} out
       */

      function vec2_copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        return out;
      }
      /**
       * Set the components of a vec2 to the given values
       *
       * @param {vec2} out the receiving vector
       * @param {Number} x X component
       * @param {Number} y Y component
       * @returns {vec2} out
       */

      function vec2_set(out, x, y) {
        out[0] = x;
        out[1] = y;
        return out;
      }
      /**
       * Adds two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @returns {vec2} out
       */

      function vec2_add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        return out;
      }
      /**
       * Subtracts vector b from vector a
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @returns {vec2} out
       */

      function vec2_subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
      }
      /**
       * Multiplies two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @returns {vec2} out
       */

      function vec2_multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
      }
      /**
       * Divides two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @returns {vec2} out
       */

      function vec2_divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
      }
      /**
       * Math.ceil the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a vector to ceil
       * @returns {vec2} out
       */

      function vec2_ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        return out;
      }
      /**
       * Math.floor the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a vector to floor
       * @returns {vec2} out
       */

      function vec2_floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        return out;
      }
      /**
       * Returns the minimum of two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @returns {vec2} out
       */

      function vec2_min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        return out;
      }
      /**
       * Returns the maximum of two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @returns {vec2} out
       */

      function vec2_max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        return out;
      }
      /**
       * Math.round the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a vector to round
       * @returns {vec2} out
       */

      function vec2_round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        return out;
      }
      /**
       * Scales a vec2 by a scalar number
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the vector to scale
       * @param {Number} b amount to scale the vector by
       * @returns {vec2} out
       */

      function vec2_scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        return out;
      }
      /**
       * Adds two vec2's after scaling the second operand by a scalar value
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @param {Number} scale the amount to scale b by before adding
       * @returns {vec2} out
       */

      function vec2_scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        return out;
      }
      /**
       * Calculates the euclidian distance between two vec2's
       *
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @returns {Number} distance between a and b
       */

      function vec2_distance(a, b) {
        var x = b[0] - a[0],
          y = b[1] - a[1];
        return Math.hypot(x, y);
      }
      /**
       * Calculates the squared euclidian distance between two vec2's
       *
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @returns {Number} squared distance between a and b
       */

      function vec2_squaredDistance(a, b) {
        var x = b[0] - a[0],
          y = b[1] - a[1];
        return x * x + y * y;
      }
      /**
       * Calculates the length of a vec2
       *
       * @param {ReadonlyVec2} a vector to calculate length of
       * @returns {Number} length of a
       */

      function vec2_length(a) {
        var x = a[0],
          y = a[1];
        return Math.hypot(x, y);
      }
      /**
       * Calculates the squared length of a vec2
       *
       * @param {ReadonlyVec2} a vector to calculate squared length of
       * @returns {Number} squared length of a
       */

      function vec2_squaredLength(a) {
        var x = a[0],
          y = a[1];
        return x * x + y * y;
      }
      /**
       * Negates the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a vector to negate
       * @returns {vec2} out
       */

      function vec2_negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        return out;
      }
      /**
       * Returns the inverse of the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a vector to invert
       * @returns {vec2} out
       */

      function vec2_inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        return out;
      }
      /**
       * Normalize a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a vector to normalize
       * @returns {vec2} out
       */

      function vec2_normalize(out, a) {
        var x = a[0],
          y = a[1];
        var len = x * x + y * y;

        if (len > 0) {
          //TODO: evaluate use of glm_invsqrt here?
          len = 1 / Math.sqrt(len);
        }

        out[0] = a[0] * len;
        out[1] = a[1] * len;
        return out;
      }
      /**
       * Calculates the dot product of two vec2's
       *
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @returns {Number} dot product of a and b
       */

      function vec2_dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
      }
      /**
       * Computes the cross product of two vec2's
       * Note that the cross product must by definition produce a 3D vector
       *
       * @param {vec3} out the receiving vector
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @returns {vec3} out
       */

      function vec2_cross(out, a, b) {
        var z = a[0] * b[1] - a[1] * b[0];
        out[0] = out[1] = 0;
        out[2] = z;
        return out;
      }
      /**
       * Performs a linear interpolation between two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the first operand
       * @param {ReadonlyVec2} b the second operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {vec2} out
       */

      function vec2_lerp(out, a, b, t) {
        var ax = a[0],
          ay = a[1];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        return out;
      }
      /**
       * Generates a random vector with the given scale
       *
       * @param {vec2} out the receiving vector
       * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
       * @returns {vec2} out
       */

      function vec2_random(out, scale) {
        scale = scale || 1.0;
        var r = RANDOM() * 2.0 * Math.PI;
        out[0] = Math.cos(r) * scale;
        out[1] = Math.sin(r) * scale;
        return out;
      }
      /**
       * Transforms the vec2 with a mat2
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the vector to transform
       * @param {ReadonlyMat2} m matrix to transform with
       * @returns {vec2} out
       */

      function transformMat2(out, a, m) {
        var x = a[0],
          y = a[1];
        out[0] = m[0] * x + m[2] * y;
        out[1] = m[1] * x + m[3] * y;
        return out;
      }
      /**
       * Transforms the vec2 with a mat2d
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the vector to transform
       * @param {ReadonlyMat2d} m matrix to transform with
       * @returns {vec2} out
       */

      function transformMat2d(out, a, m) {
        var x = a[0],
          y = a[1];
        out[0] = m[0] * x + m[2] * y + m[4];
        out[1] = m[1] * x + m[3] * y + m[5];
        return out;
      }
      /**
       * Transforms the vec2 with a mat3
       * 3rd vector component is implicitly '1'
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the vector to transform
       * @param {ReadonlyMat3} m matrix to transform with
       * @returns {vec2} out
       */

      function vec2_transformMat3(out, a, m) {
        var x = a[0],
          y = a[1];
        out[0] = m[0] * x + m[3] * y + m[6];
        out[1] = m[1] * x + m[4] * y + m[7];
        return out;
      }
      /**
       * Transforms the vec2 with a mat4
       * 3rd vector component is implicitly '0'
       * 4th vector component is implicitly '1'
       *
       * @param {vec2} out the receiving vector
       * @param {ReadonlyVec2} a the vector to transform
       * @param {ReadonlyMat4} m matrix to transform with
       * @returns {vec2} out
       */

      function vec2_transformMat4(out, a, m) {
        var x = a[0];
        var y = a[1];
        out[0] = m[0] * x + m[4] * y + m[12];
        out[1] = m[1] * x + m[5] * y + m[13];
        return out;
      }
      /**
       * Rotate a 2D vector
       * @param {vec2} out The receiving vec2
       * @param {ReadonlyVec2} a The vec2 point to rotate
       * @param {ReadonlyVec2} b The origin of the rotation
       * @param {Number} rad The angle of rotation in radians
       * @returns {vec2} out
       */

      function vec2_rotate(out, a, b, rad) {
        //Translate point to the origin
        var p0 = a[0] - b[0],
          p1 = a[1] - b[1],
          sinC = Math.sin(rad),
          cosC = Math.cos(rad); //perform rotation and translate to correct position

        out[0] = p0 * cosC - p1 * sinC + b[0];
        out[1] = p0 * sinC + p1 * cosC + b[1];
        return out;
      }
      /**
       * Get the angle between two 2D vectors
       * @param {ReadonlyVec2} a The first operand
       * @param {ReadonlyVec2} b The second operand
       * @returns {Number} The angle in radians
       */

      function vec2_angle(a, b) {
        var x1 = a[0],
          y1 = a[1],
          x2 = b[0],
          y2 = b[1],
          // mag is the product of the magnitudes of a and b
          mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
          // mag &&.. short circuits if mag == 0
          cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

        return Math.acos(Math.min(Math.max(cosine, -1), 1));
      }
      /**
       * Set the components of a vec2 to zero
       *
       * @param {vec2} out the receiving vector
       * @returns {vec2} out
       */

      function vec2_zero(out) {
        out[0] = 0.0;
        out[1] = 0.0;
        return out;
      }
      /**
       * Returns a string representation of a vector
       *
       * @param {ReadonlyVec2} a vector to represent as a string
       * @returns {String} string representation of the vector
       */

      function vec2_str(a) {
        return "vec2(" + a[0] + ", " + a[1] + ")";
      }
      /**
       * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
       *
       * @param {ReadonlyVec2} a The first vector.
       * @param {ReadonlyVec2} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */

      function vec2_exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1];
      }
      /**
       * Returns whether or not the vectors have approximately the same elements in the same position.
       *
       * @param {ReadonlyVec2} a The first vector.
       * @param {ReadonlyVec2} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */

      function vec2_equals(a, b) {
        var a0 = a[0],
          a1 = a[1];
        var b0 = b[0],
          b1 = b[1];
        return (
          Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1))
        );
      }
      /**
       * Alias for {@link vec2.length}
       * @function
       */

      var vec2_len = vec2_length;
      /**
       * Alias for {@link vec2.subtract}
       * @function
       */

      var vec2_sub = vec2_subtract;
      /**
       * Alias for {@link vec2.multiply}
       * @function
       */

      var vec2_mul = vec2_multiply;
      /**
       * Alias for {@link vec2.divide}
       * @function
       */

      var vec2_div = vec2_divide;
      /**
       * Alias for {@link vec2.distance}
       * @function
       */

      var vec2_dist = vec2_distance;
      /**
       * Alias for {@link vec2.squaredDistance}
       * @function
       */

      var vec2_sqrDist = vec2_squaredDistance;
      /**
       * Alias for {@link vec2.squaredLength}
       * @function
       */

      var vec2_sqrLen = vec2_squaredLength;
      /**
       * Perform some operation over an array of vec2s.
       *
       * @param {Array} a the array of vectors to iterate over
       * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
       * @param {Number} offset Number of elements to skip at the beginning of the array
       * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
       * @param {Function} fn Function to call for each vector in the array
       * @param {Object} [arg] additional argument to pass to fn
       * @returns {Array} a
       * @function
       */

      var vec2_forEach = (function () {
        var vec = vec2_create();
        return function (a, stride, offset, count, fn, arg) {
          var i, l;

          if (!stride) {
            stride = 2;
          }

          if (!offset) {
            offset = 0;
          }

          if (count) {
            l = Math.min(count * stride + offset, a.length);
          } else {
            l = a.length;
          }

          for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
          }

          return a;
        };
      })();
      // CONCATENATED MODULE: ./node_modules/gl-matrix/esm/index.js

      /***/
    },
    /* 2 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              });
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, "default", { enumerable: true, value: v });
            }
          : function (o, v) {
              o["default"] = v;
            });
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
          __setModuleDefault(result, mod);
          return result;
        };
      var __spreadArrays =
        (this && this.__spreadArrays) ||
        function () {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
          return r;
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.LoadModel = exports.Model = void 0;
      var vertexArray_1 = __webpack_require__(8);
      var texture_1 = __webpack_require__(9);
      var glm = __importStar(__webpack_require__(1));
      var obj = __importStar(__webpack_require__(10));
      var Model = /** @class */ (function () {
        function Model() {}
        return Model;
      })();
      exports.Model = Model;
      var Vertex = /** @class */ (function () {
        function Vertex(coords, UV, normal) {
          this.coords = coords;
          this.UV = UV;
          this.normal = normal;
        }
        return Vertex;
      })();
      function LoadModel(data, texFileName, model) {
        var objFile = new obj.default(data);
        var parsed = objFile.parse();
        var vertices = [];
        var UVs = [];
        var normals = [];
        var parsed_vertices = [];
        parsed.models[0].vertices.forEach(function (vertex) {
          return vertices.push({ x: vertex.x, y: vertex.y, z: vertex.z });
        });
        parsed.models[0].textureCoords.forEach(function (coord) {
          return UVs.push({ u: coord.u, v: coord.v });
        });
        parsed.models[0].vertexNormals.forEach(function (normal) {
          return normals.push({ x: normal.x, y: normal.y, z: normal.z });
        });
        for (var _i = 0, _a = parsed.models[0].faces; _i < _a.length; _i++) {
          var face = _a[_i];
          var vs = [];
          for (var _b = 0, _c = face.vertices; _b < _c.length; _b++) {
            var vertex = _c[_b];
            vs.push(vertices[vertex.vertexIndex - 1].x, vertices[vertex.vertexIndex - 1].y, vertices[vertex.vertexIndex - 1].z);
          }
          var x = [vs[0 + 3] - vs[0], vs[1 + 3] - vs[1], vs[2 + 3] - vs[2]];
          var y = [vs[0 + 6] - vs[0], vs[1 + 6] - vs[1], vs[2 + 6] - vs[2]];
          var n = [x[1] * y[2] - x[2] * y[1], x[2] * y[0] - x[0] * y[2], x[0] * y[1] - y[0] * x[1]];
          for (var _d = 0, _e = face.vertices; _d < _e.length; _d++) {
            var vertex = _e[_d];
            var v = [vertices[vertex.vertexIndex - 1].x, vertices[vertex.vertexIndex - 1].y, vertices[vertex.vertexIndex - 1].z];
            var uv = [UVs[vertex.textureCoordsIndex - 1].u, UVs[vertex.textureCoordsIndex - 1].v];
            parsed_vertices.push(new Vertex(v, uv, n));
          }
        }
        var raw = [];
        for (var _f = 0, parsed_vertices_1 = parsed_vertices; _f < parsed_vertices_1.length; _f++) {
          var vertex = parsed_vertices_1[_f];
          raw.push.apply(raw, __spreadArrays(vertex.coords, vertex.normal, vertex.UV));
        }
        model.modelMat = glm.mat4.create();
        glm.mat4.identity(model.modelMat);
        model.array = new vertexArray_1.VertexArray(new Float32Array(raw));
        model.texture = new texture_1.Texture(texFileName);
      }
      exports.LoadModel = LoadModel;

      /***/
    },
    /* 3 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.table = exports.stand = exports.floor = exports.disk = exports.axis = exports.box = void 0;
      exports.box =
        "# Blender v2.80 (sub 51) OBJ File: ''\n# www.blender.org\nmtllib box.mtl\no Cube_Cube.003\nv -0.183331 -0.352359 -0.294199\nv -0.183331 0.352359 -0.294199\nv -0.171835 0.352359 -0.294199\nv -0.171835 -0.352359 -0.294199\nv -0.171835 -0.311313 -0.279125\nv -0.171835 -0.311313 0.279125\nv -0.171835 0.114182 0.279125\nv -0.171835 0.185221 0.370652\nv -0.171835 0.090630 0.399346\nv -0.171835 -0.007741 0.409035\nv -0.171835 -0.106113 0.399346\nv -0.171835 -0.200704 0.370652\nv -0.171835 -0.287880 0.324056\nv -0.171835 -0.352359 0.271139\nv -0.183331 -0.352359 0.271139\nv -0.183331 0.352359 0.257020\nv -0.171835 0.352359 0.257020\nv -0.171835 0.348807 0.261347\nv -0.183331 0.348807 0.261347\nv -0.183331 0.185221 0.370652\nv -0.183331 0.090630 0.399346\nv -0.183331 -0.007741 0.409035\nv -0.183331 -0.106113 0.399346\nv -0.183331 -0.200704 0.370652\nv -0.183331 0.272397 0.324056\nv -0.171835 0.272397 0.324056\nv -0.183331 -0.287880 0.324056\nv 0.191672 -0.012270 -0.061683\nv 0.191672 0.000000 -0.062892\nv 0.191672 0.012269 -0.061683\nv 0.191672 0.024067 -0.058104\nv 0.191672 0.034941 -0.052292\nv 0.191672 0.044471 -0.044471\nv 0.191672 0.052292 -0.034941\nv 0.191672 0.058104 -0.024068\nv 0.191672 0.061683 -0.012270\nv 0.191672 0.062891 0.000000\nv 0.191672 0.061683 0.012269\nv 0.191672 0.058104 0.024067\nv 0.191672 0.052292 0.034941\nv 0.191672 0.044471 0.044471\nv 0.191672 0.034941 0.052292\nv 0.191672 0.024068 0.058104\nv 0.191672 0.012269 0.061683\nv 0.191672 -0.000000 0.062891\nv 0.191672 -0.012270 0.061683\nv 0.191672 -0.024068 0.058104\nv 0.191672 -0.034941 0.052292\nv 0.191672 -0.044471 0.044471\nv 0.191672 -0.052292 0.034941\nv 0.191672 -0.058104 0.024068\nv 0.191672 -0.061683 0.012270\nv 0.191672 -0.062892 -0.000000\nv 0.191672 -0.061683 -0.012270\nv 0.191672 -0.058104 -0.024068\nv 0.191672 -0.052292 -0.034941\nv 0.191672 -0.044471 -0.044471\nv 0.191672 -0.034941 -0.052292\nv 0.191672 -0.024068 -0.058104\nv -0.056974 0.114182 -0.279125\nv -0.171835 0.114182 -0.279125\nv -0.056974 0.114182 0.279125\nv -0.056974 -0.311313 0.279125\nv -0.056974 -0.311313 -0.279125\nv 0.173978 -0.311313 0.279125\nv 0.058502 -0.311313 0.279125\nv 0.058502 -0.311313 -0.279125\nv 0.173978 -0.311313 -0.279125\nv -0.056974 -0.311313 0.069396\nv -0.056974 -0.248316 0.069396\nv -0.056974 -0.164943 0.279125\nv 0.173978 0.114182 -0.279125\nv 0.058502 0.114182 -0.279125\nv 0.058502 0.114182 0.279125\nv 0.173978 0.114182 0.279125\nv 0.173978 -0.000000 0.062891\nv 0.173978 0.012269 0.061683\nv 0.173978 0.024068 0.058104\nv 0.173978 0.034941 0.052292\nv 0.173978 0.044471 0.044471\nv 0.173978 0.052292 0.034941\nv 0.173978 0.058104 0.024067\nv 0.173978 0.061683 0.012269\nv 0.173978 0.062891 0.000000\nv 0.173978 0.061683 -0.012270\nv 0.173978 0.058104 -0.024068\nv 0.173978 0.052292 -0.034941\nv 0.173978 0.044471 -0.044471\nv 0.173978 0.034941 -0.052292\nv 0.173978 0.024067 -0.058104\nv 0.173978 0.012269 -0.061683\nv 0.173978 0.000000 -0.062892\nv -0.056974 -0.164943 -0.279125\nv -0.056974 -0.248316 -0.069396\nv -0.056974 -0.311313 -0.069396\nv 0.058502 -0.164943 -0.279125\nv 0.058502 -0.164943 0.279125\nv 0.058502 -0.000000 0.028755\nv 0.058502 -0.005610 0.028203\nv 0.058502 -0.011004 0.026566\nv 0.058502 -0.015976 0.023909\nv 0.058502 -0.020333 0.020333\nv 0.058502 -0.023909 0.015976\nv 0.058502 -0.026567 0.011004\nv 0.058502 -0.028203 0.005610\nv 0.058502 -0.028755 -0.000000\nv 0.058502 -0.028203 -0.005610\nv 0.058502 -0.026567 -0.011004\nv 0.058502 -0.023909 -0.015976\nv 0.058502 -0.020333 -0.020333\nv 0.058502 -0.015976 -0.023909\nv 0.058502 -0.011004 -0.026566\nv 0.058502 -0.005610 -0.028203\nv 0.058502 0.000000 -0.028755\nv -0.056974 0.000000 -0.028755\nv -0.056974 -0.005610 -0.028203\nv -0.056974 -0.011004 -0.026566\nv -0.056974 -0.015976 -0.023909\nv -0.056974 -0.020333 -0.020333\nv -0.056974 -0.023909 -0.015976\nv -0.056974 -0.026567 -0.011004\nv -0.056974 -0.028203 -0.005610\nv -0.056974 -0.028755 -0.000000\nv -0.056974 -0.028203 0.005610\nv -0.056974 -0.026567 0.011004\nv -0.056974 -0.023909 0.015976\nv -0.056974 -0.020333 0.020333\nv -0.056974 -0.015976 0.023909\nv -0.056974 -0.011004 0.026566\nv -0.056974 -0.005610 0.028203\nv -0.056974 -0.000000 0.028755\nv -0.056974 0.028755 0.000000\nv 0.058502 0.028755 0.000000\nv 0.058502 0.028203 -0.005610\nv -0.056974 0.028203 -0.005610\nv -0.056974 0.005610 -0.028203\nv 0.058502 0.005610 -0.028203\nv 0.058502 0.005610 0.028203\nv -0.056974 0.005610 0.028203\nv -0.056974 0.026566 -0.011004\nv 0.058502 0.026566 -0.011004\nv 0.058502 0.023909 -0.015976\nv -0.056974 0.023909 -0.015976\nv -0.056974 0.011004 -0.026566\nv 0.058502 0.011004 -0.026566\nv -0.056974 0.011004 0.026566\nv 0.058502 0.011004 0.026566\nv 0.058502 0.015976 0.023909\nv -0.056974 0.015976 0.023909\nv -0.056974 0.020333 0.020333\nv -0.056974 0.023909 0.015976\nv -0.056974 0.026566 0.011004\nv -0.056974 0.028203 0.005610\nv -0.056974 0.020333 -0.020333\nv -0.056974 0.015976 -0.023909\nv 0.058502 0.020333 -0.020333\nv 0.058502 0.015976 -0.023909\nv 0.058502 0.028203 0.005610\nv 0.058502 0.026566 0.011004\nv 0.058502 0.023909 0.015976\nv 0.058502 0.020333 0.020333\nv 0.173978 -0.062892 -0.000000\nv 0.173978 -0.061683 0.012270\nv 0.173978 -0.052292 0.034941\nv 0.173978 -0.044471 0.044471\nv 0.173978 -0.058104 0.024068\nv 0.173978 -0.058104 -0.024068\nv 0.173978 -0.061683 -0.012270\nv 0.173978 -0.044471 -0.044471\nv 0.173978 -0.052292 -0.034941\nv 0.173978 -0.012270 0.061683\nv 0.173978 -0.034941 -0.052292\nv 0.173978 -0.024068 -0.058104\nv 0.173978 -0.034941 0.052292\nv 0.173978 -0.024068 0.058104\nv 0.173978 -0.012270 -0.061683\nv 0.058502 -0.311313 0.069396\nv 0.058502 -0.311313 -0.069396\nv 0.058502 -0.248316 -0.069396\nv 0.058502 -0.248316 0.069396\nvt 0.976245 0.671027\nvt 0.972341 0.987973\nvt 0.976245 0.987973\nvt 0.736763 0.877224\nvt 0.746509 0.919766\nvt 0.777599 0.778146\nvt 0.984054 0.925287\nvt 0.980150 0.671027\nvt 0.980150 0.925287\nvt 0.987959 0.920883\nvt 0.984054 0.672973\nvt 0.984054 0.920883\nvt 0.987959 0.671027\nvt 0.984054 0.671027\nvt 0.976245 0.780499\nvt 0.980150 0.739426\nvt 0.976245 0.739426\nvt 0.976245 0.868558\nvt 0.980150 0.824101\nvt 0.976245 0.824101\nvt 0.976245 0.912160\nvt 0.980150 0.868558\nvt 0.976245 0.702462\nvt 0.980150 0.671027\nvt 0.976245 0.671027\nvt 0.026023 0.993657\nvt 0.026023 0.157665\nvt 0.686627 0.683173\nvt 0.980150 0.702462\nvt 0.980150 0.780499\nvt 0.976245 0.953233\nvt 0.980150 0.912160\nvt 0.976245 0.984425\nvt 0.980150 0.953233\nvt 0.874378 0.483997\nvt 0.923351 0.470523\nvt 0.838512 0.376760\nvt 0.866151 0.144067\nvt 0.884926 0.265167\nvt 0.884926 0.144067\nvt 0.866151 0.265167\nvt 0.847377 0.144067\nvt 0.847377 0.265167\nvt 0.916925 0.022968\nvt 0.935800 0.144067\nvt 0.935800 0.022968\nvt 0.839589 0.219671\nvt 0.823452 0.265167\nvt 0.954675 0.144067\nvt 0.935800 0.022968\nvt 0.935800 0.144067\nvt 0.916925 0.236368\nvt 0.898050 0.144067\nvt 0.898050 0.236368\nvt 0.935800 0.144067\nvt 0.954575 0.236368\nvt 0.954575 0.144067\nvt 0.838993 0.083518\nvt 0.838796 0.086179\nvt 0.847377 0.144067\nvt 0.916925 0.144067\nvt 0.935800 0.236368\nvt 0.935800 0.144067\nvt 0.839589 0.189563\nvt 0.823452 0.144067\nvt 0.893001 0.022968\nvt 0.870650 0.082301\nvt 0.870740 0.083518\nvt 0.801101 0.203400\nvt 0.801192 0.204617\nvt 0.156886 0.131091\nvt 0.164632 0.015298\nvt 0.156886 0.015298\nvt 0.179383 0.131091\nvt 0.185823 0.015298\nvt 0.179383 0.015298\nvt 0.172228 0.131091\nvt 0.172228 0.015298\nvt 0.047945 0.015298\nvt 0.040200 0.131091\nvt 0.047945 0.131091\nvt 0.142135 0.131091\nvt 0.149290 0.015298\nvt 0.142135 0.015298\nvt 0.149290 0.131091\nvt 0.130218 0.131091\nvt 0.135695 0.015298\nvt 0.130218 0.015298\nvt 0.222356 0.015298\nvt 0.214760 0.131091\nvt 0.222356 0.131091\nvt 0.101282 0.131091\nvt 0.109027 0.015298\nvt 0.101282 0.015298\nvt 0.032604 0.015298\nvt 0.025448 0.131091\nvt 0.032604 0.131091\nvt 0.093686 0.131091\nvt 0.093686 0.015298\nvt 0.229511 0.015298\nvt 0.229511 0.131091\nvt 0.192263 0.015298\nvt 0.185823 0.131091\nvt 0.192263 0.131091\nvt 0.116623 0.131091\nvt 0.123778 0.015298\nvt 0.116623 0.015298\nvt 0.791791 0.204617\nvt 0.791882 0.203400\nvt 0.777828 0.144067\nvt 0.199418 0.015298\nvt 0.199418 0.131091\nvt 0.074613 0.131091\nvt 0.080090 0.015298\nvt 0.074613 0.015298\nvt 0.019009 0.015298\nvt 0.013532 0.131091\nvt 0.019009 0.131091\nvt 0.861340 0.083518\nvt 0.861430 0.082301\nvt 0.847377 0.022968\nvt 0.040200 0.015298\nvt 0.080090 0.131091\nvt 0.086530 0.015298\nvt 0.123779 0.131091\nvt 0.130218 0.015298\nvt 0.069137 0.015298\nvt 0.062697 0.131091\nvt 0.069137 0.131091\nvt 0.214760 0.015298\nvt 0.207014 0.131091\nvt 0.135695 0.131091\nvt 0.055542 0.015298\nvt 0.055542 0.131091\nvt 0.164632 0.131091\nvt 0.109027 0.131091\nvt 0.235951 0.015298\nvt 0.235951 0.131091\nvt 0.207014 0.015298\nvt 0.086530 0.131091\nvt 0.062697 0.015298\nvt 0.025448 0.015298\nvt 0.074613 0.015298\nvt 0.074613 0.131091\nvt 0.985100 0.504722\nvt 0.966288 0.493061\nvt 0.966288 0.504722\nvt 0.985100 0.469511\nvt 0.966288 0.458527\nvt 0.966288 0.469511\nvt 0.985100 0.481172\nvt 0.966288 0.481172\nvt 0.985100 0.404222\nvt 0.966288 0.392562\nvt 0.966288 0.404222\nvt 0.985100 0.525591\nvt 0.966288 0.515706\nvt 0.966288 0.525591\nvt 0.985100 0.515706\nvt 0.966288 0.371692\nvt 0.947476 0.363285\nvt 0.947476 0.371692\nvt 0.966288 0.427772\nvt 0.947476 0.416111\nvt 0.947476 0.427772\nvt 0.947476 0.489579\nvt 0.966288 0.501468\nvt 0.966288 0.489579\nvt 0.985100 0.381578\nvt 0.966288 0.371692\nvt 0.966288 0.381578\nvt 0.947476 0.477918\nvt 0.966288 0.477918\nvt 0.966288 0.438756\nvt 0.947476 0.438756\nvt 0.966288 0.381578\nvt 0.947476 0.381578\nvt 0.947476 0.513128\nvt 0.966288 0.524113\nvt 0.966288 0.513128\nvt 0.966288 0.392562\nvt 0.947476 0.392562\nvt 0.985100 0.458527\nvt 0.966288 0.448642\nvt 0.966288 0.457048\nvt 0.947476 0.448642\nvt 0.947476 0.457048\nvt 0.985100 0.392562\nvt 0.947476 0.457048\nvt 0.966288 0.466934\nvt 0.966288 0.457048\nvt 0.947476 0.524113\nvt 0.966288 0.533998\nvt 0.985100 0.438756\nvt 0.966288 0.427772\nvt 0.966288 0.438756\nvt 0.966288 0.416111\nvt 0.947476 0.404222\nvt 0.985100 0.533998\nvt 0.966288 0.533998\nvt 0.985100 0.416111\nvt 0.966288 0.416111\nvt 0.985100 0.493061\nvt 0.947476 0.501468\nvt 0.966288 0.448642\nvt 0.947476 0.466934\nvt 0.966288 0.404222\nvt 0.985100 0.427772\nvt 0.985100 0.371692\nvt 0.966288 0.363285\nvt 0.777828 0.022968\nvt 0.818433 0.083518\nvt 0.818631 0.080856\nvt 0.985100 0.448642\nvt 0.966288 0.448642\nvt 0.973349 0.236368\nvt 0.954575 0.144067\nvt 0.954575 0.236368\nvt 0.777828 0.022968\nvt 0.777828 0.022968\nvt 0.777828 0.022968\nvt 0.967220 0.778146\nvt 0.972341 0.671027\nvt 0.954675 0.022968\nvt 0.954675 0.098572\nvt 0.954675 0.144067\nvt 0.916925 0.266476\nvt 0.898050 0.236368\nvt 0.898050 0.266476\nvt 0.935800 0.266476\nvt 0.916925 0.236368\nvt 0.916925 0.266476\nvt 0.884926 0.169117\nvt 0.892714 0.194167\nvt 0.892714 0.169117\nvt 0.892714 0.169117\nvt 0.884926 0.144067\nvt 0.884926 0.169117\nvt 0.954675 0.022968\nvt 0.954675 0.098572\nvt 0.954675 0.144067\nvt 0.909137 0.098572\nvt 0.893001 0.144067\nvt 0.916925 0.144067\nvt 0.909137 0.068464\nvt 0.780311 0.987972\nvt 0.967220 0.969512\nvt 0.777599 0.969512\nvt 0.746510 0.746197\nvt 0.736763 0.788739\nvt 0.733472 0.832981\nvt 0.762337 0.958973\nvt 0.984054 0.671027\nvt 0.987959 0.672973\nvt 0.564510 0.157665\nvt 0.614913 0.234155\nvt 0.659296 0.337570\nvt 0.686627 0.449782\nvt 0.695856 0.566478\nvt 0.659296 0.795385\nvt 0.614913 0.898800\nvt 0.555183 0.989443\nvt 0.551061 0.993657\nvt 0.980150 0.984425\nvt 0.932620 0.462116\nvt 0.939902 0.452231\nvt 0.944919 0.441247\nvt 0.947476 0.429586\nvt 0.947476 0.417697\nvt 0.944919 0.406036\nvt 0.939902 0.395052\nvt 0.932620 0.385167\nvt 0.923351 0.376760\nvt 0.912452 0.370155\nvt 0.900342 0.365605\nvt 0.887486 0.363285\nvt 0.874378 0.363285\nvt 0.861522 0.365605\nvt 0.849411 0.370155\nvt 0.829243 0.385167\nvt 0.821961 0.395052\nvt 0.816945 0.406036\nvt 0.814388 0.417697\nvt 0.814388 0.429586\nvt 0.816945 0.441247\nvt 0.821961 0.452231\nvt 0.829243 0.462116\nvt 0.838512 0.470523\nvt 0.849411 0.477128\nvt 0.861521 0.481678\nvt 0.887486 0.483997\nvt 0.900342 0.481678\nvt 0.912452 0.477128\nvt 0.866151 0.265167\nvt 0.866151 0.144067\nvt 0.847377 0.219671\nvt 0.954675 0.022968\nvt 0.916925 0.144067\nvt 0.935800 0.236368\nvt 0.847377 0.022968\nvt 0.828713 0.069875\nvt 0.830719 0.070137\nvt 0.832647 0.070913\nvt 0.830719 0.096898\nvt 0.828713 0.097161\nvt 0.832647 0.096122\nvt 0.834424 0.072174\nvt 0.835982 0.073871\nvt 0.834424 0.094861\nvt 0.835982 0.093165\nvt 0.837261 0.075938\nvt 0.838211 0.078297\nvt 0.837261 0.091097\nvt 0.838211 0.088739\nvt 0.838796 0.080856\nvt 0.916925 0.236368\nvt 0.847377 0.189563\nvt 0.866040 0.089755\nvt 0.847377 0.144067\nvt 0.866957 0.089636\nvt 0.866957 0.077400\nvt 0.866040 0.077280\nvt 0.867839 0.089281\nvt 0.867839 0.077755\nvt 0.868651 0.078331\nvt 0.868651 0.088704\nvt 0.869364 0.087928\nvt 0.869364 0.079107\nvt 0.869948 0.080052\nvt 0.869948 0.086983\nvt 0.870383 0.085905\nvt 0.870383 0.081131\nvt 0.870650 0.084735\nvt 0.796492 0.210855\nvt 0.777828 0.265167\nvt 0.797409 0.210735\nvt 0.797409 0.198499\nvt 0.796492 0.198379\nvt 0.798290 0.210380\nvt 0.798290 0.198854\nvt 0.799103 0.199430\nvt 0.799103 0.209803\nvt 0.799815 0.209028\nvt 0.799815 0.200206\nvt 0.800400 0.201151\nvt 0.800400 0.208082\nvt 0.800834 0.207004\nvt 0.800834 0.202230\nvt 0.801101 0.205834\nvt 0.185823 0.131091\nvt 0.185823 0.015298\nvt 0.795575 0.210735\nvt 0.794693 0.210380\nvt 0.795575 0.198499\nvt 0.794693 0.198854\nvt 0.793880 0.209803\nvt 0.793168 0.209028\nvt 0.793880 0.199430\nvt 0.793168 0.200206\nvt 0.792583 0.208082\nvt 0.792149 0.207004\nvt 0.792583 0.201151\nvt 0.792149 0.202230\nvt 0.791882 0.205834\nvt 0.013532 0.015298\nvt 0.865123 0.089636\nvt 0.864242 0.089281\nvt 0.865123 0.077400\nvt 0.864242 0.077755\nvt 0.863429 0.088704\nvt 0.862717 0.087928\nvt 0.863429 0.078331\nvt 0.862717 0.079107\nvt 0.862132 0.086983\nvt 0.861698 0.085905\nvt 0.862132 0.080052\nvt 0.861698 0.081131\nvt 0.861430 0.084735\nvt 0.130218 0.131091\nvt 0.966288 0.363285\nvt 0.985100 0.448642\nvt 0.947476 0.533998\nvt 0.985100 0.363285\nvt 0.826708 0.070137\nvt 0.824779 0.070913\nvt 0.777828 0.144067\nvt 0.824779 0.096122\nvt 0.821444 0.093165\nvt 0.823002 0.094861\nvt 0.826708 0.096898\nvt 0.823002 0.072174\nvt 0.821444 0.073871\nvt 0.820166 0.091097\nvt 0.819216 0.088739\nvt 0.820166 0.075938\nvt 0.819216 0.078297\nvt 0.818631 0.086179\nvt 0.973349 0.144067\nvt 0.785107 0.671027\nvt 0.783637 0.672624\nvt 0.762337 0.706989\nvt 0.954675 0.068464\nvt 0.916925 0.236368\nvt 0.935800 0.236368\nvt 0.884926 0.194167\nvt 0.892714 0.144067\nvt 0.954675 0.068464\nvt 0.916925 0.098572\nvt 0.916925 0.068464\n\nusemtl Material.004\ns 1\nf 2/1/1 4/2/1 1/3/1\nf 11/4/2 12/5/2 7/6/2\nf 4/7/3 15/8/3 1/9/3\nf 2/10/4 17/11/4 3/12/4\nf 17/11/5 19/13/5 18/14/5\nf 21/15/6 8/16/6 20/17/6\nf 23/18/7 10/19/7 22/20/7\nf 24/21/8 11/22/8 23/18/8\nf 25/23/9 18/24/9 19/25/9\nf 2/26/10 1/27/10 21/28/10\nf 20/17/11 26/29/11 25/23/11\nf 22/20/12 9/30/12 21/15/12\nf 27/31/13 12/32/13 24/21/13\nf 15/33/14 13/34/14 27/31/14\nf 55/35/2 59/36/2 43/37/2\nf 61/38/4 62/39/4 60/40/4\nf 6/41/3 64/42/3 63/43/3\nf 66/44/3 68/45/3 65/46/3\nf 63/43/2 70/47/2 71/48/2\nf 73/49/4 75/50/4 72/51/4\nf 74/52/15 65/53/15 75/54/15\nf 7/55/15 63/56/15 62/57/15\nf 84/58/2 85/59/2 72/60/2\nf 72/61/1 67/62/1 73/63/1\nf 94/64/2 64/42/2 93/65/2\nf 97/66/10 105/67/10 106/68/10\nf 93/65/2 122/69/2 123/70/2\nf 106/71/16 124/72/16 123/73/16\nf 103/74/17 127/75/17 126/76/17\nf 104/77/18 126/76/18 125/78/18\nf 133/79/19 135/80/19 132/81/19\nf 108/82/20 122/83/20 121/84/20\nf 107/85/21 123/73/21 122/83/21\nf 110/86/22 120/87/22 119/88/22\nf 137/89/23 115/90/23 136/91/23\nf 98/92/24 139/93/24 131/94/24\nf 141/95/25 143/96/25 140/97/25\nf 99/98/26 131/94/26 130/99/26\nf 145/100/27 136/91/27 144/101/27\nf 111/102/28 119/103/28 118/104/28\nf 147/105/29 149/106/29 146/107/29\nf 132/108/2 135/109/2 60/110/2\nf 112/111/30 118/104/30 117/112/30\nf 102/113/14 128/114/14 127/115/14\nf 156/116/31 155/117/31 154/118/31\nf 133/119/10 158/120/10 74/121/10\nf 134/122/32 140/97/32 135/80/32\nf 101/123/33 129/124/33 128/114/33\nf 148/125/9 150/126/9 149/106/9\nf 160/127/34 152/128/34 151/129/34\nf 114/130/35 116/131/35 115/90/35\nf 109/132/36 121/84/36 120/87/36\nf 158/133/37 132/81/37 153/134/37\nf 105/135/38 125/78/38 124/72/38\nf 138/136/39 146/107/39 139/93/39\nf 157/137/40 144/101/40 155/138/40\nf 113/139/41 117/112/41 116/131/41\nf 100/140/42 130/99/42 129/124/42\nf 159/141/43 153/134/43 152/128/43\nf 142/142/44 154/118/44 143/96/44\nf 161/143/45 151/129/45 150/144/45\nf 53/145/46 163/146/46 162/147/46\nf 50/148/17 165/149/17 164/150/17\nf 51/151/47 164/150/47 166/152/47\nf 37/153/48 85/154/48 84/155/48\nf 55/156/49 168/157/49 167/158/49\nf 54/159/50 162/147/50 168/157/50\nf 57/160/22 170/161/22 169/162/22\nf 30/163/51 92/164/51 91/165/51\nf 45/166/12 77/167/12 76/168/12\nf 35/169/52 87/170/52 86/171/52\nf 46/172/7 76/168/7 171/173/7\nf 31/174/53 91/165/53 90/175/53\nf 58/176/28 169/162/28 172/177/28\nf 43/178/11 79/179/11 78/180/11\nf 59/181/54 172/177/54 173/182/54\nf 49/183/14 174/184/14 165/149/14\nf 33/185/31 89/186/31 88/187/31\nf 36/188/55 86/171/55 85/154/55\nf 48/189/13 175/190/13 174/191/13\nf 42/192/9 80/193/9 79/179/9\nf 40/194/56 82/195/56 81/196/56\nf 29/197/57 176/198/57 92/164/57\nf 56/199/58 167/158/58 170/200/58\nf 38/201/59 84/155/59 83/202/59\nf 52/203/60 166/152/60 163/146/60\nf 44/204/6 78/180/6 77/167/6\nf 32/205/61 90/175/61 89/186/61\nf 47/206/8 171/173/8 175/190/8\nf 28/207/62 173/182/62 176/198/62\nf 39/208/63 83/202/63 82/195/63\nf 34/209/44 88/210/44 87/170/44\nf 65/211/2 162/212/2 163/213/2\nf 41/214/45 81/196/45 80/215/45\nf 60/216/1 5/217/1 61/218/1\nf 62/219/10 63/220/10 71/221/10\nf 61/222/2 4/2/2 3/223/2\nf 70/47/2 93/65/2 71/48/2\nf 66/224/64 178/225/65 67/226/65\nf 69/227/3 178/228/3 177/229/3\nf 94/230/4 180/231/4 179/232/4\nf 180/233/15 69/234/15 177/235/15\nf 94/236/1 178/237/1 95/238/1\nf 64/239/66 69/240/65 63/241/65\nf 179/242/10 97/66/10 96/243/10\nf 67/244/10 179/242/10 96/243/10\nf 180/245/10 66/44/10 97/66/10\nf 2/1/1 3/223/1 4/2/1\nf 14/246/2 4/2/2 5/247/2\nf 6/248/2 7/6/2 12/5/2\nf 7/6/2 8/249/2 9/250/2\nf 10/251/2 7/6/2 9/250/2\nf 14/246/2 5/247/2 6/248/2\nf 12/5/2 13/252/2 6/248/2\nf 13/252/2 14/246/2 6/248/2\nf 10/251/2 11/4/2 7/6/2\nf 4/7/3 14/253/3 15/8/3\nf 2/10/4 16/254/4 17/11/4\nf 17/11/5 16/254/5 19/13/5\nf 21/15/6 9/30/6 8/16/6\nf 23/18/7 11/22/7 10/19/7\nf 24/21/8 12/32/8 11/22/8\nf 25/23/9 26/29/9 18/24/9\nf 1/27/10 15/255/10 27/256/10\nf 27/256/10 24/257/10 1/27/10\nf 24/257/10 23/258/10 1/27/10\nf 23/258/10 22/259/10 1/27/10\nf 22/259/10 21/28/10 1/27/10\nf 21/28/10 20/260/10 2/26/10\nf 20/260/10 25/261/10 2/26/10\nf 25/261/10 19/262/10 16/263/10\nf 16/263/10 2/26/10 25/261/10\nf 20/17/11 8/16/11 26/29/11\nf 22/20/12 10/19/12 9/30/12\nf 27/31/13 13/34/13 12/32/13\nf 15/33/14 14/264/14 13/34/14\nf 59/36/2 28/265/2 29/266/2\nf 29/266/2 30/267/2 59/36/2\nf 30/267/2 31/268/2 59/36/2\nf 31/268/2 32/269/2 33/270/2\nf 33/270/2 34/271/2 31/268/2\nf 34/271/2 35/272/2 31/268/2\nf 35/272/2 36/273/2 37/274/2\nf 37/274/2 38/275/2 39/276/2\nf 39/276/2 40/277/2 41/278/2\nf 41/278/2 42/279/2 39/276/2\nf 42/279/2 43/37/2 39/276/2\nf 43/37/2 44/280/2 45/281/2\nf 45/281/2 46/282/2 47/283/2\nf 47/283/2 48/284/2 49/285/2\nf 49/285/2 50/286/2 47/283/2\nf 50/286/2 51/287/2 47/283/2\nf 51/287/2 52/288/2 53/289/2\nf 53/289/2 54/290/2 51/287/2\nf 54/290/2 55/35/2 51/287/2\nf 55/35/2 56/291/2 57/292/2\nf 57/292/2 58/293/2 55/35/2\nf 58/293/2 59/36/2 55/35/2\nf 35/272/2 37/274/2 39/276/2\nf 43/37/2 45/281/2 51/287/2\nf 45/281/2 47/283/2 51/287/2\nf 59/36/2 31/268/2 35/272/2\nf 35/272/2 39/276/2 59/36/2\nf 39/276/2 43/37/2 59/36/2\nf 51/287/2 55/35/2 43/37/2\nf 61/38/4 7/294/4 62/39/4\nf 6/41/3 5/295/3 64/42/3\nf 66/44/3 67/244/3 68/45/3\nf 63/43/2 69/296/2 70/47/2\nf 73/49/4 74/297/4 75/50/4\nf 74/52/15 66/298/15 65/53/15\nf 7/55/15 6/299/15 63/56/15\nf 75/300/2 76/301/2 77/302/2\nf 75/300/2 77/302/2 78/303/2\nf 91/304/2 92/305/2 72/60/2\nf 90/306/2 91/304/2 72/60/2\nf 75/300/2 78/303/2 79/307/2\nf 75/300/2 79/307/2 80/308/2\nf 89/309/2 90/306/2 72/60/2\nf 88/310/2 89/309/2 72/60/2\nf 75/300/2 80/308/2 81/311/2\nf 75/300/2 81/311/2 82/312/2\nf 87/313/2 88/310/2 72/60/2\nf 86/314/2 87/313/2 72/60/2\nf 75/300/2 82/312/2 83/315/2\nf 75/300/2 83/315/2 84/58/2\nf 85/59/2 86/314/2 72/60/2\nf 75/300/2 84/58/2 72/60/2\nf 72/61/1 68/316/1 67/62/1\nf 94/64/2 95/317/2 64/42/2\nf 114/318/10 73/319/10 113/320/10\nf 73/319/10 96/243/10 113/320/10\nf 97/66/10 74/121/10 99/321/10\nf 74/121/10 98/322/10 99/321/10\nf 112/323/10 113/320/10 96/243/10\nf 97/66/10 99/321/10 100/324/10\nf 97/66/10 100/324/10 101/325/10\nf 111/326/10 112/323/10 96/243/10\nf 110/327/10 111/326/10 96/243/10\nf 97/66/10 101/325/10 102/328/10\nf 97/66/10 102/328/10 103/329/10\nf 109/330/10 110/327/10 96/243/10\nf 108/331/10 109/330/10 96/243/10\nf 97/66/10 103/329/10 104/332/10\nf 97/66/10 104/332/10 105/67/10\nf 108/331/10 96/243/10 107/333/10\nf 96/243/10 97/66/10 106/68/10\nf 107/333/10 96/243/10 106/68/10\nf 131/334/2 62/335/2 130/336/2\nf 62/335/2 71/48/2 130/336/2\nf 93/65/2 60/110/2 116/337/2\nf 60/110/2 115/338/2 116/337/2\nf 129/339/2 130/336/2 71/48/2\nf 93/65/2 116/337/2 117/340/2\nf 93/65/2 117/340/2 118/341/2\nf 128/342/2 129/339/2 71/48/2\nf 127/343/2 128/342/2 71/48/2\nf 93/65/2 118/341/2 119/344/2\nf 93/65/2 119/344/2 120/345/2\nf 126/346/2 127/343/2 71/48/2\nf 125/347/2 126/346/2 71/48/2\nf 93/65/2 120/345/2 121/348/2\nf 93/65/2 121/348/2 122/69/2\nf 125/347/2 71/48/2 124/349/2\nf 71/48/2 93/65/2 123/70/2\nf 124/349/2 71/48/2 123/70/2\nf 106/71/16 105/135/16 124/72/16\nf 103/74/17 102/350/17 127/75/17\nf 104/77/18 103/74/18 126/76/18\nf 133/79/19 134/122/19 135/80/19\nf 108/82/20 107/85/20 122/83/20\nf 107/85/21 106/71/21 123/73/21\nf 110/86/22 109/132/22 120/87/22\nf 137/89/23 114/130/23 115/90/23\nf 98/92/24 138/136/24 139/93/24\nf 141/95/25 142/142/25 143/96/25\nf 99/98/26 98/92/26 131/94/26\nf 145/100/27 137/89/27 136/91/27\nf 111/102/28 110/351/28 119/103/28\nf 147/105/29 148/125/29 149/106/29\nf 62/335/2 131/334/2 139/352/2\nf 62/335/2 139/352/2 146/353/2\nf 136/354/2 115/338/2 60/110/2\nf 144/355/2 136/354/2 60/110/2\nf 62/335/2 146/353/2 149/356/2\nf 62/335/2 149/356/2 150/357/2\nf 155/358/2 144/355/2 60/110/2\nf 154/359/2 155/358/2 60/110/2\nf 62/335/2 150/357/2 151/360/2\nf 62/335/2 151/360/2 152/361/2\nf 143/362/2 154/359/2 60/110/2\nf 140/363/2 143/362/2 60/110/2\nf 62/335/2 152/361/2 153/364/2\nf 62/335/2 153/364/2 132/108/2\nf 135/109/2 140/363/2 60/110/2\nf 62/335/2 132/108/2 60/110/2\nf 112/111/30 111/102/30 118/104/30\nf 102/113/14 101/123/14 128/114/14\nf 156/116/31 157/365/31 155/117/31\nf 73/319/10 114/318/10 137/366/10\nf 73/319/10 137/366/10 145/367/10\nf 138/368/10 98/322/10 74/121/10\nf 147/369/10 138/368/10 74/121/10\nf 73/319/10 145/367/10 157/370/10\nf 73/319/10 157/370/10 156/371/10\nf 148/372/10 147/369/10 74/121/10\nf 161/373/10 148/372/10 74/121/10\nf 73/319/10 156/371/10 142/374/10\nf 73/319/10 142/374/10 141/375/10\nf 160/376/10 161/373/10 74/121/10\nf 159/377/10 160/376/10 74/121/10\nf 73/319/10 141/375/10 134/378/10\nf 73/319/10 134/378/10 133/119/10\nf 158/120/10 159/377/10 74/121/10\nf 73/319/10 133/119/10 74/121/10\nf 134/122/32 141/95/32 140/97/32\nf 101/123/33 100/140/33 129/124/33\nf 148/125/9 161/379/9 150/126/9\nf 160/127/34 159/141/34 152/128/34\nf 114/130/35 113/139/35 116/131/35\nf 109/132/36 108/82/36 121/84/36\nf 158/133/37 133/79/37 132/81/37\nf 105/135/38 104/77/38 125/78/38\nf 138/136/39 147/105/39 146/107/39\nf 157/137/40 145/100/40 144/101/40\nf 113/139/41 112/111/41 117/112/41\nf 100/140/42 99/98/42 130/99/42\nf 159/141/43 158/133/43 153/134/43\nf 142/142/44 156/116/44 154/118/44\nf 161/143/45 160/127/45 151/129/45\nf 53/145/46 52/203/46 163/146/46\nf 50/148/17 49/183/17 165/149/17\nf 51/151/47 50/148/47 164/150/47\nf 37/153/48 36/188/48 85/154/48\nf 55/156/49 54/159/49 168/157/49\nf 54/159/50 53/145/50 162/147/50\nf 57/160/22 56/380/22 170/161/22\nf 30/163/51 29/197/51 92/164/51\nf 45/166/12 44/204/12 77/167/12\nf 35/169/52 34/209/52 87/170/52\nf 46/172/7 45/166/7 76/168/7\nf 31/174/53 30/163/53 91/165/53\nf 58/176/28 57/160/28 169/162/28\nf 43/178/11 42/192/11 79/179/11\nf 59/181/54 58/176/54 172/177/54\nf 49/183/14 48/381/14 174/184/14\nf 33/185/31 32/205/31 89/186/31\nf 36/188/55 35/169/55 86/171/55\nf 48/189/13 47/206/13 175/190/13\nf 42/192/9 41/382/9 80/193/9\nf 40/194/56 39/208/56 82/195/56\nf 29/197/57 28/207/57 176/198/57\nf 56/199/58 55/156/58 167/158/58\nf 38/201/59 37/153/59 84/155/59\nf 52/203/60 51/151/60 166/152/60\nf 44/204/6 43/178/6 78/180/6\nf 32/205/61 31/174/61 90/175/61\nf 47/206/8 46/172/8 171/173/8\nf 28/207/62 59/181/62 173/182/62\nf 39/208/63 38/201/63 83/202/63\nf 34/209/44 33/383/44 88/210/44\nf 76/301/2 75/300/2 171/384/2\nf 75/300/2 65/211/2 175/385/2\nf 171/384/2 75/300/2 175/385/2\nf 65/211/2 68/386/2 162/212/2\nf 68/386/2 72/60/2 173/387/2\nf 169/388/2 68/386/2 172/389/2\nf 72/60/2 92/305/2 176/390/2\nf 72/60/2 176/390/2 173/387/2\nf 173/387/2 172/389/2 68/386/2\nf 174/391/2 175/385/2 65/211/2\nf 165/392/2 174/391/2 65/211/2\nf 68/386/2 169/388/2 170/393/2\nf 68/386/2 170/393/2 167/394/2\nf 164/395/2 165/392/2 65/211/2\nf 166/396/2 164/395/2 65/211/2\nf 68/386/2 167/394/2 168/397/2\nf 68/386/2 168/397/2 162/212/2\nf 163/213/2 166/396/2 65/211/2\nf 41/214/45 40/194/45 81/196/45\nf 60/216/1 64/398/1 5/217/1\nf 61/222/2 5/247/2 4/2/2\nf 3/223/2 17/399/2 61/222/2\nf 17/399/2 18/400/2 7/6/2\nf 61/222/2 17/399/2 7/6/2\nf 18/400/2 26/401/2 7/6/2\nf 26/401/2 8/249/2 7/6/2\nf 70/47/2 94/64/2 93/65/2\nf 66/224/64 177/402/10 178/225/65\nf 69/227/3 95/403/3 178/228/3\nf 94/230/4 70/404/4 180/231/4\nf 180/233/15 70/405/15 69/234/15\nf 94/236/1 179/406/1 178/237/1\nf 64/239/66 95/407/67 69/240/65\nf 179/242/10 180/245/10 97/66/10\nf 67/244/10 178/408/10 179/242/10\nf 180/245/10 177/409/10 66/44/10\n";
      exports.axis =
        "# Blender v2.80 (sub 51) OBJ File: ''\n# www.blender.org\nmtllib axis.mtl\no Cylinder.005_Cylinder.011\nv 0.012152 0.259537 -2.343506\nv 0.018714 0.259537 -2.339998\nv 0.018714 0.259537 -2.339998\nv 0.012152 0.259537 -2.343506\nv 0.005032 0.259537 -2.345665\nv -0.002373 0.259537 -2.346395\nv -0.009777 0.259537 -2.345665\nv -0.016897 0.259537 -2.343506\nv -0.023459 0.259537 -2.339998\nv -0.029211 0.259537 -2.335278\nv -0.033931 0.259537 -2.329527\nv -0.037438 0.259537 -2.322965\nv -0.039598 0.259537 -2.315845\nv -0.040327 0.259537 -2.308440\nv -0.039598 0.259537 -2.301036\nv -0.037438 0.259537 -2.293915\nv -0.033931 0.259537 -2.287354\nv -0.029211 0.259537 -2.281602\nv -0.023459 0.259537 -2.276882\nv -0.016897 0.259537 -2.273375\nv -0.009777 0.259537 -2.271215\nv -0.002373 0.259537 -2.270485\nv 0.005032 0.259537 -2.271215\nv 0.012152 0.259537 -2.273375\nv 0.018714 0.259537 -2.276882\nv 0.024465 0.259537 -2.281602\nv 0.029186 0.259537 -2.287354\nv 0.032693 0.259537 -2.293915\nv 0.034853 0.259537 -2.301036\nv 0.035582 0.259537 -2.308440\nv 0.034853 0.259537 -2.315845\nv 0.032693 0.259537 -2.322965\nv 0.029186 0.259537 -2.329527\nv 0.024465 0.259537 -2.335278\nv -0.023459 0.259537 -2.339998\nv -0.029211 0.259537 -2.335278\nv -0.040327 0.229000 -2.308440\nv -0.039598 0.229000 -2.301036\nv -0.039598 0.229000 -2.301036\nv -0.040327 0.229000 -2.308440\nv 0.005032 0.259537 -2.345665\nv -0.033931 0.259537 -2.329527\nv 0.005032 0.229000 -2.271215\nv 0.012152 0.229000 -2.273375\nv 0.012152 0.229000 -2.273375\nv 0.005032 0.229000 -2.271215\nv -0.002373 0.259537 -2.346395\nv -0.037438 0.259537 -2.322965\nv 0.032693 0.229000 -2.322965\nv 0.029186 0.229000 -2.329527\nv 0.029186 0.229000 -2.329527\nv 0.032693 0.229000 -2.322965\nv -0.002373 0.229000 -2.346395\nv -0.009777 0.229000 -2.345665\nv -0.009777 0.229000 -2.345665\nv -0.002373 0.229000 -2.346395\nv -0.039598 0.259537 -2.315845\nv -0.037438 0.229000 -2.293915\nv -0.037438 0.229000 -2.293915\nv -0.040327 0.259537 -2.308440\nv 0.018714 0.229000 -2.276882\nv 0.018714 0.229000 -2.276882\nv -0.039598 0.259537 -2.301036\nv 0.024465 0.229000 -2.335278\nv 0.024465 0.229000 -2.335278\nv -0.016897 0.229000 -2.343506\nv -0.016897 0.229000 -2.343506\nv -0.037438 0.259537 -2.293915\nv -0.033931 0.229000 -2.287354\nv -0.033931 0.229000 -2.287354\nv -0.033931 0.259537 -2.287354\nv 0.024465 0.229000 -2.281602\nv 0.024465 0.229000 -2.281602\nv -0.029211 0.259537 -2.281602\nv 0.018714 0.229000 -2.339998\nv 0.018714 0.229000 -2.339998\nv -0.023459 0.229000 -2.339998\nv -0.023459 0.229000 -2.339998\nv -0.023459 0.259537 -2.276882\nv -0.029211 0.229000 -2.281602\nv -0.029211 0.229000 -2.281602\nv -0.016897 0.259537 -2.273375\nv 0.029186 0.229000 -2.287354\nv 0.029186 0.229000 -2.287354\nv -0.009777 0.259537 -2.271215\nv 0.012152 0.229000 -2.343506\nv 0.012152 0.229000 -2.343506\nv -0.029211 0.229000 -2.335278\nv -0.029211 0.229000 -2.335278\nv -0.002373 0.259537 -2.270485\nv 0.029186 0.259537 -2.287354\nv 0.024465 0.259537 -2.281602\nv 0.024465 0.259537 -2.281602\nv 0.029186 0.259537 -2.287354\nv -0.009777 0.229000 -2.271215\nv -0.002373 0.229000 -2.270485\nv -0.002373 0.229000 -2.270485\nv -0.009777 0.229000 -2.271215\nv 0.032693 0.259537 -2.293915\nv 0.032693 0.259537 -2.293915\nv 0.005032 0.229000 -2.271215\nv 0.034853 0.259537 -2.301036\nv 0.034853 0.259537 -2.301036\nv 0.012152 0.229000 -2.273375\nv 0.035582 0.259537 -2.308440\nv 0.035582 0.259537 -2.308440\nv 0.018714 0.229000 -2.276882\nv 0.034853 0.259537 -2.315845\nv 0.034853 0.259537 -2.315845\nv 0.024465 0.229000 -2.281602\nv 0.032693 0.259537 -2.322965\nv 0.032693 0.259537 -2.322965\nv 0.029186 0.229000 -2.287354\nv 0.029186 0.259537 -2.329527\nv 0.029186 0.259537 -2.329527\nv -0.009777 0.259537 -2.345665\nv -0.002373 0.259537 -2.346395\nv -0.009777 0.259537 -2.345665\nv 0.032693 0.229000 -2.293915\nv 0.032693 0.229000 -2.293915\nv 0.024465 0.259537 -2.335278\nv 0.024465 0.259537 -2.335278\nv -0.016897 0.259537 -2.343506\nv -0.016897 0.259537 -2.343506\nv 0.034853 0.229000 -2.301036\nv 0.034853 0.229000 -2.301036\nv 0.018714 0.259537 -2.339998\nv -0.023459 0.259537 -2.339998\nv 0.035582 0.229000 -2.308440\nv 0.035582 0.229000 -2.308440\nv 0.012152 0.259537 -2.343506\nv -0.029211 0.259537 -2.335278\nv 0.034853 0.229000 -2.315845\nv 0.034853 0.229000 -2.315845\nv 0.005032 0.259537 -2.345665\nv -0.033931 0.259537 -2.329527\nv 0.032693 0.229000 -2.322965\nv -0.037438 0.259537 -2.322965\nv 0.029186 0.229000 -2.329527\nv -0.009777 0.229000 -2.345665\nv -0.002373 0.229000 -2.346395\nv -0.039598 0.259537 -2.315845\nv 0.034853 0.229000 -2.315845\nv -0.002373 0.229000 -2.270485\nv -0.039598 0.229000 -2.315845\nv -0.039598 0.229000 -2.315845\nv 0.035582 0.229000 -2.308440\nv -0.009777 0.229000 -2.271215\nv -0.037438 0.229000 -2.322965\nv -0.037438 0.229000 -2.322965\nv 0.034853 0.229000 -2.301036\nv -0.016897 0.229000 -2.273375\nv -0.016897 0.229000 -2.273375\nv 0.005032 0.229000 -2.345665\nv 0.005032 0.229000 -2.345665\nv -0.033931 0.229000 -2.329527\nv -0.033931 0.229000 -2.329527\nv 0.032693 0.229000 -2.293915\nv 0.018714 0.259537 -2.276882\nv -0.023459 0.229000 -2.276882\nv -0.023459 0.229000 -2.276882\nv 0.012152 0.259537 -2.273375\nv 0.005032 0.259537 -2.271215\nv -0.037438 0.229000 -2.293915\nv -0.033931 0.229000 -2.287354\nv -0.058447 0.229000 -2.270972\nv -0.064680 0.229000 -2.282632\nv 0.005032 0.259537 -2.271215\nv -0.002373 0.259537 -2.270485\nv -0.002373 0.259537 -2.241000\nv 0.010784 0.259537 -2.242296\nv -0.029211 0.229000 -2.281602\nv -0.050060 0.229000 -2.260752\nv 0.012152 0.259537 -2.273375\nv 0.023436 0.259537 -2.246133\nv -0.023459 0.229000 -2.276882\nv -0.039841 0.229000 -2.252365\nv 0.018714 0.259537 -2.276882\nv 0.035095 0.259537 -2.252365\nv -0.016897 0.229000 -2.273375\nv -0.028181 0.229000 -2.246133\nv 0.045315 0.259537 -2.260752\nv -0.015530 0.229000 -2.242296\nv 0.053702 0.259537 -2.270972\nv -0.002373 0.229000 -2.241000\nv 0.059934 0.259537 -2.282632\nv 0.010784 0.229000 -2.242296\nv 0.063772 0.259537 -2.295283\nv 0.023436 0.229000 -2.246133\nv 0.065068 0.259537 -2.308440\nv 0.035095 0.229000 -2.252365\nv 0.063772 0.259537 -2.321597\nv 0.045315 0.229000 -2.260752\nv 0.059934 0.259537 -2.334249\nv 0.053702 0.229000 -2.270972\nv 0.053702 0.259537 -2.345908\nv -0.002373 0.259537 -2.375881\nv -0.015530 0.259537 -2.374585\nv 0.059934 0.229000 -2.282632\nv 0.045315 0.259537 -2.356128\nv -0.028181 0.259537 -2.370747\nv 0.063772 0.229000 -2.295283\nv 0.035095 0.259537 -2.364515\nv -0.039840 0.259537 -2.364515\nv 0.065068 0.229000 -2.308440\nv 0.023436 0.259537 -2.370747\nv -0.050060 0.259537 -2.356128\nv -0.009777 0.259537 -2.271215\nv -0.039598 0.229000 -2.301036\nv -0.016897 0.259537 -2.273375\nv -0.040327 0.229000 -2.308440\nv -0.023459 0.259537 -2.276882\nv -0.039598 0.229000 -2.315845\nv -0.029211 0.259537 -2.281602\nv -0.037438 0.229000 -2.322965\nv -0.033931 0.259537 -2.287354\nv -0.033931 0.229000 -2.329527\nv 0.005032 0.229000 -2.345665\nv -0.037438 0.259537 -2.293915\nv -0.029211 0.229000 -2.335278\nv 0.012152 0.229000 -2.343506\nv -0.039598 0.259537 -2.301036\nv -0.023459 0.229000 -2.339998\nv 0.018714 0.229000 -2.339998\nv -0.040327 0.259537 -2.308440\nv -0.016897 0.229000 -2.343506\nv 0.024465 0.229000 -2.335278\nv -0.015530 0.259537 -2.242296\nv -0.068517 0.229000 -2.295283\nv -0.028181 0.259537 -2.246133\nv -0.069813 0.229000 -2.308440\nv -0.039841 0.259537 -2.252365\nv -0.068517 0.229000 -2.321597\nv -0.050060 0.259537 -2.260752\nv -0.064679 0.229000 -2.334249\nv -0.058447 0.259537 -2.270972\nv -0.058447 0.229000 -2.345908\nv -0.002373 0.229000 -2.375881\nv 0.010784 0.229000 -2.374585\nv -0.064680 0.259537 -2.282632\nv -0.050060 0.229000 -2.356128\nv 0.023436 0.229000 -2.370747\nv -0.068517 0.259537 -2.295283\nv -0.039840 0.229000 -2.364515\nv 0.035095 0.229000 -2.364515\nv -0.069813 0.259537 -2.308440\nv -0.028181 0.229000 -2.370747\nv 0.045315 0.229000 -2.356128\nv -0.068517 0.259537 -2.321597\nv -0.015530 0.229000 -2.374585\nv 0.053702 0.229000 -2.345908\nv -0.064679 0.259537 -2.334249\nv 0.059934 0.229000 -2.334249\nv -0.058447 0.259537 -2.345908\nv 0.010784 0.259537 -2.374585\nv 0.063772 0.229000 -2.321597\nv 0.023436 0.229000 -2.370747\nv 0.010784 0.229000 -2.374585\nv 0.010784 0.259537 -2.374585\nv 0.023436 0.259537 -2.370747\nv -0.039840 0.229000 -2.364515\nv -0.050060 0.229000 -2.356128\nv -0.051363 0.229000 -2.357716\nv -0.041144 0.229000 -2.366102\nv 0.059934 0.229000 -2.282632\nv 0.053702 0.229000 -2.270972\nv 0.059934 0.259537 -2.282632\nv 0.053702 0.259537 -2.270972\nv -0.050060 0.229000 -2.260752\nv -0.039841 0.229000 -2.252365\nv -0.039841 0.259537 -2.252365\nv -0.050060 0.259537 -2.260752\nv 0.010784 0.229000 -2.374585\nv -0.002373 0.229000 -2.375881\nv -0.002171 0.229000 -2.377925\nv 0.010986 0.229000 -2.376629\nv -0.050060 0.259537 -2.356128\nv -0.039840 0.259537 -2.364515\nv -0.028181 0.259537 -2.246133\nv -0.039841 0.259537 -2.252365\nv -0.040809 0.259537 -2.250554\nv -0.029149 0.259537 -2.244322\nv 0.059934 0.229000 -2.334249\nv 0.063772 0.229000 -2.321597\nv 0.059934 0.259537 -2.334249\nv 0.063772 0.259537 -2.321597\nv -0.002373 0.229000 -2.241000\nv 0.010784 0.229000 -2.242296\nv 0.010784 0.259537 -2.242296\nv -0.002373 0.259537 -2.241000\nv 0.061746 0.229000 -2.281664\nv 0.055514 0.229000 -2.270004\nv -0.069813 0.229000 -2.308440\nv -0.068517 0.229000 -2.321597\nv -0.069813 0.259537 -2.308440\nv -0.068517 0.259537 -2.321597\nv 0.065738 0.259537 -2.322193\nv 0.061900 0.259537 -2.334845\nv 0.023436 0.229000 -2.370747\nv 0.035095 0.229000 -2.364515\nv 0.023436 0.259537 -2.370747\nv 0.035095 0.259537 -2.364515\nv 0.045315 0.229000 -2.260752\nv 0.053702 0.229000 -2.270972\nv 0.053702 0.259537 -2.270972\nv 0.045315 0.259537 -2.260752\nv 0.010784 0.259537 -2.374585\nv 0.010986 0.259537 -2.376629\nv -0.050060 0.229000 -2.260752\nv -0.058447 0.229000 -2.270972\nv -0.050060 0.259537 -2.260752\nv -0.058447 0.259537 -2.270972\nv -0.028181 0.229000 -2.370747\nv -0.039840 0.229000 -2.364515\nv -0.039840 0.259537 -2.364515\nv -0.028181 0.259537 -2.370747\nv 0.065068 0.229000 -2.308440\nv 0.063772 0.229000 -2.321597\nv 0.063772 0.259537 -2.321597\nv 0.065068 0.259537 -2.308440\nv 0.010784 0.229000 -2.242296\nv 0.023436 0.229000 -2.246133\nv 0.024032 0.229000 -2.244168\nv 0.011381 0.229000 -2.240330\nv -0.002373 0.229000 -2.241000\nv -0.015530 0.229000 -2.242296\nv -0.002373 0.259537 -2.241000\nv -0.015530 0.259537 -2.242296\nv -0.064679 0.229000 -2.334249\nv -0.068517 0.229000 -2.321597\nv -0.068517 0.259537 -2.321597\nv -0.064679 0.259537 -2.334249\nv 0.045315 0.229000 -2.356128\nv 0.035095 0.229000 -2.364515\nv 0.035095 0.259537 -2.364515\nv 0.045315 0.259537 -2.356128\nv 0.055514 0.259537 -2.270004\nv 0.045315 0.229000 -2.260752\nv 0.035095 0.229000 -2.252365\nv 0.045315 0.259537 -2.260752\nv 0.035095 0.259537 -2.252365\nv -0.064680 0.229000 -2.282632\nv -0.058447 0.229000 -2.270972\nv -0.058447 0.259537 -2.270972\nv -0.064680 0.259537 -2.282632\nv -0.028181 0.259537 -2.370747\nv -0.015530 0.259537 -2.374585\nv -0.016126 0.259537 -2.376550\nv -0.028777 0.259537 -2.372713\nv -0.028181 0.229000 -2.370747\nv -0.015530 0.229000 -2.374585\nv -0.071857 0.229000 -2.308642\nv -0.070561 0.229000 -2.321798\nv 0.065068 0.229000 -2.308440\nv 0.063772 0.229000 -2.295283\nv 0.065068 0.259537 -2.308440\nv 0.063772 0.259537 -2.295283\nv -0.028181 0.229000 -2.246133\nv -0.015530 0.229000 -2.242296\nv -0.015530 0.259537 -2.242296\nv -0.028181 0.259537 -2.246133\nv -0.039841 0.229000 -2.252365\nv -0.028181 0.229000 -2.246133\nv -0.029149 0.229000 -2.244322\nv -0.040809 0.229000 -2.250554\nv -0.064679 0.229000 -2.334249\nv -0.058447 0.229000 -2.345908\nv -0.064679 0.259537 -2.334249\nv -0.058447 0.259537 -2.345908\nv 0.023436 0.259537 -2.246133\nv 0.010784 0.259537 -2.242296\nv 0.011381 0.259537 -2.240330\nv 0.024032 0.259537 -2.244168\nv 0.045315 0.229000 -2.356128\nv 0.053702 0.229000 -2.345908\nv 0.045315 0.259537 -2.356128\nv 0.053702 0.259537 -2.345908\nv 0.023436 0.229000 -2.246133\nv 0.035095 0.229000 -2.252365\nv 0.035095 0.259537 -2.252365\nv 0.023436 0.259537 -2.246133\nv 0.067112 0.229000 -2.308239\nv 0.065816 0.229000 -2.295082\nv -0.064680 0.229000 -2.282632\nv -0.068517 0.229000 -2.295283\nv -0.064680 0.259537 -2.282632\nv -0.068517 0.259537 -2.295283\nv 0.065738 0.229000 -2.322193\nv -0.002373 0.259537 -2.375881\nv -0.002373 0.229000 -2.375881\nv -0.015530 0.229000 -2.374585\nv -0.015530 0.259537 -2.374585\nv -0.002373 0.259537 -2.375881\nv 0.059934 0.229000 -2.282632\nv 0.063772 0.229000 -2.295283\nv 0.063772 0.259537 -2.295283\nv 0.059934 0.259537 -2.282632\nv 0.036064 0.259537 -2.366326\nv 0.024404 0.259537 -2.372558\nv -0.050060 0.229000 -2.356128\nv -0.058447 0.229000 -2.345908\nv -0.058447 0.259537 -2.345908\nv -0.050060 0.259537 -2.356128\nv 0.059934 0.229000 -2.334249\nv 0.053702 0.229000 -2.345908\nv 0.053702 0.259537 -2.345908\nv 0.059934 0.259537 -2.334249\nv -0.069813 0.229000 -2.308440\nv -0.068517 0.229000 -2.295283\nv -0.068517 0.259537 -2.295283\nv -0.069813 0.259537 -2.308440\nv 0.061746 0.259537 -2.281664\nv -0.051363 0.259537 -2.357716\nv 0.061900 0.229000 -2.334845\nv -0.071857 0.259537 -2.308642\nv 0.024404 0.229000 -2.372558\nv -0.051648 0.259537 -2.259449\nv -0.051648 0.229000 -2.259449\nv -0.002574 0.259537 -2.238955\nv -0.002574 0.229000 -2.238955\nv 0.046618 0.259537 -2.259165\nv 0.046618 0.229000 -2.259165\nv -0.028777 0.229000 -2.372713\nv 0.067112 0.259537 -2.308239\nv -0.066491 0.259537 -2.335217\nv -0.066491 0.229000 -2.335217\nv 0.046903 0.259537 -2.357431\nv 0.046903 0.229000 -2.357431\nv -0.066645 0.259537 -2.282036\nv -0.066645 0.229000 -2.282036\nv -0.002171 0.259537 -2.377925\nv -0.038503 0.234618 -2.242951\nv -0.036752 0.234618 -2.242016\nv -0.036752 0.253919 -2.242016\nv -0.038503 0.253919 -2.242951\nv 0.056069 0.234618 -2.355118\nv 0.054809 0.234618 -2.356652\nv 0.054809 0.253919 -2.356652\nv 0.056069 0.253919 -2.355118\nv 0.055290 0.229000 -2.347211\nv 0.055290 0.259537 -2.347211\nv -0.070483 0.229000 -2.294687\nv 0.071957 0.234618 -2.300122\nv 0.072152 0.234618 -2.302098\nv 0.072152 0.253919 -2.302098\nv 0.071957 0.253919 -2.300122\nv 0.065816 0.259537 -2.295082\nv -0.060259 0.229000 -2.346876\nv 0.044305 0.234618 -2.249999\nv 0.045839 0.234618 -2.251258\nv 0.045839 0.253919 -2.251258\nv 0.044305 0.253919 -2.249999\nv 0.036398 0.229000 -2.250778\nv 0.036398 0.259537 -2.250778\nv -0.016126 0.229000 -2.376550\nv -0.010691 0.234618 -2.234110\nv -0.008715 0.234618 -2.233915\nv -0.008715 0.253919 -2.233915\nv -0.010691 0.253919 -2.234110\nv -0.015731 0.229000 -2.240251\nv -0.015731 0.259537 -2.240251\nv -0.060814 0.234618 -2.261763\nv -0.059555 0.234618 -2.260228\nv -0.059555 0.253919 -2.260228\nv -0.060814 0.253919 -2.261763\nv -0.060035 0.229000 -2.269669\nv -0.060035 0.259537 -2.269669\nv -0.076703 0.234618 -2.316758\nv -0.076897 0.234618 -2.314783\nv -0.076897 0.253919 -2.314783\nv -0.076703 0.253919 -2.316758\nv -0.070561 0.259537 -2.321798\nv 0.036064 0.229000 -2.366326\nv -0.049050 0.234618 -2.366881\nv -0.050585 0.234618 -2.365622\nv -0.050585 0.253919 -2.365622\nv -0.049050 0.253919 -2.366881\nv -0.041144 0.259537 -2.366102\nv -0.074228 0.234618 -2.287680\nv -0.073652 0.234618 -2.285781\nv -0.073652 0.253919 -2.285781\nv -0.074228 0.253919 -2.287680\nv -0.070483 0.259537 -2.294687\nv 0.005946 0.234618 -2.382770\nv 0.003970 0.234618 -2.382965\nv 0.003970 0.253919 -2.382965\nv 0.005946 0.253919 -2.382770\nv -0.067861 0.234618 -2.344570\nv -0.068797 0.234618 -2.342819\nv -0.068797 0.253919 -2.342819\nv -0.067861 0.253919 -2.344570\nv 0.033757 0.234618 -2.373929\nv 0.032007 0.234618 -2.374865\nv 0.032007 0.253919 -2.374865\nv 0.033757 0.253919 -2.373929\nv -0.060259 0.259537 -2.346876\nv 0.018387 0.234618 -2.236585\nv 0.020287 0.234618 -2.237161\nv 0.020287 0.253919 -2.237161\nv 0.018387 0.253919 -2.236585\nv -0.023132 0.234618 -2.380296\nv -0.025032 0.234618 -2.379719\nv -0.025032 0.253919 -2.379719\nv -0.023132 0.253919 -2.380296\nv 0.069483 0.234618 -2.329200\nv 0.068906 0.234618 -2.331100\nv 0.068906 0.253919 -2.331100\nv 0.069483 0.253919 -2.329200\nv 0.064052 0.234618 -2.274061\nv 0.063116 0.234618 -2.272310\nv 0.061128 0.231809 -2.270188\nv 0.064712 0.231809 -2.276893\nv 0.058346 0.229753 -2.269344\nv 0.063868 0.229753 -2.279675\nv 0.064052 0.253919 -2.274061\nv 0.064712 0.256728 -2.276893\nv 0.063868 0.258784 -2.279675\nv 0.063116 0.253919 -2.272310\nv 0.061128 0.256728 -2.270188\nv 0.058346 0.258784 -2.269344\nv -0.046401 0.231809 -2.368082\nv -0.052278 0.231809 -2.363258\nv -0.043507 0.229753 -2.367796\nv -0.052563 0.229753 -2.360364\nv -0.052278 0.256728 -2.363258\nv -0.052563 0.258784 -2.360364\nv -0.046401 0.256728 -2.368082\nv -0.043507 0.258784 -2.367796\nv 0.069578 0.231809 -2.326293\nv 0.067371 0.231809 -2.333569\nv 0.068207 0.229753 -2.323729\nv 0.064806 0.229753 -2.334940\nv 0.067371 0.256728 -2.333569\nv 0.064806 0.258784 -2.334940\nv 0.069578 0.256728 -2.326293\nv 0.068207 0.258784 -2.323729\nv -0.075678 0.231809 -2.319480\nv -0.076424 0.231809 -2.311914\nv -0.073431 0.229753 -2.321325\nv -0.074579 0.229753 -2.309666\nv -0.076424 0.256728 -2.311914\nv -0.074579 0.258784 -2.309666\nv -0.075678 0.256728 -2.319480\nv -0.073431 0.258784 -2.321325\nv 0.035880 0.231809 -2.371941\nv 0.029175 0.231809 -2.375525\nv 0.036724 0.229753 -2.369158\nv 0.026392 0.229753 -2.374681\nv 0.029175 0.256728 -2.375525\nv 0.026392 0.258784 -2.374681\nv 0.035880 0.256728 -2.371941\nv 0.036724 0.258784 -2.369158\nv -0.062014 0.231809 -2.264411\nv -0.057191 0.231809 -2.258534\nv -0.061729 0.229753 -2.267305\nv -0.054297 0.229753 -2.258249\nv -0.057191 0.256728 -2.258534\nv -0.054297 0.258784 -2.258249\nv -0.062014 0.256728 -2.264411\nv -0.061729 0.258784 -2.267305\nv -0.013413 0.231809 -2.235134\nv -0.005846 0.231809 -2.234389\nv -0.015257 0.229753 -2.237382\nv -0.003598 0.229753 -2.236234\nv -0.005846 0.256728 -2.234389\nv -0.003598 0.258784 -2.236234\nv -0.013413 0.256728 -2.235134\nv -0.015257 0.258784 -2.237382\nv 0.041656 0.231809 -2.248799\nv 0.047533 0.231809 -2.253622\nv 0.038762 0.229753 -2.249084\nv 0.047818 0.229753 -2.256516\nv 0.047533 0.256728 -2.253622\nv 0.047818 0.258784 -2.256516\nv 0.041656 0.256728 -2.248799\nv 0.038762 0.258784 -2.249084\nv -0.020226 0.231809 -2.380390\nv -0.027501 0.231809 -2.378184\nv -0.017661 0.229753 -2.379020\nv -0.028872 0.229753 -2.375619\nv -0.027501 0.256728 -2.378184\nv -0.028872 0.258784 -2.375619\nv -0.020226 0.256728 -2.380390\nv -0.017661 0.258784 -2.379020\nv 0.070933 0.231809 -2.297400\nv 0.071678 0.231809 -2.304967\nv 0.068685 0.229753 -2.295555\nv 0.069834 0.229753 -2.307214\nv 0.071678 0.256728 -2.304967\nv 0.069834 0.258784 -2.307214\nv 0.070933 0.256728 -2.297400\nv 0.068685 0.258784 -2.295555\nv -0.065874 0.231809 -2.346693\nv -0.069458 0.231809 -2.339988\nv -0.063091 0.229753 -2.347537\nv -0.068613 0.229753 -2.337205\nv -0.069458 0.256728 -2.339988\nv -0.068613 0.258784 -2.337205\nv -0.065874 0.256728 -2.346693\nv -0.063091 0.258784 -2.347537\nv 0.057269 0.231809 -2.352469\nv 0.052445 0.231809 -2.358346\nv 0.056984 0.229753 -2.349575\nv 0.049551 0.229753 -2.358631\nv 0.052445 0.256728 -2.358346\nv 0.049551 0.258784 -2.358631\nv 0.057269 0.256728 -2.352469\nv 0.056984 0.258784 -2.349575\nv -0.074323 0.231809 -2.290587\nv -0.072116 0.231809 -2.283311\nv -0.072952 0.229753 -2.293151\nv -0.069552 0.229753 -2.281940\nv -0.072116 0.256728 -2.283311\nv -0.069552 0.258784 -2.281940\nv -0.074323 0.256728 -2.290587\nv -0.072952 0.258784 -2.293151\nv 0.008667 0.231809 -2.381746\nv 0.001101 0.231809 -2.382491\nv 0.010512 0.229753 -2.379498\nv -0.001147 0.229753 -2.380646\nv 0.001101 0.256728 -2.382491\nv -0.001147 0.258784 -2.380646\nv 0.008667 0.256728 -2.381746\nv 0.010512 0.258784 -2.379498\nv -0.040625 0.231809 -2.244939\nv -0.033920 0.231809 -2.241355\nv -0.041469 0.229753 -2.247722\nv -0.031137 0.229753 -2.242199\nv -0.033920 0.256728 -2.241355\nv -0.031137 0.258784 -2.242199\nv -0.040625 0.256728 -2.244939\nv -0.041469 0.258784 -2.247722\nv 0.015481 0.231809 -2.236490\nv 0.022756 0.231809 -2.238697\nv 0.012916 0.229753 -2.237860\nv 0.024127 0.229753 -2.241261\nv 0.022756 0.256728 -2.238697\nv 0.024127 0.258784 -2.241261\nv 0.015481 0.256728 -2.236490\nv 0.012916 0.258784 -2.237860\nv -0.179992 0.000000 -2.520644\nv -0.176534 -0.035115 -2.520644\nv -0.176534 -0.035115 -2.100779\nv -0.179992 0.000000 -2.100779\nv -0.166291 -0.068880 -2.520644\nv -0.166291 -0.068880 -2.100779\nv -0.149658 -0.099998 -2.520644\nv -0.149658 -0.099998 -2.100779\nv -0.127274 -0.127274 -2.520644\nv -0.127274 -0.127274 -2.100779\nv -0.099998 -0.149658 -2.520644\nv -0.099998 -0.149658 -2.100779\nv -0.068880 -0.166291 -2.520644\nv -0.068880 -0.166291 -2.100779\nv -0.035115 -0.176534 -2.520644\nv -0.035115 -0.176534 -2.100779\nv 0.000000 -0.179992 -2.520644\nv 0.000000 -0.179992 -2.100779\nv 0.035115 -0.176534 -2.520644\nv 0.035115 -0.176534 -2.100779\nv 0.068880 -0.166291 -2.520644\nv 0.068880 -0.166291 -2.100779\nv 0.099998 -0.149658 -2.520644\nv 0.099998 -0.149658 -2.100779\nv 0.127274 -0.127274 -2.520644\nv 0.127274 -0.127274 -2.100779\nv 0.149658 -0.099998 -2.520644\nv 0.149658 -0.099998 -2.100779\nv 0.166291 -0.068880 -2.520644\nv 0.166291 -0.068880 -2.100779\nv 0.176534 -0.035115 -2.520644\nv 0.176534 -0.035115 -2.100779\nv 0.179992 0.000000 -2.520644\nv 0.179992 0.000000 -2.100779\nv 0.176534 0.035115 -2.520644\nv 0.176534 0.035115 -2.100779\nv 0.166291 0.068880 -2.520644\nv 0.166291 0.068880 -2.100779\nv 0.149658 0.099998 -2.520644\nv 0.149658 0.099998 -2.100779\nv 0.127274 0.127274 -2.520644\nv 0.127274 0.127274 -2.100779\nv 0.099998 0.149658 -2.520644\nv 0.099998 0.149658 -2.100779\nv 0.068880 0.166291 -2.520644\nv 0.068880 0.166291 -2.100779\nv 0.035115 0.176534 -2.520644\nv 0.035115 0.176534 -2.313187\nv 0.035582 0.176392 -2.308440\nv 0.035115 0.176534 -2.303694\nv 0.035115 0.176534 -2.100779\nv 0.000000 0.179992 -2.520644\nv 0.000000 0.179992 -2.346161\nv 0.005032 0.179497 -2.345665\nv 0.012152 0.178795 -2.343506\nv 0.018714 0.178149 -2.339998\nv 0.024465 0.177583 -2.335278\nv 0.029186 0.177118 -2.329527\nv 0.032693 0.176772 -2.322965\nv 0.034853 0.176559 -2.315845\nv -0.035115 0.176534 -2.520644\nv -0.035115 0.176534 -2.327312\nv -0.033931 0.176650 -2.329527\nv -0.029211 0.177115 -2.335278\nv -0.023459 0.177682 -2.339998\nv -0.016897 0.178328 -2.343506\nv -0.009777 0.179029 -2.345665\nv -0.002373 0.179759 -2.346395\nv -0.068880 0.166291 -2.520644\nv -0.068880 0.166291 -2.100779\nv -0.035115 0.176534 -2.100779\nv -0.035115 0.176534 -2.289569\nv -0.037438 0.175829 -2.293915\nv -0.039598 0.175174 -2.301036\nv -0.040327 0.174952 -2.308440\nv -0.039598 0.175174 -2.315845\nv -0.037438 0.175829 -2.322965\nv -0.099998 0.149658 -2.520644\nv -0.099998 0.149658 -2.100779\nv -0.127274 0.127274 -2.520644\nv -0.127274 0.127274 -2.100779\nv -0.149658 0.099998 -2.520644\nv -0.149658 0.099998 -2.100779\nv -0.166291 0.068880 -2.520644\nv -0.166291 0.068880 -2.100779\nv 0.000000 -0.033325 -2.100779\nv -0.006501 -0.032685 -2.100779\nv -0.012753 -0.030789 -2.100779\nv -0.018514 -0.027709 -2.100779\nv -0.023564 -0.023565 -2.100779\nv -0.027709 -0.018515 -2.100779\nv -0.030788 -0.012753 -2.100779\nv -0.032685 -0.006502 -2.100779\nv -0.033325 0.000000 -2.100779\nv -0.032685 0.006501 -2.100779\nv -0.030788 0.012753 -2.100779\nv -0.027709 0.018514 -2.100779\nv -0.023564 0.023564 -2.100779\nv -0.018514 0.027709 -2.100779\nv -0.012753 0.030788 -2.100779\nv -0.006502 0.032685 -2.100779\nv 0.000000 0.033325 -2.100779\nv 0.000000 0.179992 -2.100779\nv -0.176534 0.035114 -2.100779\nv -0.176534 0.035114 -2.520644\nv 0.000000 0.033325 -2.520644\nv -0.006502 0.032685 -2.520644\nv -0.012753 0.030788 -2.520644\nv -0.018514 0.027709 -2.520644\nv -0.023564 0.023564 -2.520644\nv -0.027709 0.018514 -2.520644\nv -0.030788 0.012753 -2.520644\nv -0.032685 0.006501 -2.520644\nv -0.033325 0.000000 -2.520644\nv -0.032685 -0.006502 -2.520644\nv -0.030788 -0.012753 -2.520644\nv -0.027709 -0.018515 -2.520644\nv -0.023564 -0.023565 -2.520644\nv -0.018514 -0.027709 -2.520644\nv -0.012753 -0.030789 -2.520644\nv -0.006501 -0.032685 -2.520644\nv 0.000000 -0.033325 -2.520644\nv 0.012152 0.259537 -1.306219\nv 0.018714 0.259537 -1.302711\nv 0.018714 0.259537 -1.302711\nv 0.012152 0.259537 -1.306219\nv 0.005032 0.259537 -1.308379\nv -0.002373 0.259537 -1.309108\nv -0.009777 0.259537 -1.308379\nv -0.016897 0.259537 -1.306219\nv -0.023459 0.259537 -1.302711\nv -0.029211 0.259537 -1.297991\nv -0.033931 0.259537 -1.292240\nv -0.037438 0.259537 -1.285678\nv -0.039598 0.259537 -1.278558\nv -0.040327 0.259537 -1.271153\nv -0.039598 0.259537 -1.263749\nv -0.037438 0.259537 -1.256629\nv -0.033931 0.259537 -1.250067\nv -0.029211 0.259537 -1.244315\nv -0.023459 0.259537 -1.239595\nv -0.016897 0.259537 -1.236088\nv -0.009777 0.259537 -1.233928\nv -0.002373 0.259537 -1.233198\nv 0.005032 0.259537 -1.233928\nv 0.012152 0.259537 -1.236088\nv 0.018714 0.259537 -1.239595\nv 0.024465 0.259537 -1.244315\nv 0.029186 0.259537 -1.250067\nv 0.032693 0.259537 -1.256629\nv 0.034853 0.259537 -1.263749\nv 0.035582 0.259537 -1.271153\nv 0.034853 0.259537 -1.278558\nv 0.032693 0.259537 -1.285678\nv 0.029186 0.259537 -1.292240\nv 0.024465 0.259537 -1.297991\nv -0.023459 0.259537 -1.302711\nv -0.029211 0.259537 -1.297991\nv -0.040327 0.229000 -1.271153\nv -0.039598 0.229000 -1.263749\nv -0.039598 0.229000 -1.263749\nv -0.040327 0.229000 -1.271153\nv 0.005032 0.259537 -1.308379\nv -0.033931 0.259537 -1.292240\nv 0.005032 0.229000 -1.233928\nv 0.012152 0.229000 -1.236088\nv 0.012152 0.229000 -1.236088\nv 0.005032 0.229000 -1.233928\nv -0.002373 0.259537 -1.309108\nv -0.037438 0.259537 -1.285678\nv 0.032693 0.229000 -1.285678\nv 0.029186 0.229000 -1.292240\nv 0.029186 0.229000 -1.292240\nv 0.032693 0.229000 -1.285678\nv -0.002373 0.229000 -1.309108\nv -0.009777 0.229000 -1.308379\nv -0.009777 0.229000 -1.308379\nv -0.002373 0.229000 -1.309108\nv -0.039598 0.259537 -1.278558\nv -0.037438 0.229000 -1.256629\nv -0.037438 0.229000 -1.256629\nv -0.040327 0.259537 -1.271153\nv 0.018714 0.229000 -1.239595\nv 0.018714 0.229000 -1.239595\nv -0.039598 0.259537 -1.263749\nv 0.024465 0.229000 -1.297991\nv 0.024465 0.229000 -1.297991\nv -0.016897 0.229000 -1.306219\nv -0.016897 0.229000 -1.306219\nv -0.037438 0.259537 -1.256629\nv -0.033931 0.229000 -1.250067\nv -0.033931 0.229000 -1.250067\nv -0.033931 0.259537 -1.250067\nv 0.024465 0.229000 -1.244315\nv 0.024465 0.229000 -1.244315\nv -0.029211 0.259537 -1.244315\nv 0.018714 0.229000 -1.302711\nv 0.018714 0.229000 -1.302711\nv -0.023459 0.229000 -1.302711\nv -0.023459 0.229000 -1.302711\nv -0.023459 0.259537 -1.239595\nv -0.029211 0.229000 -1.244315\nv -0.029211 0.229000 -1.244315\nv -0.016897 0.259537 -1.236088\nv 0.029186 0.229000 -1.250067\nv 0.029186 0.229000 -1.250067\nv -0.009777 0.259537 -1.233928\nv 0.012152 0.229000 -1.306219\nv 0.012152 0.229000 -1.306219\nv -0.029211 0.229000 -1.297991\nv -0.029211 0.229000 -1.297991\nv -0.002373 0.259537 -1.233198\nv 0.029186 0.259537 -1.250067\nv 0.024465 0.259537 -1.244315\nv 0.024465 0.259537 -1.244315\nv 0.029186 0.259537 -1.250067\nv -0.009777 0.229000 -1.233928\nv -0.002373 0.229000 -1.233198\nv -0.002373 0.229000 -1.233198\nv -0.009777 0.229000 -1.233928\nv 0.032693 0.259537 -1.256629\nv 0.032693 0.259537 -1.256629\nv 0.005032 0.229000 -1.233928\nv 0.034853 0.259537 -1.263749\nv 0.034853 0.259537 -1.263749\nv 0.012152 0.229000 -1.236088\nv 0.035582 0.259537 -1.271153\nv 0.035582 0.259537 -1.271153\nv 0.018714 0.229000 -1.239595\nv 0.034853 0.259537 -1.278558\nv 0.034853 0.259537 -1.278558\nv 0.024465 0.229000 -1.244315\nv 0.032693 0.259537 -1.285678\nv 0.032693 0.259537 -1.285678\nv 0.029186 0.229000 -1.250067\nv 0.029186 0.259537 -1.292240\nv 0.029186 0.259537 -1.292240\nv -0.009777 0.259537 -1.308379\nv -0.002373 0.259537 -1.309108\nv -0.009777 0.259537 -1.308379\nv 0.032693 0.229000 -1.256629\nv 0.032693 0.229000 -1.256629\nv 0.024465 0.259537 -1.297991\nv 0.024465 0.259537 -1.297991\nv -0.016897 0.259537 -1.306219\nv -0.016897 0.259537 -1.306219\nv 0.034853 0.229000 -1.263749\nv 0.034853 0.229000 -1.263749\nv 0.018714 0.259537 -1.302711\nv -0.023459 0.259537 -1.302711\nv 0.035582 0.229000 -1.271153\nv 0.035582 0.229000 -1.271153\nv 0.012152 0.259537 -1.306219\nv -0.029211 0.259537 -1.297991\nv 0.034853 0.229000 -1.278558\nv 0.034853 0.229000 -1.278558\nv 0.005032 0.259537 -1.308379\nv -0.033931 0.259537 -1.292240\nv 0.032693 0.229000 -1.285678\nv -0.037438 0.259537 -1.285678\nv 0.029186 0.229000 -1.292240\nv -0.009777 0.229000 -1.308379\nv -0.002373 0.229000 -1.309108\nv -0.039598 0.259537 -1.278558\nv 0.034853 0.229000 -1.278558\nv -0.002373 0.229000 -1.233198\nv -0.039598 0.229000 -1.278558\nv -0.039598 0.229000 -1.278558\nv 0.035582 0.229000 -1.271153\nv -0.009777 0.229000 -1.233928\nv -0.037438 0.229000 -1.285678\nv -0.037438 0.229000 -1.285678\nv 0.034853 0.229000 -1.263749\nv -0.016897 0.229000 -1.236088\nv -0.016897 0.229000 -1.236088\nv 0.005032 0.229000 -1.308379\nv 0.005032 0.229000 -1.308379\nv -0.033931 0.229000 -1.292240\nv -0.033931 0.229000 -1.292240\nv 0.032693 0.229000 -1.256629\nv 0.018714 0.259537 -1.239595\nv -0.023459 0.229000 -1.239595\nv -0.023459 0.229000 -1.239595\nv 0.012152 0.259537 -1.236088\nv 0.005032 0.259537 -1.233928\nv -0.037438 0.229000 -1.256629\nv -0.033931 0.229000 -1.250067\nv -0.058447 0.229000 -1.233685\nv -0.064680 0.229000 -1.245345\nv 0.005032 0.259537 -1.233928\nv -0.002373 0.259537 -1.233198\nv -0.002373 0.259537 -1.203713\nv 0.010784 0.259537 -1.205009\nv -0.029211 0.229000 -1.244315\nv -0.050060 0.229000 -1.223466\nv 0.012152 0.259537 -1.236088\nv 0.023436 0.259537 -1.208846\nv -0.023459 0.229000 -1.239595\nv -0.039841 0.229000 -1.215078\nv 0.018714 0.259537 -1.239595\nv 0.035095 0.259537 -1.215078\nv -0.016897 0.229000 -1.236088\nv -0.028181 0.229000 -1.208846\nv 0.045315 0.259537 -1.223466\nv -0.015530 0.229000 -1.205009\nv 0.053702 0.259537 -1.233685\nv -0.002373 0.229000 -1.203713\nv 0.059934 0.259537 -1.245345\nv 0.010784 0.229000 -1.205009\nv 0.063772 0.259537 -1.257996\nv 0.023436 0.229000 -1.208846\nv 0.065068 0.259537 -1.271153\nv 0.035095 0.229000 -1.215078\nv 0.063772 0.259537 -1.284310\nv 0.045315 0.229000 -1.223466\nv 0.059934 0.259537 -1.296962\nv 0.053702 0.229000 -1.233685\nv 0.053702 0.259537 -1.308621\nv -0.002373 0.259537 -1.338594\nv -0.015530 0.259537 -1.337298\nv 0.059934 0.229000 -1.245345\nv 0.045315 0.259537 -1.318841\nv -0.028181 0.259537 -1.333460\nv 0.063772 0.229000 -1.257996\nv 0.035095 0.259537 -1.327228\nv -0.039840 0.259537 -1.327228\nv 0.065068 0.229000 -1.271153\nv 0.023436 0.259537 -1.333460\nv -0.050060 0.259537 -1.318841\nv -0.009777 0.259537 -1.233928\nv -0.039598 0.229000 -1.263749\nv -0.016897 0.259537 -1.236088\nv -0.040327 0.229000 -1.271153\nv -0.023459 0.259537 -1.239595\nv -0.039598 0.229000 -1.278558\nv -0.029211 0.259537 -1.244315\nv -0.037438 0.229000 -1.285678\nv -0.033931 0.259537 -1.250067\nv -0.033931 0.229000 -1.292240\nv 0.005032 0.229000 -1.308379\nv -0.037438 0.259537 -1.256629\nv -0.029211 0.229000 -1.297991\nv 0.012152 0.229000 -1.306219\nv -0.039598 0.259537 -1.263749\nv -0.023459 0.229000 -1.302711\nv 0.018714 0.229000 -1.302711\nv -0.040327 0.259537 -1.271153\nv -0.016897 0.229000 -1.306219\nv 0.024465 0.229000 -1.297991\nv -0.015530 0.259537 -1.205009\nv -0.068517 0.229000 -1.257996\nv -0.028181 0.259537 -1.208846\nv -0.069813 0.229000 -1.271153\nv -0.039841 0.259537 -1.215078\nv -0.068517 0.229000 -1.284310\nv -0.050060 0.259537 -1.223466\nv -0.064679 0.229000 -1.296962\nv -0.058447 0.259537 -1.233685\nv -0.058447 0.229000 -1.308621\nv -0.002373 0.229000 -1.338594\nv 0.010784 0.229000 -1.337298\nv -0.064680 0.259537 -1.245345\nv -0.050060 0.229000 -1.318841\nv 0.023436 0.229000 -1.333460\nv -0.068517 0.259537 -1.257996\nv -0.039840 0.229000 -1.327228\nv 0.035095 0.229000 -1.327228\nv -0.069813 0.259537 -1.271153\nv -0.028181 0.229000 -1.333460\nv 0.045315 0.229000 -1.318841\nv -0.068517 0.259537 -1.284310\nv -0.015530 0.229000 -1.337298\nv 0.053702 0.229000 -1.308621\nv -0.064679 0.259537 -1.296962\nv 0.059934 0.229000 -1.296962\nv -0.058447 0.259537 -1.308621\nv 0.010784 0.259537 -1.337298\nv 0.063772 0.229000 -1.284310\nv 0.023436 0.229000 -1.333460\nv 0.010784 0.229000 -1.337298\nv 0.010784 0.259537 -1.337298\nv 0.023436 0.259537 -1.333460\nv -0.039840 0.229000 -1.327228\nv -0.050060 0.229000 -1.318841\nv -0.051363 0.229000 -1.320429\nv -0.041144 0.229000 -1.328816\nv 0.059934 0.229000 -1.245345\nv 0.053702 0.229000 -1.233685\nv 0.059934 0.259537 -1.245345\nv 0.053702 0.259537 -1.233685\nv -0.050060 0.229000 -1.223466\nv -0.039841 0.229000 -1.215078\nv -0.039841 0.259537 -1.215078\nv -0.050060 0.259537 -1.223466\nv 0.010784 0.229000 -1.337298\nv -0.002373 0.229000 -1.338594\nv -0.002171 0.229000 -1.340638\nv 0.010986 0.229000 -1.339342\nv -0.050060 0.259537 -1.318841\nv -0.039840 0.259537 -1.327228\nv -0.028181 0.259537 -1.208846\nv -0.039841 0.259537 -1.215078\nv -0.040809 0.259537 -1.213267\nv -0.029149 0.259537 -1.207035\nv 0.059934 0.229000 -1.296962\nv 0.063772 0.229000 -1.284310\nv 0.059934 0.259537 -1.296962\nv 0.063772 0.259537 -1.284310\nv -0.002373 0.229000 -1.203713\nv 0.010784 0.229000 -1.205009\nv 0.010784 0.259537 -1.205009\nv -0.002373 0.259537 -1.203713\nv 0.061746 0.229000 -1.244377\nv 0.055514 0.229000 -1.232717\nv -0.069813 0.229000 -1.271153\nv -0.068517 0.229000 -1.284310\nv -0.069813 0.259537 -1.271153\nv -0.068517 0.259537 -1.284310\nv 0.065738 0.259537 -1.284907\nv 0.061900 0.259537 -1.297558\nv 0.023436 0.229000 -1.333460\nv 0.035095 0.229000 -1.327228\nv 0.023436 0.259537 -1.333460\nv 0.035095 0.259537 -1.327228\nv 0.045315 0.229000 -1.223466\nv 0.053702 0.229000 -1.233685\nv 0.053702 0.259537 -1.233685\nv 0.045315 0.259537 -1.223466\nv 0.010784 0.259537 -1.337298\nv 0.010986 0.259537 -1.339342\nv -0.050060 0.229000 -1.223466\nv -0.058447 0.229000 -1.233685\nv -0.050060 0.259537 -1.223466\nv -0.058447 0.259537 -1.233685\nv -0.028181 0.229000 -1.333460\nv -0.039840 0.229000 -1.327228\nv -0.039840 0.259537 -1.327228\nv -0.028181 0.259537 -1.333460\nv 0.065068 0.229000 -1.271153\nv 0.063772 0.229000 -1.284310\nv 0.063772 0.259537 -1.284310\nv 0.065068 0.259537 -1.271153\nv 0.010784 0.229000 -1.205009\nv 0.023436 0.229000 -1.208846\nv 0.024032 0.229000 -1.206881\nv 0.011381 0.229000 -1.203043\nv -0.002373 0.229000 -1.203713\nv -0.015530 0.229000 -1.205009\nv -0.002373 0.259537 -1.203713\nv -0.015530 0.259537 -1.205009\nv -0.064679 0.229000 -1.296962\nv -0.068517 0.229000 -1.284310\nv -0.068517 0.259537 -1.284310\nv -0.064679 0.259537 -1.296962\nv 0.045315 0.229000 -1.318841\nv 0.035095 0.229000 -1.327228\nv 0.035095 0.259537 -1.327228\nv 0.045315 0.259537 -1.318841\nv 0.055514 0.259537 -1.232717\nv 0.045315 0.229000 -1.223466\nv 0.035095 0.229000 -1.215078\nv 0.045315 0.259537 -1.223466\nv 0.035095 0.259537 -1.215078\nv -0.064680 0.229000 -1.245345\nv -0.058447 0.229000 -1.233685\nv -0.058447 0.259537 -1.233685\nv -0.064680 0.259537 -1.245345\nv -0.028181 0.259537 -1.333460\nv -0.015530 0.259537 -1.337298\nv -0.016126 0.259537 -1.339263\nv -0.028777 0.259537 -1.335426\nv -0.028181 0.229000 -1.333460\nv -0.015530 0.229000 -1.337298\nv -0.071857 0.229000 -1.271355\nv -0.070561 0.229000 -1.284512\nv 0.065068 0.229000 -1.271153\nv 0.063772 0.229000 -1.257996\nv 0.065068 0.259537 -1.271153\nv 0.063772 0.259537 -1.257996\nv -0.028181 0.229000 -1.208846\nv -0.015530 0.229000 -1.205009\nv -0.015530 0.259537 -1.205009\nv -0.028181 0.259537 -1.208846\nv -0.039841 0.229000 -1.215078\nv -0.028181 0.229000 -1.208846\nv -0.029149 0.229000 -1.207035\nv -0.040809 0.229000 -1.213267\nv -0.064679 0.229000 -1.296962\nv -0.058447 0.229000 -1.308621\nv -0.064679 0.259537 -1.296962\nv -0.058447 0.259537 -1.308621\nv 0.023436 0.259537 -1.208846\nv 0.010784 0.259537 -1.205009\nv 0.011381 0.259537 -1.203043\nv 0.024032 0.259537 -1.206881\nv 0.045315 0.229000 -1.318841\nv 0.053702 0.229000 -1.308621\nv 0.045315 0.259537 -1.318841\nv 0.053702 0.259537 -1.308621\nv 0.023436 0.229000 -1.208846\nv 0.035095 0.229000 -1.215078\nv 0.035095 0.259537 -1.215078\nv 0.023436 0.259537 -1.208846\nv 0.067112 0.229000 -1.270952\nv 0.065816 0.229000 -1.257795\nv -0.064680 0.229000 -1.245345\nv -0.068517 0.229000 -1.257996\nv -0.064680 0.259537 -1.245345\nv -0.068517 0.259537 -1.257996\nv 0.065738 0.229000 -1.284907\nv -0.002373 0.259537 -1.338594\nv -0.002373 0.229000 -1.338594\nv -0.015530 0.229000 -1.337298\nv -0.015530 0.259537 -1.337298\nv -0.002373 0.259537 -1.338594\nv 0.059934 0.229000 -1.245345\nv 0.063772 0.229000 -1.257996\nv 0.063772 0.259537 -1.257996\nv 0.059934 0.259537 -1.245345\nv 0.036064 0.259537 -1.329039\nv 0.024404 0.259537 -1.335272\nv -0.050060 0.229000 -1.318841\nv -0.058447 0.229000 -1.308621\nv -0.058447 0.259537 -1.308621\nv -0.050060 0.259537 -1.318841\nv 0.059934 0.229000 -1.296962\nv 0.053702 0.229000 -1.308621\nv 0.053702 0.259537 -1.308621\nv 0.059934 0.259537 -1.296962\nv -0.069813 0.229000 -1.271153\nv -0.068517 0.229000 -1.257996\nv -0.068517 0.259537 -1.257996\nv -0.069813 0.259537 -1.271153\nv 0.061746 0.259537 -1.244377\nv -0.051363 0.259537 -1.320429\nv 0.061900 0.229000 -1.297558\nv -0.071857 0.259537 -1.271355\nv 0.024404 0.229000 -1.335272\nv -0.051648 0.259537 -1.222163\nv -0.051648 0.229000 -1.222163\nv -0.002574 0.259537 -1.201669\nv -0.002574 0.229000 -1.201669\nv 0.046618 0.259537 -1.221878\nv 0.046618 0.229000 -1.221878\nv -0.028777 0.229000 -1.335426\nv 0.067112 0.259537 -1.270952\nv -0.066491 0.259537 -1.297930\nv -0.066491 0.229000 -1.297930\nv 0.046903 0.259537 -1.320144\nv 0.046903 0.229000 -1.320144\nv -0.066645 0.259537 -1.244749\nv -0.066645 0.229000 -1.244749\nv -0.002171 0.259537 -1.340638\nv -0.038503 0.234618 -1.205665\nv -0.036752 0.234618 -1.204729\nv -0.036752 0.253919 -1.204729\nv -0.038503 0.253919 -1.205665\nv 0.056069 0.234618 -1.317831\nv 0.054809 0.234618 -1.319365\nv 0.054809 0.253919 -1.319365\nv 0.056069 0.253919 -1.317831\nv 0.055290 0.229000 -1.309924\nv 0.055290 0.259537 -1.309924\nv -0.070483 0.229000 -1.257400\nv 0.071957 0.234618 -1.262835\nv 0.072152 0.234618 -1.264811\nv 0.072152 0.253919 -1.264811\nv 0.071957 0.253919 -1.262835\nv 0.065816 0.259537 -1.257795\nv -0.060259 0.229000 -1.309589\nv 0.044305 0.234618 -1.212712\nv 0.045839 0.234618 -1.213971\nv 0.045839 0.253919 -1.213971\nv 0.044305 0.253919 -1.212712\nv 0.036398 0.229000 -1.213491\nv 0.036398 0.259537 -1.213491\nv -0.016126 0.229000 -1.339263\nv -0.010691 0.234618 -1.196823\nv -0.008715 0.234618 -1.196629\nv -0.008715 0.253919 -1.196629\nv -0.010691 0.253919 -1.196823\nv -0.015731 0.229000 -1.202964\nv -0.015731 0.259537 -1.202964\nv -0.060814 0.234618 -1.224476\nv -0.059555 0.234618 -1.222941\nv -0.059555 0.253919 -1.222941\nv -0.060814 0.253919 -1.224476\nv -0.060035 0.229000 -1.232382\nv -0.060035 0.259537 -1.232382\nv -0.076703 0.234618 -1.279472\nv -0.076897 0.234618 -1.277496\nv -0.076897 0.253919 -1.277496\nv -0.076703 0.253919 -1.279472\nv -0.070561 0.259537 -1.284512\nv 0.036064 0.229000 -1.329039\nv -0.049050 0.234618 -1.329594\nv -0.050585 0.234618 -1.328335\nv -0.050585 0.253919 -1.328335\nv -0.049050 0.253919 -1.329594\nv -0.041144 0.259537 -1.328816\nv -0.074228 0.234618 -1.250393\nv -0.073652 0.234618 -1.248494\nv -0.073652 0.253919 -1.248494\nv -0.074228 0.253919 -1.250393\nv -0.070483 0.259537 -1.257400\nv 0.005946 0.234618 -1.345483\nv 0.003970 0.234618 -1.345678\nv 0.003970 0.253919 -1.345678\nv 0.005946 0.253919 -1.345483\nv -0.067861 0.234618 -1.307283\nv -0.068797 0.234618 -1.305532\nv -0.068797 0.253919 -1.305532\nv -0.067861 0.253919 -1.307283\nv 0.033757 0.234618 -1.336642\nv 0.032007 0.234618 -1.337578\nv 0.032007 0.253919 -1.337578\nv 0.033757 0.253919 -1.336642\nv -0.060259 0.259537 -1.309589\nv 0.018387 0.234618 -1.199298\nv 0.020287 0.234618 -1.199874\nv 0.020287 0.253919 -1.199874\nv 0.018387 0.253919 -1.199298\nv -0.023132 0.234618 -1.343009\nv -0.025032 0.234618 -1.342432\nv -0.025032 0.253919 -1.342432\nv -0.023132 0.253919 -1.343009\nv 0.069483 0.234618 -1.291913\nv 0.068906 0.234618 -1.293813\nv 0.068906 0.253919 -1.293813\nv 0.069483 0.253919 -1.291913\nv 0.064052 0.234618 -1.236774\nv 0.063116 0.234618 -1.235023\nv 0.061128 0.231809 -1.232901\nv 0.064712 0.231809 -1.239606\nv 0.058346 0.229753 -1.232057\nv 0.063868 0.229753 -1.242389\nv 0.064052 0.253919 -1.236774\nv 0.064712 0.256728 -1.239606\nv 0.063868 0.258784 -1.242389\nv 0.063116 0.253919 -1.235023\nv 0.061128 0.256728 -1.232901\nv 0.058346 0.258784 -1.232057\nv -0.046401 0.231809 -1.330795\nv -0.052278 0.231809 -1.325971\nv -0.043507 0.229753 -1.330510\nv -0.052563 0.229753 -1.323077\nv -0.052278 0.256728 -1.325971\nv -0.052563 0.258784 -1.323077\nv -0.046401 0.256728 -1.330795\nv -0.043507 0.258784 -1.330510\nv 0.069578 0.231809 -1.289007\nv 0.067371 0.231809 -1.296282\nv 0.068207 0.229753 -1.286442\nv 0.064806 0.229753 -1.297653\nv 0.067371 0.256728 -1.296282\nv 0.064806 0.258784 -1.297653\nv 0.069578 0.256728 -1.289007\nv 0.068207 0.258784 -1.286442\nv -0.075678 0.231809 -1.282193\nv -0.076424 0.231809 -1.274627\nv -0.073431 0.229753 -1.284038\nv -0.074579 0.229753 -1.272379\nv -0.076424 0.256728 -1.274627\nv -0.074579 0.258784 -1.272379\nv -0.075678 0.256728 -1.282193\nv -0.073431 0.258784 -1.284038\nv 0.035880 0.231809 -1.334654\nv 0.029175 0.231809 -1.338238\nv 0.036724 0.229753 -1.331871\nv 0.026392 0.229753 -1.337394\nv 0.029175 0.256728 -1.338238\nv 0.026392 0.258784 -1.337394\nv 0.035880 0.256728 -1.334654\nv 0.036724 0.258784 -1.331871\nv -0.062014 0.231809 -1.227125\nv -0.057191 0.231809 -1.221247\nv -0.061729 0.229753 -1.230018\nv -0.054297 0.229753 -1.220962\nv -0.057191 0.256728 -1.221247\nv -0.054297 0.258784 -1.220962\nv -0.062014 0.256728 -1.227125\nv -0.061729 0.258784 -1.230018\nv -0.013413 0.231809 -1.197847\nv -0.005846 0.231809 -1.197102\nv -0.015257 0.229753 -1.200095\nv -0.003598 0.229753 -1.198947\nv -0.005846 0.256728 -1.197102\nv -0.003598 0.258784 -1.198947\nv -0.013413 0.256728 -1.197847\nv -0.015257 0.258784 -1.200095\nv 0.041656 0.231809 -1.211512\nv 0.047533 0.231809 -1.216335\nv 0.038762 0.229753 -1.211797\nv 0.047818 0.229753 -1.219229\nv 0.047533 0.256728 -1.216335\nv 0.047818 0.258784 -1.219229\nv 0.041656 0.256728 -1.211512\nv 0.038762 0.258784 -1.211797\nv -0.020226 0.231809 -1.343104\nv -0.027501 0.231809 -1.340897\nv -0.017661 0.229753 -1.341733\nv -0.028872 0.229753 -1.338332\nv -0.027501 0.256728 -1.340897\nv -0.028872 0.258784 -1.338332\nv -0.020226 0.256728 -1.343104\nv -0.017661 0.258784 -1.341733\nv 0.070933 0.231809 -1.260113\nv 0.071678 0.231809 -1.267680\nv 0.068685 0.229753 -1.258269\nv 0.069834 0.229753 -1.269928\nv 0.071678 0.256728 -1.267680\nv 0.069834 0.258784 -1.269928\nv 0.070933 0.256728 -1.260113\nv 0.068685 0.258784 -1.258269\nv -0.065874 0.231809 -1.309406\nv -0.069458 0.231809 -1.302701\nv -0.063091 0.229753 -1.310250\nv -0.068613 0.229753 -1.299918\nv -0.069458 0.256728 -1.302701\nv -0.068613 0.258784 -1.299918\nv -0.065874 0.256728 -1.309406\nv -0.063091 0.258784 -1.310250\nv 0.057269 0.231809 -1.315182\nv 0.052445 0.231809 -1.321059\nv 0.056984 0.229753 -1.312288\nv 0.049551 0.229753 -1.321344\nv 0.052445 0.256728 -1.321059\nv 0.049551 0.258784 -1.321344\nv 0.057269 0.256728 -1.315182\nv 0.056984 0.258784 -1.312288\nv -0.074323 0.231809 -1.253300\nv -0.072116 0.231809 -1.246024\nv -0.072952 0.229753 -1.255865\nv -0.069552 0.229753 -1.244653\nv -0.072116 0.256728 -1.246024\nv -0.069552 0.258784 -1.244653\nv -0.074323 0.256728 -1.253300\nv -0.072952 0.258784 -1.255865\nv 0.008667 0.231809 -1.344459\nv 0.001101 0.231809 -1.345204\nv 0.010512 0.229753 -1.342211\nv -0.001147 0.229753 -1.343359\nv 0.001101 0.256728 -1.345204\nv -0.001147 0.258784 -1.343359\nv 0.008667 0.256728 -1.344459\nv 0.010512 0.258784 -1.342211\nv -0.040625 0.231809 -1.207652\nv -0.033920 0.231809 -1.204068\nv -0.041469 0.229753 -1.210435\nv -0.031137 0.229753 -1.204912\nv -0.033920 0.256728 -1.204068\nv -0.031137 0.258784 -1.204912\nv -0.040625 0.256728 -1.207652\nv -0.041469 0.258784 -1.210435\nv 0.015481 0.231809 -1.199203\nv 0.022756 0.231809 -1.201410\nv 0.012916 0.229753 -1.200574\nv 0.024127 0.229753 -1.203974\nv 0.022756 0.256728 -1.201410\nv 0.024127 0.258784 -1.203974\nv 0.015481 0.256728 -1.199203\nv 0.012916 0.258784 -1.200574\nv 0.012152 0.259537 -1.825077\nv 0.018714 0.259537 -1.821569\nv 0.018714 0.259537 -1.821569\nv 0.012152 0.259537 -1.825077\nv 0.005032 0.259537 -1.827237\nv -0.002373 0.259537 -1.827966\nv -0.009777 0.259537 -1.827237\nv -0.016897 0.259537 -1.825077\nv -0.023459 0.259537 -1.821569\nv -0.029211 0.259537 -1.816849\nv -0.033931 0.259537 -1.811098\nv -0.037438 0.259537 -1.804536\nv -0.039598 0.259537 -1.797416\nv -0.040327 0.259537 -1.790011\nv -0.039598 0.259537 -1.782607\nv -0.037438 0.259537 -1.775486\nv -0.033931 0.259537 -1.768925\nv -0.029211 0.259537 -1.763173\nv -0.023459 0.259537 -1.758453\nv -0.016897 0.259537 -1.754946\nv -0.009777 0.259537 -1.752786\nv -0.002373 0.259537 -1.752057\nv 0.005032 0.259537 -1.752786\nv 0.012152 0.259537 -1.754946\nv 0.018714 0.259537 -1.758453\nv 0.024465 0.259537 -1.763173\nv 0.029186 0.259537 -1.768925\nv 0.032693 0.259537 -1.775486\nv 0.034853 0.259537 -1.782607\nv 0.035582 0.259537 -1.790011\nv 0.034853 0.259537 -1.797416\nv 0.032693 0.259537 -1.804536\nv 0.029186 0.259537 -1.811098\nv 0.024465 0.259537 -1.816849\nv -0.023459 0.259537 -1.821569\nv -0.029211 0.259537 -1.816849\nv -0.040327 0.229000 -1.790011\nv -0.039598 0.229000 -1.782607\nv -0.039598 0.229000 -1.782607\nv -0.040327 0.229000 -1.790011\nv 0.005032 0.259537 -1.827237\nv -0.033931 0.259537 -1.811098\nv 0.005032 0.229000 -1.752786\nv 0.012152 0.229000 -1.754946\nv 0.012152 0.229000 -1.754946\nv 0.005032 0.229000 -1.752786\nv -0.002373 0.259537 -1.827966\nv -0.037438 0.259537 -1.804536\nv 0.032693 0.229000 -1.804536\nv 0.029186 0.229000 -1.811098\nv 0.029186 0.229000 -1.811098\nv 0.032693 0.229000 -1.804536\nv -0.002373 0.229000 -1.827966\nv -0.009777 0.229000 -1.827237\nv -0.009777 0.229000 -1.827237\nv -0.002373 0.229000 -1.827966\nv -0.039598 0.259537 -1.797416\nv -0.037438 0.229000 -1.775486\nv -0.037438 0.229000 -1.775486\nv -0.040327 0.259537 -1.790011\nv 0.018714 0.229000 -1.758453\nv 0.018714 0.229000 -1.758453\nv -0.039598 0.259537 -1.782607\nv 0.024465 0.229000 -1.816849\nv 0.024465 0.229000 -1.816849\nv -0.016897 0.229000 -1.825077\nv -0.016897 0.229000 -1.825077\nv -0.037438 0.259537 -1.775486\nv -0.033931 0.229000 -1.768925\nv -0.033931 0.229000 -1.768925\nv -0.033931 0.259537 -1.768925\nv 0.024465 0.229000 -1.763173\nv 0.024465 0.229000 -1.763173\nv -0.029211 0.259537 -1.763173\nv 0.018714 0.229000 -1.821569\nv 0.018714 0.229000 -1.821569\nv -0.023459 0.229000 -1.821569\nv -0.023459 0.229000 -1.821569\nv -0.023459 0.259537 -1.758453\nv -0.029211 0.229000 -1.763173\nv -0.029211 0.229000 -1.763173\nv -0.016897 0.259537 -1.754946\nv 0.029186 0.229000 -1.768925\nv 0.029186 0.229000 -1.768925\nv -0.009777 0.259537 -1.752786\nv 0.012152 0.229000 -1.825077\nv 0.012152 0.229000 -1.825077\nv -0.029211 0.229000 -1.816849\nv -0.029211 0.229000 -1.816849\nv -0.002373 0.259537 -1.752057\nv 0.029186 0.259537 -1.768925\nv 0.024465 0.259537 -1.763173\nv 0.024465 0.259537 -1.763173\nv 0.029186 0.259537 -1.768925\nv -0.009777 0.229000 -1.752786\nv -0.002373 0.229000 -1.752057\nv -0.002373 0.229000 -1.752057\nv -0.009777 0.229000 -1.752786\nv 0.032693 0.259537 -1.775486\nv 0.032693 0.259537 -1.775486\nv 0.005032 0.229000 -1.752786\nv 0.034853 0.259537 -1.782607\nv 0.034853 0.259537 -1.782607\nv 0.012152 0.229000 -1.754946\nv 0.035582 0.259537 -1.790011\nv 0.035582 0.259537 -1.790011\nv 0.018714 0.229000 -1.758453\nv 0.034853 0.259537 -1.797416\nv 0.034853 0.259537 -1.797416\nv 0.024465 0.229000 -1.763173\nv 0.032693 0.259537 -1.804536\nv 0.032693 0.259537 -1.804536\nv 0.029186 0.229000 -1.768925\nv 0.029186 0.259537 -1.811098\nv 0.029186 0.259537 -1.811098\nv -0.009777 0.259537 -1.827237\nv -0.002373 0.259537 -1.827966\nv -0.009777 0.259537 -1.827237\nv 0.032693 0.229000 -1.775486\nv 0.032693 0.229000 -1.775486\nv 0.024465 0.259537 -1.816849\nv 0.024465 0.259537 -1.816849\nv -0.016897 0.259537 -1.825077\nv -0.016897 0.259537 -1.825077\nv 0.034853 0.229000 -1.782607\nv 0.034853 0.229000 -1.782607\nv 0.018714 0.259537 -1.821569\nv -0.023459 0.259537 -1.821569\nv 0.035582 0.229000 -1.790011\nv 0.035582 0.229000 -1.790011\nv 0.012152 0.259537 -1.825077\nv -0.029211 0.259537 -1.816849\nv 0.034853 0.229000 -1.797416\nv 0.034853 0.229000 -1.797416\nv 0.005032 0.259537 -1.827237\nv -0.033931 0.259537 -1.811098\nv 0.032693 0.229000 -1.804536\nv -0.037438 0.259537 -1.804536\nv 0.029186 0.229000 -1.811098\nv -0.009777 0.229000 -1.827237\nv -0.002373 0.229000 -1.827966\nv -0.039598 0.259537 -1.797416\nv 0.034853 0.229000 -1.797416\nv -0.002373 0.229000 -1.752057\nv -0.039598 0.229000 -1.797416\nv -0.039598 0.229000 -1.797416\nv 0.035582 0.229000 -1.790011\nv -0.009777 0.229000 -1.752786\nv -0.037438 0.229000 -1.804536\nv -0.037438 0.229000 -1.804536\nv 0.034853 0.229000 -1.782607\nv -0.016897 0.229000 -1.754946\nv -0.016897 0.229000 -1.754946\nv 0.005032 0.229000 -1.827237\nv 0.005032 0.229000 -1.827237\nv -0.033931 0.229000 -1.811098\nv -0.033931 0.229000 -1.811098\nv 0.032693 0.229000 -1.775486\nv 0.018714 0.259537 -1.758453\nv -0.023459 0.229000 -1.758453\nv -0.023459 0.229000 -1.758453\nv 0.012152 0.259537 -1.754946\nv 0.005032 0.259537 -1.752786\nv -0.037438 0.229000 -1.775486\nv -0.033931 0.229000 -1.768925\nv -0.058447 0.229000 -1.752543\nv -0.064680 0.229000 -1.764203\nv 0.005032 0.259537 -1.752786\nv -0.002373 0.259537 -1.752057\nv -0.002373 0.259537 -1.722571\nv 0.010784 0.259537 -1.723867\nv -0.029211 0.229000 -1.763173\nv -0.050060 0.229000 -1.742324\nv 0.012152 0.259537 -1.754946\nv 0.023436 0.259537 -1.727704\nv -0.023459 0.229000 -1.758453\nv -0.039841 0.229000 -1.733937\nv 0.018714 0.259537 -1.758453\nv 0.035095 0.259537 -1.733937\nv -0.016897 0.229000 -1.754946\nv -0.028181 0.229000 -1.727704\nv 0.045315 0.259537 -1.742324\nv -0.015530 0.229000 -1.723867\nv 0.053702 0.259537 -1.752543\nv -0.002373 0.229000 -1.722571\nv 0.059934 0.259537 -1.764203\nv 0.010784 0.229000 -1.723867\nv 0.063772 0.259537 -1.776854\nv 0.023436 0.229000 -1.727704\nv 0.065068 0.259537 -1.790011\nv 0.035095 0.229000 -1.733937\nv 0.063772 0.259537 -1.803168\nv 0.045315 0.229000 -1.742324\nv 0.059934 0.259537 -1.815820\nv 0.053702 0.229000 -1.752543\nv 0.053702 0.259537 -1.827479\nv -0.002373 0.259537 -1.857452\nv -0.015530 0.259537 -1.856156\nv 0.059934 0.229000 -1.764203\nv 0.045315 0.259537 -1.837699\nv -0.028181 0.259537 -1.852318\nv 0.063772 0.229000 -1.776854\nv 0.035095 0.259537 -1.846086\nv -0.039840 0.259537 -1.846086\nv 0.065068 0.229000 -1.790011\nv 0.023436 0.259537 -1.852318\nv -0.050060 0.259537 -1.837699\nv -0.009777 0.259537 -1.752786\nv -0.039598 0.229000 -1.782607\nv -0.016897 0.259537 -1.754946\nv -0.040327 0.229000 -1.790011\nv -0.023459 0.259537 -1.758453\nv -0.039598 0.229000 -1.797416\nv -0.029211 0.259537 -1.763173\nv -0.037438 0.229000 -1.804536\nv -0.033931 0.259537 -1.768925\nv -0.033931 0.229000 -1.811098\nv 0.005032 0.229000 -1.827237\nv -0.037438 0.259537 -1.775486\nv -0.029211 0.229000 -1.816849\nv 0.012152 0.229000 -1.825077\nv -0.039598 0.259537 -1.782607\nv -0.023459 0.229000 -1.821569\nv 0.018714 0.229000 -1.821569\nv -0.040327 0.259537 -1.790011\nv -0.016897 0.229000 -1.825077\nv 0.024465 0.229000 -1.816849\nv -0.015530 0.259537 -1.723867\nv -0.068517 0.229000 -1.776854\nv -0.028181 0.259537 -1.727704\nv -0.069813 0.229000 -1.790011\nv -0.039841 0.259537 -1.733937\nv -0.068517 0.229000 -1.803168\nv -0.050060 0.259537 -1.742324\nv -0.064679 0.229000 -1.815820\nv -0.058447 0.259537 -1.752543\nv -0.058447 0.229000 -1.827479\nv -0.002373 0.229000 -1.857452\nv 0.010784 0.229000 -1.856156\nv -0.064680 0.259537 -1.764203\nv -0.050060 0.229000 -1.837699\nv 0.023436 0.229000 -1.852318\nv -0.068517 0.259537 -1.776854\nv -0.039840 0.229000 -1.846086\nv 0.035095 0.229000 -1.846086\nv -0.069813 0.259537 -1.790011\nv -0.028181 0.229000 -1.852318\nv 0.045315 0.229000 -1.837699\nv -0.068517 0.259537 -1.803168\nv -0.015530 0.229000 -1.856156\nv 0.053702 0.229000 -1.827479\nv -0.064679 0.259537 -1.815820\nv 0.059934 0.229000 -1.815820\nv -0.058447 0.259537 -1.827479\nv 0.010784 0.259537 -1.856156\nv 0.063772 0.229000 -1.803168\nv 0.023436 0.229000 -1.852318\nv 0.010784 0.229000 -1.856156\nv 0.010784 0.259537 -1.856156\nv 0.023436 0.259537 -1.852318\nv -0.039840 0.229000 -1.846086\nv -0.050060 0.229000 -1.837699\nv -0.051363 0.229000 -1.839287\nv -0.041144 0.229000 -1.847674\nv 0.059934 0.229000 -1.764203\nv 0.053702 0.229000 -1.752543\nv 0.059934 0.259537 -1.764203\nv 0.053702 0.259537 -1.752543\nv -0.050060 0.229000 -1.742324\nv -0.039841 0.229000 -1.733937\nv -0.039841 0.259537 -1.733937\nv -0.050060 0.259537 -1.742324\nv 0.010784 0.229000 -1.856156\nv -0.002373 0.229000 -1.857452\nv -0.002171 0.229000 -1.859496\nv 0.010986 0.229000 -1.858200\nv -0.050060 0.259537 -1.837699\nv -0.039840 0.259537 -1.846086\nv -0.028181 0.259537 -1.727704\nv -0.039841 0.259537 -1.733937\nv -0.040809 0.259537 -1.732125\nv -0.029149 0.259537 -1.725893\nv 0.059934 0.229000 -1.815820\nv 0.063772 0.229000 -1.803168\nv 0.059934 0.259537 -1.815820\nv 0.063772 0.259537 -1.803168\nv -0.002373 0.229000 -1.722571\nv 0.010784 0.229000 -1.723867\nv 0.010784 0.259537 -1.723867\nv -0.002373 0.259537 -1.722571\nv 0.061746 0.229000 -1.763235\nv 0.055514 0.229000 -1.751575\nv -0.069813 0.229000 -1.790011\nv -0.068517 0.229000 -1.803168\nv -0.069813 0.259537 -1.790011\nv -0.068517 0.259537 -1.803168\nv 0.065738 0.259537 -1.803764\nv 0.061900 0.259537 -1.816416\nv 0.023436 0.229000 -1.852318\nv 0.035095 0.229000 -1.846086\nv 0.023436 0.259537 -1.852318\nv 0.035095 0.259537 -1.846086\nv 0.045315 0.229000 -1.742324\nv 0.053702 0.229000 -1.752543\nv 0.053702 0.259537 -1.752543\nv 0.045315 0.259537 -1.742324\nv 0.010784 0.259537 -1.856156\nv 0.010986 0.259537 -1.858200\nv -0.050060 0.229000 -1.742324\nv -0.058447 0.229000 -1.752543\nv -0.050060 0.259537 -1.742324\nv -0.058447 0.259537 -1.752543\nv -0.028181 0.229000 -1.852318\nv -0.039840 0.229000 -1.846086\nv -0.039840 0.259537 -1.846086\nv -0.028181 0.259537 -1.852318\nv 0.065068 0.229000 -1.790011\nv 0.063772 0.229000 -1.803168\nv 0.063772 0.259537 -1.803168\nv 0.065068 0.259537 -1.790011\nv 0.010784 0.229000 -1.723867\nv 0.023436 0.229000 -1.727704\nv 0.024032 0.229000 -1.725739\nv 0.011381 0.229000 -1.721901\nv -0.002373 0.229000 -1.722571\nv -0.015530 0.229000 -1.723867\nv -0.002373 0.259537 -1.722571\nv -0.015530 0.259537 -1.723867\nv -0.064679 0.229000 -1.815820\nv -0.068517 0.229000 -1.803168\nv -0.068517 0.259537 -1.803168\nv -0.064679 0.259537 -1.815820\nv 0.045315 0.229000 -1.837699\nv 0.035095 0.229000 -1.846086\nv 0.035095 0.259537 -1.846086\nv 0.045315 0.259537 -1.837699\nv 0.055514 0.259537 -1.751575\nv 0.045315 0.229000 -1.742324\nv 0.035095 0.229000 -1.733937\nv 0.045315 0.259537 -1.742324\nv 0.035095 0.259537 -1.733937\nv -0.064680 0.229000 -1.764203\nv -0.058447 0.229000 -1.752543\nv -0.058447 0.259537 -1.752543\nv -0.064680 0.259537 -1.764203\nv -0.028181 0.259537 -1.852318\nv -0.015530 0.259537 -1.856156\nv -0.016126 0.259537 -1.858121\nv -0.028777 0.259537 -1.854284\nv -0.028181 0.229000 -1.852318\nv -0.015530 0.229000 -1.856156\nv -0.071857 0.229000 -1.790213\nv -0.070561 0.229000 -1.803370\nv 0.065068 0.229000 -1.790011\nv 0.063772 0.229000 -1.776854\nv 0.065068 0.259537 -1.790011\nv 0.063772 0.259537 -1.776854\nv -0.028181 0.229000 -1.727704\nv -0.015530 0.229000 -1.723867\nv -0.015530 0.259537 -1.723867\nv -0.028181 0.259537 -1.727704\nv -0.039841 0.229000 -1.733937\nv -0.028181 0.229000 -1.727704\nv -0.029149 0.229000 -1.725893\nv -0.040809 0.229000 -1.732125\nv -0.064679 0.229000 -1.815820\nv -0.058447 0.229000 -1.827479\nv -0.064679 0.259537 -1.815820\nv -0.058447 0.259537 -1.827479\nv 0.023436 0.259537 -1.727704\nv 0.010784 0.259537 -1.723867\nv 0.011381 0.259537 -1.721901\nv 0.024032 0.259537 -1.725739\nv 0.045315 0.229000 -1.837699\nv 0.053702 0.229000 -1.827479\nv 0.045315 0.259537 -1.837699\nv 0.053702 0.259537 -1.827479\nv 0.023436 0.229000 -1.727704\nv 0.035095 0.229000 -1.733937\nv 0.035095 0.259537 -1.733937\nv 0.023436 0.259537 -1.727704\nv 0.067112 0.229000 -1.789810\nv 0.065816 0.229000 -1.776653\nv -0.064680 0.229000 -1.764203\nv -0.068517 0.229000 -1.776854\nv -0.064680 0.259537 -1.764203\nv -0.068517 0.259537 -1.776854\nv 0.065738 0.229000 -1.803764\nv -0.002373 0.259537 -1.857452\nv -0.002373 0.229000 -1.857452\nv -0.015530 0.229000 -1.856156\nv -0.015530 0.259537 -1.856156\nv -0.002373 0.259537 -1.857452\nv 0.059934 0.229000 -1.764203\nv 0.063772 0.229000 -1.776854\nv 0.063772 0.259537 -1.776854\nv 0.059934 0.259537 -1.764203\nv 0.036064 0.259537 -1.847897\nv 0.024404 0.259537 -1.854130\nv -0.050060 0.229000 -1.837699\nv -0.058447 0.229000 -1.827479\nv -0.058447 0.259537 -1.827479\nv -0.050060 0.259537 -1.837699\nv 0.059934 0.229000 -1.815820\nv 0.053702 0.229000 -1.827479\nv 0.053702 0.259537 -1.827479\nv 0.059934 0.259537 -1.815820\nv -0.069813 0.229000 -1.790011\nv -0.068517 0.229000 -1.776854\nv -0.068517 0.259537 -1.776854\nv -0.069813 0.259537 -1.790011\nv 0.061746 0.259537 -1.763235\nv -0.051363 0.259537 -1.839287\nv 0.061900 0.229000 -1.816416\nv -0.071857 0.259537 -1.790213\nv 0.024404 0.229000 -1.854130\nv -0.051648 0.259537 -1.741021\nv -0.051648 0.229000 -1.741021\nv -0.002574 0.259537 -1.720527\nv -0.002574 0.229000 -1.720527\nv 0.046618 0.259537 -1.740736\nv 0.046618 0.229000 -1.740736\nv -0.028777 0.229000 -1.854284\nv 0.067112 0.259537 -1.789810\nv -0.066491 0.259537 -1.816788\nv -0.066491 0.229000 -1.816788\nv 0.046903 0.259537 -1.839002\nv 0.046903 0.229000 -1.839002\nv -0.066645 0.259537 -1.763607\nv -0.066645 0.229000 -1.763607\nv -0.002171 0.259537 -1.859496\nv -0.038503 0.234618 -1.724522\nv -0.036752 0.234618 -1.723587\nv -0.036752 0.253919 -1.723587\nv -0.038503 0.253919 -1.724522\nv 0.056069 0.234618 -1.836689\nv 0.054809 0.234618 -1.838223\nv 0.054809 0.253919 -1.838223\nv 0.056069 0.253919 -1.836689\nv 0.055290 0.229000 -1.828782\nv 0.055290 0.259537 -1.828782\nv -0.070483 0.229000 -1.776258\nv 0.071957 0.234618 -1.781693\nv 0.072152 0.234618 -1.783669\nv 0.072152 0.253919 -1.783669\nv 0.071957 0.253919 -1.781693\nv 0.065816 0.259537 -1.776653\nv -0.060259 0.229000 -1.828447\nv 0.044305 0.234618 -1.731570\nv 0.045839 0.234618 -1.732829\nv 0.045839 0.253919 -1.732829\nv 0.044305 0.253919 -1.731570\nv 0.036398 0.229000 -1.732349\nv 0.036398 0.259537 -1.732349\nv -0.016126 0.229000 -1.858121\nv -0.010691 0.234618 -1.715681\nv -0.008715 0.234618 -1.715487\nv -0.008715 0.253919 -1.715487\nv -0.010691 0.253919 -1.715681\nv -0.015731 0.229000 -1.721823\nv -0.015731 0.259537 -1.721823\nv -0.060814 0.234618 -1.743334\nv -0.059555 0.234618 -1.741799\nv -0.059555 0.253919 -1.741799\nv -0.060814 0.253919 -1.743334\nv -0.060035 0.229000 -1.751240\nv -0.060035 0.259537 -1.751240\nv -0.076703 0.234618 -1.798329\nv -0.076897 0.234618 -1.796354\nv -0.076897 0.253919 -1.796354\nv -0.076703 0.253919 -1.798329\nv -0.070561 0.259537 -1.803370\nv 0.036064 0.229000 -1.847897\nv -0.049050 0.234618 -1.848453\nv -0.050585 0.234618 -1.847193\nv -0.050585 0.253919 -1.847193\nv -0.049050 0.253919 -1.848453\nv -0.041144 0.259537 -1.847674\nv -0.074228 0.234618 -1.769251\nv -0.073652 0.234618 -1.767352\nv -0.073652 0.253919 -1.767352\nv -0.074228 0.253919 -1.769251\nv -0.070483 0.259537 -1.776258\nv 0.005946 0.234618 -1.864341\nv 0.003970 0.234618 -1.864536\nv 0.003970 0.253919 -1.864536\nv 0.005946 0.253919 -1.864341\nv -0.067861 0.234618 -1.826141\nv -0.068797 0.234618 -1.824391\nv -0.068797 0.253919 -1.824391\nv -0.067861 0.253919 -1.826141\nv 0.033757 0.234618 -1.855500\nv 0.032007 0.234618 -1.856436\nv 0.032007 0.253919 -1.856436\nv 0.033757 0.253919 -1.855500\nv -0.060259 0.259537 -1.828447\nv 0.018387 0.234618 -1.718156\nv 0.020287 0.234618 -1.718732\nv 0.020287 0.253919 -1.718732\nv 0.018387 0.253919 -1.718156\nv -0.023132 0.234618 -1.861867\nv -0.025032 0.234618 -1.861290\nv -0.025032 0.253919 -1.861290\nv -0.023132 0.253919 -1.861867\nv 0.069483 0.234618 -1.810771\nv 0.068906 0.234618 -1.812671\nv 0.068906 0.253919 -1.812671\nv 0.069483 0.253919 -1.810771\nv 0.064052 0.234618 -1.755632\nv 0.063116 0.234618 -1.753881\nv 0.061128 0.231809 -1.751759\nv 0.064712 0.231809 -1.758464\nv 0.058346 0.229753 -1.750915\nv 0.063868 0.229753 -1.761247\nv 0.064052 0.253919 -1.755632\nv 0.064712 0.256728 -1.758464\nv 0.063868 0.258784 -1.761247\nv 0.063116 0.253919 -1.753881\nv 0.061128 0.256728 -1.751759\nv 0.058346 0.258784 -1.750915\nv -0.046401 0.231809 -1.849653\nv -0.052278 0.231809 -1.844829\nv -0.043507 0.229753 -1.849367\nv -0.052563 0.229753 -1.841936\nv -0.052278 0.256728 -1.844829\nv -0.052563 0.258784 -1.841936\nv -0.046401 0.256728 -1.849653\nv -0.043507 0.258784 -1.849367\nv 0.069578 0.231809 -1.807865\nv 0.067371 0.231809 -1.815140\nv 0.068207 0.229753 -1.805300\nv 0.064806 0.229753 -1.816511\nv 0.067371 0.256728 -1.815140\nv 0.064806 0.258784 -1.816511\nv 0.069578 0.256728 -1.807865\nv 0.068207 0.258784 -1.805300\nv -0.075678 0.231809 -1.801051\nv -0.076424 0.231809 -1.793485\nv -0.073431 0.229753 -1.802896\nv -0.074579 0.229753 -1.791237\nv -0.076424 0.256728 -1.793485\nv -0.074579 0.258784 -1.791237\nv -0.075678 0.256728 -1.801051\nv -0.073431 0.258784 -1.802896\nv 0.035880 0.231809 -1.853512\nv 0.029175 0.231809 -1.857096\nv 0.036724 0.229753 -1.850729\nv 0.026392 0.229753 -1.856252\nv 0.029175 0.256728 -1.857096\nv 0.026392 0.258784 -1.856252\nv 0.035880 0.256728 -1.853512\nv 0.036724 0.258784 -1.850729\nv -0.062014 0.231809 -1.745983\nv -0.057191 0.231809 -1.740106\nv -0.061729 0.229753 -1.748876\nv -0.054297 0.229753 -1.739820\nv -0.057191 0.256728 -1.740106\nv -0.054297 0.258784 -1.739820\nv -0.062014 0.256728 -1.745983\nv -0.061729 0.258784 -1.748876\nv -0.013413 0.231809 -1.716705\nv -0.005846 0.231809 -1.715960\nv -0.015257 0.229753 -1.718953\nv -0.003598 0.229753 -1.717805\nv -0.005846 0.256728 -1.715960\nv -0.003598 0.258784 -1.717805\nv -0.013413 0.256728 -1.716705\nv -0.015257 0.258784 -1.718953\nv 0.041656 0.231809 -1.730370\nv 0.047533 0.231809 -1.735193\nv 0.038762 0.229753 -1.730655\nv 0.047818 0.229753 -1.738087\nv 0.047533 0.256728 -1.735193\nv 0.047818 0.258784 -1.738087\nv 0.041656 0.256728 -1.730370\nv 0.038762 0.258784 -1.730655\nv -0.020226 0.231809 -1.861962\nv -0.027501 0.231809 -1.859755\nv -0.017661 0.229753 -1.860591\nv -0.028872 0.229753 -1.857190\nv -0.027501 0.256728 -1.859755\nv -0.028872 0.258784 -1.857190\nv -0.020226 0.256728 -1.861962\nv -0.017661 0.258784 -1.860591\nv 0.070933 0.231809 -1.778971\nv 0.071678 0.231809 -1.786538\nv 0.068685 0.229753 -1.777127\nv 0.069834 0.229753 -1.788786\nv 0.071678 0.256728 -1.786538\nv 0.069834 0.258784 -1.788786\nv 0.070933 0.256728 -1.778971\nv 0.068685 0.258784 -1.777127\nv -0.065874 0.231809 -1.828264\nv -0.069458 0.231809 -1.821558\nv -0.063091 0.229753 -1.829108\nv -0.068613 0.229753 -1.818776\nv -0.069458 0.256728 -1.821558\nv -0.068613 0.258784 -1.818776\nv -0.065874 0.256728 -1.828264\nv -0.063091 0.258784 -1.829108\nv 0.057269 0.231809 -1.834040\nv 0.052445 0.231809 -1.839917\nv 0.056984 0.229753 -1.831146\nv 0.049551 0.229753 -1.840202\nv 0.052445 0.256728 -1.839917\nv 0.049551 0.258784 -1.840202\nv 0.057269 0.256728 -1.834040\nv 0.056984 0.258784 -1.831146\nv -0.074323 0.231809 -1.772158\nv -0.072116 0.231809 -1.764882\nv -0.072952 0.229753 -1.774722\nv -0.069552 0.229753 -1.763512\nv -0.072116 0.256728 -1.764882\nv -0.069552 0.258784 -1.763512\nv -0.074323 0.256728 -1.772158\nv -0.072952 0.258784 -1.774722\nv 0.008667 0.231809 -1.863317\nv 0.001101 0.231809 -1.864062\nv 0.010512 0.229753 -1.861069\nv -0.001147 0.229753 -1.862217\nv 0.001101 0.256728 -1.864062\nv -0.001147 0.258784 -1.862217\nv 0.008667 0.256728 -1.863317\nv 0.010512 0.258784 -1.861069\nv -0.040625 0.231809 -1.726510\nv -0.033920 0.231809 -1.722926\nv -0.041469 0.229753 -1.729293\nv -0.031137 0.229753 -1.723770\nv -0.033920 0.256728 -1.722926\nv -0.031137 0.258784 -1.723770\nv -0.040625 0.256728 -1.726510\nv -0.041469 0.258784 -1.729293\nv 0.015481 0.231809 -1.718061\nv 0.022756 0.231809 -1.720268\nv 0.012916 0.229753 -1.719432\nv 0.024127 0.229753 -1.722832\nv 0.022756 0.256728 -1.720268\nv 0.024127 0.258784 -1.722832\nv 0.015481 0.256728 -1.718061\nv 0.012916 0.258784 -1.719432\nv -0.198545 -0.003836 0.365644\nv -0.198545 -0.005421 0.365644\nv -0.198545 0.005495 0.365644\nv -0.198545 0.003910 0.365644\nv -0.194900 -0.005421 0.365644\nv -0.194900 -0.005421 0.365644\nv -0.194900 0.005495 0.365644\nv -0.194900 0.011655 0.365644\nv -0.198545 0.011655 0.365644\nv -0.194900 0.005495 0.365644\nv -0.194900 -0.005421 0.471470\nv -0.198545 -0.005421 0.471470\nv -0.194900 -0.011581 0.365644\nv -0.198545 -0.011581 0.365644\nv -0.196723 0.000037 0.335333\nv -0.194900 0.005495 0.471470\nv -0.198545 0.005495 0.471470\nv -0.194900 0.004953 0.463372\nv -0.194900 0.004858 0.462406\nv -0.194900 0.004576 0.461476\nv -0.194900 0.004119 0.460620\nv -0.194900 0.003503 0.459869\nv -0.194900 0.002752 0.459253\nv -0.194900 0.001896 0.458796\nv -0.194900 0.000966 0.458514\nv -0.194900 -0.000000 0.458419\nv -0.194900 -0.000966 0.458514\nv -0.194900 -0.001896 0.458796\nv -0.194900 -0.002752 0.459253\nv -0.194900 -0.003503 0.459869\nv -0.194900 -0.004119 0.460620\nv -0.194900 -0.004576 0.461476\nv -0.194900 -0.004858 0.462406\nv -0.194900 -0.004953 0.463372\nv -0.179992 0.000000 -1.483357\nv -0.176534 -0.035115 -1.483357\nv -0.176534 -0.035115 -1.063492\nv -0.179992 0.000000 -1.063492\nv -0.166291 -0.068880 -1.483357\nv -0.166291 -0.068880 -1.063492\nv -0.149658 -0.099998 -1.483357\nv -0.149658 -0.099998 -1.063492\nv -0.127274 -0.127274 -1.483357\nv -0.127274 -0.127274 -1.063492\nv -0.099998 -0.149658 -1.483357\nv -0.099998 -0.149658 -1.063492\nv -0.068880 -0.166291 -1.483357\nv -0.068880 -0.166291 -1.063492\nv -0.035115 -0.176534 -1.483357\nv -0.035115 -0.176534 -1.063492\nv 0.000000 -0.179992 -1.483357\nv 0.000000 -0.179992 -1.063492\nv 0.035115 -0.176534 -1.483357\nv 0.035115 -0.176534 -1.063492\nv 0.068880 -0.166291 -1.483357\nv 0.068880 -0.166291 -1.063492\nv 0.099998 -0.149658 -1.483357\nv 0.099998 -0.149658 -1.063492\nv 0.127274 -0.127274 -1.483357\nv 0.127274 -0.127274 -1.063492\nv 0.149658 -0.099998 -1.483357\nv 0.149658 -0.099998 -1.063492\nv 0.166291 -0.068880 -1.483357\nv 0.166291 -0.068880 -1.063492\nv 0.176534 -0.035115 -1.483357\nv 0.176534 -0.035115 -1.063492\nv 0.179992 0.000000 -1.483357\nv 0.179992 0.000000 -1.063492\nv 0.176534 0.035115 -1.483357\nv 0.176534 0.035115 -1.063492\nv 0.166291 0.068880 -1.483357\nv 0.166291 0.068880 -1.063492\nv 0.149658 0.099998 -1.483357\nv 0.149658 0.099998 -1.063492\nv 0.127274 0.127274 -1.483357\nv 0.127274 0.127274 -1.063492\nv 0.099998 0.149658 -1.483357\nv 0.099998 0.149658 -1.063492\nv 0.068880 0.166291 -1.483357\nv 0.068880 0.166291 -1.063492\nv 0.035115 0.176534 -1.483357\nv 0.035115 0.176534 -1.275900\nv 0.035582 0.176392 -1.271153\nv 0.035115 0.176534 -1.266406\nv 0.035115 0.176534 -1.063492\nv 0.000000 0.179992 -1.483357\nv 0.000000 0.179992 -1.308874\nv 0.005032 0.179497 -1.308379\nv 0.012152 0.178795 -1.306219\nv 0.018714 0.178149 -1.302711\nv 0.024465 0.177583 -1.297991\nv 0.029186 0.177118 -1.292240\nv 0.032693 0.176772 -1.285678\nv 0.034853 0.176559 -1.278558\nv -0.035115 0.176534 -1.483357\nv -0.035115 0.176534 -1.290025\nv -0.033931 0.176650 -1.292240\nv -0.029211 0.177115 -1.297991\nv -0.023459 0.177682 -1.302711\nv -0.016897 0.178328 -1.306219\nv -0.009777 0.179029 -1.308379\nv -0.002373 0.179759 -1.309108\nv -0.068880 0.166291 -1.483357\nv -0.068880 0.166291 -1.063492\nv -0.035115 0.176534 -1.063492\nv -0.035115 0.176534 -1.252282\nv -0.037438 0.175829 -1.256629\nv -0.039598 0.175174 -1.263749\nv -0.040327 0.174952 -1.271153\nv -0.039598 0.175174 -1.278558\nv -0.037438 0.175829 -1.285678\nv -0.099998 0.149658 -1.483357\nv -0.099998 0.149658 -1.063492\nv -0.127274 0.127274 -1.483357\nv -0.127274 0.127274 -1.063492\nv -0.149658 0.099998 -1.483357\nv -0.149658 0.099998 -1.063492\nv -0.166291 0.068880 -1.483357\nv -0.166291 0.068880 -1.063492\nv 0.000000 -0.033325 -1.063491\nv -0.006501 -0.032685 -1.063491\nv -0.012753 -0.030789 -1.063491\nv -0.018514 -0.027709 -1.063491\nv -0.023564 -0.023565 -1.063491\nv -0.027709 -0.018515 -1.063491\nv -0.030788 -0.012753 -1.063491\nv -0.032685 -0.006501 -1.063491\nv -0.033325 0.000000 -1.063492\nv -0.032685 0.006501 -1.063491\nv -0.030789 0.012753 -1.063491\nv -0.027709 0.018514 -1.063491\nv -0.023565 0.023564 -1.063491\nv -0.018515 0.027709 -1.063492\nv -0.012753 0.030789 -1.063492\nv -0.006501 0.032685 -1.063492\nv 0.000000 0.033325 -1.063492\nv 0.000000 0.179992 -1.063492\nv -0.176534 0.035114 -1.063492\nv -0.176534 0.035114 -1.483357\nv 0.000000 0.033325 -1.483356\nv -0.006502 0.032685 -1.483357\nv -0.012753 0.030788 -1.483357\nv -0.018514 0.027709 -1.483357\nv -0.023564 0.023564 -1.483356\nv -0.027709 0.018514 -1.483356\nv -0.030788 0.012753 -1.483356\nv -0.032685 0.006501 -1.483356\nv -0.033325 0.000000 -1.483356\nv -0.032685 -0.006502 -1.483356\nv -0.030788 -0.012753 -1.483356\nv -0.027709 -0.018515 -1.483357\nv -0.023564 -0.023565 -1.483357\nv -0.018514 -0.027709 -1.483357\nv -0.012753 -0.030789 -1.483356\nv -0.006501 -0.032685 -1.483356\nv 0.000000 -0.033325 -1.483356\nv -0.179992 0.000000 -2.002215\nv -0.176534 -0.035115 -2.002215\nv -0.176534 -0.035115 -1.582350\nv -0.179992 0.000000 -1.582350\nv -0.166291 -0.068880 -2.002215\nv -0.166291 -0.068880 -1.582350\nv -0.149658 -0.099998 -2.002215\nv -0.149658 -0.099998 -1.582350\nv -0.127274 -0.127274 -2.002215\nv -0.127274 -0.127274 -1.582350\nv -0.099998 -0.149658 -2.002215\nv -0.099998 -0.149658 -1.582350\nv -0.068880 -0.166291 -2.002215\nv -0.068880 -0.166291 -1.582350\nv -0.035115 -0.176534 -2.002215\nv -0.035115 -0.176534 -1.582350\nv 0.000000 -0.179992 -2.002215\nv 0.000000 -0.179992 -1.582350\nv 0.035115 -0.176534 -2.002215\nv 0.035115 -0.176534 -1.582350\nv 0.068880 -0.166291 -2.002215\nv 0.068880 -0.166291 -1.582350\nv 0.099998 -0.149658 -2.002215\nv 0.099998 -0.149658 -1.582350\nv 0.127274 -0.127274 -2.002215\nv 0.127274 -0.127274 -1.582350\nv 0.149658 -0.099998 -2.002215\nv 0.149658 -0.099998 -1.582350\nv 0.166291 -0.068880 -2.002215\nv 0.166291 -0.068880 -1.582350\nv 0.176534 -0.035115 -2.002215\nv 0.176534 -0.035115 -1.582350\nv 0.179992 0.000000 -2.002215\nv 0.179992 0.000000 -1.582350\nv 0.176534 0.035115 -2.002215\nv 0.176534 0.035115 -1.582350\nv 0.166291 0.068880 -2.002215\nv 0.166291 0.068880 -1.582350\nv 0.149658 0.099998 -2.002215\nv 0.149658 0.099998 -1.582350\nv 0.127274 0.127274 -2.002215\nv 0.127274 0.127274 -1.582350\nv 0.099998 0.149658 -2.002215\nv 0.099998 0.149658 -1.582350\nv 0.068880 0.166291 -2.002215\nv 0.068880 0.166291 -1.582350\nv 0.035115 0.176534 -2.002215\nv 0.035115 0.176534 -1.794758\nv 0.035582 0.176392 -1.790011\nv 0.035115 0.176534 -1.785264\nv 0.035115 0.176534 -1.582350\nv 0.000000 0.179992 -2.002215\nv 0.000000 0.179992 -1.827732\nv 0.005032 0.179497 -1.827237\nv 0.012152 0.178795 -1.825077\nv 0.018714 0.178149 -1.821569\nv 0.024465 0.177583 -1.816849\nv 0.029186 0.177118 -1.811098\nv 0.032693 0.176772 -1.804536\nv 0.034853 0.176559 -1.797416\nv -0.035115 0.176534 -2.002215\nv -0.035115 0.176534 -1.808882\nv -0.033931 0.176650 -1.811098\nv -0.029211 0.177115 -1.816849\nv -0.023459 0.177682 -1.821570\nv -0.016897 0.178328 -1.825077\nv -0.009777 0.179029 -1.827237\nv -0.002373 0.179759 -1.827966\nv -0.068880 0.166291 -2.002215\nv -0.068880 0.166291 -1.582350\nv -0.035115 0.176534 -1.582350\nv -0.035115 0.176534 -1.771140\nv -0.037438 0.175829 -1.775486\nv -0.039598 0.175174 -1.782606\nv -0.040327 0.174952 -1.790011\nv -0.039598 0.175174 -1.797416\nv -0.037438 0.175829 -1.804536\nv -0.099998 0.149658 -2.002215\nv -0.099998 0.149658 -1.582350\nv -0.127274 0.127274 -2.002215\nv -0.127274 0.127274 -1.582350\nv -0.149658 0.099998 -2.002215\nv -0.149658 0.099998 -1.582350\nv -0.166291 0.068880 -2.002215\nv -0.166291 0.068880 -1.582350\nv 0.000000 -0.033325 -1.582350\nv -0.006501 -0.032685 -1.582350\nv -0.012753 -0.030789 -1.582350\nv -0.018514 -0.027709 -1.582350\nv -0.023564 -0.023565 -1.582350\nv -0.027709 -0.018515 -1.582350\nv -0.030788 -0.012753 -1.582350\nv -0.032685 -0.006502 -1.582350\nv -0.033325 0.000000 -1.582350\nv -0.032685 0.006501 -1.582350\nv -0.030788 0.012753 -1.582350\nv -0.027709 0.018514 -1.582350\nv -0.023564 0.023564 -1.582350\nv -0.018514 0.027709 -1.582351\nv -0.012753 0.030788 -1.582351\nv -0.006501 0.032685 -1.582351\nv 0.000000 0.033325 -1.582351\nv 0.000000 0.179992 -1.582350\nv -0.176534 0.035114 -1.582350\nv -0.176534 0.035114 -2.002215\nv 0.000000 0.033325 -2.002214\nv -0.006502 0.032685 -2.002215\nv -0.012753 0.030788 -2.002214\nv -0.018514 0.027709 -2.002214\nv -0.023564 0.023564 -2.002215\nv -0.027709 0.018514 -2.002215\nv -0.030788 0.012753 -2.002215\nv -0.032685 0.006501 -2.002215\nv -0.033325 0.000000 -2.002214\nv -0.032685 -0.006502 -2.002215\nv -0.030788 -0.012753 -2.002215\nv -0.027709 -0.018515 -2.002214\nv -0.023564 -0.023565 -2.002214\nv -0.018514 -0.027709 -2.002214\nv -0.012753 -0.030789 -2.002215\nv -0.006501 -0.032685 -2.002215\nv 0.000000 -0.033325 -2.002215\nv -0.045151 0.000000 -3.050172\nv -0.044323 -0.008594 -3.050172\nv -0.044323 -0.008594 -3.008600\nv -0.045151 0.000000 -3.008600\nv -0.041871 -0.016859 -3.050172\nv -0.041871 -0.016859 -3.008600\nv -0.037890 -0.024475 -3.050172\nv -0.037890 -0.024475 -3.008600\nv -0.032531 -0.031151 -3.050172\nv -0.032531 -0.031151 -3.008600\nv -0.026002 -0.036630 -3.050172\nv -0.026002 -0.036629 -3.008600\nv -0.018552 -0.040701 -3.050172\nv -0.018552 -0.040701 -3.008600\nv -0.010469 -0.043207 -3.050172\nv -0.010469 -0.043207 -3.008600\nv -0.002063 -0.044054 -3.050172\nv -0.002063 -0.044054 -3.008600\nv 0.006343 -0.043207 -3.050172\nv 0.006343 -0.043207 -3.008600\nv 0.014426 -0.040701 -3.050172\nv 0.014426 -0.040701 -3.008600\nv 0.021875 -0.036630 -3.050172\nv 0.021875 -0.036629 -3.008600\nv 0.028404 -0.031151 -3.050172\nv 0.028404 -0.031151 -3.008600\nv 0.033763 -0.024475 -3.050172\nv 0.033763 -0.024475 -3.008600\nv 0.037745 -0.016859 -3.050172\nv 0.037745 -0.016859 -3.008600\nv 0.040197 -0.008594 -3.050172\nv 0.040197 -0.008594 -3.008600\nv 0.041025 0.000000 -3.050172\nv 0.041025 0.000000 -3.008600\nv 0.040197 0.008595 -3.050172\nv 0.040197 0.008595 -3.008600\nv 0.037745 0.016859 -3.050172\nv 0.037745 0.016859 -3.008600\nv 0.033763 0.024475 -3.050172\nv 0.033763 0.024475 -3.008600\nv 0.028404 0.031151 -3.050172\nv 0.028404 0.031151 -3.008600\nv 0.021875 0.036630 -3.050172\nv 0.021875 0.036630 -3.008600\nv 0.014426 0.040701 -3.050172\nv 0.014426 0.040701 -3.008600\nv 0.006343 0.043207 -3.050172\nv 0.006343 0.043207 -3.008600\nv -0.002063 0.044054 -3.050172\nv -0.002063 0.044054 -3.008600\nv -0.010469 0.043207 -3.050172\nv -0.010469 0.043207 -3.008600\nv -0.018552 0.040700 -3.050172\nv -0.018552 0.040700 -3.008600\nv -0.026002 0.036629 -3.050172\nv -0.026002 0.036629 -3.008600\nv -0.032531 0.031151 -3.050172\nv -0.032531 0.031151 -3.008600\nv -0.037890 0.024475 -3.050172\nv -0.037890 0.024475 -3.008600\nv -0.041871 0.016859 -3.050172\nv -0.041871 0.016859 -3.008600\nv 0.000000 -0.033325 -3.008601\nv -0.006501 -0.032685 -3.008601\nv -0.012753 -0.030789 -3.008601\nv -0.018514 -0.027709 -3.008600\nv -0.023564 -0.023565 -3.008600\nv -0.027709 -0.018515 -3.008600\nv -0.030788 -0.012753 -3.008601\nv -0.032685 -0.006502 -3.008601\nv -0.033325 0.000000 -3.008600\nv -0.032685 0.006501 -3.008600\nv -0.030788 0.012753 -3.008600\nv -0.027709 0.018514 -3.008600\nv -0.023564 0.023564 -3.008600\nv -0.018514 0.027709 -3.008600\nv -0.012753 0.030788 -3.008600\nv -0.006501 0.032685 -3.008600\nv 0.000000 0.033325 -3.008600\nv -0.044323 0.008594 -3.008600\nv -0.044323 0.008594 -3.050172\nv -0.033326 -0.000000 3.036753\nv -0.033325 -0.000000 0.468325\nv -0.033230 -0.000966 0.468230\nv -0.033139 -0.001896 0.467948\nv -0.033054 -0.002752 0.467491\nv -0.032980 -0.003503 0.466875\nv -0.032920 -0.004119 0.466124\nv -0.032875 -0.004576 0.465268\nv -0.032847 -0.004858 0.464338\nv -0.032837 -0.004953 0.463372\nv -0.032847 -0.004858 0.462406\nv -0.032875 -0.004576 0.461476\nv -0.032920 -0.004119 0.460620\nv -0.032980 -0.003503 0.459869\nv -0.033054 -0.002752 0.459253\nv -0.033139 -0.001896 0.458796\nv -0.033230 -0.000966 0.458514\nv -0.033325 -0.000000 0.458419\nv -0.032685 -0.006501 3.036753\nv -0.030789 -0.012753 3.036753\nv -0.027709 -0.018514 3.036753\nv -0.023565 -0.023564 3.036753\nv -0.018515 -0.027709 3.036753\nv -0.012753 -0.030788 3.036753\nv -0.006502 -0.032685 3.036753\nv 0.000000 -0.033325 3.036753\nv 0.006502 -0.032685 -1.063491\nv 0.006501 -0.032685 3.036753\nv 0.012753 -0.030789 -1.063492\nv 0.012753 -0.030788 3.036753\nv 0.018515 -0.027709 -1.063492\nv 0.018514 -0.027709 3.036753\nv 0.023565 -0.023565 -1.063492\nv 0.023564 -0.023564 3.036753\nv 0.027709 -0.018515 -1.063492\nv 0.027709 -0.018514 3.036753\nv 0.030789 -0.012753 -1.063492\nv 0.030788 -0.012753 3.036753\nv 0.032685 -0.006501 -1.063491\nv 0.032685 -0.006501 3.036753\nv 0.033325 0.000000 -1.063492\nv 0.033325 -0.000000 3.036753\nv 0.032685 0.006501 -1.063492\nv 0.032685 0.006502 3.036753\nv 0.030789 0.012753 -1.063492\nv 0.030788 0.012753 3.036753\nv 0.027709 0.018515 -1.063492\nv 0.027709 0.018515 3.036753\nv 0.023565 0.023565 -1.063492\nv 0.023564 0.023565 3.036753\nv 0.018515 0.027709 -1.063492\nv 0.018514 0.027709 3.036753\nv 0.012753 0.030789 -1.063492\nv 0.012753 0.030789 3.036753\nv 0.006501 0.032685 -1.063492\nv 0.006501 0.032685 3.036753\nv 0.000000 0.033325 3.036753\nv -0.006502 0.032685 3.036753\nv -0.012753 0.030789 3.036753\nv -0.018515 0.027709 3.036753\nv -0.023565 0.023565 3.036753\nv -0.027709 0.018515 3.036753\nv -0.030789 0.012753 3.036753\nv -0.032685 0.006502 3.036753\nv -0.033230 0.000966 0.458514\nv -0.033139 0.001896 0.458796\nv -0.033054 0.002752 0.459253\nv -0.032980 0.003503 0.459869\nv -0.032920 0.004119 0.460620\nv -0.032875 0.004576 0.461476\nv -0.032847 0.004858 0.462406\nv -0.032837 0.004953 0.463372\nv -0.032847 0.004858 0.464338\nv -0.032875 0.004576 0.465267\nv -0.032920 0.004119 0.466124\nv -0.032980 0.003503 0.466875\nv -0.033054 0.002752 0.467491\nv -0.033139 0.001896 0.467948\nv -0.033230 0.000966 0.468230\nv 0.006502 0.032685 -3.008600\nv 0.012753 0.030788 -3.008599\nv 0.018515 0.027709 -3.008599\nv 0.023565 0.023564 -3.008599\nv 0.027709 0.018514 -3.008599\nv 0.030789 0.012753 -3.008599\nv 0.032685 0.006501 -3.008600\nv 0.033326 0.000000 -3.008600\nv 0.032685 -0.006502 -3.008601\nv 0.030789 -0.012753 -3.008600\nv 0.027709 -0.018515 -3.008600\nv 0.023565 -0.023565 -3.008600\nv 0.018515 -0.027709 -3.008600\nv 0.012753 -0.030789 -3.008600\nv 0.006502 -0.032685 -3.008601\nv 0.033325 0.000000 -2.002214\nv 0.032685 -0.006502 -2.002214\nv 0.032685 -0.006502 -2.100779\nv 0.033325 0.000000 -2.100779\nv 0.006501 -0.032685 -2.002215\nv 0.012753 -0.030789 -2.002214\nv 0.018515 -0.027709 -2.002214\nv 0.023565 -0.023565 -2.002214\nv 0.027709 -0.018515 -2.002214\nv 0.030789 -0.012753 -2.002214\nv 0.032685 0.006501 -2.002214\nv 0.030789 0.012753 -2.002215\nv 0.027709 0.018514 -2.002215\nv 0.023565 0.023564 -2.002215\nv 0.018515 0.027709 -2.002215\nv 0.012753 0.030789 -2.002215\nv 0.006502 0.032685 -2.002214\nv 0.032685 0.006501 -2.100779\nv 0.030789 0.012753 -2.100779\nv 0.027709 0.018514 -2.100779\nv 0.006502 0.032685 -2.100779\nv 0.023565 0.023564 -2.100779\nv 0.018515 0.027709 -2.100779\nv 0.012753 0.030788 -2.100779\nv 0.006501 -0.032685 -2.100779\nv 0.030789 -0.012753 -2.100779\nv 0.012753 -0.030789 -2.100779\nv 0.006502 0.032685 -1.582351\nv 0.012753 0.030789 -1.582350\nv 0.018515 0.027709 -1.582350\nv 0.023565 0.023565 -1.582350\nv 0.027709 0.018515 -1.582350\nv 0.030789 0.012753 -1.582350\nv 0.032685 0.006501 -1.582351\nv 0.033325 0.000000 -1.582350\nv 0.032685 -0.006502 -1.582350\nv 0.030789 -0.012753 -1.582350\nv 0.027709 -0.018515 -1.582350\nv 0.023565 -0.023565 -1.582350\nv 0.018515 -0.027709 -1.582350\nv 0.012753 -0.030789 -1.582350\nv 0.006502 -0.032685 -1.582350\nv 0.018515 -0.027709 -2.100779\nv 0.023565 -0.023565 -2.100779\nv 0.027709 -0.018515 -2.100779\nv 0.006501 -0.032685 -1.483357\nv 0.012753 -0.030789 -1.483356\nv 0.018515 -0.027709 -1.483356\nv 0.023565 -0.023565 -1.483356\nv 0.027709 -0.018515 -1.483356\nv 0.030789 -0.012753 -1.483356\nv 0.032685 -0.006502 -1.483356\nv 0.033325 0.000000 -1.483356\nv 0.032685 0.006501 -1.483356\nv 0.030789 0.012753 -1.483356\nv 0.027709 0.018515 -1.483356\nv 0.023565 0.023565 -1.483356\nv 0.018515 0.027709 -1.483356\nv 0.012753 0.030789 -1.483356\nv 0.006502 0.032685 -1.483356\nv -0.194900 0.003503 0.466875\nv -0.194900 0.002752 0.467491\nv -0.194900 0.001896 0.467948\nv -0.194900 -0.004576 0.465268\nv -0.194900 -0.004858 0.464338\nv -0.194900 0.000966 0.468230\nv -0.194900 -0.003503 0.466875\nv -0.194900 -0.004119 0.466124\nv -0.194900 -0.000000 0.468325\nv -0.194900 -0.001896 0.467948\nv -0.194900 -0.002752 0.467491\nv -0.194900 -0.000966 0.468230\nv -0.194900 0.004858 0.464338\nv -0.194900 0.004119 0.466124\nv -0.194900 0.004576 0.465267\nv 0.034853 0.176559 -1.782607\nv 0.024465 0.177583 -1.763173\nv 0.029186 0.177118 -1.768925\nv 0.032693 0.176772 -1.775486\nv -0.009777 0.179029 -1.752786\nv -0.002373 0.179759 -1.752057\nv 0.000000 0.179992 -1.752290\nv 0.005032 0.179497 -1.752786\nv -0.023459 0.177682 -1.758453\nv -0.016897 0.178328 -1.754946\nv 0.018714 0.178149 -1.758453\nv 0.012152 0.178795 -1.754946\nv -0.029211 0.177115 -1.763173\nv -0.033931 0.176650 -1.768925\nv 0.034853 0.176559 -1.263749\nv 0.024465 0.177583 -1.244315\nv 0.029186 0.177118 -1.250067\nv 0.032693 0.176772 -1.256629\nv 0.018714 0.178149 -1.239595\nv 0.012152 0.178795 -1.236088\nv 0.005032 0.179497 -1.233928\nv 0.000000 0.179992 -1.233432\nv -0.009777 0.179029 -1.233928\nv -0.002373 0.179759 -1.233199\nv -0.023459 0.177682 -1.239595\nv -0.016897 0.178328 -1.236088\nv -0.029211 0.177115 -1.244315\nv -0.033931 0.176650 -1.250067\nv 0.027709 0.018514 -2.520644\nv 0.030789 0.012753 -2.520644\nv 0.012753 -0.030789 -2.520644\nv 0.006501 -0.032685 -2.520644\nv 0.018515 -0.027709 -2.520644\nv 0.023565 -0.023565 -2.520644\nv 0.027709 -0.018515 -2.520644\nv 0.030789 -0.012753 -2.520644\nv 0.032685 -0.006502 -2.520644\nv 0.033326 0.000000 -2.520644\nv 0.032685 0.006501 -2.520644\nv 0.023565 0.023564 -2.520644\nv 0.018515 0.027709 -2.520644\nv 0.012753 0.030788 -2.520644\nv 0.006502 0.032685 -2.520644\nv 0.034853 0.176559 -2.301036\nv 0.024465 0.177583 -2.281602\nv 0.029186 0.177118 -2.287354\nv 0.032693 0.176772 -2.293915\nv 0.000000 0.179992 -2.270719\nv -0.002373 0.179758 -2.270485\nv -0.009777 0.179029 -2.271215\nv -0.016897 0.178328 -2.273375\nv -0.023459 0.177682 -2.276882\nv -0.029211 0.177115 -2.281602\nv -0.033931 0.176650 -2.287354\nv 0.005032 0.179497 -2.271215\nv 0.018714 0.178149 -2.276882\nv 0.012152 0.178795 -2.273375\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.979660 0.708093\nvt 0.979277 0.780035\nvt 0.978014 0.750236\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.659528 0.932934\nvt 0.660140 0.963411\nvt 0.659870 0.972453\nvt 0.662434 0.882064\nvt 0.661713 0.862977\nvt 0.662434 0.871322\nvt 0.659810 0.920997\nvt 0.659680 0.927845\nvt 0.662470 0.860993\nvt 0.661776 0.844624\nvt 0.660551 0.936418\nvt 0.660370 0.951244\nvt 0.662540 0.851473\nvt 0.661901 0.827709\nvt 0.659911 0.912653\nvt 0.660675 0.919503\nvt 0.662081 0.812883\nvt 0.662642 0.843129\nvt 0.659981 0.903134\nvt 0.660739 0.901149\nvt 0.662311 0.800715\nvt 0.662771 0.836282\nvt 0.660017 0.882063\nvt 0.660017 0.892805\nvt 0.662582 0.791674\nvt 0.662923 0.831193\nvt 0.660675 0.862975\nvt 0.660739 0.882062\nvt 0.663092 0.828060\nvt 0.662882 0.786106\nvt 0.659912 0.860992\nvt 0.659982 0.871321\nvt 0.663201 0.784226\nvt 0.663272 0.827002\nvt 0.659810 0.851472\nvt 0.660551 0.844622\nvt 0.663455 0.828059\nvt 0.663526 0.786106\nvt 0.660141 0.812881\nvt 0.660370 0.827707\nvt 0.663845 0.791673\nvt 0.663634 0.831193\nvt 0.659681 0.843128\nvt 0.659870 0.800714\nvt 0.663803 0.836281\nvt 0.664145 0.800714\nvt 0.664292 0.882063\nvt 0.665013 0.901149\nvt 0.664292 0.892805\nvt 0.659529 0.836281\nvt 0.659570 0.791673\nvt 0.664415 0.812881\nvt 0.663955 0.843128\nvt 0.664256 0.903134\nvt 0.664950 0.919503\nvt 0.659180 0.828060\nvt 0.659360 0.831193\nvt 0.664084 0.851472\nvt 0.664645 0.827707\nvt 0.664825 0.936418\nvt 0.664186 0.912653\nvt 0.658926 0.784226\nvt 0.659251 0.786106\nvt 0.664186 0.860992\nvt 0.664825 0.844622\nvt 0.664084 0.920997\nvt 0.664645 0.951244\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.661776 0.901152\nvt 0.661713 0.882065\nvt 0.659570 0.978020\nvt 0.659359 0.936067\nvt 0.662540 0.903135\nvt 0.662470 0.892806\nvt 0.659251 0.979901\nvt 0.659180 0.937125\nvt 0.662642 0.912654\nvt 0.661901 0.919505\nvt 0.658997 0.936067\nvt 0.658926 0.978021\nvt 0.662771 0.920998\nvt 0.662081 0.936420\nvt 0.658607 0.972454\nvt 0.658818 0.932934\nvt 0.662581 0.963413\nvt 0.662311 0.951245\nvt 0.658649 0.927846\nvt 0.658307 0.963413\nvt 0.658160 0.882064\nvt 0.657438 0.862977\nvt 0.658160 0.871322\nvt 0.663092 0.932934\nvt 0.662923 0.927846\nvt 0.658496 0.920998\nvt 0.658036 0.951245\nvt 0.658196 0.860993\nvt 0.657502 0.844624\nvt 0.663200 0.978021\nvt 0.662882 0.972454\nvt 0.657807 0.936420\nvt 0.658367 0.912654\nvt 0.657626 0.827709\nvt 0.658266 0.851473\nvt 0.663272 0.936067\nvt 0.663526 0.979900\nvt 0.658266 0.903135\nvt 0.657626 0.919505\nvt 0.657807 0.812883\nvt 0.658367 0.843129\nvt 0.663634 0.936067\nvt 0.663455 0.937125\nvt 0.657502 0.901151\nvt 0.658195 0.892806\nvt 0.658497 0.836282\nvt 0.658037 0.800715\nvt 0.664145 0.972453\nvt 0.663844 0.978020\nvt 0.657438 0.882065\nvt 0.658307 0.791674\nvt 0.658649 0.831193\nvt 0.663955 0.927845\nvt 0.663803 0.932933\nvt 0.664950 0.862975\nvt 0.665013 0.882062\nvt 0.658818 0.828060\nvt 0.658607 0.786106\nvt 0.664415 0.963411\nvt 0.664256 0.871321\nvt 0.658997 0.827002\nvt 0.925015 0.739925\nvt 0.896807 0.784226\nvt 0.896807 0.739925\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.874003 0.733230\nvt 0.873938 0.720294\nvt 0.874003 0.718404\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.786981 0.828527\nvt 0.809767 0.784226\nvt 0.809767 0.828527\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.874622 0.718696\nvt 0.874571 0.737491\nvt 0.874571 0.718404\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.874133 0.719808\nvt 0.874190 0.735319\nvt 0.874133 0.736723\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.809767 0.784226\nvt 0.839103 0.739925\nvt 0.839103 0.784226\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.873450 0.727447\nvt 0.873343 0.721031\nvt 0.873450 0.718404\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.873130 0.723975\nvt 0.872957 0.721253\nvt 0.873130 0.718404\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.878106 0.828527\nvt 0.896807 0.784226\nvt 0.896807 0.828527\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.661713 0.828527\nvt 0.661264 0.784226\nvt 0.661713 0.784226\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.665013 0.828527\nvt 0.691011 0.784226\nvt 0.691011 0.828527\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.846937 0.784226\nvt 0.844048 0.828527\nvt 0.844048 0.784226\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.874571 0.736757\nvt 0.874519 0.719268\nvt 0.874571 0.718404\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.878106 0.784226\nvt 0.869549 0.828527\nvt 0.869549 0.784226\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.780139 0.784226\nvt 0.757353 0.828527\nvt 0.757353 0.784226\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.720761 0.828527\nvt 0.716722 0.784226\nvt 0.720761 0.784226\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.943115 0.718404\nvt 0.957011 0.674103\nvt 0.957011 0.718404\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.874414 0.718404\nvt 0.874466 0.737622\nvt 0.874414 0.736757\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.872459 0.728094\nvt 0.872784 0.732939\nvt 0.872459 0.731059\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.900667 0.674103\nvt 0.872459 0.718404\nvt 0.872459 0.674103\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.874304 0.735319\nvt 0.874361 0.719808\nvt 0.874361 0.736723\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.874361 0.736757\nvt 0.874414 0.719268\nvt 0.874414 0.737622\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.657438 0.784226\nvt 0.631441 0.828527\nvt 0.631441 0.784226\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.872784 0.725128\nvt 0.872459 0.726214\nvt 0.872459 0.723249\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.969956 0.718404\nvt 0.965573 0.674103\nvt 0.969956 0.674103\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.868439 0.739925\nvt 0.839103 0.784226\nvt 0.839103 0.739925\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.976806 0.739925\nvt 0.968249 0.784226\nvt 0.968249 0.739925\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.874304 0.735319\nvt 0.874247 0.719808\nvt 0.874304 0.718404\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.915508 0.784226\nvt 0.896807 0.828527\nvt 0.896807 0.784226\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.943700 0.784226\nvt 0.957596 0.739925\nvt 0.957596 0.784226\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.725961 0.828527\nvt 0.723802 0.784226\nvt 0.725961 0.784226\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.841159 0.828527\nvt 0.844048 0.784226\nvt 0.844048 0.828527\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.631441 0.629802\nvt 0.973587 0.828527\nvt 0.969548 0.784226\nvt 0.973587 0.784226\nvt 0.751771 0.784226\nvt 0.754677 0.828527\nvt 0.751771 0.828527\nvt 0.839103 0.828527\nvt 0.834721 0.784226\nvt 0.839103 0.784226\nvt 0.927320 0.674103\nvt 0.931878 0.718404\nvt 0.927320 0.718404\nvt 0.809767 0.784226\nvt 0.807608 0.739925\nvt 0.809767 0.739925\nvt 0.900667 0.674103\nvt 0.904207 0.718404\nvt 0.900667 0.718404\nvt 0.631441 0.739925\nvt 0.631890 0.784226\nvt 0.631441 0.784226\nvt 0.786981 0.828527\nvt 0.784075 0.784226\nvt 0.786981 0.784226\nvt 0.720788 0.784226\nvt 0.722118 0.828527\nvt 0.720788 0.828527\nvt 0.949988 0.828527\nvt 0.945430 0.784226\nvt 0.949988 0.784226\nvt 0.968249 0.784226\nvt 0.964210 0.739925\nvt 0.968249 0.739925\nvt 0.927480 0.674103\nvt 0.923939 0.629802\nvt 0.927480 0.629802\nvt 0.846937 0.784226\nvt 0.851320 0.828527\nvt 0.846937 0.828527\nvt 0.691011 0.784226\nvt 0.690562 0.739925\nvt 0.691011 0.739925\nvt 0.750511 0.739925\nvt 0.752670 0.784226\nvt 0.750511 0.784226\nvt 0.929021 0.674103\nvt 0.927692 0.629802\nvt 0.929021 0.629802\nvt 0.769621 0.776076\nvt 0.773525 0.748075\nvt 0.773525 0.776076\nvt 0.906311 0.637952\nvt 0.903503 0.665953\nvt 0.903503 0.637952\nvt 0.873236 0.727447\nvt 0.873343 0.721031\nvt 0.873343 0.730074\nvt 0.874672 0.718696\nvt 0.874723 0.737491\nvt 0.874672 0.737783\nvt 0.977909 0.718404\nvt 0.974368 0.674103\nvt 0.977909 0.674103\nvt 0.872957 0.732395\nvt 0.873130 0.729673\nvt 0.873130 0.735244\nvt 0.925015 0.776076\nvt 0.925449 0.748075\nvt 0.925449 0.776076\nvt 0.873556 0.720707\nvt 0.873636 0.730572\nvt 0.873556 0.732875\nvt 0.943700 0.784226\nvt 0.939143 0.739925\nvt 0.943700 0.739925\nvt 0.873130 0.721031\nvt 0.873236 0.727447\nvt 0.873130 0.730074\nvt 0.892395 0.748075\nvt 0.888973 0.776076\nvt 0.888973 0.748075\nvt 0.872459 0.720283\nvt 0.872784 0.721369\nvt 0.872459 0.723249\nvt 0.868439 0.739925\nvt 0.871344 0.784226\nvt 0.868439 0.784226\nvt 0.874466 0.737622\nvt 0.874519 0.718404\nvt 0.874519 0.736757\nvt 0.645583 0.776076\nvt 0.649988 0.748075\nvt 0.649988 0.776076\nvt 0.874068 0.733230\nvt 0.874133 0.720294\nvt 0.874133 0.735120\nvt 0.660777 0.784226\nvt 0.661226 0.828527\nvt 0.660777 0.828527\nvt 0.874068 0.733230\nvt 0.874003 0.720294\nvt 0.874068 0.718404\nvt 0.921836 0.710254\nvt 0.924644 0.682253\nvt 0.924644 0.710254\nvt 0.874723 0.737783\nvt 0.874774 0.718404\nvt 0.874774 0.737491\nvt 0.981540 0.828527\nvt 0.977999 0.784226\nvt 0.981540 0.784226\nvt 0.874672 0.737783\nvt 0.874622 0.718404\nvt 0.874672 0.718696\nvt 0.934193 0.792376\nvt 0.933759 0.820377\nvt 0.933759 0.792376\nvt 0.873715 0.720707\nvt 0.873794 0.730572\nvt 0.873715 0.732875\nvt 0.915508 0.784226\nvt 0.920066 0.828527\nvt 0.915508 0.828527\nvt 0.874247 0.719808\nvt 0.874190 0.735319\nvt 0.874190 0.718404\nvt 0.896414 0.637952\nvt 0.892993 0.665953\nvt 0.892993 0.637952\nvt 0.872784 0.732939\nvt 0.872459 0.737784\nvt 0.872459 0.734819\nvt 0.872459 0.629802\nvt 0.875364 0.674103\nvt 0.872459 0.674103\nvt 0.872957 0.721253\nvt 0.872784 0.723975\nvt 0.872784 0.718404\nvt 0.866942 0.820377\nvt 0.868227 0.792376\nvt 0.868227 0.820377\nvt 0.873938 0.720294\nvt 0.873873 0.733230\nvt 0.873873 0.718404\nvt 0.949988 0.784226\nvt 0.954371 0.828527\nvt 0.949988 0.828527\nvt 0.676868 0.748075\nvt 0.672463 0.776076\nvt 0.672463 0.748075\nvt 0.749038 0.792376\nvt 0.746952 0.820377\nvt 0.746952 0.792376\nvt 0.872957 0.732395\nvt 0.872784 0.729673\nvt 0.872957 0.726824\nvt 0.790657 0.748075\nvt 0.786753 0.776076\nvt 0.786753 0.748075\nvt 0.725961 0.784226\nvt 0.730000 0.828527\nvt 0.725961 0.828527\nvt 0.699573 0.776076\nvt 0.703809 0.748075\nvt 0.703809 0.776076\nvt 0.696211 0.828527\nvt 0.694052 0.784226\nvt 0.696211 0.784226\nvt 0.873873 0.720707\nvt 0.873794 0.730572\nvt 0.873794 0.718404\nvt 0.729323 0.776076\nvt 0.733559 0.748075\nvt 0.733559 0.776076\nvt 0.720761 0.784226\nvt 0.719431 0.739925\nvt 0.720761 0.739925\nvt 0.873636 0.730572\nvt 0.873715 0.720707\nvt 0.873715 0.732875\nvt 0.819098 0.792376\nvt 0.817813 0.820377\nvt 0.817813 0.792376\nvt 0.873556 0.721031\nvt 0.873450 0.727447\nvt 0.873450 0.718404\nvt 0.750511 0.784226\nvt 0.749181 0.739925\nvt 0.750511 0.739925\nvt 0.697684 0.820377\nvt 0.704203 0.824452\nvt 0.696211 0.824452\nvt 0.698093 0.827435\nvt 0.716722 0.828527\nvt 0.702825 0.828527\nvt 0.696211 0.788301\nvt 0.697684 0.792376\nvt 0.962934 0.788301\nvt 0.964816 0.827435\nvt 0.962934 0.824452\nvt 0.969548 0.828527\nvt 0.699770 0.792376\nvt 0.704202 0.788301\nvt 0.698093 0.785318\nvt 0.710407 0.785318\nvt 0.699770 0.820377\nvt 0.710407 0.827435\nvt 0.900191 0.633877\nvt 0.880634 0.630894\nvt 0.900827 0.630894\nvt 0.875364 0.629802\nvt 0.898151 0.629802\nvt 0.900191 0.670028\nvt 0.896414 0.665953\nvt 0.900827 0.673011\nvt 0.757353 0.785318\nvt 0.754677 0.784226\nvt 0.887087 0.670028\nvt 0.880634 0.673011\nvt 0.887087 0.633877\nvt 0.822522 0.788301\nvt 0.820658 0.785318\nvt 0.828240 0.785318\nvt 0.819098 0.820377\nvt 0.822522 0.824452\nvt 0.828240 0.827435\nvt 0.834721 0.828527\nvt 0.817601 0.824452\nvt 0.820658 0.827435\nvt 0.826164 0.828527\nvt 0.817601 0.788301\nvt 0.957011 0.678178\nvt 0.960067 0.717312\nvt 0.957011 0.714329\nvt 0.960067 0.675195\nvt 0.965573 0.718404\nvt 0.931475 0.788301\nvt 0.933137 0.788301\nvt 0.929024 0.785318\nvt 0.920066 0.784226\nvt 0.922955 0.784226\nvt 0.943115 0.710254\nvt 0.942059 0.678178\nvt 0.943115 0.682253\nvt 0.942059 0.714329\nvt 0.937946 0.675195\nvt 0.931878 0.674103\nvt 0.933137 0.824452\nvt 0.931475 0.824452\nvt 0.929024 0.827435\nvt 0.926463 0.827435\nvt 0.926463 0.785318\nvt 0.796971 0.744000\nvt 0.780139 0.741017\nvt 0.803176 0.741017\nvt 0.790657 0.776076\nvt 0.796971 0.780151\nvt 0.803176 0.783134\nvt 0.807608 0.784226\nvt 0.782021 0.780151\nvt 0.780139 0.783134\nvt 0.781611 0.784226\nvt 0.782021 0.744000\nvt 0.692580 0.785318\nvt 0.694052 0.828527\nvt 0.692580 0.827435\nvt 0.927320 0.714329\nvt 0.916566 0.714329\nvt 0.910113 0.717312\nvt 0.926684 0.717312\nvt 0.916566 0.678178\nvt 0.921836 0.682253\nvt 0.910113 0.675195\nvt 0.904207 0.674103\nvt 0.927320 0.678178\nvt 0.926684 0.675195\nvt 0.922908 0.674103\nvt 0.973587 0.788301\nvt 0.974222 0.827435\nvt 0.973587 0.824452\nvt 0.974222 0.785318\nvt 0.977999 0.828527\nvt 0.639186 0.780151\nvt 0.660170 0.783134\nvt 0.634174 0.783134\nvt 0.639186 0.744000\nvt 0.645583 0.748075\nvt 0.634174 0.741017\nvt 0.631890 0.739925\nvt 0.656057 0.744000\nvt 0.660170 0.741017\nvt 0.661226 0.739925\nvt 0.656057 0.780151\nvt 0.661226 0.784226\nvt 0.883067 0.744000\nvt 0.896171 0.744000\nvt 0.896807 0.741017\nvt 0.871344 0.739925\nvt 0.894131 0.739925\nvt 0.896171 0.780151\nvt 0.892395 0.776076\nvt 0.896807 0.783134\nvt 0.781400 0.827435\nvt 0.784076 0.828527\nvt 0.883067 0.780151\nvt 0.876615 0.783134\nvt 0.876615 0.741017\nvt 0.740039 0.780151\nvt 0.723817 0.780151\nvt 0.720761 0.783134\nvt 0.749181 0.784226\nvt 0.720973 0.784226\nvt 0.723817 0.744000\nvt 0.729323 0.748075\nvt 0.720761 0.741017\nvt 0.722330 0.785318\nvt 0.722118 0.784226\nvt 0.740039 0.744000\nvt 0.745758 0.741017\nvt 0.745757 0.783134\nvt 0.926071 0.780151\nvt 0.927733 0.780151\nvt 0.930185 0.783134\nvt 0.939143 0.784226\nvt 0.936253 0.784226\nvt 0.934193 0.792376\nvt 0.935249 0.824452\nvt 0.934193 0.820377\nvt 0.935249 0.788301\nvt 0.939362 0.827435\nvt 0.945430 0.828527\nvt 0.926071 0.744000\nvt 0.927733 0.744000\nvt 0.930185 0.741017\nvt 0.932745 0.741017\nvt 0.932745 0.783134\nvt 0.750511 0.788301\nvt 0.742519 0.788301\nvt 0.748629 0.785318\nvt 0.730000 0.784226\nvt 0.743896 0.784226\nvt 0.750511 0.824452\nvt 0.749038 0.820377\nvt 0.957596 0.744000\nvt 0.959478 0.783134\nvt 0.957596 0.780151\nvt 0.964210 0.784226\nvt 0.742519 0.824452\nvt 0.748629 0.827435\nvt 0.736315 0.827435\nvt 0.736315 0.785318\nvt 0.900827 0.633877\nvt 0.911581 0.633877\nvt 0.901462 0.630894\nvt 0.918033 0.630894\nvt 0.905239 0.629802\nvt 0.911581 0.670028\nvt 0.906311 0.665953\nvt 0.918033 0.673011\nvt 0.923939 0.674103\nvt 0.900827 0.670028\nvt 0.901462 0.673011\nvt 0.905239 0.674103\nvt 0.969956 0.678178\nvt 0.970592 0.717312\nvt 0.969956 0.714329\nvt 0.970592 0.675195\nvt 0.974368 0.718404\nvt 0.868439 0.824452\nvt 0.863518 0.824452\nvt 0.865382 0.827435\nvt 0.857800 0.827435\nvt 0.863518 0.788301\nvt 0.866942 0.792376\nvt 0.857800 0.785318\nvt 0.851320 0.784226\nvt 0.868439 0.788301\nvt 0.865382 0.785318\nvt 0.859876 0.784226\nvt 0.962934 0.824452\nvt 0.959877 0.785318\nvt 0.962934 0.788301\nvt 0.959877 0.827435\nvt 0.954371 0.784226\nvt 0.666395 0.744000\nvt 0.683266 0.744000\nvt 0.688278 0.741017\nvt 0.662282 0.741017\nvt 0.683266 0.780151\nvt 0.676868 0.776076\nvt 0.688278 0.783134\nvt 0.690562 0.784226\nvt 0.666395 0.780151\nvt 0.662282 0.783134\nvt 0.661226 0.784226\nvt 0.661226 0.739925\nvt 0.778257 0.780151\nvt 0.763307 0.780151\nvt 0.780139 0.783134\nvt 0.757102 0.783134\nvt 0.763307 0.744000\nvt 0.769621 0.748075\nvt 0.757102 0.741017\nvt 0.752670 0.739925\nvt 0.778257 0.744000\nvt 0.780139 0.741017\nvt 0.778667 0.739925\nvt 0.722330 0.785318\nvt 0.723802 0.828527\nvt 0.722330 0.827435\nvt 0.694067 0.780151\nvt 0.710289 0.780151\nvt 0.691011 0.783134\nvt 0.719431 0.784226\nvt 0.691223 0.784226\nvt 0.694067 0.744000\nvt 0.699573 0.748075\nvt 0.691011 0.741017\nvt 0.927480 0.673011\nvt 0.927692 0.674103\nvt 0.710289 0.744000\nvt 0.716007 0.741017\nvt 0.716007 0.783134\nvt 0.460243 0.058746\nvt 0.465381 0.075946\nvt 0.460243 0.075946\nvt 0.460243 0.044118\nvt 0.465381 0.058746\nvt 0.475659 0.061318\nvt 0.470521 0.044118\nvt 0.475659 0.044118\nvt 0.475659 0.080430\nvt 0.470521 0.061319\nvt 0.475659 0.100719\nvt 0.470521 0.080430\nvt 0.475659 0.121406\nvt 0.470521 0.100719\nvt 0.475659 0.141695\nvt 0.470521 0.121406\nvt 0.475659 0.160807\nvt 0.470521 0.141695\nvt 0.475659 0.178007\nvt 0.470521 0.160807\nvt 0.475659 0.192635\nvt 0.470521 0.178007\nvt 0.470520 0.061318\nvt 0.465382 0.044118\nvt 0.470521 0.044118\nvt 0.470520 0.080430\nvt 0.465382 0.061318\nvt 0.470520 0.100719\nvt 0.465382 0.080430\nvt 0.470520 0.121406\nvt 0.465382 0.100719\nvt 0.470520 0.141695\nvt 0.465382 0.121406\nvt 0.470520 0.160807\nvt 0.465382 0.141695\nvt 0.470520 0.178007\nvt 0.465382 0.160807\nvt 0.470521 0.192635\nvt 0.465382 0.178007\nvt 0.455104 0.176883\nvt 0.460243 0.193279\nvt 0.455104 0.193279\nvt 0.455104 0.158340\nvt 0.460242 0.176883\nvt 0.455104 0.138365\nvt 0.460242 0.158340\nvt 0.455104 0.117724\nvt 0.460242 0.138365\nvt 0.457759 0.097212\nvt 0.460242 0.097212\nvt 0.460242 0.117725\nvt 0.455104 0.097212\nvt 0.457373 0.091269\nvt 0.457443 0.093903\nvt 0.455104 0.059688\nvt 0.457315 0.065638\nvt 0.457272 0.068988\nvt 0.457701 0.057284\nvt 0.457610 0.057620\nvt 0.455104 0.044118\nvt 0.460243 0.175434\nvt 0.465382 0.192635\nvt 0.460243 0.192635\nvt 0.460243 0.156322\nvt 0.465381 0.175434\nvt 0.460243 0.136033\nvt 0.465381 0.156322\nvt 0.460243 0.115347\nvt 0.465381 0.136033\nvt 0.284075 0.371564\nvt 0.288123 0.368379\nvt 0.432370 0.408913\nvt 0.460243 0.095058\nvt 0.465381 0.115347\nvt 0.465381 0.095058\nvt 0.290911 0.154807\nvt 0.292332 0.151050\nvt 0.447428 0.179767\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.969967 0.778536\nvt 0.969572 0.859808\nvt 0.968270 0.826146\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.945860 0.798944\nvt 0.945817 0.748551\nvt 0.946034 0.793196\nvt 0.948759 0.850663\nvt 0.948080 0.829100\nvt 0.948796 0.838528\nvt 0.945703 0.806680\nvt 0.945507 0.758765\nvt 0.948868 0.826859\nvt 0.948209 0.808367\nvt 0.945569 0.816106\nvt 0.945228 0.772510\nvt 0.948973 0.816106\nvt 0.948395 0.789258\nvt 0.944805 0.808366\nvt 0.944991 0.789258\nvt 0.948632 0.772510\nvt 0.949106 0.806680\nvt 0.945465 0.826859\nvt 0.944677 0.829100\nvt 0.949263 0.798944\nvt 0.948910 0.758765\nvt 0.945356 0.850663\nvt 0.945392 0.838528\nvt 0.949220 0.748551\nvt 0.949437 0.793196\nvt 0.944612 0.872225\nvt 0.944612 0.850663\nvt 0.949622 0.789657\nvt 0.949549 0.742262\nvt 0.945392 0.874467\nvt 0.945356 0.862798\nvt 0.949884 0.740138\nvt 0.949811 0.788462\nvt 0.945465 0.885221\nvt 0.944677 0.892959\nvt 0.949996 0.789657\nvt 0.950213 0.742262\nvt 0.944992 0.928816\nvt 0.944805 0.912068\nvt 0.950523 0.748552\nvt 0.950170 0.793197\nvt 0.945703 0.902383\nvt 0.945570 0.894647\nvt 0.950327 0.798945\nvt 0.950801 0.758766\nvt 0.950638 0.862800\nvt 0.951419 0.850665\nvt 0.951353 0.872228\nvt 0.945507 0.952776\nvt 0.945229 0.942562\nvt 0.951038 0.772512\nvt 0.950461 0.806681\nvt 0.951225 0.892961\nvt 0.950566 0.874469\nvt 0.946034 0.911671\nvt 0.945860 0.908132\nvt 0.950565 0.816107\nvt 0.951225 0.789260\nvt 0.951039 0.912070\nvt 0.950461 0.885223\nvt 0.946146 0.961190\nvt 0.945817 0.959066\nvt 0.950638 0.826861\nvt 0.951353 0.808369\nvt 0.950328 0.894648\nvt 0.950802 0.928818\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.948015 0.872225\nvt 0.948015 0.850663\nvt 0.946146 0.742262\nvt 0.946219 0.789657\nvt 0.948796 0.874467\nvt 0.948759 0.862799\nvt 0.946481 0.740138\nvt 0.946408 0.788462\nvt 0.948868 0.885221\nvt 0.948081 0.892959\nvt 0.946593 0.789657\nvt 0.946810 0.742262\nvt 0.948395 0.928816\nvt 0.948209 0.912068\nvt 0.947119 0.748552\nvt 0.946767 0.793197\nvt 0.948973 0.894647\nvt 0.948632 0.942562\nvt 0.946924 0.798945\nvt 0.947398 0.758766\nvt 0.947234 0.862800\nvt 0.948015 0.850665\nvt 0.947950 0.872228\nvt 0.949107 0.902383\nvt 0.948911 0.952776\nvt 0.947057 0.806681\nvt 0.947635 0.772512\nvt 0.947821 0.892962\nvt 0.947162 0.874469\nvt 0.949263 0.908132\nvt 0.949221 0.959066\nvt 0.947821 0.789261\nvt 0.947162 0.816107\nvt 0.947635 0.912070\nvt 0.947057 0.885223\nvt 0.949438 0.911671\nvt 0.949550 0.961190\nvt 0.947234 0.826861\nvt 0.947950 0.808369\nvt 0.947398 0.928818\nvt 0.946924 0.894648\nvt 0.949811 0.911672\nvt 0.949623 0.912867\nvt 0.947271 0.838530\nvt 0.948015 0.829103\nvt 0.946767 0.902384\nvt 0.947120 0.942563\nvt 0.950214 0.952777\nvt 0.949885 0.959066\nvt 0.947271 0.850665\nvt 0.946810 0.952777\nvt 0.946593 0.908132\nvt 0.950171 0.902384\nvt 0.949996 0.908132\nvt 0.950675 0.838530\nvt 0.950675 0.850665\nvt 0.946408 0.911672\nvt 0.946481 0.959066\nvt 0.950523 0.942563\nvt 0.951419 0.829103\nvt 0.946219 0.912867\nvt 0.903212 0.665780\nvt 0.874122 0.715826\nvt 0.874122 0.665780\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.875715 0.732575\nvt 0.875648 0.717961\nvt 0.875715 0.715826\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.748361 0.840231\nvt 0.771859 0.790185\nvt 0.771859 0.840231\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.876405 0.716156\nvt 0.876353 0.737388\nvt 0.876353 0.715826\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.876025 0.734934\nvt 0.875966 0.717412\nvt 0.876025 0.715826\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.809470 0.790185\nvt 0.839723 0.740138\nvt 0.839723 0.790185\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.875034 0.718793\nvt 0.875144 0.726041\nvt 0.875034 0.729009\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.874636 0.734851\nvt 0.874814 0.725338\nvt 0.874814 0.731632\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.899232 0.840231\nvt 0.918517 0.790185\nvt 0.918517 0.840231\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.965182 0.840231\nvt 0.964718 0.790185\nvt 0.965182 0.790185\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.652378 0.790185\nvt 0.625567 0.840231\nvt 0.625567 0.790185\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.971024 0.615733\nvt 0.968044 0.665779\nvt 0.968044 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.876138 0.736560\nvt 0.876084 0.716803\nvt 0.876138 0.715826\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.661682 0.790185\nvt 0.652858 0.840231\nvt 0.652858 0.790185\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.795358 0.790185\nvt 0.771859 0.840231\nvt 0.771859 0.790185\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.739127 0.840231\nvt 0.734962 0.790185\nvt 0.739127 0.790185\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.930864 0.665779\nvt 0.945194 0.615733\nvt 0.945193 0.665779\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.876192 0.715826\nvt 0.876246 0.737537\nvt 0.876192 0.736560\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.874122 0.715826\nvt 0.874457 0.721299\nvt 0.874122 0.719176\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.899232 0.790185\nvt 0.928322 0.740139\nvt 0.928322 0.790185\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.876025 0.734934\nvt 0.876084 0.717412\nvt 0.876084 0.736521\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.876138 0.736560\nvt 0.876192 0.716803\nvt 0.876192 0.737537\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.687000 0.840231\nvt 0.713810 0.790185\nvt 0.713810 0.840231\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.874122 0.724649\nvt 0.874457 0.723423\nvt 0.874457 0.726773\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.958379 0.715826\nvt 0.953859 0.665780\nvt 0.958379 0.665780\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.869977 0.740138\nvt 0.839723 0.790185\nvt 0.839723 0.740139\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.739127 0.840231\nvt 0.747952 0.790185\nvt 0.747952 0.840231\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.875849 0.717412\nvt 0.875908 0.734934\nvt 0.875849 0.736521\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.839707 0.840231\nvt 0.858993 0.790185\nvt 0.858993 0.840231\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.945029 0.665780\nvt 0.930699 0.715826\nvt 0.930699 0.665780\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.964299 0.615733\nvt 0.966526 0.665779\nvt 0.964299 0.665779\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.965182 0.840231\nvt 0.968161 0.790185\nvt 0.968161 0.840231\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.625567 0.615733\nvt 0.962405 0.790185\nvt 0.958240 0.740138\nvt 0.962405 0.740139\nvt 0.962405 0.740139\nvt 0.965401 0.790185\nvt 0.962405 0.790185\nvt 0.817533 0.840231\nvt 0.813013 0.790185\nvt 0.817533 0.790185\nvt 0.944612 0.790185\nvt 0.939911 0.740139\nvt 0.944612 0.740138\nvt 0.809470 0.790185\nvt 0.807244 0.740138\nvt 0.809470 0.740138\nvt 0.903212 0.665780\nvt 0.906863 0.715826\nvt 0.903212 0.715826\nvt 0.625567 0.740138\nvt 0.626030 0.790185\nvt 0.625567 0.790185\nvt 0.964299 0.665780\nvt 0.961303 0.615733\nvt 0.964299 0.615733\nvt 0.858993 0.790185\nvt 0.860364 0.840231\nvt 0.858993 0.840231\nvt 0.934807 0.840231\nvt 0.930107 0.790185\nvt 0.934807 0.790185\nvt 0.962405 0.840231\nvt 0.958240 0.790185\nvt 0.962405 0.790185\nvt 0.903377 0.615733\nvt 0.907028 0.665779\nvt 0.903377 0.665779\nvt 0.839707 0.840231\nvt 0.835187 0.790185\nvt 0.839707 0.790185\nvt 0.687000 0.790185\nvt 0.686537 0.740139\nvt 0.687000 0.740139\nvt 0.778915 0.790185\nvt 0.776689 0.740138\nvt 0.778915 0.740138\nvt 0.944598 0.840231\nvt 0.943227 0.790185\nvt 0.944598 0.790185\nvt 0.759207 0.749345\nvt 0.755182 0.780978\nvt 0.755182 0.749345\nvt 0.925208 0.656573\nvt 0.928104 0.624940\nvt 0.928104 0.656573\nvt 0.875144 0.726041\nvt 0.875254 0.718793\nvt 0.875254 0.729009\nvt 0.876353 0.737388\nvt 0.876300 0.716156\nvt 0.876353 0.715826\nvt 0.966580 0.715826\nvt 0.962929 0.665780\nvt 0.966580 0.665780\nvt 0.874457 0.731632\nvt 0.874636 0.728557\nvt 0.874636 0.734851\nvt 0.899232 0.799391\nvt 0.898784 0.831024\nvt 0.898784 0.799391\nvt 0.875335 0.729572\nvt 0.875254 0.718427\nvt 0.875335 0.715826\nvt 0.879962 0.790185\nvt 0.884663 0.840231\nvt 0.879963 0.840231\nvt 0.875034 0.726041\nvt 0.874924 0.718793\nvt 0.875034 0.715826\nvt 0.898827 0.624940\nvt 0.895298 0.656573\nvt 0.895298 0.624940\nvt 0.874122 0.728896\nvt 0.874457 0.730123\nvt 0.874122 0.732246\nvt 0.874122 0.615733\nvt 0.877118 0.665779\nvt 0.874122 0.665779\nvt 0.876246 0.737537\nvt 0.876300 0.715826\nvt 0.876300 0.736560\nvt 0.640152 0.780978\nvt 0.644694 0.749345\nvt 0.644694 0.780978\nvt 0.875715 0.732575\nvt 0.875782 0.717961\nvt 0.875782 0.734710\nvt 0.652378 0.790185\nvt 0.652841 0.840231\nvt 0.652378 0.840231\nvt 0.875849 0.732575\nvt 0.875782 0.717961\nvt 0.875849 0.715826\nvt 0.925044 0.706619\nvt 0.927939 0.674986\nvt 0.927939 0.706619\nvt 0.876509 0.715826\nvt 0.876457 0.737718\nvt 0.876457 0.716156\nvt 0.943008 0.840231\nvt 0.939357 0.790185\nvt 0.943008 0.790185\nvt 0.876457 0.737718\nvt 0.876405 0.715826\nvt 0.876457 0.716156\nvt 0.860693 0.831024\nvt 0.861141 0.799391\nvt 0.861141 0.831024\nvt 0.875499 0.729572\nvt 0.875417 0.718427\nvt 0.875499 0.715826\nvt 0.879962 0.840231\nvt 0.875262 0.790185\nvt 0.879962 0.790185\nvt 0.875908 0.734934\nvt 0.875966 0.717412\nvt 0.875966 0.736521\nvt 0.894681 0.749345\nvt 0.891153 0.780978\nvt 0.891153 0.749345\nvt 0.874457 0.732246\nvt 0.874122 0.737720\nvt 0.874122 0.734370\nvt 0.869977 0.740139\nvt 0.872973 0.790185\nvt 0.869977 0.790185\nvt 0.874636 0.725338\nvt 0.874457 0.715826\nvt 0.874636 0.719044\nvt 0.819076 0.799391\nvt 0.817751 0.831024\nvt 0.817751 0.799391\nvt 0.875648 0.717961\nvt 0.875581 0.732575\nvt 0.875581 0.715826\nvt 0.958544 0.665779\nvt 0.954024 0.615733\nvt 0.958544 0.615733\nvt 0.672415 0.749345\nvt 0.667872 0.780978\nvt 0.667872 0.749345\nvt 0.663201 0.831024\nvt 0.665353 0.799391\nvt 0.665353 0.831024\nvt 0.874636 0.719044\nvt 0.874814 0.722119\nvt 0.874636 0.725338\nvt 0.789762 0.749345\nvt 0.785736 0.780978\nvt 0.785737 0.749345\nvt 0.687000 0.840231\nvt 0.682834 0.790185\nvt 0.687000 0.790185\nvt 0.708850 0.749345\nvt 0.704481 0.780978\nvt 0.704481 0.749345\nvt 0.966580 0.665780\nvt 0.968807 0.715826\nvt 0.966580 0.715826\nvt 0.875335 0.729572\nvt 0.875417 0.718427\nvt 0.875417 0.732174\nvt 0.739530 0.749345\nvt 0.735162 0.780978\nvt 0.735162 0.749345\nvt 0.687000 0.740138\nvt 0.688371 0.790185\nvt 0.687000 0.790185\nvt 0.875499 0.729572\nvt 0.875581 0.718427\nvt 0.875581 0.732174\nvt 0.796902 0.799391\nvt 0.795577 0.831024\nvt 0.795577 0.799391\nvt 0.874924 0.718793\nvt 0.874814 0.726041\nvt 0.874814 0.715826\nvt 0.717680 0.740138\nvt 0.719051 0.790185\nvt 0.717680 0.790185\nvt 0.717480 0.831024\nvt 0.713810 0.835627\nvt 0.715328 0.831024\nvt 0.728450 0.838997\nvt 0.715751 0.838997\nvt 0.734962 0.840231\nvt 0.720631 0.840231\nvt 0.713810 0.794788\nvt 0.715328 0.799391\nvt 0.951419 0.744742\nvt 0.953359 0.788951\nvt 0.951419 0.785581\nvt 0.958240 0.790185\nvt 0.722051 0.794788\nvt 0.717480 0.799391\nvt 0.728450 0.791418\nvt 0.715751 0.791418\nvt 0.722051 0.835627\nvt 0.898576 0.744742\nvt 0.878408 0.741372\nvt 0.899232 0.741372\nvt 0.872973 0.740138\nvt 0.896472 0.740139\nvt 0.898576 0.785581\nvt 0.894681 0.780978\nvt 0.899232 0.788951\nvt 0.968161 0.741372\nvt 0.965401 0.740138\nvt 0.885062 0.785581\nvt 0.878408 0.788951\nvt 0.885062 0.744742\nvt 0.795358 0.794788\nvt 0.800433 0.794788\nvt 0.798511 0.791418\nvt 0.806330 0.791418\nvt 0.804189 0.790185\nvt 0.796902 0.831024\nvt 0.800433 0.835627\nvt 0.806330 0.838997\nvt 0.813013 0.840231\nvt 0.795358 0.835627\nvt 0.798511 0.838997\nvt 0.804189 0.840231\nvt 0.945029 0.670383\nvt 0.948181 0.714592\nvt 0.945029 0.711222\nvt 0.948181 0.667013\nvt 0.953859 0.715826\nvt 0.863496 0.835627\nvt 0.861782 0.835627\nvt 0.866024 0.838997\nvt 0.868665 0.838997\nvt 0.872282 0.840231\nvt 0.928322 0.749345\nvt 0.929411 0.785581\nvt 0.928322 0.780978\nvt 0.929412 0.744742\nvt 0.933653 0.788951\nvt 0.939911 0.790185\nvt 0.860693 0.799391\nvt 0.863496 0.794788\nvt 0.866024 0.791418\nvt 0.868665 0.791418\nvt 0.872282 0.790185\nvt 0.875262 0.840231\nvt 0.796274 0.744742\nvt 0.778915 0.741372\nvt 0.802673 0.741372\nvt 0.796274 0.785581\nvt 0.789762 0.780978\nvt 0.802673 0.788951\nvt 0.807244 0.790185\nvt 0.780856 0.785581\nvt 0.778915 0.788951\nvt 0.780434 0.790185\nvt 0.780856 0.744742\nvt 0.970325 0.714592\nvt 0.968807 0.665780\nvt 0.970325 0.667013\nvt 0.919608 0.711222\nvt 0.930043 0.714592\nvt 0.912954 0.714592\nvt 0.919608 0.670383\nvt 0.925044 0.674986\nvt 0.912954 0.667013\nvt 0.906863 0.665780\nvt 0.930699 0.670383\nvt 0.930043 0.667013\nvt 0.926149 0.665780\nvt 0.930699 0.711222\nvt 0.934807 0.794788\nvt 0.935462 0.838997\nvt 0.934807 0.835627\nvt 0.935462 0.791418\nvt 0.939357 0.840231\nvt 0.650952 0.785581\nvt 0.633555 0.785581\nvt 0.655194 0.788951\nvt 0.628386 0.788951\nvt 0.633555 0.744742\nvt 0.640152 0.749345\nvt 0.628386 0.741372\nvt 0.626030 0.740138\nvt 0.650952 0.744742\nvt 0.655194 0.741372\nvt 0.656283 0.740138\nvt 0.656283 0.790185\nvt 0.889208 0.620337\nvt 0.902722 0.620337\nvt 0.903377 0.616967\nvt 0.877118 0.615733\nvt 0.900618 0.615733\nvt 0.902722 0.661176\nvt 0.898827 0.656573\nvt 0.903377 0.664546\nvt 0.958544 0.664546\nvt 0.961303 0.665779\nvt 0.889208 0.661176\nvt 0.882553 0.664546\nvt 0.882553 0.616967\nvt 0.728479 0.744742\nvt 0.745208 0.744742\nvt 0.722582 0.741372\nvt 0.748361 0.741372\nvt 0.719051 0.740138\nvt 0.748142 0.740139\nvt 0.745208 0.785581\nvt 0.739530 0.780978\nvt 0.748361 0.788951\nvt 0.860582 0.791418\nvt 0.860364 0.790185\nvt 0.728479 0.785581\nvt 0.722582 0.788951\nvt 0.898143 0.794788\nvt 0.891260 0.791418\nvt 0.893901 0.791418\nvt 0.887643 0.790185\nvt 0.918517 0.799391\nvt 0.919607 0.835627\nvt 0.918517 0.831024\nvt 0.919607 0.794788\nvt 0.923849 0.838997\nvt 0.930107 0.840231\nvt 0.898143 0.835627\nvt 0.896429 0.835627\nvt 0.891260 0.838997\nvt 0.887643 0.840231\nvt 0.896429 0.794788\nvt 0.884663 0.790185\nvt 0.661682 0.835627\nvt 0.669924 0.835627\nvt 0.663623 0.838997\nvt 0.682834 0.840231\nvt 0.668504 0.840231\nvt 0.661682 0.794788\nvt 0.663201 0.799391\nvt 0.951419 0.794788\nvt 0.953359 0.838997\nvt 0.951419 0.835627\nvt 0.958240 0.840231\nvt 0.669924 0.794788\nvt 0.663623 0.791418\nvt 0.676322 0.791418\nvt 0.676322 0.838997\nvt 0.930864 0.661176\nvt 0.919773 0.661176\nvt 0.930208 0.664546\nvt 0.913119 0.664546\nvt 0.919773 0.620337\nvt 0.925208 0.624940\nvt 0.913119 0.616967\nvt 0.907028 0.615733\nvt 0.930864 0.620337\nvt 0.930208 0.616967\nvt 0.926313 0.615733\nvt 0.958379 0.670383\nvt 0.959034 0.714592\nvt 0.958379 0.711222\nvt 0.959034 0.667013\nvt 0.962929 0.715826\nvt 0.817533 0.794788\nvt 0.822607 0.794788\nvt 0.828504 0.791418\nvt 0.820685 0.791418\nvt 0.822607 0.835627\nvt 0.819076 0.831024\nvt 0.828504 0.838997\nvt 0.835187 0.840231\nvt 0.817533 0.835627\nvt 0.820685 0.838997\nvt 0.826363 0.840231\nvt 0.945194 0.661176\nvt 0.948346 0.616967\nvt 0.948346 0.664546\nvt 0.954024 0.665779\nvt 0.679012 0.744742\nvt 0.661614 0.744742\nvt 0.684181 0.741372\nvt 0.657373 0.741372\nvt 0.679012 0.785581\nvt 0.672415 0.780978\nvt 0.684181 0.788951\nvt 0.686537 0.790185\nvt 0.661614 0.785581\nvt 0.657373 0.788951\nvt 0.656283 0.790185\nvt 0.656283 0.740138\nvt 0.750301 0.744742\nvt 0.765719 0.744742\nvt 0.748361 0.741372\nvt 0.772118 0.741372\nvt 0.765719 0.785581\nvt 0.759207 0.780978\nvt 0.772118 0.788951\nvt 0.776689 0.790185\nvt 0.750301 0.785581\nvt 0.748361 0.788951\nvt 0.749879 0.790185\nvt 0.968044 0.664546\nvt 0.966526 0.615733\nvt 0.968044 0.616967\nvt 0.714528 0.744742\nvt 0.697798 0.744742\nvt 0.717680 0.741372\nvt 0.688371 0.740138\nvt 0.717461 0.740139\nvt 0.714528 0.785581\nvt 0.708850 0.780978\nvt 0.717680 0.788951\nvt 0.943008 0.838997\nvt 0.943227 0.840231\nvt 0.697798 0.785581\nvt 0.691902 0.788951\nvt 0.691902 0.741372\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.973174 0.668567\nvt 0.973853 0.582321\nvt 0.975125 0.618046\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.954616 0.765624\nvt 0.953947 0.729085\nvt 0.954242 0.718246\nvt 0.950476 0.813732\nvt 0.949688 0.826611\nvt 0.949688 0.803728\nvt 0.954308 0.779933\nvt 0.954450 0.771724\nvt 0.950515 0.801349\nvt 0.949757 0.781725\nvt 0.953499 0.761447\nvt 0.953696 0.743672\nvt 0.949893 0.761447\nvt 0.950592 0.789936\nvt 0.954197 0.789936\nvt 0.953363 0.781725\nvt 0.950703 0.779933\nvt 0.950091 0.743672\nvt 0.954121 0.801349\nvt 0.953294 0.803728\nvt 0.950844 0.771724\nvt 0.950342 0.729085\nvt 0.954082 0.813732\nvt 0.953294 0.826611\nvt 0.950637 0.718246\nvt 0.951010 0.765624\nvt 0.954121 0.839488\nvt 0.954082 0.826610\nvt 0.951195 0.761867\nvt 0.950965 0.711571\nvt 0.954197 0.851871\nvt 0.953363 0.849493\nvt 0.951313 0.709317\nvt 0.951391 0.760599\nvt 0.953696 0.891774\nvt 0.953499 0.871496\nvt 0.951591 0.761867\nvt 0.951668 0.711571\nvt 0.954450 0.873286\nvt 0.954308 0.863284\nvt 0.952017 0.718245\nvt 0.951787 0.765623\nvt 0.954616 0.881496\nvt 0.953947 0.909548\nvt 0.951971 0.771723\nvt 0.952345 0.729084\nvt 0.952505 0.839486\nvt 0.953294 0.826608\nvt 0.953294 0.849490\nvt 0.954571 0.934974\nvt 0.954243 0.924135\nvt 0.952640 0.743670\nvt 0.952138 0.779932\nvt 0.953224 0.871494\nvt 0.952466 0.851870\nvt 0.954996 0.891352\nvt 0.954800 0.887595\nvt 0.952279 0.789935\nvt 0.952891 0.761444\nvt 0.953089 0.891772\nvt 0.952390 0.863282\nvt 0.955274 0.943901\nvt 0.954919 0.941648\nvt 0.952390 0.801347\nvt 0.953088 0.781722\nvt 0.952279 0.873285\nvt 0.952891 0.909546\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.950515 0.839488\nvt 0.950476 0.826610\nvt 0.954571 0.711571\nvt 0.954800 0.761867\nvt 0.950592 0.851871\nvt 0.949757 0.849493\nvt 0.954919 0.709317\nvt 0.954996 0.760599\nvt 0.950703 0.863284\nvt 0.949893 0.871496\nvt 0.955196 0.761867\nvt 0.955274 0.711571\nvt 0.950844 0.873286\nvt 0.950091 0.891774\nvt 0.955622 0.718245\nvt 0.955392 0.765623\nvt 0.950637 0.924135\nvt 0.950342 0.909548\nvt 0.955577 0.771723\nvt 0.955950 0.729084\nvt 0.956111 0.839487\nvt 0.956899 0.826608\nvt 0.956899 0.849491\nvt 0.951195 0.887595\nvt 0.951010 0.881496\nvt 0.955743 0.779932\nvt 0.956246 0.743670\nvt 0.956830 0.871494\nvt 0.956072 0.851870\nvt 0.951313 0.941648\nvt 0.950965 0.934974\nvt 0.956497 0.761444\nvt 0.955884 0.789935\nvt 0.956694 0.891772\nvt 0.955996 0.863282\nvt 0.951391 0.891352\nvt 0.951669 0.943901\nvt 0.955995 0.801348\nvt 0.956694 0.781723\nvt 0.956497 0.909546\nvt 0.955884 0.873285\nvt 0.951787 0.891351\nvt 0.951591 0.892620\nvt 0.956072 0.813731\nvt 0.956830 0.803726\nvt 0.955743 0.881495\nvt 0.956246 0.924133\nvt 0.952345 0.934972\nvt 0.952017 0.941647\nvt 0.956111 0.826609\nvt 0.955950 0.934972\nvt 0.955577 0.887595\nvt 0.952138 0.881495\nvt 0.951972 0.887595\nvt 0.952466 0.813731\nvt 0.952505 0.826609\nvt 0.955392 0.891351\nvt 0.955622 0.941647\nvt 0.952640 0.924133\nvt 0.953224 0.803725\nvt 0.955196 0.892620\nvt 0.932432 0.709317\nvt 0.901616 0.762427\nvt 0.901616 0.709317\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.876704 0.685782\nvt 0.876775 0.701291\nvt 0.876704 0.703557\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.722155 0.815537\nvt 0.747048 0.762427\nvt 0.747048 0.815537\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.877490 0.706398\nvt 0.877545 0.683866\nvt 0.877545 0.706749\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.876970 0.683516\nvt 0.876908 0.705478\nvt 0.876908 0.685200\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.806529 0.762427\nvt 0.838577 0.709317\nvt 0.838577 0.762427\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.875983 0.694357\nvt 0.875866 0.686665\nvt 0.875983 0.683516\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.875561 0.700290\nvt 0.875372 0.697027\nvt 0.875561 0.693611\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.850195 0.815537\nvt 0.870625 0.762427\nvt 0.870625 0.815537\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.772432 0.815537\nvt 0.771942 0.762427\nvt 0.772432 0.762427\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.668517 0.762427\nvt 0.640116 0.815537\nvt 0.640116 0.762427\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.978320 0.577296\nvt 0.975164 0.630406\nvt 0.975164 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.877210 0.705519\nvt 0.877152 0.684553\nvt 0.877210 0.683516\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.871855 0.815537\nvt 0.881203 0.762427\nvt 0.881203 0.815537\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.747048 0.815537\nvt 0.771942 0.762427\nvt 0.771942 0.815537\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.695336 0.815537\nvt 0.690924 0.762427\nvt 0.695336 0.762427\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.934950 0.683516\nvt 0.950130 0.630406\nvt 0.950130 0.683516\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.877210 0.683516\nvt 0.877267 0.706556\nvt 0.877210 0.705519\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.875372 0.700942\nvt 0.875016 0.695133\nvt 0.875372 0.697387\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.875016 0.683516\nvt 0.905833 0.630406\nvt 0.905833 0.683516\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.876846 0.683516\nvt 0.876908 0.705478\nvt 0.876846 0.703795\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.877152 0.684553\nvt 0.877095 0.705519\nvt 0.877095 0.683516\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.640116 0.762427\nvt 0.611715 0.815537\nvt 0.611715 0.762427\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.875016 0.692880\nvt 0.875372 0.691578\nvt 0.875372 0.695133\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.950130 0.630406\nvt 0.954918 0.683516\nvt 0.950130 0.683516\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.870625 0.709317\nvt 0.838577 0.762427\nvt 0.838577 0.709317\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.948633 0.762427\nvt 0.939284 0.815537\nvt 0.939284 0.762427\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.876970 0.685200\nvt 0.877033 0.703795\nvt 0.876970 0.705478\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.841571 0.762427\nvt 0.821141 0.815537\nvt 0.821141 0.762427\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.950305 0.577296\nvt 0.935125 0.630406\nvt 0.935125 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.968537 0.762427\nvt 0.970896 0.815537\nvt 0.968537 0.815537\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.974635 0.762427\nvt 0.977791 0.709317\nvt 0.977791 0.762427\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.611715 0.577296\nvt 0.968537 0.815537\nvt 0.964125 0.762427\nvt 0.968537 0.762427\nvt 0.968537 0.709317\nvt 0.971711 0.762427\nvt 0.968537 0.762427\nvt 0.821141 0.815537\nvt 0.816353 0.762427\nvt 0.821141 0.762427\nvt 0.932432 0.709317\nvt 0.937412 0.762427\nvt 0.932432 0.762427\nvt 0.774161 0.709317\nvt 0.776520 0.762427\nvt 0.774161 0.762427\nvt 0.905833 0.630406\nvt 0.909701 0.683516\nvt 0.905833 0.683516\nvt 0.611715 0.709317\nvt 0.612205 0.762427\nvt 0.611715 0.762427\nvt 0.844098 0.762427\nvt 0.847272 0.815537\nvt 0.844098 0.815537\nvt 0.772477 0.762427\nvt 0.773929 0.815537\nvt 0.772477 0.815537\nvt 0.922029 0.762427\nvt 0.927008 0.815537\nvt 0.922029 0.815537\nvt 0.968537 0.762427\nvt 0.964125 0.709317\nvt 0.968537 0.709317\nvt 0.906008 0.577296\nvt 0.909875 0.630406\nvt 0.906007 0.630406\nvt 0.774161 0.762427\nvt 0.778949 0.815537\nvt 0.774161 0.815537\nvt 0.676792 0.762427\nvt 0.676301 0.709317\nvt 0.676792 0.709317\nvt 0.741793 0.709317\nvt 0.744152 0.762427\nvt 0.741793 0.762427\nvt 0.844098 0.815537\nvt 0.842646 0.762427\nvt 0.844098 0.762427\nvt 0.762671 0.752657\nvt 0.766935 0.719088\nvt 0.766935 0.752657\nvt 0.929134 0.620636\nvt 0.932201 0.587067\nvt 0.932201 0.620636\nvt 0.876215 0.686665\nvt 0.876099 0.694357\nvt 0.876099 0.683516\nvt 0.877435 0.683866\nvt 0.877490 0.706398\nvt 0.877435 0.706749\nvt 0.964272 0.630406\nvt 0.968140 0.683516\nvt 0.964272 0.683516\nvt 0.875561 0.700290\nvt 0.875750 0.697027\nvt 0.875750 0.703706\nvt 0.901616 0.772198\nvt 0.901142 0.805767\nvt 0.901142 0.772198\nvt 0.876389 0.686277\nvt 0.876475 0.698104\nvt 0.876389 0.700865\nvt 0.881203 0.762427\nvt 0.886182 0.815537\nvt 0.881203 0.815537\nvt 0.875750 0.686665\nvt 0.875866 0.694357\nvt 0.875750 0.697507\nvt 0.875445 0.752657\nvt 0.879183 0.719088\nvt 0.879183 0.752657\nvt 0.875016 0.703195\nvt 0.875372 0.704497\nvt 0.875016 0.706750\nvt 0.901616 0.762427\nvt 0.898442 0.709317\nvt 0.901616 0.709317\nvt 0.877267 0.706556\nvt 0.877324 0.683516\nvt 0.877324 0.705519\nvt 0.627165 0.752657\nvt 0.631977 0.719088\nvt 0.631977 0.752657\nvt 0.876704 0.703557\nvt 0.876633 0.683516\nvt 0.876704 0.685782\nvt 0.841923 0.762427\nvt 0.842414 0.815537\nvt 0.841923 0.815537\nvt 0.876633 0.683516\nvt 0.876562 0.703557\nvt 0.876562 0.685782\nvt 0.928959 0.673746\nvt 0.932027 0.640176\nvt 0.932027 0.673746\nvt 0.877380 0.683516\nvt 0.877324 0.706749\nvt 0.877324 0.683866\nvt 0.973135 0.630406\nvt 0.969267 0.577296\nvt 0.973135 0.577296\nvt 0.877435 0.706749\nvt 0.877380 0.683516\nvt 0.877435 0.683866\nvt 0.922029 0.772198\nvt 0.921555 0.805767\nvt 0.921555 0.772198\nvt 0.876302 0.686277\nvt 0.876389 0.698104\nvt 0.876302 0.700865\nvt 0.901616 0.762427\nvt 0.906595 0.815537\nvt 0.901616 0.815537\nvt 0.877095 0.685200\nvt 0.877033 0.703795\nvt 0.877033 0.683516\nvt 0.901187 0.587067\nvt 0.897449 0.620636\nvt 0.897449 0.587066\nvt 0.875372 0.683516\nvt 0.875017 0.689325\nvt 0.875016 0.685769\nvt 0.875016 0.577296\nvt 0.878190 0.630406\nvt 0.875016 0.630406\nvt 0.875372 0.690195\nvt 0.875561 0.686932\nvt 0.875561 0.693611\nvt 0.796016 0.805767\nvt 0.797419 0.772198\nvt 0.797419 0.805767\nvt 0.876775 0.701291\nvt 0.876846 0.685782\nvt 0.876846 0.703557\nvt 0.950305 0.577296\nvt 0.955093 0.630406\nvt 0.950305 0.630406\nvt 0.661342 0.719088\nvt 0.656530 0.752657\nvt 0.656530 0.719088\nvt 0.720547 0.772198\nvt 0.718267 0.805767\nvt 0.718267 0.772198\nvt 0.875750 0.690195\nvt 0.875561 0.686932\nvt 0.875750 0.683516\nvt 0.795038 0.752657\nvt 0.799303 0.719088\nvt 0.799303 0.752657\nvt 0.695336 0.762427\nvt 0.699748 0.815537\nvt 0.695336 0.815537\nvt 0.686146 0.752657\nvt 0.690774 0.719088\nvt 0.690774 0.752657\nvt 0.976472 0.815537\nvt 0.974113 0.762427\nvt 0.976472 0.762427\nvt 0.876562 0.686277\nvt 0.876475 0.698104\nvt 0.876475 0.683516\nvt 0.732439 0.719088\nvt 0.727812 0.752657\nvt 0.727812 0.719088\nvt 0.709293 0.762427\nvt 0.707840 0.709317\nvt 0.709293 0.709317\nvt 0.876215 0.698104\nvt 0.876302 0.686277\nvt 0.876302 0.700865\nvt 0.799286 0.772198\nvt 0.797883 0.805767\nvt 0.797883 0.772198\nvt 0.875983 0.694357\nvt 0.876099 0.686665\nvt 0.876099 0.697507\nvt 0.709293 0.709317\nvt 0.710745 0.762427\nvt 0.709293 0.762427\nvt 0.672405 0.805767\nvt 0.668517 0.810652\nvt 0.670125 0.805767\nvt 0.684025 0.814228\nvt 0.670573 0.814228\nvt 0.690924 0.815537\nvt 0.675743 0.815537\nvt 0.668517 0.767313\nvt 0.670125 0.772198\nvt 0.956899 0.767312\nvt 0.958955 0.814228\nvt 0.956899 0.810652\nvt 0.964125 0.815537\nvt 0.677247 0.767313\nvt 0.672405 0.772198\nvt 0.684025 0.763736\nvt 0.670573 0.763736\nvt 0.677247 0.810652\nvt 0.905313 0.582181\nvt 0.883948 0.578605\nvt 0.906007 0.578605\nvt 0.903084 0.577296\nvt 0.905313 0.625521\nvt 0.901187 0.620636\nvt 0.906007 0.629097\nvt 0.974635 0.710626\nvt 0.971711 0.709317\nvt 0.890997 0.625521\nvt 0.883948 0.629097\nvt 0.903084 0.630406\nvt 0.890997 0.582181\nvt 0.878190 0.577296\nvt 0.797651 0.767313\nvt 0.803026 0.767313\nvt 0.800990 0.763736\nvt 0.809273 0.763736\nvt 0.803026 0.810652\nvt 0.799286 0.805767\nvt 0.809273 0.814228\nvt 0.816353 0.815537\nvt 0.797651 0.810652\nvt 0.800990 0.814228\nvt 0.807005 0.815537\nvt 0.964272 0.635291\nvt 0.960933 0.682207\nvt 0.960933 0.631715\nvt 0.954918 0.630406\nvt 0.919059 0.767313\nvt 0.920875 0.767313\nvt 0.916381 0.763736\nvt 0.913584 0.763736\nvt 0.909752 0.762427\nvt 0.949688 0.752657\nvt 0.948534 0.714203\nvt 0.949688 0.719088\nvt 0.948534 0.757542\nvt 0.944041 0.710626\nvt 0.937412 0.709317\nvt 0.920875 0.810652\nvt 0.919059 0.810652\nvt 0.916381 0.814228\nvt 0.913584 0.814228\nvt 0.909752 0.815537\nvt 0.906595 0.762427\nvt 0.788140 0.757542\nvt 0.806529 0.761118\nvt 0.781362 0.761118\nvt 0.788140 0.714203\nvt 0.795038 0.719088\nvt 0.781362 0.710626\nvt 0.776520 0.709317\nvt 0.804473 0.714203\nvt 0.806529 0.710626\nvt 0.804920 0.709317\nvt 0.804473 0.757542\nvt 0.972505 0.763736\nvt 0.974113 0.815537\nvt 0.972505 0.814228\nvt 0.923202 0.678631\nvt 0.934256 0.682207\nvt 0.916153 0.682207\nvt 0.923202 0.635291\nvt 0.928959 0.640176\nvt 0.916153 0.631715\nvt 0.909701 0.630406\nvt 0.934950 0.635291\nvt 0.934256 0.631715\nvt 0.930130 0.630406\nvt 0.934950 0.678631\nvt 0.964447 0.582181\nvt 0.965141 0.629097\nvt 0.964447 0.625521\nvt 0.965141 0.578605\nvt 0.969267 0.630406\nvt 0.638606 0.757542\nvt 0.620176 0.757542\nvt 0.643100 0.761118\nvt 0.614700 0.761118\nvt 0.620176 0.714203\nvt 0.627165 0.719088\nvt 0.614700 0.710626\nvt 0.612205 0.709317\nvt 0.638606 0.714203\nvt 0.643100 0.710626\nvt 0.644253 0.709317\nvt 0.644253 0.762427\nvt 0.885635 0.757542\nvt 0.871319 0.757542\nvt 0.870625 0.761118\nvt 0.898442 0.762427\nvt 0.873548 0.762427\nvt 0.871319 0.714203\nvt 0.875445 0.719088\nvt 0.870625 0.710626\nvt 0.850195 0.763736\nvt 0.847272 0.762427\nvt 0.885635 0.714203\nvt 0.892684 0.710626\nvt 0.892684 0.761118\nvt 0.720732 0.714203\nvt 0.738454 0.714203\nvt 0.741793 0.710626\nvt 0.710745 0.709317\nvt 0.741562 0.709317\nvt 0.738454 0.757542\nvt 0.732439 0.752657\nvt 0.741793 0.761118\nvt 0.774161 0.763736\nvt 0.773929 0.762427\nvt 0.720732 0.757542\nvt 0.714485 0.761118\nvt 0.714485 0.710626\nvt 0.900462 0.767313\nvt 0.893171 0.763736\nvt 0.895969 0.763736\nvt 0.889339 0.762427\nvt 0.939284 0.805767\nvt 0.938131 0.767313\nvt 0.939284 0.772198\nvt 0.938131 0.810652\nvt 0.933637 0.763736\nvt 0.927008 0.762427\nvt 0.900462 0.810652\nvt 0.898647 0.810652\nvt 0.893171 0.814228\nvt 0.889339 0.815537\nvt 0.898647 0.767313\nvt 0.886182 0.762427\nvt 0.713425 0.767313\nvt 0.722155 0.767313\nvt 0.720099 0.763736\nvt 0.699748 0.762427\nvt 0.714929 0.762427\nvt 0.722155 0.810652\nvt 0.720547 0.805767\nvt 0.956899 0.714203\nvt 0.958955 0.761118\nvt 0.956899 0.757542\nvt 0.964125 0.762427\nvt 0.713425 0.810652\nvt 0.720099 0.814228\nvt 0.706647 0.814228\nvt 0.706647 0.763736\nvt 0.935125 0.625521\nvt 0.923376 0.625521\nvt 0.934430 0.629097\nvt 0.916327 0.629097\nvt 0.923376 0.582181\nvt 0.929134 0.587067\nvt 0.916327 0.578605\nvt 0.909875 0.577296\nvt 0.935125 0.582181\nvt 0.934430 0.578605\nvt 0.930304 0.577296\nvt 0.972960 0.678631\nvt 0.972266 0.631715\nvt 0.972960 0.635291\nvt 0.972266 0.682207\nvt 0.968140 0.630406\nvt 0.797651 0.810652\nvt 0.792275 0.810652\nvt 0.786028 0.814228\nvt 0.794312 0.814228\nvt 0.792275 0.767313\nvt 0.796016 0.772198\nvt 0.786028 0.763736\nvt 0.778949 0.762427\nvt 0.797651 0.767313\nvt 0.794312 0.763736\nvt 0.788296 0.762427\nvt 0.964447 0.625521\nvt 0.961108 0.578605\nvt 0.964447 0.582181\nvt 0.961108 0.629097\nvt 0.955093 0.577296\nvt 0.649901 0.714203\nvt 0.668331 0.714203\nvt 0.645407 0.710626\nvt 0.673806 0.710626\nvt 0.661342 0.752657\nvt 0.668331 0.757542\nvt 0.673806 0.761118\nvt 0.676301 0.762427\nvt 0.649901 0.757542\nvt 0.645407 0.761118\nvt 0.644253 0.762427\nvt 0.644253 0.709317\nvt 0.772105 0.757542\nvt 0.755772 0.757542\nvt 0.774161 0.761118\nvt 0.748994 0.761118\nvt 0.755772 0.714203\nvt 0.762671 0.719088\nvt 0.748994 0.710626\nvt 0.744152 0.709317\nvt 0.772105 0.714203\nvt 0.774161 0.710626\nvt 0.772552 0.709317\nvt 0.972505 0.814228\nvt 0.970896 0.762427\nvt 0.972505 0.763736\nvt 0.680131 0.757542\nvt 0.704100 0.761118\nvt 0.676792 0.761118\nvt 0.707840 0.762427\nvt 0.677024 0.762427\nvt 0.680131 0.714203\nvt 0.686146 0.719088\nvt 0.676792 0.710626\nvt 0.842414 0.814228\nvt 0.842646 0.815537\nvt 0.697853 0.714203\nvt 0.704100 0.710626\nvt 0.697853 0.757542\nvt 0.354104 0.779145\nvt 0.354104 0.647534\nvt 0.354104 0.669897\nvt 0.226647 0.812843\nvt 0.198455 0.765703\nvt 0.226647 0.756783\nvt 0.309061 0.669897\nvt 0.238386 0.756783\nvt 0.238386 0.647534\nvt 0.198455 0.808190\nvt 0.167710 0.756783\nvt 0.167710 0.756783\nvt 0.249168 0.808190\nvt 0.271690 0.756783\nvt 0.271690 0.808190\nvt 0.026359 0.647534\nvt 0.026359 0.647534\nvt 0.026359 0.647534\nvt 0.167710 0.669897\nvt 0.238386 0.756783\nvt 0.167710 0.756783\nvt 0.061697 0.811407\nvt 0.097035 0.756783\nvt 0.097035 0.866032\nvt 0.026359 0.975280\nvt 0.097035 0.975280\nvt 0.097035 0.647534\nvt 0.026359 0.647534\nvt 0.026359 0.888394\nvt 0.026359 0.734421\nvt 0.097035 0.647535\nvt 0.167710 0.801507\nvt 0.097035 0.801507\nvt 0.354104 0.647534\nvt 0.331583 0.801507\nvt 0.331583 0.647535\nvt 0.249168 0.756783\nvt 0.226647 0.808190\nvt 0.226647 0.756783\nvt 0.328806 0.725042\nvt 0.328826 0.738673\nvt 0.309061 0.801507\nvt 0.039880 0.281560\nvt 0.042629 0.302031\nvt 0.039880 0.302031\nvt 0.039881 0.264152\nvt 0.042629 0.281560\nvt 0.048128 0.284622\nvt 0.045379 0.264152\nvt 0.048128 0.264152\nvt 0.048128 0.307367\nvt 0.045379 0.284622\nvt 0.048128 0.331514\nvt 0.045379 0.307368\nvt 0.048128 0.356133\nvt 0.045379 0.331514\nvt 0.048128 0.380280\nvt 0.045379 0.356134\nvt 0.048128 0.403025\nvt 0.045379 0.380280\nvt 0.048128 0.423496\nvt 0.045379 0.403025\nvt 0.048128 0.440905\nvt 0.045379 0.423496\nvt 0.045379 0.284622\nvt 0.042630 0.264152\nvt 0.045379 0.264152\nvt 0.045379 0.307367\nvt 0.042630 0.284622\nvt 0.045379 0.331514\nvt 0.042630 0.307367\nvt 0.045379 0.356134\nvt 0.042630 0.331514\nvt 0.045379 0.380280\nvt 0.042630 0.356134\nvt 0.045379 0.403026\nvt 0.042630 0.380280\nvt 0.045379 0.423496\nvt 0.042630 0.403026\nvt 0.045379 0.440905\nvt 0.042630 0.423496\nvt 0.037131 0.422158\nvt 0.039880 0.441672\nvt 0.037131 0.441672\nvt 0.037131 0.400090\nvt 0.039880 0.422158\nvt 0.037131 0.376317\nvt 0.039880 0.400090\nvt 0.037131 0.351752\nvt 0.039880 0.376317\nvt 0.038551 0.327339\nvt 0.039880 0.327339\nvt 0.039880 0.351752\nvt 0.037131 0.327339\nvt 0.038345 0.320266\nvt 0.038382 0.323401\nvt 0.037131 0.282681\nvt 0.038314 0.289763\nvt 0.038291 0.293750\nvt 0.038520 0.279821\nvt 0.038472 0.280221\nvt 0.037131 0.264152\nvt 0.039880 0.420434\nvt 0.042630 0.440904\nvt 0.039880 0.440904\nvt 0.039880 0.397689\nvt 0.042629 0.420434\nvt 0.039880 0.373542\nvt 0.042629 0.397689\nvt 0.039880 0.348923\nvt 0.042629 0.373542\nvt 0.359695 0.162309\nvt 0.363517 0.161420\nvt 0.388919 0.259349\nvt 0.039880 0.324776\nvt 0.042629 0.348923\nvt 0.042629 0.324776\nvt 0.149774 0.161419\nvt 0.153375 0.159675\nvt 0.175176 0.259348\nvt 0.441102 0.033592\nvt 0.446514 0.051708\nvt 0.441102 0.051708\nvt 0.441102 0.018186\nvt 0.446514 0.033592\nvt 0.457339 0.036302\nvt 0.451927 0.018186\nvt 0.457339 0.018186\nvt 0.457339 0.056431\nvt 0.451927 0.036302\nvt 0.457339 0.077800\nvt 0.451927 0.056431\nvt 0.457339 0.099588\nvt 0.451927 0.077800\nvt 0.457339 0.120957\nvt 0.451927 0.099588\nvt 0.457339 0.141087\nvt 0.451927 0.120957\nvt 0.457339 0.159203\nvt 0.451927 0.141087\nvt 0.457339 0.174609\nvt 0.451927 0.159203\nvt 0.451926 0.036302\nvt 0.446515 0.018186\nvt 0.451927 0.018186\nvt 0.451926 0.056431\nvt 0.446515 0.036302\nvt 0.451926 0.077800\nvt 0.446514 0.056431\nvt 0.451926 0.099588\nvt 0.446514 0.077800\nvt 0.451926 0.120957\nvt 0.446514 0.099588\nvt 0.451926 0.141087\nvt 0.446514 0.120957\nvt 0.451926 0.159203\nvt 0.446514 0.141087\nvt 0.451927 0.174609\nvt 0.446515 0.159203\nvt 0.435690 0.158018\nvt 0.441101 0.175288\nvt 0.435690 0.175288\nvt 0.435690 0.138489\nvt 0.441101 0.158018\nvt 0.435690 0.117450\nvt 0.441101 0.138489\nvt 0.435690 0.095711\nvt 0.441101 0.117450\nvt 0.438486 0.074106\nvt 0.441101 0.074106\nvt 0.441101 0.095711\nvt 0.435690 0.074106\nvt 0.438079 0.067847\nvt 0.438153 0.070621\nvt 0.435690 0.034584\nvt 0.438018 0.040852\nvt 0.437973 0.044380\nvt 0.438425 0.032053\nvt 0.438329 0.032407\nvt 0.435690 0.018186\nvt 0.441102 0.156493\nvt 0.446514 0.174609\nvt 0.441102 0.174609\nvt 0.441102 0.136364\nvt 0.446514 0.156493\nvt 0.441101 0.114994\nvt 0.446513 0.136364\nvt 0.441101 0.093207\nvt 0.446513 0.114994\nvt 0.236661 0.330317\nvt 0.229135 0.329530\nvt 0.246021 0.239401\nvt 0.441102 0.071837\nvt 0.446513 0.093207\nvt 0.446513 0.071837\nvt 0.187842 0.134767\nvt 0.190779 0.138494\nvt 0.022993 0.161057\nvt 0.708708 0.862222\nvt 0.709450 0.877399\nvt 0.708708 0.877399\nvt 0.708708 0.847914\nvt 0.709450 0.862222\nvt 0.708708 0.835024\nvt 0.709450 0.847914\nvt 0.708708 0.824047\nvt 0.709450 0.835024\nvt 0.709450 0.921970\nvt 0.710192 0.909356\nvt 0.710192 0.921970\nvt 0.709450 0.909356\nvt 0.710192 0.895354\nvt 0.709450 0.880503\nvt 0.709450 0.895354\nvt 0.709450 0.865374\nvt 0.710192 0.880503\nvt 0.709450 0.850547\nvt 0.710192 0.865374\nvt 0.709450 0.836592\nvt 0.710192 0.850547\nvt 0.709450 0.824047\nvt 0.710192 0.836592\nvt 0.708708 0.834937\nvt 0.707966 0.824047\nvt 0.708708 0.824047\nvt 0.708707 0.847760\nvt 0.707966 0.834937\nvt 0.708707 0.862022\nvt 0.707966 0.847760\nvt 0.708707 0.877175\nvt 0.707965 0.862022\nvt 0.708707 0.892637\nvt 0.707965 0.877175\nvt 0.708707 0.907814\nvt 0.707965 0.892637\nvt 0.708708 0.922123\nvt 0.707965 0.907814\nvt 0.708708 0.935013\nvt 0.707966 0.922123\nvt 0.708708 0.945990\nvt 0.707966 0.935013\nvt 0.710934 0.836661\nvt 0.710192 0.824047\nvt 0.710934 0.824047\nvt 0.710934 0.850663\nvt 0.710192 0.836661\nvt 0.710934 0.865514\nvt 0.710192 0.850663\nvt 0.710934 0.880644\nvt 0.710192 0.865514\nvt 0.710934 0.895470\nvt 0.710192 0.880644\nvt 0.710934 0.909425\nvt 0.710192 0.895470\nvt 0.710934 0.921970\nvt 0.710192 0.909425\nvt 0.708708 0.935099\nvt 0.709450 0.945990\nvt 0.708708 0.945990\nvt 0.708708 0.922277\nvt 0.709450 0.935099\nvt 0.708708 0.908015\nvt 0.709450 0.922277\nvt 0.844784 0.768096\nvt 0.826271 0.762366\nvt 0.828321 0.750887\nvt 0.708708 0.892861\nvt 0.709450 0.908015\nvt 0.709450 0.892861\nvt 0.971393 0.695739\nvt 0.979026 0.708632\nvt 0.855403 0.708043\nvt 0.610546 0.241807\nvt 0.559050 0.237781\nvt 0.697336 0.237781\nvt 0.697336 0.221196\nvt 0.559050 0.221196\nvt 0.697336 0.205573\nvt 0.559050 0.205573\nvt 0.697336 0.191513\nvt 0.762901 0.274586\nvt 0.779595 0.391055\nvt 0.762901 0.391055\nvt 0.779595 0.274586\nvt 0.798144 0.391055\nvt 0.798144 0.274586\nvt 0.817836 0.391055\nvt 0.817836 0.274586\nvt 0.837913 0.391055\nvt 0.837913 0.274586\nvt 0.857605 0.391055\nvt 0.857605 0.274586\nvt 0.876154 0.391055\nvt 0.876154 0.274586\nvt 0.892848 0.391055\nvt 0.901187 0.153184\nvt 0.762901 0.167244\nvt 0.762901 0.153184\nvt 0.901187 0.167244\nvt 0.762901 0.182866\nvt 0.901187 0.182866\nvt 0.762901 0.199451\nvt 0.901187 0.216361\nvt 0.762901 0.216361\nvt 0.762901 0.232946\nvt 0.901187 0.232946\nvt 0.762901 0.248569\nvt 0.901187 0.248569\nvt 0.762901 0.262629\nvt 0.901187 0.262629\nvt 0.762901 0.274586\nvt 0.901187 0.019824\nvt 0.762901 0.031781\nvt 0.762901 0.019824\nvt 0.901187 0.045841\nvt 0.762901 0.045841\nvt 0.762901 0.061464\nvt 0.901187 0.061464\nvt 0.762901 0.078049\nvt 0.901187 0.078049\nvt 0.762901 0.094959\nvt 0.901187 0.094959\nvt 0.762901 0.111544\nvt 0.901187 0.111544\nvt 0.762901 0.127166\nvt 0.901187 0.127166\nvt 0.762901 0.141227\nvt 0.901187 0.153184\nvt 0.762901 0.153184\nvt 0.559050 0.312915\nvt 0.697336 0.300958\nvt 0.697336 0.312915\nvt 0.559050 0.300958\nvt 0.697336 0.286898\nvt 0.559050 0.286898\nvt 0.697336 0.271275\nvt 0.559050 0.271275\nvt 0.610546 0.267326\nvt 0.581805 0.160391\nvt 0.596002 0.038989\nvt 0.740146 0.050946\nvt 0.720428 0.739442\nvt 0.707965 0.738120\nvt 0.722479 0.727963\nvt 0.968728 0.175537\nvt 0.965404 0.158952\nvt 0.968728 0.158952\nvt 0.965404 0.187494\nvt 0.962080 0.170909\nvt 0.965404 0.170909\nvt 0.255556 0.115739\nvt 0.250130 0.112887\nvt 0.359415 0.042879\nvt 0.965404 0.141227\nvt 0.962080 0.155287\nvt 0.962080 0.141227\nvt 0.753370 0.217530\nvt 0.750046 0.203470\nvt 0.753370 0.203470\nvt 0.962080 0.129269\nvt 0.965404 0.129269\nvt 0.753370 0.266648\nvt 0.750046 0.249738\nvt 0.753370 0.249738\nvt 0.753370 0.312915\nvt 0.750046 0.298855\nvt 0.753370 0.298855\nvt 0.750046 0.283233\nvt 0.753370 0.283233\nvt 0.753371 0.324873\nvt 0.750046 0.312915\nvt 0.965404 0.155287\nvt 0.968728 0.250672\nvt 0.965404 0.238715\nvt 0.968728 0.238715\nvt 0.968728 0.224655\nvt 0.965404 0.209032\nvt 0.968728 0.209032\nvt 0.968743 0.296940\nvt 0.965419 0.280355\nvt 0.968743 0.280355\nvt 0.753370 0.233152\nvt 0.750046 0.233152\nvt 0.965404 0.204404\nvt 0.962080 0.187494\nvt 0.968743 0.330434\nvt 0.965419 0.346057\nvt 0.965419 0.330434\nvt 0.965419 0.264732\nvt 0.968743 0.264732\nvt 0.750046 0.217530\nvt 0.965404 0.224655\nvt 0.213936 0.369701\nvt 0.221462 0.370488\nvt 0.204577 0.460617\nvt 0.965404 0.192447\nvt 0.968728 0.192447\nvt 0.968743 0.360117\nvt 0.968743 0.346057\nvt 0.965404 0.175537\nvt 0.965419 0.313849\nvt 0.968743 0.313849\nvt 0.965404 0.143329\nvt 0.968728 0.143329\nvt 0.965419 0.250672\nvt 0.968743 0.250672\nvt 0.965404 0.250672\nvt 0.962080 0.236612\nvt 0.965404 0.236612\nvt 0.965404 0.220989\nvt 0.962080 0.204404\nvt 0.965419 0.296940\nvt 0.750046 0.266648\nvt 0.962080 0.220989\nvt 0.965404 0.129269\nvt 0.968728 0.129269\nvt 0.753370 0.191513\nvt 0.750046 0.191513\nvt 0.750046 0.233152\nvt 0.746707 0.217530\nvt 0.750046 0.217530\nvt 0.760048 0.254691\nvt 0.756709 0.237781\nvt 0.760048 0.237781\nvt 0.760048 0.205573\nvt 0.756709 0.191513\nvt 0.760048 0.191513\nvt 0.131389 0.121194\nvt 0.128633 0.124417\nvt 0.060990 0.059496\nvt 0.965419 0.313849\nvt 0.962080 0.296940\nvt 0.965419 0.296940\nvt 0.760048 0.300958\nvt 0.756709 0.286898\nvt 0.760048 0.286898\nvt 0.965419 0.346057\nvt 0.962080 0.330434\nvt 0.965419 0.330434\nvt 0.750046 0.266648\nvt 0.746707 0.249738\nvt 0.750046 0.249738\nvt 0.756709 0.249738\nvt 0.753371 0.233153\nvt 0.756709 0.233153\nvt 0.965419 0.280355\nvt 0.962080 0.280355\nvt 0.756709 0.203470\nvt 0.753371 0.191513\nvt 0.756709 0.191513\nvt 0.962080 0.313849\nvt 0.756709 0.217530\nvt 0.753371 0.203470\nvt 0.760048 0.271275\nvt 0.756709 0.254691\nvt 0.750046 0.324873\nvt 0.746707 0.312915\nvt 0.750046 0.312915\nvt 0.355797 0.116028\nvt 0.351974 0.116917\nvt 0.326573 0.018988\nvt 0.746707 0.283233\nvt 0.746707 0.266648\nvt 0.756709 0.283233\nvt 0.753371 0.266648\nvt 0.756709 0.266648\nvt 0.756709 0.221196\nvt 0.756709 0.205573\nvt 0.746708 0.203470\nvt 0.750046 0.203470\nvt 0.750046 0.298855\nvt 0.750046 0.283233\nvt 0.746708 0.191513\nvt 0.750046 0.191513\nvt 0.746707 0.233153\nvt 0.746707 0.298855\nvt 0.965419 0.264732\nvt 0.962080 0.250672\nvt 0.965419 0.250672\nvt 0.760048 0.221196\nvt 0.760048 0.312915\nvt 0.756709 0.300958\nvt 0.962080 0.264732\nvt 0.753371 0.217530\nvt 0.753371 0.249738\nvt 0.756709 0.271275\nvt 0.756709 0.312915\nvt 0.753371 0.298855\nvt 0.756709 0.298855\nvt 0.753371 0.283233\nvt 0.965419 0.360117\nvt 0.962080 0.346057\nvt 0.905646 0.019824\nvt 0.907953 0.438749\nvt 0.905646 0.438941\nvt 0.907953 0.019824\nvt 0.910585 0.438531\nvt 0.931341 0.019824\nvt 0.930475 0.439214\nvt 0.930475 0.019824\nvt 0.910585 0.019824\nvt 0.913440 0.438294\nvt 0.952682 0.439311\nvt 0.949827 0.020841\nvt 0.952682 0.020604\nvt 0.929068 0.019824\nvt 0.927175 0.438941\nvt 0.927175 0.019824\nvt 0.949827 0.439311\nvt 0.946857 0.021087\nvt 0.913440 0.019824\nvt 0.916410 0.438048\nvt 0.957621 0.439311\nvt 0.955314 0.020385\nvt 0.957621 0.020194\nvt 0.941031 0.439311\nvt 0.943887 0.020841\nvt 0.943887 0.439311\nvt 0.924868 0.019824\nvt 0.922236 0.438531\nvt 0.922236 0.019824\nvt 0.929068 0.439098\nvt 0.919380 0.019824\nvt 0.916410 0.019824\nvt 0.901187 0.019824\nvt 0.901480 0.439286\nvt 0.901187 0.439311\nvt 0.903753 0.019824\nvt 0.903753 0.439098\nvt 0.959514 0.439311\nvt 0.959514 0.020037\nvt 0.961787 0.439311\nvt 0.960921 0.019920\nvt 0.961787 0.019848\nvt 0.931634 0.019824\nvt 0.931341 0.439286\nvt 0.932792 0.439311\nvt 0.934199 0.020037\nvt 0.934199 0.439311\nvt 0.955314 0.439311\nvt 0.938399 0.439311\nvt 0.941031 0.020604\nvt 0.901480 0.019824\nvt 0.902346 0.439214\nvt 0.919380 0.438294\nvt 0.330914 0.725042\nvt 0.330893 0.711411\nvt 0.331583 0.647535\nvt 0.962080 0.439311\nvt 0.962080 0.019824\nvt 0.946857 0.439311\nvt 0.924868 0.438749\nvt 0.931926 0.439311\nvt 0.932792 0.019920\nvt 0.931634 0.439311\nvt 0.931926 0.019848\nvt 0.936092 0.439311\nvt 0.938399 0.020385\nvt 0.960921 0.439311\nvt 0.936092 0.020194\nvt 0.902346 0.019824\nvt 0.615566 0.578109\nvt 0.743366 0.577296\nvt 0.743366 0.578565\nvt 0.618121 0.596631\nvt 0.743366 0.588421\nvt 0.743366 0.596631\nvt 0.616989 0.588421\nvt 0.743366 0.582321\nvt 0.743905 0.578565\nvt 0.875016 0.577296\nvt 0.875016 0.578565\nvt 0.747798 0.704293\nvt 0.875016 0.708049\nvt 0.747280 0.708049\nvt 0.747217 0.708504\nvt 0.875016 0.709317\nvt 0.749772 0.689984\nvt 0.875016 0.698193\nvt 0.748640 0.698193\nvt 0.755072 0.643308\nvt 0.875016 0.630430\nvt 0.875016 0.643308\nvt 0.623422 0.643308\nvt 0.743366 0.656186\nvt 0.621645 0.656186\nvt 0.747217 0.586362\nvt 0.875016 0.582321\nvt 0.875016 0.588421\nvt 0.623991 0.639181\nvt 0.743366 0.630430\nvt 0.743366 0.643308\nvt 0.753296 0.630430\nvt 0.875016 0.618047\nvt 0.751152 0.679981\nvt 0.875016 0.689984\nvt 0.619937 0.668569\nvt 0.743366 0.679981\nvt 0.618363 0.679981\nvt 0.438832 0.064466\nvt 0.438877 0.060609\nvt 0.752726 0.668569\nvt 0.875016 0.679981\nvt 0.619501 0.606634\nvt 0.743366 0.606634\nvt 0.750013 0.606634\nvt 0.875016 0.596631\nvt 0.875016 0.606634\nvt 0.745500 0.582321\nvt 0.621075 0.618046\nvt 0.743366 0.618046\nvt 0.743366 0.689984\nvt 0.616983 0.689984\nvt 0.615566 0.700252\nvt 0.743366 0.698193\nvt 0.743366 0.704293\nvt 0.755642 0.647434\nvt 0.875016 0.656186\nvt 0.875016 0.704293\nvt 0.612254 0.708049\nvt 0.743366 0.709317\nvt 0.611715 0.709317\nvt 0.616148 0.582321\nvt 0.743366 0.668569\nvt 0.751588 0.618047\nvt 0.613850 0.704293\nvt 0.743366 0.708049\nvt 0.754434 0.656186\nvt 0.875016 0.668569\nvt 0.622784 0.630430\nvt 0.748634 0.596631\nvt 0.438877 0.044380\nvt 0.438832 0.040852\nvt 0.441101 0.034584\nvt 0.615850 0.698193\nvt 0.629203 0.616500\nvt 0.749845 0.615733\nvt 0.749845 0.616929\nvt 0.631615 0.633953\nvt 0.749845 0.626217\nvt 0.749845 0.633953\nvt 0.630546 0.626217\nvt 0.749845 0.620469\nvt 0.873613 0.738943\nvt 0.749845 0.740138\nvt 0.749845 0.738943\nvt 0.038727 0.316446\nvt 0.038750 0.312088\nvt 0.869938 0.620468\nvt 0.749845 0.616928\nvt 0.870427 0.616928\nvt 0.870486 0.616499\nvt 0.868074 0.633951\nvt 0.749845 0.626216\nvt 0.869143 0.626216\nvt 0.863071 0.677935\nvt 0.749845 0.690070\nvt 0.749845 0.677935\nvt 0.636618 0.677937\nvt 0.749845 0.690072\nvt 0.634941 0.690072\nvt 0.870486 0.731596\nvt 0.749845 0.735403\nvt 0.749845 0.729655\nvt 0.637156 0.674049\nvt 0.749845 0.665802\nvt 0.749845 0.677937\nvt 0.864748 0.690070\nvt 0.749845 0.701739\nvt 0.866772 0.643377\nvt 0.749845 0.633951\nvt 0.633329 0.701741\nvt 0.749845 0.712495\nvt 0.631843 0.712495\nvt 0.865286 0.654131\nvt 0.749845 0.643377\nvt 0.632917 0.643379\nvt 0.749845 0.643379\nvt 0.867846 0.712493\nvt 0.749845 0.721919\nvt 0.749845 0.712493\nvt 0.872107 0.735403\nvt 0.634403 0.654133\nvt 0.749845 0.654133\nvt 0.749845 0.721920\nvt 0.630540 0.721920\nvt 0.629203 0.731596\nvt 0.749845 0.729656\nvt 0.749845 0.735404\nvt 0.862534 0.674047\nvt 0.749845 0.665800\nvt 0.749845 0.620468\nvt 0.626076 0.738943\nvt 0.625567 0.740138\nvt 0.038750 0.293750\nvt 0.038727 0.289763\nvt 0.039880 0.282681\nvt 0.629752 0.620469\nvt 0.749845 0.701741\nvt 0.866360 0.701739\nvt 0.627582 0.735404\nvt 0.749845 0.738943\nvt 0.863673 0.665800\nvt 0.749845 0.654131\nvt 0.636016 0.665802\nvt 0.869149 0.721919\nvt 0.629471 0.729656\nvt 0.746707 0.312915\nvt 0.730251 0.300958\nvt 0.746707 0.300958\nvt 0.730250 0.203470\nvt 0.713794 0.191513\nvt 0.730250 0.191513\nvt 0.962080 0.099586\nvt 0.978537 0.115209\nvt 0.962080 0.115209\nvt 0.218363 0.151050\nvt 0.219784 0.154807\nvt 0.063268 0.179768\nvt 0.713793 0.298855\nvt 0.697337 0.283233\nvt 0.713793 0.283233\nvt 0.730250 0.249738\nvt 0.713794 0.233153\nvt 0.730250 0.233153\nvt 0.713794 0.312915\nvt 0.697337 0.298855\nvt 0.713794 0.266648\nvt 0.713794 0.249738\nvt 0.713793 0.266648\nvt 0.697336 0.249738\nvt 0.713793 0.249738\nvt 0.730250 0.312915\nvt 0.713794 0.298855\nvt 0.730250 0.298855\nvt 0.697336 0.266648\nvt 0.978537 0.129269\nvt 0.962080 0.129269\nvt 0.962080 0.049507\nvt 0.978537 0.066092\nvt 0.962080 0.066092\nvt 0.746707 0.221196\nvt 0.730250 0.205573\nvt 0.746707 0.205573\nvt 0.746707 0.271275\nvt 0.730251 0.254691\nvt 0.746707 0.254691\nvt 0.697336 0.233153\nvt 0.713793 0.233152\nvt 0.730250 0.217530\nvt 0.713794 0.203470\nvt 0.697336 0.217530\nvt 0.713793 0.217530\nvt 0.978537 0.083002\nvt 0.962080 0.083002\nvt 0.713794 0.283233\nvt 0.730250 0.283233\nvt 0.730250 0.191513\nvt 0.746707 0.191513\nvt 0.226620 0.346775\nvt 0.222572 0.349959\nvt 0.078326 0.309425\nvt 0.730251 0.286898\nvt 0.746707 0.286898\nvt 0.978537 0.033884\nvt 0.978537 0.049507\nvt 0.730250 0.266648\nvt 0.730251 0.271275\nvt 0.746707 0.237781\nvt 0.730250 0.237781\nvt 0.730250 0.221196\nvt 0.962080 0.019824\nvt 0.962080 0.033884\nvt 0.713793 0.203470\nvt 0.697337 0.191513\nvt 0.713793 0.191513\nvt 0.713794 0.324873\nvt 0.697337 0.312915\nvt 0.713794 0.217530\nvt 0.978537 0.099587\nvt 0.697336 0.203470\nvt 0.634967 0.630480\nvt 0.751950 0.629802\nvt 0.751950 0.630860\nvt 0.637305 0.645930\nvt 0.751950 0.639082\nvt 0.751950 0.645930\nvt 0.636269 0.639082\nvt 0.751950 0.633994\nvt 0.752443 0.630860\nvt 0.872459 0.629802\nvt 0.872459 0.630860\nvt 0.756007 0.735734\nvt 0.872459 0.738868\nvt 0.755533 0.738868\nvt 0.755476 0.739247\nvt 0.872459 0.739925\nvt 0.757814 0.723799\nvt 0.872459 0.730646\nvt 0.756778 0.730646\nvt 0.458130 0.068988\nvt 0.458087 0.065638\nvt 0.460242 0.059688\nvt 0.762666 0.684864\nvt 0.872459 0.674123\nvt 0.872459 0.684865\nvt 0.642157 0.684864\nvt 0.751950 0.695607\nvt 0.640531 0.695607\nvt 0.755475 0.637364\nvt 0.872459 0.633994\nvt 0.872459 0.639082\nvt 0.642678 0.681423\nvt 0.751950 0.674122\nvt 0.751950 0.684865\nvt 0.761040 0.674123\nvt 0.872459 0.663793\nvt 0.759077 0.715455\nvt 0.872459 0.723799\nvt 0.458087 0.088059\nvt 0.458130 0.084397\nvt 0.638967 0.705936\nvt 0.751950 0.715455\nvt 0.637526 0.715455\nvt 0.760518 0.705936\nvt 0.872459 0.715455\nvt 0.638568 0.654274\nvt 0.751950 0.654274\nvt 0.758035 0.654274\nvt 0.872459 0.645930\nvt 0.872459 0.654274\nvt 0.753904 0.633994\nvt 0.640009 0.663793\nvt 0.751950 0.663793\nvt 0.751950 0.723799\nvt 0.636263 0.723799\nvt 0.634967 0.732364\nvt 0.751950 0.730646\nvt 0.751950 0.735734\nvt 0.763187 0.688306\nvt 0.872459 0.695607\nvt 0.872459 0.735734\nvt 0.631934 0.738868\nvt 0.751950 0.739925\nvt 0.631441 0.739925\nvt 0.635499 0.633994\nvt 0.751950 0.705936\nvt 0.759476 0.663793\nvt 0.633395 0.735734\nvt 0.751950 0.738868\nvt 0.762082 0.695606\nvt 0.872459 0.705936\nvt 0.641573 0.674122\nvt 0.756772 0.645930\nvt 0.635227 0.730646\nvt 0.979730 0.718422\nvt 0.979730 0.750235\nvt 0.979766 0.729164\nvt 0.979766 0.739906\nvt 0.979660 0.759754\nvt 0.979559 0.768098\nvt 0.979429 0.774946\nvt 0.979108 0.783168\nvt 0.978929 0.784226\nvt 0.978746 0.783168\nvt 0.978566 0.780035\nvt 0.978397 0.774947\nvt 0.978245 0.768099\nvt 0.978116 0.759756\nvt 0.977944 0.739907\nvt 0.977909 0.729165\nvt 0.977909 0.718423\nvt 0.977944 0.708094\nvt 0.978014 0.698574\nvt 0.978116 0.690230\nvt 0.978245 0.683383\nvt 0.978397 0.678294\nvt 0.978566 0.675161\nvt 0.978746 0.674103\nvt 0.978929 0.675161\nvt 0.979108 0.678294\nvt 0.979277 0.683382\nvt 0.979429 0.690230\nvt 0.979559 0.698573\nvt 0.925015 0.784226\nvt 0.873938 0.735120\nvt 0.786981 0.784226\nvt 0.874622 0.737783\nvt 0.874190 0.718404\nvt 0.809767 0.739925\nvt 0.873343 0.730074\nvt 0.872957 0.726824\nvt 0.878106 0.784226\nvt 0.661264 0.828527\nvt 0.665013 0.784226\nvt 0.846937 0.828527\nvt 0.874519 0.737622\nvt 0.878106 0.828527\nvt 0.780139 0.828527\nvt 0.943115 0.674103\nvt 0.874466 0.719268\nvt 0.872784 0.729974\nvt 0.900667 0.718404\nvt 0.874304 0.718404\nvt 0.874361 0.718404\nvt 0.657438 0.828527\nvt 0.872784 0.728094\nvt 0.868439 0.784226\nvt 0.976806 0.784226\nvt 0.874247 0.736723\nvt 0.915508 0.828527\nvt 0.943700 0.739925\nvt 0.841159 0.784226\nvt 0.873237 0.718404\nvt 0.874723 0.718404\nvt 0.872957 0.726824\nvt 0.925015 0.748075\nvt 0.873635 0.718404\nvt 0.873236 0.718404\nvt 0.872784 0.718404\nvt 0.874466 0.719268\nvt 0.874068 0.718404\nvt 0.874003 0.735120\nvt 0.874723 0.718696\nvt 0.874622 0.737491\nvt 0.934193 0.820377\nvt 0.873794 0.718404\nvt 0.874247 0.736723\nvt 0.872784 0.735904\nvt 0.872957 0.726824\nvt 0.873938 0.735120\nvt 0.872784 0.735244\nvt 0.873873 0.732875\nvt 0.873636 0.718404\nvt 0.873556 0.730074\nvt 0.964816 0.785318\nvt 0.702826 0.784226\nvt 0.757353 0.827435\nvt 0.898151 0.674103\nvt 0.826164 0.784226\nvt 0.937946 0.717312\nvt 0.922955 0.828527\nvt 0.781611 0.739925\nvt 0.922908 0.718404\nvt 0.781400 0.785318\nvt 0.894131 0.784226\nvt 0.722330 0.827435\nvt 0.720973 0.739925\nvt 0.939362 0.785318\nvt 0.936253 0.739925\nvt 0.959478 0.741017\nvt 0.743896 0.828527\nvt 0.859876 0.828527\nvt 0.778667 0.784226\nvt 0.927480 0.630894\nvt 0.691223 0.739925\nvt 0.465382 0.044118\nvt 0.470521 0.192635\nvt 0.465382 0.192635\nvt 0.457701 0.097496\nvt 0.457643 0.097212\nvt 0.455104 0.077615\nvt 0.457246 0.080423\nvt 0.457239 0.077615\nvt 0.457611 0.097066\nvt 0.457523 0.095860\nvt 0.457272 0.084397\nvt 0.457315 0.088059\nvt 0.457237 0.076404\nvt 0.457246 0.072624\nvt 0.457470 0.059688\nvt 0.457443 0.060292\nvt 0.457373 0.062702\nvt 0.460242 0.044118\nvt 0.457932 0.059688\nvt 0.457792 0.057620\nvt 0.457879 0.058616\nvt 0.457523 0.058616\nvt 0.382685 0.440741\nvt 0.349968 0.452234\nvt 0.272866 0.376400\nvt 0.313615 0.460150\nvt 0.266135 0.377866\nvt 0.275022 0.464186\nvt 0.235674 0.464186\nvt 0.258990 0.378613\nvt 0.197081 0.460150\nvt 0.251705 0.378613\nvt 0.160728 0.452234\nvt 0.244559 0.377866\nvt 0.128010 0.440741\nvt 0.237829 0.376400\nvt 0.100187 0.426114\nvt 0.231771 0.374272\nvt 0.226620 0.371564\nvt 0.410509 0.426114\nvt 0.278924 0.374272\nvt 0.455104 0.369512\nvt 0.447428 0.389802\nvt 0.290911 0.364841\nvt 0.447428 0.328537\nvt 0.455104 0.348826\nvt 0.290911 0.353498\nvt 0.292332 0.357254\nvt 0.410509 0.292225\nvt 0.432370 0.309425\nvt 0.288123 0.349959\nvt 0.284075 0.346774\nvt 0.292332 0.361084\nvt 0.455104 0.138792\nvt 0.455104 0.159479\nvt 0.292332 0.147220\nvt 0.290911 0.143464\nvt 0.447428 0.118503\nvt 0.432370 0.198879\nvt 0.410509 0.216080\nvt 0.288123 0.158345\nvt 0.382685 0.230707\nvt 0.278924 0.164238\nvt 0.349968 0.242200\nvt 0.272866 0.166366\nvt 0.266135 0.167832\nvt 0.313615 0.250116\nvt 0.275022 0.254152\nvt 0.258990 0.168579\nvt 0.235673 0.254152\nvt 0.251705 0.168579\nvt 0.432370 0.099391\nvt 0.288123 0.139925\nvt 0.382685 0.067563\nvt 0.410509 0.082191\nvt 0.284075 0.136740\nvt 0.313614 0.048154\nvt 0.349968 0.056070\nvt 0.272866 0.131904\nvt 0.278924 0.134032\nvt 0.258990 0.129691\nvt 0.275022 0.044118\nvt 0.266135 0.130439\nvt 0.284075 0.161530\nvt 0.970039 0.790205\nvt 0.970076 0.802340\nvt 0.970076 0.814475\nvt 0.970039 0.826144\nvt 0.969967 0.836898\nvt 0.969862 0.846324\nvt 0.969729 0.854060\nvt 0.969398 0.863348\nvt 0.969213 0.864544\nvt 0.969024 0.863349\nvt 0.968839 0.859809\nvt 0.968665 0.854061\nvt 0.968508 0.846325\nvt 0.968375 0.836900\nvt 0.968198 0.814477\nvt 0.968198 0.778538\nvt 0.968161 0.802342\nvt 0.968161 0.790207\nvt 0.968270 0.767784\nvt 0.968374 0.758358\nvt 0.968508 0.750622\nvt 0.968665 0.744874\nvt 0.968839 0.741334\nvt 0.969024 0.740138\nvt 0.969213 0.741334\nvt 0.969398 0.744873\nvt 0.969572 0.750621\nvt 0.969729 0.758357\nvt 0.969862 0.767783\nvt 0.903212 0.715826\nvt 0.875648 0.734710\nvt 0.748361 0.790185\nvt 0.876405 0.737718\nvt 0.875966 0.736521\nvt 0.809470 0.740139\nvt 0.875144 0.715826\nvt 0.874636 0.728557\nvt 0.899232 0.790185\nvt 0.964718 0.840231\nvt 0.652378 0.840231\nvt 0.971024 0.665779\nvt 0.876084 0.737537\nvt 0.661682 0.840231\nvt 0.795358 0.840231\nvt 0.930864 0.615733\nvt 0.876246 0.716803\nvt 0.874457 0.717949\nvt 0.899232 0.740138\nvt 0.876025 0.715826\nvt 0.876138 0.715826\nvt 0.687000 0.790185\nvt 0.874122 0.721299\nvt 0.869977 0.790185\nvt 0.739127 0.790185\nvt 0.875908 0.715826\nvt 0.839707 0.790185\nvt 0.945029 0.715826\nvt 0.965182 0.790185\nvt 0.875144 0.715826\nvt 0.876301 0.737718\nvt 0.874457 0.725338\nvt 0.899232 0.831024\nvt 0.875254 0.732174\nvt 0.874924 0.729009\nvt 0.874457 0.726773\nvt 0.876246 0.716803\nvt 0.875715 0.715826\nvt 0.652841 0.790185\nvt 0.875782 0.734710\nvt 0.876509 0.737388\nvt 0.876405 0.737388\nvt 0.875417 0.732174\nvt 0.875908 0.715826\nvt 0.874457 0.735596\nvt 0.874457 0.722119\nvt 0.875648 0.734710\nvt 0.874814 0.715826\nvt 0.875335 0.715826\nvt 0.875499 0.715826\nvt 0.874924 0.729009\nvt 0.953359 0.741372\nvt 0.720631 0.790185\nvt 0.968161 0.788951\nvt 0.896472 0.790185\nvt 0.933653 0.741372\nvt 0.861782 0.794788\nvt 0.780434 0.740138\nvt 0.926149 0.715826\nvt 0.958544 0.616967\nvt 0.900618 0.665780\nvt 0.860582 0.838997\nvt 0.748142 0.790185\nvt 0.923849 0.791418\nvt 0.893901 0.838997\nvt 0.953359 0.791418\nvt 0.668504 0.790185\nvt 0.926313 0.665779\nvt 0.826363 0.790185\nvt 0.945193 0.620337\nvt 0.749879 0.740139\nvt 0.943008 0.791418\nvt 0.717461 0.790185\nvt 0.973135 0.656184\nvt 0.973135 0.643306\nvt 0.973174 0.630428\nvt 0.973250 0.618045\nvt 0.973361 0.606633\nvt 0.973503 0.596630\nvt 0.973669 0.588421\nvt 0.974049 0.578564\nvt 0.974249 0.577296\nvt 0.974445 0.578565\nvt 0.974630 0.582321\nvt 0.974796 0.588421\nvt 0.974937 0.596631\nvt 0.975048 0.606634\nvt 0.975164 0.630429\nvt 0.975164 0.643308\nvt 0.975125 0.656186\nvt 0.975048 0.668569\nvt 0.974937 0.679981\nvt 0.974796 0.689984\nvt 0.974630 0.698193\nvt 0.974445 0.704293\nvt 0.974249 0.708049\nvt 0.974049 0.709317\nvt 0.973853 0.708049\nvt 0.973669 0.704292\nvt 0.973503 0.698192\nvt 0.973361 0.689983\nvt 0.973250 0.679980\nvt 0.932432 0.762427\nvt 0.876775 0.683516\nvt 0.722155 0.762427\nvt 0.877490 0.683516\nvt 0.876970 0.703795\nvt 0.806529 0.709317\nvt 0.875866 0.697507\nvt 0.875372 0.703706\nvt 0.850195 0.762427\nvt 0.771942 0.815537\nvt 0.668517 0.815537\nvt 0.978320 0.630406\nvt 0.877152 0.706556\nvt 0.871855 0.762427\nvt 0.747048 0.762427\nvt 0.934950 0.630406\nvt 0.877267 0.684553\nvt 0.875016 0.698688\nvt 0.875016 0.630406\nvt 0.876908 0.685200\nvt 0.877152 0.706556\nvt 0.640116 0.815537\nvt 0.875016 0.689325\nvt 0.870625 0.762427\nvt 0.948633 0.815537\nvt 0.877033 0.683516\nvt 0.841571 0.815537\nvt 0.950305 0.630406\nvt 0.974635 0.709317\nvt 0.876215 0.697507\nvt 0.877490 0.683516\nvt 0.875561 0.693611\nvt 0.901616 0.805767\nvt 0.876475 0.683516\nvt 0.875866 0.683516\nvt 0.875372 0.700942\nvt 0.877267 0.684553\nvt 0.876633 0.701291\nvt 0.842414 0.762427\nvt 0.876633 0.701291\nvt 0.877380 0.706399\nvt 0.877380 0.706399\nvt 0.922029 0.805767\nvt 0.876389 0.683516\nvt 0.877095 0.705478\nvt 0.875372 0.687071\nvt 0.875372 0.683516\nvt 0.876775 0.683516\nvt 0.875561 0.693611\nvt 0.876562 0.700865\nvt 0.876215 0.683516\nvt 0.875983 0.683516\nvt 0.958955 0.763736\nvt 0.675743 0.762427\nvt 0.974635 0.761118\nvt 0.807005 0.762427\nvt 0.964272 0.678631\nvt 0.944041 0.761118\nvt 0.804920 0.762427\nvt 0.930130 0.683516\nvt 0.850195 0.814228\nvt 0.873548 0.709317\nvt 0.774161 0.814228\nvt 0.741562 0.762427\nvt 0.933637 0.814228\nvt 0.895969 0.814228\nvt 0.958955 0.710626\nvt 0.714929 0.815537\nvt 0.930304 0.630406\nvt 0.788296 0.815537\nvt 0.772552 0.762427\nvt 0.842414 0.763736\nvt 0.677024 0.709317\nvt 0.354104 0.801507\nvt 0.226647 0.812843\nvt 0.309061 0.756783\nvt 0.167710 0.808190\nvt 0.249168 0.756783\nvt 0.026359 0.647534\nvt 0.238386 0.647534\nvt 0.167710 0.647534\nvt 0.354104 0.801507\nvt 0.249168 0.808190\nvt 0.309061 0.647534\nvt 0.329859 0.655172\nvt 0.329654 0.656515\nvt 0.329859 0.794912\nvt 0.331583 0.801507\nvt 0.329654 0.793570\nvt 0.329456 0.660491\nvt 0.329274 0.666948\nvt 0.329456 0.789594\nvt 0.329274 0.783137\nvt 0.329114 0.675637\nvt 0.328983 0.686225\nvt 0.329114 0.774448\nvt 0.328983 0.763860\nvt 0.328886 0.698304\nvt 0.328826 0.711411\nvt 0.328886 0.751780\nvt 0.042630 0.264152\nvt 0.045379 0.440905\nvt 0.042630 0.440905\nvt 0.038520 0.327677\nvt 0.038489 0.327339\nvt 0.037131 0.304017\nvt 0.038277 0.307359\nvt 0.038273 0.304017\nvt 0.038472 0.327166\nvt 0.038425 0.325731\nvt 0.038291 0.312088\nvt 0.038314 0.316446\nvt 0.038272 0.302575\nvt 0.038277 0.298076\nvt 0.038397 0.282681\nvt 0.038382 0.283401\nvt 0.038345 0.286268\nvt 0.039880 0.264152\nvt 0.038644 0.282681\nvt 0.038569 0.280221\nvt 0.038615 0.281406\nvt 0.038425 0.281406\nvt 0.347220 0.264152\nvt 0.326573 0.259349\nvt 0.351974 0.161420\nvt 0.307123 0.249927\nvt 0.348373 0.159675\nvt 0.289619 0.236249\nvt 0.274733 0.218841\nvt 0.345132 0.157143\nvt 0.263037 0.198370\nvt 0.342376 0.153920\nvt 0.254981 0.175625\nvt 0.340211 0.150129\nvt 0.250874 0.151478\nvt 0.338719 0.145918\nvt 0.250874 0.126859\nvt 0.337959 0.141447\nvt 0.337959 0.136889\nvt 0.368272 0.264152\nvt 0.355797 0.162309\nvt 0.425872 0.236249\nvt 0.408368 0.249927\nvt 0.367119 0.159675\nvt 0.452454 0.198370\nvt 0.440758 0.218841\nvt 0.375281 0.150129\nvt 0.373115 0.153920\nvt 0.464617 0.151478\nvt 0.460510 0.175625\nvt 0.376772 0.145918\nvt 0.377533 0.141447\nvt 0.370359 0.157143\nvt 0.212129 0.236249\nvt 0.194625 0.249927\nvt 0.156616 0.157143\nvt 0.159372 0.153919\nvt 0.227015 0.218841\nvt 0.154529 0.264152\nvt 0.133477 0.264152\nvt 0.145951 0.162309\nvt 0.112829 0.259349\nvt 0.138231 0.161419\nvt 0.093380 0.249927\nvt 0.134630 0.159675\nvt 0.131389 0.157143\nvt 0.075876 0.236249\nvt 0.060990 0.218841\nvt 0.128633 0.153920\nvt 0.049294 0.198370\nvt 0.126467 0.150129\nvt 0.238711 0.198370\nvt 0.161538 0.150129\nvt 0.250874 0.151478\nvt 0.246767 0.175625\nvt 0.163029 0.145918\nvt 0.246767 0.102712\nvt 0.250874 0.126859\nvt 0.163790 0.136889\nvt 0.163790 0.141447\nvt 0.161538 0.128207\nvt 0.238711 0.079967\nvt 0.163029 0.132418\nvt 0.142054 0.162309\nvt 0.446514 0.018186\nvt 0.451927 0.174609\nvt 0.446515 0.174609\nvt 0.438425 0.074405\nvt 0.438364 0.074106\nvt 0.435690 0.053466\nvt 0.437945 0.056424\nvt 0.437939 0.053466\nvt 0.438329 0.073952\nvt 0.438238 0.072683\nvt 0.437973 0.060609\nvt 0.438018 0.064466\nvt 0.437936 0.052190\nvt 0.437945 0.048209\nvt 0.438182 0.034584\nvt 0.438153 0.035221\nvt 0.438079 0.037759\nvt 0.441101 0.018186\nvt 0.438668 0.034584\nvt 0.438520 0.032407\nvt 0.438612 0.033456\nvt 0.438238 0.033456\nvt 0.324956 0.251990\nvt 0.359415 0.264094\nvt 0.250130 0.334102\nvt 0.388720 0.279501\nvt 0.255556 0.336954\nvt 0.411745 0.297616\nvt 0.427604 0.317746\nvt 0.259819 0.340309\nvt 0.435689 0.339115\nvt 0.262755 0.344036\nvt 0.435689 0.360903\nvt 0.264252 0.347992\nvt 0.427604 0.382272\nvt 0.264252 0.352026\nvt 0.411745 0.402401\nvt 0.262755 0.355982\nvt 0.259819 0.359709\nvt 0.286668 0.243652\nvt 0.243750 0.331861\nvt 0.163930 0.243652\nvt 0.204577 0.239401\nvt 0.221462 0.329530\nvt 0.091183 0.264094\nvt 0.125642 0.251990\nvt 0.200467 0.334102\nvt 0.206847 0.331861\nvt 0.038853 0.297616\nvt 0.061878 0.279501\nvt 0.195042 0.336954\nvt 0.190779 0.340309\nvt 0.213936 0.330317\nvt 0.061878 0.199302\nvt 0.038853 0.181186\nvt 0.195042 0.141848\nvt 0.200468 0.144701\nvt 0.091182 0.214708\nvt 0.014908 0.139688\nvt 0.014908 0.117900\nvt 0.186345 0.130811\nvt 0.022993 0.096531\nvt 0.187842 0.122820\nvt 0.038853 0.076401\nvt 0.190779 0.119093\nvt 0.195042 0.115739\nvt 0.061878 0.058285\nvt 0.091182 0.042879\nvt 0.200467 0.112887\nvt 0.125641 0.030774\nvt 0.206848 0.110646\nvt 0.125641 0.226813\nvt 0.206848 0.146942\nvt 0.204577 0.239401\nvt 0.163930 0.235151\nvt 0.213937 0.148486\nvt 0.286667 0.235151\nvt 0.246020 0.239401\nvt 0.229136 0.149273\nvt 0.221462 0.149273\nvt 0.243750 0.146942\nvt 0.324956 0.226813\nvt 0.236661 0.148486\nvt 0.186345 0.126777\nvt 0.709450 0.824047\nvt 0.710192 0.824047\nvt 0.707966 0.945990\nvt 0.710192 0.921970\nvt 0.847465 0.752918\nvt 0.839527 0.782406\nvt 0.822226 0.773185\nvt 0.831893 0.795299\nvt 0.822178 0.806278\nvt 0.816342 0.782926\nvt 0.810754 0.814923\nvt 0.808846 0.791216\nvt 0.798060 0.820901\nvt 0.800025 0.797737\nvt 0.790218 0.802237\nvt 0.784585 0.823982\nvt 0.770845 0.824047\nvt 0.779802 0.804544\nvt 0.769178 0.804569\nvt 0.844784 0.722303\nvt 0.847465 0.737456\nvt 0.828298 0.739188\nvt 0.826203 0.727719\nvt 0.831893 0.695223\nvt 0.839527 0.708043\nvt 0.822116 0.716920\nvt 0.810754 0.675800\nvt 0.822178 0.684336\nvt 0.808667 0.698952\nvt 0.816195 0.707206\nvt 0.799820 0.692473\nvt 0.784585 0.666991\nvt 0.798060 0.669943\nvt 0.789996 0.688019\nvt 0.779571 0.685761\nvt 0.984284 0.722942\nvt 0.986964 0.738120\nvt 0.847465 0.752918\nvt 0.986964 0.753582\nvt 0.850145 0.768096\nvt 0.984284 0.768735\nvt 0.979026 0.782995\nvt 0.855403 0.782406\nvt 0.971393 0.795815\nvt 0.872752 0.806278\nvt 0.961678 0.806702\nvt 0.884176 0.814923\nvt 0.950254 0.815238\nvt 0.937560 0.821095\nvt 0.896869 0.820901\nvt 0.924084 0.824047\nvt 0.910345 0.823982\nvt 0.863037 0.795299\nvt 0.847465 0.737456\nvt 0.850145 0.722303\nvt 0.863037 0.695223\nvt 0.961678 0.684759\nvt 0.872752 0.684336\nvt 0.950254 0.676115\nvt 0.884176 0.675800\nvt 0.896869 0.669943\nvt 0.910345 0.666991\nvt 0.924084 0.667056\nvt 0.937560 0.670137\nvt 0.697336 0.254691\nvt 0.610713 0.254691\nvt 0.610710 0.252177\nvt 0.610379 0.254691\nvt 0.559050 0.254691\nvt 0.610382 0.252177\nvt 0.610700 0.249760\nvt 0.610685 0.247533\nvt 0.610391 0.249760\nvt 0.610407 0.247533\nvt 0.610664 0.245581\nvt 0.610639 0.243978\nvt 0.610428 0.245581\nvt 0.610453 0.243978\nvt 0.610610 0.242788\nvt 0.610578 0.242055\nvt 0.610482 0.242788\nvt 0.610513 0.242055\nvt 0.559050 0.191513\nvt 0.892848 0.274586\nvt 0.901187 0.199451\nvt 0.901187 0.274586\nvt 0.901187 0.031781\nvt 0.901187 0.141227\nvt 0.610382 0.257156\nvt 0.610710 0.257156\nvt 0.610391 0.259526\nvt 0.610407 0.261711\nvt 0.610700 0.259526\nvt 0.610685 0.261711\nvt 0.610428 0.263625\nvt 0.610453 0.265197\nvt 0.610664 0.263626\nvt 0.610639 0.265197\nvt 0.610482 0.266365\nvt 0.610513 0.267084\nvt 0.610610 0.266365\nvt 0.610578 0.267084\nvt 0.751301 0.065006\nvt 0.758984 0.080629\nvt 0.762901 0.097214\nvt 0.762901 0.114124\nvt 0.758984 0.130708\nvt 0.751301 0.146331\nvt 0.740146 0.160391\nvt 0.725949 0.172348\nvt 0.709255 0.181743\nvt 0.690706 0.188214\nvt 0.671014 0.191513\nvt 0.650937 0.191513\nvt 0.631245 0.188214\nvt 0.612696 0.181743\nvt 0.596002 0.172348\nvt 0.570651 0.146331\nvt 0.562967 0.130708\nvt 0.559050 0.114123\nvt 0.559050 0.097214\nvt 0.562967 0.080629\nvt 0.570651 0.065006\nvt 0.581805 0.050946\nvt 0.612696 0.029594\nvt 0.671015 0.019824\nvt 0.631245 0.023123\nvt 0.650937 0.019824\nvt 0.690706 0.023123\nvt 0.709256 0.029594\nvt 0.725949 0.038989\nvt 0.770845 0.667056\nvt 0.768947 0.685786\nvt 0.744676 0.676115\nvt 0.757370 0.670137\nvt 0.758532 0.688093\nvt 0.723537 0.695739\nvt 0.733252 0.684759\nvt 0.739904 0.699113\nvt 0.748725 0.692593\nvt 0.710646 0.722942\nvt 0.715904 0.708632\nvt 0.726524 0.717145\nvt 0.732407 0.707404\nvt 0.707965 0.753582\nvt 0.720451 0.751141\nvt 0.715904 0.782995\nvt 0.710646 0.768735\nvt 0.726633 0.773410\nvt 0.722546 0.762611\nvt 0.733252 0.806702\nvt 0.723537 0.795815\nvt 0.740083 0.791378\nvt 0.732554 0.783123\nvt 0.757370 0.821095\nvt 0.744676 0.815238\nvt 0.758753 0.802311\nvt 0.748929 0.797857\nvt 0.359415 0.214708\nvt 0.250130 0.144701\nvt 0.411745 0.181186\nvt 0.388720 0.199302\nvt 0.255556 0.141848\nvt 0.435690 0.139688\nvt 0.427604 0.161057\nvt 0.262756 0.134767\nvt 0.427604 0.096531\nvt 0.435690 0.117900\nvt 0.264253 0.126777\nvt 0.264253 0.130811\nvt 0.388720 0.058285\nvt 0.411745 0.076401\nvt 0.259819 0.119093\nvt 0.262756 0.122820\nvt 0.324956 0.030774\nvt 0.246020 0.018186\nvt 0.286667 0.022437\nvt 0.229136 0.108315\nvt 0.236661 0.109102\nvt 0.221462 0.108315\nvt 0.204577 0.018186\nvt 0.163930 0.022437\nvt 0.213937 0.109102\nvt 0.259819 0.138494\nvt 0.243750 0.110646\nvt 0.750046 0.324873\nvt 0.965404 0.250672\nvt 0.022993 0.317746\nvt 0.187842 0.344036\nvt 0.014908 0.360903\nvt 0.014908 0.339115\nvt 0.186345 0.347992\nvt 0.038853 0.402401\nvt 0.022993 0.382272\nvt 0.187842 0.355982\nvt 0.091182 0.435924\nvt 0.061878 0.420517\nvt 0.195042 0.363064\nvt 0.190779 0.359709\nvt 0.163930 0.456366\nvt 0.125641 0.448028\nvt 0.206847 0.368157\nvt 0.200467 0.365916\nvt 0.246020 0.460617\nvt 0.324956 0.448028\nvt 0.286668 0.456366\nvt 0.243750 0.368157\nvt 0.236661 0.369701\nvt 0.250130 0.365916\nvt 0.359415 0.435923\nvt 0.388720 0.420517\nvt 0.255556 0.363064\nvt 0.186345 0.352026\nvt 0.229135 0.370488\nvt 0.965419 0.360117\nvt 0.962080 0.250672\nvt 0.227015 0.059496\nvt 0.159372 0.124417\nvt 0.194625 0.028410\nvt 0.212129 0.042088\nvt 0.156616 0.121194\nvt 0.154529 0.014185\nvt 0.175176 0.018988\nvt 0.149774 0.116917\nvt 0.112829 0.018988\nvt 0.133477 0.014185\nvt 0.142054 0.116028\nvt 0.145951 0.116028\nvt 0.075876 0.042088\nvt 0.093380 0.028410\nvt 0.134630 0.118661\nvt 0.138231 0.116917\nvt 0.049294 0.079967\nvt 0.037131 0.126859\nvt 0.041238 0.102712\nvt 0.124215 0.136889\nvt 0.124976 0.132418\nvt 0.124215 0.141447\nvt 0.037131 0.151478\nvt 0.041238 0.175625\nvt 0.124976 0.145918\nvt 0.153375 0.118661\nvt 0.126467 0.128207\nvt 0.746708 0.324873\nvt 0.464617 0.126859\nvt 0.377533 0.136889\nvt 0.452454 0.079967\nvt 0.460510 0.102712\nvt 0.376772 0.132418\nvt 0.425873 0.042088\nvt 0.440758 0.059496\nvt 0.373115 0.124417\nvt 0.388919 0.018988\nvt 0.408368 0.028410\nvt 0.367119 0.118661\nvt 0.370359 0.121194\nvt 0.347220 0.014185\nvt 0.368272 0.014185\nvt 0.359695 0.116028\nvt 0.363517 0.116917\nvt 0.307123 0.028410\nvt 0.274733 0.059496\nvt 0.289619 0.042088\nvt 0.342376 0.124417\nvt 0.345132 0.121194\nvt 0.340211 0.128207\nvt 0.263037 0.079967\nvt 0.254981 0.102712\nvt 0.338719 0.132418\nvt 0.375281 0.128207\nvt 0.348373 0.118661\nvt 0.756709 0.312915\nvt 0.753371 0.312915\nvt 0.962080 0.360117\nvt 0.931633 0.439311\nvt 0.330065 0.793570\nvt 0.330263 0.789594\nvt 0.330065 0.656515\nvt 0.330263 0.660491\nvt 0.330446 0.783137\nvt 0.330605 0.774448\nvt 0.330446 0.666948\nvt 0.330605 0.675637\nvt 0.330736 0.763860\nvt 0.330834 0.751780\nvt 0.330736 0.686225\nvt 0.330834 0.698304\nvt 0.330893 0.738673\nvt 0.931634 0.019824\nvt 0.615629 0.578565\nvt 0.615221 0.577296\nvt 0.743366 0.577296\nvt 0.746872 0.709317\nvt 0.747501 0.588421\nvt 0.438520 0.073952\nvt 0.438612 0.072683\nvt 0.438911 0.053466\nvt 0.441101 0.053466\nvt 0.438905 0.056424\nvt 0.438697 0.070621\nvt 0.438771 0.067847\nvt 0.438914 0.052190\nvt 0.438905 0.048209\nvt 0.438697 0.035221\nvt 0.438771 0.037759\nvt 0.629262 0.616929\nvt 0.628877 0.615733\nvt 0.874122 0.740138\nvt 0.038569 0.327166\nvt 0.038615 0.325731\nvt 0.038767 0.304017\nvt 0.039880 0.304017\nvt 0.038764 0.307359\nvt 0.038658 0.323401\nvt 0.038696 0.320266\nvt 0.870812 0.615733\nvt 0.870218 0.729655\nvt 0.038769 0.302575\nvt 0.038764 0.298076\nvt 0.038658 0.283400\nvt 0.038696 0.286268\nvt 0.730251 0.312915\nvt 0.235673 0.044118\nvt 0.251705 0.129691\nvt 0.160727 0.056070\nvt 0.197081 0.048154\nvt 0.244559 0.130439\nvt 0.100187 0.082191\nvt 0.128010 0.067563\nvt 0.231771 0.134032\nvt 0.063268 0.118503\nvt 0.078326 0.099391\nvt 0.222572 0.139925\nvt 0.226620 0.136740\nvt 0.055591 0.159479\nvt 0.055591 0.138792\nvt 0.218363 0.147220\nvt 0.219784 0.143464\nvt 0.078326 0.198879\nvt 0.128010 0.230707\nvt 0.100187 0.216080\nvt 0.231771 0.164238\nvt 0.226620 0.161530\nvt 0.237829 0.166366\nvt 0.160728 0.242200\nvt 0.197081 0.250116\nvt 0.244559 0.167832\nvt 0.237829 0.131904\nvt 0.222572 0.158345\nvt 0.713794 0.312915\nvt 0.382685 0.277597\nvt 0.278924 0.344066\nvt 0.313614 0.258188\nvt 0.349968 0.266104\nvt 0.272866 0.341938\nvt 0.235673 0.254152\nvt 0.275022 0.254152\nvt 0.258990 0.339725\nvt 0.160727 0.266104\nvt 0.197081 0.258188\nvt 0.244559 0.340473\nvt 0.251705 0.339725\nvt 0.100187 0.292225\nvt 0.128010 0.277597\nvt 0.231771 0.344066\nvt 0.237829 0.341938\nvt 0.063268 0.328537\nvt 0.055591 0.369513\nvt 0.055591 0.348826\nvt 0.218363 0.361084\nvt 0.218363 0.357254\nvt 0.219784 0.364841\nvt 0.063268 0.389802\nvt 0.078326 0.408913\nvt 0.222572 0.368379\nvt 0.266135 0.340473\nvt 0.219784 0.353498\nvt 0.978537 0.019824\nvt 0.697337 0.324873\nvt 0.635024 0.630860\nvt 0.634651 0.629802\nvt 0.751950 0.629802\nvt 0.755159 0.739925\nvt 0.460242 0.077615\nvt 0.458163 0.077615\nvt 0.458166 0.076404\nvt 0.458157 0.072623\nvt 0.457959 0.060292\nvt 0.458030 0.062702\nvt 0.755735 0.639082\nvt 0.457792 0.097066\nvt 0.457879 0.095860\nvt 0.458157 0.080423\nvt 0.457959 0.093903\nvt 0.458030 0.091269\nusemtl Material.001\ns 1\nf 1/1/1 3/2/1 4/3/1\nf 1/4/2 12/5/2 20/6/2\nf 10/7/1 35/8/1 36/9/1\nf 37/10/1 39/11/1 40/12/1\nf 5/13/1 4/3/1 41/14/1\nf 11/15/1 36/9/1 42/16/1\nf 43/17/1 45/18/1 46/19/1\nf 6/20/1 41/14/1 47/21/1\nf 12/22/1 42/16/1 48/23/1\nf 49/24/1 51/25/1 52/26/1\nf 53/27/1 55/28/1 56/29/1\nf 13/30/1 48/23/1 57/31/1\nf 38/32/1 59/33/1 39/11/1\nf 14/34/1 57/31/1 60/35/1\nf 44/36/1 62/37/1 45/18/1\nf 15/38/1 60/35/1 63/39/1\nf 50/40/1 65/41/1 51/25/1\nf 54/42/1 67/43/1 55/28/1\nf 16/44/1 63/39/1 68/45/1\nf 58/46/1 70/47/1 59/33/1\nf 17/48/1 68/45/1 71/49/1\nf 61/50/1 73/51/1 62/37/1\nf 18/52/1 71/49/1 74/53/1\nf 64/54/1 76/55/1 65/41/1\nf 66/56/1 78/57/1 67/43/1\nf 19/58/1 74/53/1 79/59/1\nf 69/60/1 81/61/1 70/47/1\nf 20/62/1 79/59/1 82/63/1\nf 72/64/1 84/65/1 73/51/1\nf 21/66/1 82/63/1 85/67/1\nf 75/68/1 87/69/1 76/55/1\nf 77/70/1 89/71/1 78/57/1\nf 22/72/1 85/67/1 90/73/1\nf 91/74/1 93/75/1 94/76/1\nf 95/77/1 97/78/1 98/79/1\nf 99/80/1 94/76/1 100/81/1\nf 96/82/1 101/83/1 97/78/1\nf 102/84/1 100/81/1 103/85/1\nf 46/19/1 104/86/1 101/83/1\nf 105/87/1 103/85/1 106/88/1\nf 45/18/1 107/89/1 104/86/1\nf 108/90/1 106/88/1 109/91/1\nf 62/37/1 110/92/1 107/89/1\nf 111/93/1 109/91/1 112/94/1\nf 73/51/1 113/95/1 110/92/1\nf 114/96/1 112/94/1 115/97/1\nf 116/98/1 117/99/1 118/100/1\nf 84/65/1 120/101/1 113/95/1\nf 121/102/1 115/97/1 122/103/1\nf 123/104/1 118/100/1 124/105/1\nf 119/106/1 126/107/1 120/101/1\nf 3/2/1 122/103/1 127/108/1\nf 35/8/1 124/105/1 128/109/1\nf 125/110/1 130/111/1 126/107/1\nf 4/3/1 127/108/1 131/112/1\nf 36/9/1 128/109/1 132/113/1\nf 129/114/1 134/115/1 130/111/1\nf 41/14/1 131/112/1 135/116/1\nf 42/16/1 132/113/1 136/117/1\nf 133/118/1 137/119/1 134/115/1\nf 47/21/1 135/116/1 117/99/1\nf 48/23/1 136/117/1 138/120/1\nf 52/26/1 139/121/1 137/119/1\nf 56/29/1 140/122/1 141/123/1\nf 57/31/1 138/120/1 142/124/1\nf 143/125/1 52/26/1 133/118/1\nf 9/126/1 123/104/1 35/8/1\nf 2/127/1 121/102/1 3/2/1\nf 144/128/1 46/19/1 96/82/1\nf 8/129/1 116/98/1 123/104/1\nf 34/130/1 114/96/1 121/102/1\nf 145/131/1 40/12/1 146/132/1\nf 7/133/1 47/21/1 116/98/1\nf 33/134/1 111/93/1 114/96/1\nf 147/135/1 133/118/1 129/114/1\nf 32/136/1 108/90/1 111/93/1\nf 148/137/1 96/82/1 95/77/1\nf 31/138/1 105/87/1 108/90/1\nf 149/139/1 146/132/1 150/140/1\nf 30/141/1 102/84/1 105/87/1\nf 151/142/1 129/114/1 125/110/1\nf 29/143/1 99/80/1 102/84/1\nf 152/144/1 95/77/1 153/145/1\nf 154/146/1 56/29/1 155/147/1\nf 28/148/1 91/74/1 99/80/1\nf 156/149/1 150/140/1 157/150/1\nf 27/151/1 92/152/1 91/74/1\nf 158/153/1 125/110/1 119/106/1\nf 26/154/1 159/155/1 92/152/1\nf 160/156/1 153/145/1 161/157/1\nf 25/158/1 162/159/1 159/155/1\nf 88/160/1 157/150/1 89/71/1\nf 86/161/1 155/147/1 87/69/1\nf 24/162/1 163/163/1 162/159/1\nf 83/164/1 119/106/1 84/65/1\nf 23/165/1 90/73/1 163/163/1\nf 80/166/1 161/157/1 81/61/1\nf 164/167/3 166/168/3 167/169/3\nf 169/170/2 171/171/2 168/172/2\nf 172/173/3 166/168/3 165/174/3\nf 174/175/2 171/171/2 175/176/2\nf 172/173/3 177/177/3 173/178/3\nf 178/179/2 175/176/2 179/180/2\nf 176/181/3 181/182/3 177/177/3\nf 178/179/2 182/183/2 93/184/2\nf 180/185/3 183/186/3 181/182/3\nf 93/184/2 184/187/2 94/188/2\nf 97/189/3 183/186/3 98/190/3\nf 94/188/2 186/191/2 100/192/2\nf 97/189/3 187/193/3 185/194/3\nf 103/195/2 186/191/2 188/196/2\nf 104/197/3 187/193/3 101/198/3\nf 103/195/2 190/199/2 106/200/2\nf 107/201/3 189/202/3 104/197/3\nf 109/203/2 190/199/2 192/204/2\nf 107/201/3 193/205/3 191/206/3\nf 109/203/2 194/207/2 112/208/2\nf 110/209/3 195/210/3 193/205/3\nf 115/211/2 194/207/2 196/212/2\nf 117/213/2 198/214/2 118/215/2\nf 113/216/3 199/217/3 195/210/3\nf 115/211/2 200/218/2 122/219/2\nf 124/220/2 198/214/2 201/221/2\nf 126/222/3 199/217/3 120/223/3\nf 127/224/2 200/218/2 203/225/2\nf 124/220/2 204/226/2 128/227/2\nf 126/222/3 205/228/3 202/229/3\nf 131/230/2 203/225/2 206/231/2\nf 132/232/2 204/226/2 207/233/2\nf 153/145/1 98/79/1 180/234/1\nf 92/152/1 178/235/1 93/75/1\nf 161/157/1 180/234/1 176/236/1\nf 159/155/1 174/237/1 178/235/1\nf 81/61/1 176/236/1 172/238/1\nf 162/159/1 168/239/1 174/237/1\nf 70/47/1 172/238/1 165/240/1\nf 163/163/1 169/241/1 168/239/1\nf 59/33/1 165/240/1 164/242/1\nf 90/73/1 208/243/1 169/241/1\nf 39/11/1 164/242/1 209/244/1\nf 85/67/1 210/245/1 208/243/1\nf 40/12/1 209/244/1 211/246/1\nf 82/63/1 212/247/1 210/245/1\nf 146/132/1 211/246/1 213/248/1\nf 79/59/1 214/249/1 212/247/1\nf 150/140/1 213/248/1 215/250/1\nf 74/53/1 216/251/1 214/249/1\nf 157/150/1 215/250/1 217/252/1\nf 155/147/1 141/123/1 218/253/1\nf 71/49/1 219/254/1 216/251/1\nf 89/71/1 217/252/1 220/255/1\nf 87/69/1 218/253/1 221/256/1\nf 68/45/1 222/257/1 219/254/1\nf 78/57/1 220/255/1 223/258/1\nf 76/55/1 221/256/1 224/259/1\nf 63/39/1 225/260/1 222/257/1\nf 67/43/1 223/258/1 226/261/1\nf 65/41/1 224/259/1 227/262/1\nf 60/35/1 142/124/1 225/260/1\nf 55/28/1 226/261/1 140/122/1\nf 51/25/1 227/262/1 139/121/1\nf 169/170/2 228/263/2 170/264/2\nf 164/167/3 229/265/3 209/266/3\nf 210/267/2 228/263/2 208/268/2\nf 209/266/3 231/269/3 211/270/3\nf 212/271/2 230/272/2 210/267/2\nf 213/273/3 231/269/3 233/274/3\nf 214/275/2 232/276/2 212/271/2\nf 213/273/3 235/277/3 215/278/3\nf 214/275/2 236/279/2 234/280/2\nf 217/281/3 235/277/3 237/282/3\nf 141/283/3 239/284/3 218/285/3\nf 219/286/2 236/279/2 216/287/2\nf 220/288/3 237/282/3 241/289/3\nf 221/290/3 239/284/3 242/291/3\nf 219/286/2 243/292/2 240/293/2\nf 220/288/3 244/294/3 223/295/3\nf 221/290/3 245/296/3 224/297/3\nf 222/298/2 246/299/2 243/292/2\nf 226/300/3 244/294/3 247/301/3\nf 224/297/3 248/302/3 227/303/3\nf 142/304/2 246/299/2 225/305/2\nf 226/300/3 250/306/3 140/307/3\nf 139/308/3 248/302/3 251/309/3\nf 142/304/2 252/310/2 249/311/2\nf 141/283/3 250/306/3 238/312/3\nf 139/308/3 253/313/3 137/314/3\nf 136/315/2 252/310/2 138/316/2\nf 117/213/2 255/317/2 197/318/2\nf 134/319/3 253/313/3 256/320/3\nf 132/232/2 254/321/2 136/315/2\nf 131/230/2 255/317/2 135/322/2\nf 134/319/3 205/228/3 130/323/3\nf 258/324/4 260/325/4 257/326/5\nf 239/327/1 257/328/1 242/329/1\nf 255/330/1 258/331/1 239/327/1\nf 206/332/1 259/333/1 255/330/1\nf 242/329/1 260/334/1 206/332/1\nf 262/335/3 264/336/3 261/337/3\nf 199/338/1 266/339/1 195/340/1\nf 186/341/1 265/342/1 199/338/1\nf 184/343/1 267/344/1 186/341/1\nf 195/340/1 268/345/1 184/343/1\nf 270/346/6 272/347/6 269/348/6\nf 177/349/1 269/350/1 173/351/1\nf 232/352/1 270/353/1 177/349/1\nf 234/354/1 271/355/1 232/352/1\nf 173/351/1 272/356/1 234/354/1\nf 273/357/3 275/358/3 276/359/3\nf 241/360/1 261/361/1 244/362/1\nf 207/363/1 262/364/1 241/360/1\nf 204/365/1 277/366/1 207/363/1\nf 244/362/1 278/367/1 204/365/1\nf 280/368/2 282/369/2 279/370/2\nf 253/371/1 284/372/1 256/373/1\nf 194/374/1 283/375/1 253/371/1\nf 192/376/1 285/377/1 194/374/1\nf 256/373/1 286/378/1 192/376/1\nf 288/379/7 290/380/7 287/381/7\nf 187/382/1 287/383/1 185/384/1\nf 171/385/1 288/386/1 187/382/1\nf 170/387/1 289/388/1 171/385/1\nf 185/384/1 290/389/1 170/387/1\nf 265/390/3 292/391/3 266/392/3\nf 231/393/1 294/394/1 233/395/1\nf 246/396/1 293/397/1 231/393/1\nf 249/398/1 295/399/1 246/396/1\nf 233/395/1 296/400/1 249/398/1\nf 286/401/2 298/402/2 285/403/2\nf 242/329/1 300/404/1 245/405/1\nf 206/332/1 299/406/1 242/329/1\nf 203/407/1 301/408/1 206/332/1\nf 245/405/1 302/409/1 203/407/1\nf 304/410/8 306/411/8 303/412/8\nf 195/340/1 303/413/1 193/414/1\nf 184/343/1 304/415/1 195/340/1\nf 182/416/1 305/417/1 184/343/1\nf 193/414/1 306/418/1 182/416/1\nf 273/419/9 308/420/9 307/421/9\nf 173/351/1 310/422/1 166/423/1\nf 234/354/1 309/424/1 173/351/1\nf 236/425/1 311/426/1 234/354/1\nf 166/423/1 312/427/1 236/425/1\nf 314/428/10 316/429/10 313/430/10\nf 244/362/1 313/431/1 247/432/1\nf 204/365/1 314/433/1 244/362/1\nf 201/434/1 315/435/1 204/365/1\nf 247/432/1 316/436/1 201/434/1\nf 318/437/11 320/438/11 317/439/11\nf 256/373/1 317/440/1 205/441/1\nf 192/376/1 318/442/1 256/373/1\nf 190/443/1 319/444/1 192/376/1\nf 205/441/1 320/445/1 190/443/1\nf 322/446/3 324/447/3 321/448/3\nf 185/384/1 326/449/1 183/450/1\nf 170/387/1 325/451/1 185/384/1\nf 228/452/1 327/453/1 170/387/1\nf 183/450/1 328/454/1 228/452/1\nf 330/455/12 332/456/12 329/457/12\nf 233/395/1 329/458/1 235/459/1\nf 249/398/1 330/460/1 233/395/1\nf 252/461/1 331/462/1 249/398/1\nf 235/459/1 332/463/1 252/461/1\nf 334/464/13 336/465/13 333/466/13\nf 245/405/1 333/467/1 248/468/1\nf 203/407/1 334/469/1 245/405/1\nf 200/470/1 335/471/1 203/407/1\nf 248/468/1 336/472/1 200/470/1\nf 266/473/14 337/474/14 268/475/14\nf 193/414/1 339/476/1 191/477/1\nf 182/416/1 338/478/1 193/414/1\nf 179/479/1 340/480/1 182/416/1\nf 191/477/1 341/481/1 179/479/1\nf 343/482/15 345/483/15 342/484/15\nf 166/423/1 342/485/1 167/486/1\nf 236/425/1 343/487/1 166/423/1\nf 240/488/1 344/489/1 236/425/1\nf 167/486/1 345/490/1 240/488/1\nf 347/491/2 349/492/2 346/493/2\nf 247/432/1 351/494/1 250/495/1\nf 201/434/1 350/496/1 247/432/1\nf 198/497/1 346/498/1 201/434/1\nf 250/495/1 347/499/1 198/497/1\nf 294/500/3 352/501/3 353/502/3\nf 205/441/1 355/503/1 202/504/1\nf 190/443/1 354/505/1 205/441/1\nf 188/506/1 356/507/1 190/443/1\nf 202/504/1 357/508/1 188/506/1\nf 359/509/16 361/510/17 358/511/16\nf 183/450/1 358/512/1 181/513/1\nf 228/452/1 359/514/1 183/450/1\nf 230/515/1 360/516/1 228/452/1\nf 181/513/1 361/517/1 230/515/1\nf 362/518/3 364/519/3 365/520/3\nf 235/459/1 367/521/1 237/522/1\nf 252/461/1 366/523/1 235/459/1\nf 254/524/1 368/525/1 252/461/1\nf 237/522/1 369/526/1 254/524/1\nf 370/527/2 372/528/2 373/529/2\nf 248/468/1 375/530/1 251/531/1\nf 200/470/1 374/532/1 248/468/1\nf 196/533/1 376/534/1 200/470/1\nf 251/531/1 377/535/1 196/533/1\nf 379/536/18 381/537/18 378/538/18\nf 191/477/1 378/539/1 189/540/1\nf 179/479/1 379/541/1 191/477/1\nf 175/542/1 380/543/1 179/479/1\nf 189/540/1 381/544/1 175/542/1\nf 354/545/3 383/546/3 355/547/3\nf 167/486/1 385/548/1 229/549/1\nf 240/488/1 384/550/1 167/486/1\nf 243/551/1 386/552/1 240/488/1\nf 229/549/1 387/553/1 243/551/1\nf 284/554/19 297/555/20 286/556/20\nf 238/557/1 273/558/1 239/327/1\nf 197/559/1 274/560/1 238/557/1\nf 255/330/1 389/561/1 197/559/1\nf 239/327/1 307/562/1 255/330/1\nf 391/563/21 393/564/21 390/565/21\nf 250/495/1 390/566/1 238/557/1\nf 198/497/1 391/567/1 250/495/1\nf 197/559/1 392/568/1 198/497/1\nf 238/557/1 393/569/1 197/559/1\nf 395/570/22 397/571/22 394/572/22\nf 202/504/1 394/573/1 199/338/1\nf 188/506/1 395/574/1 202/504/1\nf 186/341/1 396/575/1 188/506/1\nf 199/338/1 397/576/1 186/341/1\nf 302/577/2 399/578/2 301/579/2\nf 181/513/1 362/580/1 177/349/1\nf 230/515/1 363/581/1 181/513/1\nf 232/352/1 279/582/1 230/515/1\nf 177/349/1 280/583/1 232/352/1\nf 401/584/23 403/585/23 400/586/23\nf 237/522/1 400/587/1 241/360/1\nf 254/524/1 401/588/1 237/522/1\nf 207/363/1 402/589/1 254/524/1\nf 241/360/1 403/590/1 207/363/1\nf 405/591/24 407/592/24 404/593/24\nf 251/531/1 404/594/1 253/371/1\nf 196/533/1 405/595/1 251/531/1\nf 194/374/1 406/596/1 196/533/1\nf 253/371/1 407/597/1 194/374/1\nf 362/598/25 281/599/26 280/600/26\nf 189/540/1 321/601/1 187/382/1\nf 175/542/1 322/602/1 189/540/1\nf 171/385/1 370/603/1 175/542/1\nf 187/382/1 371/604/1 171/385/1\nf 409/605/27 411/606/27 408/607/27\nf 229/549/1 408/608/1 231/393/1\nf 243/551/1 409/609/1 229/549/1\nf 246/396/1 410/610/1 243/551/1\nf 231/393/1 411/611/1 246/396/1\nf 267/612/28 291/613/29 265/614/29\nf 277/615/30 263/616/31 262/617/31\nf 285/618/32 414/619/33 283/620/33\nf 295/621/34 352/622/35 293/623/35\nf 301/624/25 416/625/26 299/626/26\nf 311/627/36 418/628/37 309/629/37\nf 327/630/38 420/631/38 325/632/38\nf 340/633/39 422/634/40 338/635/40\nf 346/636/41 423/637/41 350/638/41\nf 356/639/42 382/640/43 354/641/43\nf 368/642/14 426/643/44 366/644/44\nf 376/645/45 428/646/46 374/647/46\nf 386/648/20 430/649/47 384/650/47\nf 389/651/48 275/652/48 274/653/48\nf 279/654/49 364/655/50 363/656/50\nf 370/657/51 323/658/51 322/659/51\nf 433/660/14 435/661/52 432/662/53\nf 437/663/54 439/664/55 436/665/54\nf 267/666/2 337/667/2 412/668/2\nf 307/669/2 431/670/2 389/671/2\nf 375/672/56 441/673/37 377/674/37\nf 385/675/3 430/676/3 442/677/3\nf 444/678/57 446/679/57 443/680/57\nf 377/681/2 427/682/2 376/683/2\nf 355/684/35 447/685/58 357/686/58\nf 366/687/3 448/688/3 367/689/3\nf 450/690/37 452/691/37 449/692/37\nf 356/693/2 447/694/2 424/695/2\nf 339/696/31 454/697/59 341/698/30\nf 351/699/3 423/700/3 455/701/3\nf 457/702/60 459/703/60 456/704/60\nf 340/705/2 454/706/2 421/707/2\nf 326/708/61 461/709/62 328/710/62\nf 338/711/3 453/712/3 339/713/3\nf 463/714/63 465/715/31 462/716/63\nf 327/717/2 461/718/2 419/719/2\nf 310/720/64 467/721/46 312/722/46\nf 325/723/3 460/724/3 326/725/3\nf 469/726/65 471/727/66 468/728/65\nf 312/729/2 417/730/2 311/731/2\nf 294/732/67 472/733/67 296/734/67\nf 300/735/3 416/736/3 473/737/3\nf 475/738/68 477/739/68 474/740/68\nf 296/741/2 415/742/2 295/743/2\nf 261/744/54 478/745/69 278/746/69\nf 284/747/3 414/748/3 388/749/3\nf 480/750/70 482/751/70 479/752/70\nf 277/753/2 478/754/2 413/755/2\nf 385/756/32 483/757/33 387/758/33\nf 485/759/71 487/760/71 484/761/71\nf 489/762/26 491/763/26 488/764/26\nf 387/765/2 429/766/2 386/767/2\nf 493/768/72 495/769/73 492/770/72\nf 367/771/74 496/772/75 369/773/75\nf 498/774/76 500/775/77 497/776/76\nf 300/777/78 398/778/49 302/779/49\nf 375/780/3 428/781/3 440/782/3\nf 502/783/33 504/784/32 501/785/33\nf 321/786/70 372/787/70 371/788/70\nf 310/789/3 418/790/3 466/791/3\nf 506/792/79 508/793/79 505/794/79\nf 368/795/2 496/796/2 425/797/2\nf 351/798/51 348/799/51 347/800/51\nf 509/801/80 511/802/80 512/803/80\nf 511/802/81 514/804/82 512/803/82\nf 514/804/83 292/805/83 291/806/83\nf 509/801/84 516/807/84 515/808/84\nf 512/809/79 517/810/79 516/811/79\nf 517/810/85 291/613/86 412/812/85\nf 518/813/87 516/807/87 519/814/87\nf 519/814/88 517/815/89 520/816/88\nf 517/815/90 337/474/90 520/816/90\nf 518/813/91 511/802/91 510/817/91\nf 519/814/76 513/818/76 511/802/76\nf 520/816/92 292/805/93 513/818/94\nf 474/740/95 522/819/96 475/738/97\nf 522/819/98 523/820/99 524/821/98\nf 524/821/100 264/822/100 263/823/100\nf 475/738/101 525/824/101 476/825/101\nf 522/819/48 526/826/48 525/824/48\nf 526/827/102 263/616/102 413/828/102\nf 477/739/103 525/824/104 527/829/105\nf 525/824/106 528/830/107 527/829/108\nf 526/826/109 478/745/109 528/830/109\nf 477/739/110 521/831/110 474/740/110\nf 527/829/111 523/820/67 521/831/67\nf 528/830/112 264/822/113 523/820/113\nf 505/794/114 530/832/115 506/792/116\nf 530/832/117 531/833/117 532/834/117\nf 531/833/118 414/619/118 532/834/118\nf 507/835/119 530/832/120 533/836/119\nf 530/832/29 534/837/29 533/836/29\nf 534/837/121 414/619/122 298/838/121\nf 508/793/123 533/836/124 535/839/125\nf 533/836/126 536/840/126 535/839/127\nf 536/840/128 298/838/128 297/841/128\nf 508/793/129 529/842/129 505/794/129\nf 535/843/130 531/844/78 529/845/78\nf 536/846/131 388/847/132 531/844/132\nf 469/726/133 537/848/134 538/849/135\nf 537/848/136 540/850/137 538/849/138\nf 540/850/139 353/851/139 352/852/139\nf 469/853/140 541/854/141 470/855/141\nf 538/856/63 542/857/31 541/854/31\nf 542/857/142 352/622/143 415/858/142\nf 471/727/144 541/859/145 543/860/146\nf 543/860/147 542/861/148 544/862/147\nf 542/861/149 472/733/150 544/862/150\nf 471/727/151 537/848/152 468/728/152\nf 543/860/45 539/863/64 537/848/64\nf 544/862/153 353/851/154 539/863/154\nf 492/770/155 546/864/156 493/768/157\nf 546/864/158 547/865/159 548/866/158\nf 547/865/160 416/625/161 548/866/161\nf 494/867/162 546/864/163 549/868/162\nf 546/864/32 550/869/164 549/868/164\nf 550/869/165 416/625/166 399/870/165\nf 495/769/167 549/868/168 551/871/169\nf 549/868/170 552/872/171 551/871/171\nf 552/872/172 399/870/173 398/873/172\nf 495/769/174 545/874/174 492/770/174\nf 551/871/51 547/865/51 545/874/51\nf 552/875/84 473/876/84 547/877/84\nf 463/714/175 553/878/176 554/879/177\nf 553/878/178 556/880/179 554/879/179\nf 555/881/180 418/628/181 556/880/182\nf 463/714/183 557/882/184 464/883/185\nf 554/879/186 558/884/35 557/882/35\nf 558/884/187 418/628/188 417/885/187\nf 464/883/189 559/886/189 465/715/190\nf 559/886/191 558/884/192 560/887/193\nf 558/884/194 467/888/195 560/887/195\nf 465/715/102 553/878/102 462/716/102\nf 559/889/48 555/890/48 553/891/48\nf 560/892/196 466/893/196 555/890/196\nf 456/704/197 562/894/197 457/702/198\nf 562/894/199 563/895/199 564/896/200\nf 563/895/201 420/631/201 564/896/201\nf 457/702/202 565/897/202 458/898/202\nf 562/894/37 566/899/37 565/897/37\nf 566/899/203 420/631/203 419/900/203\nf 459/703/204 565/897/204 567/901/205\nf 565/897/206 568/902/207 567/901/208\nf 568/902/209 419/900/209 461/903/209\nf 459/703/210 561/904/143 456/704/143\nf 567/901/31 563/895/31 561/904/31\nf 568/902/211 460/905/211 563/895/211\nf 450/690/212 569/906/212 570/907/212\nf 569/906/213 572/908/213 570/907/213\nf 572/908/214 453/909/214 422/910/214\nf 450/690/215 573/911/216 451/912/216\nf 570/907/217 574/913/217 573/911/217\nf 574/914/218 422/634/219 421/915/218\nf 451/912/220 575/916/220 452/691/221\nf 575/916/222 574/913/222 576/917/222\nf 574/913/223 454/697/223 576/917/223\nf 452/691/188 569/906/187 449/692/187\nf 575/916/35 571/918/224 569/906/224\nf 576/917/184 453/909/183 571/918/183\nf 502/783/225 577/919/226 578/920/227\nf 577/919/228 580/921/229 578/920/230\nf 580/921/231 455/922/231 423/923/231\nf 502/783/232 581/924/232 503/925/232\nf 578/920/25 582/926/26 581/924/26\nf 582/927/233 423/637/233 349/928/233\nf 503/925/234 583/929/235 504/784/236\nf 583/929/237 582/926/238 584/930/239\nf 582/926/240 348/799/240 584/930/241\nf 501/785/242 583/929/243 577/919/242\nf 583/929/74 579/931/74 577/919/74\nf 584/930/244 455/922/245 579/931/245\nf 443/680/246 586/932/246 444/678/247\nf 585/933/248 588/934/249 586/932/249\nf 588/934/250 383/935/250 382/936/251\nf 444/937/252 589/938/252 445/939/252\nf 586/940/69 590/941/69 589/938/69\nf 590/941/253 382/640/254 424/942/253\nf 446/679/255 589/943/255 591/944/256\nf 591/944/257 590/945/258 592/946/257\nf 590/945/259 447/685/259 592/946/259\nf 446/679/260 585/933/260 443/680/260\nf 591/944/261 587/947/37 585/933/37\nf 592/946/262 383/935/263 587/947/263\nf 488/764/264 594/948/264 489/762/264\nf 593/949/265 596/950/266 594/948/266\nf 596/950/267 448/951/268 426/952/267\nf 489/762/269 597/953/269 490/954/269\nf 594/955/270 598/956/270 597/957/270\nf 598/956/271 426/643/272 425/958/271\nf 491/763/273 597/953/274 599/959/275\nf 599/959/276 598/960/277 600/961/276\nf 598/960/278 496/772/279 600/961/279\nf 491/763/280 593/949/281 488/764/281\nf 599/959/32 595/962/282 593/949/282\nf 600/961/283 448/951/284 595/962/284\nf 437/663/285 601/963/285 602/964/286\nf 602/964/287 603/965/288 604/966/287\nf 604/966/289 440/967/290 428/646/289\nf 437/663/291 605/968/113 438/969/292\nf 602/964/111 606/970/42 605/968/71\nf 606/970/293 428/646/294 427/971/293\nf 438/969/295 607/972/295 439/664/296\nf 605/968/297 608/973/298 607/972/298\nf 606/970/299 441/974/300 608/973/300\nf 439/664/219 601/963/219 436/665/219\nf 607/975/217 603/976/217 601/977/217\nf 608/978/216 440/979/301 603/976/301\nf 480/750/302 609/980/302 610/981/302\nf 610/981/303 611/982/303 612/983/303\nf 611/982/304 430/649/305 612/983/305\nf 480/750/306 613/984/307 481/985/307\nf 610/981/308 614/986/308 613/984/308\nf 614/986/309 430/649/309 429/987/309\nf 482/751/310 613/984/310 615/988/311\nf 613/984/312 616/989/313 615/988/314\nf 616/989/315 429/987/316 483/990/315\nf 482/751/233 609/980/233 479/752/233\nf 615/991/317 611/992/318 609/993/318\nf 616/994/319 442/995/320 611/992/320\nf 485/759/321 617/996/322 618/997/323\nf 617/996/324 620/998/324 618/997/324\nf 619/999/325 275/652/325 620/998/325\nf 485/759/326 621/1000/327 486/1001/327\nf 618/997/328 622/1002/328 621/1000/328\nf 622/1002/329 275/652/329 431/1003/329\nf 486/1001/330 623/1004/331 487/760/332\nf 623/1004/333 622/1002/333 624/1005/333\nf 624/1005/334 431/1003/334 308/1006/334\nf 487/760/335 617/996/254 484/761/254\nf 623/1004/336 619/999/69 617/996/69\nf 624/1005/252 276/1007/252 619/999/252\nf 433/660/337 625/1008/338 626/1009/339\nf 626/1009/340 627/1010/340 628/1011/340\nf 627/1010/341 364/655/342 628/1011/342\nf 433/660/343 629/1012/344 434/1013/344\nf 626/1009/20 630/1014/76 629/1012/76\nf 630/1014/345 364/655/345 282/1015/345\nf 434/1013/346 631/1016/347 435/661/348\nf 629/1012/349 632/1017/349 631/1016/349\nf 632/1017/350 282/1015/350 281/1018/351\nf 435/661/271 625/1008/352 432/662/352\nf 631/1016/353 627/1010/70 625/1008/70\nf 632/1019/354 365/1020/354 627/1021/354\nf 497/776/355 634/1022/356 498/774/357\nf 633/1023/358 636/1024/358 634/1022/358\nf 636/1024/359 324/1025/360 323/1026/361\nf 498/774/131 637/1027/132 499/1028/132\nf 634/1022/130 638/1029/362 637/1027/78\nf 638/1030/129 323/658/129 373/1031/129\nf 500/775/363 637/1027/364 639/1032/363\nf 639/1032/365 638/1029/365 640/1033/365\nf 638/1029/366 372/787/367 640/1033/367\nf 500/775/368 633/1023/368 497/776/368\nf 639/1032/44 635/1034/44 633/1023/44\nf 640/1033/369 324/1025/370 635/1034/370\nf 509/801/49 518/813/49 510/817/49\nf 642/1035/371 644/1036/371 641/1037/371\nf 645/1038/372 643/1039/372 642/1035/372\nf 647/1040/373 646/1041/373 645/1042/373\nf 649/1043/374 648/1044/374 647/1040/374\nf 651/1045/375 650/1046/375 649/1043/375\nf 653/1047/376 652/1048/376 651/1045/376\nf 655/1049/377 654/1050/377 653/1047/377\nf 657/1051/378 656/1052/378 655/1049/378\nf 659/1053/379 658/1054/379 657/1051/379\nf 661/1055/380 660/1056/380 659/1053/380\nf 663/1057/381 662/1058/381 661/1059/381\nf 665/1060/382 664/1061/382 663/1057/382\nf 667/1062/383 666/1063/383 665/1060/383\nf 669/1064/384 668/1065/384 667/1062/384\nf 671/1066/385 670/1067/385 669/1064/385\nf 673/1068/386 672/1069/386 671/1066/386\nf 675/1070/387 674/1071/387 673/1068/387\nf 677/1072/388 676/1073/388 675/1070/388\nf 679/1074/389 678/1075/389 677/1076/389\nf 681/1077/390 680/1078/390 679/1074/390\nf 683/1079/391 682/1080/391 681/1077/391\nf 685/1081/392 684/1082/392 683/1079/392\nf 690/1083/393 691/1084/394 686/1085/394\nf 687/1086/395 697/1087/395 698/1088/396\nf 701/1089/397 705/1090/398 706/1091/397\nf 715/1092/399 716/1093/400 709/1094/399\nf 718/1095/401 710/1096/401 709/1097/401\nf 720/1098/402 719/1099/402 718/1095/402\nf 722/1100/403 721/1101/403 720/1098/403\nf 724/1102/404 723/1103/404 722/1100/404\nf 735/1104/1 736/1105/1 725/1106/1\nf 745/1107/405 725/1108/405 724/1102/405\nf 641/1037/406 744/1109/406 745/1107/406\nf 753/1110/407 754/1111/407 745/1112/407\nf 763/1113/1 765/1114/1 766/1115/1\nf 763/1116/2 774/1117/2 782/1118/2\nf 772/1119/1 797/1120/1 798/1121/1\nf 799/1122/1 801/1123/1 802/1124/1\nf 767/1125/1 766/1115/1 803/1126/1\nf 773/1127/1 798/1121/1 804/1128/1\nf 805/1129/1 807/1130/1 808/1131/1\nf 768/1132/1 803/1126/1 809/1133/1\nf 774/1134/1 804/1128/1 810/1135/1\nf 811/1136/1 813/1137/1 814/1138/1\nf 815/1139/1 817/1140/1 818/1141/1\nf 775/1142/1 810/1135/1 819/1143/1\nf 800/1144/1 821/1145/1 801/1123/1\nf 776/1146/1 819/1143/1 822/1147/1\nf 806/1148/1 824/1149/1 807/1130/1\nf 777/1150/1 822/1147/1 825/1151/1\nf 812/1152/1 827/1153/1 813/1137/1\nf 816/1154/1 829/1155/1 817/1140/1\nf 778/1156/1 825/1151/1 830/1157/1\nf 820/1158/1 832/1159/1 821/1145/1\nf 779/1160/1 830/1157/1 833/1161/1\nf 823/1162/1 835/1163/1 824/1149/1\nf 780/1164/1 833/1161/1 836/1165/1\nf 826/1166/1 838/1167/1 827/1153/1\nf 828/1168/1 840/1169/1 829/1155/1\nf 781/1170/1 836/1165/1 841/1171/1\nf 831/1172/1 843/1173/1 832/1159/1\nf 782/1174/1 841/1171/1 844/1175/1\nf 834/1176/1 846/1177/1 835/1163/1\nf 783/1178/1 844/1175/1 847/1179/1\nf 837/1180/1 849/1181/1 838/1167/1\nf 839/1182/1 851/1183/1 840/1169/1\nf 784/1184/1 847/1179/1 852/1185/1\nf 853/1186/1 855/1187/1 856/1188/1\nf 857/1189/1 859/1190/1 860/1191/1\nf 861/1192/1 856/1188/1 862/1193/1\nf 858/1194/1 863/1195/1 859/1190/1\nf 864/1196/1 862/1193/1 865/1197/1\nf 808/1131/1 866/1198/1 863/1195/1\nf 867/1199/1 865/1197/1 868/1200/1\nf 807/1130/1 869/1201/1 866/1198/1\nf 870/1202/1 868/1200/1 871/1203/1\nf 824/1149/1 872/1204/1 869/1201/1\nf 873/1205/1 871/1203/1 874/1206/1\nf 835/1163/1 875/1207/1 872/1204/1\nf 876/1208/1 874/1206/1 877/1209/1\nf 878/1210/1 879/1211/1 880/1212/1\nf 846/1177/1 882/1213/1 875/1207/1\nf 883/1214/1 877/1209/1 884/1215/1\nf 885/1216/1 880/1212/1 886/1217/1\nf 881/1218/1 888/1219/1 882/1213/1\nf 765/1114/1 884/1215/1 889/1220/1\nf 797/1120/1 886/1217/1 890/1221/1\nf 887/1222/1 892/1223/1 888/1219/1\nf 766/1115/1 889/1220/1 893/1224/1\nf 798/1121/1 890/1221/1 894/1225/1\nf 891/1226/1 896/1227/1 892/1223/1\nf 803/1126/1 893/1224/1 897/1228/1\nf 804/1128/1 894/1225/1 898/1229/1\nf 895/1230/1 899/1231/1 896/1227/1\nf 809/1133/1 897/1228/1 879/1211/1\nf 810/1135/1 898/1229/1 900/1232/1\nf 814/1138/1 901/1233/1 899/1231/1\nf 818/1141/1 902/1234/1 903/1235/1\nf 819/1143/1 900/1232/1 904/1236/1\nf 905/1237/1 814/1138/1 895/1230/1\nf 771/1238/1 885/1216/1 797/1120/1\nf 764/1239/1 883/1214/1 765/1114/1\nf 906/1240/1 808/1131/1 858/1194/1\nf 770/1241/1 878/1210/1 885/1216/1\nf 796/1242/1 876/1208/1 883/1214/1\nf 907/1243/1 802/1124/1 908/1244/1\nf 769/1245/1 809/1133/1 878/1210/1\nf 795/1246/1 873/1205/1 876/1208/1\nf 909/1247/1 895/1230/1 891/1226/1\nf 794/1248/1 870/1202/1 873/1205/1\nf 910/1249/1 858/1194/1 857/1189/1\nf 793/1250/1 867/1199/1 870/1202/1\nf 911/1251/1 908/1244/1 912/1252/1\nf 792/1253/1 864/1196/1 867/1199/1\nf 913/1254/1 891/1226/1 887/1222/1\nf 791/1255/1 861/1192/1 864/1196/1\nf 914/1256/1 857/1189/1 915/1257/1\nf 916/1258/1 818/1141/1 917/1259/1\nf 790/1260/1 853/1186/1 861/1192/1\nf 918/1261/1 912/1252/1 919/1262/1\nf 789/1263/1 854/1264/1 853/1186/1\nf 920/1265/1 887/1222/1 881/1218/1\nf 788/1266/1 921/1267/1 854/1264/1\nf 922/1268/1 915/1257/1 923/1269/1\nf 787/1270/1 924/1271/1 921/1267/1\nf 850/1272/1 919/1262/1 851/1183/1\nf 848/1273/1 917/1259/1 849/1181/1\nf 786/1274/1 925/1275/1 924/1271/1\nf 845/1276/1 881/1218/1 846/1177/1\nf 785/1277/1 852/1185/1 925/1275/1\nf 842/1278/1 923/1269/1 843/1173/1\nf 927/1279/3 929/1280/3 926/1281/3\nf 931/1282/2 933/1283/2 930/1284/2\nf 934/1285/3 928/1286/3 927/1279/3\nf 936/1287/2 933/1283/2 937/1288/2\nf 938/1289/3 935/1290/3 934/1285/3\nf 940/1291/2 937/1288/2 941/1292/2\nf 938/1289/3 943/1293/3 939/1294/3\nf 940/1291/2 944/1295/2 855/1296/2\nf 942/1297/3 945/1298/3 943/1293/3\nf 856/1299/2 944/1295/2 946/1300/2\nf 859/1301/3 945/1298/3 860/1302/3\nf 856/1299/2 948/1303/2 862/1304/2\nf 859/1301/3 949/1305/3 947/1306/3\nf 865/1307/2 948/1303/2 950/1308/2\nf 866/1309/3 949/1305/3 863/1310/3\nf 865/1307/2 952/1311/2 868/1312/2\nf 869/1313/3 951/1314/3 866/1309/3\nf 871/1315/2 952/1311/2 954/1316/2\nf 869/1313/3 955/1317/3 953/1318/3\nf 871/1315/2 956/1319/2 874/1320/2\nf 875/1321/3 955/1317/3 872/1322/3\nf 877/1323/2 956/1319/2 958/1324/2\nf 880/1325/2 959/1326/2 960/1327/2\nf 875/1321/3 961/1328/3 957/1329/3\nf 877/1323/2 962/1330/2 884/1331/2\nf 880/1325/2 963/1332/2 886/1333/2\nf 888/1334/3 961/1328/3 882/1335/3\nf 889/1336/2 962/1330/2 965/1337/2\nf 886/1333/2 966/1338/2 890/1339/2\nf 888/1334/3 967/1340/3 964/1341/3\nf 893/1342/2 965/1337/2 968/1343/2\nf 894/1344/2 966/1338/2 969/1345/2\nf 915/1257/1 860/1191/1 942/1346/1\nf 854/1264/1 940/1347/1 855/1187/1\nf 923/1269/1 942/1346/1 938/1348/1\nf 921/1267/1 936/1349/1 940/1347/1\nf 843/1173/1 938/1348/1 934/1350/1\nf 924/1271/1 930/1351/1 936/1349/1\nf 832/1159/1 934/1350/1 927/1352/1\nf 925/1275/1 931/1353/1 930/1351/1\nf 821/1145/1 927/1352/1 926/1354/1\nf 852/1185/1 970/1355/1 931/1353/1\nf 801/1123/1 926/1354/1 971/1356/1\nf 847/1179/1 972/1357/1 970/1355/1\nf 802/1124/1 971/1356/1 973/1358/1\nf 844/1175/1 974/1359/1 972/1357/1\nf 908/1244/1 973/1358/1 975/1360/1\nf 841/1171/1 976/1361/1 974/1359/1\nf 912/1252/1 975/1360/1 977/1362/1\nf 836/1165/1 978/1363/1 976/1361/1\nf 919/1262/1 977/1362/1 979/1364/1\nf 917/1259/1 903/1235/1 980/1365/1\nf 833/1161/1 981/1366/1 978/1363/1\nf 851/1183/1 979/1364/1 982/1367/1\nf 849/1181/1 980/1365/1 983/1368/1\nf 830/1157/1 984/1369/1 981/1366/1\nf 840/1169/1 982/1367/1 985/1370/1\nf 838/1167/1 983/1368/1 986/1371/1\nf 825/1151/1 987/1372/1 984/1369/1\nf 829/1155/1 985/1370/1 988/1373/1\nf 827/1153/1 986/1371/1 989/1374/1\nf 822/1147/1 904/1236/1 987/1372/1\nf 817/1140/1 988/1373/1 902/1234/1\nf 813/1137/1 989/1374/1 901/1233/1\nf 931/1282/2 990/1375/2 932/1376/2\nf 926/1281/3 991/1377/3 971/1378/3\nf 972/1379/2 990/1375/2 970/1380/2\nf 971/1378/3 993/1381/3 973/1382/3\nf 974/1383/2 992/1384/2 972/1379/2\nf 975/1385/3 993/1381/3 995/1386/3\nf 974/1383/2 996/1387/2 994/1388/2\nf 975/1385/3 997/1389/3 977/1390/3\nf 976/1391/2 998/1392/2 996/1387/2\nf 979/1393/3 997/1389/3 999/1394/3\nf 980/1395/3 1000/1396/3 1001/1397/3\nf 978/1398/2 1002/1399/2 998/1392/2\nf 982/1400/3 999/1394/3 1003/1401/3\nf 980/1395/3 1004/1402/3 983/1403/3\nf 981/1404/2 1005/1405/2 1002/1399/2\nf 982/1400/3 1006/1406/3 985/1407/3\nf 983/1403/3 1007/1408/3 986/1409/3\nf 984/1410/2 1008/1411/2 1005/1405/2\nf 988/1412/3 1006/1406/3 1009/1413/3\nf 986/1409/3 1010/1414/3 989/1415/3\nf 904/1416/2 1008/1411/2 987/1417/2\nf 902/1418/3 1009/1413/3 1012/1419/3\nf 901/1420/3 1010/1414/3 1013/1421/3\nf 904/1416/2 1014/1422/2 1011/1423/2\nf 902/1418/3 1000/1396/3 903/1424/3\nf 901/1420/3 1015/1425/3 899/1426/3\nf 898/1427/2 1014/1422/2 900/1428/2\nf 897/1429/2 959/1326/2 879/1430/2\nf 896/1431/3 1015/1425/3 1018/1432/3\nf 894/1344/2 1016/1433/2 898/1427/2\nf 897/1429/2 968/1343/2 1017/1434/2\nf 896/1431/3 967/1340/3 892/1435/3\nf 1020/1436/4 1022/1437/4 1019/1438/4\nf 1001/1439/1 1019/1440/1 1004/1441/1\nf 1017/1442/1 1020/1443/1 1001/1439/1\nf 968/1444/1 1021/1445/1 1017/1442/1\nf 1004/1441/1 1022/1446/1 968/1444/1\nf 1024/1447/3 1026/1448/3 1023/1449/3\nf 961/1450/1 1028/1451/1 957/1452/1\nf 948/1453/1 1027/1454/1 961/1450/1\nf 946/1455/1 1029/1456/1 948/1453/1\nf 957/1452/1 1030/1457/1 946/1455/1\nf 1032/1458/408 1034/1459/408 1031/1460/408\nf 939/1461/1 1031/1462/1 935/1463/1\nf 994/1464/1 1032/1465/1 939/1461/1\nf 996/1466/1 1033/1467/1 994/1464/1\nf 935/1463/1 1034/1468/1 996/1466/1\nf 1035/1469/3 1037/1470/3 1038/1471/3\nf 1003/1472/1 1023/1473/1 1006/1474/1\nf 969/1475/1 1024/1476/1 1003/1472/1\nf 966/1477/1 1039/1478/1 969/1475/1\nf 1006/1474/1 1040/1479/1 966/1477/1\nf 1042/1480/2 1044/1481/2 1041/1482/2\nf 1015/1483/1 1046/1484/1 1018/1485/1\nf 956/1486/1 1045/1487/1 1015/1483/1\nf 954/1488/1 1047/1489/1 956/1486/1\nf 1018/1485/1 1048/1490/1 954/1488/1\nf 1050/1491/7 1052/1492/7 1049/1493/7\nf 949/1494/1 1049/1495/1 947/1496/1\nf 933/1497/1 1050/1498/1 949/1494/1\nf 932/1499/1 1051/1500/1 933/1497/1\nf 947/1496/1 1052/1501/1 932/1499/1\nf 1027/1502/3 1054/1503/3 1028/1504/3\nf 993/1505/1 1056/1506/1 995/1507/1\nf 1008/1508/1 1055/1509/1 993/1505/1\nf 1011/1510/1 1057/1511/1 1008/1508/1\nf 995/1507/1 1058/1512/1 1011/1510/1\nf 1047/1513/2 1059/1514/2 1060/1515/2\nf 1004/1441/1 1062/1516/1 1007/1517/1\nf 968/1444/1 1061/1518/1 1004/1441/1\nf 965/1519/1 1063/1520/1 968/1444/1\nf 1007/1517/1 1064/1521/1 965/1519/1\nf 1066/1522/8 1068/1523/8 1065/1524/8\nf 957/1452/1 1065/1525/1 955/1526/1\nf 946/1455/1 1066/1527/1 957/1452/1\nf 944/1528/1 1067/1529/1 946/1455/1\nf 955/1526/1 1068/1530/1 944/1528/1\nf 1035/1531/217 1070/1532/217 1069/1533/217\nf 935/1463/1 1072/1534/1 928/1535/1\nf 996/1466/1 1071/1536/1 935/1463/1\nf 998/1537/1 1073/1538/1 996/1466/1\nf 928/1535/1 1074/1539/1 998/1537/1\nf 1076/1540/10 1078/1541/10 1075/1542/10\nf 1006/1474/1 1075/1543/1 1009/1544/1\nf 966/1477/1 1076/1545/1 1006/1474/1\nf 963/1546/1 1077/1547/1 966/1477/1\nf 1009/1544/1 1078/1548/1 963/1546/1\nf 1080/1549/11 1082/1550/11 1079/1551/11\nf 1018/1485/1 1079/1552/1 967/1553/1\nf 954/1488/1 1080/1554/1 1018/1485/1\nf 952/1555/1 1081/1556/1 954/1488/1\nf 967/1553/1 1082/1557/1 952/1555/1\nf 1084/1558/3 1086/1559/3 1083/1560/3\nf 947/1496/1 1088/1561/1 945/1562/1\nf 932/1499/1 1087/1563/1 947/1496/1\nf 990/1564/1 1089/1565/1 932/1499/1\nf 945/1562/1 1090/1566/1 990/1564/1\nf 1092/1567/12 1094/1568/12 1091/1569/12\nf 995/1507/1 1091/1570/1 997/1571/1\nf 1011/1510/1 1092/1572/1 995/1507/1\nf 1014/1573/1 1093/1574/1 1011/1510/1\nf 997/1571/1 1094/1575/1 1014/1573/1\nf 1096/1576/13 1098/1577/13 1095/1578/13\nf 1007/1517/1 1095/1579/1 1010/1580/1\nf 965/1519/1 1096/1581/1 1007/1517/1\nf 962/1582/1 1097/1583/1 965/1519/1\nf 1010/1580/1 1098/1584/1 962/1582/1\nf 1028/1585/53 1099/1586/53 1030/1587/53\nf 955/1526/1 1101/1588/1 953/1589/1\nf 944/1528/1 1100/1590/1 955/1526/1\nf 941/1591/1 1102/1592/1 944/1528/1\nf 953/1589/1 1103/1593/1 941/1591/1\nf 1105/1594/15 1107/1595/15 1104/1596/15\nf 928/1535/1 1104/1597/1 929/1598/1\nf 998/1537/1 1105/1599/1 928/1535/1\nf 1002/1600/1 1106/1601/1 998/1537/1\nf 929/1598/1 1107/1602/1 1002/1600/1\nf 1109/1603/2 1111/1604/2 1108/1605/2\nf 1009/1544/1 1113/1606/1 1012/1607/1\nf 963/1546/1 1112/1608/1 1009/1544/1\nf 960/1609/1 1108/1610/1 963/1546/1\nf 1012/1607/1 1109/1611/1 960/1609/1\nf 1056/1612/3 1114/1613/3 1115/1614/3\nf 967/1553/1 1117/1615/1 964/1616/1\nf 952/1555/1 1116/1617/1 967/1553/1\nf 950/1618/1 1118/1619/1 952/1555/1\nf 964/1616/1 1119/1620/1 950/1618/1\nf 1121/1621/17 1123/1622/17 1120/1623/17\nf 945/1562/1 1120/1624/1 943/1625/1\nf 990/1564/1 1121/1626/1 945/1562/1\nf 992/1627/1 1122/1628/1 990/1564/1\nf 943/1625/1 1123/1629/1 992/1627/1\nf 1124/1630/3 1126/1631/3 1127/1632/3\nf 997/1571/1 1129/1633/1 999/1634/1\nf 1014/1573/1 1128/1635/1 997/1571/1\nf 1016/1636/1 1130/1637/1 1014/1573/1\nf 999/1634/1 1131/1638/1 1016/1636/1\nf 1132/1639/2 1134/1640/2 1135/1641/2\nf 1010/1580/1 1137/1642/1 1013/1643/1\nf 962/1582/1 1136/1644/1 1010/1580/1\nf 958/1645/1 1138/1646/1 962/1582/1\nf 1013/1643/1 1139/1647/1 958/1645/1\nf 1141/1648/18 1143/1649/18 1140/1650/18\nf 953/1589/1 1140/1651/1 951/1652/1\nf 941/1591/1 1141/1653/1 953/1589/1\nf 937/1654/1 1142/1655/1 941/1591/1\nf 951/1652/1 1143/1656/1 937/1654/1\nf 1116/1657/3 1145/1658/3 1117/1659/3\nf 929/1598/1 1147/1660/1 991/1661/1\nf 1002/1600/1 1146/1662/1 929/1598/1\nf 1005/1663/1 1148/1664/1 1002/1600/1\nf 991/1661/1 1149/1665/1 1005/1663/1\nf 1046/1666/409 1059/1667/409 1048/1668/409\nf 1000/1669/1 1035/1670/1 1001/1439/1\nf 959/1671/1 1036/1672/1 1000/1669/1\nf 1017/1442/1 1151/1673/1 959/1671/1\nf 1001/1439/1 1069/1674/1 1017/1442/1\nf 1153/1675/21 1155/1676/21 1152/1677/21\nf 1012/1607/1 1152/1678/1 1000/1669/1\nf 960/1609/1 1153/1679/1 1012/1607/1\nf 959/1671/1 1154/1680/1 960/1609/1\nf 1000/1669/1 1155/1681/1 959/1671/1\nf 1157/1682/22 1159/1683/22 1156/1684/22\nf 964/1616/1 1156/1685/1 961/1450/1\nf 950/1618/1 1157/1686/1 964/1616/1\nf 948/1453/1 1158/1687/1 950/1618/1\nf 961/1450/1 1159/1688/1 948/1453/1\nf 1064/1689/2 1161/1690/2 1063/1691/2\nf 943/1625/1 1124/1692/1 939/1461/1\nf 992/1627/1 1125/1693/1 943/1625/1\nf 994/1464/1 1041/1694/1 992/1627/1\nf 939/1461/1 1042/1695/1 994/1464/1\nf 1163/1696/23 1165/1697/23 1162/1698/23\nf 999/1634/1 1162/1699/1 1003/1472/1\nf 1016/1636/1 1163/1700/1 999/1634/1\nf 969/1475/1 1164/1701/1 1016/1636/1\nf 1003/1472/1 1165/1702/1 969/1475/1\nf 1167/1703/24 1169/1704/24 1166/1705/24\nf 1013/1643/1 1166/1706/1 1015/1483/1\nf 958/1645/1 1167/1707/1 1013/1643/1\nf 956/1486/1 1168/1708/1 958/1645/1\nf 1015/1483/1 1169/1709/1 956/1486/1\nf 1124/1710/26 1043/1711/26 1042/1712/26\nf 951/1652/1 1083/1713/1 949/1494/1\nf 937/1654/1 1084/1714/1 951/1652/1\nf 933/1497/1 1132/1715/1 937/1654/1\nf 949/1494/1 1133/1716/1 933/1497/1\nf 1171/1717/27 1173/1718/27 1170/1719/27\nf 991/1661/1 1170/1720/1 993/1505/1\nf 1005/1663/1 1171/1721/1 991/1661/1\nf 1008/1508/1 1172/1722/1 1005/1663/1\nf 993/1505/1 1173/1723/1 1008/1508/1\nf 1029/1724/75 1053/1725/75 1027/1726/410\nf 1039/1727/411 1025/1728/63 1024/1729/63\nf 1047/1730/33 1176/1731/164 1045/1732/164\nf 1057/1733/58 1114/1734/412 1055/1735/412\nf 1063/1736/413 1178/1737/413 1061/1738/413\nf 1073/1739/37 1180/1740/36 1071/1741/36\nf 1089/1742/414 1182/1743/414 1087/1744/414\nf 1102/1745/69 1184/1746/54 1100/1747/54\nf 1108/1748/41 1185/1749/41 1112/1750/41\nf 1118/1751/67 1144/1752/111 1116/1753/111\nf 1130/1754/14 1188/1755/14 1128/1756/53\nf 1138/1757/64 1190/1758/46 1136/1759/46\nf 1148/1760/76 1192/1761/76 1146/1762/76\nf 1151/1763/415 1037/1764/416 1036/1765/416\nf 1041/1766/49 1126/1767/49 1125/1768/49\nf 1132/1769/51 1085/1770/79 1084/1771/79\nf 1195/1772/308 1197/1773/308 1194/1774/308\nf 1199/1775/69 1201/1776/54 1198/1777/69\nf 1029/1778/2 1099/1779/2 1174/1780/2\nf 1069/1781/2 1193/1782/2 1151/1783/2\nf 1137/1784/36 1203/1785/37 1139/1786/37\nf 1147/1787/3 1192/1788/3 1204/1789/3\nf 1206/1790/57 1208/1791/57 1205/1792/57\nf 1139/1793/2 1189/1794/2 1138/1795/2\nf 1117/1796/224 1209/1797/224 1119/1798/224\nf 1128/1799/3 1210/1800/3 1129/1801/3\nf 1212/1802/37 1214/1803/417 1211/1804/37\nf 1118/1805/2 1209/1806/2 1186/1807/2\nf 1101/1808/411 1216/1809/411 1103/1810/411\nf 1113/1811/3 1185/1812/3 1217/1813/3\nf 1219/1814/35 1221/1815/60 1218/1816/35\nf 1102/1817/2 1216/1818/2 1183/1819/2\nf 1088/1820/65 1223/1821/65 1090/1822/65\nf 1100/1823/3 1215/1824/3 1101/1825/3\nf 1225/1826/418 1227/1827/418 1224/1828/418\nf 1089/1829/2 1223/1830/2 1181/1831/2\nf 1072/1832/64 1229/1833/64 1074/1834/64\nf 1087/1835/3 1222/1836/3 1088/1837/3\nf 1231/1838/66 1233/1839/66 1230/1840/66\nf 1074/1841/2 1179/1842/2 1073/1843/2\nf 1056/1844/419 1234/1845/67 1058/1846/67\nf 1062/1847/3 1178/1848/3 1235/1849/3\nf 1237/1850/420 1239/1851/328 1236/1852/420\nf 1058/1853/2 1177/1854/2 1057/1855/2\nf 1023/1856/421 1240/1857/421 1040/1858/421\nf 1045/1859/3 1150/1860/3 1046/1861/3\nf 1242/1862/353 1244/1863/353 1241/1864/353\nf 1039/1865/2 1240/1866/2 1175/1867/2\nf 1147/1868/422 1245/1869/423 1149/1870/423\nf 1247/1871/71 1249/1872/424 1246/1873/71\nf 1251/1874/26 1253/1875/26 1250/1876/26\nf 1149/1877/2 1191/1878/2 1148/1879/2\nf 1255/1880/72 1257/1881/425 1254/1882/72\nf 1129/1883/75 1258/1884/75 1131/1885/75\nf 1260/1886/77 1262/1887/20 1259/1888/77\nf 1062/1889/78 1160/1890/78 1064/1891/78\nf 1137/1892/3 1190/1893/3 1202/1894/3\nf 1264/1895/426 1266/1896/422 1263/1897/426\nf 1083/1898/70 1134/1899/70 1133/1900/70\nf 1072/1901/3 1180/1902/3 1228/1903/3\nf 1268/1904/79 1270/1905/79 1267/1906/79\nf 1130/1907/2 1258/1908/2 1187/1909/2\nf 1113/1910/51 1110/1911/79 1109/1912/79\nf 1272/1913/427 1274/1914/427 1271/1915/428\nf 1274/1914/429 1275/1916/82 1276/1917/429\nf 1276/1917/83 1054/1918/83 1053/1919/83\nf 1271/1915/84 1278/1920/84 1277/1921/84\nf 1274/1922/51 1279/1923/51 1278/1924/51\nf 1279/1923/430 1053/1725/431 1174/1925/430\nf 1277/1921/432 1281/1926/87 1280/1927/87\nf 1278/1920/433 1282/1928/89 1281/1926/434\nf 1279/1929/90 1099/1586/90 1282/1928/435\nf 1280/1927/91 1273/1930/91 1272/1913/91\nf 1281/1926/76 1275/1916/76 1273/1930/76\nf 1282/1928/92 1054/1918/92 1275/1916/92\nf 1236/1852/95 1284/1931/96 1237/1850/436\nf 1284/1931/437 1285/1932/438 1286/1933/437\nf 1286/1933/100 1026/1934/100 1025/1935/100\nf 1237/1850/439 1287/1936/101 1238/1937/101\nf 1284/1931/48 1288/1938/48 1287/1936/48\nf 1288/1939/440 1025/1728/102 1175/1940/440\nf 1239/1851/103 1287/1936/104 1289/1941/105\nf 1287/1936/441 1290/1942/442 1289/1941/442\nf 1288/1938/443 1240/1857/443 1290/1942/444\nf 1239/1851/110 1283/1943/445 1236/1852/445\nf 1289/1941/419 1285/1932/419 1283/1943/419\nf 1290/1942/446 1026/1934/446 1285/1932/446\nf 1268/1904/447 1291/1944/447 1292/1945/448\nf 1292/1945/117 1293/1946/117 1294/1947/117\nf 1294/1947/118 1150/1948/118 1176/1731/118\nf 1269/1949/119 1292/1945/119 1295/1950/119\nf 1292/1945/28 1296/1951/29 1295/1950/29\nf 1296/1951/242 1176/1731/449 1060/1952/242\nf 1269/1949/450 1297/1953/450 1270/1905/451\nf 1297/1953/126 1296/1951/126 1298/1954/126\nf 1296/1951/128 1059/1955/128 1298/1954/128\nf 1270/1905/129 1291/1944/129 1267/1906/129\nf 1297/1956/49 1293/1957/49 1291/1958/49\nf 1298/1959/452 1150/1960/453 1293/1957/453\nf 1231/1838/133 1299/1961/134 1300/1962/135\nf 1299/1961/136 1302/1963/138 1300/1962/138\nf 1301/1964/139 1114/1965/139 1302/1963/454\nf 1231/1966/141 1303/1967/141 1232/1968/141\nf 1300/1969/63 1304/1970/31 1303/1967/31\nf 1304/1970/143 1114/1734/143 1177/1971/143\nf 1232/1972/144 1305/1973/455 1233/1839/456\nf 1305/1973/147 1304/1974/148 1306/1975/147\nf 1306/1975/150 1177/1976/149 1234/1845/150\nf 1233/1839/457 1299/1961/457 1230/1840/457\nf 1305/1973/458 1301/1964/458 1299/1961/458\nf 1306/1975/326 1115/1977/326 1301/1964/326\nf 1254/1882/156 1308/1978/156 1255/1880/157\nf 1308/1978/158 1309/1979/159 1310/1980/158\nf 1309/1979/160 1178/1737/160 1310/1980/160\nf 1255/1880/162 1311/1981/163 1256/1982/163\nf 1308/1978/32 1312/1983/32 1311/1981/32\nf 1312/1983/280 1178/1737/280 1161/1984/280\nf 1257/1881/168 1311/1981/168 1313/1985/459\nf 1311/1981/170 1314/1986/171 1313/1985/171\nf 1314/1986/172 1161/1984/172 1160/1987/172\nf 1257/1881/174 1307/1988/174 1254/1882/174\nf 1313/1985/51 1309/1979/51 1307/1988/51\nf 1314/1989/84 1235/1990/84 1309/1991/84\nf 1224/1828/460 1316/1992/461 1225/1826/462\nf 1316/1992/463 1317/1993/464 1318/1994/179\nf 1317/1993/180 1180/1740/180 1318/1994/180\nf 1225/1826/184 1319/1995/184 1226/1996/184\nf 1316/1992/224 1320/1997/186 1319/1995/186\nf 1320/1997/187 1180/1740/187 1179/1998/187\nf 1227/1827/465 1319/1995/466 1321/1999/467\nf 1321/1999/193 1320/1997/468 1322/2000/469\nf 1322/2000/195 1179/1998/470 1229/2001/195\nf 1227/1827/471 1315/2002/471 1224/1828/471\nf 1321/2003/48 1317/2004/48 1315/2005/48\nf 1322/2006/196 1228/2007/472 1317/2004/472\nf 1219/1814/473 1323/2008/474 1324/2009/475\nf 1324/2009/199 1325/2010/199 1326/2011/199\nf 1325/2010/201 1182/1743/201 1326/2011/476\nf 1219/1814/477 1327/2012/477 1220/2013/477\nf 1324/2009/37 1328/2014/37 1327/2012/37\nf 1328/2014/260 1182/1743/260 1181/2015/260\nf 1220/2013/478 1329/2016/205 1221/1815/479\nf 1327/2012/207 1330/2017/207 1329/2016/207\nf 1330/2017/209 1181/2015/209 1223/2018/209\nf 1221/1815/143 1323/2008/143 1218/1816/480\nf 1329/2016/31 1325/2010/481 1323/2008/63\nf 1330/2017/211 1222/2019/211 1325/2010/211\nf 1212/1802/482 1331/2020/482 1332/2021/482\nf 1331/2020/483 1334/2022/483 1332/2021/483\nf 1334/2022/484 1215/2023/214 1184/2024/484\nf 1212/1802/216 1335/2025/215 1213/2026/215\nf 1332/2021/217 1336/2027/217 1335/2025/217\nf 1336/2028/219 1184/1746/219 1183/2029/219\nf 1213/2026/221 1337/2030/221 1214/1803/485\nf 1337/2030/222 1336/2027/222 1338/2031/222\nf 1336/2027/223 1216/1809/486 1338/2031/486\nf 1214/1803/187 1331/2020/188 1211/1804/188\nf 1337/2030/186 1333/2032/186 1331/2020/186\nf 1338/2031/487 1215/2023/183 1333/2032/183\nf 1264/1895/488 1339/2033/488 1340/2034/489\nf 1340/2034/229 1341/2035/229 1342/2036/229\nf 1342/2036/231 1217/2037/231 1185/2038/231\nf 1264/1895/232 1343/2039/232 1265/2040/490\nf 1340/2034/26 1344/2041/26 1343/2039/26\nf 1344/2042/233 1185/1749/233 1111/2043/233\nf 1265/2040/491 1345/2044/491 1266/1896/492\nf 1343/2039/238 1346/2045/238 1345/2044/238\nf 1344/2041/240 1110/1911/240 1346/2045/240\nf 1266/1896/242 1339/2033/449 1263/1897/449\nf 1345/2044/29 1341/2035/29 1339/2033/29\nf 1346/2045/493 1217/2037/493 1341/2035/493\nf 1205/1792/246 1348/2046/246 1206/1790/247\nf 1348/2046/494 1349/2047/248 1350/2048/495\nf 1349/2047/250 1144/2049/250 1350/2048/251\nf 1206/2050/252 1351/2051/252 1207/2052/252\nf 1348/2053/421 1352/2054/39 1351/2051/39\nf 1352/2054/496 1144/1752/496 1186/2055/496\nf 1208/1791/255 1351/2056/255 1353/2057/256\nf 1351/2056/497 1354/2058/257 1353/2057/498\nf 1354/2058/259 1186/2059/259 1209/1797/259\nf 1208/1791/260 1347/2060/260 1205/1792/260\nf 1353/2057/36 1349/2047/56 1347/2060/56\nf 1354/2058/202 1145/2061/499 1349/2047/499\nf 1250/1876/500 1356/2062/501 1251/1874/501\nf 1355/2063/502 1358/2064/266 1356/2062/503\nf 1358/2064/267 1210/2065/268 1188/2066/267\nf 1251/1874/269 1359/2067/269 1252/2068/269\nf 1356/2069/70 1360/2070/70 1359/2071/70\nf 1360/2070/272 1188/1755/504 1187/2072/272\nf 1253/1875/505 1359/2067/505 1361/2073/505\nf 1361/2073/506 1360/2074/506 1362/2075/506\nf 1360/2074/278 1258/1884/507 1362/2075/279\nf 1253/1875/280 1355/2063/280 1250/1876/280\nf 1361/2073/32 1357/2076/32 1355/2063/32\nf 1362/2075/163 1210/2065/162 1357/2076/162\nf 1199/1775/508 1363/2077/285 1364/2078/509\nf 1364/2078/510 1365/2079/288 1366/2080/510\nf 1365/2079/511 1190/1758/289 1366/2080/289\nf 1199/1775/113 1367/2081/113 1200/2082/113\nf 1364/2078/419 1368/2083/419 1367/2081/419\nf 1368/2083/512 1190/1758/513 1189/2084/512\nf 1200/2082/514 1369/2085/295 1201/1776/515\nf 1367/2081/516 1370/2086/298 1369/2085/298\nf 1370/2086/299 1189/2084/299 1203/2087/300\nf 1201/1776/219 1363/2077/219 1198/1777/219\nf 1369/2088/217 1365/2089/217 1363/2090/217\nf 1370/2091/215 1202/2092/216 1365/2089/216\nf 1242/1862/302 1371/2093/302 1372/2094/302\nf 1371/2093/517 1374/2095/303 1372/2094/518\nf 1373/2096/304 1192/1761/305 1374/2095/305\nf 1242/1862/307 1375/2097/307 1243/2098/307\nf 1372/2094/308 1376/2099/519 1375/2097/519\nf 1376/2099/520 1192/1761/368 1191/2100/520\nf 1243/2098/310 1377/2101/310 1244/1863/311\nf 1377/2101/314 1376/2099/312 1378/2102/314\nf 1378/2102/315 1191/2100/316 1245/2103/315\nf 1244/1863/233 1371/2093/233 1241/1864/233\nf 1371/2104/26 1378/2105/26 1373/2106/26\nf 1378/2105/490 1204/2107/521 1373/2106/521\nf 1246/1873/321 1380/2108/321 1247/1871/522\nf 1379/2109/324 1382/2110/324 1380/2108/324\nf 1381/2111/325 1037/1764/325 1382/2110/325\nf 1247/1871/523 1383/2112/326 1248/2113/326\nf 1380/2108/46 1384/2114/46 1383/2112/46\nf 1384/2114/329 1037/1764/524 1193/2115/329\nf 1248/2113/330 1385/2116/525 1249/1872/526\nf 1383/2112/333 1386/2117/333 1385/2116/333\nf 1386/2117/334 1193/2115/334 1070/2118/334\nf 1249/1872/335 1379/2109/335 1246/1873/335\nf 1385/2116/69 1381/2111/69 1379/2109/69\nf 1386/2117/252 1038/2119/252 1381/2111/252\nf 1195/1772/339 1387/2120/339 1388/2121/339\nf 1388/2121/527 1389/2122/527 1390/2123/527\nf 1389/2122/341 1126/1767/528 1390/2123/342\nf 1195/1772/93 1391/2124/92 1196/2125/92\nf 1388/2121/20 1392/2126/20 1391/2124/529\nf 1392/2126/530 1126/1767/530 1044/2127/530\nf 1196/2125/531 1393/2128/531 1197/1773/531\nf 1391/2124/532 1394/2129/532 1393/2128/532\nf 1394/2129/533 1044/2127/534 1043/2130/533\nf 1197/1773/535 1387/2120/536 1194/1774/536\nf 1393/2128/70 1389/2122/70 1387/2120/70\nf 1394/2131/354 1127/2132/354 1389/2133/354\nf 1259/1888/355 1396/2134/355 1260/1886/537\nf 1395/2135/538 1398/2136/539 1396/2134/358\nf 1398/2136/360 1086/2137/360 1085/2138/360\nf 1260/1886/132 1399/2139/131 1261/2140/131\nf 1396/2134/130 1400/2141/362 1399/2139/362\nf 1400/2142/129 1085/1770/129 1135/2143/129\nf 1262/1887/363 1399/2139/363 1401/2144/540\nf 1401/2144/541 1400/2141/542 1402/2145/541\nf 1400/2141/367 1134/1899/367 1402/2145/367\nf 1262/1887/520 1395/2135/520 1259/1888/520\nf 1401/2144/308 1397/2146/543 1395/2135/543\nf 1402/2145/306 1086/2137/306 1397/2146/306\nf 1271/1915/49 1280/1927/49 1272/1913/49\nf 1403/2147/1 1405/2148/1 1406/2149/1\nf 1403/2150/2 1414/2151/2 1422/2152/2\nf 1412/2153/1 1437/2154/1 1438/2155/1\nf 1439/2156/1 1441/2157/1 1442/2158/1\nf 1407/2159/1 1406/2149/1 1443/2160/1\nf 1413/2161/1 1438/2155/1 1444/2162/1\nf 1445/2163/1 1447/2164/1 1448/2165/1\nf 1408/2166/1 1443/2160/1 1449/2167/1\nf 1414/2168/1 1444/2162/1 1450/2169/1\nf 1451/2170/1 1453/2171/1 1454/2172/1\nf 1455/2173/1 1457/2174/1 1458/2175/1\nf 1415/2176/1 1450/2169/1 1459/2177/1\nf 1440/2178/1 1461/2179/1 1441/2157/1\nf 1416/2180/1 1459/2177/1 1462/2181/1\nf 1446/2182/1 1464/2183/1 1447/2164/1\nf 1417/2184/1 1462/2181/1 1465/2185/1\nf 1452/2186/1 1467/2187/1 1453/2171/1\nf 1456/2188/1 1469/2189/1 1457/2174/1\nf 1418/2190/1 1465/2185/1 1470/2191/1\nf 1460/2192/1 1472/2193/1 1461/2179/1\nf 1419/2194/1 1470/2191/1 1473/2195/1\nf 1463/2196/1 1475/2197/1 1464/2183/1\nf 1420/2198/1 1473/2195/1 1476/2199/1\nf 1466/2200/1 1478/2201/1 1467/2187/1\nf 1468/2202/1 1480/2203/1 1469/2189/1\nf 1421/2204/1 1476/2199/1 1481/2205/1\nf 1471/2206/1 1483/2207/1 1472/2193/1\nf 1422/2208/1 1481/2205/1 1484/2209/1\nf 1474/2210/1 1486/2211/1 1475/2197/1\nf 1423/2212/1 1484/2209/1 1487/2213/1\nf 1477/2214/1 1489/2215/1 1478/2201/1\nf 1479/2216/1 1491/2217/1 1480/2203/1\nf 1424/2218/1 1487/2213/1 1492/2219/1\nf 1493/2220/1 1495/2221/1 1496/2222/1\nf 1497/2223/1 1499/2224/1 1500/2225/1\nf 1501/2226/1 1496/2222/1 1502/2227/1\nf 1498/2228/1 1503/2229/1 1499/2224/1\nf 1504/2230/1 1502/2227/1 1505/2231/1\nf 1448/2165/1 1506/2232/1 1503/2229/1\nf 1507/2233/1 1505/2231/1 1508/2234/1\nf 1447/2164/1 1509/2235/1 1506/2232/1\nf 1510/2236/1 1508/2234/1 1511/2237/1\nf 1464/2183/1 1512/2238/1 1509/2235/1\nf 1513/2239/1 1511/2237/1 1514/2240/1\nf 1475/2197/1 1515/2241/1 1512/2238/1\nf 1516/2242/1 1514/2240/1 1517/2243/1\nf 1518/2244/1 1519/2245/1 1520/2246/1\nf 1486/2211/1 1522/2247/1 1515/2241/1\nf 1523/2248/1 1517/2243/1 1524/2249/1\nf 1525/2250/1 1520/2246/1 1526/2251/1\nf 1521/2252/1 1528/2253/1 1522/2247/1\nf 1405/2148/1 1524/2249/1 1529/2254/1\nf 1437/2154/1 1526/2251/1 1530/2255/1\nf 1527/2256/1 1532/2257/1 1528/2253/1\nf 1406/2149/1 1529/2254/1 1533/2258/1\nf 1438/2155/1 1530/2255/1 1534/2259/1\nf 1531/2260/1 1536/2261/1 1532/2257/1\nf 1443/2160/1 1533/2258/1 1537/2262/1\nf 1444/2162/1 1534/2259/1 1538/2263/1\nf 1535/2264/1 1539/2265/1 1536/2261/1\nf 1449/2167/1 1537/2262/1 1519/2245/1\nf 1450/2169/1 1538/2263/1 1540/2266/1\nf 1454/2172/1 1541/2267/1 1539/2265/1\nf 1458/2175/1 1542/2268/1 1543/2269/1\nf 1459/2177/1 1540/2266/1 1544/2270/1\nf 1545/2271/1 1454/2172/1 1535/2264/1\nf 1411/2272/1 1525/2250/1 1437/2154/1\nf 1404/2273/1 1523/2248/1 1405/2148/1\nf 1546/2274/1 1448/2165/1 1498/2228/1\nf 1410/2275/1 1518/2244/1 1525/2250/1\nf 1436/2276/1 1516/2242/1 1523/2248/1\nf 1547/2277/1 1442/2158/1 1548/2278/1\nf 1409/2279/1 1449/2167/1 1518/2244/1\nf 1435/2280/1 1513/2239/1 1516/2242/1\nf 1549/2281/1 1535/2264/1 1531/2260/1\nf 1434/2282/1 1510/2236/1 1513/2239/1\nf 1550/2283/1 1498/2228/1 1497/2223/1\nf 1433/2284/1 1507/2233/1 1510/2236/1\nf 1551/2285/1 1548/2278/1 1552/2286/1\nf 1432/2287/1 1504/2230/1 1507/2233/1\nf 1553/2288/1 1531/2260/1 1527/2256/1\nf 1431/2289/1 1501/2226/1 1504/2230/1\nf 1554/2290/1 1497/2223/1 1555/2291/1\nf 1556/2292/1 1458/2175/1 1557/2293/1\nf 1430/2294/1 1493/2220/1 1501/2226/1\nf 1558/2295/1 1552/2286/1 1559/2296/1\nf 1429/2297/1 1494/2298/1 1493/2220/1\nf 1560/2299/1 1527/2256/1 1521/2252/1\nf 1428/2300/1 1561/2301/1 1494/2298/1\nf 1562/2302/1 1555/2291/1 1563/2303/1\nf 1427/2304/1 1564/2305/1 1561/2301/1\nf 1490/2306/1 1559/2296/1 1491/2217/1\nf 1488/2307/1 1557/2293/1 1489/2215/1\nf 1426/2308/1 1565/2309/1 1564/2305/1\nf 1485/2310/1 1521/2252/1 1486/2211/1\nf 1425/2311/1 1492/2219/1 1565/2309/1\nf 1482/2312/1 1563/2303/1 1483/2207/1\nf 1566/2313/3 1568/2314/3 1569/2315/3\nf 1570/2316/2 1572/2317/2 1573/2318/2\nf 1574/2319/3 1568/2314/3 1567/2320/3\nf 1576/2321/2 1573/2318/2 1577/2322/2\nf 1574/2319/3 1579/2323/3 1575/2324/3\nf 1576/2321/2 1581/2325/2 1580/2326/2\nf 1578/2327/3 1583/2328/3 1579/2323/3\nf 1495/2329/2 1581/2325/2 1584/2330/2\nf 1582/2331/3 1585/2332/3 1583/2328/3\nf 1496/2333/2 1584/2330/2 1586/2334/2\nf 1500/2335/3 1587/2336/3 1585/2332/3\nf 1496/2333/2 1588/2337/2 1502/2338/2\nf 1503/2339/3 1587/2336/3 1499/2340/3\nf 1505/2341/2 1588/2337/2 1590/2342/2\nf 1506/2343/3 1589/2344/3 1503/2339/3\nf 1505/2341/2 1592/2345/2 1508/2346/2\nf 1506/2343/3 1593/2347/3 1591/2348/3\nf 1511/2349/2 1592/2345/2 1594/2350/2\nf 1512/2351/3 1593/2347/3 1509/2352/3\nf 1511/2349/2 1596/2353/2 1514/2354/2\nf 1515/2355/3 1595/2356/3 1512/2351/3\nf 1517/2357/2 1596/2353/2 1598/2358/2\nf 1520/2359/2 1599/2360/2 1600/2361/2\nf 1515/2355/3 1601/2362/3 1597/2363/3\nf 1517/2357/2 1602/2364/2 1524/2365/2\nf 1520/2359/2 1603/2366/2 1526/2367/2\nf 1528/2368/3 1601/2362/3 1522/2369/3\nf 1529/2370/2 1602/2364/2 1605/2371/2\nf 1526/2367/2 1606/2372/2 1530/2373/2\nf 1528/2368/3 1607/2374/3 1604/2375/3\nf 1533/2376/2 1605/2371/2 1608/2377/2\nf 1534/2378/2 1606/2372/2 1609/2379/2\nf 1555/2291/1 1500/2225/1 1582/2380/1\nf 1494/2298/1 1580/2381/1 1495/2221/1\nf 1563/2303/1 1582/2380/1 1578/2382/1\nf 1561/2301/1 1576/2383/1 1580/2381/1\nf 1483/2207/1 1578/2382/1 1574/2384/1\nf 1564/2305/1 1570/2385/1 1576/2383/1\nf 1472/2193/1 1574/2384/1 1567/2386/1\nf 1565/2309/1 1571/2387/1 1570/2385/1\nf 1461/2179/1 1567/2386/1 1566/2388/1\nf 1492/2219/1 1610/2389/1 1571/2387/1\nf 1441/2157/1 1566/2388/1 1611/2390/1\nf 1487/2213/1 1612/2391/1 1610/2389/1\nf 1442/2158/1 1611/2390/1 1613/2392/1\nf 1484/2209/1 1614/2393/1 1612/2391/1\nf 1548/2278/1 1613/2392/1 1615/2394/1\nf 1481/2205/1 1616/2395/1 1614/2393/1\nf 1552/2286/1 1615/2394/1 1617/2396/1\nf 1476/2199/1 1618/2397/1 1616/2395/1\nf 1559/2296/1 1617/2396/1 1619/2398/1\nf 1557/2293/1 1543/2269/1 1620/2399/1\nf 1473/2195/1 1621/2400/1 1618/2397/1\nf 1491/2217/1 1619/2398/1 1622/2401/1\nf 1489/2215/1 1620/2399/1 1623/2402/1\nf 1470/2191/1 1624/2403/1 1621/2400/1\nf 1480/2203/1 1622/2401/1 1625/2404/1\nf 1478/2201/1 1623/2402/1 1626/2405/1\nf 1465/2185/1 1627/2406/1 1624/2403/1\nf 1469/2189/1 1625/2404/1 1628/2407/1\nf 1467/2187/1 1626/2405/1 1629/2408/1\nf 1462/2181/1 1544/2270/1 1627/2406/1\nf 1457/2174/1 1628/2407/1 1542/2268/1\nf 1453/2171/1 1629/2408/1 1541/2267/1\nf 1610/2409/2 1572/2317/2 1571/2410/2\nf 1566/2313/3 1631/2411/3 1611/2412/3\nf 1612/2413/2 1630/2414/2 1610/2409/2\nf 1611/2412/3 1633/2415/3 1613/2416/3\nf 1614/2417/2 1632/2418/2 1612/2413/2\nf 1615/2419/3 1633/2415/3 1635/2420/3\nf 1616/2421/2 1634/2422/2 1614/2417/2\nf 1615/2419/3 1637/2423/3 1617/2424/3\nf 1616/2421/2 1638/2425/2 1636/2426/2\nf 1619/2427/3 1637/2423/3 1639/2428/3\nf 1620/2429/3 1640/2430/3 1641/2431/3\nf 1621/2432/2 1638/2425/2 1618/2433/2\nf 1622/2434/3 1639/2428/3 1643/2435/3\nf 1620/2429/3 1644/2436/3 1623/2437/3\nf 1621/2432/2 1645/2438/2 1642/2439/2\nf 1622/2434/3 1646/2440/3 1625/2441/3\nf 1623/2437/3 1647/2442/3 1626/2443/3\nf 1624/2444/2 1648/2445/2 1645/2438/2\nf 1628/2446/3 1646/2440/3 1649/2447/3\nf 1626/2443/3 1650/2448/3 1629/2449/3\nf 1544/2450/2 1648/2445/2 1627/2451/2\nf 1542/2452/3 1649/2447/3 1652/2453/3\nf 1541/2454/3 1650/2448/3 1653/2455/3\nf 1544/2450/2 1654/2456/2 1651/2457/2\nf 1542/2452/3 1640/2430/3 1543/2458/3\nf 1541/2454/3 1655/2459/3 1539/2460/3\nf 1538/2461/2 1654/2456/2 1540/2462/2\nf 1537/2463/2 1599/2360/2 1519/2464/2\nf 1536/2465/3 1655/2459/3 1658/2466/3\nf 1534/2378/2 1656/2467/2 1538/2461/2\nf 1537/2463/2 1608/2377/2 1657/2468/2\nf 1536/2465/3 1607/2374/3 1532/2469/3\nf 1660/2470/4 1662/2471/4 1659/2472/4\nf 1641/2473/1 1659/2474/1 1644/2475/1\nf 1657/2476/1 1660/2477/1 1641/2473/1\nf 1608/2478/1 1661/2479/1 1657/2476/1\nf 1644/2475/1 1662/2480/1 1608/2478/1\nf 1664/2481/3 1666/2482/3 1663/2483/3\nf 1601/2484/1 1668/2485/1 1597/2486/1\nf 1588/2487/1 1667/2488/1 1601/2484/1\nf 1586/2489/1 1669/2490/1 1588/2487/1\nf 1597/2486/1 1670/2491/1 1586/2489/1\nf 1672/2492/6 1674/2493/6 1671/2494/6\nf 1579/2495/1 1671/2496/1 1575/2497/1\nf 1634/2498/1 1672/2499/1 1579/2495/1\nf 1636/2500/1 1673/2501/1 1634/2498/1\nf 1575/2497/1 1674/2502/1 1636/2500/1\nf 1675/2503/3 1677/2504/3 1678/2505/3\nf 1643/2506/1 1663/2507/1 1646/2508/1\nf 1609/2509/1 1664/2510/1 1643/2506/1\nf 1606/2511/1 1679/2512/1 1609/2509/1\nf 1646/2508/1 1680/2513/1 1606/2511/1\nf 1681/2514/2 1683/2515/2 1684/2516/2\nf 1655/2517/1 1686/2518/1 1658/2519/1\nf 1596/2520/1 1685/2521/1 1655/2517/1\nf 1594/2522/1 1687/2523/1 1596/2520/1\nf 1658/2519/1 1688/2524/1 1594/2522/1\nf 1690/2525/7 1692/2526/7 1689/2527/7\nf 1589/2528/1 1689/2529/1 1587/2530/1\nf 1573/2531/1 1690/2532/1 1589/2528/1\nf 1572/2533/1 1691/2534/1 1573/2531/1\nf 1587/2530/1 1692/2535/1 1572/2533/1\nf 1667/2536/3 1694/2537/3 1668/2538/3\nf 1633/2539/1 1696/2540/1 1635/2541/1\nf 1648/2542/1 1695/2543/1 1633/2539/1\nf 1651/2544/1 1697/2545/1 1648/2542/1\nf 1635/2541/1 1698/2546/1 1651/2544/1\nf 1688/2547/2 1700/2548/2 1687/2549/2\nf 1644/2475/1 1702/2550/1 1647/2551/1\nf 1608/2478/1 1701/2552/1 1644/2475/1\nf 1605/2553/1 1703/2554/1 1608/2478/1\nf 1647/2551/1 1704/2555/1 1605/2553/1\nf 1706/2556/8 1708/2557/8 1705/2558/8\nf 1597/2486/1 1705/2559/1 1595/2560/1\nf 1586/2489/1 1706/2561/1 1597/2486/1\nf 1584/2562/1 1707/2563/1 1586/2489/1\nf 1595/2560/1 1708/2564/1 1584/2562/1\nf 1675/2565/217 1710/2566/217 1709/2567/217\nf 1575/2497/1 1712/2568/1 1568/2569/1\nf 1636/2500/1 1711/2570/1 1575/2497/1\nf 1638/2571/1 1713/2572/1 1636/2500/1\nf 1568/2569/1 1714/2573/1 1638/2571/1\nf 1716/2574/10 1718/2575/10 1715/2576/10\nf 1646/2508/1 1715/2577/1 1649/2578/1\nf 1606/2511/1 1716/2579/1 1646/2508/1\nf 1603/2580/1 1717/2581/1 1606/2511/1\nf 1649/2578/1 1718/2582/1 1603/2580/1\nf 1720/2583/11 1722/2584/11 1719/2585/11\nf 1658/2519/1 1719/2586/1 1607/2587/1\nf 1594/2522/1 1720/2588/1 1658/2519/1\nf 1592/2589/1 1721/2590/1 1594/2522/1\nf 1607/2587/1 1722/2591/1 1592/2589/1\nf 1724/2592/3 1726/2593/3 1723/2594/3\nf 1587/2530/1 1728/2595/1 1585/2596/1\nf 1572/2533/1 1727/2597/1 1587/2530/1\nf 1630/2598/1 1729/2599/1 1572/2533/1\nf 1585/2596/1 1730/2600/1 1630/2598/1\nf 1732/2601/12 1734/2602/12 1731/2603/12\nf 1635/2541/1 1731/2604/1 1637/2605/1\nf 1651/2544/1 1732/2606/1 1635/2541/1\nf 1654/2607/1 1733/2608/1 1651/2544/1\nf 1637/2605/1 1734/2609/1 1654/2607/1\nf 1736/2610/13 1738/2611/13 1735/2612/13\nf 1647/2551/1 1735/2613/1 1650/2614/1\nf 1605/2553/1 1736/2615/1 1647/2551/1\nf 1602/2616/1 1737/2617/1 1605/2553/1\nf 1650/2614/1 1738/2618/1 1602/2616/1\nf 1668/2619/543 1739/2620/543 1670/2621/543\nf 1595/2560/1 1741/2622/1 1593/2623/1\nf 1584/2562/1 1740/2624/1 1595/2560/1\nf 1581/2625/1 1742/2626/1 1584/2562/1\nf 1593/2623/1 1743/2627/1 1581/2625/1\nf 1745/2628/15 1747/2629/15 1744/2630/15\nf 1568/2569/1 1744/2631/1 1569/2632/1\nf 1638/2571/1 1745/2633/1 1568/2569/1\nf 1642/2634/1 1746/2635/1 1638/2571/1\nf 1569/2632/1 1747/2636/1 1642/2634/1\nf 1749/2637/2 1751/2638/2 1748/2639/2\nf 1649/2578/1 1753/2640/1 1652/2641/1\nf 1603/2580/1 1752/2642/1 1649/2578/1\nf 1600/2643/1 1748/2644/1 1603/2580/1\nf 1652/2641/1 1749/2645/1 1600/2643/1\nf 1696/2646/3 1754/2647/3 1755/2648/3\nf 1607/2587/1 1757/2649/1 1604/2650/1\nf 1592/2589/1 1756/2651/1 1607/2587/1\nf 1590/2652/1 1758/2653/1 1592/2589/1\nf 1604/2650/1 1759/2654/1 1590/2652/1\nf 1761/2655/17 1763/2656/17 1760/2657/17\nf 1585/2596/1 1760/2658/1 1583/2659/1\nf 1630/2598/1 1761/2660/1 1585/2596/1\nf 1632/2661/1 1762/2662/1 1630/2598/1\nf 1583/2659/1 1763/2663/1 1632/2661/1\nf 1765/2664/3 1767/2665/3 1764/2666/3\nf 1637/2605/1 1769/2667/1 1639/2668/1\nf 1654/2607/1 1768/2669/1 1637/2605/1\nf 1656/2670/1 1770/2671/1 1654/2607/1\nf 1639/2668/1 1771/2672/1 1656/2670/1\nf 1772/2673/2 1774/2674/2 1775/2675/2\nf 1650/2614/1 1777/2676/1 1653/2677/1\nf 1602/2616/1 1776/2678/1 1650/2614/1\nf 1598/2679/1 1778/2680/1 1602/2616/1\nf 1653/2677/1 1779/2681/1 1598/2679/1\nf 1781/2682/544 1783/2683/544 1780/2684/544\nf 1593/2623/1 1780/2685/1 1591/2686/1\nf 1581/2625/1 1781/2687/1 1593/2623/1\nf 1577/2688/1 1782/2689/1 1581/2625/1\nf 1591/2686/1 1783/2690/1 1577/2688/1\nf 1756/2691/3 1785/2692/3 1757/2693/3\nf 1569/2632/1 1787/2694/1 1631/2695/1\nf 1642/2634/1 1786/2696/1 1569/2632/1\nf 1645/2697/1 1788/2698/1 1642/2634/1\nf 1631/2695/1 1789/2699/1 1645/2697/1\nf 1686/2700/47 1699/2701/545 1688/2702/545\nf 1640/2703/1 1675/2704/1 1641/2473/1\nf 1599/2705/1 1676/2706/1 1640/2703/1\nf 1657/2476/1 1791/2707/1 1599/2705/1\nf 1641/2473/1 1709/2708/1 1657/2476/1\nf 1793/2709/21 1795/2710/21 1792/2711/21\nf 1652/2641/1 1792/2712/1 1640/2703/1\nf 1600/2643/1 1793/2713/1 1652/2641/1\nf 1599/2705/1 1794/2714/1 1600/2643/1\nf 1640/2703/1 1795/2715/1 1599/2705/1\nf 1797/2716/22 1799/2717/22 1796/2718/22\nf 1604/2650/1 1796/2719/1 1601/2484/1\nf 1590/2652/1 1797/2720/1 1604/2650/1\nf 1588/2487/1 1798/2721/1 1590/2652/1\nf 1601/2484/1 1799/2722/1 1588/2487/1\nf 1704/2723/2 1801/2724/2 1703/2725/2\nf 1583/2659/1 1764/2726/1 1579/2495/1\nf 1632/2661/1 1765/2727/1 1583/2659/1\nf 1634/2498/1 1681/2728/1 1632/2661/1\nf 1579/2495/1 1682/2729/1 1634/2498/1\nf 1803/2730/23 1805/2731/23 1802/2732/23\nf 1639/2668/1 1802/2733/1 1643/2506/1\nf 1656/2670/1 1803/2734/1 1639/2668/1\nf 1609/2509/1 1804/2735/1 1656/2670/1\nf 1643/2506/1 1805/2736/1 1609/2509/1\nf 1807/2737/24 1809/2738/24 1806/2739/24\nf 1653/2677/1 1806/2740/1 1655/2517/1\nf 1598/2679/1 1807/2741/1 1653/2677/1\nf 1596/2520/1 1808/2742/1 1598/2679/1\nf 1655/2517/1 1809/2743/1 1596/2520/1\nf 1764/2744/413 1683/2745/413 1682/2746/413\nf 1591/2686/1 1723/2747/1 1589/2528/1\nf 1577/2688/1 1724/2748/1 1591/2686/1\nf 1573/2531/1 1772/2749/1 1577/2688/1\nf 1589/2528/1 1773/2750/1 1573/2531/1\nf 1811/2751/27 1813/2752/27 1810/2753/27\nf 1631/2695/1 1810/2754/1 1633/2539/1\nf 1645/2697/1 1811/2755/1 1631/2695/1\nf 1648/2542/1 1812/2756/1 1645/2697/1\nf 1633/2539/1 1813/2757/1 1648/2542/1\nf 1669/2758/75 1693/2759/75 1667/2760/75\nf 1679/2761/63 1665/2762/411 1664/2763/411\nf 1687/2764/164 1816/2765/164 1685/2766/164\nf 1697/2767/546 1754/2768/546 1695/2769/546\nf 1703/2770/413 1818/2771/413 1701/2772/413\nf 1713/2773/37 1820/2774/36 1711/2775/36\nf 1729/2776/414 1822/2777/414 1727/2778/414\nf 1742/2779/69 1824/2780/54 1740/2781/54\nf 1748/2782/41 1825/2783/41 1752/2784/41\nf 1758/2785/67 1784/2786/67 1756/2787/67\nf 1770/2788/53 1828/2789/53 1768/2790/53\nf 1778/2791/46 1830/2792/64 1776/2793/64\nf 1788/2794/76 1832/2795/20 1786/2796/20\nf 1791/2797/48 1677/2798/48 1676/2799/48\nf 1681/2800/49 1766/2801/49 1765/2802/49\nf 1772/2803/51 1725/2804/51 1724/2805/51\nf 1835/2806/547 1837/2807/547 1834/2808/547\nf 1839/2809/548 1841/2810/548 1838/2811/548\nf 1669/2812/2 1739/2813/2 1814/2814/2\nf 1709/2815/2 1833/2816/2 1791/2817/2\nf 1777/2818/37 1843/2819/36 1779/2820/36\nf 1787/2821/3 1832/2822/3 1844/2823/3\nf 1846/2824/57 1848/2825/57 1845/2826/57\nf 1779/2827/2 1829/2828/2 1778/2829/2\nf 1757/2830/224 1849/2831/412 1759/2832/412\nf 1768/2833/3 1850/2834/3 1769/2835/3\nf 1852/2836/549 1854/2837/56 1851/2838/550\nf 1758/2839/2 1849/2840/2 1826/2841/2\nf 1741/2842/411 1856/2843/63 1743/2844/63\nf 1753/2845/3 1825/2846/3 1857/2847/3\nf 1859/2848/551 1861/2849/35 1858/2850/551\nf 1743/2851/2 1823/2852/2 1742/2853/2\nf 1728/2854/552 1863/2855/552 1730/2856/552\nf 1741/2857/3 1824/2858/3 1855/2859/3\nf 1865/2860/31 1867/2861/63 1864/2862/31\nf 1729/2863/2 1863/2864/2 1821/2865/2\nf 1712/2866/64 1869/2867/64 1714/2868/64\nf 1727/2869/3 1862/2870/3 1728/2871/3\nf 1871/2872/65 1873/2873/65 1870/2874/65\nf 1714/2875/2 1819/2876/2 1713/2877/2\nf 1696/2878/111 1874/2879/67 1698/2880/67\nf 1702/2881/3 1818/2882/3 1875/2883/3\nf 1877/2884/328 1879/2885/458 1876/2886/553\nf 1698/2887/2 1817/2888/2 1697/2889/2\nf 1663/2890/54 1880/2891/69 1680/2892/69\nf 1686/2893/3 1816/2894/3 1790/2895/3\nf 1882/2896/70 1884/2897/353 1881/2898/70\nf 1679/2899/2 1880/2900/2 1815/2901/2\nf 1787/2902/33 1885/2903/164 1789/2904/164\nf 1887/2905/71 1889/2906/71 1886/2907/71\nf 1891/2908/554 1893/2909/317 1890/2910/554\nf 1789/2911/2 1831/2912/2 1788/2913/2\nf 1895/2914/72 1897/2915/72 1894/2916/72\nf 1769/2917/75 1898/2918/75 1771/2919/75\nf 1900/2920/77 1902/2921/77 1899/2922/77\nf 1702/2923/555 1800/2924/555 1704/2925/555\nf 1777/2926/3 1830/2927/3 1842/2928/3\nf 1904/2929/33 1906/2930/32 1903/2931/33\nf 1723/2932/70 1774/2933/70 1773/2934/70\nf 1712/2935/3 1820/2936/3 1868/2937/3\nf 1908/2938/79 1910/2939/79 1907/2940/79\nf 1770/2941/2 1898/2942/2 1827/2943/2\nf 1753/2944/79 1750/2945/51 1749/2946/51\nf 1912/2947/556 1914/2948/556 1911/2949/80\nf 1914/2948/429 1915/2950/429 1916/2951/429\nf 1916/2951/83 1694/2952/83 1693/2953/83\nf 1911/2949/84 1918/2954/84 1917/2955/84\nf 1914/2956/51 1919/2957/51 1918/2958/51\nf 1919/2957/431 1693/2759/431 1814/2959/431\nf 1917/2955/432 1921/2960/432 1920/2961/87\nf 1918/2954/433 1922/2962/433 1921/2960/434\nf 1919/2963/90 1739/2620/90 1922/2962/90\nf 1920/2961/557 1913/2964/91 1912/2947/91\nf 1921/2960/76 1915/2950/76 1913/2964/76\nf 1922/2962/92 1694/2952/93 1915/2950/93\nf 1876/2886/558 1924/2965/559 1877/2884/560\nf 1924/2965/561 1925/2966/562 1926/2967/563\nf 1925/2966/100 1665/2968/100 1926/2967/564\nf 1877/2884/439 1927/2969/101 1878/2970/101\nf 1924/2965/48 1928/2971/48 1927/2969/48\nf 1928/2972/471 1665/2762/471 1815/2973/471\nf 1879/2885/565 1927/2969/566 1929/2974/565\nf 1927/2969/108 1930/2975/567 1929/2974/568\nf 1930/2975/109 1815/2976/109 1880/2891/109\nf 1879/2885/569 1923/2977/293 1876/2886/293\nf 1923/2977/419 1930/2975/419 1925/2966/419\nf 1930/2975/291 1666/2978/291 1925/2966/291\nf 1908/2938/447 1931/2979/447 1932/2980/448\nf 1932/2980/117 1933/2981/117 1934/2982/117\nf 1933/2981/118 1816/2765/118 1934/2982/118\nf 1908/2938/119 1935/2983/119 1909/2984/119\nf 1932/2980/29 1936/2985/570 1935/2983/28\nf 1936/2985/449 1816/2765/242 1700/2986/449\nf 1909/2984/450 1937/2987/450 1910/2939/451\nf 1935/2983/126 1938/2988/126 1937/2987/126\nf 1938/2988/128 1700/2986/128 1699/2989/128\nf 1910/2939/129 1931/2979/129 1907/2940/129\nf 1931/2990/49 1938/2991/49 1933/2992/49\nf 1938/2991/453 1790/2993/571 1933/2992/571\nf 1871/2872/133 1939/2994/134 1940/2995/135\nf 1939/2994/136 1942/2996/572 1940/2995/138\nf 1941/2997/139 1754/2998/454 1942/2996/454\nf 1871/2999/141 1943/3000/141 1872/3001/141\nf 1940/3002/63 1944/3003/63 1943/3000/63\nf 1944/3003/143 1754/2768/143 1817/3004/143\nf 1873/2873/144 1943/3005/145 1945/3006/146\nf 1945/3006/147 1944/3007/573 1946/3008/147\nf 1946/3008/150 1817/3009/149 1874/2879/150\nf 1873/2873/151 1939/2994/152 1870/2874/152\nf 1945/3006/420 1941/2997/420 1939/2994/420\nf 1946/3008/327 1755/3010/326 1941/2997/326\nf 1894/2916/155 1948/3011/156 1895/2914/157\nf 1948/3011/158 1949/3012/159 1950/3013/158\nf 1949/3012/160 1818/2771/160 1950/3013/160\nf 1895/2914/162 1951/3014/163 1896/3015/163\nf 1948/3011/32 1952/3016/32 1951/3014/32\nf 1952/3016/280 1818/2771/280 1801/3017/280\nf 1897/2915/167 1951/3014/168 1953/3018/574\nf 1951/3014/170 1954/3019/171 1953/3018/171\nf 1954/3019/172 1801/3017/172 1800/3020/172\nf 1897/2915/575 1947/3021/174 1894/2916/174\nf 1953/3018/51 1949/3012/51 1947/3021/51\nf 1954/3022/84 1875/3023/84 1949/3024/84\nf 1864/2862/576 1956/3025/576 1865/2860/577\nf 1956/3025/578 1957/3026/464 1958/3027/463\nf 1957/3026/180 1820/2774/180 1958/3027/180\nf 1865/2860/579 1959/3028/579 1866/3029/580\nf 1956/3025/35 1960/3030/186 1959/3028/186\nf 1960/3030/581 1820/2774/188 1819/3031/582\nf 1867/2861/583 1959/3028/583 1961/3032/584\nf 1959/3028/585 1962/3033/469 1961/3032/469\nf 1962/3033/470 1819/3031/470 1869/3034/195\nf 1867/2861/471 1955/3035/586 1864/2862/586\nf 1961/3036/48 1957/3037/48 1955/3038/48\nf 1962/3039/196 1868/3040/472 1957/3037/472\nf 1859/2848/474 1963/3041/474 1964/3042/473\nf 1964/3042/199 1965/3043/199 1966/3044/199\nf 1965/3043/476 1822/2777/476 1966/3044/476\nf 1859/2848/262 1967/3045/477 1860/3046/477\nf 1964/3042/37 1968/3047/37 1967/3045/37\nf 1968/3047/260 1822/2777/260 1821/3048/260\nf 1860/3046/205 1969/3049/205 1861/2849/479\nf 1967/3045/207 1970/3050/207 1969/3049/207\nf 1970/3050/587 1821/3048/209 1863/3051/587\nf 1861/2849/143 1963/3041/143 1858/2850/143\nf 1969/3049/63 1965/3043/31 1963/3041/31\nf 1970/3050/588 1862/3052/211 1965/3043/211\nf 1852/2836/482 1971/3053/482 1972/3054/212\nf 1971/3053/213 1974/3055/589 1972/3054/589\nf 1974/3055/484 1855/3056/590 1824/3057/484\nf 1852/2836/301 1975/3058/215 1853/3059/215\nf 1972/3054/217 1976/3060/217 1975/3058/217\nf 1976/3061/218 1824/2780/219 1823/3062/218\nf 1853/3059/221 1977/3063/221 1854/2837/591\nf 1977/3063/222 1976/3060/592 1978/3064/222\nf 1976/3060/223 1856/2843/593 1978/3064/593\nf 1854/2837/187 1971/3053/187 1851/2838/187\nf 1977/3063/186 1973/3065/224 1971/3053/224\nf 1978/3064/183 1855/3056/184 1973/3065/185\nf 1904/2929/594 1979/3066/488 1980/3067/595\nf 1979/3066/229 1982/3068/229 1980/3067/229\nf 1982/3068/231 1857/3069/231 1825/3070/231\nf 1904/2929/232 1983/3071/490 1905/3072/490\nf 1980/3067/26 1984/3073/26 1983/3071/26\nf 1984/3074/233 1825/2783/233 1751/3075/233\nf 1905/3072/596 1985/3076/491 1906/2930/597\nf 1983/3071/238 1986/3077/238 1985/3076/238\nf 1984/3073/240 1750/2945/240 1986/3077/240\nf 1906/2930/242 1979/3066/242 1903/2931/242\nf 1985/3076/29 1981/3078/29 1979/3066/29\nf 1986/3077/245 1857/3069/245 1981/3078/245\nf 1845/2826/246 1988/3079/246 1846/2824/247\nf 1988/3079/494 1989/3080/598 1990/3081/495\nf 1989/3080/250 1784/3082/250 1990/3081/250\nf 1846/3083/252 1991/3084/252 1847/3085/252\nf 1988/3086/39 1992/3087/421 1991/3084/421\nf 1992/3087/599 1784/2786/496 1826/3088/599\nf 1848/2825/255 1991/3089/255 1993/3090/256\nf 1991/3089/257 1994/3091/600 1993/3090/498\nf 1994/3091/259 1826/3092/259 1849/2831/259\nf 1848/2825/260 1987/3093/260 1845/2826/260\nf 1993/3090/56 1989/3080/56 1987/3093/56\nf 1994/3091/601 1785/3094/202 1989/3080/202\nf 1891/2908/602 1995/3095/602 1996/3096/603\nf 1995/3095/502 1998/3097/502 1996/3096/502\nf 1998/3097/267 1850/3098/268 1828/3099/267\nf 1891/2908/604 1999/3100/604 1892/3101/604\nf 1996/3102/605 2000/3103/606 1999/3104/606\nf 2000/3103/271 1828/2789/504 1827/3105/271\nf 1892/3101/607 2001/3106/607 1893/2909/608\nf 2001/3106/609 2000/3107/609 2002/3108/609\nf 2000/3107/278 1898/2918/278 2002/3108/279\nf 1893/2909/610 1995/3095/280 1890/2910/280\nf 2001/3106/32 1997/3109/32 1995/3095/32\nf 2002/3108/162 1850/3098/611 1997/3109/611\nf 1839/2809/508 2003/3110/285 2004/3111/612\nf 2004/3111/287 2005/3112/288 2006/3113/510\nf 2005/3112/290 1830/2792/289 2006/3113/289\nf 1839/2809/291 2007/3114/613 1840/3115/113\nf 2004/3111/419 2008/3116/42 2007/3114/42\nf 2008/3116/512 1830/2792/512 1829/3117/512\nf 1840/3115/514 2009/3118/295 1841/2810/515\nf 2007/3114/297 2010/3119/298 2009/3118/298\nf 2010/3119/299 1829/3117/299 1843/3120/614\nf 1841/2810/219 2003/3110/218 1838/2811/218\nf 2009/3121/217 2005/3122/217 2003/3123/217\nf 2010/3124/215 1842/3125/216 2005/3122/216\nf 1882/2896/302 2011/3126/302 2012/3127/302\nf 2011/3126/615 2014/3128/303 2012/3127/616\nf 2013/3129/304 1832/2795/617 2014/3128/305\nf 1882/2896/307 2015/3130/307 1883/3131/307\nf 2012/3127/52 2016/3132/52 2015/3130/52\nf 2016/3132/368 1832/2795/520 1831/3133/368\nf 1883/3131/310 2017/3134/310 1884/2897/311\nf 2017/3134/313 2016/3132/312 2018/3135/313\nf 2018/3135/315 1831/3133/315 1885/3136/315\nf 1884/2897/233 2011/3126/233 1881/2898/233\nf 2017/3137/317 2013/3138/318 2011/3139/318\nf 2018/3140/490 1844/3141/232 2013/3138/232\nf 1887/2905/321 2019/3142/321 2020/3143/323\nf 2020/3143/324 2021/3144/324 2022/3145/324\nf 2021/3144/325 1677/2798/325 2022/3145/325\nf 1888/3146/523 2020/3143/326 2023/3147/523\nf 2020/3143/46 2024/3148/46 2023/3147/46\nf 2024/3148/329 1677/2798/329 1833/3149/329\nf 1889/2906/330 2023/3147/618 2025/3150/330\nf 2025/3150/333 2024/3148/333 2026/3151/333\nf 2026/3151/334 1833/3149/619 1710/3152/334\nf 1889/2906/254 2019/3142/335 1886/2907/335\nf 2025/3150/69 2021/3144/69 2019/3142/69\nf 2026/3151/252 1678/3153/252 2021/3144/252\nf 1835/2806/337 2027/3154/620 2028/3155/621\nf 2028/3155/340 2029/3156/527 2030/3157/340\nf 2029/3156/341 1766/2801/342 2030/3157/342\nf 1835/2806/344 2031/3158/622 1836/3159/622\nf 2028/3155/20 2032/3160/76 2031/3158/76\nf 2032/3160/623 1766/2801/345 1684/3161/623\nf 1836/3159/346 2033/3162/624 1837/2807/625\nf 2031/3158/349 2034/3163/532 2033/3162/532\nf 2034/3163/533 1684/3161/350 1683/3164/533\nf 1837/2807/504 2027/3154/271 1834/2808/271\nf 2033/3162/70 2029/3156/70 2027/3154/70\nf 2034/3165/354 1767/3166/626 2029/3167/626\nf 1899/2922/355 2036/3168/355 1900/2920/627\nf 2036/3168/628 2037/3169/629 2038/3170/628\nf 2038/3170/360 1726/3171/360 1725/3172/359\nf 1900/2920/132 2039/3173/131 1901/3174/630\nf 2036/3168/78 2040/3175/130 2039/3173/130\nf 2040/3176/129 1725/2804/129 1775/3177/129\nf 1902/2921/363 2039/3173/363 2041/3178/540\nf 2039/3173/631 2042/3179/632 2041/3178/632\nf 2040/3175/367 1774/2933/367 2042/3179/367\nf 1902/2921/520 2035/3180/633 1899/2922/633\nf 2041/3178/543 2037/3169/543 2035/3180/543\nf 2042/3179/306 1726/3171/634 2037/3169/634\nf 1911/2949/49 1920/2961/49 1912/2947/49\nf 2043/3181/1 2045/3182/635 2046/3183/636\nf 2047/3184/1 2044/3185/407 2043/3186/407\nf 2049/3187/1 2051/3188/1 2046/3189/1\nf 2046/3190/407 2052/3191/1 2049/3192/1\nf 2053/3193/3 2044/3194/3 2048/3195/3\nf 2049/3196/1 2048/3197/1 2047/3198/1\nf 2047/3199/1 2056/3200/1 2055/3201/1\nf 2057/3202/637 2043/3203/637 2046/3204/637\nf 2050/3205/638 2057/3202/638 2051/3206/638\nf 2056/3207/639 2057/3202/639 2055/3208/639\nf 2057/3202/640 2049/3209/640 2047/3210/640\nf 2058/3211/1 2054/3212/1 2053/3213/1\nf 2054/3214/636 2045/3215/635 2044/3216/635\nf 2059/3217/2 2052/3218/2 2045/3219/2\nf 2068/3220/641 2069/3221/641 2048/3222/641\nf 2078/3223/371 2080/3224/371 2077/3225/371\nf 2081/3226/372 2079/3227/372 2078/3223/372\nf 2083/3228/373 2082/3229/373 2081/3230/373\nf 2085/3231/374 2084/3232/374 2083/3228/374\nf 2087/3233/375 2086/3234/375 2085/3231/375\nf 2089/3235/376 2088/3236/376 2087/3233/376\nf 2091/3237/377 2090/3238/377 2089/3235/377\nf 2093/3239/378 2092/3240/378 2091/3237/378\nf 2095/3241/379 2094/3242/379 2093/3239/379\nf 2097/3243/380 2096/3244/380 2095/3241/380\nf 2099/3245/381 2098/3246/381 2097/3247/381\nf 2101/3248/382 2100/3249/382 2099/3245/382\nf 2103/3250/383 2102/3251/383 2101/3248/383\nf 2105/3252/384 2104/3253/384 2103/3250/384\nf 2107/3254/385 2106/3255/385 2105/3252/385\nf 2109/3256/386 2108/3257/386 2107/3254/386\nf 2111/3258/387 2110/3259/387 2109/3256/387\nf 2113/3260/388 2112/3261/388 2111/3258/388\nf 2115/3262/389 2114/3263/389 2113/3264/389\nf 2117/3265/390 2116/3266/390 2115/3262/390\nf 2119/3267/391 2118/3268/391 2117/3265/391\nf 2121/3269/392 2120/3270/392 2119/3267/392\nf 2126/3271/393 2127/3272/394 2122/3273/394\nf 2123/3274/395 2133/3275/395 2134/3276/396\nf 2137/3277/397 2141/3278/398 2142/3279/397\nf 2151/3280/399 2152/3281/400 2145/3282/399\nf 2154/3283/401 2146/3284/401 2145/3285/401\nf 2156/3286/402 2155/3287/402 2154/3283/402\nf 2158/3288/403 2157/3289/403 2156/3286/403\nf 2160/3290/404 2159/3291/404 2158/3288/404\nf 2171/3292/642 2172/3293/1 2161/3294/1\nf 2181/3295/405 2161/3296/405 2160/3290/405\nf 2077/3225/406 2180/3297/406 2181/3295/406\nf 2189/3298/407 2190/3299/407 2181/3300/407\nf 2200/3301/371 2202/3302/371 2199/3303/371\nf 2203/3304/372 2201/3305/372 2200/3301/372\nf 2205/3306/373 2204/3307/373 2203/3308/373\nf 2207/3309/374 2206/3310/374 2205/3306/374\nf 2209/3311/375 2208/3312/375 2207/3309/375\nf 2211/3313/376 2210/3314/376 2209/3311/376\nf 2213/3315/377 2212/3316/377 2211/3313/377\nf 2215/3317/378 2214/3318/378 2213/3315/378\nf 2217/3319/379 2216/3320/379 2215/3317/379\nf 2219/3321/380 2218/3322/380 2217/3319/380\nf 2221/3323/381 2220/3324/381 2219/3325/381\nf 2223/3326/382 2222/3327/382 2221/3323/382\nf 2225/3328/383 2224/3329/383 2223/3326/383\nf 2227/3330/384 2226/3331/384 2225/3328/384\nf 2229/3332/385 2228/3333/385 2227/3330/385\nf 2231/3334/386 2230/3335/386 2229/3332/386\nf 2233/3336/387 2232/3337/387 2231/3334/387\nf 2235/3338/388 2234/3339/388 2233/3336/388\nf 2237/3340/389 2236/3341/389 2235/3342/389\nf 2239/3343/390 2238/3344/390 2237/3340/390\nf 2241/3345/391 2240/3346/391 2239/3343/391\nf 2243/3347/392 2242/3348/392 2241/3345/392\nf 2248/3349/393 2249/3350/394 2244/3351/394\nf 2245/3352/395 2255/3353/395 2256/3354/396\nf 2259/3355/397 2263/3356/398 2264/3357/397\nf 2273/3358/399 2274/3359/400 2267/3360/399\nf 2276/3361/401 2268/3362/401 2267/3363/401\nf 2278/3364/402 2277/3365/402 2276/3361/402\nf 2280/3366/403 2279/3367/403 2278/3364/403\nf 2282/3368/404 2281/3369/404 2280/3366/404\nf 2293/3370/1 2294/3371/1 2283/3372/1\nf 2303/3373/405 2283/3374/405 2282/3368/405\nf 2199/3303/406 2302/3375/406 2303/3373/406\nf 2311/3376/643 2312/3377/407 2303/3378/407\nf 2322/3379/644 2324/3380/644 2321/3381/644\nf 2325/3382/645 2323/3383/645 2322/3379/645\nf 2327/3384/646 2326/3385/646 2325/3382/646\nf 2329/3386/647 2328/3387/647 2327/3384/647\nf 2329/3388/648 2332/3389/649 2330/3390/649\nf 2331/3391/650 2334/3392/651 2332/3389/651\nf 2335/3393/652 2334/3392/652 2333/3394/652\nf 2337/3395/653 2336/3396/653 2335/3393/653\nf 2339/3397/654 2338/3398/654 2337/3395/654\nf 2341/3399/655 2340/3400/655 2339/3397/655\nf 2343/3401/656 2342/3402/656 2341/3399/656\nf 2345/3403/657 2344/3404/658 2343/3405/657\nf 2347/3406/659 2346/3407/659 2345/3403/659\nf 2349/3408/660 2348/3409/660 2347/3406/660\nf 2351/3410/661 2350/3411/661 2349/3408/661\nf 2353/3412/662 2352/3413/662 2351/3410/662\nf 2355/3414/663 2354/3415/663 2353/3412/663\nf 2357/3416/664 2356/3417/664 2355/3414/664\nf 2359/3418/665 2358/3419/665 2357/3416/665\nf 2361/3420/666 2360/3421/666 2359/3418/666\nf 2363/3422/667 2362/3423/667 2361/3424/667\nf 2365/3425/668 2364/3426/668 2363/3422/668\nf 2367/3427/669 2366/3428/669 2365/3425/669\nf 2369/3429/670 2368/3430/670 2367/3427/670\nf 2371/3431/671 2370/3432/671 2369/3429/671\nf 2373/3433/672 2372/3434/672 2371/3431/672\nf 2375/3435/673 2374/3436/673 2373/3433/673\nf 2377/3437/674 2376/3438/674 2375/3439/674\nf 2379/3440/675 2378/3441/675 2377/3437/675\nf 2381/3442/676 2380/3443/676 2379/3440/676\nf 2323/3444/1 2390/3445/677 2391/3446/1\nf 2401/3447/678 2382/3448/678 2381/3442/678\nf 2321/3381/679 2400/3449/679 2401/3447/679\nf 2327/3450/407 2325/3451/407 2347/3452/407\nf 2411/3453/680 2169/3454/371 2420/3455/680\nf 2169/3454/681 2421/3456/682 2420/3455/682\nf 2168/3457/683 2422/3458/684 2421/3456/684\nf 2167/3459/374 2423/3460/374 2422/3458/374\nf 2166/3461/375 2424/3462/375 2423/3463/375\nf 2165/3464/685 2425/3465/686 2424/3462/686\nf 2164/3466/687 2426/3467/688 2425/3465/688\nf 2163/3468/378 2427/3469/378 2426/3467/378\nf 2162/3470/379 2429/3471/379 2427/3469/379\nf 2428/3472/380 2431/3473/689 2429/3471/689\nf 2430/3474/381 2433/3475/381 2431/3473/381\nf 2432/3476/382 2435/3477/382 2433/3478/382\nf 2434/3479/383 2437/3480/383 2435/3477/383\nf 2436/3481/384 2439/3482/384 2437/3480/384\nf 2439/3482/690 2440/3483/691 2441/3484/690\nf 2440/3483/386 2443/3485/386 2441/3484/386\nf 2442/3486/387 2445/3487/387 2443/3485/387\nf 2444/3488/692 2447/3489/693 2445/3487/693\nf 2446/3490/389 2449/3491/694 2447/3489/694\nf 2448/3492/390 2451/3493/390 2449/3494/390\nf 2451/3493/391 2452/3495/391 2453/3496/391\nf 2452/3495/392 2455/3497/695 2453/3496/695\nf 2454/3498/696 2457/3499/696 2455/3497/696\nf 2456/3500/395 2458/3501/395 2457/3499/395\nf 2178/3502/397 2459/3503/397 2458/3501/397\nf 2177/3504/697 2460/3505/399 2459/3503/399\nf 2176/3506/401 2461/3507/401 2460/3505/401\nf 2461/3507/402 2174/3508/402 2462/3509/402\nf 2174/3510/403 2463/3511/403 2462/3512/403\nf 2173/3513/698 2464/3514/404 2463/3511/404\nf 2172/3515/699 2465/3516/405 2464/3514/405\nf 2465/3516/700 2171/3517/406 2473/3518/700\nf 2441/3519/1 2457/3520/1 2465/3521/1\nf 2488/3522/642 2354/3523/1 2487/3524/642\nf 2313/3525/681 732/3526/681 2314/3527/681\nf 2497/3528/386 2499/3529/386 2496/3530/386\nf 2506/3531/643 2507/3532/643 2235/3533/407\nf 2507/3534/692 2513/3535/692 2514/3536/692\nf 2306/3537/401 739/3538/401 2307/3539/401\nf 2507/3534/701 2515/3540/701 2508/3541/701\nf 2512/3542/395 742/3543/395 2304/3544/395\nf 2509/3545/391 2518/3546/391 2510/3547/391\nf 2510/3547/392 2519/3548/702 2511/3549/392\nf 2508/3550/390 2517/3551/390 2509/3545/390\nf 2496/3530/387 2513/3535/387 2506/3552/387\nf 2308/3553/403 737/3554/403 2309/3555/403\nf 2310/3556/703 735/3557/703 2311/3558/703\nf 2320/3559/379 2520/3560/379 2500/3561/379\nf 2305/3562/397 742/3543/397 741/3563/397\nf 2505/3564/385 2498/3565/385 2497/3528/385\nf 2318/3566/685 729/3567/685 728/3568/685\nf 2500/3561/704 2522/3569/704 2501/3570/704\nf 2305/3562/705 740/3571/705 2306/3537/705\nf 2309/3555/404 736/3572/404 2310/3556/404\nf 2531/3573/1 2532/3574/1 2228/3575/1\nf 2311/3558/406 734/3576/406 2312/3577/406\nf 2316/3578/375 729/3567/375 2317/3579/375\nf 2313/3525/371 734/3576/371 733/3580/371\nf 2318/3566/687 727/3581/687 2319/3582/687\nf 2314/3527/683 731/3583/683 2315/3584/683\nf 2501/3570/381 2538/3585/381 2502/3586/381\nf 2502/3587/382 2539/3588/382 2503/3589/382\nf 2504/3590/384 2521/3591/384 2505/3564/384\nf 2319/3582/378 726/3592/378 2320/3559/378\nf 2511/3549/394 2516/3593/706 2512/3542/394\nf 2503/3589/383 2540/3594/383 2504/3590/383\nf 2315/3584/374 730/3595/374 2316/3596/374\nf 2308/3597/402 739/3538/402 738/3598/402\nf 2183/3599/705 2298/3600/705 2184/3601/705\nf 2190/3602/371 2291/3603/371 2191/3604/371\nf 2193/3605/374 2288/3606/374 2194/3607/374\nf 2549/3608/407 2550/3609/407 2113/3610/407\nf 2197/3611/378 2284/3612/378 2198/3613/378\nf 2187/3614/404 2294/3615/404 2188/3616/404\nf 2195/3617/685 2286/3618/685 2196/3619/685\nf 2555/3620/395 2300/3621/395 2182/3622/395\nf 2547/3623/386 2530/3624/386 2548/3625/386\nf 2541/3626/379 2284/3612/379 2537/3627/379\nf 2550/3628/389 2527/3629/389 2551/3630/389\nf 2196/3619/687 2285/3631/687 2197/3611/687\nf 2549/3632/692 2528/3633/692 2550/3628/692\nf 2189/3634/406 2292/3635/406 2190/3602/406\nf 2551/3636/390 2526/3637/390 2552/3638/390\nf 2440/3639/1 2438/3640/642 2106/3641/1\nf 2555/3620/394 2524/3642/394 2523/3643/394\nf 2545/3644/384 2532/3645/384 2546/3646/384\nf 2193/3605/683 2290/3647/683 2289/3648/683\nf 2184/3601/401 2297/3649/401 2185/3650/401\nf 2553/3651/392 2524/3642/392 2554/3652/392\nf 2185/3650/402 2296/3653/402 2186/3654/402\nf 2183/3599/397 2300/3621/397 2299/3655/397\nf 2552/3638/391 2525/3656/391 2553/3651/391\nf 2542/3657/381 2535/3658/381 2543/3659/381\nf 2191/3604/681 2290/3647/681 2192/3660/681\nf 2186/3661/403 2295/3662/403 2187/3614/403\nf 2541/3626/704 2536/3663/707 2542/3657/704\nf 2549/3632/387 2530/3624/387 2529/3664/387\nf 2546/3646/385 2531/3665/385 2547/3623/385\nf 2188/3616/703 2293/3666/703 2189/3634/703\nf 2543/3667/382 2534/3668/382 2544/3669/382\nf 2544/3669/383 2533/3670/383 2545/3644/383\nf 2194/3671/375 2287/3672/375 2195/3617/375\nf 2556/3673/708 2478/3674/708 2477/3675/708\nf 2557/3676/709 2479/3677/709 2478/3674/709\nf 2560/3678/710 2409/3679/710 2559/3680/710\nf 2558/3681/711 2480/3682/711 2479/3677/711\nf 2070/3683/712 2418/3684/712 2417/3685/712\nf 2563/3686/713 2407/3687/713 2562/3688/713\nf 2069/3689/714 2419/3690/714 2418/3684/714\nf 2561/3691/715 2403/3692/715 2480/3682/715\nf 2072/3693/716 2416/3694/716 2415/3695/716\nf 2066/3696/717 2466/3697/717 2067/3698/717\nf 2566/3699/718 2405/3700/718 2565/3701/718\nf 2559/3680/719 2408/3702/719 2563/3686/719\nf 2567/3703/720 2403/3692/720 2564/3704/720\nf 2060/3705/721 2474/3706/721 2473/3707/721\nf 2569/3708/722 2477/3675/722 2476/3709/722\nf 2073/3710/723 2415/3695/723 2414/3711/723\nf 2075/3712/724 2413/3713/724 2412/3714/724\nf 2076/3715/725 2410/3716/725 2560/3678/725\nf 2062/3717/726 2470/3718/726 2063/3719/726\nf 2071/3720/727 2417/3685/727 2416/3694/727\nf 2065/3721/728 2467/3722/728 2066/3696/728\nf 2568/3723/729 2475/3724/729 2474/3706/729\nf 2565/3701/730 2404/3725/730 2567/3703/730\nf 2564/3726/641 2561/3727/641 2058/3728/641\nf 2076/3729/731 2412/3714/731 2411/3730/731\nf 2067/3698/732 2419/3690/732 2068/3731/732\nf 2562/3688/733 2406/3732/733 2566/3699/733\nf 2061/3733/734 2471/3734/734 2062/3717/734\nf 2060/3735/735 2472/3736/735 2061/3733/735\nf 2064/3737/736 2468/3738/736 2065/3721/736\nf 2074/3739/737 2414/3711/737 2413/3713/737\nf 2063/3719/738 2469/3740/738 2064/3737/738\nf 2570/3741/739 2476/3709/739 2475/3724/739\nf 2248/3742/217 1549/3743/217 1553/3744/217\nf 2572/3745/8 1485/3746/8 1474/3747/8\nf 2573/3748/49 1560/3749/49 1485/3746/49\nf 2274/3750/48 1439/3751/48 1547/3752/48\nf 2257/3753/79 1545/3754/79 2258/3755/79\nf 2246/3756/11 1545/3754/11 1549/3757/11\nf 2255/3758/40 1452/3759/40 2256/3760/40\nf 2266/3761/21 1456/3762/21 1455/3763/21\nf 2576/3764/186 1550/3765/186 2575/3766/186\nf 2260/3767/25 1551/3768/26 1558/3769/26\nf 2577/3770/740 1445/3771/7 1546/3772/7\nf 2265/3773/282 1468/3774/282 1456/3762/282\nf 2254/3775/13 1466/3776/13 2255/3758/13\nf 2580/3777/52 1562/3778/543 2579/3779/52\nf 2581/3780/395 2582/3781/395 2249/3350/395\nf 2253/3782/29 1477/3783/741 2254/3775/29\nf 2581/3784/37 1474/3747/37 1463/3785/37\nf 2263/3786/46 1490/3787/46 1479/3788/742\nf 2275/3789/12 1547/3752/12 1551/3768/12\nf 2582/3790/743 1463/3785/18 1446/3791/18\nf 2579/3779/6 1482/3792/744 2583/3793/6\nf 2270/3794/15 1471/3795/15 1460/3796/15\nf 2251/3797/419 1455/3763/419 1556/3798/419\nf 2256/3760/745 1451/3799/24 2257/3753/745\nf 2272/3800/27 1439/3801/27 2273/3802/27\nf 2574/3803/22 1553/3744/22 1560/3749/22\nf 2575/3766/16 1554/3804/16 2580/3777/16\nf 2264/3805/746 1479/3788/747 1468/3774/747\nf 2271/3806/353 1440/3807/353 2272/3800/353\nf 2252/3808/4 1488/3809/4 2253/3782/4\nf 2578/3810/76 1446/3791/76 1445/3771/76\nf 2262/3811/23 1558/3769/23 1490/3787/23\nf 2580/3812/397 2579/3813/398 2269/3814/397\nf 2583/3793/411 1471/3795/63 2584/3815/411\nf 2126/3816/217 909/3817/217 913/3818/217\nf 2586/3819/8 845/3820/8 834/3821/8\nf 2587/3822/50 920/3823/49 845/3820/49\nf 2152/3824/48 799/3825/48 907/3826/48\nf 2589/3827/395 2590/3828/395 2127/3272/395\nf 2135/3829/79 905/3830/79 2136/3831/79\nf 2124/3832/11 905/3830/11 909/3817/11\nf 2133/3833/40 812/3834/40 2134/3835/40\nf 2144/3836/21 816/3837/21 815/3838/21\nf 2594/3839/186 910/3840/35 2593/3841/186\nf 2138/3842/748 911/3843/26 918/3844/26\nf 2592/3845/740 805/3846/749 906/3847/749\nf 2143/3848/282 828/3849/282 816/3837/282\nf 2132/3850/13 826/3851/13 2133/3833/13\nf 2596/3852/52 922/3853/543 2595/3854/52\nf 2131/3855/29 837/3856/29 2132/3850/29\nf 2589/3857/37 834/3821/37 823/3858/37\nf 2141/3859/46 850/3860/742 839/3861/742\nf 2153/3862/12 907/3826/12 911/3843/12\nf 2590/3863/18 823/3858/18 806/3864/18\nf 2595/3854/750 842/3865/6 2597/3866/750\nf 2148/3867/15 831/3868/751 820/3869/751\nf 2129/3870/42 815/3838/419 916/3871/67\nf 2134/3835/745 811/3872/24 2135/3829/745\nf 2150/3873/27 799/3825/27 2151/3874/27\nf 2596/3875/397 2595/3876/398 2147/3877/397\nf 2588/3878/22 913/3818/22 920/3823/22\nf 2593/3841/16 914/3879/16 2596/3852/16\nf 2142/3880/10 839/3861/10 828/3849/10\nf 2149/3881/353 800/3882/353 2150/3873/353\nf 2130/3883/4 848/3884/4 2131/3855/4\nf 2591/3885/76 806/3864/76 805/3846/76\nf 2140/3886/23 918/3844/23 850/3860/23\nf 2597/3866/411 831/3868/63 2598/3887/411\nf 750/3888/403 2394/3889/403 751/3890/403\nf 2600/3891/701 2485/3892/701 2599/3893/701\nf 2602/3894/704 2494/3895/380 2601/3896/704\nf 2609/3897/407 2600/3898/407 677/3899/407\nf 2611/3900/702 2482/3901/702 2612/3902/702\nf 2607/3903/752 2488/3904/752 2608/3905/752\nf 2610/3906/391 2483/3907/391 2611/3900/391\nf 2607/3903/385 2490/3908/385 2489/3909/385\nf 2613/3910/395 2399/3911/395 746/3912/395\nf 2603/3913/382 2492/3914/382 2604/3915/382\nf 2613/3910/706 2482/3901/706 2481/3916/706\nf 2601/3896/381 2493/3917/381 2603/3918/381\nf 760/3919/687 2384/3920/687 761/3921/687\nf 756/3922/683 2388/3923/683 757/3924/683\nf 753/3925/406 2391/3926/406 754/3927/406\nf 746/3912/397 2398/3928/397 747/3929/397\nf 2609/3930/692 2486/3931/692 2600/3891/692\nf 747/3929/705 2397/3932/705 748/3933/705\nf 761/3921/378 2383/3934/378 762/3935/378\nf 2604/3915/383 2491/3936/383 2605/3937/383\nf 757/3924/374 2387/3938/374 758/3939/374\nf 2498/3940/1 2521/3941/1 670/3942/1\nf 751/3890/404 2393/3943/404 752/3944/404\nf 760/3919/685 2386/3945/685 2385/3946/685\nf 2605/3937/384 2490/3908/384 2606/3947/384\nf 752/3944/703 2392/3948/703 753/3925/703\nf 755/3949/371 2391/3926/371 2390/3950/371\nf 755/3949/681 2389/3951/681 756/3922/681\nf 758/3952/375 2386/3945/375 759/3953/375\nf 749/3954/402 2395/3955/402 750/3956/402\nf 2599/3957/390 2484/3958/390 2610/3906/390\nf 2608/3905/753 2487/3959/753 2609/3930/753\nf 2602/3894/379 2383/3934/379 2495/3960/379\nf 748/3933/401 2396/3961/401 749/3954/401\nf 690/3962/217 147/3963/217 151/3964/217\nf 2615/3965/8 83/3966/8 72/3967/8\nf 2616/3968/49 158/3969/49 83/3966/49\nf 716/3970/48 37/3971/48 145/3972/48\nf 699/3973/79 143/3974/79 700/3975/79\nf 688/3976/11 143/3974/11 147/3977/11\nf 697/3978/40 50/3979/40 698/3980/40\nf 2621/3981/397 2622/3982/398 711/3983/397\nf 708/3984/754 54/3985/754 53/3986/754\nf 2619/3987/35 148/3988/35 2620/3989/35\nf 702/3990/748 149/3991/26 156/3992/26\nf 2618/3993/749 43/3994/749 144/3995/749\nf 707/3996/164 66/3997/32 54/3985/32\nf 696/3998/13 64/3999/13 697/3978/13\nf 2626/4000/395 2627/4001/395 691/1084/395\nf 2621/4002/543 160/4003/52 2622/4004/543\nf 695/4005/741 75/4006/741 696/3998/741\nf 2626/4007/37 72/3967/37 61/4008/37\nf 705/4009/64 88/4010/46 77/4011/46\nf 717/4012/12 145/3972/12 149/3991/12\nf 2627/4013/18 61/4008/743 44/4014/743\nf 2622/4004/750 80/4015/750 2623/4016/750\nf 712/4017/15 69/4018/15 58/4019/15\nf 693/4020/71 53/3986/42 154/4021/42\nf 698/3980/24 49/4022/745 699/3973/24\nf 714/4023/27 37/4024/27 715/4025/27\nf 2617/4026/22 151/3964/22 158/3969/22\nf 2620/3989/16 152/4027/16 2621/4002/16\nf 706/4028/10 77/4011/10 66/3997/747\nf 713/4029/353 38/4030/353 714/4023/353\nf 694/4031/5 86/4032/5 695/4005/5\nf 2625/4033/76 44/4014/76 43/3994/76\nf 704/4034/23 156/3992/23 88/4010/23\nf 2623/4016/411 69/4018/411 2624/4035/411\nf 1/1/1 2/127/1 3/2/1\nf 1/4/2 5/4036/2 8/4037/2\nf 5/4036/2 6/4038/2 8/4037/2\nf 6/4038/2 7/4039/2 8/4037/2\nf 8/4037/2 9/4040/2 12/5/2\nf 9/4040/2 10/4041/2 12/5/2\nf 10/4041/2 11/4042/2 12/5/2\nf 12/5/2 13/4043/2 14/4044/2\nf 14/4044/2 15/4045/2 16/4046/2\nf 16/4046/2 17/4047/2 20/6/2\nf 17/4047/2 18/4048/2 20/6/2\nf 18/4048/2 19/4049/2 20/6/2\nf 20/6/2 21/4050/2 22/4051/2\nf 22/4051/2 23/4052/2 20/6/2\nf 23/4052/2 24/4053/2 20/6/2\nf 24/4053/2 25/4054/2 26/4055/2\nf 26/4055/2 27/4056/2 28/4057/2\nf 28/4057/2 29/4058/2 30/4059/2\nf 30/4059/2 31/4060/2 32/4061/2\nf 32/4061/2 33/4062/2 34/4063/2\nf 34/4063/2 2/4064/2 1/4/2\nf 12/5/2 14/4044/2 20/6/2\nf 14/4044/2 16/4046/2 20/6/2\nf 24/4053/2 26/4055/2 28/4057/2\nf 28/4057/2 30/4059/2 32/4061/2\nf 32/4061/2 34/4063/2 28/4057/2\nf 34/4063/2 1/4/2 28/4057/2\nf 1/4/2 8/4037/2 12/5/2\nf 20/6/2 24/4053/2 1/4/2\nf 24/4053/2 28/4057/2 1/4/2\nf 10/7/1 9/126/1 35/8/1\nf 37/10/1 38/32/1 39/11/1\nf 5/13/1 1/1/1 4/3/1\nf 11/15/1 10/7/1 36/9/1\nf 43/17/1 44/36/1 45/18/1\nf 6/20/1 5/13/1 41/14/1\nf 12/22/1 11/15/1 42/16/1\nf 49/24/1 50/40/1 51/25/1\nf 53/27/1 54/42/1 55/28/1\nf 13/30/1 12/22/1 48/23/1\nf 38/32/1 58/46/1 59/33/1\nf 14/34/1 13/30/1 57/31/1\nf 44/36/1 61/50/1 62/37/1\nf 15/38/1 14/34/1 60/35/1\nf 50/40/1 64/54/1 65/41/1\nf 54/42/1 66/56/1 67/43/1\nf 16/44/1 15/38/1 63/39/1\nf 58/46/1 69/60/1 70/47/1\nf 17/48/1 16/44/1 68/45/1\nf 61/50/1 72/64/1 73/51/1\nf 18/52/1 17/48/1 71/49/1\nf 64/54/1 75/68/1 76/55/1\nf 66/56/1 77/70/1 78/57/1\nf 19/58/1 18/52/1 74/53/1\nf 69/60/1 80/166/1 81/61/1\nf 20/62/1 19/58/1 79/59/1\nf 72/64/1 83/164/1 84/65/1\nf 21/66/1 20/62/1 82/63/1\nf 75/68/1 86/161/1 87/69/1\nf 77/70/1 88/160/1 89/71/1\nf 22/72/1 21/66/1 85/67/1\nf 91/74/1 92/152/1 93/75/1\nf 95/77/1 96/82/1 97/78/1\nf 99/80/1 91/74/1 94/76/1\nf 96/82/1 46/19/1 101/83/1\nf 102/84/1 99/80/1 100/81/1\nf 46/19/1 45/18/1 104/86/1\nf 105/87/1 102/84/1 103/85/1\nf 45/18/1 62/37/1 107/89/1\nf 108/90/1 105/87/1 106/88/1\nf 62/37/1 73/51/1 110/92/1\nf 111/93/1 108/90/1 109/91/1\nf 73/51/1 84/65/1 113/95/1\nf 114/96/1 111/93/1 112/94/1\nf 116/98/1 47/21/1 117/99/1\nf 84/65/1 119/106/1 120/101/1\nf 121/102/1 114/96/1 115/97/1\nf 123/104/1 116/98/1 118/100/1\nf 119/106/1 125/110/1 126/107/1\nf 3/2/1 121/102/1 122/103/1\nf 35/8/1 123/104/1 124/105/1\nf 125/110/1 129/114/1 130/111/1\nf 4/3/1 3/2/1 127/108/1\nf 36/9/1 35/8/1 128/109/1\nf 129/114/1 133/118/1 134/115/1\nf 41/14/1 4/3/1 131/112/1\nf 42/16/1 36/9/1 132/113/1\nf 133/118/1 52/26/1 137/119/1\nf 47/21/1 41/14/1 135/116/1\nf 48/23/1 42/16/1 136/117/1\nf 52/26/1 51/25/1 139/121/1\nf 56/29/1 55/28/1 140/122/1\nf 57/31/1 48/23/1 138/120/1\nf 143/125/1 49/24/1 52/26/1\nf 9/126/1 8/129/1 123/104/1\nf 2/127/1 34/130/1 121/102/1\nf 144/128/1 43/17/1 46/19/1\nf 8/129/1 7/133/1 116/98/1\nf 34/130/1 33/134/1 114/96/1\nf 145/131/1 37/10/1 40/12/1\nf 7/133/1 6/20/1 47/21/1\nf 33/134/1 32/136/1 111/93/1\nf 147/135/1 143/125/1 133/118/1\nf 32/136/1 31/138/1 108/90/1\nf 148/137/1 144/128/1 96/82/1\nf 31/138/1 30/141/1 105/87/1\nf 149/139/1 145/131/1 146/132/1\nf 30/141/1 29/143/1 102/84/1\nf 151/142/1 147/135/1 129/114/1\nf 29/143/1 28/148/1 99/80/1\nf 152/144/1 148/137/1 95/77/1\nf 154/146/1 53/27/1 56/29/1\nf 28/148/1 27/151/1 91/74/1\nf 156/149/1 149/139/1 150/140/1\nf 27/151/1 26/154/1 92/152/1\nf 158/153/1 151/142/1 125/110/1\nf 26/154/1 25/158/1 159/155/1\nf 160/156/1 152/144/1 153/145/1\nf 25/158/1 24/162/1 162/159/1\nf 88/160/1 156/149/1 157/150/1\nf 86/161/1 154/146/1 155/147/1\nf 24/162/1 23/165/1 163/163/1\nf 83/164/1 158/153/1 119/106/1\nf 23/165/1 22/72/1 90/73/1\nf 80/166/1 160/156/1 161/157/1\nf 164/167/3 165/174/3 166/168/3\nf 169/170/2 170/264/2 171/171/2\nf 172/173/3 173/178/3 166/168/3\nf 174/175/2 168/172/2 171/171/2\nf 172/173/3 176/181/3 177/177/3\nf 178/179/2 174/175/2 175/176/2\nf 176/181/3 180/185/3 181/182/3\nf 178/179/2 179/180/2 182/183/2\nf 180/185/3 98/190/3 183/186/3\nf 93/184/2 182/183/2 184/187/2\nf 97/189/3 185/194/3 183/186/3\nf 94/188/2 184/187/2 186/191/2\nf 97/189/3 101/198/3 187/193/3\nf 103/195/2 100/192/2 186/191/2\nf 104/197/3 189/202/3 187/193/3\nf 103/195/2 188/196/2 190/199/2\nf 107/201/3 191/206/3 189/202/3\nf 109/203/2 106/200/2 190/199/2\nf 107/201/3 110/209/3 193/205/3\nf 109/203/2 192/204/2 194/207/2\nf 110/209/3 113/216/3 195/210/3\nf 115/211/2 112/208/2 194/207/2\nf 117/213/2 197/318/2 198/214/2\nf 113/216/3 120/223/3 199/217/3\nf 115/211/2 196/212/2 200/218/2\nf 124/220/2 118/215/2 198/214/2\nf 126/222/3 202/229/3 199/217/3\nf 127/224/2 122/219/2 200/218/2\nf 124/220/2 201/221/2 204/226/2\nf 126/222/3 130/323/3 205/228/3\nf 131/230/2 127/224/2 203/225/2\nf 132/232/2 128/227/2 204/226/2\nf 153/145/1 95/77/1 98/79/1\nf 92/152/1 159/155/1 178/235/1\nf 161/157/1 153/145/1 180/234/1\nf 159/155/1 162/159/1 174/237/1\nf 81/61/1 161/157/1 176/236/1\nf 162/159/1 163/163/1 168/239/1\nf 70/47/1 81/61/1 172/238/1\nf 163/163/1 90/73/1 169/241/1\nf 59/33/1 70/47/1 165/240/1\nf 90/73/1 85/67/1 208/243/1\nf 39/11/1 59/33/1 164/242/1\nf 85/67/1 82/63/1 210/245/1\nf 40/12/1 39/11/1 209/244/1\nf 82/63/1 79/59/1 212/247/1\nf 146/132/1 40/12/1 211/246/1\nf 79/59/1 74/53/1 214/249/1\nf 150/140/1 146/132/1 213/248/1\nf 74/53/1 71/49/1 216/251/1\nf 157/150/1 150/140/1 215/250/1\nf 155/147/1 56/29/1 141/123/1\nf 71/49/1 68/45/1 219/254/1\nf 89/71/1 157/150/1 217/252/1\nf 87/69/1 155/147/1 218/253/1\nf 68/45/1 63/39/1 222/257/1\nf 78/57/1 89/71/1 220/255/1\nf 76/55/1 87/69/1 221/256/1\nf 63/39/1 60/35/1 225/260/1\nf 67/43/1 78/57/1 223/258/1\nf 65/41/1 76/55/1 224/259/1\nf 60/35/1 57/31/1 142/124/1\nf 55/28/1 67/43/1 226/261/1\nf 51/25/1 65/41/1 227/262/1\nf 169/170/2 208/268/2 228/263/2\nf 164/167/3 167/169/3 229/265/3\nf 210/267/2 230/272/2 228/263/2\nf 209/266/3 229/265/3 231/269/3\nf 212/271/2 232/276/2 230/272/2\nf 213/273/3 211/270/3 231/269/3\nf 214/275/2 234/280/2 232/276/2\nf 213/273/3 233/274/3 235/277/3\nf 214/275/2 216/287/2 236/279/2\nf 217/281/3 215/278/3 235/277/3\nf 141/283/3 238/312/3 239/284/3\nf 219/286/2 240/293/2 236/279/2\nf 220/288/3 217/281/3 237/282/3\nf 221/290/3 218/285/3 239/284/3\nf 219/286/2 222/298/2 243/292/2\nf 220/288/3 241/289/3 244/294/3\nf 221/290/3 242/291/3 245/296/3\nf 222/298/2 225/305/2 246/299/2\nf 226/300/3 223/295/3 244/294/3\nf 224/297/3 245/296/3 248/302/3\nf 142/304/2 249/311/2 246/299/2\nf 226/300/3 247/301/3 250/306/3\nf 139/308/3 227/303/3 248/302/3\nf 142/304/2 138/316/2 252/310/2\nf 141/283/3 140/307/3 250/306/3\nf 139/308/3 251/309/3 253/313/3\nf 136/315/2 254/321/2 252/310/2\nf 117/213/2 135/322/2 255/317/2\nf 134/319/3 137/314/3 253/313/3\nf 132/232/2 207/233/2 254/321/2\nf 131/230/2 206/231/2 255/317/2\nf 134/319/3 256/320/3 205/228/3\nf 258/324/4 259/4065/4 260/325/4\nf 239/327/1 258/331/1 257/328/1\nf 255/330/1 259/333/1 258/331/1\nf 206/332/1 260/334/1 259/333/1\nf 242/329/1 257/328/1 260/334/1\nf 262/335/3 263/4066/3 264/336/3\nf 199/338/1 265/342/1 266/339/1\nf 186/341/1 267/344/1 265/342/1\nf 184/343/1 268/345/1 267/344/1\nf 195/340/1 266/339/1 268/345/1\nf 270/346/6 271/4067/6 272/347/6\nf 177/349/1 270/353/1 269/350/1\nf 232/352/1 271/355/1 270/353/1\nf 234/354/1 272/356/1 271/355/1\nf 173/351/1 269/350/1 272/356/1\nf 273/357/3 274/4068/3 275/358/3\nf 241/360/1 262/364/1 261/361/1\nf 207/363/1 277/366/1 262/364/1\nf 204/365/1 278/367/1 277/366/1\nf 244/362/1 261/361/1 278/367/1\nf 280/368/2 281/4069/2 282/369/2\nf 253/371/1 283/375/1 284/372/1\nf 194/374/1 285/377/1 283/375/1\nf 192/376/1 286/378/1 285/377/1\nf 256/373/1 284/372/1 286/378/1\nf 288/379/7 289/4070/7 290/380/7\nf 187/382/1 288/386/1 287/383/1\nf 171/385/1 289/388/1 288/386/1\nf 170/387/1 290/389/1 289/388/1\nf 185/384/1 287/383/1 290/389/1\nf 265/390/3 291/4071/3 292/391/3\nf 231/393/1 293/397/1 294/394/1\nf 246/396/1 295/399/1 293/397/1\nf 249/398/1 296/400/1 295/399/1\nf 233/395/1 294/394/1 296/400/1\nf 286/401/2 297/4072/2 298/402/2\nf 242/329/1 299/406/1 300/404/1\nf 206/332/1 301/408/1 299/406/1\nf 203/407/1 302/409/1 301/408/1\nf 245/405/1 300/404/1 302/409/1\nf 304/410/8 305/4073/8 306/411/8\nf 195/340/1 304/415/1 303/413/1\nf 184/343/1 305/417/1 304/415/1\nf 182/416/1 306/418/1 305/417/1\nf 193/414/1 303/413/1 306/418/1\nf 273/419/9 276/4074/9 308/420/9\nf 173/351/1 309/424/1 310/422/1\nf 234/354/1 311/426/1 309/424/1\nf 236/425/1 312/427/1 311/426/1\nf 166/423/1 310/422/1 312/427/1\nf 314/428/10 315/4075/10 316/429/10\nf 244/362/1 314/433/1 313/431/1\nf 204/365/1 315/435/1 314/433/1\nf 201/434/1 316/436/1 315/435/1\nf 247/432/1 313/431/1 316/436/1\nf 318/437/11 319/4076/11 320/438/11\nf 256/373/1 318/442/1 317/440/1\nf 192/376/1 319/444/1 318/442/1\nf 190/443/1 320/445/1 319/444/1\nf 205/441/1 317/440/1 320/445/1\nf 322/446/3 323/4077/3 324/447/3\nf 185/384/1 325/451/1 326/449/1\nf 170/387/1 327/453/1 325/451/1\nf 228/452/1 328/454/1 327/453/1\nf 183/450/1 326/449/1 328/454/1\nf 330/455/12 331/4078/12 332/456/12\nf 233/395/1 330/460/1 329/458/1\nf 249/398/1 331/462/1 330/460/1\nf 252/461/1 332/463/1 331/462/1\nf 235/459/1 329/458/1 332/463/1\nf 334/464/13 335/4079/13 336/465/13\nf 245/405/1 334/469/1 333/467/1\nf 203/407/1 335/471/1 334/469/1\nf 200/470/1 336/472/1 335/471/1\nf 248/468/1 333/467/1 336/472/1\nf 266/473/14 292/805/14 337/474/14\nf 193/414/1 338/478/1 339/476/1\nf 182/416/1 340/480/1 338/478/1\nf 179/479/1 341/481/1 340/480/1\nf 191/477/1 339/476/1 341/481/1\nf 343/482/15 344/4080/15 345/483/15\nf 166/423/1 343/487/1 342/485/1\nf 236/425/1 344/489/1 343/487/1\nf 240/488/1 345/490/1 344/489/1\nf 167/486/1 342/485/1 345/490/1\nf 347/491/2 348/4081/2 349/492/2\nf 247/432/1 350/496/1 351/494/1\nf 201/434/1 346/498/1 350/496/1\nf 198/497/1 347/499/1 346/498/1\nf 250/495/1 351/494/1 347/499/1\nf 294/500/3 293/4082/3 352/501/3\nf 205/441/1 354/505/1 355/503/1\nf 190/443/1 356/507/1 354/505/1\nf 188/506/1 357/508/1 356/507/1\nf 202/504/1 355/503/1 357/508/1\nf 359/509/16 360/4083/17 361/510/17\nf 183/450/1 359/514/1 358/512/1\nf 228/452/1 360/516/1 359/514/1\nf 230/515/1 361/517/1 360/516/1\nf 181/513/1 358/512/1 361/517/1\nf 362/518/3 363/4084/3 364/519/3\nf 235/459/1 366/523/1 367/521/1\nf 252/461/1 368/525/1 366/523/1\nf 254/524/1 369/526/1 368/525/1\nf 237/522/1 367/521/1 369/526/1\nf 370/527/2 371/4085/2 372/528/2\nf 248/468/1 374/532/1 375/530/1\nf 200/470/1 376/534/1 374/532/1\nf 196/533/1 377/535/1 376/534/1\nf 251/531/1 375/530/1 377/535/1\nf 379/536/18 380/4086/18 381/537/18\nf 191/477/1 379/541/1 378/539/1\nf 179/479/1 380/543/1 379/541/1\nf 175/542/1 381/544/1 380/543/1\nf 189/540/1 378/539/1 381/544/1\nf 354/545/3 382/4087/3 383/546/3\nf 167/486/1 384/550/1 385/548/1\nf 240/488/1 386/552/1 384/550/1\nf 243/551/1 387/553/1 386/552/1\nf 229/549/1 385/548/1 387/553/1\nf 284/554/19 388/847/19 297/555/20\nf 238/557/1 274/560/1 273/558/1\nf 197/559/1 389/561/1 274/560/1\nf 255/330/1 307/562/1 389/561/1\nf 239/327/1 273/558/1 307/562/1\nf 391/563/21 392/4088/21 393/564/21\nf 250/495/1 391/567/1 390/566/1\nf 198/497/1 392/568/1 391/567/1\nf 197/559/1 393/569/1 392/568/1\nf 238/557/1 390/566/1 393/569/1\nf 395/570/22 396/4089/22 397/571/22\nf 202/504/1 395/574/1 394/573/1\nf 188/506/1 396/575/1 395/574/1\nf 186/341/1 397/576/1 396/575/1\nf 199/338/1 394/573/1 397/576/1\nf 302/577/2 398/4090/2 399/578/2\nf 181/513/1 363/581/1 362/580/1\nf 230/515/1 279/582/1 363/581/1\nf 232/352/1 280/583/1 279/582/1\nf 177/349/1 362/580/1 280/583/1\nf 401/584/23 402/4091/23 403/585/23\nf 237/522/1 401/588/1 400/587/1\nf 254/524/1 402/589/1 401/588/1\nf 207/363/1 403/590/1 402/589/1\nf 241/360/1 400/587/1 403/590/1\nf 405/591/24 406/4092/24 407/592/24\nf 251/531/1 405/595/1 404/594/1\nf 196/533/1 406/596/1 405/595/1\nf 194/374/1 407/597/1 406/596/1\nf 253/371/1 404/594/1 407/597/1\nf 362/598/25 365/1020/25 281/599/26\nf 189/540/1 322/602/1 321/601/1\nf 175/542/1 370/603/1 322/602/1\nf 171/385/1 371/604/1 370/603/1\nf 187/382/1 321/601/1 371/604/1\nf 409/605/27 410/4093/27 411/606/27\nf 229/549/1 409/609/1 408/608/1\nf 243/551/1 410/610/1 409/609/1\nf 246/396/1 411/611/1 410/610/1\nf 231/393/1 408/608/1 411/611/1\nf 267/612/28 412/812/75 291/613/29\nf 277/615/30 413/828/30 263/616/31\nf 285/618/32 298/838/32 414/619/33\nf 295/621/34 415/858/34 352/622/35\nf 301/624/25 399/870/25 416/625/26\nf 311/627/36 417/885/36 418/628/37\nf 327/630/38 419/900/38 420/631/38\nf 340/633/39 421/915/421 422/634/40\nf 346/636/41 349/928/41 423/637/41\nf 356/639/42 424/942/42 382/640/43\nf 368/642/14 425/958/14 426/643/44\nf 376/645/45 427/971/68 428/646/46\nf 386/648/20 429/987/20 430/649/47\nf 389/651/48 431/1003/48 275/652/48\nf 279/654/49 282/1015/49 364/655/50\nf 370/657/51 373/1031/51 323/658/51\nf 433/660/14 434/1013/52 435/661/52\nf 437/663/54 438/969/55 439/664/55\nf 267/666/2 268/4094/2 337/667/2\nf 307/669/2 308/4095/2 431/670/2\nf 375/672/56 440/979/549 441/673/37\nf 385/675/3 384/4096/3 430/676/3\nf 444/678/57 445/4097/57 446/679/57\nf 377/681/2 441/4098/2 427/682/2\nf 355/684/35 383/935/35 447/685/58\nf 366/687/3 426/4099/3 448/688/3\nf 450/690/37 451/912/37 452/691/37\nf 356/693/2 357/4100/2 447/694/2\nf 339/696/31 453/909/31 454/697/59\nf 351/699/3 350/4101/3 423/700/3\nf 457/702/60 458/898/60 459/703/60\nf 340/705/2 341/4102/2 454/706/2\nf 326/708/61 460/905/61 461/709/62\nf 338/711/3 422/4103/3 453/712/3\nf 463/714/63 464/883/31 465/715/31\nf 327/717/2 328/4104/2 461/718/2\nf 310/720/64 466/893/64 467/721/46\nf 325/723/3 420/4105/3 460/724/3\nf 469/726/65 470/4106/66 471/727/66\nf 312/729/2 467/4107/2 417/730/2\nf 294/732/67 353/851/67 472/733/67\nf 300/735/3 299/4108/3 416/736/3\nf 475/738/68 476/825/68 477/739/68\nf 296/741/2 472/4109/2 415/742/2\nf 261/744/54 264/822/54 478/745/69\nf 284/747/3 283/4110/3 414/748/3\nf 480/750/70 481/985/70 482/751/70\nf 277/753/2 278/4111/2 478/754/2\nf 385/756/32 442/995/32 483/757/33\nf 485/759/71 486/1001/71 487/760/71\nf 489/762/26 490/954/26 491/763/26\nf 387/765/2 483/4112/2 429/766/2\nf 493/768/72 494/867/741 495/769/73\nf 367/771/74 448/951/74 496/772/75\nf 498/774/76 499/1028/77 500/775/77\nf 300/777/78 473/876/78 398/778/49\nf 375/780/3 374/4113/3 428/781/3\nf 502/783/33 503/925/32 504/784/32\nf 321/786/70 324/1025/70 372/787/70\nf 310/789/3 309/4114/3 418/790/3\nf 506/792/79 507/835/79 508/793/79\nf 368/795/2 369/4115/2 496/796/2\nf 351/798/51 455/922/51 348/799/51\nf 509/801/80 510/817/80 511/802/80\nf 511/802/81 513/818/81 514/804/82\nf 514/804/83 513/818/83 292/805/83\nf 509/801/84 512/803/84 516/807/84\nf 512/809/79 514/4116/79 517/810/79\nf 517/810/85 514/4116/755 291/613/86\nf 518/813/87 515/808/87 516/807/87\nf 519/814/88 516/807/89 517/815/89\nf 517/815/90 412/4117/435 337/474/90\nf 518/813/91 519/814/91 511/802/91\nf 519/814/76 520/816/76 513/818/76\nf 520/816/92 337/474/92 292/805/93\nf 474/740/95 521/831/756 522/819/96\nf 522/819/98 521/831/561 523/820/99\nf 524/821/100 523/820/100 264/822/100\nf 475/738/101 522/819/101 525/824/101\nf 522/819/48 524/821/48 526/826/48\nf 526/827/102 524/4118/102 263/616/102\nf 477/739/103 476/825/757 525/824/104\nf 525/824/106 526/826/106 528/830/107\nf 526/826/109 413/4119/109 478/745/109\nf 477/739/110 527/829/110 521/831/110\nf 527/829/111 528/830/111 523/820/67\nf 528/830/112 478/745/112 264/822/113\nf 505/794/114 529/842/758 530/832/115\nf 530/832/117 529/842/117 531/833/117\nf 531/833/118 388/4120/118 414/619/118\nf 507/835/119 506/792/120 530/832/120\nf 530/832/29 532/834/29 534/837/29\nf 534/837/121 532/834/122 414/619/122\nf 508/793/123 507/835/759 533/836/124\nf 533/836/126 534/837/126 536/840/126\nf 536/840/128 534/837/128 298/838/128\nf 508/793/129 535/839/129 529/842/129\nf 535/843/130 536/846/130 531/844/78\nf 536/846/131 297/555/131 388/847/132\nf 469/726/133 468/728/760 537/848/134\nf 537/848/136 539/863/136 540/850/137\nf 540/850/139 539/863/139 353/851/139\nf 469/853/140 538/856/140 541/854/141\nf 538/856/63 540/4121/63 542/857/31\nf 542/857/142 540/4121/143 352/622/143\nf 471/727/144 470/4106/761 541/859/145\nf 543/860/147 541/859/148 542/861/148\nf 542/861/149 415/4122/149 472/733/150\nf 471/727/151 543/860/151 537/848/152\nf 543/860/45 544/862/45 539/863/64\nf 544/862/153 472/733/153 353/851/154\nf 492/770/155 545/874/762 546/864/156\nf 546/864/158 545/874/159 547/865/159\nf 547/865/160 473/4123/160 416/625/161\nf 494/867/162 493/768/163 546/864/163\nf 546/864/32 548/866/32 550/869/164\nf 550/869/165 548/866/166 416/625/166\nf 495/769/167 494/867/763 549/868/168\nf 549/868/170 550/869/170 552/872/171\nf 552/872/172 550/869/764 399/870/173\nf 495/769/174 551/871/174 545/874/174\nf 551/871/51 552/872/51 547/865/51\nf 552/875/84 398/778/84 473/876/84\nf 463/714/175 462/716/765 553/878/176\nf 553/878/178 555/881/463 556/880/179\nf 555/881/180 466/4124/180 418/628/181\nf 463/714/183 554/879/183 557/882/184\nf 554/879/186 556/880/186 558/884/35\nf 558/884/187 556/880/188 418/628/188\nf 464/883/189 557/882/467 559/886/189\nf 559/886/191 557/882/192 558/884/192\nf 558/884/194 417/885/194 467/888/195\nf 465/715/102 559/886/102 553/878/102\nf 559/889/48 560/892/48 555/890/48\nf 560/892/196 467/721/196 466/893/196\nf 456/704/197 561/904/474 562/894/197\nf 562/894/199 561/904/766 563/895/199\nf 563/895/201 460/905/201 420/631/201\nf 457/702/202 562/894/202 565/897/202\nf 562/894/37 564/896/37 566/899/37\nf 566/899/203 564/896/203 420/631/203\nf 459/703/204 458/898/767 565/897/204\nf 565/897/206 566/899/768 568/902/207\nf 568/902/209 566/899/769 419/900/209\nf 459/703/210 567/901/210 561/904/143\nf 567/901/31 568/902/59 563/895/31\nf 568/902/211 461/903/211 460/905/211\nf 450/690/212 449/692/482 569/906/212\nf 569/906/213 571/918/213 572/908/213\nf 572/908/214 571/918/214 453/909/214\nf 450/690/215 570/907/215 573/911/216\nf 570/907/217 572/908/217 574/913/217\nf 574/914/218 572/4125/219 422/634/219\nf 451/912/220 573/911/220 575/916/220\nf 575/916/222 573/911/222 574/913/222\nf 574/913/223 421/4126/223 454/697/223\nf 452/691/188 575/916/188 569/906/187\nf 575/916/35 576/917/35 571/918/224\nf 576/917/184 454/697/184 453/909/183\nf 502/783/225 501/785/770 577/919/226\nf 577/919/228 579/931/771 580/921/229\nf 580/921/231 579/931/231 455/922/231\nf 502/783/232 578/920/232 581/924/232\nf 578/920/25 580/921/25 582/926/26\nf 582/927/233 580/4127/233 423/637/233\nf 503/925/234 581/924/772 583/929/235\nf 583/929/237 581/924/773 582/926/238\nf 582/926/240 349/4128/774 348/799/240\nf 501/785/242 504/784/243 583/929/243\nf 583/929/74 584/930/74 579/931/74\nf 584/930/244 348/799/244 455/922/245\nf 443/680/246 585/933/775 586/932/246\nf 585/933/248 587/947/248 588/934/249\nf 588/934/250 587/947/250 383/935/250\nf 444/937/252 586/940/252 589/938/252\nf 586/940/69 588/4129/69 590/941/69\nf 590/941/253 588/4129/254 382/640/254\nf 446/679/255 445/4097/776 589/943/255\nf 591/944/257 589/943/258 590/945/258\nf 590/945/259 424/4130/259 447/685/259\nf 446/679/260 591/944/777 585/933/260\nf 591/944/261 592/946/417 587/947/37\nf 592/946/262 447/685/262 383/935/263\nf 488/764/264 593/949/264 594/948/264\nf 593/949/265 595/962/502 596/950/266\nf 596/950/267 595/962/268 448/951/268\nf 489/762/269 594/948/269 597/953/269\nf 594/955/270 596/4131/270 598/956/270\nf 598/956/271 596/4131/272 426/643/272\nf 491/763/273 490/954/274 597/953/274\nf 599/959/276 597/953/778 598/960/277\nf 598/960/278 425/4132/278 496/772/279\nf 491/763/280 599/959/280 593/949/281\nf 599/959/32 600/961/32 595/962/282\nf 600/961/283 496/772/283 448/951/284\nf 437/663/285 436/665/779 601/963/285\nf 602/964/287 601/963/288 603/965/288\nf 604/966/289 603/965/290 440/967/290\nf 437/663/291 602/964/291 605/968/113\nf 602/964/111 604/966/111 606/970/42\nf 606/970/293 604/966/294 428/646/294\nf 438/969/295 605/968/780 607/972/295\nf 605/968/297 606/970/297 608/973/298\nf 606/970/299 427/971/299 441/974/300\nf 439/664/219 607/972/219 601/963/219\nf 607/975/217 608/978/217 603/976/217\nf 608/978/216 441/673/216 440/979/301\nf 480/750/302 479/752/781 609/980/302\nf 610/981/303 609/980/615 611/982/303\nf 611/982/304 442/4133/304 430/649/305\nf 480/750/306 610/981/306 613/984/307\nf 610/981/308 612/983/308 614/986/308\nf 614/986/309 612/983/309 430/649/309\nf 482/751/310 481/985/782 613/984/310\nf 613/984/312 614/986/312 616/989/313\nf 616/989/315 614/986/316 429/987/316\nf 482/751/233 615/988/233 609/980/233\nf 615/991/317 616/994/317 611/992/318\nf 616/994/319 483/757/521 442/995/320\nf 485/759/321 484/761/783 617/996/322\nf 617/996/324 619/999/324 620/998/324\nf 619/999/325 276/1007/325 275/652/325\nf 485/759/326 618/997/326 621/1000/327\nf 618/997/328 620/998/328 622/1002/328\nf 622/1002/329 620/998/329 275/652/329\nf 486/1001/330 621/1000/618 623/1004/331\nf 623/1004/333 621/1000/333 622/1002/333\nf 624/1005/334 622/1002/334 431/1003/334\nf 487/760/335 623/1004/784 617/996/254\nf 623/1004/336 624/1005/40 619/999/69\nf 624/1005/252 308/1006/252 276/1007/252\nf 433/660/337 432/662/785 625/1008/338\nf 626/1009/340 625/1008/527 627/1010/340\nf 627/1010/341 365/4134/341 364/655/342\nf 433/660/343 626/1009/343 629/1012/344\nf 626/1009/20 628/1011/20 630/1014/76\nf 630/1014/345 628/1011/345 364/655/345\nf 434/1013/346 629/1012/531 631/1016/347\nf 629/1012/349 630/1014/349 632/1017/349\nf 632/1017/350 630/1014/350 282/1015/350\nf 435/661/271 631/1016/271 625/1008/352\nf 631/1016/353 632/1017/353 627/1010/70\nf 632/1019/354 281/599/354 365/1020/354\nf 497/776/355 633/1023/355 634/1022/356\nf 633/1023/358 635/1034/358 636/1024/358\nf 636/1024/359 635/1034/360 324/1025/360\nf 498/774/131 634/1022/131 637/1027/132\nf 634/1022/130 636/1024/130 638/1029/362\nf 638/1030/129 636/4135/129 323/658/129\nf 500/775/363 499/1028/786 637/1027/364\nf 639/1032/365 637/1027/365 638/1029/365\nf 638/1029/366 373/4136/787 372/787/367\nf 500/775/368 639/1032/368 633/1023/368\nf 639/1032/44 640/1033/44 635/1034/44\nf 640/1033/369 372/787/369 324/1025/370\nf 509/801/49 515/808/49 518/813/49\nf 642/1035/371 643/1039/371 644/1036/371\nf 645/1038/372 646/4137/372 643/1039/372\nf 647/1040/373 648/1044/373 646/1041/373\nf 649/1043/374 650/1046/374 648/1044/374\nf 651/1045/375 652/1048/375 650/1046/375\nf 653/1047/376 654/1050/376 652/1048/376\nf 655/1049/377 656/1052/377 654/1050/377\nf 657/1051/378 658/1054/378 656/1052/378\nf 659/1053/379 660/1056/379 658/1054/379\nf 661/1055/380 662/4138/380 660/1056/380\nf 663/1057/381 664/1061/381 662/1058/381\nf 665/1060/382 666/1063/382 664/1061/382\nf 667/1062/383 668/1065/383 666/1063/383\nf 669/1064/384 670/1067/384 668/1065/384\nf 671/1066/385 672/1069/385 670/1067/385\nf 673/1068/386 674/1071/386 672/1069/386\nf 675/1070/387 676/1073/387 674/1071/387\nf 677/1072/388 678/4139/388 676/1073/388\nf 679/1074/389 680/1078/389 678/1075/389\nf 681/1077/390 682/1080/390 680/1078/390\nf 683/1079/391 684/1082/391 682/1080/391\nf 685/1081/392 686/1085/392 684/1082/392\nf 686/1085/394 685/1081/394 689/4140/394\nf 685/1081/394 687/1086/394 688/4141/393\nf 689/4140/394 685/1081/394 688/4141/393\nf 689/4140/394 690/1083/393 686/1085/394\nf 687/1086/395 692/4142/395 694/4143/395\nf 692/4142/395 693/4144/788 694/4143/395\nf 700/4145/789 688/4141/790 687/1086/395\nf 699/4146/396 700/4145/789 687/1086/395\nf 687/1086/395 694/4143/395 695/4147/395\nf 687/1086/395 695/4147/395 696/4148/395\nf 698/1088/396 699/4146/396 687/1086/395\nf 687/1086/395 696/4148/395 697/1087/395\nf 693/4144/791 692/4142/397 708/4149/792\nf 692/4142/397 701/1089/397 707/4150/397\nf 708/4149/792 692/4142/397 707/4150/397\nf 701/1089/397 702/4151/793 703/4152/794\nf 701/1089/397 703/4152/794 704/4153/398\nf 701/1089/397 704/4153/398 705/1090/398\nf 706/1091/397 707/4150/397 701/1089/397\nf 702/4151/705 701/1089/399 709/1094/399\nf 709/1094/399 710/4154/399 715/1092/399\nf 710/4154/399 711/3983/399 712/4155/705\nf 714/4156/795 710/4154/399 713/4157/399\nf 712/4155/705 713/4157/399 710/4154/399\nf 717/4158/399 702/4151/705 709/1094/399\nf 716/1093/400 717/4158/399 709/1094/399\nf 710/4154/399 714/4156/795 715/1092/399\nf 718/1095/401 719/1099/401 710/1096/401\nf 720/1098/402 721/1101/402 719/1099/402\nf 722/1100/403 723/1103/403 721/1101/403\nf 724/1102/404 725/1108/404 723/1103/404\nf 644/4159/1 643/4160/1 733/4161/1\nf 643/4160/1 646/4162/1 732/4163/1\nf 646/4162/1 648/4164/1 732/4163/1\nf 648/4164/1 650/4165/1 731/4166/1\nf 732/4163/1 648/4164/1 731/4166/1\nf 650/4165/1 652/4167/1 730/4168/1\nf 652/4167/1 654/4169/1 729/4170/1\nf 654/4169/1 656/4171/1 728/4172/1\nf 656/4171/1 658/4173/1 727/4174/1\nf 730/4168/1 652/4167/1 729/4170/1\nf 658/4173/1 726/4175/1 727/4174/1\nf 727/4174/1 728/4172/1 656/4171/1\nf 731/4166/1 650/4165/1 730/4168/1\nf 643/4160/1 732/4163/1 733/4161/1\nf 725/1106/1 744/4176/1 735/1104/1\nf 744/4176/1 644/4159/1 734/4177/1\nf 721/4178/1 723/4179/1 737/4180/1\nf 723/4179/1 725/1106/1 736/1105/1\nf 710/4181/1 719/4182/1 740/4183/1\nf 719/4182/1 721/4178/1 739/4184/1\nf 740/4183/1 719/4182/1 739/4184/1\nf 743/4185/1 711/4186/1 741/4187/1\nf 711/4186/1 710/4181/1 740/4183/1\nf 741/4187/1 742/4188/1 743/4185/1\nf 740/4183/1 741/4187/1 711/4186/1\nf 744/4176/1 734/4177/1 735/1104/1\nf 644/4159/1 733/4161/1 734/4177/1\nf 728/4172/1 729/4170/1 654/4169/1\nf 738/4189/1 739/4184/1 721/4178/1\nf 737/4180/1 738/4189/1 721/4178/1\nf 736/1105/1 737/4180/1 723/4179/1\nf 745/1107/405 744/1109/405 725/1108/405\nf 641/1037/406 644/1036/406 744/1109/406\nf 642/4190/407 641/4191/407 755/4192/407\nf 641/4191/407 745/1112/407 754/1111/407\nf 642/4190/407 756/4193/407 645/4194/407\nf 745/1112/407 724/4195/407 753/1110/407\nf 724/4195/407 722/4196/407 752/4197/407\nf 755/4192/407 641/4191/407 754/1111/407\nf 722/4196/407 720/4198/407 750/4199/407\nf 720/4198/407 718/4200/407 749/4201/407\nf 748/4202/407 718/4200/407 709/4203/407\nf 709/4203/407 701/4204/407 747/4205/407\nf 701/4204/407 692/4206/407 747/4205/407\nf 692/4206/407 746/4207/407 747/4205/407\nf 718/4200/407 748/4202/407 749/4201/407\nf 709/4203/407 747/4205/407 748/4202/407\nf 756/4193/407 642/4190/407 755/4192/407\nf 647/4208/407 645/4194/407 757/4209/407\nf 757/4209/407 645/4194/407 756/4193/407\nf 651/4210/407 649/4211/407 758/4212/407\nf 649/4211/407 647/4208/407 757/4209/407\nf 655/4213/407 653/4214/407 760/4215/407\nf 653/4214/407 651/4210/407 759/4216/407\nf 762/4217/407 657/4218/407 761/4219/407\nf 657/4218/407 655/4213/407 761/4219/407\nf 651/4210/407 758/4212/407 759/4216/407\nf 649/4211/407 757/4209/407 758/4212/407\nf 760/4215/407 761/4219/407 655/4213/407\nf 759/4216/407 760/4215/407 653/4214/407\nf 720/4198/407 749/4201/407 750/4199/407\nf 722/4196/407 750/4199/407 751/4220/407\nf 722/4196/407 751/4220/407 752/4197/407\nf 752/4197/407 753/1110/407 724/4195/407\nf 763/1113/1 764/1239/1 765/1114/1\nf 763/1116/2 767/4221/2 768/4222/2\nf 768/4222/2 769/4223/2 770/4224/2\nf 770/4224/2 771/4225/2 774/1117/2\nf 771/4225/2 772/4226/2 774/1117/2\nf 772/4226/2 773/4227/2 774/1117/2\nf 774/1117/2 775/4228/2 776/4229/2\nf 776/4229/2 777/4230/2 778/4231/2\nf 778/4231/2 779/4232/2 780/4233/2\nf 780/4233/2 781/4234/2 778/4231/2\nf 781/4234/2 782/1118/2 778/4231/2\nf 782/1118/2 783/4235/2 786/4236/2\nf 783/4235/2 784/4237/2 786/4236/2\nf 784/4237/2 785/4238/2 786/4236/2\nf 786/4236/2 787/4239/2 788/4240/2\nf 788/4240/2 789/4241/2 790/4242/2\nf 790/4242/2 791/4243/2 792/4244/2\nf 792/4244/2 793/4245/2 794/4246/2\nf 794/4246/2 795/4247/2 796/4248/2\nf 796/4248/2 764/4249/2 763/1116/2\nf 763/1116/2 768/4222/2 774/1117/2\nf 768/4222/2 770/4224/2 774/1117/2\nf 774/1117/2 776/4229/2 782/1118/2\nf 776/4229/2 778/4231/2 782/1118/2\nf 786/4236/2 788/4240/2 790/4242/2\nf 790/4242/2 792/4244/2 794/4246/2\nf 794/4246/2 796/4248/2 790/4242/2\nf 796/4248/2 763/1116/2 790/4242/2\nf 782/1118/2 786/4236/2 763/1116/2\nf 786/4236/2 790/4242/2 763/1116/2\nf 772/1119/1 771/1238/1 797/1120/1\nf 799/1122/1 800/1144/1 801/1123/1\nf 767/1125/1 763/1113/1 766/1115/1\nf 773/1127/1 772/1119/1 798/1121/1\nf 805/1129/1 806/1148/1 807/1130/1\nf 768/1132/1 767/1125/1 803/1126/1\nf 774/1134/1 773/1127/1 804/1128/1\nf 811/1136/1 812/1152/1 813/1137/1\nf 815/1139/1 816/1154/1 817/1140/1\nf 775/1142/1 774/1134/1 810/1135/1\nf 800/1144/1 820/1158/1 821/1145/1\nf 776/1146/1 775/1142/1 819/1143/1\nf 806/1148/1 823/1162/1 824/1149/1\nf 777/1150/1 776/1146/1 822/1147/1\nf 812/1152/1 826/1166/1 827/1153/1\nf 816/1154/1 828/1168/1 829/1155/1\nf 778/1156/1 777/1150/1 825/1151/1\nf 820/1158/1 831/1172/1 832/1159/1\nf 779/1160/1 778/1156/1 830/1157/1\nf 823/1162/1 834/1176/1 835/1163/1\nf 780/1164/1 779/1160/1 833/1161/1\nf 826/1166/1 837/1180/1 838/1167/1\nf 828/1168/1 839/1182/1 840/1169/1\nf 781/1170/1 780/1164/1 836/1165/1\nf 831/1172/1 842/1278/1 843/1173/1\nf 782/1174/1 781/1170/1 841/1171/1\nf 834/1176/1 845/1276/1 846/1177/1\nf 783/1178/1 782/1174/1 844/1175/1\nf 837/1180/1 848/1273/1 849/1181/1\nf 839/1182/1 850/1272/1 851/1183/1\nf 784/1184/1 783/1178/1 847/1179/1\nf 853/1186/1 854/1264/1 855/1187/1\nf 857/1189/1 858/1194/1 859/1190/1\nf 861/1192/1 853/1186/1 856/1188/1\nf 858/1194/1 808/1131/1 863/1195/1\nf 864/1196/1 861/1192/1 862/1193/1\nf 808/1131/1 807/1130/1 866/1198/1\nf 867/1199/1 864/1196/1 865/1197/1\nf 807/1130/1 824/1149/1 869/1201/1\nf 870/1202/1 867/1199/1 868/1200/1\nf 824/1149/1 835/1163/1 872/1204/1\nf 873/1205/1 870/1202/1 871/1203/1\nf 835/1163/1 846/1177/1 875/1207/1\nf 876/1208/1 873/1205/1 874/1206/1\nf 878/1210/1 809/1133/1 879/1211/1\nf 846/1177/1 881/1218/1 882/1213/1\nf 883/1214/1 876/1208/1 877/1209/1\nf 885/1216/1 878/1210/1 880/1212/1\nf 881/1218/1 887/1222/1 888/1219/1\nf 765/1114/1 883/1214/1 884/1215/1\nf 797/1120/1 885/1216/1 886/1217/1\nf 887/1222/1 891/1226/1 892/1223/1\nf 766/1115/1 765/1114/1 889/1220/1\nf 798/1121/1 797/1120/1 890/1221/1\nf 891/1226/1 895/1230/1 896/1227/1\nf 803/1126/1 766/1115/1 893/1224/1\nf 804/1128/1 798/1121/1 894/1225/1\nf 895/1230/1 814/1138/1 899/1231/1\nf 809/1133/1 803/1126/1 897/1228/1\nf 810/1135/1 804/1128/1 898/1229/1\nf 814/1138/1 813/1137/1 901/1233/1\nf 818/1141/1 817/1140/1 902/1234/1\nf 819/1143/1 810/1135/1 900/1232/1\nf 905/1237/1 811/1136/1 814/1138/1\nf 771/1238/1 770/1241/1 885/1216/1\nf 764/1239/1 796/1242/1 883/1214/1\nf 906/1240/1 805/1129/1 808/1131/1\nf 770/1241/1 769/1245/1 878/1210/1\nf 796/1242/1 795/1246/1 876/1208/1\nf 907/1243/1 799/1122/1 802/1124/1\nf 769/1245/1 768/1132/1 809/1133/1\nf 795/1246/1 794/1248/1 873/1205/1\nf 909/1247/1 905/1237/1 895/1230/1\nf 794/1248/1 793/1250/1 870/1202/1\nf 910/1249/1 906/1240/1 858/1194/1\nf 793/1250/1 792/1253/1 867/1199/1\nf 911/1251/1 907/1243/1 908/1244/1\nf 792/1253/1 791/1255/1 864/1196/1\nf 913/1254/1 909/1247/1 891/1226/1\nf 791/1255/1 790/1260/1 861/1192/1\nf 914/1256/1 910/1249/1 857/1189/1\nf 916/1258/1 815/1139/1 818/1141/1\nf 790/1260/1 789/1263/1 853/1186/1\nf 918/1261/1 911/1251/1 912/1252/1\nf 789/1263/1 788/1266/1 854/1264/1\nf 920/1265/1 913/1254/1 887/1222/1\nf 788/1266/1 787/1270/1 921/1267/1\nf 922/1268/1 914/1256/1 915/1257/1\nf 787/1270/1 786/1274/1 924/1271/1\nf 850/1272/1 918/1261/1 919/1262/1\nf 848/1273/1 916/1258/1 917/1259/1\nf 786/1274/1 785/1277/1 925/1275/1\nf 845/1276/1 920/1265/1 881/1218/1\nf 785/1277/1 784/1184/1 852/1185/1\nf 842/1278/1 922/1268/1 923/1269/1\nf 927/1279/3 928/1286/3 929/1280/3\nf 931/1282/2 932/1376/2 933/1283/2\nf 934/1285/3 935/1290/3 928/1286/3\nf 936/1287/2 930/1284/2 933/1283/2\nf 938/1289/3 939/1294/3 935/1290/3\nf 940/1291/2 936/1287/2 937/1288/2\nf 938/1289/3 942/1297/3 943/1293/3\nf 940/1291/2 941/1292/2 944/1295/2\nf 942/1297/3 860/1302/3 945/1298/3\nf 856/1299/2 855/1296/2 944/1295/2\nf 859/1301/3 947/1306/3 945/1298/3\nf 856/1299/2 946/1300/2 948/1303/2\nf 859/1301/3 863/1310/3 949/1305/3\nf 865/1307/2 862/1304/2 948/1303/2\nf 866/1309/3 951/1314/3 949/1305/3\nf 865/1307/2 950/1308/2 952/1311/2\nf 869/1313/3 953/1318/3 951/1314/3\nf 871/1315/2 868/1312/2 952/1311/2\nf 869/1313/3 872/1322/3 955/1317/3\nf 871/1315/2 954/1316/2 956/1319/2\nf 875/1321/3 957/1329/3 955/1317/3\nf 877/1323/2 874/1320/2 956/1319/2\nf 880/1325/2 879/1430/2 959/1326/2\nf 875/1321/3 882/1335/3 961/1328/3\nf 877/1323/2 958/1324/2 962/1330/2\nf 880/1325/2 960/1327/2 963/1332/2\nf 888/1334/3 964/1341/3 961/1328/3\nf 889/1336/2 884/1331/2 962/1330/2\nf 886/1333/2 963/1332/2 966/1338/2\nf 888/1334/3 892/1435/3 967/1340/3\nf 893/1342/2 889/1336/2 965/1337/2\nf 894/1344/2 890/1339/2 966/1338/2\nf 915/1257/1 857/1189/1 860/1191/1\nf 854/1264/1 921/1267/1 940/1347/1\nf 923/1269/1 915/1257/1 942/1346/1\nf 921/1267/1 924/1271/1 936/1349/1\nf 843/1173/1 923/1269/1 938/1348/1\nf 924/1271/1 925/1275/1 930/1351/1\nf 832/1159/1 843/1173/1 934/1350/1\nf 925/1275/1 852/1185/1 931/1353/1\nf 821/1145/1 832/1159/1 927/1352/1\nf 852/1185/1 847/1179/1 970/1355/1\nf 801/1123/1 821/1145/1 926/1354/1\nf 847/1179/1 844/1175/1 972/1357/1\nf 802/1124/1 801/1123/1 971/1356/1\nf 844/1175/1 841/1171/1 974/1359/1\nf 908/1244/1 802/1124/1 973/1358/1\nf 841/1171/1 836/1165/1 976/1361/1\nf 912/1252/1 908/1244/1 975/1360/1\nf 836/1165/1 833/1161/1 978/1363/1\nf 919/1262/1 912/1252/1 977/1362/1\nf 917/1259/1 818/1141/1 903/1235/1\nf 833/1161/1 830/1157/1 981/1366/1\nf 851/1183/1 919/1262/1 979/1364/1\nf 849/1181/1 917/1259/1 980/1365/1\nf 830/1157/1 825/1151/1 984/1369/1\nf 840/1169/1 851/1183/1 982/1367/1\nf 838/1167/1 849/1181/1 983/1368/1\nf 825/1151/1 822/1147/1 987/1372/1\nf 829/1155/1 840/1169/1 985/1370/1\nf 827/1153/1 838/1167/1 986/1371/1\nf 822/1147/1 819/1143/1 904/1236/1\nf 817/1140/1 829/1155/1 988/1373/1\nf 813/1137/1 827/1153/1 989/1374/1\nf 931/1282/2 970/1380/2 990/1375/2\nf 926/1281/3 929/1280/3 991/1377/3\nf 972/1379/2 992/1384/2 990/1375/2\nf 971/1378/3 991/1377/3 993/1381/3\nf 974/1383/2 994/1388/2 992/1384/2\nf 975/1385/3 973/1382/3 993/1381/3\nf 974/1383/2 976/1391/2 996/1387/2\nf 975/1385/3 995/1386/3 997/1389/3\nf 976/1391/2 978/1398/2 998/1392/2\nf 979/1393/3 977/1390/3 997/1389/3\nf 980/1395/3 903/1424/3 1000/1396/3\nf 978/1398/2 981/1404/2 1002/1399/2\nf 982/1400/3 979/1393/3 999/1394/3\nf 980/1395/3 1001/1397/3 1004/1402/3\nf 981/1404/2 984/1410/2 1005/1405/2\nf 982/1400/3 1003/1401/3 1006/1406/3\nf 983/1403/3 1004/1402/3 1007/1408/3\nf 984/1410/2 987/1417/2 1008/1411/2\nf 988/1412/3 985/1407/3 1006/1406/3\nf 986/1409/3 1007/1408/3 1010/1414/3\nf 904/1416/2 1011/1423/2 1008/1411/2\nf 902/1418/3 988/1412/3 1009/1413/3\nf 901/1420/3 989/1415/3 1010/1414/3\nf 904/1416/2 900/1428/2 1014/1422/2\nf 902/1418/3 1012/1419/3 1000/1396/3\nf 901/1420/3 1013/1421/3 1015/1425/3\nf 898/1427/2 1016/1433/2 1014/1422/2\nf 897/1429/2 1017/1434/2 959/1326/2\nf 896/1431/3 899/1426/3 1015/1425/3\nf 894/1344/2 969/1345/2 1016/1433/2\nf 897/1429/2 893/1342/2 968/1343/2\nf 896/1431/3 1018/1432/3 967/1340/3\nf 1020/1436/4 1021/4250/4 1022/1437/4\nf 1001/1439/1 1020/1443/1 1019/1440/1\nf 1017/1442/1 1021/1445/1 1020/1443/1\nf 968/1444/1 1022/1446/1 1021/1445/1\nf 1004/1441/1 1019/1440/1 1022/1446/1\nf 1024/1447/3 1025/4251/3 1026/1448/3\nf 961/1450/1 1027/1454/1 1028/1451/1\nf 948/1453/1 1029/1456/1 1027/1454/1\nf 946/1455/1 1030/1457/1 1029/1456/1\nf 957/1452/1 1028/1451/1 1030/1457/1\nf 1032/1458/408 1033/4252/408 1034/1459/408\nf 939/1461/1 1032/1465/1 1031/1462/1\nf 994/1464/1 1033/1467/1 1032/1465/1\nf 996/1466/1 1034/1468/1 1033/1467/1\nf 935/1463/1 1031/1462/1 1034/1468/1\nf 1035/1469/3 1036/4253/3 1037/1470/3\nf 1003/1472/1 1024/1476/1 1023/1473/1\nf 969/1475/1 1039/1478/1 1024/1476/1\nf 966/1477/1 1040/1479/1 1039/1478/1\nf 1006/1474/1 1023/1473/1 1040/1479/1\nf 1042/1480/2 1043/4254/2 1044/1481/2\nf 1015/1483/1 1045/1487/1 1046/1484/1\nf 956/1486/1 1047/1489/1 1045/1487/1\nf 954/1488/1 1048/1490/1 1047/1489/1\nf 1018/1485/1 1046/1484/1 1048/1490/1\nf 1050/1491/7 1051/4255/7 1052/1492/7\nf 949/1494/1 1050/1498/1 1049/1495/1\nf 933/1497/1 1051/1500/1 1050/1498/1\nf 932/1499/1 1052/1501/1 1051/1500/1\nf 947/1496/1 1049/1495/1 1052/1501/1\nf 1027/1502/3 1053/4256/3 1054/1503/3\nf 993/1505/1 1055/1509/1 1056/1506/1\nf 1008/1508/1 1057/1511/1 1055/1509/1\nf 1011/1510/1 1058/1512/1 1057/1511/1\nf 995/1507/1 1056/1506/1 1058/1512/1\nf 1047/1513/2 1048/4257/2 1059/1514/2\nf 1004/1441/1 1061/1518/1 1062/1516/1\nf 968/1444/1 1063/1520/1 1061/1518/1\nf 965/1519/1 1064/1521/1 1063/1520/1\nf 1007/1517/1 1062/1516/1 1064/1521/1\nf 1066/1522/8 1067/4258/8 1068/1523/8\nf 957/1452/1 1066/1527/1 1065/1525/1\nf 946/1455/1 1067/1529/1 1066/1527/1\nf 944/1528/1 1068/1530/1 1067/1529/1\nf 955/1526/1 1065/1525/1 1068/1530/1\nf 1035/1531/217 1038/4259/217 1070/1532/217\nf 935/1463/1 1071/1536/1 1072/1534/1\nf 996/1466/1 1073/1538/1 1071/1536/1\nf 998/1537/1 1074/1539/1 1073/1538/1\nf 928/1535/1 1072/1534/1 1074/1539/1\nf 1076/1540/10 1077/4260/10 1078/1541/10\nf 1006/1474/1 1076/1545/1 1075/1543/1\nf 966/1477/1 1077/1547/1 1076/1545/1\nf 963/1546/1 1078/1548/1 1077/1547/1\nf 1009/1544/1 1075/1543/1 1078/1548/1\nf 1080/1549/11 1081/4261/11 1082/1550/11\nf 1018/1485/1 1080/1554/1 1079/1552/1\nf 954/1488/1 1081/1556/1 1080/1554/1\nf 952/1555/1 1082/1557/1 1081/1556/1\nf 967/1553/1 1079/1552/1 1082/1557/1\nf 1084/1558/3 1085/4262/3 1086/1559/3\nf 947/1496/1 1087/1563/1 1088/1561/1\nf 932/1499/1 1089/1565/1 1087/1563/1\nf 990/1564/1 1090/1566/1 1089/1565/1\nf 945/1562/1 1088/1561/1 1090/1566/1\nf 1092/1567/12 1093/4263/12 1094/1568/12\nf 995/1507/1 1092/1572/1 1091/1570/1\nf 1011/1510/1 1093/1574/1 1092/1572/1\nf 1014/1573/1 1094/1575/1 1093/1574/1\nf 997/1571/1 1091/1570/1 1094/1575/1\nf 1096/1576/13 1097/4264/13 1098/1577/13\nf 1007/1517/1 1096/1581/1 1095/1579/1\nf 965/1519/1 1097/1583/1 1096/1581/1\nf 962/1582/1 1098/1584/1 1097/1583/1\nf 1010/1580/1 1095/1579/1 1098/1584/1\nf 1028/1585/53 1054/1918/53 1099/1586/53\nf 955/1526/1 1100/1590/1 1101/1588/1\nf 944/1528/1 1102/1592/1 1100/1590/1\nf 941/1591/1 1103/1593/1 1102/1592/1\nf 953/1589/1 1101/1588/1 1103/1593/1\nf 1105/1594/15 1106/4265/15 1107/1595/15\nf 928/1535/1 1105/1599/1 1104/1597/1\nf 998/1537/1 1106/1601/1 1105/1599/1\nf 1002/1600/1 1107/1602/1 1106/1601/1\nf 929/1598/1 1104/1597/1 1107/1602/1\nf 1109/1603/2 1110/4266/2 1111/1604/2\nf 1009/1544/1 1112/1608/1 1113/1606/1\nf 963/1546/1 1108/1610/1 1112/1608/1\nf 960/1609/1 1109/1611/1 1108/1610/1\nf 1012/1607/1 1113/1606/1 1109/1611/1\nf 1056/1612/3 1055/4267/3 1114/1613/3\nf 967/1553/1 1116/1617/1 1117/1615/1\nf 952/1555/1 1118/1619/1 1116/1617/1\nf 950/1618/1 1119/1620/1 1118/1619/1\nf 964/1616/1 1117/1615/1 1119/1620/1\nf 1121/1621/17 1122/4268/796 1123/1622/17\nf 945/1562/1 1121/1626/1 1120/1624/1\nf 990/1564/1 1122/1628/1 1121/1626/1\nf 992/1627/1 1123/1629/1 1122/1628/1\nf 943/1625/1 1120/1624/1 1123/1629/1\nf 1124/1630/3 1125/4269/3 1126/1631/3\nf 997/1571/1 1128/1635/1 1129/1633/1\nf 1014/1573/1 1130/1637/1 1128/1635/1\nf 1016/1636/1 1131/1638/1 1130/1637/1\nf 999/1634/1 1129/1633/1 1131/1638/1\nf 1132/1639/2 1133/4270/2 1134/1640/2\nf 1010/1580/1 1136/1644/1 1137/1642/1\nf 962/1582/1 1138/1646/1 1136/1644/1\nf 958/1645/1 1139/1647/1 1138/1646/1\nf 1013/1643/1 1137/1642/1 1139/1647/1\nf 1141/1648/18 1142/4271/18 1143/1649/18\nf 953/1589/1 1141/1653/1 1140/1651/1\nf 941/1591/1 1142/1655/1 1141/1653/1\nf 937/1654/1 1143/1656/1 1142/1655/1\nf 951/1652/1 1140/1651/1 1143/1656/1\nf 1116/1657/3 1144/4272/3 1145/1658/3\nf 929/1598/1 1146/1662/1 1147/1660/1\nf 1002/1600/1 1148/1664/1 1146/1662/1\nf 1005/1663/1 1149/1665/1 1148/1664/1\nf 991/1661/1 1147/1660/1 1149/1665/1\nf 1046/1666/409 1150/1960/409 1059/1667/409\nf 1000/1669/1 1036/1672/1 1035/1670/1\nf 959/1671/1 1151/1673/1 1036/1672/1\nf 1017/1442/1 1069/1674/1 1151/1673/1\nf 1001/1439/1 1035/1670/1 1069/1674/1\nf 1153/1675/21 1154/4273/21 1155/1676/21\nf 1012/1607/1 1153/1679/1 1152/1678/1\nf 960/1609/1 1154/1680/1 1153/1679/1\nf 959/1671/1 1155/1681/1 1154/1680/1\nf 1000/1669/1 1152/1678/1 1155/1681/1\nf 1157/1682/22 1158/4274/22 1159/1683/22\nf 964/1616/1 1157/1686/1 1156/1685/1\nf 950/1618/1 1158/1687/1 1157/1686/1\nf 948/1453/1 1159/1688/1 1158/1687/1\nf 961/1450/1 1156/1685/1 1159/1688/1\nf 1064/1689/2 1160/4275/2 1161/1690/2\nf 943/1625/1 1125/1693/1 1124/1692/1\nf 992/1627/1 1041/1694/1 1125/1693/1\nf 994/1464/1 1042/1695/1 1041/1694/1\nf 939/1461/1 1124/1692/1 1042/1695/1\nf 1163/1696/23 1164/4276/23 1165/1697/23\nf 999/1634/1 1163/1700/1 1162/1699/1\nf 1016/1636/1 1164/1701/1 1163/1700/1\nf 969/1475/1 1165/1702/1 1164/1701/1\nf 1003/1472/1 1162/1699/1 1165/1702/1\nf 1167/1703/24 1168/4277/24 1169/1704/24\nf 1013/1643/1 1167/1707/1 1166/1706/1\nf 958/1645/1 1168/1708/1 1167/1707/1\nf 956/1486/1 1169/1709/1 1168/1708/1\nf 1015/1483/1 1166/1706/1 1169/1709/1\nf 1124/1710/26 1127/2132/26 1043/1711/26\nf 951/1652/1 1084/1714/1 1083/1713/1\nf 937/1654/1 1132/1715/1 1084/1714/1\nf 933/1497/1 1133/1716/1 1132/1715/1\nf 949/1494/1 1083/1713/1 1133/1716/1\nf 1171/1717/27 1172/4278/27 1173/1718/27\nf 991/1661/1 1171/1721/1 1170/1720/1\nf 1005/1663/1 1172/1722/1 1171/1721/1\nf 1008/1508/1 1173/1723/1 1172/1722/1\nf 993/1505/1 1170/1720/1 1173/1723/1\nf 1029/1724/75 1174/1925/75 1053/1725/75\nf 1039/1727/411 1175/1940/411 1025/1728/63\nf 1047/1730/33 1060/1952/33 1176/1731/164\nf 1057/1733/58 1177/1971/58 1114/1734/412\nf 1063/1736/413 1161/1984/413 1178/1737/413\nf 1073/1739/37 1179/1998/37 1180/1740/36\nf 1089/1742/414 1181/2015/414 1182/1743/414\nf 1102/1745/69 1183/2029/69 1184/1746/54\nf 1108/1748/41 1111/2043/41 1185/1749/41\nf 1118/1751/67 1186/2055/67 1144/1752/111\nf 1130/1754/14 1187/2072/14 1188/1755/14\nf 1138/1757/64 1189/2084/64 1190/1758/46\nf 1148/1760/76 1191/2100/76 1192/1761/76\nf 1151/1763/415 1193/2115/415 1037/1764/416\nf 1041/1766/49 1044/2127/49 1126/1767/49\nf 1132/1769/51 1135/2143/51 1085/1770/79\nf 1195/1772/308 1196/2125/308 1197/1773/308\nf 1199/1775/69 1200/2082/54 1201/1776/54\nf 1029/1778/2 1030/4279/2 1099/1779/2\nf 1069/1781/2 1070/4280/2 1193/1782/2\nf 1137/1784/36 1202/2092/36 1203/1785/37\nf 1147/1787/3 1146/4281/3 1192/1788/3\nf 1206/1790/57 1207/4282/57 1208/1791/57\nf 1139/1793/2 1203/4283/2 1189/1794/2\nf 1117/1796/224 1145/2061/224 1209/1797/224\nf 1128/1799/3 1188/4284/3 1210/1800/3\nf 1212/1802/37 1213/2026/417 1214/1803/417\nf 1118/1805/2 1119/4285/2 1209/1806/2\nf 1101/1808/411 1215/2023/411 1216/1809/411\nf 1113/1811/3 1112/4286/3 1185/1812/3\nf 1219/1814/35 1220/2013/60 1221/1815/60\nf 1102/1817/2 1103/4287/2 1216/1818/2\nf 1088/1820/65 1222/4288/65 1223/1821/65\nf 1100/1823/3 1184/4289/3 1215/1824/3\nf 1225/1826/418 1226/1996/418 1227/1827/418\nf 1089/1829/2 1090/4290/2 1223/1830/2\nf 1072/1832/64 1228/2007/64 1229/1833/64\nf 1087/1835/3 1182/4291/3 1222/1836/3\nf 1231/1838/66 1232/1972/66 1233/1839/66\nf 1074/1841/2 1229/4292/2 1179/1842/2\nf 1056/1844/419 1115/1977/419 1234/1845/67\nf 1062/1847/3 1061/4293/3 1178/1848/3\nf 1237/1850/420 1238/1937/328 1239/1851/328\nf 1058/1853/2 1234/4294/2 1177/1854/2\nf 1023/1856/421 1026/1934/421 1240/1857/421\nf 1045/1859/3 1176/4295/3 1150/1860/3\nf 1242/1862/353 1243/2098/353 1244/1863/353\nf 1039/1865/2 1040/4296/2 1240/1866/2\nf 1147/1868/422 1204/2107/422 1245/1869/423\nf 1247/1871/71 1248/2113/424 1249/1872/424\nf 1251/1874/26 1252/2068/26 1253/1875/26\nf 1149/1877/2 1245/4297/2 1191/1878/2\nf 1255/1880/72 1256/1982/425 1257/1881/425\nf 1129/1883/75 1210/2065/410 1258/1884/75\nf 1260/1886/77 1261/2140/20 1262/1887/20\nf 1062/1889/78 1235/1990/78 1160/1890/78\nf 1137/1892/3 1136/4298/3 1190/1893/3\nf 1264/1895/426 1265/2040/422 1266/1896/422\nf 1083/1898/70 1086/2137/70 1134/1899/70\nf 1072/1901/3 1071/4299/3 1180/1902/3\nf 1268/1904/79 1269/1949/79 1270/1905/79\nf 1130/1907/2 1131/4300/2 1258/1908/2\nf 1113/1910/51 1217/2037/51 1110/1911/79\nf 1272/1913/427 1273/1930/427 1274/1914/427\nf 1274/1914/429 1273/1930/797 1275/1916/82\nf 1276/1917/83 1275/1916/83 1054/1918/83\nf 1271/1915/84 1274/1914/84 1278/1920/84\nf 1274/1922/51 1276/4301/51 1279/1923/51\nf 1279/1923/430 1276/4301/431 1053/1725/431\nf 1277/1921/432 1278/1920/432 1281/1926/87\nf 1278/1920/433 1279/1929/433 1282/1928/89\nf 1279/1929/90 1174/4302/90 1099/1586/90\nf 1280/1927/91 1281/1926/798 1273/1930/91\nf 1281/1926/76 1282/1928/76 1275/1916/76\nf 1282/1928/92 1099/1586/92 1054/1918/92\nf 1236/1852/95 1283/1943/756 1284/1931/96\nf 1284/1931/437 1283/1943/438 1285/1932/438\nf 1286/1933/100 1285/1932/100 1026/1934/100\nf 1237/1850/439 1284/1931/439 1287/1936/101\nf 1284/1931/48 1286/1933/48 1288/1938/48\nf 1288/1939/440 1286/4303/102 1025/1728/102\nf 1239/1851/103 1238/1937/799 1287/1936/104\nf 1287/1936/441 1288/1938/108 1290/1942/442\nf 1288/1938/443 1175/4304/443 1240/1857/443\nf 1239/1851/110 1289/1941/110 1283/1943/445\nf 1289/1941/419 1290/1942/419 1285/1932/419\nf 1290/1942/446 1240/1857/446 1026/1934/446\nf 1268/1904/447 1267/1906/800 1291/1944/447\nf 1292/1945/117 1291/1944/117 1293/1946/117\nf 1294/1947/118 1293/1946/118 1150/1948/118\nf 1269/1949/119 1268/1904/119 1292/1945/119\nf 1292/1945/28 1294/1947/28 1296/1951/29\nf 1296/1951/242 1294/1947/449 1176/1731/449\nf 1269/1949/450 1295/1950/801 1297/1953/450\nf 1297/1953/126 1295/1950/126 1296/1951/126\nf 1296/1951/128 1060/1952/128 1059/1955/128\nf 1270/1905/129 1297/1953/129 1291/1944/129\nf 1297/1956/49 1298/1959/49 1293/1957/49\nf 1298/1959/452 1059/1667/452 1150/1960/453\nf 1231/1838/133 1230/1840/802 1299/1961/134\nf 1299/1961/136 1301/1964/136 1302/1963/138\nf 1301/1964/139 1115/1977/139 1114/1965/139\nf 1231/1966/141 1300/1969/141 1303/1967/141\nf 1300/1969/63 1302/4305/63 1304/1970/31\nf 1304/1970/143 1302/4305/143 1114/1734/143\nf 1232/1972/144 1303/4306/803 1305/1973/455\nf 1305/1973/147 1303/4306/148 1304/1974/148\nf 1306/1975/150 1304/1974/149 1177/1976/149\nf 1233/1839/457 1305/1973/457 1299/1961/457\nf 1305/1973/458 1306/1975/458 1301/1964/458\nf 1306/1975/326 1234/1845/326 1115/1977/326\nf 1254/1882/156 1307/1988/804 1308/1978/156\nf 1308/1978/158 1307/1988/159 1309/1979/159\nf 1309/1979/160 1235/4307/160 1178/1737/160\nf 1255/1880/162 1308/1978/162 1311/1981/163\nf 1308/1978/32 1310/1980/32 1312/1983/32\nf 1312/1983/280 1310/1980/280 1178/1737/280\nf 1257/1881/168 1256/1982/763 1311/1981/168\nf 1311/1981/170 1312/1983/170 1314/1986/171\nf 1314/1986/172 1312/1983/172 1161/1984/172\nf 1257/1881/174 1313/1985/174 1307/1988/174\nf 1313/1985/51 1314/1986/51 1309/1979/51\nf 1314/1989/84 1160/1890/84 1235/1990/84\nf 1224/1828/460 1315/2002/177 1316/1992/461\nf 1316/1992/463 1315/2002/464 1317/1993/464\nf 1317/1993/180 1228/4308/180 1180/1740/180\nf 1225/1826/184 1316/1992/184 1319/1995/184\nf 1316/1992/224 1318/1994/224 1320/1997/186\nf 1320/1997/187 1318/1994/187 1180/1740/187\nf 1227/1827/465 1226/1996/805 1319/1995/466\nf 1321/1999/193 1319/1995/192 1320/1997/468\nf 1322/2000/195 1320/1997/470 1179/1998/470\nf 1227/1827/471 1321/1999/471 1315/2002/471\nf 1321/2003/48 1322/2006/48 1317/2004/48\nf 1322/2006/196 1229/1833/196 1228/2007/472\nf 1219/1814/473 1218/1816/806 1323/2008/474\nf 1324/2009/199 1323/2008/199 1325/2010/199\nf 1325/2010/201 1222/2019/201 1182/1743/201\nf 1219/1814/477 1324/2009/477 1327/2012/477\nf 1324/2009/37 1326/2011/37 1328/2014/37\nf 1328/2014/260 1326/2011/260 1182/1743/260\nf 1220/2013/478 1327/2012/807 1329/2016/205\nf 1327/2012/207 1328/2014/207 1330/2017/207\nf 1330/2017/209 1328/2014/209 1181/2015/209\nf 1221/1815/143 1329/2016/143 1323/2008/143\nf 1329/2016/31 1330/2017/31 1325/2010/481\nf 1330/2017/211 1223/2018/211 1222/2019/211\nf 1212/1802/482 1211/1804/808 1331/2020/482\nf 1331/2020/483 1333/2032/483 1334/2022/483\nf 1334/2022/484 1333/2032/214 1215/2023/214\nf 1212/1802/216 1332/2021/216 1335/2025/215\nf 1332/2021/217 1334/2022/217 1336/2027/217\nf 1336/2028/219 1334/4309/219 1184/1746/219\nf 1213/2026/221 1335/2025/221 1337/2030/221\nf 1337/2030/222 1335/2025/222 1336/2027/222\nf 1336/2027/223 1183/4310/223 1216/1809/486\nf 1214/1803/187 1337/2030/187 1331/2020/188\nf 1337/2030/186 1338/2031/186 1333/2032/186\nf 1338/2031/487 1216/1809/487 1215/2023/183\nf 1264/1895/488 1263/1897/809 1339/2033/488\nf 1340/2034/229 1339/2033/229 1341/2035/229\nf 1342/2036/231 1341/2035/810 1217/2037/231\nf 1264/1895/232 1340/2034/232 1343/2039/232\nf 1340/2034/26 1342/2036/26 1344/2041/26\nf 1344/2042/233 1342/4311/233 1185/1749/233\nf 1265/2040/491 1343/2039/811 1345/2044/491\nf 1343/2039/238 1344/2041/238 1346/2045/238\nf 1344/2041/240 1111/4312/240 1110/1911/240\nf 1266/1896/242 1345/2044/242 1339/2033/449\nf 1345/2044/29 1346/2045/29 1341/2035/29\nf 1346/2045/493 1110/1911/493 1217/2037/493\nf 1205/1792/246 1347/2060/775 1348/2046/246\nf 1348/2046/494 1347/2060/812 1349/2047/248\nf 1349/2047/250 1145/2061/250 1144/2049/250\nf 1206/2050/252 1348/2053/252 1351/2051/252\nf 1348/2053/421 1350/4313/421 1352/2054/39\nf 1352/2054/496 1350/4313/496 1144/1752/496\nf 1208/1791/255 1207/4282/776 1351/2056/255\nf 1351/2056/497 1352/4314/813 1354/2058/257\nf 1354/2058/259 1352/4314/259 1186/2059/259\nf 1208/1791/260 1353/2057/260 1347/2060/260\nf 1353/2057/36 1354/2058/36 1349/2047/56\nf 1354/2058/202 1209/1797/202 1145/2061/499\nf 1250/1876/500 1355/2063/500 1356/2062/501\nf 1355/2063/502 1357/2076/502 1358/2064/266\nf 1358/2064/267 1357/2076/268 1210/2065/268\nf 1251/1874/269 1356/2062/269 1359/2067/269\nf 1356/2069/70 1358/4315/70 1360/2070/70\nf 1360/2070/272 1358/4315/504 1188/1755/504\nf 1253/1875/505 1252/2068/814 1359/2067/505\nf 1361/2073/506 1359/2067/276 1360/2074/506\nf 1360/2074/278 1187/4316/278 1258/1884/507\nf 1253/1875/280 1361/2073/280 1355/2063/280\nf 1361/2073/32 1362/2075/32 1357/2076/32\nf 1362/2075/163 1258/1884/163 1210/2065/162\nf 1199/1775/508 1198/1777/815 1363/2077/285\nf 1364/2078/510 1363/2077/288 1365/2079/288\nf 1365/2079/511 1202/4317/816 1190/1758/289\nf 1199/1775/113 1364/2078/113 1367/2081/113\nf 1364/2078/419 1366/2080/419 1368/2083/419\nf 1368/2083/512 1366/2080/513 1190/1758/513\nf 1200/2082/514 1367/2081/780 1369/2085/295\nf 1367/2081/516 1368/2083/516 1370/2086/298\nf 1370/2086/299 1368/2083/299 1189/2084/299\nf 1201/1776/219 1369/2085/219 1363/2077/219\nf 1369/2088/217 1370/2091/217 1365/2089/217\nf 1370/2091/215 1203/1785/215 1202/2092/216\nf 1242/1862/302 1241/1864/817 1371/2093/302\nf 1371/2093/517 1373/2096/517 1374/2095/303\nf 1373/2096/304 1204/4318/304 1192/1761/305\nf 1242/1862/307 1372/2094/307 1375/2097/307\nf 1372/2094/308 1374/2095/308 1376/2099/519\nf 1376/2099/520 1374/2095/368 1192/1761/368\nf 1243/2098/310 1375/2097/310 1377/2101/310\nf 1377/2101/314 1375/2097/818 1376/2099/312\nf 1378/2102/315 1376/2099/316 1191/2100/316\nf 1244/1863/233 1377/2101/233 1371/2093/233\nf 1371/2104/26 1377/4319/26 1378/2105/26\nf 1378/2105/490 1245/1869/490 1204/2107/521\nf 1246/1873/321 1379/2109/819 1380/2108/321\nf 1379/2109/324 1381/2111/324 1382/2110/324\nf 1381/2111/325 1038/2119/325 1037/1764/325\nf 1247/1871/523 1380/2108/523 1383/2112/326\nf 1380/2108/46 1382/2110/46 1384/2114/46\nf 1384/2114/329 1382/2110/524 1037/1764/524\nf 1248/2113/330 1383/2112/618 1385/2116/525\nf 1383/2112/333 1384/2114/333 1386/2117/333\nf 1386/2117/334 1384/2114/334 1193/2115/334\nf 1249/1872/335 1385/2116/335 1379/2109/335\nf 1385/2116/69 1386/2117/69 1381/2111/69\nf 1386/2117/252 1070/2118/252 1038/2119/252\nf 1195/1772/339 1194/1774/339 1387/2120/339\nf 1388/2121/527 1387/2120/527 1389/2122/527\nf 1389/2122/341 1127/4320/341 1126/1767/528\nf 1195/1772/93 1388/2121/93 1391/2124/92\nf 1388/2121/20 1390/2123/20 1392/2126/20\nf 1392/2126/530 1390/2123/530 1126/1767/530\nf 1196/2125/531 1391/2124/531 1393/2128/531\nf 1391/2124/532 1392/2126/532 1394/2129/532\nf 1394/2129/533 1392/2126/534 1044/2127/534\nf 1197/1773/535 1393/2128/535 1387/2120/536\nf 1393/2128/70 1394/2129/70 1389/2122/70\nf 1394/2131/354 1043/1711/354 1127/2132/354\nf 1259/1888/355 1395/2135/820 1396/2134/355\nf 1395/2135/538 1397/2146/538 1398/2136/539\nf 1398/2136/360 1397/2146/360 1086/2137/360\nf 1260/1886/132 1396/2134/132 1399/2139/131\nf 1396/2134/130 1398/2136/130 1400/2141/362\nf 1400/2142/129 1398/4321/129 1085/1770/129\nf 1262/1887/363 1261/2140/821 1399/2139/363\nf 1401/2144/541 1399/2139/365 1400/2141/542\nf 1400/2141/367 1135/4322/367 1134/1899/367\nf 1262/1887/520 1401/2144/368 1395/2135/520\nf 1401/2144/308 1402/2145/308 1397/2146/543\nf 1402/2145/306 1134/1899/306 1086/2137/306\nf 1271/1915/49 1277/1921/49 1280/1927/49\nf 1403/2147/1 1404/2273/1 1405/2148/1\nf 1403/2150/2 1407/4323/2 1408/4324/2\nf 1408/4324/2 1409/4325/2 1410/4326/2\nf 1410/4326/2 1411/4327/2 1414/2151/2\nf 1411/4327/2 1412/4328/2 1414/2151/2\nf 1412/4328/2 1413/4329/2 1414/2151/2\nf 1414/2151/2 1415/4330/2 1416/4331/2\nf 1416/4331/2 1417/4332/2 1418/4333/2\nf 1418/4333/2 1419/4334/2 1422/2152/2\nf 1419/4334/2 1420/4335/2 1422/2152/2\nf 1420/4335/2 1421/4336/2 1422/2152/2\nf 1422/2152/2 1423/4337/2 1424/4338/2\nf 1424/4338/2 1425/4339/2 1426/4340/2\nf 1426/4340/2 1427/4341/2 1428/4342/2\nf 1428/4342/2 1429/4343/2 1430/4344/2\nf 1430/4344/2 1431/4345/2 1432/4346/2\nf 1432/4346/2 1433/4347/2 1434/4348/2\nf 1434/4348/2 1435/4349/2 1436/4350/2\nf 1436/4350/2 1404/4351/2 1403/2150/2\nf 1403/2150/2 1408/4324/2 1414/2151/2\nf 1408/4324/2 1410/4326/2 1414/2151/2\nf 1414/2151/2 1416/4331/2 1422/2152/2\nf 1416/4331/2 1418/4333/2 1422/2152/2\nf 1422/2152/2 1424/4338/2 1426/4340/2\nf 1426/4340/2 1428/4342/2 1430/4344/2\nf 1430/4344/2 1432/4346/2 1434/4348/2\nf 1434/4348/2 1436/4350/2 1430/4344/2\nf 1436/4350/2 1403/2150/2 1430/4344/2\nf 1422/2152/2 1426/4340/2 1403/2150/2\nf 1426/4340/2 1430/4344/2 1403/2150/2\nf 1412/2153/1 1411/2272/1 1437/2154/1\nf 1439/2156/1 1440/2178/1 1441/2157/1\nf 1407/2159/1 1403/2147/1 1406/2149/1\nf 1413/2161/1 1412/2153/1 1438/2155/1\nf 1445/2163/1 1446/2182/1 1447/2164/1\nf 1408/2166/1 1407/2159/1 1443/2160/1\nf 1414/2168/1 1413/2161/1 1444/2162/1\nf 1451/2170/1 1452/2186/1 1453/2171/1\nf 1455/2173/1 1456/2188/1 1457/2174/1\nf 1415/2176/1 1414/2168/1 1450/2169/1\nf 1440/2178/1 1460/2192/1 1461/2179/1\nf 1416/2180/1 1415/2176/1 1459/2177/1\nf 1446/2182/1 1463/2196/1 1464/2183/1\nf 1417/2184/1 1416/2180/1 1462/2181/1\nf 1452/2186/1 1466/2200/1 1467/2187/1\nf 1456/2188/1 1468/2202/1 1469/2189/1\nf 1418/2190/1 1417/2184/1 1465/2185/1\nf 1460/2192/1 1471/2206/1 1472/2193/1\nf 1419/2194/1 1418/2190/1 1470/2191/1\nf 1463/2196/1 1474/2210/1 1475/2197/1\nf 1420/2198/1 1419/2194/1 1473/2195/1\nf 1466/2200/1 1477/2214/1 1478/2201/1\nf 1468/2202/1 1479/2216/1 1480/2203/1\nf 1421/2204/1 1420/2198/1 1476/2199/1\nf 1471/2206/1 1482/2312/1 1483/2207/1\nf 1422/2208/1 1421/2204/1 1481/2205/1\nf 1474/2210/1 1485/2310/1 1486/2211/1\nf 1423/2212/1 1422/2208/1 1484/2209/1\nf 1477/2214/1 1488/2307/1 1489/2215/1\nf 1479/2216/1 1490/2306/1 1491/2217/1\nf 1424/2218/1 1423/2212/1 1487/2213/1\nf 1493/2220/1 1494/2298/1 1495/2221/1\nf 1497/2223/1 1498/2228/1 1499/2224/1\nf 1501/2226/1 1493/2220/1 1496/2222/1\nf 1498/2228/1 1448/2165/1 1503/2229/1\nf 1504/2230/1 1501/2226/1 1502/2227/1\nf 1448/2165/1 1447/2164/1 1506/2232/1\nf 1507/2233/1 1504/2230/1 1505/2231/1\nf 1447/2164/1 1464/2183/1 1509/2235/1\nf 1510/2236/1 1507/2233/1 1508/2234/1\nf 1464/2183/1 1475/2197/1 1512/2238/1\nf 1513/2239/1 1510/2236/1 1511/2237/1\nf 1475/2197/1 1486/2211/1 1515/2241/1\nf 1516/2242/1 1513/2239/1 1514/2240/1\nf 1518/2244/1 1449/2167/1 1519/2245/1\nf 1486/2211/1 1521/2252/1 1522/2247/1\nf 1523/2248/1 1516/2242/1 1517/2243/1\nf 1525/2250/1 1518/2244/1 1520/2246/1\nf 1521/2252/1 1527/2256/1 1528/2253/1\nf 1405/2148/1 1523/2248/1 1524/2249/1\nf 1437/2154/1 1525/2250/1 1526/2251/1\nf 1527/2256/1 1531/2260/1 1532/2257/1\nf 1406/2149/1 1405/2148/1 1529/2254/1\nf 1438/2155/1 1437/2154/1 1530/2255/1\nf 1531/2260/1 1535/2264/1 1536/2261/1\nf 1443/2160/1 1406/2149/1 1533/2258/1\nf 1444/2162/1 1438/2155/1 1534/2259/1\nf 1535/2264/1 1454/2172/1 1539/2265/1\nf 1449/2167/1 1443/2160/1 1537/2262/1\nf 1450/2169/1 1444/2162/1 1538/2263/1\nf 1454/2172/1 1453/2171/1 1541/2267/1\nf 1458/2175/1 1457/2174/1 1542/2268/1\nf 1459/2177/1 1450/2169/1 1540/2266/1\nf 1545/2271/1 1451/2170/1 1454/2172/1\nf 1411/2272/1 1410/2275/1 1525/2250/1\nf 1404/2273/1 1436/2276/1 1523/2248/1\nf 1546/2274/1 1445/2163/1 1448/2165/1\nf 1410/2275/1 1409/2279/1 1518/2244/1\nf 1436/2276/1 1435/2280/1 1516/2242/1\nf 1547/2277/1 1439/2156/1 1442/2158/1\nf 1409/2279/1 1408/2166/1 1449/2167/1\nf 1435/2280/1 1434/2282/1 1513/2239/1\nf 1549/2281/1 1545/2271/1 1535/2264/1\nf 1434/2282/1 1433/2284/1 1510/2236/1\nf 1550/2283/1 1546/2274/1 1498/2228/1\nf 1433/2284/1 1432/2287/1 1507/2233/1\nf 1551/2285/1 1547/2277/1 1548/2278/1\nf 1432/2287/1 1431/2289/1 1504/2230/1\nf 1553/2288/1 1549/2281/1 1531/2260/1\nf 1431/2289/1 1430/2294/1 1501/2226/1\nf 1554/2290/1 1550/2283/1 1497/2223/1\nf 1556/2292/1 1455/2173/1 1458/2175/1\nf 1430/2294/1 1429/2297/1 1493/2220/1\nf 1558/2295/1 1551/2285/1 1552/2286/1\nf 1429/2297/1 1428/2300/1 1494/2298/1\nf 1560/2299/1 1553/2288/1 1527/2256/1\nf 1428/2300/1 1427/2304/1 1561/2301/1\nf 1562/2302/1 1554/2290/1 1555/2291/1\nf 1427/2304/1 1426/2308/1 1564/2305/1\nf 1490/2306/1 1558/2295/1 1559/2296/1\nf 1488/2307/1 1556/2292/1 1557/2293/1\nf 1426/2308/1 1425/2311/1 1565/2309/1\nf 1485/2310/1 1560/2299/1 1521/2252/1\nf 1425/2311/1 1424/2218/1 1492/2219/1\nf 1482/2312/1 1562/2302/1 1563/2303/1\nf 1566/2313/3 1567/2320/3 1568/2314/3\nf 1570/2316/2 1571/2410/2 1572/2317/2\nf 1574/2319/3 1575/2324/3 1568/2314/3\nf 1576/2321/2 1570/2316/2 1573/2318/2\nf 1574/2319/3 1578/2327/3 1579/2323/3\nf 1576/2321/2 1577/2322/2 1581/2325/2\nf 1578/2327/3 1582/2331/3 1583/2328/3\nf 1495/2329/2 1580/2326/2 1581/2325/2\nf 1582/2331/3 1500/2335/3 1585/2332/3\nf 1496/2333/2 1495/2329/2 1584/2330/2\nf 1500/2335/3 1499/2340/3 1587/2336/3\nf 1496/2333/2 1586/2334/2 1588/2337/2\nf 1503/2339/3 1589/2344/3 1587/2336/3\nf 1505/2341/2 1502/2338/2 1588/2337/2\nf 1506/2343/3 1591/2348/3 1589/2344/3\nf 1505/2341/2 1590/2342/2 1592/2345/2\nf 1506/2343/3 1509/2352/3 1593/2347/3\nf 1511/2349/2 1508/2346/2 1592/2345/2\nf 1512/2351/3 1595/2356/3 1593/2347/3\nf 1511/2349/2 1594/2350/2 1596/2353/2\nf 1515/2355/3 1597/2363/3 1595/2356/3\nf 1517/2357/2 1514/2354/2 1596/2353/2\nf 1520/2359/2 1519/2464/2 1599/2360/2\nf 1515/2355/3 1522/2369/3 1601/2362/3\nf 1517/2357/2 1598/2358/2 1602/2364/2\nf 1520/2359/2 1600/2361/2 1603/2366/2\nf 1528/2368/3 1604/2375/3 1601/2362/3\nf 1529/2370/2 1524/2365/2 1602/2364/2\nf 1526/2367/2 1603/2366/2 1606/2372/2\nf 1528/2368/3 1532/2469/3 1607/2374/3\nf 1533/2376/2 1529/2370/2 1605/2371/2\nf 1534/2378/2 1530/2373/2 1606/2372/2\nf 1555/2291/1 1497/2223/1 1500/2225/1\nf 1494/2298/1 1561/2301/1 1580/2381/1\nf 1563/2303/1 1555/2291/1 1582/2380/1\nf 1561/2301/1 1564/2305/1 1576/2383/1\nf 1483/2207/1 1563/2303/1 1578/2382/1\nf 1564/2305/1 1565/2309/1 1570/2385/1\nf 1472/2193/1 1483/2207/1 1574/2384/1\nf 1565/2309/1 1492/2219/1 1571/2387/1\nf 1461/2179/1 1472/2193/1 1567/2386/1\nf 1492/2219/1 1487/2213/1 1610/2389/1\nf 1441/2157/1 1461/2179/1 1566/2388/1\nf 1487/2213/1 1484/2209/1 1612/2391/1\nf 1442/2158/1 1441/2157/1 1611/2390/1\nf 1484/2209/1 1481/2205/1 1614/2393/1\nf 1548/2278/1 1442/2158/1 1613/2392/1\nf 1481/2205/1 1476/2199/1 1616/2395/1\nf 1552/2286/1 1548/2278/1 1615/2394/1\nf 1476/2199/1 1473/2195/1 1618/2397/1\nf 1559/2296/1 1552/2286/1 1617/2396/1\nf 1557/2293/1 1458/2175/1 1543/2269/1\nf 1473/2195/1 1470/2191/1 1621/2400/1\nf 1491/2217/1 1559/2296/1 1619/2398/1\nf 1489/2215/1 1557/2293/1 1620/2399/1\nf 1470/2191/1 1465/2185/1 1624/2403/1\nf 1480/2203/1 1491/2217/1 1622/2401/1\nf 1478/2201/1 1489/2215/1 1623/2402/1\nf 1465/2185/1 1462/2181/1 1627/2406/1\nf 1469/2189/1 1480/2203/1 1625/2404/1\nf 1467/2187/1 1478/2201/1 1626/2405/1\nf 1462/2181/1 1459/2177/1 1544/2270/1\nf 1457/2174/1 1469/2189/1 1628/2407/1\nf 1453/2171/1 1467/2187/1 1629/2408/1\nf 1610/2409/2 1630/2414/2 1572/2317/2\nf 1566/2313/3 1569/2315/3 1631/2411/3\nf 1612/2413/2 1632/2418/2 1630/2414/2\nf 1611/2412/3 1631/2411/3 1633/2415/3\nf 1614/2417/2 1634/2422/2 1632/2418/2\nf 1615/2419/3 1613/2416/3 1633/2415/3\nf 1616/2421/2 1636/2426/2 1634/2422/2\nf 1615/2419/3 1635/2420/3 1637/2423/3\nf 1616/2421/2 1618/2433/2 1638/2425/2\nf 1619/2427/3 1617/2424/3 1637/2423/3\nf 1620/2429/3 1543/2458/3 1640/2430/3\nf 1621/2432/2 1642/2439/2 1638/2425/2\nf 1622/2434/3 1619/2427/3 1639/2428/3\nf 1620/2429/3 1641/2431/3 1644/2436/3\nf 1621/2432/2 1624/2444/2 1645/2438/2\nf 1622/2434/3 1643/2435/3 1646/2440/3\nf 1623/2437/3 1644/2436/3 1647/2442/3\nf 1624/2444/2 1627/2451/2 1648/2445/2\nf 1628/2446/3 1625/2441/3 1646/2440/3\nf 1626/2443/3 1647/2442/3 1650/2448/3\nf 1544/2450/2 1651/2457/2 1648/2445/2\nf 1542/2452/3 1628/2446/3 1649/2447/3\nf 1541/2454/3 1629/2449/3 1650/2448/3\nf 1544/2450/2 1540/2462/2 1654/2456/2\nf 1542/2452/3 1652/2453/3 1640/2430/3\nf 1541/2454/3 1653/2455/3 1655/2459/3\nf 1538/2461/2 1656/2467/2 1654/2456/2\nf 1537/2463/2 1657/2468/2 1599/2360/2\nf 1536/2465/3 1539/2460/3 1655/2459/3\nf 1534/2378/2 1609/2379/2 1656/2467/2\nf 1537/2463/2 1533/2376/2 1608/2377/2\nf 1536/2465/3 1658/2466/3 1607/2374/3\nf 1660/2470/4 1661/4352/4 1662/2471/4\nf 1641/2473/1 1660/2477/1 1659/2474/1\nf 1657/2476/1 1661/2479/1 1660/2477/1\nf 1608/2478/1 1662/2480/1 1661/2479/1\nf 1644/2475/1 1659/2474/1 1662/2480/1\nf 1664/2481/3 1665/4353/3 1666/2482/3\nf 1601/2484/1 1667/2488/1 1668/2485/1\nf 1588/2487/1 1669/2490/1 1667/2488/1\nf 1586/2489/1 1670/2491/1 1669/2490/1\nf 1597/2486/1 1668/2485/1 1670/2491/1\nf 1672/2492/6 1673/4354/6 1674/2493/6\nf 1579/2495/1 1672/2499/1 1671/2496/1\nf 1634/2498/1 1673/2501/1 1672/2499/1\nf 1636/2500/1 1674/2502/1 1673/2501/1\nf 1575/2497/1 1671/2496/1 1674/2502/1\nf 1675/2503/3 1676/4355/3 1677/2504/3\nf 1643/2506/1 1664/2510/1 1663/2507/1\nf 1609/2509/1 1679/2512/1 1664/2510/1\nf 1606/2511/1 1680/2513/1 1679/2512/1\nf 1646/2508/1 1663/2507/1 1680/2513/1\nf 1681/2514/2 1682/4356/2 1683/2515/2\nf 1655/2517/1 1685/2521/1 1686/2518/1\nf 1596/2520/1 1687/2523/1 1685/2521/1\nf 1594/2522/1 1688/2524/1 1687/2523/1\nf 1658/2519/1 1686/2518/1 1688/2524/1\nf 1690/2525/7 1691/4357/7 1692/2526/7\nf 1589/2528/1 1690/2532/1 1689/2529/1\nf 1573/2531/1 1691/2534/1 1690/2532/1\nf 1572/2533/1 1692/2535/1 1691/2534/1\nf 1587/2530/1 1689/2529/1 1692/2535/1\nf 1667/2536/3 1693/4358/3 1694/2537/3\nf 1633/2539/1 1695/2543/1 1696/2540/1\nf 1648/2542/1 1697/2545/1 1695/2543/1\nf 1651/2544/1 1698/2546/1 1697/2545/1\nf 1635/2541/1 1696/2540/1 1698/2546/1\nf 1688/2547/2 1699/4359/2 1700/2548/2\nf 1644/2475/1 1701/2552/1 1702/2550/1\nf 1608/2478/1 1703/2554/1 1701/2552/1\nf 1605/2553/1 1704/2555/1 1703/2554/1\nf 1647/2551/1 1702/2550/1 1704/2555/1\nf 1706/2556/8 1707/4360/8 1708/2557/8\nf 1597/2486/1 1706/2561/1 1705/2559/1\nf 1586/2489/1 1707/2563/1 1706/2561/1\nf 1584/2562/1 1708/2564/1 1707/2563/1\nf 1595/2560/1 1705/2559/1 1708/2564/1\nf 1675/2565/217 1678/4361/217 1710/2566/217\nf 1575/2497/1 1711/2570/1 1712/2568/1\nf 1636/2500/1 1713/2572/1 1711/2570/1\nf 1638/2571/1 1714/2573/1 1713/2572/1\nf 1568/2569/1 1712/2568/1 1714/2573/1\nf 1716/2574/10 1717/4362/10 1718/2575/10\nf 1646/2508/1 1716/2579/1 1715/2577/1\nf 1606/2511/1 1717/2581/1 1716/2579/1\nf 1603/2580/1 1718/2582/1 1717/2581/1\nf 1649/2578/1 1715/2577/1 1718/2582/1\nf 1720/2583/11 1721/4363/11 1722/2584/11\nf 1658/2519/1 1720/2588/1 1719/2586/1\nf 1594/2522/1 1721/2590/1 1720/2588/1\nf 1592/2589/1 1722/2591/1 1721/2590/1\nf 1607/2587/1 1719/2586/1 1722/2591/1\nf 1724/2592/3 1725/4364/3 1726/2593/3\nf 1587/2530/1 1727/2597/1 1728/2595/1\nf 1572/2533/1 1729/2599/1 1727/2597/1\nf 1630/2598/1 1730/2600/1 1729/2599/1\nf 1585/2596/1 1728/2595/1 1730/2600/1\nf 1732/2601/12 1733/4365/12 1734/2602/12\nf 1635/2541/1 1732/2606/1 1731/2604/1\nf 1651/2544/1 1733/2608/1 1732/2606/1\nf 1654/2607/1 1734/2609/1 1733/2608/1\nf 1637/2605/1 1731/2604/1 1734/2609/1\nf 1736/2610/13 1737/4366/13 1738/2611/13\nf 1647/2551/1 1736/2615/1 1735/2613/1\nf 1605/2553/1 1737/2617/1 1736/2615/1\nf 1602/2616/1 1738/2618/1 1737/2617/1\nf 1650/2614/1 1735/2613/1 1738/2618/1\nf 1668/2619/543 1694/2952/543 1739/2620/543\nf 1595/2560/1 1740/2624/1 1741/2622/1\nf 1584/2562/1 1742/2626/1 1740/2624/1\nf 1581/2625/1 1743/2627/1 1742/2626/1\nf 1593/2623/1 1741/2622/1 1743/2627/1\nf 1745/2628/15 1746/4367/15 1747/2629/15\nf 1568/2569/1 1745/2633/1 1744/2631/1\nf 1638/2571/1 1746/2635/1 1745/2633/1\nf 1642/2634/1 1747/2636/1 1746/2635/1\nf 1569/2632/1 1744/2631/1 1747/2636/1\nf 1749/2637/2 1750/4368/2 1751/2638/2\nf 1649/2578/1 1752/2642/1 1753/2640/1\nf 1603/2580/1 1748/2644/1 1752/2642/1\nf 1600/2643/1 1749/2645/1 1748/2644/1\nf 1652/2641/1 1753/2640/1 1749/2645/1\nf 1696/2646/3 1695/4369/3 1754/2647/3\nf 1607/2587/1 1756/2651/1 1757/2649/1\nf 1592/2589/1 1758/2653/1 1756/2651/1\nf 1590/2652/1 1759/2654/1 1758/2653/1\nf 1604/2650/1 1757/2649/1 1759/2654/1\nf 1761/2655/17 1762/4370/17 1763/2656/17\nf 1585/2596/1 1761/2660/1 1760/2658/1\nf 1630/2598/1 1762/2662/1 1761/2660/1\nf 1632/2661/1 1763/2663/1 1762/2662/1\nf 1583/2659/1 1760/2658/1 1763/2663/1\nf 1765/2664/3 1766/4371/3 1767/2665/3\nf 1637/2605/1 1768/2669/1 1769/2667/1\nf 1654/2607/1 1770/2671/1 1768/2669/1\nf 1656/2670/1 1771/2672/1 1770/2671/1\nf 1639/2668/1 1769/2667/1 1771/2672/1\nf 1772/2673/2 1773/4372/2 1774/2674/2\nf 1650/2614/1 1776/2678/1 1777/2676/1\nf 1602/2616/1 1778/2680/1 1776/2678/1\nf 1598/2679/1 1779/2681/1 1778/2680/1\nf 1653/2677/1 1777/2676/1 1779/2681/1\nf 1781/2682/544 1782/4373/544 1783/2683/544\nf 1593/2623/1 1781/2687/1 1780/2685/1\nf 1581/2625/1 1782/2689/1 1781/2687/1\nf 1577/2688/1 1783/2690/1 1782/2689/1\nf 1591/2686/1 1780/2685/1 1783/2690/1\nf 1756/2691/3 1784/4374/3 1785/2692/3\nf 1569/2632/1 1786/2696/1 1787/2694/1\nf 1642/2634/1 1788/2698/1 1786/2696/1\nf 1645/2697/1 1789/2699/1 1788/2698/1\nf 1631/2695/1 1787/2694/1 1789/2699/1\nf 1686/2700/47 1790/2993/47 1699/2701/545\nf 1640/2703/1 1676/2706/1 1675/2704/1\nf 1599/2705/1 1791/2707/1 1676/2706/1\nf 1657/2476/1 1709/2708/1 1791/2707/1\nf 1641/2473/1 1675/2704/1 1709/2708/1\nf 1793/2709/21 1794/4375/21 1795/2710/21\nf 1652/2641/1 1793/2713/1 1792/2712/1\nf 1600/2643/1 1794/2714/1 1793/2713/1\nf 1599/2705/1 1795/2715/1 1794/2714/1\nf 1640/2703/1 1792/2712/1 1795/2715/1\nf 1797/2716/22 1798/4376/22 1799/2717/22\nf 1604/2650/1 1797/2720/1 1796/2719/1\nf 1590/2652/1 1798/2721/1 1797/2720/1\nf 1588/2487/1 1799/2722/1 1798/2721/1\nf 1601/2484/1 1796/2719/1 1799/2722/1\nf 1704/2723/2 1800/4377/2 1801/2724/2\nf 1583/2659/1 1765/2727/1 1764/2726/1\nf 1632/2661/1 1681/2728/1 1765/2727/1\nf 1634/2498/1 1682/2729/1 1681/2728/1\nf 1579/2495/1 1764/2726/1 1682/2729/1\nf 1803/2730/23 1804/4378/23 1805/2731/23\nf 1639/2668/1 1803/2734/1 1802/2733/1\nf 1656/2670/1 1804/2735/1 1803/2734/1\nf 1609/2509/1 1805/2736/1 1804/2735/1\nf 1643/2506/1 1802/2733/1 1805/2736/1\nf 1807/2737/24 1808/4379/24 1809/2738/24\nf 1653/2677/1 1807/2741/1 1806/2740/1\nf 1598/2679/1 1808/2742/1 1807/2741/1\nf 1596/2520/1 1809/2743/1 1808/2742/1\nf 1655/2517/1 1806/2740/1 1809/2743/1\nf 1764/2744/413 1767/3166/413 1683/2745/413\nf 1591/2686/1 1724/2748/1 1723/2747/1\nf 1577/2688/1 1772/2749/1 1724/2748/1\nf 1573/2531/1 1773/2750/1 1772/2749/1\nf 1589/2528/1 1723/2747/1 1773/2750/1\nf 1811/2751/27 1812/4380/27 1813/2752/27\nf 1631/2695/1 1811/2755/1 1810/2754/1\nf 1645/2697/1 1812/2756/1 1811/2755/1\nf 1648/2542/1 1813/2757/1 1812/2756/1\nf 1633/2539/1 1810/2754/1 1813/2757/1\nf 1669/2758/75 1814/2959/410 1693/2759/75\nf 1679/2761/63 1815/2973/63 1665/2762/411\nf 1687/2764/164 1700/2986/164 1816/2765/164\nf 1697/2767/546 1817/3004/546 1754/2768/546\nf 1703/2770/413 1801/3017/413 1818/2771/413\nf 1713/2773/37 1819/3031/37 1820/2774/36\nf 1729/2776/414 1821/3048/414 1822/2777/414\nf 1742/2779/69 1823/3062/69 1824/2780/54\nf 1748/2782/41 1751/3075/41 1825/2783/41\nf 1758/2785/67 1826/3088/67 1784/2786/67\nf 1770/2788/53 1827/3105/53 1828/2789/53\nf 1778/2791/46 1829/3117/46 1830/2792/64\nf 1788/2794/76 1831/3133/76 1832/2795/20\nf 1791/2797/48 1833/3149/48 1677/2798/48\nf 1681/2800/49 1684/3161/49 1766/2801/49\nf 1772/2803/51 1775/3177/51 1725/2804/51\nf 1835/2806/547 1836/3159/547 1837/2807/547\nf 1839/2809/548 1840/3115/548 1841/2810/548\nf 1669/2812/2 1670/4381/2 1739/2813/2\nf 1709/2815/2 1710/4382/2 1833/2816/2\nf 1777/2818/37 1842/3125/37 1843/2819/36\nf 1787/2821/3 1786/4383/3 1832/2822/3\nf 1846/2824/57 1847/4384/57 1848/2825/57\nf 1779/2827/2 1843/4385/2 1829/2828/2\nf 1757/2830/224 1785/3094/224 1849/2831/412\nf 1768/2833/3 1828/4386/3 1850/2834/3\nf 1852/2836/549 1853/3059/56 1854/2837/56\nf 1758/2839/2 1759/4387/2 1849/2840/2\nf 1741/2842/411 1855/3056/411 1856/2843/63\nf 1753/2845/3 1752/4388/3 1825/2846/3\nf 1859/2848/551 1860/3046/35 1861/2849/35\nf 1743/2851/2 1856/4389/2 1823/2852/2\nf 1728/2854/552 1862/4390/552 1863/2855/552\nf 1741/2857/3 1740/4391/3 1824/2858/3\nf 1865/2860/31 1866/3029/63 1867/2861/63\nf 1729/2863/2 1730/4392/2 1863/2864/2\nf 1712/2866/64 1868/3040/64 1869/2867/64\nf 1727/2869/3 1822/4393/3 1862/2870/3\nf 1871/2872/65 1872/4394/65 1873/2873/65\nf 1714/2875/2 1869/4395/2 1819/2876/2\nf 1696/2878/111 1755/3010/111 1874/2879/67\nf 1702/2881/3 1701/4396/3 1818/2882/3\nf 1877/2884/328 1878/2970/458 1879/2885/458\nf 1698/2887/2 1874/4397/2 1817/2888/2\nf 1663/2890/54 1666/2978/54 1880/2891/69\nf 1686/2893/3 1685/4398/3 1816/2894/3\nf 1882/2896/70 1883/3131/353 1884/2897/353\nf 1679/2899/2 1680/4399/2 1880/2900/2\nf 1787/2902/33 1844/3141/33 1885/2903/164\nf 1887/2905/71 1888/3146/71 1889/2906/71\nf 1891/2908/554 1892/3101/317 1893/2909/317\nf 1789/2911/2 1885/4400/2 1831/2912/2\nf 1895/2914/72 1896/3015/72 1897/2915/72\nf 1769/2917/75 1850/3098/410 1898/2918/75\nf 1900/2920/77 1901/3174/77 1902/2921/77\nf 1702/2923/555 1875/3023/555 1800/2924/555\nf 1777/2926/3 1776/4401/3 1830/2927/3\nf 1904/2929/33 1905/3072/32 1906/2930/32\nf 1723/2932/70 1726/3171/70 1774/2933/70\nf 1712/2935/3 1711/4402/3 1820/2936/3\nf 1908/2938/79 1909/2984/79 1910/2939/79\nf 1770/2941/2 1771/4403/2 1898/2942/2\nf 1753/2944/79 1857/3069/79 1750/2945/51\nf 1912/2947/556 1913/2964/556 1914/2948/556\nf 1914/2948/429 1913/2964/797 1915/2950/429\nf 1916/2951/83 1915/2950/83 1694/2952/83\nf 1911/2949/84 1914/2948/84 1918/2954/84\nf 1914/2956/51 1916/4404/51 1919/2957/51\nf 1919/2957/431 1916/4404/431 1693/2759/431\nf 1917/2955/432 1918/2954/432 1921/2960/432\nf 1918/2954/433 1919/2963/433 1922/2962/433\nf 1919/2963/90 1814/4405/90 1739/2620/90\nf 1920/2961/557 1921/2960/557 1913/2964/91\nf 1921/2960/76 1922/2962/76 1915/2950/76\nf 1922/2962/92 1739/2620/92 1694/2952/93\nf 1876/2886/558 1923/2977/558 1924/2965/559\nf 1924/2965/561 1923/2977/822 1925/2966/562\nf 1925/2966/100 1666/2978/100 1665/2968/100\nf 1877/2884/439 1924/2965/439 1927/2969/101\nf 1924/2965/48 1926/2967/48 1928/2971/48\nf 1928/2972/471 1926/4406/471 1665/2762/471\nf 1879/2885/565 1878/2970/823 1927/2969/566\nf 1927/2969/108 1928/2971/824 1930/2975/567\nf 1930/2975/109 1928/2971/825 1815/2976/109\nf 1879/2885/569 1929/2974/569 1923/2977/293\nf 1923/2977/419 1929/2974/42 1930/2975/419\nf 1930/2975/291 1880/2891/291 1666/2978/291\nf 1908/2938/447 1907/2940/800 1931/2979/447\nf 1932/2980/117 1931/2979/117 1933/2981/117\nf 1933/2981/118 1790/4407/118 1816/2765/118\nf 1908/2938/119 1932/2980/119 1935/2983/119\nf 1932/2980/29 1934/2982/741 1936/2985/570\nf 1936/2985/449 1934/2982/242 1816/2765/242\nf 1909/2984/450 1935/2983/801 1937/2987/450\nf 1935/2983/126 1936/2985/126 1938/2988/126\nf 1938/2988/128 1936/2985/128 1700/2986/128\nf 1910/2939/129 1937/2987/129 1931/2979/129\nf 1931/2990/49 1937/4408/49 1938/2991/49\nf 1938/2991/453 1699/2701/453 1790/2993/571\nf 1871/2872/133 1870/2874/760 1939/2994/134\nf 1939/2994/136 1941/2997/136 1942/2996/572\nf 1941/2997/139 1755/3010/139 1754/2998/454\nf 1871/2999/141 1940/3002/141 1943/3000/141\nf 1940/3002/63 1942/4409/63 1944/3003/63\nf 1944/3003/143 1942/4409/143 1754/2768/143\nf 1873/2873/144 1872/4394/826 1943/3005/145\nf 1945/3006/147 1943/3005/148 1944/3007/573\nf 1946/3008/150 1944/3007/149 1817/3009/149\nf 1873/2873/151 1945/3006/151 1939/2994/152\nf 1945/3006/420 1946/3008/458 1941/2997/420\nf 1946/3008/327 1874/2879/327 1755/3010/326\nf 1894/2916/155 1947/3021/827 1948/3011/156\nf 1948/3011/158 1947/3021/159 1949/3012/159\nf 1949/3012/160 1875/4410/160 1818/2771/160\nf 1895/2914/162 1948/3011/162 1951/3014/163\nf 1948/3011/32 1950/3013/32 1952/3016/32\nf 1952/3016/280 1950/3013/280 1818/2771/280\nf 1897/2915/167 1896/3015/763 1951/3014/168\nf 1951/3014/170 1952/3016/170 1954/3019/171\nf 1954/3019/172 1952/3016/172 1801/3017/172\nf 1897/2915/575 1953/3018/575 1947/3021/174\nf 1953/3018/51 1954/3019/51 1949/3012/51\nf 1954/3022/84 1800/2924/84 1875/3023/84\nf 1864/2862/576 1955/3035/828 1956/3025/576\nf 1956/3025/578 1955/3035/464 1957/3026/464\nf 1957/3026/180 1868/4411/181 1820/2774/180\nf 1865/2860/579 1956/3025/579 1959/3028/579\nf 1956/3025/35 1958/3027/35 1960/3030/186\nf 1960/3030/581 1958/3027/188 1820/2774/188\nf 1867/2861/583 1866/3029/829 1959/3028/583\nf 1959/3028/585 1960/3030/585 1962/3033/469\nf 1962/3033/470 1960/3030/470 1819/3031/470\nf 1867/2861/471 1961/3032/471 1955/3035/586\nf 1961/3036/48 1962/3039/48 1957/3037/48\nf 1962/3039/196 1869/2867/196 1868/3040/472\nf 1859/2848/474 1858/2850/806 1963/3041/474\nf 1964/3042/199 1963/3041/199 1965/3043/199\nf 1965/3043/476 1862/3052/476 1822/2777/476\nf 1859/2848/262 1964/3042/262 1967/3045/477\nf 1964/3042/37 1966/3044/37 1968/3047/37\nf 1968/3047/260 1966/3044/260 1822/2777/260\nf 1860/3046/205 1967/3045/478 1969/3049/205\nf 1967/3045/207 1968/3047/207 1970/3050/207\nf 1970/3050/587 1968/3047/209 1821/3048/209\nf 1861/2849/143 1969/3049/143 1963/3041/143\nf 1969/3049/63 1970/3050/63 1965/3043/31\nf 1970/3050/588 1863/3051/588 1862/3052/211\nf 1852/2836/482 1851/2838/830 1971/3053/482\nf 1971/3053/213 1973/3065/213 1974/3055/589\nf 1974/3055/484 1973/3065/590 1855/3056/590\nf 1852/2836/301 1972/3054/301 1975/3058/215\nf 1972/3054/217 1974/3055/217 1976/3060/217\nf 1976/3061/218 1974/4412/219 1824/2780/219\nf 1853/3059/221 1975/3058/220 1977/3063/221\nf 1977/3063/222 1975/3058/592 1976/3060/592\nf 1976/3060/223 1823/4413/223 1856/2843/593\nf 1854/2837/187 1977/3063/187 1971/3053/187\nf 1977/3063/186 1978/3064/186 1973/3065/224\nf 1978/3064/183 1856/2843/183 1855/3056/184\nf 1904/2929/594 1903/2931/831 1979/3066/488\nf 1979/3066/229 1981/3078/229 1982/3068/229\nf 1982/3068/231 1981/3078/231 1857/3069/231\nf 1904/2929/232 1980/3067/232 1983/3071/490\nf 1980/3067/26 1982/3068/26 1984/3073/26\nf 1984/3074/233 1982/4414/233 1825/2783/233\nf 1905/3072/596 1983/3071/832 1985/3076/491\nf 1983/3071/238 1984/3073/238 1986/3077/238\nf 1984/3073/240 1751/4415/240 1750/2945/240\nf 1906/2930/242 1985/3076/242 1979/3066/242\nf 1985/3076/29 1986/3077/29 1981/3078/29\nf 1986/3077/245 1750/2945/245 1857/3069/245\nf 1845/2826/246 1987/3093/775 1988/3079/246\nf 1988/3079/494 1987/3093/812 1989/3080/598\nf 1989/3080/250 1785/3094/250 1784/3082/250\nf 1846/3083/252 1988/3086/252 1991/3084/252\nf 1988/3086/39 1990/4416/40 1992/3087/421\nf 1992/3087/599 1990/4416/496 1784/2786/496\nf 1848/2825/255 1847/4384/776 1991/3089/255\nf 1991/3089/257 1992/4417/813 1994/3091/600\nf 1994/3091/259 1992/4417/259 1826/3092/259\nf 1848/2825/260 1993/3090/260 1987/3093/260\nf 1993/3090/56 1994/3091/56 1989/3080/56\nf 1994/3091/601 1849/2831/601 1785/3094/202\nf 1891/2908/602 1890/2910/833 1995/3095/602\nf 1995/3095/502 1997/3109/502 1998/3097/502\nf 1998/3097/267 1997/3109/268 1850/3098/268\nf 1891/2908/604 1996/3096/604 1999/3100/604\nf 1996/3102/605 1998/4418/605 2000/3103/606\nf 2000/3103/271 1998/4418/504 1828/2789/504\nf 1892/3101/607 1999/3100/834 2001/3106/607\nf 2001/3106/609 1999/3100/609 2000/3107/609\nf 2000/3107/278 1827/4419/278 1898/2918/278\nf 1893/2909/610 2001/3106/610 1995/3095/280\nf 2001/3106/32 2002/3108/32 1997/3109/32\nf 2002/3108/162 1898/2918/162 1850/3098/611\nf 1839/2809/508 1838/2811/815 2003/3110/285\nf 2004/3111/287 2003/3110/288 2005/3112/288\nf 2005/3112/290 1842/4420/816 1830/2792/289\nf 1839/2809/291 2004/3111/291 2007/3114/613\nf 2004/3111/419 2006/3113/419 2008/3116/42\nf 2008/3116/512 2006/3113/512 1830/2792/512\nf 1840/3115/514 2007/3114/835 2009/3118/295\nf 2007/3114/297 2008/3116/516 2010/3119/298\nf 2010/3119/299 2008/3116/299 1829/3117/299\nf 1841/2810/219 2009/3118/219 2003/3110/218\nf 2009/3121/217 2010/3124/217 2005/3122/217\nf 2010/3124/215 1843/2819/215 1842/3125/216\nf 1882/2896/302 1881/2898/302 2011/3126/302\nf 2011/3126/615 2013/3129/615 2014/3128/303\nf 2013/3129/304 1844/4421/304 1832/2795/617\nf 1882/2896/307 2012/3127/307 2015/3130/307\nf 2012/3127/52 2014/3128/52 2016/3132/52\nf 2016/3132/368 2014/3128/633 1832/2795/520\nf 1883/3131/310 2015/3130/310 2017/3134/310\nf 2017/3134/313 2015/3130/836 2016/3132/312\nf 2018/3135/315 2016/3132/316 1831/3133/315\nf 1884/2897/233 2017/3134/233 2011/3126/233\nf 2017/3137/317 2018/3140/317 2013/3138/318\nf 2018/3140/490 1885/2903/490 1844/3141/232\nf 1887/2905/321 1886/2907/837 2019/3142/321\nf 2020/3143/324 2019/3142/324 2021/3144/324\nf 2021/3144/325 1678/3153/325 1677/2798/325\nf 1888/3146/523 1887/2905/326 2020/3143/326\nf 2020/3143/46 2022/3145/46 2024/3148/46\nf 2024/3148/329 2022/3145/329 1677/2798/329\nf 1889/2906/330 1888/3146/838 2023/3147/618\nf 2025/3150/333 2023/3147/333 2024/3148/333\nf 2026/3151/334 2024/3148/619 1833/3149/619\nf 1889/2906/254 2025/3150/254 2019/3142/335\nf 2025/3150/69 2026/3151/69 2021/3144/69\nf 2026/3151/252 1710/3152/252 1678/3153/252\nf 1835/2806/337 1834/2808/839 2027/3154/620\nf 2028/3155/340 2027/3154/527 2029/3156/527\nf 2029/3156/341 1767/4422/341 1766/2801/342\nf 1835/2806/344 2028/3155/344 2031/3158/622\nf 2028/3155/20 2030/3157/20 2032/3160/76\nf 2032/3160/623 2030/3157/345 1766/2801/345\nf 1836/3159/346 2031/3158/840 2033/3162/624\nf 2031/3158/349 2032/3160/349 2034/3163/532\nf 2034/3163/533 2032/3160/350 1684/3161/350\nf 1837/2807/504 2033/3162/504 2027/3154/271\nf 2033/3162/70 2034/3163/70 2029/3156/70\nf 2034/3165/354 1683/2745/354 1767/3166/626\nf 1899/2922/355 2035/3180/820 2036/3168/355\nf 2036/3168/628 2035/3180/841 2037/3169/629\nf 2038/3170/360 2037/3169/360 1726/3171/360\nf 1900/2920/132 2036/3168/132 2039/3173/131\nf 2036/3168/78 2038/3170/78 2040/3175/130\nf 2040/3176/129 2038/4423/129 1725/2804/129\nf 1902/2921/363 1901/3174/842 2039/3173/363\nf 2039/3173/631 2040/3175/631 2042/3179/632\nf 2040/3175/367 1775/4424/367 1774/2933/367\nf 1902/2921/520 2041/3178/520 2035/3180/633\nf 2041/3178/543 2042/3179/543 2037/3169/543\nf 2042/3179/306 1774/2933/306 1726/3171/634\nf 1911/2949/49 1917/2955/49 1920/2961/49\nf 2043/3181/1 2044/4425/635 2045/3182/635\nf 2047/3184/1 2048/4426/1 2044/3185/407\nf 2049/3187/1 2050/4427/1 2051/3188/1\nf 2046/3190/407 2045/4428/407 2052/3191/1\nf 2053/3193/3 2054/4429/3 2044/3194/3\nf 2049/3196/1 2052/4430/1 2048/3197/1\nf 2047/3199/1 2043/4431/1 2056/3200/1\nf 2046/3204/637 2051/3206/637 2057/3202/637\nf 2057/3202/637 2056/3207/637 2043/3203/637\nf 2057/3202/640 2050/3205/640 2049/3209/640\nf 2047/3210/640 2055/3208/640 2057/3202/640\nf 2058/3211/1 2059/4432/1 2054/3212/1\nf 2054/3214/636 2059/4433/636 2045/3215/635\nf 2059/3217/2 2058/4434/2 2052/3218/2\nf 2052/4435/641 2058/3728/641 2060/4436/641\nf 2052/4435/641 2060/4436/641 2061/4437/843\nf 2076/4438/844 2053/4439/641 2048/3222/641\nf 2075/4440/845 2076/4438/844 2048/3222/641\nf 2048/3222/641 2052/4435/641 2068/3220/641\nf 2052/4435/641 2061/4437/843 2062/4441/641\nf 2052/4435/641 2062/4441/641 2063/4442/641\nf 2074/4443/641 2075/4440/845 2048/3222/641\nf 2073/4444/641 2074/4443/641 2048/3222/641\nf 2052/4435/641 2063/4442/641 2064/4445/641\nf 2052/4435/641 2064/4445/641 2065/4446/641\nf 2072/4447/641 2073/4444/641 2048/3222/641\nf 2071/4448/641 2072/4447/641 2048/3222/641\nf 2052/4435/641 2065/4446/641 2066/4449/641\nf 2052/4435/641 2066/4449/641 2067/4450/641\nf 2070/4451/641 2071/4448/641 2048/3222/641\nf 2069/3221/641 2070/4451/641 2048/3222/641\nf 2052/4435/641 2067/4450/641 2068/3220/641\nf 2078/3223/371 2079/3227/371 2080/3224/371\nf 2081/3226/372 2082/4452/372 2079/3227/372\nf 2083/3228/373 2084/3232/373 2082/3229/373\nf 2085/3231/374 2086/3234/374 2084/3232/374\nf 2087/3233/375 2088/3236/375 2086/3234/375\nf 2089/3235/376 2090/3238/376 2088/3236/376\nf 2091/3237/377 2092/3240/377 2090/3238/377\nf 2093/3239/378 2094/3242/378 2092/3240/378\nf 2095/3241/379 2096/3244/379 2094/3242/379\nf 2097/3243/380 2098/4453/380 2096/3244/380\nf 2099/3245/381 2100/3249/381 2098/3246/381\nf 2101/3248/382 2102/3251/382 2100/3249/382\nf 2103/3250/383 2104/3253/383 2102/3251/383\nf 2105/3252/384 2106/3255/384 2104/3253/384\nf 2107/3254/385 2108/3257/385 2106/3255/385\nf 2109/3256/386 2110/3259/386 2108/3257/386\nf 2111/3258/387 2112/3261/387 2110/3259/387\nf 2113/3260/388 2114/4454/388 2112/3261/388\nf 2115/3262/389 2116/3266/389 2114/3263/389\nf 2117/3265/390 2118/3268/390 2116/3266/390\nf 2119/3267/391 2120/3270/391 2118/3268/391\nf 2121/3269/392 2122/3273/392 2120/3270/392\nf 2122/3273/394 2121/3269/394 2125/4455/394\nf 2121/3269/394 2123/3274/394 2124/4456/393\nf 2125/4455/394 2121/3269/394 2124/4456/393\nf 2125/4455/394 2126/3271/393 2122/3273/394\nf 2123/3274/395 2128/4457/395 2130/4458/395\nf 2128/4457/395 2129/4459/788 2130/4458/395\nf 2136/4460/789 2124/4456/790 2123/3274/395\nf 2135/4461/396 2136/4460/789 2123/3274/395\nf 2123/3274/395 2130/4458/395 2131/4462/395\nf 2123/3274/395 2131/4462/395 2132/4463/395\nf 2134/3276/396 2135/4461/396 2123/3274/395\nf 2123/3274/395 2132/4463/395 2133/3275/395\nf 2129/4459/791 2128/4457/397 2144/4464/792\nf 2128/4457/397 2137/3277/397 2143/4465/397\nf 2144/4464/792 2128/4457/397 2143/4465/397\nf 2137/3277/397 2138/4466/793 2139/4467/794\nf 2137/3277/397 2139/4467/794 2140/4468/398\nf 2137/3277/397 2140/4468/398 2141/3278/398\nf 2142/3279/397 2143/4465/397 2137/3277/397\nf 2138/4466/705 2137/3277/399 2145/3282/399\nf 2145/3282/399 2146/4469/399 2151/3280/399\nf 2146/4469/399 2147/3877/399 2148/4470/705\nf 2150/4471/795 2146/4469/399 2149/4472/399\nf 2148/4470/705 2149/4472/399 2146/4469/399\nf 2153/4473/846 2138/4466/705 2145/3282/399\nf 2152/3281/400 2153/4473/846 2145/3282/399\nf 2146/4469/399 2150/4471/795 2151/3280/399\nf 2154/3283/401 2155/3287/401 2146/3284/401\nf 2156/3286/402 2157/3289/402 2155/3287/402\nf 2158/3288/403 2159/3291/403 2157/3289/403\nf 2160/3290/404 2161/3296/404 2159/3291/404\nf 2080/4474/1 2079/4475/1 2169/4476/847\nf 2079/4475/1 2082/4477/1 2168/4478/1\nf 2082/4477/1 2084/4479/1 2168/4478/1\nf 2084/4479/1 2086/4480/1 2167/4481/1\nf 2168/4478/1 2084/4479/1 2167/4481/1\nf 2086/4480/1 2088/4482/1 2166/4483/1\nf 2088/4482/1 2090/4484/1 2165/4485/1\nf 2090/4484/1 2092/4486/1 2164/4487/1\nf 2092/4486/1 2094/4488/1 2163/4489/1\nf 2166/4483/1 2088/4482/1 2165/4485/1\nf 2094/4488/1 2162/4490/1 2163/4489/1\nf 2163/4489/1 2164/4487/1 2092/4486/1\nf 2167/4481/1 2086/4480/1 2166/4483/1\nf 2079/4475/1 2168/4478/1 2169/4476/847\nf 2161/3294/1 2180/4491/1 2171/3292/642\nf 2180/4491/1 2080/4474/1 2170/4492/1\nf 2157/4493/1 2159/4494/1 2173/4495/1\nf 2159/4494/1 2161/3294/1 2172/3293/1\nf 2146/4496/1 2155/4497/1 2176/4498/1\nf 2155/4497/1 2157/4493/1 2175/4499/1\nf 2176/4498/1 2155/4497/1 2175/4499/1\nf 2179/4500/1 2147/4501/1 2177/4502/1\nf 2147/4501/1 2146/4496/1 2176/4498/1\nf 2177/4502/1 2178/4503/1 2179/4500/1\nf 2176/4498/1 2177/4502/1 2147/4501/1\nf 2180/4491/1 2170/4492/1 2171/3292/642\nf 2080/4474/1 2169/4476/847 2170/4492/1\nf 2164/4487/1 2165/4485/1 2090/4484/1\nf 2174/4504/848 2175/4499/1 2157/4493/1\nf 2173/4495/1 2174/4504/848 2157/4493/1\nf 2172/3293/1 2173/4495/1 2159/4494/1\nf 2181/3295/405 2180/3297/405 2161/3296/405\nf 2077/3225/406 2080/3224/406 2180/3297/406\nf 2078/4505/407 2077/4506/407 2191/4507/407\nf 2077/4506/407 2181/3300/407 2190/3299/407\nf 2078/4505/407 2192/4508/849 2081/4509/407\nf 2181/3300/407 2160/4510/407 2189/3298/407\nf 2160/4510/407 2158/4511/407 2188/4512/407\nf 2191/4507/407 2077/4506/407 2190/3299/407\nf 2158/4511/407 2156/4513/407 2186/4514/643\nf 2156/4513/407 2154/4515/407 2185/4516/407\nf 2184/4517/407 2154/4515/407 2145/4518/407\nf 2145/4518/407 2137/4519/407 2183/4520/850\nf 2137/4519/407 2128/4521/407 2183/4520/850\nf 2128/4521/407 2182/4522/850 2183/4520/850\nf 2154/4515/407 2184/4517/407 2185/4516/407\nf 2145/4518/407 2183/4520/850 2184/4517/407\nf 2192/4508/849 2078/4505/407 2191/4507/407\nf 2083/4523/407 2081/4509/407 2193/4524/849\nf 2193/4524/849 2081/4509/407 2192/4508/849\nf 2087/4525/407 2085/4526/407 2194/4527/407\nf 2085/4526/407 2083/4523/407 2193/4524/849\nf 2091/4528/407 2089/4529/407 2196/4530/850\nf 2089/4529/407 2087/4525/407 2195/4531/850\nf 2198/4532/851 2093/4533/407 2197/4534/407\nf 2093/4533/407 2091/4528/407 2197/4534/407\nf 2087/4525/407 2194/4527/407 2195/4531/850\nf 2085/4526/407 2193/4524/849 2194/4527/407\nf 2196/4530/850 2197/4534/407 2091/4528/407\nf 2195/4531/850 2196/4530/850 2089/4529/407\nf 2156/4513/407 2185/4516/407 2186/4514/643\nf 2158/4511/407 2186/4514/643 2187/4535/407\nf 2158/4511/407 2187/4535/407 2188/4512/407\nf 2188/4512/407 2189/3298/407 2160/4510/407\nf 2200/3301/371 2201/3305/371 2202/3302/371\nf 2203/3304/372 2204/4536/372 2201/3305/372\nf 2205/3306/373 2206/3310/373 2204/3307/373\nf 2207/3309/374 2208/3312/374 2206/3310/374\nf 2209/3311/375 2210/3314/375 2208/3312/375\nf 2211/3313/376 2212/3316/376 2210/3314/376\nf 2213/3315/377 2214/3318/377 2212/3316/377\nf 2215/3317/378 2216/3320/378 2214/3318/378\nf 2217/3319/379 2218/3322/379 2216/3320/379\nf 2219/3321/380 2220/4537/380 2218/3322/380\nf 2221/3323/381 2222/3327/381 2220/3324/381\nf 2223/3326/382 2224/3329/382 2222/3327/382\nf 2225/3328/383 2226/3331/383 2224/3329/383\nf 2227/3330/384 2228/3333/384 2226/3331/384\nf 2229/3332/385 2230/3335/385 2228/3333/385\nf 2231/3334/386 2232/3337/386 2230/3335/386\nf 2233/3336/387 2234/3339/387 2232/3337/387\nf 2235/3338/388 2236/4538/388 2234/3339/388\nf 2237/3340/389 2238/3344/389 2236/3341/389\nf 2239/3343/390 2240/3346/390 2238/3344/390\nf 2241/3345/391 2242/3348/391 2240/3346/391\nf 2243/3347/392 2244/3351/392 2242/3348/392\nf 2244/3351/394 2243/3347/394 2247/4539/394\nf 2243/3347/394 2245/3352/394 2246/4540/393\nf 2247/4539/394 2243/3347/394 2246/4540/393\nf 2247/4539/394 2248/3349/393 2244/3351/394\nf 2245/3352/395 2250/4541/395 2252/4542/395\nf 2250/4541/395 2251/4543/788 2252/4542/395\nf 2258/4544/789 2246/4540/790 2245/3352/395\nf 2257/4545/396 2258/4544/789 2245/3352/395\nf 2245/3352/395 2252/4542/395 2253/4546/395\nf 2245/3352/395 2253/4546/395 2254/4547/395\nf 2256/3354/396 2257/4545/396 2245/3352/395\nf 2245/3352/395 2254/4547/395 2255/3353/395\nf 2251/4543/791 2250/4541/397 2266/4548/792\nf 2250/4541/397 2259/3355/397 2265/4549/397\nf 2266/4548/792 2250/4541/397 2265/4549/397\nf 2259/3355/397 2260/4550/793 2261/4551/794\nf 2259/3355/397 2261/4551/794 2262/4552/398\nf 2259/3355/397 2262/4552/398 2263/3356/398\nf 2264/3357/397 2265/4549/397 2259/3355/397\nf 2260/4550/705 2259/3355/399 2267/3360/399\nf 2267/3360/399 2268/4553/399 2273/3358/399\nf 2268/4553/399 2269/3814/399 2270/4554/705\nf 2272/4555/795 2268/4553/399 2271/4556/399\nf 2270/4554/705 2271/4556/399 2268/4553/399\nf 2275/4557/399 2260/4550/705 2267/3360/399\nf 2274/3359/400 2275/4557/399 2267/3360/399\nf 2268/4553/399 2272/4555/795 2273/3358/399\nf 2276/3361/401 2277/3365/401 2268/3362/401\nf 2278/3364/402 2279/3367/402 2277/3365/402\nf 2280/3366/403 2281/3369/403 2279/3367/403\nf 2282/3368/404 2283/3374/404 2281/3369/404\nf 2202/4558/1 2201/4559/1 2291/4560/1\nf 2201/4559/1 2204/4561/1 2290/4562/1\nf 2204/4561/1 2206/4563/1 2290/4562/1\nf 2206/4563/1 2208/4564/1 2289/4565/1\nf 2290/4562/1 2206/4563/1 2289/4565/1\nf 2208/4564/1 2210/4566/1 2288/4567/1\nf 2210/4566/1 2212/4568/1 2287/4569/1\nf 2212/4568/1 2214/4570/1 2286/4571/1\nf 2214/4570/1 2216/4572/1 2285/4573/1\nf 2288/4567/1 2210/4566/1 2287/4569/1\nf 2216/4572/1 2284/4574/1 2285/4573/1\nf 2285/4573/1 2286/4571/1 2214/4570/1\nf 2289/4565/1 2208/4564/1 2288/4567/1\nf 2201/4559/1 2290/4562/1 2291/4560/1\nf 2283/3372/1 2302/4575/1 2293/3370/1\nf 2302/4575/1 2202/4558/1 2292/4576/1\nf 2279/4577/1 2281/4578/1 2295/4579/1\nf 2281/4578/1 2283/3372/1 2294/3371/1\nf 2268/4580/1 2277/4581/1 2298/4582/1\nf 2277/4581/1 2279/4577/1 2297/4583/852\nf 2298/4582/1 2277/4581/1 2297/4583/852\nf 2301/4584/1 2269/4585/1 2299/4586/1\nf 2269/4585/1 2268/4580/1 2298/4582/1\nf 2299/4586/1 2300/4587/1 2301/4584/1\nf 2298/4582/1 2299/4586/1 2269/4585/1\nf 2302/4575/1 2292/4576/1 2293/3370/1\nf 2202/4558/1 2291/4560/1 2292/4576/1\nf 2286/4571/1 2287/4569/1 2212/4568/1\nf 2296/4588/848 2297/4583/852 2279/4577/1\nf 2295/4579/1 2296/4588/848 2279/4577/1\nf 2294/3371/1 2295/4579/1 2281/4578/1\nf 2303/3373/405 2302/3375/405 2283/3374/405\nf 2199/3303/406 2202/3302/406 2302/3375/406\nf 2200/4589/407 2199/4590/407 2313/4591/849\nf 2199/4590/407 2303/3378/407 2312/3377/407\nf 2200/4589/407 2314/4592/643 2203/4593/407\nf 2303/3378/407 2282/4594/407 2311/3376/643\nf 2282/4594/407 2280/4595/407 2310/4596/407\nf 2313/4591/849 2199/4590/407 2312/3377/407\nf 2280/4595/407 2278/4597/407 2308/4598/853\nf 2278/4597/407 2276/4599/407 2307/4600/407\nf 2306/4601/851 2276/4599/407 2267/4602/407\nf 2267/4602/407 2259/4603/407 2305/4604/407\nf 2259/4603/407 2250/4605/407 2305/4604/407\nf 2250/4605/407 2304/4606/850 2305/4604/407\nf 2276/4599/407 2306/4601/851 2307/4600/407\nf 2267/4602/407 2305/4604/407 2306/4601/851\nf 2314/4592/643 2200/4589/407 2313/4591/849\nf 2205/4607/407 2203/4593/407 2315/4608/643\nf 2315/4608/643 2203/4593/407 2314/4592/643\nf 2209/4609/407 2207/4610/407 2316/4611/407\nf 2207/4610/407 2205/4607/407 2315/4608/643\nf 2213/4612/407 2211/4613/407 2318/4614/851\nf 2211/4613/407 2209/4609/407 2317/4615/851\nf 2320/4616/407 2215/4617/407 2319/4618/407\nf 2215/4617/407 2213/4612/407 2319/4618/407\nf 2209/4609/407 2316/4611/407 2317/4615/851\nf 2207/4610/407 2315/4608/643 2316/4611/407\nf 2318/4614/851 2319/4618/407 2213/4612/407\nf 2317/4615/851 2318/4614/851 2211/4613/407\nf 2278/4597/407 2307/4600/407 2308/4598/853\nf 2280/4595/407 2308/4598/853 2309/4619/407\nf 2280/4595/407 2309/4619/407 2310/4596/407\nf 2310/4596/407 2311/3376/643 2282/4594/407\nf 2322/3379/644 2323/3383/644 2324/3380/644\nf 2325/3382/645 2326/3385/645 2323/3383/645\nf 2327/3384/646 2328/3387/646 2326/3385/646\nf 2329/3386/647 2330/4620/647 2328/3387/647\nf 2329/3388/648 2331/3391/648 2332/3389/649\nf 2331/3391/650 2333/3394/650 2334/3392/651\nf 2335/3393/652 2336/3396/652 2334/3392/652\nf 2337/3395/653 2338/3398/653 2336/3396/653\nf 2339/3397/654 2340/3400/654 2338/3398/654\nf 2341/3399/655 2342/3402/655 2340/3400/655\nf 2343/3401/656 2344/4621/854 2342/3402/656\nf 2345/3403/657 2346/3407/658 2344/3404/658\nf 2347/3406/659 2348/3409/659 2346/3407/659\nf 2349/3408/660 2350/3411/660 2348/3409/660\nf 2351/3410/661 2352/3413/661 2350/3411/661\nf 2353/3412/662 2354/3415/662 2352/3413/662\nf 2355/3414/663 2356/3417/663 2354/3415/663\nf 2357/3416/664 2358/3419/664 2356/3417/664\nf 2359/3418/665 2360/3421/665 2358/3419/665\nf 2361/3420/666 2362/4622/666 2360/3421/666\nf 2363/3422/667 2364/3426/667 2362/3423/667\nf 2365/3425/668 2366/3428/668 2364/3426/668\nf 2367/3427/669 2368/3430/669 2366/3428/669\nf 2369/3429/670 2370/3432/670 2368/3430/670\nf 2371/3431/671 2372/3434/671 2370/3432/671\nf 2373/3433/672 2374/3436/672 2372/3434/672\nf 2375/3435/673 2376/4623/673 2374/3436/673\nf 2377/3437/674 2378/3441/674 2376/3438/674\nf 2379/3440/675 2380/3443/675 2378/3441/675\nf 2381/3442/676 2382/3448/676 2380/3443/676\nf 2324/4624/1 2323/3444/1 2391/3446/1\nf 2323/3444/1 2326/4625/852 2390/3445/677\nf 2390/3445/677 2326/4625/852 2389/4626/847\nf 2326/4625/852 2328/4627/1 2389/4626/847\nf 2328/4627/1 2330/4628/1 2388/4629/847\nf 2330/4628/1 2332/4630/1 2387/4631/1\nf 2332/4630/1 2334/4632/1 2386/4633/1\nf 2386/4633/1 2334/4632/1 2385/4634/852\nf 2334/4632/1 2336/4635/847 2385/4634/852\nf 2336/4635/847 2338/4636/847 2384/4637/847\nf 2385/4634/852 2336/4635/847 2384/4637/847\nf 2338/4636/847 2383/4638/847 2384/4637/847\nf 2328/4627/1 2388/4629/847 2389/4626/847\nf 2382/4639/1 2400/4640/1 2392/4641/1\nf 2400/4640/1 2324/4624/1 2391/3446/1\nf 2382/4639/1 2392/4641/1 2393/4642/1\nf 2378/4643/1 2380/4644/1 2394/4645/1\nf 2380/4644/1 2382/4639/1 2393/4642/1\nf 2394/4645/1 2380/4644/1 2393/4642/1\nf 2374/4646/1 2376/4647/1 2396/4648/1\nf 2376/4647/1 2378/4643/1 2395/4649/1\nf 2374/4646/1 2396/4648/1 2397/4650/1\nf 2370/4651/1 2372/4652/1 2398/4653/1\nf 2372/4652/1 2374/4646/1 2397/4650/1\nf 2398/4653/1 2399/4654/1 2370/4651/1\nf 2397/4650/1 2398/4653/1 2372/4652/1\nf 2332/4630/1 2386/4633/1 2387/4631/1\nf 2396/4648/1 2376/4647/1 2395/4649/1\nf 2330/4628/1 2387/4631/1 2388/4629/847\nf 2394/4645/1 2395/4649/1 2378/4643/1\nf 2392/4641/1 2400/4640/1 2391/3446/1\nf 2401/3447/678 2400/3449/678 2382/3448/678\nf 2321/3381/679 2324/3380/679 2400/3449/679\nf 2322/4655/407 2321/4656/407 2353/4657/407\nf 2321/4656/407 2401/4658/407 2355/4659/407\nf 2401/4658/407 2381/4660/407 2355/4659/407\nf 2381/4660/407 2379/4661/407 2357/4662/407\nf 2355/4659/407 2381/4660/407 2357/4662/407\nf 2379/4661/407 2377/4663/407 2361/4664/407\nf 2377/4663/407 2375/4665/407 2363/4666/407\nf 2375/4665/407 2373/4667/407 2363/4666/407\nf 2373/4667/407 2371/4668/407 2365/4669/407\nf 2363/4666/407 2373/4667/407 2365/4669/407\nf 2371/4668/407 2369/4670/407 2367/4671/407\nf 2367/4671/407 2365/4669/407 2371/4668/407\nf 2363/4666/407 2361/4664/407 2377/4663/407\nf 2361/4664/407 2359/4672/407 2379/4661/407\nf 2359/4672/407 2357/4662/407 2379/4661/407\nf 2355/4659/407 2353/4657/407 2321/4656/407\nf 2353/4657/407 2351/4673/407 2322/4655/407\nf 2351/4673/407 2349/4674/407 2322/4655/407\nf 2349/4674/407 2347/3452/407 2325/3451/407\nf 2322/4655/407 2349/4674/407 2325/3451/407\nf 2347/3452/407 2345/4675/407 2329/4676/407\nf 2345/4675/407 2343/4677/407 2331/4678/407\nf 2343/4677/407 2341/4679/407 2331/4678/407\nf 2341/4679/407 2339/4680/407 2331/4678/407\nf 2339/4680/407 2337/4681/407 2335/4682/407\nf 2335/4682/407 2333/4683/407 2339/4680/407\nf 2333/4683/407 2331/4678/407 2339/4680/407\nf 2331/4678/407 2329/4676/407 2345/4675/407\nf 2329/4676/407 2327/3450/407 2347/3452/407\nf 2420/3455/680 2402/4684/680 2403/4685/855\nf 2420/3455/680 2403/4685/855 2404/4686/856\nf 2419/4687/855 2170/4688/371 2169/3454/371\nf 2418/4689/856 2419/4687/855 2169/3454/371\nf 2420/3455/680 2404/4686/856 2405/4690/857\nf 2420/3455/680 2405/4690/857 2406/4691/857\nf 2417/4692/857 2418/4689/856 2169/3454/371\nf 2416/4693/857 2417/4692/857 2169/3454/371\nf 2420/3455/680 2406/4691/857 2407/4694/858\nf 2420/3455/680 2407/4694/858 2408/4695/859\nf 2415/4696/858 2416/4693/857 2169/3454/371\nf 2414/4697/859 2415/4696/858 2169/3454/371\nf 2420/3455/680 2408/4695/859 2409/4698/860\nf 2420/3455/680 2409/4698/860 2410/4699/861\nf 2413/4700/860 2414/4697/859 2169/3454/371\nf 2412/4701/861 2413/4700/860 2169/3454/371\nf 2420/3455/680 2410/4699/861 2411/3453/680\nf 2411/3453/680 2412/4701/861 2169/3454/371\nf 2169/3454/681 2168/3457/681 2421/3456/682\nf 2168/3457/683 2167/3459/683 2422/3458/684\nf 2167/3459/374 2166/4702/374 2423/3460/374\nf 2166/3461/375 2165/3464/375 2424/3462/375\nf 2165/3464/685 2164/3466/685 2425/3465/686\nf 2164/3466/687 2163/3468/687 2426/3467/688\nf 2163/3468/378 2162/3470/378 2427/3469/378\nf 2162/3470/379 2428/3472/379 2429/3471/379\nf 2428/3472/380 2430/3474/380 2431/3473/689\nf 2430/3474/381 2432/4703/381 2433/3475/381\nf 2432/3476/382 2434/3479/382 2435/3477/382\nf 2434/3479/383 2436/3481/383 2437/3480/383\nf 2436/3481/384 2438/4704/384 2439/3482/384\nf 2439/3482/690 2438/4704/691 2440/3483/691\nf 2440/3483/386 2442/3486/386 2443/3485/386\nf 2442/3486/387 2444/3488/387 2445/3487/387\nf 2444/3488/692 2446/3490/692 2447/3489/693\nf 2446/3490/389 2448/4705/389 2449/3491/694\nf 2448/3492/390 2450/4706/390 2451/3493/390\nf 2451/3493/391 2450/4706/391 2452/3495/391\nf 2452/3495/392 2454/3498/392 2455/3497/695\nf 2454/3498/696 2456/3500/696 2457/3499/696\nf 2456/3500/395 2178/3502/395 2458/3501/395\nf 2178/3502/397 2177/3504/397 2459/3503/397\nf 2177/3504/697 2176/3506/697 2460/3505/399\nf 2176/3506/401 2175/4707/401 2461/3507/401\nf 2461/3507/402 2175/4707/402 2174/3508/402\nf 2174/3510/403 2173/3513/403 2463/3511/403\nf 2173/3513/698 2172/3515/698 2464/3514/404\nf 2172/3515/699 2171/3517/699 2465/3516/405\nf 2171/3517/406 2170/4688/406 2419/4687/862\nf 2171/3517/406 2419/4687/862 2466/4708/863\nf 2403/4685/862 2402/4684/700 2465/3516/700\nf 2480/4709/863 2403/4685/862 2465/3516/700\nf 2171/3517/406 2466/4708/863 2467/4710/864\nf 2171/3517/406 2467/4710/864 2468/4711/864\nf 2479/4712/864 2480/4709/863 2465/3516/700\nf 2478/4713/864 2479/4712/864 2465/3516/700\nf 2171/3517/406 2468/4711/864 2469/4714/865\nf 2171/3517/406 2469/4714/865 2470/4715/866\nf 2477/4716/865 2478/4713/864 2465/3516/700\nf 2476/4717/866 2477/4716/865 2465/3516/700\nf 2171/3517/406 2470/4715/866 2471/4718/867\nf 2171/3517/406 2471/4718/867 2472/4719/868\nf 2475/4720/867 2476/4717/866 2465/3516/700\nf 2474/4721/868 2475/4720/867 2465/3516/700\nf 2171/3517/406 2472/4719/868 2473/3518/700\nf 2473/3518/700 2474/4721/868 2465/3516/700\nf 2465/3521/1 2402/4722/869 2420/4723/1\nf 2420/4723/1 2421/4724/1 2422/4725/1\nf 2422/4725/1 2423/4726/1 2424/4727/1\nf 2424/4727/1 2425/4728/1 2422/4725/1\nf 2425/4728/1 2426/4729/1 2422/4725/1\nf 2426/4729/1 2427/4730/1 2429/4731/1\nf 2429/4731/1 2431/4732/1 2426/4729/1\nf 2431/4732/1 2433/4733/1 2426/4729/1\nf 2433/4733/1 2435/4734/870 2441/3519/1\nf 2435/4734/870 2437/4735/871 2441/3519/1\nf 2437/4735/871 2439/4736/1 2441/3519/1\nf 2441/3519/1 2443/4737/872 2445/4738/1\nf 2445/4738/1 2447/4739/1 2441/3519/1\nf 2447/4739/1 2449/4740/852 2441/3519/1\nf 2449/4740/852 2451/4741/1 2453/4742/1\nf 2453/4742/1 2455/4743/1 2457/3520/1\nf 2457/3520/1 2458/4744/1 2461/4745/1\nf 2458/4744/1 2459/4746/870 2461/4745/1\nf 2459/4746/870 2460/4747/1 2461/4745/1\nf 2461/4745/1 2462/4748/1 2463/4749/870\nf 2463/4749/870 2464/4750/873 2465/3521/1\nf 2465/3521/1 2420/4723/1 2422/4725/1\nf 2449/4740/852 2453/4742/1 2441/3519/1\nf 2453/4742/1 2457/3520/1 2441/3519/1\nf 2461/4745/1 2463/4749/870 2465/3521/1\nf 2465/3521/1 2422/4725/1 2441/3519/1\nf 2422/4725/1 2426/4729/1 2441/3519/1\nf 2426/4729/1 2433/4733/1 2441/3519/1\nf 2457/3520/1 2461/4745/1 2465/3521/1\nf 2368/4751/1 2370/4651/1 2399/4654/1\nf 2368/4751/1 2399/4654/1 2481/4752/1\nf 2364/4753/847 2366/4754/847 2482/4755/847\nf 2366/4754/847 2368/4751/1 2481/4752/1\nf 2360/4756/848 2362/4757/848 2484/4758/848\nf 2362/4757/848 2364/4753/847 2483/4759/848\nf 2484/4758/848 2362/4757/848 2483/4759/848\nf 2356/4760/852 2358/4761/852 2486/4762/852\nf 2358/4761/852 2360/4756/848 2485/4763/848\nf 2352/4764/870 2354/3523/1 2489/4765/874\nf 2354/3523/1 2356/4760/852 2487/3524/642\nf 2489/4765/874 2354/3523/1 2488/3522/642\nf 2348/4766/1 2350/4767/1 2491/4768/1\nf 2350/4767/1 2352/4764/870 2490/4769/1\nf 2344/4770/1 2346/4771/1 2493/4772/1\nf 2346/4771/1 2348/4766/1 2492/4773/1\nf 2493/4772/1 2346/4771/1 2492/4773/1\nf 2340/4774/847 2342/4775/870 2495/4776/874\nf 2342/4775/870 2344/4770/1 2494/4777/870\nf 2495/4776/874 2342/4775/870 2494/4777/870\nf 2383/4638/847 2338/4636/847 2340/4774/847\nf 2495/4776/874 2383/4638/847 2340/4774/847\nf 2350/4767/1 2490/4769/1 2491/4768/1\nf 2490/4769/1 2352/4764/870 2489/4765/874\nf 2358/4761/852 2485/4763/848 2486/4762/852\nf 2366/4754/847 2481/4752/1 2482/4755/847\nf 2494/4777/870 2344/4770/1 2493/4772/1\nf 2364/4753/847 2482/4755/847 2483/4759/848\nf 2360/4756/848 2484/4758/848 2485/4763/848\nf 2491/4768/1 2492/4773/1 2348/4766/1\nf 2356/4760/852 2486/4762/852 2487/3524/642\nf 2313/3525/681 733/3580/681 732/3526/681\nf 2497/3528/386 2498/3565/386 2499/3529/386\nf 2217/4778/407 2215/4617/407 2500/4779/850\nf 2215/4617/407 2320/4616/407 2500/4779/850\nf 2221/4780/407 2219/4781/407 2501/4782/850\nf 2219/4781/407 2217/4778/407 2500/4779/850\nf 2225/4783/407 2223/4784/407 2503/4785/407\nf 2223/4784/407 2221/4780/407 2503/4785/407\nf 2229/4786/407 2227/4787/407 2505/4788/407\nf 2227/4787/407 2225/4783/407 2504/4789/407\nf 2504/4789/407 2225/4783/407 2503/4785/407\nf 2233/4790/407 2231/4791/407 2496/4792/407\nf 2231/4791/407 2229/4786/407 2497/4793/407\nf 2505/4788/407 2227/4787/407 2504/4789/407\nf 2237/4794/407 2235/3533/407 2507/3532/643\nf 2235/3533/407 2233/4790/407 2506/3531/643\nf 2497/4793/407 2229/4786/407 2505/4788/407\nf 2241/4795/407 2239/4796/407 2510/4797/407\nf 2239/4796/407 2237/4794/407 2509/4798/407\nf 2241/4795/407 2511/4799/851 2243/4800/407\nf 2245/4801/407 2243/4800/407 2512/4802/851\nf 2512/4802/851 2243/4800/407 2511/4799/851\nf 2304/4606/850 2250/4605/407 2512/4802/851\nf 2250/4605/407 2245/4801/407 2512/4802/851\nf 2511/4799/851 2241/4795/407 2510/4797/407\nf 2219/4781/407 2500/4779/850 2501/4782/850\nf 2510/4797/407 2239/4796/407 2509/4798/407\nf 2221/4780/407 2501/4782/850 2502/4803/407\nf 2221/4780/407 2502/4803/407 2503/4785/407\nf 2231/4791/407 2497/4793/407 2496/4792/407\nf 2508/4804/407 2509/4798/407 2237/4794/407\nf 2507/3532/643 2508/4804/407 2237/4794/407\nf 2233/4790/407 2496/4792/407 2506/3531/643\nf 2507/3534/692 2506/3552/692 2513/3535/692\nf 2306/3537/401 740/3571/401 739/3538/401\nf 2507/3534/701 2514/3536/701 2515/3540/701\nf 2512/3542/395 2516/3593/395 742/3543/395\nf 2509/3545/391 2517/3551/391 2518/3546/391\nf 2510/3547/392 2518/3546/702 2519/3548/702\nf 2508/3550/390 2515/4805/390 2517/3551/390\nf 2496/3530/387 2499/3529/387 2513/3535/387\nf 2308/3553/403 738/4806/403 737/3554/403\nf 2310/3556/703 736/3572/703 735/3557/703\nf 2320/3559/379 726/3592/379 2520/3560/379\nf 2305/3562/397 2304/3544/397 742/3543/397\nf 2505/3564/385 2521/3591/875 2498/3565/385\nf 2318/3566/685 2317/3579/685 729/3567/685\nf 2500/3561/704 2520/3560/704 2522/3569/704\nf 2305/3562/705 741/3563/705 740/3571/705\nf 2309/3555/404 737/3554/404 736/3572/404\nf 2249/4807/1 2301/4584/1 2523/4808/1\nf 2301/4584/1 2300/4587/1 2523/4808/1\nf 2242/4809/1 2244/4810/1 2524/4811/870\nf 2244/4810/1 2249/4807/1 2523/4808/1\nf 2238/4812/1 2240/4813/1 2526/4814/1\nf 2240/4813/1 2242/4809/1 2526/4814/1\nf 2234/4815/1 2236/4816/1 2528/4817/642\nf 2236/4816/1 2238/4812/1 2527/4818/1\nf 2527/4818/1 2238/4812/1 2526/4814/1\nf 2230/4819/1 2232/4820/1 2530/4821/847\nf 2232/4820/1 2234/4815/1 2529/4822/1\nf 2528/4817/642 2236/4816/1 2527/4818/1\nf 2226/4823/1 2228/3575/1 2532/3574/1\nf 2228/3575/1 2230/4819/1 2531/3573/1\nf 2529/4822/1 2234/4815/1 2528/4817/642\nf 2222/4824/1 2224/4825/1 2535/4826/1\nf 2224/4825/1 2226/4823/1 2534/4827/1\nf 2222/4824/1 2536/4828/1 2220/4829/1\nf 2218/4830/1 2220/4829/1 2537/4831/1\nf 2537/4831/1 2220/4829/1 2536/4828/1\nf 2284/4574/1 2216/4572/1 2537/4831/1\nf 2216/4572/1 2218/4830/1 2537/4831/1\nf 2536/4828/1 2222/4824/1 2535/4826/1\nf 2244/4810/1 2523/4808/1 2524/4811/870\nf 2535/4826/1 2224/4825/1 2534/4827/1\nf 2242/4809/1 2524/4811/870 2525/4832/1\nf 2242/4809/1 2525/4832/1 2526/4814/1\nf 2232/4820/1 2529/4822/1 2530/4821/847\nf 2533/4833/1 2534/4827/1 2226/4823/1\nf 2532/3574/1 2533/4833/1 2226/4823/1\nf 2230/4819/1 2530/4821/847 2531/3573/1\nf 2311/3558/406 735/3557/406 734/3576/406\nf 2316/3578/375 730/4834/375 729/3567/375\nf 2313/3525/371 2312/3577/371 734/3576/371\nf 2318/3566/687 728/3568/687 727/3581/687\nf 2314/3527/683 732/3526/683 731/3583/683\nf 2501/3570/381 2522/3569/381 2538/3585/381\nf 2502/3587/382 2538/4835/382 2539/3588/382\nf 2504/3590/384 2540/3594/384 2521/3591/384\nf 2319/3582/378 727/3581/378 726/3592/378\nf 2511/3549/394 2519/3548/706 2516/3593/706\nf 2503/3589/383 2539/3588/383 2540/3594/383\nf 2315/3584/374 731/3583/374 730/3595/374\nf 2308/3597/402 2307/3539/402 739/3538/402\nf 2183/3599/705 2299/3655/705 2298/3600/705\nf 2190/3602/371 2292/3635/371 2291/3603/371\nf 2193/3605/374 2289/3648/374 2288/3606/374\nf 2095/4836/407 2093/4533/407 2541/4837/407\nf 2093/4533/407 2198/4532/851 2541/4837/407\nf 2099/4838/407 2097/4839/407 2542/4840/850\nf 2097/4839/407 2095/4836/407 2541/4837/407\nf 2103/4841/407 2101/4842/407 2544/4843/407\nf 2101/4842/407 2099/4838/407 2544/4843/407\nf 2107/4844/407 2105/4845/407 2546/4846/407\nf 2105/4845/407 2103/4841/407 2545/4847/407\nf 2545/4847/407 2103/4841/407 2544/4843/407\nf 2111/4848/407 2109/4849/407 2548/4850/407\nf 2109/4849/407 2107/4844/407 2547/4851/407\nf 2546/4846/407 2105/4845/407 2545/4847/407\nf 2115/4852/407 2113/3610/407 2550/3609/407\nf 2113/3610/407 2111/4848/407 2549/3608/407\nf 2547/4851/407 2107/4844/407 2546/4846/407\nf 2119/4853/407 2117/4854/407 2553/4855/407\nf 2117/4854/407 2115/4852/407 2552/4856/407\nf 2119/4853/407 2554/4857/407 2121/4858/407\nf 2123/4859/407 2121/4858/407 2555/4860/407\nf 2555/4860/407 2121/4858/407 2554/4857/407\nf 2182/4522/850 2128/4521/407 2555/4860/407\nf 2128/4521/407 2123/4859/407 2555/4860/407\nf 2554/4857/407 2119/4853/407 2553/4855/407\nf 2097/4839/407 2541/4837/407 2542/4840/850\nf 2553/4855/407 2117/4854/407 2552/4856/407\nf 2099/4838/407 2542/4840/850 2543/4861/407\nf 2099/4838/407 2543/4861/407 2544/4843/407\nf 2109/4849/407 2547/4851/407 2548/4850/407\nf 2551/4862/407 2552/4856/407 2115/4852/407\nf 2550/3609/407 2551/4862/407 2115/4852/407\nf 2111/4848/407 2548/4850/407 2549/3608/407\nf 2197/3611/378 2285/3631/378 2284/3612/378\nf 2187/3614/404 2295/3662/404 2294/3615/404\nf 2195/3617/685 2287/3672/685 2286/3618/685\nf 2555/3620/395 2523/3643/395 2300/3621/395\nf 2547/3623/386 2531/3665/386 2530/3624/386\nf 2541/3626/379 2198/3613/379 2284/3612/379\nf 2550/3628/389 2528/3633/389 2527/3629/389\nf 2196/3619/687 2286/3618/687 2285/3631/687\nf 2549/3632/692 2529/3664/692 2528/3633/692\nf 2189/3634/406 2293/3666/406 2292/3635/406\nf 2551/3636/390 2527/4863/390 2526/3637/390\nf 2127/4864/1 2179/4500/1 2456/4865/1\nf 2179/4500/1 2178/4503/1 2456/4865/1\nf 2120/4866/1 2122/4867/1 2454/4868/1\nf 2122/4867/1 2127/4864/1 2456/4865/1\nf 2116/4869/1 2118/4870/1 2450/4871/1\nf 2118/4870/1 2120/4866/1 2450/4871/1\nf 2112/4872/1 2114/4873/1 2446/4874/1\nf 2114/4873/1 2116/4869/1 2448/4875/1\nf 2448/4875/1 2116/4869/1 2450/4871/1\nf 2108/4876/1 2110/4877/1 2442/4878/847\nf 2110/4877/1 2112/4872/1 2444/4879/1\nf 2446/4874/1 2114/4873/1 2448/4875/1\nf 2104/4880/1 2106/3641/1 2438/3640/642\nf 2106/3641/1 2108/4876/1 2440/3639/1\nf 2444/4879/1 2112/4872/1 2446/4874/1\nf 2100/4881/1 2102/4882/1 2432/4883/1\nf 2102/4882/1 2104/4880/1 2434/4884/1\nf 2100/4881/1 2430/4885/852 2098/4886/1\nf 2096/4887/1 2098/4886/1 2428/4888/852\nf 2428/4888/852 2098/4886/1 2430/4885/852\nf 2162/4490/1 2094/4488/1 2428/4888/852\nf 2094/4488/1 2096/4887/1 2428/4888/852\nf 2430/4885/852 2100/4881/1 2432/4883/1\nf 2122/4867/1 2456/4865/1 2454/4868/1\nf 2432/4883/1 2102/4882/1 2434/4884/1\nf 2120/4866/1 2454/4868/1 2452/4889/1\nf 2120/4866/1 2452/4889/1 2450/4871/1\nf 2110/4877/1 2444/4879/1 2442/4878/847\nf 2436/4890/1 2434/4884/1 2104/4880/1\nf 2438/3640/642 2436/4890/1 2104/4880/1\nf 2108/4876/1 2442/4878/847 2440/3639/1\nf 2555/3620/394 2554/3652/394 2524/3642/394\nf 2545/3644/384 2533/3670/384 2532/3645/384\nf 2193/3605/683 2192/3660/683 2290/3647/683\nf 2184/3601/401 2298/3600/401 2297/3649/401\nf 2553/3651/392 2525/3656/392 2524/3642/392\nf 2185/3650/402 2297/3649/402 2296/3653/402\nf 2183/3599/397 2182/3622/397 2300/3621/397\nf 2552/3638/391 2526/3637/391 2525/3656/391\nf 2542/3657/381 2536/3663/381 2535/3658/381\nf 2191/3604/681 2291/3603/681 2290/3647/681\nf 2186/3661/403 2296/4891/403 2295/3662/403\nf 2541/3626/704 2537/3627/380 2536/3663/707\nf 2549/3632/387 2548/3625/387 2530/3624/387\nf 2546/3646/385 2532/3645/385 2531/3665/385\nf 2188/3616/703 2294/3615/703 2293/3666/703\nf 2543/3667/382 2535/4892/382 2534/3668/382\nf 2544/3669/383 2534/3668/383 2533/3670/383\nf 2194/3671/375 2288/4893/375 2287/3672/375\nf 2556/3673/708 2557/3676/708 2478/3674/708\nf 2557/3676/709 2558/3681/709 2479/3677/709\nf 2560/3678/710 2410/3716/710 2409/3679/710\nf 2558/3681/711 2561/3691/711 2480/3682/711\nf 2070/3683/712 2069/3689/712 2418/3684/712\nf 2563/3686/713 2408/3702/713 2407/3687/713\nf 2069/3689/714 2068/3731/714 2419/3690/714\nf 2561/3691/715 2564/3704/715 2403/3692/715\nf 2072/3693/716 2071/3720/716 2416/3694/716\nf 2066/3696/717 2467/3722/717 2466/3697/717\nf 2566/3699/718 2406/3732/718 2405/3700/718\nf 2559/3680/719 2409/3679/719 2408/3702/719\nf 2567/3703/720 2404/3725/720 2403/3692/720\nf 2060/3705/721 2568/3723/721 2474/3706/721\nf 2569/3708/722 2556/3673/722 2477/3675/722\nf 2073/3710/723 2072/3693/723 2415/3695/723\nf 2075/3712/724 2074/3739/724 2413/3713/724\nf 2076/3715/725 2411/4894/725 2410/3716/725\nf 2062/3717/726 2471/3734/726 2470/3718/726\nf 2071/3720/727 2070/3683/727 2417/3685/727\nf 2065/3721/728 2468/3738/728 2467/3722/728\nf 2568/3723/729 2570/3741/729 2475/3724/729\nf 2565/3701/730 2405/3700/730 2404/3725/730\nf 2053/4439/641 2076/4438/844 2560/4895/641\nf 2053/4439/641 2560/4895/641 2559/4896/641\nf 2568/4897/641 2060/4436/641 2058/3728/641\nf 2570/4898/641 2568/4897/641 2058/3728/641\nf 2053/4439/641 2559/4896/641 2563/4899/641\nf 2053/4439/641 2563/4899/641 2562/4900/641\nf 2569/4901/641 2570/4898/641 2058/3728/641\nf 2556/4902/641 2569/4901/641 2058/3728/641\nf 2053/4439/641 2562/4900/641 2566/4903/641\nf 2053/4439/641 2566/4903/641 2565/4904/641\nf 2557/4905/641 2556/4902/641 2058/3728/641\nf 2558/4906/641 2557/4905/641 2058/3728/641\nf 2058/3728/641 2053/4439/641 2564/3726/641\nf 2053/4439/641 2565/4904/641 2567/4907/641\nf 2053/4439/641 2567/4907/641 2564/3726/641\nf 2561/3727/641 2558/4906/641 2058/3728/641\nf 2076/3729/731 2075/3712/731 2412/3714/731\nf 2067/3698/732 2466/3697/732 2419/3690/732\nf 2562/3688/733 2407/3687/733 2406/3732/733\nf 2061/3733/734 2472/3736/734 2471/3734/734\nf 2060/3735/735 2473/4908/735 2472/3736/735\nf 2064/3737/736 2469/3740/736 2468/3738/736\nf 2074/3739/737 2073/3710/737 2414/3711/737\nf 2063/3719/738 2470/3718/738 2469/3740/738\nf 2570/3741/739 2569/3708/739 2476/3709/739\nf 1553/3744/217 2571/4909/876 2248/3742/217\nf 2248/3742/217 2247/4910/414 1549/3743/217\nf 2572/3745/8 2573/3748/8 1485/3746/8\nf 2573/3748/49 2574/3803/49 1560/3749/49\nf 2274/3750/48 2273/4911/48 1439/3751/48\nf 2257/3753/79 1451/3799/79 1545/3754/79\nf 1549/3757/11 2247/4912/877 2246/3756/11\nf 2246/3756/11 2258/3755/878 1545/3754/11\nf 2255/3758/40 1466/3776/40 1452/3759/40\nf 2266/3761/21 2265/3773/21 1456/3762/21\nf 2576/3764/186 1546/3772/186 1550/3765/186\nf 1558/3769/26 2261/4913/413 2260/3767/25\nf 2260/3767/25 2275/3789/26 1551/3768/26\nf 1546/3772/7 2576/3764/879 2577/3770/740\nf 2577/3770/740 2578/3810/749 1445/3771/7\nf 2265/3773/282 2264/3805/282 1468/3774/282\nf 2254/3775/13 1477/3783/13 1466/3776/13\nf 2580/3777/52 1554/3804/543 1562/3778/543\nf 2249/3350/395 2248/3349/790 2571/4914/880\nf 2249/3350/395 2571/4914/880 2574/4915/396\nf 2577/4916/788 2301/4917/395 2578/4918/395\nf 2301/4917/395 2249/3350/395 2578/4918/395\nf 2249/3350/395 2574/4915/396 2573/4919/396\nf 2249/3350/395 2573/4919/396 2572/4920/395\nf 2582/3781/395 2578/4918/395 2249/3350/395\nf 2249/3350/395 2572/4920/395 2581/3780/395\nf 2253/3782/29 1488/3809/741 1477/3783/741\nf 2581/3784/37 2572/3745/37 1474/3747/37\nf 2263/3786/46 2262/3811/46 1490/3787/46\nf 2275/3789/12 2274/3750/12 1547/3752/12\nf 2582/3790/743 2581/3784/743 1463/3785/18\nf 2579/3779/6 1562/3778/744 1482/3792/744\nf 1460/3796/15 2271/3806/15 2270/3794/15\nf 2270/3794/15 2584/3815/15 1471/3795/15\nf 1556/3798/419 2252/3808/111 2251/3797/419\nf 2251/3797/419 2266/3761/42 1455/3763/419\nf 2256/3760/745 1452/3759/24 1451/3799/24\nf 2272/3800/27 1440/3807/27 1439/3801/27\nf 2574/3803/22 2571/4909/22 1553/3744/22\nf 2575/3766/16 1550/3765/16 1554/3804/16\nf 2264/3805/746 2263/3786/746 1479/3788/747\nf 2271/3806/353 1460/3796/353 1440/3807/353\nf 2252/3808/4 1556/3798/4 1488/3809/4\nf 2578/3810/76 2582/3790/76 1446/3791/76\nf 2262/3811/23 2261/4913/23 1558/3769/23\nf 2301/4917/397 2577/4916/791 2576/4921/792\nf 2301/4917/397 2576/4921/792 2575/4922/397\nf 2270/4554/793 2269/3814/397 2584/4923/794\nf 2269/3814/397 2301/4917/397 2575/4922/397\nf 2584/4923/794 2269/3814/397 2583/4924/398\nf 2583/4924/398 2269/3814/397 2579/3813/398\nf 2575/4922/397 2580/3812/397 2269/3814/397\nf 2583/3793/411 1482/3792/63 1471/3795/63\nf 913/3818/217 2585/4925/876 2126/3816/217\nf 2126/3816/217 2125/4926/414 909/3817/217\nf 2586/3819/8 2587/3822/8 845/3820/8\nf 2587/3822/50 2588/3878/50 920/3823/49\nf 2152/3824/48 2151/4927/48 799/3825/48\nf 2127/3272/395 2126/3271/790 2585/4928/789\nf 2127/3272/395 2585/4928/789 2588/4929/396\nf 2592/4930/788 2179/4931/395 2591/4932/395\nf 2179/4931/395 2127/3272/395 2591/4932/395\nf 2127/3272/395 2588/4929/396 2587/4933/396\nf 2127/3272/395 2587/4933/396 2586/4934/395\nf 2590/3828/395 2591/4932/395 2127/3272/395\nf 2127/3272/395 2586/4934/395 2589/3827/395\nf 2135/3829/79 811/3872/79 905/3830/79\nf 909/3817/11 2125/4935/877 2124/3832/11\nf 2124/3832/11 2136/3831/878 905/3830/11\nf 2133/3833/40 826/3851/40 812/3834/40\nf 2144/3836/21 2143/3848/21 816/3837/21\nf 2594/3839/186 906/3847/35 910/3840/35\nf 918/3844/26 2139/4936/26 2138/3842/748\nf 2138/3842/748 2153/3862/25 911/3843/26\nf 906/3847/749 2594/3839/881 2592/3845/740\nf 2592/3845/740 2591/3885/749 805/3846/749\nf 2143/3848/282 2142/3880/282 828/3849/282\nf 2132/3850/13 837/3856/13 826/3851/13\nf 2596/3852/52 914/3879/543 922/3853/543\nf 2131/3855/29 848/3884/29 837/3856/29\nf 2589/3857/37 2586/3819/37 834/3821/37\nf 2141/3859/46 2140/3886/46 850/3860/742\nf 2153/3862/12 2152/3824/12 907/3826/12\nf 2590/3863/18 2589/3857/18 823/3858/18\nf 2595/3854/750 922/3853/6 842/3865/6\nf 820/3869/751 2149/3881/751 2148/3867/15\nf 2148/3867/15 2598/3887/15 831/3868/751\nf 916/3871/67 2130/3883/67 2129/3870/42\nf 2129/3870/42 2144/3836/71 815/3838/419\nf 2134/3835/745 812/3834/24 811/3872/24\nf 2150/3873/27 800/3882/27 799/3825/27\nf 2179/4931/397 2592/4930/791 2594/4937/792\nf 2179/4931/397 2594/4937/792 2593/4938/397\nf 2148/4470/793 2147/3877/397 2598/4939/794\nf 2147/3877/397 2179/4931/397 2593/4938/397\nf 2598/4939/794 2147/3877/397 2597/4940/398\nf 2597/4940/398 2147/3877/397 2595/3876/398\nf 2593/4938/397 2596/3875/397 2147/3877/397\nf 2588/3878/22 2585/4925/22 913/3818/22\nf 2593/3841/16 910/3840/16 914/3879/16\nf 2142/3880/10 2141/3859/10 839/3861/10\nf 2149/3881/353 820/3869/353 800/3882/353\nf 2130/3883/4 916/3871/4 848/3884/4\nf 2591/3885/76 2590/3863/76 806/3864/76\nf 2140/3886/23 2139/4936/23 918/3844/23\nf 2597/3866/411 842/3865/63 831/3868/63\nf 750/3888/403 2395/4941/403 2394/3889/403\nf 2600/3891/701 2486/3931/701 2485/3892/701\nf 2602/3894/704 2495/3960/380 2494/3895/380\nf 659/4942/407 657/4218/407 2602/4943/407\nf 657/4218/407 762/4217/407 2602/4943/407\nf 663/4944/407 661/4945/407 2601/4946/407\nf 661/4945/407 659/4942/407 2602/4943/407\nf 667/4947/407 665/4948/407 2604/4949/407\nf 665/4948/407 663/4944/407 2604/4949/407\nf 671/4950/407 669/4951/407 2606/4952/407\nf 669/4951/407 667/4947/407 2605/4953/407\nf 2605/4953/407 667/4947/407 2604/4949/407\nf 675/4954/407 673/4955/407 2608/4956/407\nf 673/4955/407 671/4950/407 2607/4957/407\nf 2606/4952/407 669/4951/407 2605/4953/407\nf 679/4958/407 677/3899/407 2600/3898/407\nf 677/3899/407 675/4954/407 2609/3897/407\nf 2607/4957/407 671/4950/407 2606/4952/407\nf 683/4959/407 681/4960/407 2611/4961/407\nf 681/4960/407 679/4958/407 2610/4962/407\nf 683/4959/407 2612/4963/407 685/4964/407\nf 687/4965/407 685/4964/407 2613/4966/407\nf 2613/4966/407 685/4964/407 2612/4963/407\nf 746/4207/407 692/4206/407 2613/4966/407\nf 692/4206/407 687/4965/407 2613/4966/407\nf 2612/4963/407 683/4959/407 2611/4961/407\nf 661/4945/407 2602/4943/407 2601/4946/407\nf 2611/4961/407 681/4960/407 2610/4962/407\nf 663/4944/407 2601/4946/407 2603/4967/407\nf 663/4944/407 2603/4967/407 2604/4949/407\nf 673/4955/407 2607/4957/407 2608/4956/407\nf 2599/4968/407 2610/4962/407 679/4958/407\nf 2600/3898/407 2599/4968/407 679/4958/407\nf 675/4954/407 2608/4956/407 2609/3897/407\nf 2611/3900/702 2483/3907/702 2482/3901/702\nf 2607/3903/752 2489/3909/752 2488/3904/752\nf 2610/3906/391 2484/3958/391 2483/3907/391\nf 2607/3903/385 2606/3947/385 2490/3908/385\nf 2613/3910/395 2481/3916/395 2399/3911/395\nf 2603/3913/382 2493/4969/382 2492/3914/382\nf 2613/3910/706 2612/3902/706 2482/3901/706\nf 2601/3896/381 2494/3895/381 2493/3917/381\nf 760/3919/687 2385/3946/687 2384/3920/687\nf 756/3922/683 2389/3951/683 2388/3923/683\nf 753/3925/406 2392/3948/406 2391/3926/406\nf 746/3912/397 2399/3911/397 2398/3928/397\nf 2609/3930/692 2487/3959/692 2486/3931/692\nf 747/3929/705 2398/3928/705 2397/3932/705\nf 761/3921/378 2384/3920/378 2383/3934/378\nf 2604/3915/383 2492/3914/383 2491/3936/383\nf 757/3924/374 2388/3923/374 2387/3938/374\nf 691/4970/1 743/4185/1 2516/4971/1\nf 743/4185/1 742/4188/1 2516/4971/1\nf 684/4972/1 686/4973/1 2519/4974/1\nf 686/4973/1 691/4970/1 2516/4971/1\nf 680/4975/1 682/4976/1 2517/4977/1\nf 682/4976/1 684/4972/1 2517/4977/1\nf 676/4978/1 678/4979/1 2514/4980/1\nf 678/4979/1 680/4975/1 2515/4981/1\nf 2515/4981/1 680/4975/1 2517/4977/1\nf 672/4982/1 674/4983/1 2499/4984/1\nf 674/4983/1 676/4978/1 2513/4985/1\nf 2514/4980/1 678/4979/1 2515/4981/1\nf 668/4986/1 670/3942/1 2521/3941/1\nf 670/3942/1 672/4982/1 2498/3940/1\nf 2513/4985/1 676/4978/1 2514/4980/1\nf 664/4987/1 666/4988/1 2538/4989/1\nf 666/4988/1 668/4986/1 2539/4990/1\nf 664/4987/1 2522/4991/1 662/4992/1\nf 660/4993/1 662/4992/1 2520/4994/1\nf 2520/4994/1 662/4992/1 2522/4991/1\nf 726/4175/1 658/4173/1 2520/4994/1\nf 658/4173/1 660/4993/1 2520/4994/1\nf 2522/4991/1 664/4987/1 2538/4989/1\nf 686/4973/1 2516/4971/1 2519/4974/1\nf 2538/4989/1 666/4988/1 2539/4990/1\nf 684/4972/1 2519/4974/1 2518/4995/1\nf 684/4972/1 2518/4995/1 2517/4977/1\nf 674/4983/1 2513/4985/1 2499/4984/1\nf 2540/4996/1 2539/4990/1 668/4986/1\nf 2521/3941/1 2540/4996/1 668/4986/1\nf 672/4982/1 2499/4984/1 2498/3940/1\nf 751/3890/404 2394/3889/404 2393/3943/404\nf 760/3919/685 759/3953/685 2386/3945/685\nf 2605/3937/384 2491/3936/384 2490/3908/384\nf 752/3944/703 2393/3943/703 2392/3948/703\nf 755/3949/371 754/3927/371 2391/3926/371\nf 755/3949/681 2390/3950/681 2389/3951/681\nf 758/3952/375 2387/4997/375 2386/3945/375\nf 749/3954/402 2396/3961/402 2395/3955/402\nf 2599/3957/390 2485/4998/390 2484/3958/390\nf 2608/3905/753 2488/3904/753 2487/3959/753\nf 2602/3894/379 762/3935/379 2383/3934/379\nf 748/3933/401 2397/3932/401 2396/3961/401\nf 151/3964/217 2614/4999/876 690/3962/217\nf 690/3962/217 689/5000/414 147/3963/217\nf 2615/3965/8 2616/3968/8 83/3966/8\nf 2616/3968/49 2617/4026/49 158/3969/49\nf 716/3970/48 715/5001/48 37/3971/48\nf 699/3973/79 49/4022/79 143/3974/79\nf 147/3977/11 689/5002/877 688/3976/11\nf 688/3976/11 700/3975/878 143/3974/11\nf 697/3978/40 64/3999/40 50/3979/40\nf 743/5003/397 2618/5004/398 2619/5005/398\nf 743/5003/397 2619/5005/398 2620/5006/397\nf 712/4155/793 711/3983/397 2624/5007/794\nf 711/3983/397 743/5003/397 2620/5006/397\nf 2624/5007/794 711/3983/397 2623/5008/398\nf 2623/5008/398 711/3983/397 2622/3982/398\nf 2620/5006/397 2621/3981/397 711/3983/397\nf 708/3984/754 707/3996/754 54/3985/754\nf 2619/3987/35 144/3995/35 148/3988/35\nf 156/3992/26 703/5009/26 702/3990/748\nf 702/3990/748 717/4012/25 149/3991/26\nf 144/3995/749 2619/3987/882 2618/3993/749\nf 2618/3993/749 2625/4033/7 43/3994/749\nf 707/3996/164 706/4028/164 66/3997/32\nf 696/3998/13 75/4006/13 64/3999/13\nf 691/1084/395 690/1083/790 2614/5010/789\nf 691/1084/395 2614/5010/789 2617/5011/396\nf 2618/5004/788 743/5003/395 2625/5012/395\nf 743/5003/395 691/1084/395 2625/5012/395\nf 691/1084/395 2617/5011/396 2616/5013/396\nf 691/1084/395 2616/5013/396 2615/5014/395\nf 2627/4001/395 2625/5012/395 691/1084/395\nf 691/1084/395 2615/5014/395 2626/4000/395\nf 2621/4002/543 152/4027/52 160/4003/52\nf 695/4005/741 86/4032/29 75/4006/741\nf 2626/4007/37 2615/3965/37 72/3967/37\nf 705/4009/64 704/4034/64 88/4010/46\nf 717/4012/12 716/3970/12 145/3972/12\nf 2627/4013/18 2626/4007/18 61/4008/743\nf 2622/4004/750 160/4003/744 80/4015/750\nf 58/4019/15 713/4029/15 712/4017/15\nf 712/4017/15 2624/4035/15 69/4018/15\nf 154/4021/42 694/4031/42 693/4020/71\nf 693/4020/71 708/3984/71 53/3986/42\nf 698/3980/24 50/3979/745 49/4022/745\nf 714/4023/27 38/4030/27 37/4024/27\nf 2617/4026/22 2614/4999/22 151/3964/22\nf 2620/3989/16 148/3988/16 152/4027/16\nf 706/4028/10 705/4009/10 77/4011/10\nf 713/4029/353 58/4019/353 38/4030/353\nf 694/4031/5 154/4021/5 86/4032/5\nf 2625/4033/76 2627/4013/76 44/4014/76\nf 704/4034/23 703/5009/23 156/3992/23\nf 2623/4016/411 80/4015/411 69/4018/411\n";
      exports.disk =
        "# Blender v2.80 (sub 51) OBJ File: ''\n# www.blender.org\nmtllib disk.mtl\no Cylinder.006_Cylinder.012\nv -0.007647 0.000316 0.084568\nv -0.007647 1.235826 0.084568\nv -0.007647 1.235826 0.074401\nv -0.007647 1.043307 0.074401\nv -0.007647 1.043307 0.076215\nv -0.007647 0.000316 0.076215\nv 0.007647 0.000316 0.084568\nv 0.007647 1.235826 0.084568\nv 0.007647 1.235826 0.074401\nv -0.135829 0.000000 -0.143881\nv -0.133219 -0.026499 -0.143881\nv -0.133219 -0.026499 -0.076215\nv -0.135829 0.000000 -0.076215\nv -0.125490 -0.051979 -0.143881\nv -0.125490 -0.051979 -0.076215\nv -0.112938 -0.075463 -0.143881\nv -0.112938 -0.075463 -0.076215\nv -0.096046 -0.096046 -0.143881\nv -0.096046 -0.096046 -0.076215\nv -0.075462 -0.112938 -0.143881\nv -0.075462 -0.112938 -0.076215\nv -0.051979 -0.125490 -0.143881\nv -0.051979 -0.125490 -0.076215\nv -0.026499 -0.133219 -0.143881\nv -0.026499 -0.133219 -0.076215\nv 0.000000 -0.135829 -0.143881\nv 0.000000 -0.135829 -0.076215\nv 0.026499 -0.133219 -0.143881\nv 0.026499 -0.133219 -0.076215\nv 0.051979 -0.125490 -0.143881\nv 0.051979 -0.125490 -0.076215\nv 0.075463 -0.112938 -0.143881\nv 0.075463 -0.112938 -0.076215\nv 0.096046 -0.096046 -0.143881\nv 0.096046 -0.096046 -0.076215\nv 0.112938 -0.075462 -0.143881\nv 0.112938 -0.075462 -0.076215\nv 0.125490 -0.051979 -0.143881\nv 0.125490 -0.051979 -0.076215\nv 0.133219 -0.026499 -0.143881\nv 0.133219 -0.026499 -0.076215\nv 0.135829 0.000000 -0.143881\nv 0.135829 0.000000 -0.076215\nv 0.133219 0.026499 -0.143881\nv 0.133219 0.026499 -0.076215\nv 0.125490 0.051980 -0.143881\nv 0.125490 0.051980 -0.076215\nv 0.112938 0.075463 -0.143881\nv 0.112938 0.075463 -0.076215\nv 0.096045 0.096046 -0.143881\nv 0.096045 0.096046 -0.076215\nv 0.075462 0.112938 -0.143881\nv 0.075462 0.112938 -0.076215\nv 0.051979 0.125490 -0.143881\nv 0.051979 0.125490 -0.076215\nv 0.026499 0.133219 -0.143881\nv 0.026499 0.133219 -0.076215\nv 0.000000 0.135829 -0.143881\nv 0.000000 0.135829 -0.076215\nv -0.026499 0.133219 -0.143881\nv -0.026499 0.133219 -0.076215\nv -0.051980 0.125490 -0.143881\nv -0.051980 0.125490 -0.076215\nv -0.075463 0.112938 -0.143881\nv -0.075463 0.112938 -0.076215\nv -0.096046 0.096045 -0.143881\nv -0.096046 0.096045 -0.076215\nv -0.112938 0.075462 -0.143881\nv -0.112938 0.075462 -0.076215\nv -0.125490 0.051979 -0.143881\nv -0.125490 0.051979 -0.076215\nv -0.133219 0.026499 -0.143881\nv -0.133219 0.026499 -0.076215\nv -1.044060 0.000000 -0.076215\nv -1.023999 -0.203686 -0.076215\nv -1.023999 -0.203686 0.076215\nv -1.044060 -0.000000 0.076215\nv -0.964586 -0.399545 -0.076215\nv -0.964586 -0.399545 0.076215\nv -0.868104 -0.580049 -0.076215\nv -0.868104 -0.580049 0.076215\nv -0.738262 -0.738262 -0.076215\nv -0.738262 -0.738262 0.076215\nv -0.580049 -0.868105 -0.076215\nv -0.580049 -0.868105 0.076215\nv -0.399545 -0.964586 -0.076215\nv -0.399545 -0.964586 0.076215\nv -0.203686 -1.023999 -0.076215\nv -0.203686 -1.023999 0.076215\nv 0.000000 -1.044060 -0.076215\nv 0.000000 -1.044060 0.076215\nv 0.203686 -1.023999 -0.076215\nv 0.203686 -1.023999 0.076215\nv 0.399545 -0.964586 -0.076215\nv 0.399545 -0.964586 0.076215\nv 0.580049 -0.868105 -0.076215\nv 0.580049 -0.868105 0.076215\nv 0.738262 -0.738262 -0.076215\nv 0.738262 -0.738262 0.076215\nv 0.868105 -0.580049 -0.076215\nv 0.868105 -0.580049 0.076215\nv 0.964586 -0.399544 -0.076215\nv 0.964586 -0.399544 0.076215\nv 1.023999 -0.203686 -0.076215\nv 1.023999 -0.203686 0.076215\nv 1.044060 0.000000 -0.076215\nv 1.044060 -0.000000 0.076215\nv 1.023999 0.203687 -0.076215\nv 1.023999 0.203687 0.076215\nv 0.964586 0.399545 -0.076215\nv 0.964586 0.399545 0.076215\nv 0.868104 0.580050 -0.076215\nv 0.868104 0.580050 0.076215\nv 0.738262 0.738263 -0.076215\nv 0.738262 0.738263 0.076215\nv 0.580048 0.868105 -0.076215\nv 0.580048 0.868105 0.076215\nv 0.399544 0.964586 -0.076215\nv 0.399544 0.964586 0.076215\nv 0.203685 1.023999 -0.076215\nv 0.203685 1.023999 0.076215\nv -0.000001 1.044060 -0.076215\nv -0.000001 1.044060 0.074401\nv 0.007647 1.043307 0.074401\nv 0.007647 1.043307 0.076215\nv -0.203687 1.023999 -0.076215\nv -0.203687 1.023999 0.076215\nv -0.399546 0.964586 -0.076215\nv -0.399546 0.964586 0.076215\nv -0.580050 0.868104 -0.076215\nv -0.580050 0.868104 0.076215\nv -0.738263 0.738261 -0.076215\nv -0.738263 0.738261 0.076215\nv -0.868105 0.580048 -0.076215\nv -0.868105 0.580048 0.076215\nv -0.964587 0.399543 -0.076215\nv -0.964587 0.399543 0.076215\nv 0.007647 0.000316 0.076215\nv -1.023999 0.203684 0.076215\nv -1.023999 0.203684 -0.076215\nvt 0.151147 0.976203\nvt 0.151147 0.928421\nvt 0.101720 0.928421\nvt 0.258830 0.976203\nvt 0.289256 0.669558\nvt 0.258830 0.669558\nvt 0.350110 0.682991\nvt 0.319683 0.669558\nvt 0.319684 0.682991\nvt 0.113621 0.085187\nvt 0.123306 0.469009\nvt 0.123306 0.085187\nvt 0.104499 0.085187\nvt 0.113621 0.469009\nvt 0.096288 0.085186\nvt 0.104499 0.469009\nvt 0.089306 0.085187\nvt 0.096288 0.469009\nvt 0.082324 0.085186\nvt 0.089306 0.469009\nvt 0.074114 0.085186\nvt 0.082324 0.469009\nvt 0.064991 0.085187\nvt 0.074114 0.469009\nvt 0.055306 0.085187\nvt 0.064991 0.469009\nvt 0.045432 0.085187\nvt 0.055306 0.469009\nvt 0.035747 0.085187\nvt 0.045432 0.469009\nvt 0.026625 0.085187\nvt 0.035747 0.469009\nvt 0.018414 0.085187\nvt 0.026625 0.469009\nvt 0.011432 0.085187\nvt 0.018414 0.469009\nvt 0.286789 0.085187\nvt 0.294999 0.469009\nvt 0.294999 0.085187\nvt 0.277666 0.085187\nvt 0.286789 0.469009\nvt 0.267981 0.085187\nvt 0.277666 0.469009\nvt 0.258107 0.085187\nvt 0.267981 0.469009\nvt 0.248423 0.085186\nvt 0.258107 0.469009\nvt 0.239300 0.085187\nvt 0.248423 0.469009\nvt 0.231090 0.085187\nvt 0.239300 0.469009\nvt 0.222879 0.085187\nvt 0.231090 0.469009\nvt 0.213757 0.085186\nvt 0.222879 0.469009\nvt 0.204072 0.085187\nvt 0.213757 0.469009\nvt 0.194198 0.085187\nvt 0.204072 0.469009\nvt 0.184513 0.085187\nvt 0.194198 0.469009\nvt 0.175390 0.085187\nvt 0.184513 0.469009\nvt 0.167180 0.085187\nvt 0.175390 0.469009\nvt 0.160198 0.085187\nvt 0.167180 0.469009\nvt 0.151988 0.085187\nvt 0.160198 0.469009\nvt 0.142865 0.085187\nvt 0.151988 0.469009\nvt 0.133180 0.085187\nvt 0.142865 0.469009\nvt 0.133180 0.469009\nvt 0.414636 0.168957\nvt 0.381056 0.098810\nvt 0.318232 0.136305\nvt 0.809314 0.753870\nvt 0.790572 0.519668\nvt 0.790572 0.753870\nvt 0.826969 0.753870\nvt 0.809314 0.519668\nvt 0.842857 0.753870\nvt 0.826969 0.519668\nvt 0.856370 0.753870\nvt 0.842857 0.519668\nvt 0.842858 0.285466\nvt 0.856370 0.519668\nvt 0.856370 0.285466\nvt 0.826969 0.285466\nvt 0.842858 0.519668\nvt 0.809314 0.285466\nvt 0.826969 0.519668\nvt 0.790572 0.285466\nvt 0.809314 0.519668\nvt 0.771463 0.285466\nvt 0.790572 0.519668\nvt 0.752721 0.285466\nvt 0.771463 0.519668\nvt 0.735066 0.285466\nvt 0.752721 0.519668\nvt 0.719177 0.285466\nvt 0.735066 0.519668\nvt 0.705665 0.285466\nvt 0.719177 0.519668\nvt 0.872259 0.753870\nvt 0.856370 0.519668\nvt 0.856370 0.753870\nvt 0.889913 0.753870\nvt 0.872259 0.519668\nvt 0.908655 0.753870\nvt 0.889913 0.519668\nvt 0.927765 0.753870\nvt 0.908655 0.519668\nvt 0.946507 0.753870\nvt 0.927765 0.519668\nvt 0.964161 0.753870\nvt 0.946507 0.519668\nvt 0.980050 0.753870\nvt 0.964161 0.519668\nvt 0.872259 0.519668\nvt 0.856370 0.285466\nvt 0.856370 0.519668\nvt 0.889913 0.519668\nvt 0.872259 0.285466\nvt 0.908655 0.519668\nvt 0.889913 0.285466\nvt 0.927047 0.288252\nvt 0.927047 0.285466\nvt 0.908655 0.285466\nvt 0.946507 0.285466\nvt 0.928468 0.285466\nvt 0.928468 0.288252\nvt 0.964161 0.519668\nvt 0.946507 0.519668\nvt 0.980050 0.519668\nvt 0.964161 0.285466\nvt 0.719177 0.753870\nvt 0.705665 0.519668\nvt 0.705665 0.753870\nvt 0.735066 0.753870\nvt 0.719177 0.519668\nvt 0.752721 0.753870\nvt 0.735066 0.519668\nvt 0.608420 0.402813\nvt 0.515234 0.368855\nvt 0.511646 0.390525\nvt 0.771463 0.753870\nvt 0.752721 0.519668\nvt 0.771463 0.519668\nvt 0.614633 0.648513\nvt 0.612337 0.649656\nvt 0.654607 0.738351\nvt 0.602677 0.621642\nvt 0.604974 0.620499\nvt 0.562704 0.531803\nvt 0.200575 0.928421\nvt 0.151148 0.976203\nvt 0.319684 0.717339\nvt 0.319683 0.669558\nvt 0.304468 0.669744\nvt 0.319683 0.690258\nvt 0.350110 0.682991\nvt 0.319683 0.682991\nvt 0.101720 0.669558\nvt 0.043465 0.669558\nvt 0.043465 0.976203\nvt 0.289257 0.976203\nvt 0.350110 0.669558\nvt 0.011432 0.469009\nvt 0.316306 0.147118\nvt 0.316306 0.158144\nvt 0.318232 0.168957\nvt 0.322011 0.179144\nvt 0.327497 0.188311\nvt 0.351812 0.206452\nvt 0.334479 0.196107\nvt 0.342689 0.202233\nvt 0.361497 0.208603\nvt 0.371371 0.208603\nvt 0.381056 0.206452\nvt 0.390178 0.202233\nvt 0.398389 0.196107\nvt 0.405371 0.188311\nvt 0.410857 0.179144\nvt 0.416562 0.158144\nvt 0.416562 0.147118\nvt 0.414636 0.136305\nvt 0.410857 0.126119\nvt 0.405371 0.116951\nvt 0.398389 0.109155\nvt 0.390178 0.103030\nvt 0.371371 0.096659\nvt 0.361497 0.096659\nvt 0.351812 0.098810\nvt 0.342689 0.103030\nvt 0.334479 0.109155\nvt 0.327497 0.116951\nvt 0.322011 0.126119\nvt 0.705665 0.519668\nvt 0.980050 0.519668\nvt 0.927765 0.519668\nvt 0.927765 0.288252\nvt 0.980050 0.285466\nvt 0.580359 0.514062\nvt 0.599101 0.518540\nvt 0.618210 0.518540\nvt 0.636952 0.514062\nvt 0.654607 0.505277\nvt 0.670495 0.492523\nvt 0.684008 0.476291\nvt 0.694624 0.457204\nvt 0.701937 0.435996\nvt 0.705665 0.413481\nvt 0.608834 0.401172\nvt 0.705665 0.390525\nvt 0.701937 0.368010\nvt 0.694624 0.346802\nvt 0.684008 0.327715\nvt 0.670495 0.311482\nvt 0.654607 0.298729\nvt 0.636952 0.289944\nvt 0.618210 0.285466\nvt 0.599101 0.285466\nvt 0.580359 0.289944\nvt 0.562704 0.298729\nvt 0.546815 0.311483\nvt 0.533303 0.327715\nvt 0.522686 0.346802\nvt 0.515648 0.367214\nvt 0.562704 0.505277\nvt 0.533303 0.476291\nvt 0.546815 0.492523\nvt 0.515374 0.435996\nvt 0.522686 0.457204\nvt 0.511646 0.413481\nvt 0.618210 0.751615\nvt 0.636952 0.747136\nvt 0.609898 0.650238\nvt 0.607412 0.650238\nvt 0.599101 0.751615\nvt 0.670495 0.725598\nvt 0.684008 0.709365\nvt 0.616701 0.646854\nvt 0.694624 0.690278\nvt 0.619840 0.642259\nvt 0.701937 0.669070\nvt 0.620791 0.639500\nvt 0.621276 0.636571\nvt 0.705665 0.646555\nvt 0.705665 0.623599\nvt 0.621276 0.633584\nvt 0.701937 0.601085\nvt 0.620791 0.630655\nvt 0.580359 0.747136\nvt 0.604974 0.649656\nvt 0.546815 0.725598\nvt 0.562704 0.738351\nvt 0.602677 0.648513\nvt 0.522686 0.690279\nvt 0.533303 0.709366\nvt 0.598852 0.644742\nvt 0.600610 0.646854\nvt 0.596520 0.639500\nvt 0.515374 0.669070\nvt 0.597471 0.642259\nvt 0.618458 0.644742\nvt 0.694624 0.579876\nvt 0.684008 0.560789\nvt 0.619840 0.627896\nvt 0.670495 0.544557\nvt 0.618458 0.625413\nvt 0.654607 0.531803\nvt 0.614633 0.621642\nvt 0.636952 0.523019\nvt 0.612337 0.620499\nvt 0.618210 0.518540\nvt 0.599101 0.518540\nvt 0.609898 0.619916\nvt 0.580359 0.523019\nvt 0.607412 0.619916\nvt 0.546815 0.544557\nvt 0.533303 0.560789\nvt 0.600610 0.623301\nvt 0.522686 0.579876\nvt 0.597471 0.627896\nvt 0.515374 0.601085\nvt 0.596520 0.630655\nvt 0.596035 0.633584\nvt 0.511646 0.623600\nvt 0.511646 0.646555\nvt 0.596035 0.636571\nvt 0.616701 0.623301\nvt 0.598852 0.625413\nvt 0.151147 0.928421\nvt 0.200575 0.669558\nvt 0.289257 0.669558\nvt 0.289257 0.717339\nvt 0.350110 0.690258\n\nusemtl Material.002\ns 1\nf 3/1/1 4/2/1 5/3/1\nf 8/4/2 1/5/2 7/6/2\nf 3/7/3 8/8/3 9/9/3\nf 11/10/4 13/11/4 10/12/4\nf 14/13/5 12/14/5 11/10/5\nf 16/15/6 15/16/6 14/13/6\nf 18/17/7 17/18/7 16/15/7\nf 20/19/8 19/20/8 18/17/8\nf 22/21/9 21/22/9 20/19/9\nf 24/23/10 23/24/10 22/21/10\nf 26/25/11 25/26/11 24/23/11\nf 28/27/12 27/28/12 26/25/12\nf 30/29/13 29/30/13 28/27/13\nf 32/31/14 31/32/14 30/29/14\nf 34/33/15 33/34/15 32/31/15\nf 36/35/16 35/36/16 34/33/16\nf 38/37/17 37/38/17 36/39/17\nf 40/40/18 39/41/18 38/37/18\nf 42/42/19 41/43/19 40/40/19\nf 44/44/20 43/45/20 42/42/20\nf 46/46/21 45/47/21 44/44/21\nf 48/48/22 47/49/22 46/46/22\nf 50/50/23 49/51/23 48/48/23\nf 52/52/24 51/53/24 50/50/24\nf 54/54/25 53/55/25 52/52/25\nf 56/56/26 55/57/26 54/54/26\nf 58/58/27 57/59/27 56/56/27\nf 60/60/28 59/61/28 58/58/28\nf 62/62/29 61/63/29 60/60/29\nf 64/64/30 63/65/30 62/62/30\nf 66/66/31 65/67/31 64/64/31\nf 68/68/32 67/69/32 66/66/32\nf 70/70/33 69/71/33 68/68/33\nf 72/72/34 71/73/34 70/70/34\nf 10/12/35 73/74/35 72/72/35\nf 44/75/36 28/76/36 11/77/36\nf 75/78/4 77/79/4 74/80/4\nf 78/81/5 76/82/5 75/78/5\nf 80/83/6 79/84/6 78/81/6\nf 82/85/7 81/86/7 80/83/7\nf 84/87/8 83/88/8 82/89/8\nf 86/90/9 85/91/9 84/87/9\nf 88/92/10 87/93/10 86/90/10\nf 90/94/11 89/95/11 88/92/11\nf 92/96/12 91/97/12 90/94/12\nf 94/98/13 93/99/13 92/96/13\nf 96/100/14 95/101/14 94/98/14\nf 98/102/15 97/103/15 96/100/15\nf 100/104/16 99/105/16 98/102/16\nf 102/106/17 101/107/17 100/108/17\nf 104/109/18 103/110/18 102/106/18\nf 106/111/19 105/112/19 104/109/19\nf 108/113/20 107/114/20 106/111/20\nf 110/115/21 109/116/21 108/113/21\nf 112/117/22 111/118/22 110/115/22\nf 114/119/23 113/120/23 112/117/23\nf 116/121/24 115/122/24 114/123/24\nf 118/124/25 117/125/25 116/121/25\nf 120/126/26 119/127/26 118/124/26\nf 124/128/27 125/129/27 121/130/27\nf 127/131/28 5/132/28 4/133/28\nf 128/134/29 127/131/29 126/135/29\nf 130/136/30 129/137/30 128/134/30\nf 132/138/31 131/139/31 130/140/31\nf 134/141/32 133/142/32 132/138/32\nf 136/143/33 135/144/33 134/141/33\nf 6/145/2 5/146/2 127/147/2\nf 140/148/34 137/149/34 136/143/34\nf 74/80/35 139/150/35 140/148/35\nf 73/151/36 13/152/36 140/153/36\nf 41/154/36 43/155/36 104/156/36\nf 125/157/37 9/158/37 8/4/37\nf 9/159/36 124/160/36 123/161/36\nf 7/162/38 6/163/38 138/164/38\nf 6/165/1 1/166/1 5/3/1\nf 1/166/1 2/167/1 5/3/1\nf 2/167/1 3/1/1 5/3/1\nf 8/4/2 2/168/2 1/5/2\nf 3/7/3 2/169/3 8/8/3\nf 11/10/4 12/14/4 13/11/4\nf 14/13/5 15/16/5 12/14/5\nf 16/15/6 17/18/6 15/16/6\nf 18/17/7 19/20/7 17/18/7\nf 20/19/8 21/22/8 19/20/8\nf 22/21/9 23/24/9 21/22/9\nf 24/23/10 25/26/10 23/24/10\nf 26/25/11 27/28/11 25/26/11\nf 28/27/12 29/30/12 27/28/12\nf 30/29/13 31/32/13 29/30/13\nf 32/31/14 33/34/14 31/32/14\nf 34/33/15 35/36/15 33/34/15\nf 36/35/16 37/170/16 35/36/16\nf 38/37/17 39/41/17 37/38/17\nf 40/40/18 41/43/18 39/41/18\nf 42/42/19 43/45/19 41/43/19\nf 44/44/20 45/47/20 43/45/20\nf 46/46/21 47/49/21 45/47/21\nf 48/48/22 49/51/22 47/49/22\nf 50/50/23 51/53/23 49/51/23\nf 52/52/24 53/55/24 51/53/24\nf 54/54/25 55/57/25 53/55/25\nf 56/56/26 57/59/26 55/57/26\nf 58/58/27 59/61/27 57/59/27\nf 60/60/28 61/63/28 59/61/28\nf 62/62/29 63/65/29 61/63/29\nf 64/64/30 65/67/30 63/65/30\nf 66/66/31 67/69/31 65/67/31\nf 68/68/32 69/71/32 67/69/32\nf 70/70/33 71/73/33 69/71/33\nf 72/72/34 73/74/34 71/73/34\nf 10/12/35 13/11/35 73/74/35\nf 11/77/36 10/171/36 72/172/36\nf 72/172/36 70/173/36 68/174/36\nf 68/174/36 66/175/36 60/176/36\nf 66/175/36 64/177/36 60/176/36\nf 64/177/36 62/178/36 60/176/36\nf 60/176/36 58/179/36 56/180/36\nf 56/180/36 54/181/36 52/182/36\nf 52/182/36 50/183/36 44/75/36\nf 50/183/36 48/184/36 44/75/36\nf 48/184/36 46/185/36 44/75/36\nf 44/75/36 42/186/36 40/187/36\nf 40/187/36 38/188/36 36/189/36\nf 36/189/36 34/190/36 32/191/36\nf 32/191/36 30/192/36 36/189/36\nf 30/192/36 28/76/36 36/189/36\nf 28/76/36 26/193/36 24/194/36\nf 24/194/36 22/195/36 20/196/36\nf 20/196/36 18/197/36 16/198/36\nf 16/198/36 14/199/36 20/196/36\nf 14/199/36 11/77/36 20/196/36\nf 11/77/36 72/172/36 60/176/36\nf 72/172/36 68/174/36 60/176/36\nf 60/176/36 56/180/36 44/75/36\nf 56/180/36 52/182/36 44/75/36\nf 44/75/36 40/187/36 28/76/36\nf 40/187/36 36/189/36 28/76/36\nf 28/76/36 24/194/36 11/77/36\nf 24/194/36 20/196/36 11/77/36\nf 11/77/36 60/176/36 44/75/36\nf 75/78/4 76/82/4 77/79/4\nf 78/81/5 79/84/5 76/82/5\nf 80/83/6 81/86/6 79/84/6\nf 82/85/7 83/88/7 81/86/7\nf 84/87/8 85/91/8 83/88/8\nf 86/90/9 87/93/9 85/91/9\nf 88/92/10 89/95/10 87/93/10\nf 90/94/11 91/97/11 89/95/11\nf 92/96/12 93/99/12 91/97/12\nf 94/98/13 95/101/13 93/99/13\nf 96/100/14 97/103/14 95/101/14\nf 98/102/15 99/105/15 97/103/15\nf 100/104/16 101/200/16 99/105/16\nf 102/106/17 103/110/17 101/107/17\nf 104/109/18 105/112/18 103/110/18\nf 106/111/19 107/114/19 105/112/19\nf 108/113/20 109/116/20 107/114/20\nf 110/115/21 111/118/21 109/116/21\nf 112/117/22 113/120/22 111/118/22\nf 114/119/23 115/201/23 113/120/23\nf 116/121/24 117/125/24 115/122/24\nf 118/124/25 119/127/25 117/125/25\nf 120/126/26 121/130/26 119/127/26\nf 121/130/27 120/126/27 124/128/27\nf 120/126/27 122/202/27 124/128/27\nf 122/202/27 123/203/27 124/128/27\nf 123/203/28 122/202/28 4/133/28\nf 122/202/28 126/135/28 4/133/28\nf 126/135/28 127/131/28 4/133/28\nf 128/134/29 129/137/29 127/131/29\nf 130/136/30 131/204/30 129/137/30\nf 132/138/31 133/142/31 131/139/31\nf 134/141/32 135/144/32 133/142/32\nf 136/143/33 137/149/33 135/144/33\nf 77/205/2 76/206/2 6/145/2\nf 76/206/2 79/207/2 6/145/2\nf 79/207/2 81/208/2 6/145/2\nf 81/208/2 83/209/2 6/145/2\nf 83/209/2 85/210/2 6/145/2\nf 85/210/2 87/211/2 6/145/2\nf 87/211/2 89/212/2 6/145/2\nf 89/212/2 91/213/2 6/145/2\nf 91/213/2 93/214/2 138/215/2\nf 93/214/2 95/216/2 138/215/2\nf 91/213/2 138/215/2 6/145/2\nf 95/216/2 97/217/2 138/215/2\nf 97/217/2 99/218/2 138/215/2\nf 99/218/2 101/219/2 138/215/2\nf 101/219/2 103/220/2 138/215/2\nf 103/220/2 105/221/2 138/215/2\nf 105/221/2 107/222/2 138/215/2\nf 107/222/2 109/223/2 138/215/2\nf 109/223/2 111/224/2 138/215/2\nf 111/224/2 113/225/2 138/215/2\nf 113/225/2 115/226/2 138/215/2\nf 115/226/2 117/227/2 138/215/2\nf 117/227/2 119/228/2 138/215/2\nf 119/228/2 121/229/2 138/215/2\nf 121/229/2 125/230/2 138/215/2\nf 139/231/2 77/205/2 6/145/2\nf 135/232/2 137/233/2 6/145/2\nf 137/233/2 139/231/2 6/145/2\nf 131/234/2 133/235/2 6/145/2\nf 133/235/2 135/232/2 6/145/2\nf 127/147/2 129/236/2 6/145/2\nf 129/236/2 131/234/2 6/145/2\nf 140/148/34 139/150/34 137/149/34\nf 74/80/35 77/79/35 139/150/35\nf 75/237/36 74/238/36 12/239/36\nf 74/238/36 140/153/36 13/152/36\nf 75/237/36 15/240/36 78/241/36\nf 140/153/36 136/242/36 73/151/36\nf 136/242/36 134/243/36 71/244/36\nf 12/239/36 74/238/36 13/152/36\nf 134/243/36 132/245/36 67/246/36\nf 132/245/36 130/247/36 65/248/36\nf 63/249/36 130/247/36 128/250/36\nf 128/250/36 126/251/36 61/252/36\nf 126/251/36 122/253/36 61/252/36\nf 122/253/36 59/254/36 61/252/36\nf 130/247/36 63/249/36 65/248/36\nf 128/250/36 61/252/36 63/249/36\nf 15/240/36 75/237/36 12/239/36\nf 80/255/36 78/241/36 17/256/36\nf 17/256/36 78/241/36 15/240/36\nf 84/257/36 82/258/36 19/259/36\nf 82/258/36 80/255/36 17/256/36\nf 88/260/36 86/261/36 23/262/36\nf 86/261/36 84/257/36 21/263/36\nf 27/264/36 90/265/36 88/260/36\nf 25/266/36 27/264/36 88/260/36\nf 84/257/36 19/259/36 21/263/36\nf 82/258/36 17/256/36 19/259/36\nf 23/262/36 25/266/36 88/260/36\nf 21/263/36 23/262/36 86/261/36\nf 132/245/36 65/248/36 67/246/36\nf 134/243/36 67/246/36 69/267/36\nf 134/243/36 69/267/36 71/244/36\nf 71/244/36 73/151/36 136/242/36\nf 59/254/36 122/253/36 120/268/36\nf 120/268/36 118/269/36 57/270/36\nf 118/269/36 116/271/36 55/272/36\nf 120/268/36 57/270/36 59/254/36\nf 116/271/36 114/273/36 51/274/36\nf 114/273/36 112/275/36 49/276/36\nf 112/275/36 110/277/36 49/276/36\nf 110/277/36 108/278/36 47/279/36\nf 49/276/36 110/277/36 47/279/36\nf 108/278/36 106/280/36 45/281/36\nf 106/280/36 104/156/36 43/155/36\nf 104/156/36 102/282/36 41/154/36\nf 102/282/36 100/283/36 39/284/36\nf 45/281/36 106/280/36 43/155/36\nf 100/283/36 98/285/36 35/286/36\nf 98/285/36 96/287/36 33/288/36\nf 31/289/36 96/287/36 94/290/36\nf 94/290/36 92/291/36 29/292/36\nf 92/291/36 90/265/36 27/264/36\nf 92/291/36 27/264/36 29/292/36\nf 96/287/36 31/289/36 33/288/36\nf 94/290/36 29/292/36 31/289/36\nf 47/279/36 108/278/36 45/281/36\nf 114/273/36 49/276/36 51/274/36\nf 57/270/36 118/269/36 55/272/36\nf 53/293/36 55/272/36 116/271/36\nf 98/285/36 33/288/36 35/286/36\nf 51/274/36 53/293/36 116/271/36\nf 100/283/36 35/286/36 37/294/36\nf 100/283/36 37/294/36 39/284/36\nf 39/284/36 41/154/36 102/282/36\nf 125/157/37 124/295/37 9/158/37\nf 8/4/37 7/6/37 125/157/37\nf 7/6/37 138/296/37 125/157/37\nf 123/161/36 4/297/36 3/298/36\nf 3/298/36 9/159/36 123/161/36\nf 7/162/38 1/299/38 6/163/38\n";
      exports.floor =
        "# Blender v2.80 (sub 51) OBJ File: ''\n# www.blender.org\nmtllib floor.mtl\no Plane\nv -18.297108 -9.14 18.297106\nv 18.297108 -9.14 18.297106\nv 18.297108 -9.14 -18.297110\nv -18.297108 -9.14 -18.297110\nvt 8.000000 0.000000\nvt 0.000000 8.000000\nvt 0.000000 0.000000\nvt 8.000000 8.000000\nusemtl None\ns 1\nf 2/1/1 4/2/1 1/3/1\nf 2/1/1 3/4/1 4/2/1\n";
      exports.stand =
        "# Blender v2.80 (sub 51) OBJ File: ''\n# www.blender.org\nmtllib stand.mtl\no Cylinder.017\nv 0.542819 -3.757386 -0.840586\nv 0.542819 -3.691696 -0.840586\nv 0.527369 -3.691696 -0.842107\nv 0.527369 -3.757386 -0.842107\nv 0.512513 -3.691696 -0.846614\nv 0.512513 -3.757386 -0.846614\nv 0.498822 -3.691696 -0.853932\nv 0.498822 -3.757386 -0.853932\nv 0.486821 -3.691696 -0.863781\nv 0.486821 -3.757386 -0.863781\nv 0.476972 -3.691696 -0.875782\nv 0.476972 -3.757386 -0.875782\nv 0.469654 -3.691696 -0.889473\nv 0.469654 -3.757386 -0.889473\nv 0.465148 -3.691696 -0.904329\nv 0.465148 -3.757386 -0.904329\nv 0.463626 -3.691696 -0.919779\nv 0.463626 -3.757386 -0.919779\nv 0.465148 -3.691696 -0.935228\nv 0.465147 -3.757386 -0.935228\nv 0.469654 -3.691696 -0.950084\nv 0.469654 -3.757386 -0.950085\nv 0.476972 -3.691696 -0.963776\nv 0.476972 -3.757386 -0.963776\nv 0.486821 -3.691696 -0.975777\nv 0.486821 -3.757386 -0.975777\nv 0.498822 -3.691696 -0.985625\nv 0.498822 -3.757386 -0.985625\nv 0.512513 -3.691696 -0.992944\nv 0.512513 -3.757386 -0.992944\nv 0.527369 -3.691696 -0.997450\nv 0.527369 -3.757386 -0.997450\nv 0.542819 -3.691696 -0.998972\nv 0.542819 -3.757386 -0.998972\nv 0.558269 -3.691696 -0.997450\nv 0.558269 -3.757386 -0.997450\nv 0.573125 -3.691696 -0.992944\nv 0.573125 -3.757386 -0.992944\nv 0.586816 -3.691696 -0.985625\nv 0.586816 -3.757386 -0.985625\nv 0.598817 -3.691696 -0.975777\nv 0.598817 -3.757386 -0.975777\nv 0.608665 -3.691696 -0.963776\nv 0.608665 -3.757386 -0.963776\nv 0.615984 -3.691696 -0.950084\nv 0.615984 -3.757386 -0.950085\nv 0.620490 -3.691696 -0.935228\nv 0.620490 -3.757386 -0.935228\nv 0.622012 -3.691696 -0.919779\nv 0.622012 -3.757386 -0.919779\nv 0.620490 -3.691696 -0.904329\nv 0.620490 -3.757386 -0.904329\nv 0.615984 -3.691696 -0.889473\nv 0.615984 -3.757386 -0.889473\nv 0.608665 -3.691696 -0.875782\nv 0.608665 -3.757386 -0.875782\nv 0.598817 -3.691696 -0.863781\nv 0.598817 -3.757386 -0.863781\nv 0.586816 -3.691696 -0.853932\nv 0.586816 -3.757386 -0.853932\nv 0.573125 -3.691696 -0.846614\nv 0.573125 -3.757386 -0.846614\nv 0.527369 -3.613311 -0.842107\nv 0.542819 -3.613311 -0.840586\nv 0.558268 -3.613311 -0.842107\nv 0.573125 -3.613311 -0.846614\nv 0.586816 -3.613311 -0.853932\nv 0.598817 -3.613311 -0.863781\nv 0.608665 -3.613311 -0.875782\nv 0.615984 -3.613311 -0.889473\nv 0.620490 -3.613311 -0.904329\nv 0.622012 -3.613311 -0.919779\nv 0.620490 -3.613311 -0.935228\nv 0.615984 -3.613311 -0.950085\nv 0.608665 -3.613311 -0.963776\nv 0.598817 -3.613311 -0.975777\nv 0.586816 -3.613311 -0.985625\nv 0.573125 -3.613311 -0.992944\nv 0.558269 -3.613311 -0.997450\nv 0.542819 -3.613311 -0.998972\nv 0.527369 -3.613311 -0.997450\nv 0.512513 -3.613311 -0.992944\nv 0.498822 -3.613311 -0.985625\nv 0.486821 -3.613311 -0.975777\nv 0.476972 -3.613311 -0.963776\nv 0.469654 -3.613311 -0.950085\nv 0.465147 -3.613311 -0.935228\nv 0.463626 -3.613311 -0.919779\nv 0.465148 -3.613311 -0.904329\nv 0.469654 -3.613311 -0.889473\nv 0.476972 -3.613311 -0.875782\nv 0.486821 -3.613311 -0.863781\nv 0.498822 -3.613311 -0.853932\nv 0.512513 -3.613311 -0.846614\nv 0.558268 -3.691696 -0.842107\nv 0.558268 -3.757386 -0.842107\nv -1.067804 -3.757386 0.079192\nv -1.067804 -3.691696 0.079192\nv -1.083254 -3.691696 0.077670\nv -1.083254 -3.757386 0.077670\nv -1.098110 -3.691696 0.073164\nv -1.098110 -3.757386 0.073164\nv -1.111802 -3.691696 0.065846\nv -1.111802 -3.757386 0.065846\nv -1.123802 -3.691696 0.055997\nv -1.123802 -3.757386 0.055997\nv -1.133651 -3.691696 0.043996\nv -1.133651 -3.757386 0.043996\nv -1.140969 -3.691696 0.030305\nv -1.140969 -3.757386 0.030305\nv -1.145476 -3.691696 0.015449\nv -1.145476 -3.757386 0.015449\nv -1.146997 -3.691696 -0.000001\nv -1.146997 -3.757386 -0.000001\nv -1.145476 -3.691696 -0.015451\nv -1.145476 -3.757386 -0.015451\nv -1.140969 -3.691696 -0.030307\nv -1.140969 -3.757386 -0.030307\nv -1.133651 -3.691696 -0.043998\nv -1.133651 -3.757386 -0.043998\nv -1.123802 -3.691696 -0.055999\nv -1.123802 -3.757386 -0.055999\nv -1.111802 -3.691696 -0.065848\nv -1.111802 -3.757386 -0.065848\nv -1.098110 -3.691696 -0.073166\nv -1.098110 -3.757386 -0.073166\nv -1.083254 -3.691696 -0.077672\nv -1.083254 -3.757386 -0.077672\nv -1.067804 -3.691696 -0.079194\nv -1.067804 -3.757386 -0.079194\nv -1.052355 -3.691696 -0.077672\nv -1.052355 -3.757386 -0.077672\nv -1.037498 -3.691696 -0.073166\nv -1.037498 -3.757386 -0.073166\nv -1.023807 -3.691696 -0.065847\nv -1.023807 -3.757386 -0.065848\nv -1.011806 -3.691696 -0.055999\nv -1.011806 -3.757386 -0.055999\nv -1.001958 -3.691696 -0.043998\nv -1.001958 -3.757386 -0.043998\nv -0.994640 -3.691696 -0.030307\nv -0.994640 -3.757386 -0.030307\nv -0.990133 -3.691696 -0.015451\nv -0.990133 -3.757386 -0.015451\nv -0.988611 -3.691696 -0.000001\nv -0.988611 -3.757386 -0.000001\nv -0.990133 -3.691696 0.015449\nv -0.990133 -3.757386 0.015449\nv -0.994640 -3.691696 0.030305\nv -0.994640 -3.757386 0.030305\nv -1.001958 -3.691696 0.043996\nv -1.001958 -3.757386 0.043996\nv -1.011806 -3.691696 0.055997\nv -1.011806 -3.757386 0.055997\nv -1.023807 -3.691696 0.065846\nv -1.023807 -3.757386 0.065846\nv -1.037499 -3.691696 0.073164\nv -1.037499 -3.757386 0.073164\nv -1.083254 -3.613311 0.077670\nv -1.067804 -3.613311 0.079192\nv -1.052355 -3.613311 0.077670\nv -1.037499 -3.613311 0.073164\nv -1.023807 -3.613311 0.065846\nv -1.011806 -3.613311 0.055997\nv -1.001958 -3.613311 0.043996\nv -0.994640 -3.613311 0.030305\nv -0.990133 -3.613311 0.015449\nv -0.988611 -3.613311 -0.000001\nv -0.990133 -3.613311 -0.015451\nv -0.994640 -3.613311 -0.030307\nv -1.001958 -3.613311 -0.043998\nv -1.011806 -3.613311 -0.055999\nv -1.023807 -3.613311 -0.065848\nv -1.037498 -3.613311 -0.073166\nv -1.052355 -3.613311 -0.077672\nv -1.067804 -3.613311 -0.079194\nv -1.083254 -3.613311 -0.077672\nv -1.098110 -3.613311 -0.073166\nv -1.111802 -3.613311 -0.065848\nv -1.123802 -3.613311 -0.055999\nv -1.133651 -3.613311 -0.043998\nv -1.140969 -3.613311 -0.030307\nv -1.145476 -3.613311 -0.015451\nv -1.146997 -3.613311 -0.000001\nv -1.145476 -3.613311 0.015449\nv -1.140969 -3.613311 0.030305\nv -1.133651 -3.613311 0.043996\nv -1.123802 -3.613311 0.055997\nv -1.111802 -3.613311 0.065846\nv -1.098110 -3.613311 0.073164\nv -1.052355 -3.691696 0.077670\nv -1.052355 -3.757386 0.077670\nv -0.139845 -3.691696 0.238324\nv 0.276318 -3.691696 0.001946\nv 0.276318 -3.691696 0.001946\nv -0.139845 -3.691696 0.238324\nv 0.276318 -3.691696 0.001946\nv -0.139845 -3.691696 0.238324\nv 0.276318 -3.630760 0.001946\nv -0.139845 -3.630760 0.238324\nv -0.139845 -3.630760 0.238324\nv 0.276318 -3.630760 0.001946\nv -0.136473 -3.630760 -0.240273\nv -0.136473 -3.630760 -0.240273\nv -0.136473 -3.691696 -0.240273\nv -0.136473 -3.691696 -0.240273\nv -0.136473 -3.691696 -0.240273\nv 0.080798 -3.630760 0.001108\nv 0.079277 -3.630760 0.016558\nv 0.074770 -3.630760 0.031414\nv 0.067452 -3.630760 0.045106\nv 0.057603 -3.630760 0.057106\nv 0.045603 -3.630760 0.066955\nv 0.031911 -3.630760 0.074273\nv 0.017055 -3.630760 0.078780\nv 0.001605 -3.630760 0.080301\nv -0.013844 -3.630760 0.078780\nv -0.028700 -3.630760 0.074273\nv -0.042392 -3.630760 0.066955\nv -0.054393 -3.630760 0.057106\nv -0.064241 -3.630760 0.045106\nv -0.071559 -3.630760 0.031414\nv -0.076066 -3.630760 0.016558\nv -0.077588 -3.630760 0.001108\nv -0.139845 -3.630760 0.238324\nv 0.276318 -3.630760 0.001946\nv -0.136473 -3.630760 -0.240273\nv 0.276318 -3.630760 0.001946\nv 0.070962 -3.630760 -0.118554\nv 0.068883 -3.630760 -0.119773\nv -0.136473 -3.630760 -0.240273\nv 0.068883 -3.691696 -0.119773\nv -0.015974 -3.691696 -0.445629\nv 0.314464 -3.691696 -1.008766\nv 0.752421 -3.691696 -0.947817\nv 0.759730 -3.691696 -0.901517\nv 0.757867 -3.691696 -0.854680\nv 0.746901 -3.691696 -0.809106\nv 0.727256 -3.691696 -0.766548\nv 0.396818 -3.691696 -0.203411\nv 0.070962 -3.691696 -0.118554\nv 0.727256 -3.630759 -0.766548\nv 0.396818 -3.630760 -0.203411\nv -0.022251 -3.691696 0.445358\nv 0.300191 -3.691696 1.013043\nv 0.300191 -3.630760 1.013043\nv -0.022251 -3.630760 0.445358\nv -0.015974 -3.630760 -0.445629\nv 0.314464 -3.630760 -1.008766\nv 0.276318 -3.691696 0.001946\nv 0.069284 -3.691696 0.119540\nv 0.067189 -3.691696 0.120730\nv -0.139845 -3.691696 0.238324\nv -0.138168 -3.691696 0.000230\nv -1.263340 -3.691696 -0.055565\nv -1.249405 -3.691696 -0.100365\nv -1.226998 -3.691696 -0.141586\nv -1.196979 -3.691696 -0.177643\nv -1.160502 -3.691696 -0.207151\nv -1.118970 -3.691696 -0.228976\nv -1.073978 -3.691696 -0.242278\nv -1.027256 -3.691696 -0.246548\nv -0.374567 -3.691696 -0.241950\nv -0.138151 -3.691696 -0.002179\nv 0.626512 -3.691696 1.102753\nv 0.626512 -3.630760 1.102753\nv 0.626280 -3.630760 1.102885\nv 0.626280 -3.691696 1.102885\nv -0.138151 -3.630760 -0.002179\nv -0.374567 -3.630760 -0.241950\nv -1.027256 -3.630760 -0.246548\nv -1.073978 -3.630760 -0.242278\nv -1.118970 -3.630760 -0.228976\nv -1.160502 -3.630760 -0.207151\nv -1.196979 -3.630760 -0.177643\nv -1.226998 -3.630760 -0.141586\nv -1.249405 -3.630760 -0.100365\nv -1.263340 -3.630760 -0.055565\nv -1.146997 -3.630760 -0.000001\nv -1.145476 -3.630760 -0.015451\nv -1.140969 -3.630760 -0.030307\nv -1.133651 -3.630760 -0.043998\nv -1.123802 -3.630760 -0.055999\nv -1.111802 -3.630760 -0.065847\nv -1.098110 -3.630760 -0.073166\nv -1.083254 -3.630760 -0.077672\nv -1.067804 -3.630760 -0.079194\nv -1.052355 -3.630760 -0.077672\nv -1.037498 -3.630760 -0.073166\nv -1.023807 -3.630760 -0.065847\nv -1.011806 -3.630760 -0.055999\nv -1.001958 -3.630760 -0.043998\nv -0.994640 -3.630760 -0.030307\nv -0.990133 -3.630760 -0.015451\nv -0.988611 -3.630760 -0.000001\nv -0.138168 -3.630760 0.000230\nv -0.377939 -3.630760 0.236647\nv -1.030627 -3.630760 0.232049\nv -1.030627 -3.691696 0.232049\nv -0.377939 -3.691696 0.236647\nv 0.393913 -3.691696 0.208980\nv 0.716354 -3.691696 0.776664\nv 0.735403 -3.691696 0.819506\nv 0.745728 -3.691696 0.865240\nv 0.746932 -3.691696 0.912111\nv 0.738969 -3.691696 0.958315\nv 0.594980 -3.691696 0.916106\nv 0.593459 -3.691696 0.900657\nv 0.588952 -3.691696 0.885800\nv 0.581634 -3.691696 0.872109\nv 0.571785 -3.691696 0.860108\nv 0.559785 -3.691696 0.850260\nv 0.546093 -3.691696 0.842941\nv 0.531237 -3.691696 0.838435\nv 0.515787 -3.691696 0.836913\nv 0.500338 -3.691696 0.838435\nv 0.485482 -3.691696 0.842941\nv 0.471790 -3.691696 0.850260\nv 0.459790 -3.691696 0.860108\nv 0.449941 -3.691696 0.872109\nv 0.442623 -3.691696 0.885800\nv 0.438116 -3.691696 0.900656\nv 0.436594 -3.691696 0.916106\nv 0.641705 -3.691696 -1.093984\nv 0.641705 -3.630760 -1.093984\nv 0.642038 -3.630760 -1.093788\nv 0.642038 -3.691696 -1.093788\nv 0.393913 -3.630760 0.208980\nv 0.716355 -3.630759 0.776664\nv -0.136473 -3.691696 -0.240273\nv -1.268268 -3.691696 -0.008963\nv -1.268268 -3.630760 -0.008963\nv -1.268268 -3.630760 -0.008907\nv -1.268268 -3.691696 -0.008907\nv -0.139845 -3.630760 0.238324\nv 0.664815 -3.691696 1.075712\nv 0.664815 -3.630760 1.075712\nv 0.697106 -3.691696 1.041718\nv 0.697106 -3.630760 1.041718\nv 0.722144 -3.691696 1.002078\nv 0.722145 -3.630759 1.002078\nv 0.738969 -3.630759 0.958315\nv 0.746932 -3.630759 0.912111\nv 0.745728 -3.630759 0.865240\nv 0.735403 -3.630759 0.819506\nv 0.583438 -3.630760 1.121933\nv 0.583438 -3.691696 1.121933\nv 0.537704 -3.630760 1.132258\nv 0.537704 -3.691696 1.132258\nv 0.490833 -3.630760 1.133462\nv 0.490833 -3.691696 1.133462\nv 0.444629 -3.630760 1.125499\nv 0.444629 -3.691696 1.125499\nv 0.400866 -3.630760 1.108674\nv 0.400866 -3.691696 1.108674\nv 0.361226 -3.630760 1.083636\nv 0.361226 -3.691696 1.083636\nv 0.327232 -3.630760 1.051345\nv 0.327232 -3.691696 1.051345\nv 0.746901 -3.630759 -0.809106\nv 0.757867 -3.630759 -0.854680\nv 0.759730 -3.630759 -0.901517\nv 0.752421 -3.630759 -0.947817\nv 0.622012 -3.630759 -0.919779\nv 0.620490 -3.630759 -0.904329\nv 0.615984 -3.630759 -0.889473\nv 0.608665 -3.630759 -0.875782\nv 0.598817 -3.630759 -0.863781\nv 0.586816 -3.630759 -0.853932\nv 0.573125 -3.630759 -0.846614\nv 0.558268 -3.630759 -0.842107\nv 0.542819 -3.630759 -0.840586\nv 0.527369 -3.630759 -0.842107\nv 0.512513 -3.630759 -0.846614\nv 0.498822 -3.630759 -0.853932\nv 0.486821 -3.630759 -0.863781\nv 0.476972 -3.630759 -0.875782\nv 0.469654 -3.630759 -0.889473\nv 0.465148 -3.630759 -0.904329\nv 0.463626 -3.630759 -0.919779\nv -1.263998 -3.691696 0.037759\nv -1.263998 -3.630760 0.037759\nv -1.250695 -3.691696 0.082751\nv -1.250695 -3.630760 0.082751\nv -1.228870 -3.691696 0.124283\nv -1.228870 -3.630760 0.124284\nv -1.199363 -3.691696 0.160760\nv -1.199363 -3.630760 0.160760\nv -1.163306 -3.691696 0.190779\nv -1.163306 -3.630760 0.190779\nv -1.122085 -3.691696 0.213186\nv -1.122085 -3.630760 0.213186\nv -1.077285 -3.691696 0.227122\nv -1.077285 -3.630760 0.227122\nv 0.067189 -3.630760 0.120730\nv 0.069284 -3.630760 0.119540\nv 0.599146 -3.691696 -1.113629\nv 0.599146 -3.630760 -1.113629\nv 0.553573 -3.691696 -1.124594\nv 0.553573 -3.630760 -1.124595\nv 0.506736 -3.691696 -1.126458\nv 0.506736 -3.630760 -1.126458\nv 0.460435 -3.691696 -1.119149\nv 0.460435 -3.630760 -1.119149\nv 0.416451 -3.691696 -1.102947\nv 0.416451 -3.630760 -1.102947\nv 0.376472 -3.691696 -1.078475\nv 0.376472 -3.630760 -1.078475\nv 0.342035 -3.691696 -1.046674\nv 0.342035 -3.630760 -1.046674\nv 0.679946 -3.630760 -1.066217\nv 0.679946 -3.691696 -1.066217\nv 0.711747 -3.630760 -1.031781\nv 0.711747 -3.691696 -1.031781\nv 0.736219 -3.630759 -0.991802\nv 0.736219 -3.691696 -0.991802\nv -0.329229 -3.630760 0.240952\nv -0.277873 -3.630760 0.253049\nv -0.225843 -3.630760 0.272470\nv -0.175138 -3.630760 0.298472\nv -0.127709 -3.630760 0.330054\nv -0.085376 -3.630760 0.366002\nv -0.049767 -3.630760 0.404936\nv 0.373286 -3.630760 0.164643\nv 0.358084 -3.630760 0.114119\nv 0.348888 -3.630760 0.059349\nv 0.346054 -3.630760 0.002437\nv 0.349690 -3.630760 -0.054430\nv 0.359656 -3.630760 -0.109065\nv 0.375569 -3.630760 -0.159370\nv 0.375569 -3.691696 -0.159370\nv 0.359656 -3.691696 -0.109065\nv 0.349690 -3.691696 -0.054430\nv 0.346054 -3.691696 0.002437\nv 0.348888 -3.691696 0.059349\nv 0.358084 -3.691696 0.114119\nv 0.373286 -3.691696 0.164643\nv -0.049767 -3.691696 0.404936\nv -0.085376 -3.691696 0.366002\nv -0.127709 -3.691696 0.330054\nv -0.175138 -3.691696 0.298472\nv -0.225843 -3.691696 0.272470\nv -0.277873 -3.691696 0.253049\nv -0.329229 -3.691696 0.240952\nv -0.325802 -3.691696 -0.245569\nv -0.274280 -3.691696 -0.256940\nv -0.221981 -3.691696 -0.275627\nv -0.170916 -3.691696 -0.300912\nv -0.123046 -3.691696 -0.331822\nv -0.080211 -3.691696 -0.367171\nv -0.044057 -3.691696 -0.405599\nv -0.044057 -3.630760 -0.405599\nv -0.080211 -3.630760 -0.367171\nv -0.123046 -3.630760 -0.331822\nv -0.170916 -3.630760 -0.300912\nv -0.221981 -3.630760 -0.275627\nv -0.274280 -3.630760 -0.256940\nv -0.325802 -3.630760 -0.245569\nv 0.436594 -3.630760 0.916106\nv 0.438116 -3.630760 0.900656\nv 0.442623 -3.630759 0.885800\nv 0.449941 -3.630759 0.872109\nv 0.459790 -3.630759 0.860108\nv 0.471790 -3.630759 0.850260\nv 0.485482 -3.630759 0.842941\nv 0.500338 -3.630759 0.838435\nv 0.515787 -3.630759 0.836913\nv 0.531237 -3.630759 0.838435\nv 0.546093 -3.630759 0.842941\nv 0.559785 -3.630759 0.850260\nv 0.571785 -3.630759 0.860108\nv 0.581634 -3.630759 0.872109\nv 0.588952 -3.630759 0.885800\nv 0.593459 -3.630759 0.900657\nv 0.594980 -3.630759 0.916106\nv -0.013844 -3.558785 0.078780\nv 0.001605 -3.558785 0.080301\nv 0.017055 -3.558785 0.078780\nv 0.031911 -3.558785 0.074273\nv 0.045603 -3.558785 0.066955\nv 0.057603 -3.558785 0.057106\nv 0.067452 -3.558785 0.045106\nv 0.074770 -3.558785 0.031414\nv 0.079277 -3.558785 0.016558\nv 0.080798 -3.558785 0.001108\nv 0.043831 -3.558785 -0.000001\nv 0.042989 -3.558785 0.008550\nv 0.040495 -3.558785 0.016773\nv 0.036444 -3.558785 0.024350\nv 0.030993 -3.558785 0.030993\nv 0.024351 -3.558785 0.036444\nv 0.016773 -3.558785 0.040494\nv 0.008551 -3.558785 0.042988\nv 0.000000 -3.558785 0.043830\nv -0.008551 -3.558785 0.042988\nv -0.016774 -3.558785 0.040494\nv -0.024351 -3.558785 0.036443\nv -0.030993 -3.558785 0.030992\nv -0.036444 -3.558785 0.024350\nv -0.040495 -3.558785 0.016773\nv -0.042989 -3.558785 0.008550\nv -0.043831 -3.558785 -0.000001\nv -0.077588 -3.558785 0.001108\nv -0.076066 -3.558785 0.016558\nv -0.071559 -3.558785 0.031414\nv -0.064241 -3.558785 0.045106\nv -0.054393 -3.558785 0.057106\nv -0.042392 -3.558785 0.066955\nv -0.028700 -3.558785 0.074273\nv 0.000000 -0.257559 0.043831\nv -0.008551 -0.257559 0.042989\nv -0.016774 -0.257559 0.040495\nv -0.024351 -0.257559 0.036444\nv -0.030993 -0.257559 0.030993\nv -0.036444 -0.257559 0.024351\nv -0.040495 -0.257559 0.016774\nv -0.042989 -0.257559 0.008551\nv -0.043831 -0.257559 -0.000000\nv -0.042989 -0.257559 -0.008551\nv -0.042989 -3.558785 -0.008552\nv -0.040495 -0.257559 -0.016773\nv -0.040495 -3.558785 -0.016774\nv -0.036444 -0.257559 -0.024351\nv -0.036444 -3.558785 -0.024352\nv -0.030993 -0.257559 -0.030993\nv -0.030993 -3.558785 -0.030994\nv -0.024351 -0.257559 -0.036444\nv -0.024351 -3.558785 -0.036445\nv -0.016774 -0.257559 -0.040495\nv -0.016774 -3.558785 -0.040496\nv -0.008551 -0.257559 -0.042989\nv -0.008551 -3.558785 -0.042990\nv 0.000000 -0.257559 -0.043831\nv 0.000000 -3.558785 -0.043832\nv 0.008551 -0.257559 -0.042989\nv 0.008551 -3.558785 -0.042990\nv 0.016774 -0.257559 -0.040495\nv 0.016774 -3.558785 -0.040496\nv 0.024351 -0.257559 -0.036444\nv 0.024351 -3.558785 -0.036445\nv 0.030993 -0.257559 -0.030993\nv 0.030993 -3.558785 -0.030994\nv 0.036444 -0.257559 -0.024351\nv 0.036444 -3.558785 -0.024352\nv 0.040495 -0.257559 -0.016773\nv 0.040495 -3.558785 -0.016774\nv 0.042989 -0.257559 -0.008551\nv 0.042989 -3.558785 -0.008552\nv 0.043831 -0.257559 -0.000000\nv 0.042989 -0.257559 0.008551\nv 0.040495 -0.257559 0.016774\nv 0.036444 -0.257559 0.024351\nv 0.030993 -0.257559 0.030994\nv 0.024351 -0.257559 0.036445\nv 0.016773 -0.257559 0.040495\nv 0.008551 -0.257559 0.042989\nv 0.079277 -3.558785 -0.014341\nv 0.074770 -3.558785 -0.029197\nv 0.067452 -3.558785 -0.042889\nv 0.057603 -3.558785 -0.054890\nv 0.045603 -3.558785 -0.064738\nv 0.031911 -3.558785 -0.072056\nv 0.017055 -3.558785 -0.076563\nv 0.001605 -3.558785 -0.078085\nv -0.013844 -3.558785 -0.076563\nv -0.028700 -3.558785 -0.072056\nv -0.042392 -3.558785 -0.064738\nv -0.054393 -3.558785 -0.054890\nv -0.064241 -3.558785 -0.042889\nv -0.071559 -3.558785 -0.029198\nv -0.076066 -3.558785 -0.014341\nv -0.028700 -3.630760 -0.072056\nv -0.013844 -3.630760 -0.076563\nv -0.076066 -3.630760 -0.014341\nv -0.071559 -3.630760 -0.029198\nv -0.064241 -3.630760 -0.042889\nv -0.054393 -3.630760 -0.054890\nv -0.042392 -3.630760 -0.064738\nv 0.001605 -3.630760 -0.078085\nv 0.017055 -3.630760 -0.076563\nv 0.031911 -3.630760 -0.072056\nv 0.045603 -3.630760 -0.064738\nv 0.057603 -3.630760 -0.054890\nv 0.067452 -3.630760 -0.042889\nv 0.074770 -3.630760 -0.029197\nv 0.079277 -3.630760 -0.014341\nv 0.515787 -3.757386 0.995299\nv 0.515787 -3.691696 0.995299\nv 0.500338 -3.691696 0.993778\nv 0.500338 -3.757386 0.993778\nv 0.485482 -3.691696 0.989271\nv 0.485482 -3.757386 0.989271\nv 0.471790 -3.691696 0.981953\nv 0.471790 -3.757386 0.981953\nv 0.459790 -3.691696 0.972104\nv 0.459790 -3.757386 0.972104\nv 0.449941 -3.691696 0.960103\nv 0.449941 -3.757386 0.960103\nv 0.442623 -3.691696 0.946412\nv 0.442623 -3.757386 0.946412\nv 0.438116 -3.691696 0.931556\nv 0.438116 -3.757386 0.931556\nv 0.436594 -3.757386 0.916106\nv 0.438116 -3.757386 0.900656\nv 0.442623 -3.757386 0.885800\nv 0.449941 -3.757386 0.872109\nv 0.459790 -3.757386 0.860108\nv 0.471790 -3.757386 0.850260\nv 0.485482 -3.757386 0.842941\nv 0.500338 -3.757386 0.838435\nv 0.515787 -3.757386 0.836913\nv 0.531237 -3.757386 0.838435\nv 0.546093 -3.757386 0.842941\nv 0.559785 -3.757386 0.850260\nv 0.571785 -3.757386 0.860108\nv 0.581634 -3.757386 0.872109\nv 0.588952 -3.757386 0.885800\nv 0.593459 -3.757386 0.900657\nv 0.594980 -3.757386 0.916106\nv 0.593459 -3.691696 0.931556\nv 0.593459 -3.757386 0.931556\nv 0.588952 -3.691696 0.946412\nv 0.588952 -3.757386 0.946412\nv 0.581634 -3.691696 0.960104\nv 0.581634 -3.757386 0.960104\nv 0.571785 -3.691696 0.972104\nv 0.571785 -3.757386 0.972104\nv 0.559785 -3.691696 0.981953\nv 0.559785 -3.757386 0.981953\nv 0.546093 -3.691696 0.989271\nv 0.546093 -3.757386 0.989271\nv 0.500338 -3.613311 0.993778\nv 0.515787 -3.613311 0.995299\nv 0.531237 -3.613311 0.993778\nv 0.546093 -3.613311 0.989271\nv 0.559785 -3.613311 0.981953\nv 0.571785 -3.613311 0.972104\nv 0.581634 -3.613311 0.960104\nv 0.588952 -3.613311 0.946412\nv 0.593459 -3.613311 0.931556\nv 0.594980 -3.613311 0.916106\nv 0.593459 -3.613311 0.900657\nv 0.588952 -3.613311 0.885800\nv 0.581634 -3.613311 0.872109\nv 0.571785 -3.613311 0.860108\nv 0.559785 -3.613311 0.850260\nv 0.546093 -3.613311 0.842941\nv 0.531237 -3.613311 0.838435\nv 0.515787 -3.613311 0.836913\nv 0.500338 -3.613311 0.838435\nv 0.485482 -3.613311 0.842941\nv 0.471790 -3.613311 0.850260\nv 0.459790 -3.613311 0.860108\nv 0.449941 -3.613311 0.872109\nv 0.442623 -3.613311 0.885800\nv 0.438116 -3.613311 0.900656\nv 0.436594 -3.613311 0.916106\nv 0.438116 -3.613311 0.931556\nv 0.442623 -3.613311 0.946412\nv 0.449941 -3.613311 0.960103\nv 0.459790 -3.613311 0.972104\nv 0.471790 -3.613311 0.981953\nv 0.485482 -3.613311 0.989271\nv 0.531237 -3.691696 0.993778\nv 0.531237 -3.757386 0.993778\nv 0.438116 -3.630760 0.931556\nv 0.442623 -3.630760 0.946412\nv 0.449941 -3.630760 0.960103\nv 0.471790 -3.630760 0.981953\nv 0.485482 -3.630760 0.989271\nv 0.500338 -3.630760 0.993778\nv 0.459790 -3.630760 0.972104\nv 0.588952 -3.630759 0.946412\nv 0.593459 -3.630759 0.931556\nv 0.531237 -3.630760 0.993778\nv 0.546093 -3.630760 0.989271\nv 0.581634 -3.630759 0.960104\nv 0.515787 -3.630760 0.995299\nv 0.571785 -3.630760 0.972104\nv 0.559785 -3.630760 0.981953\nv -0.990133 -3.630760 0.015449\nv -1.145476 -3.630760 0.015449\nv -1.140969 -3.630760 0.030305\nv -1.133651 -3.630760 0.043996\nv -1.123802 -3.630760 0.055997\nv -1.067804 -3.630760 0.079192\nv -1.052355 -3.630760 0.077670\nv -1.001958 -3.630760 0.043996\nv -0.994640 -3.630760 0.030305\nv -1.037499 -3.630760 0.073164\nv -1.111802 -3.630760 0.065846\nv -1.098110 -3.630760 0.073164\nv -1.023807 -3.630760 0.065846\nv -1.011806 -3.630760 0.055997\nv -1.083254 -3.630760 0.077670\nv 0.465147 -3.630759 -0.935228\nv 0.476972 -3.630760 -0.963776\nv 0.469654 -3.630759 -0.950085\nv 0.486821 -3.630760 -0.975777\nv 0.558269 -3.630760 -0.997450\nv 0.542819 -3.630760 -0.998972\nv 0.527369 -3.630760 -0.997450\nv 0.586816 -3.630760 -0.985625\nv 0.573125 -3.630760 -0.992944\nv 0.498822 -3.630760 -0.985625\nv 0.512513 -3.630760 -0.992944\nv 0.598817 -3.630760 -0.975777\nv 0.608665 -3.630759 -0.963776\nv 0.615984 -3.630759 -0.950085\nv 0.620490 -3.630759 -0.935228\nvt 0.852508 0.075379\nvt 0.895363 0.074975\nvt 0.894507 0.079947\nvt 0.855079 0.062360\nvt 0.897143 0.070302\nvt 0.860140 0.050091\nvt 0.899822 0.066088\nvt 0.867502 0.039049\nvt 0.903263 0.062497\nvt 0.876882 0.029664\nvt 0.907356 0.059670\nvt 0.887917 0.022299\nvt 0.911946 0.057717\nvt 0.900176 0.017235\nvt 0.916856 0.056716\nvt 0.913185 0.014656\nvt 0.921870 0.056577\nvt 0.926451 0.014656\nvt 0.926802 0.057447\nvt 0.939462 0.017246\nvt 0.931444 0.059243\nvt 0.962733 0.029717\nvt 0.935628 0.061934\nvt 0.939196 0.065391\nvt 0.972088 0.039117\nvt 0.941999 0.069499\nvt 0.979420 0.050165\nvt 0.943927 0.074102\nvt 0.984455 0.062430\nvt 0.944902 0.079026\nvt 0.987011 0.075440\nvt 0.945036 0.084072\nvt 0.986997 0.088705\nvt 0.944162 0.089024\nvt 0.984403 0.101718\nvt 0.942315 0.093695\nvt 0.979323 0.113977\nvt 0.939563 0.097905\nvt 0.971957 0.125012\nvt 0.936123 0.101556\nvt 0.962584 0.134406\nvt 0.932039 0.104435\nvt 0.951559 0.141788\nvt 0.927468 0.106432\nvt 0.939306 0.146872\nvt 0.922585 0.107471\nvt 0.926299 0.149463\nvt 0.917606 0.107603\nvt 0.913036 0.149463\nvt 0.912717 0.106739\nvt 0.900032 0.146865\nvt 0.908106 0.104914\nvt 0.887793 0.141768\nvt 0.903953 0.102197\nvt 0.876790 0.134373\nvt 0.900376 0.098717\nvt 0.867444 0.124968\nvt 0.897570 0.094586\nvt 0.860117 0.113918\nvt 0.895641 0.089957\nvt 0.941275 0.235965\nvt 0.899536 0.201620\nvt 0.934277 0.160246\nvt 0.855080 0.101653\nvt 0.894669 0.085002\nvt 0.852513 0.088645\nvt 0.849803 0.236505\nvt 0.807747 0.228562\nvt 0.809527 0.223885\nvt 0.844751 0.248771\nvt 0.805068 0.232781\nvt 0.837399 0.259816\nvt 0.801597 0.236382\nvt 0.828029 0.269211\nvt 0.797519 0.239240\nvt 0.817002 0.276591\nvt 0.792951 0.241220\nvt 0.804744 0.281669\nvt 0.788067 0.242246\nvt 0.791732 0.284254\nvt 0.783052 0.242274\nvt 0.778467 0.284254\nvt 0.778103 0.241432\nvt 0.765451 0.281672\nvt 0.773430 0.239615\nvt 0.753188 0.276600\nvt 0.769220 0.236945\nvt 0.742154 0.269229\nvt 0.765634 0.233485\nvt 0.732779 0.259840\nvt 0.762801 0.229390\nvt 0.725425 0.248800\nvt 0.760847 0.224804\nvt 0.720374 0.236538\nvt 0.759848 0.219900\nvt 0.717810 0.223531\nvt 0.759850 0.214862\nvt 0.717815 0.210275\nvt 0.760664 0.209891\nvt 0.720387 0.197265\nvt 0.762444 0.205208\nvt 0.725441 0.185002\nvt 0.765119 0.200991\nvt 0.732794 0.173961\nvt 0.768587 0.197398\nvt 0.753187 0.157195\nvt 0.772666 0.194538\nvt 0.777237 0.192556\nvt 0.765440 0.152118\nvt 0.782124 0.191529\nvt 0.778446 0.149534\nvt 0.787140 0.191499\nvt 0.791706 0.149531\nvt 0.792081 0.192329\nvt 0.804717 0.152108\nvt 0.796735 0.194122\nvt 0.816974 0.157177\nvt 0.800928 0.196808\nvt 0.828003 0.164546\nvt 0.804496 0.200282\nvt 0.837376 0.173931\nvt 0.807348 0.204394\nvt 0.844734 0.184968\nvt 0.809320 0.208992\nvt 0.849794 0.197228\nvt 0.810330 0.213901\nvt 0.665851 0.101846\nvt 0.631562 0.059682\nvt 0.673565 0.025112\nvt 0.852366 0.210236\nvt 0.810333 0.218931\nvt 0.852368 0.223493\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt 0.120498 0.412208\nvt 0.118674 0.417659\nvt 0.062220 0.428460\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt 0.187744 0.428460\nvt 0.303944 0.335918\nvt 0.303944 0.521001\nvt -0.449557 -0.440256\nvt 0.871056 0.797024\nvt 0.871054 0.862460\nvt 0.871055 0.829577\nvt 0.605419 0.795835\nvt 0.540676 0.826330\nvt 0.539993 0.824290\nvt 0.332049 0.588412\nvt 0.313269 0.335918\nvt 0.332049 0.335918\nvt -0.449557 -0.440256\nvt 0.416362 0.588389\nvt 0.397582 0.335918\nvt 0.416362 0.335918\nvt 0.341373 0.335918\nvt 0.360153 0.588412\nvt 0.341373 0.588412\nvt 0.544734 0.521000\nvt 0.544734 0.428925\nvt 0.544734 0.427993\nvt 0.696610 0.972937\nvt 0.697999 0.974110\nvt 0.692405 0.992936\nvt 0.208421 0.533864\nvt 0.208496 0.559769\nvt 0.208421 0.559769\nvt 0.930900 0.700277\nvt 0.930540 0.702340\nvt 0.915205 0.691550\nvt 0.425687 0.335918\nvt 0.444467 0.588326\nvt 0.425687 0.588326\nvt 0.693261 0.704760\nvt 0.694220 0.706578\nvt 0.642900 0.765983\nvt 0.199096 0.559769\nvt 0.198988 0.533864\nvt 0.199096 0.533864\nvt 0.369478 0.588389\nvt 0.388258 0.335918\nvt 0.388258 0.588389\nvt 0.535409 0.521001\nvt 0.535409 0.428926\nvt 0.535409 0.427994\nvt -0.449557 -0.440256\nvt 0.217820 0.533864\nvt 0.217836 0.559769\nvt 0.217820 0.559769\nvt 0.554059 0.520999\nvt 0.554059 0.427993\nvt 0.554059 0.428924\nvt 0.563383 0.490989\nvt 0.576527 0.516894\nvt 0.563383 0.516894\nvt 0.781045 0.478127\nvt 0.767901 0.452221\nvt 0.781045 0.452221\nvt 0.736090 0.452222\nvt 0.722946 0.478127\nvt 0.722946 0.452221\nvt 0.745423 0.478127\nvt 0.758567 0.452221\nvt 0.758567 0.478127\nvt 0.599004 0.516895\nvt 0.585861 0.490989\nvt 0.599004 0.490989\nvt 0.655522 0.452221\nvt 0.668666 0.478127\nvt 0.655522 0.478127\nvt 0.700468 0.452221\nvt 0.713612 0.478127\nvt 0.700468 0.478127\nvt 0.621471 0.516895\nvt 0.608329 0.490989\nvt 0.621471 0.490989\nvt 0.808822 0.374686\nvt 0.821966 0.400591\nvt 0.808822 0.400591\nvt 0.504374 0.487271\nvt 0.517518 0.513176\nvt 0.504374 0.513176\nvt 0.826000 0.439359\nvt 0.812856 0.413454\nvt 0.826000 0.413454\nvt 0.481896 0.487271\nvt 0.495040 0.513176\nvt 0.481896 0.513176\nvt 0.790378 0.452221\nvt 0.803522 0.478127\nvt 0.790378 0.478127\nvt 0.825991 0.478127\nvt 0.812847 0.452221\nvt 0.825991 0.452221\nvt 0.822844 0.361823\nvt 0.809700 0.335918\nvt 0.822844 0.335918\nvt 0.643938 0.516894\nvt 0.630796 0.490989\nvt 0.643938 0.490989\nvt 0.785662 0.835584\nvt 0.786307 0.833657\nvt 0.847455 0.862459\nvt 0.700468 0.413454\nvt 0.713621 0.439359\nvt 0.700468 0.439359\nvt 0.563383 0.452221\nvt 0.576536 0.478127\nvt 0.563383 0.478127\nvt 0.790378 0.439359\nvt 0.803531 0.413454\nvt 0.803531 0.439359\nvt 0.767901 0.439359\nvt 0.781054 0.413454\nvt 0.781054 0.439359\nvt 0.586416 0.452221\nvt 0.599569 0.478127\nvt 0.586416 0.478127\nvt 0.517527 0.474408\nvt 0.504374 0.448503\nvt 0.517527 0.448503\nvt 0.691143 0.439359\nvt 0.677990 0.413454\nvt 0.691143 0.413454\nvt 0.644524 0.478127\nvt 0.631371 0.452221\nvt 0.644524 0.452221\nvt 0.787223 0.335918\nvt 0.800376 0.361823\nvt 0.787223 0.361823\nvt 0.736099 0.439359\nvt 0.722946 0.413454\nvt 0.736099 0.413454\nvt 0.668666 0.439359\nvt 0.655513 0.413454\nvt 0.668666 0.413454\nvt 0.758576 0.439359\nvt 0.745423 0.413454\nvt 0.758576 0.413454\nvt 0.691143 0.478127\nvt 0.677990 0.452221\nvt 0.691143 0.452221\nvt 0.786344 0.374686\nvt 0.799497 0.400591\nvt 0.786344 0.400591\nvt 0.481896 0.448503\nvt 0.495049 0.474408\nvt 0.481896 0.474408\nvt 0.608894 0.452221\nvt 0.622047 0.478127\nvt 0.608894 0.478127\nvt 0.554059 0.474918\nvt 0.554059 0.429299\nvt 0.495037 0.551944\nvt 0.481896 0.526038\nvt 0.495037 0.526038\nvt 0.767901 0.516895\nvt 0.781041 0.490989\nvt 0.781041 0.516894\nvt 0.825988 0.516894\nvt 0.812847 0.490989\nvt 0.825988 0.490989\nvt 0.848465 0.439359\nvt 0.835324 0.413454\nvt 0.848465 0.413454\nvt 0.803510 0.516894\nvt 0.790369 0.490989\nvt 0.803510 0.490989\nvt 0.831290 0.374686\nvt 0.844431 0.400591\nvt 0.831290 0.400591\nvt 0.845310 0.361823\nvt 0.832169 0.335918\nvt 0.845310 0.335918\nvt 0.848453 0.516894\nvt 0.835312 0.490989\nvt 0.848453 0.490989\nvt 0.758525 0.516895\nvt 0.745384 0.490989\nvt 0.758525 0.490989\nvt 0.835315 0.452221\nvt 0.848456 0.478127\nvt 0.835315 0.478127\nvt 0.722918 0.490989\nvt 0.736059 0.516895\nvt 0.722918 0.516895\nvt 0.655522 0.490989\nvt 0.668663 0.516895\nvt 0.655522 0.516895\nvt 0.517505 0.551944\nvt 0.504365 0.526038\nvt 0.517505 0.526038\nvt 0.700453 0.490989\nvt 0.713594 0.516895\nvt 0.700453 0.516895\nvt 0.691128 0.516895\nvt 0.677987 0.490989\nvt 0.691128 0.490989\nvt 0.563383 0.529757\nvt 0.576522 0.555662\nvt 0.563383 0.555662\nvt 0.472571 0.588326\nvt 0.453791 0.335918\nvt 0.472571 0.335918\nvt 0.919049 0.829744\nvt 0.919370 0.837522\nvt 0.912137 0.829744\nvt 0.867598 0.870717\nvt 0.862554 0.867211\nvt 0.871054 0.862460\nvt 0.626747 0.787091\nvt 0.631748 0.782567\nvt 0.630407 0.795834\nvt 0.681224 0.830474\nvt 0.681564 0.838709\nvt 0.673906 0.830474\nvt 0.626749 0.873861\nvt 0.621409 0.870149\nvt 0.630408 0.865118\nvt 0.867600 0.788766\nvt 0.872323 0.784494\nvt 0.871056 0.797024\nvt 0.506011 0.409735\nvt 0.519720 0.435640\nvt 0.506011 0.435640\nvt 0.740073 0.335918\nvt 0.754865 0.361823\nvt 0.740073 0.361823\nvt 0.613171 0.374686\nvt 0.628740 0.400591\nvt 0.613171 0.400591\nvt 0.604657 0.361823\nvt 0.588683 0.335918\nvt 0.604657 0.335918\nvt 0.563383 0.335918\nvt 0.579358 0.361823\nvt 0.563383 0.361823\nvt 0.563383 0.374686\nvt 0.578953 0.400591\nvt 0.563383 0.400591\nvt 0.713996 0.374686\nvt 0.728787 0.400591\nvt 0.713996 0.400591\nvt 0.632482 0.413454\nvt 0.646188 0.439359\nvt 0.632482 0.439359\nvt 0.777898 0.361823\nvt 0.764189 0.335918\nvt 0.777898 0.335918\nvt 0.777020 0.400591\nvt 0.762228 0.374686\nvt 0.777020 0.374686\nvt 0.730749 0.361823\nvt 0.715179 0.335918\nvt 0.730749 0.335918\nvt 0.705855 0.361823\nvt 0.689880 0.335918\nvt 0.705855 0.335918\nvt 0.680555 0.361823\nvt 0.664581 0.335918\nvt 0.680555 0.335918\nvt 0.603847 0.400591\nvt 0.588277 0.374686\nvt 0.603847 0.374686\nvt 0.496686 0.435640\nvt 0.481896 0.409735\nvt 0.496686 0.409735\nvt 0.600125 0.439359\nvt 0.586416 0.413454\nvt 0.600125 0.413454\nvt 0.623157 0.439359\nvt 0.609450 0.413454\nvt 0.623157 0.413454\nvt 0.704671 0.400591\nvt 0.689880 0.374686\nvt 0.704671 0.374686\nvt 0.638065 0.374686\nvt 0.653633 0.400591\nvt 0.638065 0.400591\nvt 0.655256 0.361823\nvt 0.639281 0.335918\nvt 0.655256 0.335918\nvt 0.629957 0.361823\nvt 0.613982 0.335918\nvt 0.629957 0.335918\nvt 0.680149 0.400591\nvt 0.664581 0.374686\nvt 0.680149 0.374686\nvt 0.738112 0.374686\nvt 0.752904 0.400591\nvt 0.738112 0.400591\nvt 0.577092 0.439359\nvt 0.563383 0.413454\nvt 0.577092 0.413454\nvt 0.882853 0.890653\nvt 0.931323 0.946759\nvt 0.930418 0.948475\nvt 0.494978 0.377494\nvt 0.496682 0.379843\nvt 0.489906 0.390069\nvt 0.188413 0.633487\nvt 0.177573 0.980391\nvt 0.177573 0.633487\nvt 0.145051 0.980391\nvt 0.155891 0.633487\nvt 0.155891 0.980391\nvt 0.199254 0.633487\nvt 0.188414 0.980391\nvt 0.188414 0.633487\nvt 0.069165 0.980391\nvt 0.080005 0.633487\nvt 0.080006 0.980391\nvt 0.101687 0.980391\nvt 0.112528 0.633487\nvt 0.112528 0.980391\nvt 0.025801 0.980391\nvt 0.036641 0.633487\nvt 0.036641 0.980391\nvt 0.231777 0.980391\nvt 0.242617 0.633487\nvt 0.242617 0.980391\nvt 0.253458 0.980391\nvt 0.264298 0.633487\nvt 0.264298 0.980391\nvt 0.058324 0.980391\nvt 0.069164 0.633487\nvt 0.069165 0.980391\nvt 0.134210 0.980391\nvt 0.145050 0.633487\nvt 0.145051 0.980391\nvt 0.318501 0.980391\nvt 0.329341 0.633487\nvt 0.329341 0.980391\nvt 0.036641 0.980391\nvt 0.047482 0.633487\nvt 0.047482 0.980391\nvt 0.275139 0.980391\nvt 0.285979 0.633487\nvt 0.285979 0.980391\nvt 0.285979 0.980391\nvt 0.296820 0.633487\nvt 0.296820 0.980391\nvt 0.329341 0.980391\nvt 0.340182 0.633487\nvt 0.340182 0.980391\nvt 0.123369 0.633487\nvt 0.112529 0.980391\nvt 0.112528 0.633487\nvt 0.307660 0.980391\nvt 0.318501 0.633487\nvt 0.318501 0.980391\nvt 0.351022 0.980391\nvt 0.361862 0.633487\nvt 0.361862 0.980391\nvt 0.090846 0.633487\nvt 0.080006 0.980391\nvt 0.080006 0.633487\nvt 0.090847 0.980391\nvt 0.101687 0.633487\nvt 0.101687 0.980391\nvt 0.047483 0.980391\nvt 0.058323 0.633487\nvt 0.058324 0.980391\nvt 0.210095 0.980391\nvt 0.220935 0.633487\nvt 0.220936 0.980391\nvt 0.264298 0.980391\nvt 0.275138 0.633487\nvt 0.275139 0.980391\nvt 0.123370 0.980391\nvt 0.134209 0.633487\nvt 0.134210 0.980391\nvt 0.242617 0.980391\nvt 0.253457 0.633487\nvt 0.253457 0.980391\nvt 0.220936 0.980391\nvt 0.231776 0.633487\nvt 0.231776 0.980391\nvt 0.155892 0.980391\nvt 0.166732 0.633487\nvt 0.166732 0.980391\nvt 0.166733 0.980391\nvt 0.177572 0.633487\nvt 0.177573 0.980391\nvt 0.340182 0.980391\nvt 0.351022 0.633487\nvt 0.351022 0.980391\nvt 0.307660 0.633487\nvt 0.296820 0.980391\nvt 0.296820 0.633487\nvt 0.199254 0.980391\nvt 0.210095 0.633487\nvt 0.210094 0.980391\nvt 0.025799 0.633487\nvt 0.014960 0.980391\nvt 0.014959 0.633487\nvt -5.312510 0.008164\nvt -5.312402 0.007914\nvt -5.312219 0.008503\nvt 0.512272 0.353638\nvt 0.510269 0.351792\nvt 0.518075 0.342722\nvt 0.171635 0.533864\nvt 0.175987 0.564462\nvt 0.171635 0.564462\nvt 0.714581 0.560355\nvt 0.710229 0.529757\nvt 0.714581 0.529757\nvt 0.617567 0.560355\nvt 0.613214 0.529757\nvt 0.617567 0.529757\nvt 0.178420 0.521001\nvt 0.158794 0.443206\nvt 0.160619 0.437755\nvt 0.813283 0.560355\nvt 0.808931 0.529757\nvt 0.813283 0.529757\nvt 0.590213 0.560355\nvt 0.585861 0.529757\nvt 0.590213 0.529757\nvt 0.822608 0.529757\nvt 0.826960 0.560355\nvt 0.822608 0.560355\nvt 0.857778 0.490989\nvt 0.862130 0.521587\nvt 0.857778 0.521587\nvt 0.655522 0.529757\nvt 0.659874 0.560355\nvt 0.655522 0.560355\nvt 0.093926 0.564462\nvt 0.089574 0.533864\nvt 0.093926 0.533864\nvt 0.162310 0.564462\nvt 0.157958 0.533864\nvt 0.162310 0.533864\nvt 0.631243 0.560355\nvt 0.626891 0.529757\nvt 0.631243 0.529757\nvt 0.185311 0.533864\nvt 0.189663 0.564462\nvt 0.185311 0.564462\nvt 0.741935 0.560355\nvt 0.737582 0.529757\nvt 0.741934 0.529757\nvt 0.858987 0.366516\nvt 0.854634 0.335918\nvt 0.858987 0.335918\nvt 0.144281 0.533864\nvt 0.148633 0.564462\nvt 0.144281 0.564462\nvt 0.121280 0.564462\nvt 0.116927 0.533864\nvt 0.121280 0.533864\nvt 0.772253 0.560355\nvt 0.767901 0.529757\nvt 0.772253 0.529757\nvt 0.103251 0.533864\nvt 0.107603 0.564462\nvt 0.103251 0.564462\nvt 0.682875 0.529757\nvt 0.687227 0.560355\nvt 0.682875 0.560355\nvt 0.781577 0.529757\nvt 0.785930 0.560355\nvt 0.781577 0.560355\nvt 0.644920 0.560355\nvt 0.640568 0.529757\nvt 0.644920 0.529757\nvt 0.723906 0.529757\nvt 0.728258 0.560355\nvt 0.723906 0.560355\nvt 0.755611 0.560355\nvt 0.751259 0.529757\nvt 0.755611 0.529757\nvt 0.795254 0.529757\nvt 0.799606 0.560355\nvt 0.795254 0.560355\nvt 0.066573 0.564462\nvt 0.062220 0.533864\nvt 0.066573 0.533864\nvt 0.669198 0.529757\nvt 0.673551 0.560355\nvt 0.669198 0.560355\nvt 0.080249 0.564462\nvt 0.075897 0.533864\nvt 0.080249 0.533864\nvt 0.134956 0.564462\nvt 0.130604 0.533864\nvt 0.134956 0.533864\nvt 0.836284 0.529757\nvt 0.840637 0.560355\nvt 0.836284 0.560355\nvt 0.696552 0.529757\nvt 0.700904 0.560355\nvt 0.696552 0.560355\nvt 0.599538 0.529757\nvt 0.603890 0.560355\nvt 0.599538 0.560355\nvt 0.862142 0.444052\nvt 0.857790 0.413454\nvt 0.862142 0.413454\nvt 0.804723 0.017239\nvt 0.796727 0.059245\nvt 0.792069 0.057446\nvt 0.816975 0.022309\nvt 0.800924 0.061933\nvt 0.828000 0.029678\nvt 0.804496 0.065411\nvt 0.837371 0.039060\nvt 0.807345 0.069514\nvt 0.844728 0.050094\nvt 0.809312 0.074108\nvt 0.849788 0.062352\nvt 0.810321 0.079020\nvt 0.852363 0.075358\nvt 0.810328 0.084066\nvt 0.852368 0.088617\nvt 0.809524 0.089019\nvt 0.849806 0.101630\nvt 0.807746 0.093696\nvt 0.844757 0.113898\nvt 0.805070 0.097915\nvt 0.837406 0.124946\nvt 0.801601 0.101516\nvt 0.828037 0.134344\nvt 0.797514 0.104379\nvt 0.817010 0.141727\nvt 0.792943 0.106363\nvt 0.804752 0.146807\nvt 0.788064 0.107391\nvt 0.791740 0.149392\nvt 0.783065 0.107417\nvt 0.778476 0.149392\nvt 0.778116 0.106575\nvt 0.765461 0.146810\nvt 0.773445 0.104758\nvt 0.753199 0.141739\nvt 0.769236 0.102088\nvt 0.742165 0.134367\nvt 0.765651 0.098628\nvt 0.732790 0.124978\nvt 0.762820 0.094532\nvt 0.725436 0.113937\nvt 0.760868 0.089947\nvt 0.720385 0.101673\nvt 0.759866 0.085038\nvt 0.717822 0.088662\nvt 0.759871 0.080009\nvt 0.717829 0.075403\nvt 0.760696 0.075028\nvt 0.720402 0.062390\nvt 0.762502 0.070326\nvt 0.725457 0.050122\nvt 0.765156 0.066094\nvt 0.732809 0.039075\nvt 0.768601 0.062488\nvt 0.742179 0.029681\nvt 0.772686 0.059634\nvt 0.753205 0.022306\nvt 0.777256 0.057658\nvt 0.765459 0.017234\nvt 0.782135 0.056637\nvt 0.934803 0.257349\nvt 0.976403 0.291870\nvt 0.941546 0.333221\nvt 0.778464 0.014656\nvt 0.787134 0.056618\nvt 0.791718 0.014659\nvt 0.718829 0.680385\nvt 0.707597 0.693156\nvt 0.706639 0.691339\nvt 0.969068 0.333394\nvt 0.967730 0.319962\nvt 0.975941 0.326667\nvt 0.987011 0.290804\nvt 0.975093 0.284445\nvt 0.985248 0.281361\nvt 0.914772 0.338394\nvt 0.926583 0.331870\nvt 0.923667 0.342035\nvt 0.952051 0.342129\nvt 0.956044 0.329242\nvt 0.960993 0.338614\nvt 0.899993 0.326200\nvt 0.913433 0.324785\nvt 0.906770 0.333041\nvt 0.969595 0.257567\nvt 0.956701 0.261611\nvt 0.961597 0.252204\nvt 0.981664 0.272438\nvt 0.968220 0.271179\nvt 0.976375 0.264399\nvt 0.981342 0.318707\nvt 0.974875 0.306838\nvt 0.985055 0.309839\nvt 0.972327 0.277461\nvt 0.889338 0.299766\nvt 0.901274 0.306107\nvt 0.891117 0.309212\nvt 0.889358 0.290191\nvt 0.899932 0.298656\nvt 0.933964 0.333302\nvt 0.933077 0.343844\nvt 0.962358 0.325195\nvt 0.894712 0.318147\nvt 0.908166 0.319430\nvt 0.949768 0.258722\nvt 0.952699 0.248545\nvt 0.943274 0.246719\nvt 0.933700 0.246721\nvt 0.942626 0.343844\nvt 0.986964 0.300410\nvt 0.900336 0.263967\nvt 0.904295 0.276865\nvt 0.894932 0.271922\nvt 0.927315 0.258651\nvt 0.924251 0.248470\nvt 0.901377 0.283763\nvt 0.891228 0.280785\nvt 0.943957 0.959435\nvt 0.944602 0.957508\nvt 0.957020 0.966053\nvt 0.962928 0.265835\nvt 0.942383 0.257278\nvt 0.971967 0.313767\nvt 0.976397 0.299446\nvt 0.904080 0.313120\nvt 0.915299 0.252017\nvt 0.913930 0.265459\nvt 0.907218 0.257243\nvt 0.949020 0.331961\nvt 0.908539 0.270683\nvt 0.920269 0.261419\nvt 0.919653 0.328993\nvt 0.899900 0.291116\nvt 0.692787 0.020024\nvt 0.680927 0.026583\nvt 0.683848 0.016418\nvt 0.665024 0.014731\nvt 0.658786 0.026469\nvt 0.655888 0.016549\nvt 0.674465 0.014656\nvt 0.666116 0.025040\nvt 0.646620 0.106916\nvt 0.658456 0.100403\nvt 0.655511 0.110586\nvt 0.707928 0.032324\nvt 0.694130 0.033795\nvt 0.700922 0.025379\nvt 0.687861 0.029512\nvt 0.716579 0.050196\nvt 0.703545 0.045689\nvt 0.713505 0.040715\nvt 0.707380 0.094589\nvt 0.703188 0.081941\nvt 0.712488 0.086584\nvt 0.626384 0.040330\nvt 0.632997 0.052230\nvt 0.622739 0.049295\nvt 0.664937 0.112438\nvt 0.673381 0.101904\nvt 0.674547 0.112438\nvt 0.631739 0.032224\nvt 0.635894 0.045235\nvt 0.700726 0.101438\nvt 0.699121 0.088146\nvt 0.709854 0.962216\nvt 0.711459 0.989478\nvt 0.711464 0.989474\nvt 0.717682 0.059533\nvt 0.706270 0.052749\nvt 0.620904 0.058766\nvt 0.631483 0.067261\nvt 0.620897 0.068415\nvt 0.717531 0.068690\nvt 0.707520 0.060172\nvt 0.646780 0.019756\nvt 0.651893 0.029360\nvt 0.683966 0.110545\nvt 0.687679 0.097606\nvt 0.692813 0.106833\nvt 0.947609 0.679575\nvt 0.947605 0.679571\nvt 0.957019 0.693437\nvt 0.638612 0.025287\nvt 0.645584 0.033615\nvt 0.632910 0.074664\nvt 0.622783 0.077872\nvt 0.626497 0.086756\nvt 0.640024 0.087886\nvt 0.631854 0.094732\nvt 0.705929 0.075052\nvt 0.715868 0.077807\nvt 0.699434 0.039277\nvt 0.638630 0.101555\nvt 0.651519 0.097512\nvt 0.693878 0.093437\nvt 0.707243 0.067687\nvt 0.645293 0.093290\nvt 0.640139 0.038945\nvt 0.680757 0.100450\nvt 0.635789 0.081623\nvt 0.890820 0.183733\nvt 0.899507 0.194059\nvt 0.888958 0.193144\nvt 0.888948 0.202729\nvt 0.900875 0.209050\nvt 0.890738 0.212158\nvt 0.903652 0.216019\nvt 0.894344 0.221060\nvt 0.985062 0.213332\nvt 0.976255 0.202628\nvt 0.987011 0.203649\nvt 0.899900 0.166902\nvt 0.903886 0.179793\nvt 0.894512 0.174865\nvt 0.900976 0.186697\nvt 0.914825 0.154894\nvt 0.913503 0.168340\nvt 0.906761 0.160151\nvt 0.961199 0.155260\nvt 0.949301 0.161734\nvt 0.952299 0.151537\nvt 0.923343 0.244761\nvt 0.933662 0.236026\nvt 0.932768 0.246580\nvt 0.986986 0.193910\nvt 0.974893 0.187595\nvt 0.985097 0.184395\nvt 0.914453 0.241152\nvt 0.926240 0.234567\nvt 0.969189 0.160656\nvt 0.956250 0.164681\nvt 0.923770 0.151341\nvt 0.919813 0.164260\nvt 0.942337 0.246580\nvt 0.948746 0.234721\nvt 0.951747 0.244850\nvt 0.933228 0.149602\nvt 0.926823 0.161524\nvt 0.907762 0.222275\nvt 0.899650 0.229066\nvt 0.981388 0.175462\nvt 0.967867 0.174311\nvt 0.976005 0.167454\nvt 0.976287 0.195061\nvt 0.760844 0.817200\nvt 0.772123 0.824625\nvt 0.771478 0.826552\nvt 0.913046 0.227578\nvt 0.906445 0.235851\nvt 0.955772 0.232017\nvt 0.960631 0.241347\nvt 0.968612 0.236210\nvt 0.967460 0.222982\nvt 0.975375 0.229652\nvt 0.941894 0.160238\nvt 0.942848 0.149647\nvt 0.908129 0.173608\nvt 0.980715 0.222011\nvt 0.974709 0.209997\nvt 0.513716 0.843755\nvt 0.525657 0.835894\nvt 0.526616 0.837712\nvt 0.962486 0.168979\nvt 0.919283 0.231739\nvt 0.971740 0.216892\nvt 0.972050 0.180594\nvt 0.962083 0.228087\nvt 0.951715 0.022331\nvt 0.742163 0.164571\nvt 0.178420 0.335918\nvt 0.150882 0.401294\nvt 0.146931 0.398778\nvt 0.142699 0.397373\nvt 0.124891 0.450589\nvt 0.128410 0.454121\nvt 0.121938 0.446179\nvt 0.138350 0.397135\nvt 0.134051 0.398071\nvt 0.119666 0.441058\nvt 0.118161 0.435425\nvt 0.129967 0.400146\nvt 0.117483 0.429495\nvt 0.117656 0.423496\nvt 0.126255 0.403280\nvt 0.123058 0.407353\nvt 0.871055 0.829907\nvt 0.630407 0.830301\nvt 0.630407 0.830650\nvt 0.605421 0.865119\nvt 0.536900 0.865122\nvt 0.540305 0.835090\nvt 0.537032 0.839979\nvt 0.538349 0.838657\nvt 0.539454 0.837006\nvt 0.532003 0.796503\nvt 0.536898 0.795838\nvt 0.533310 0.818647\nvt 0.534920 0.818998\nvt 0.522957 0.801672\nvt 0.527295 0.798473\nvt 0.530098 0.819263\nvt 0.531682 0.818737\nvt 0.528619 0.820205\nvt 0.519155 0.805977\nvt 0.541122 0.830761\nvt 0.540868 0.832981\nvt 0.536448 0.819775\nvt 0.537838 0.820948\nvt 0.541057 0.828515\nvt 0.539035 0.822472\nvt 0.313268 0.588412\nvt 0.397582 0.588389\nvt 0.360153 0.335918\nvt 0.544734 0.521000\nvt 0.544734 0.335918\nvt 0.544734 0.335918\nvt 0.652047 0.847883\nvt 0.652266 0.847709\nvt 0.642903 0.894967\nvt 0.697416 0.953905\nvt 0.696099 0.955227\nvt 0.677154 0.976794\nvt 0.694993 0.956878\nvt 0.693391 0.965370\nvt 0.693772 0.967555\nvt 0.683615 0.986957\nvt 0.680022 0.982314\nvt 0.694455 0.969595\nvt 0.687797 0.990543\nvt 0.695413 0.971412\nvt 0.702184 0.993819\nvt 0.697263 0.994042\nvt 0.701138 0.975237\nvt 0.705829 0.973680\nvt 0.706979 0.992277\nvt 0.704350 0.974622\nvt 0.702766 0.975148\nvt 0.693326 0.963124\nvt 0.694143 0.958795\nvt 0.693580 0.960904\nvt 0.699528 0.974887\nvt 0.208496 0.533864\nvt 0.891700 0.813466\nvt 0.891493 0.813301\nvt 0.882856 0.768832\nvt 0.932054 0.710360\nvt 0.917913 0.686336\nvt 0.931545 0.698349\nvt 0.921308 0.681952\nvt 0.925257 0.678564\nvt 0.932450 0.696633\nvt 0.929609 0.676305\nvt 0.933580 0.695193\nvt 0.934197 0.675260\nvt 0.934893 0.694085\nvt 0.938845 0.675470\nvt 0.937857 0.693020\nvt 0.943374 0.676927\nvt 0.939394 0.693105\nvt 0.942287 0.694491\nvt 0.940890 0.693601\nvt 0.936337 0.693351\nvt 0.934342 0.713168\nvt 0.933098 0.711919\nvt 0.931250 0.708549\nvt 0.930719 0.706558\nvt 0.930479 0.704461\nvt 0.444467 0.335918\nvt 0.652266 0.813241\nvt 0.652047 0.813067\nvt 0.677155 0.684133\nvt 0.680021 0.678616\nvt 0.692949 0.693961\nvt 0.692132 0.698289\nvt 0.692386 0.696070\nvt 0.683612 0.673976\nvt 0.693800 0.692044\nvt 0.687790 0.670392\nvt 0.694905 0.690393\nvt 0.692395 0.668001\nvt 0.696223 0.689071\nvt 0.692197 0.700535\nvt 0.686399 0.800623\nvt 0.704635 0.708846\nvt 0.720654 0.718774\nvt 0.703156 0.709788\nvt 0.699944 0.710403\nvt 0.701572 0.710313\nvt 0.696806 0.709276\nvt 0.698335 0.710052\nvt 0.692578 0.702720\nvt 0.695417 0.708103\nvt 0.198988 0.559769\nvt 0.369478 0.335918\nvt 0.535409 0.521001\nvt 0.535409 0.335918\nvt 0.535409 0.335918\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt -0.449557 -0.440256\nvt 0.217836 0.533864\nvt 0.554059 0.335918\nvt 0.554059 0.335918\nvt 0.554059 0.520999\nvt 0.576527 0.490989\nvt 0.767901 0.478127\nvt 0.736090 0.478127\nvt 0.745423 0.452221\nvt 0.585861 0.516895\nvt 0.668666 0.452221\nvt 0.713612 0.452221\nvt 0.608329 0.516895\nvt 0.821966 0.374686\nvt 0.517518 0.487271\nvt 0.812856 0.439359\nvt 0.495040 0.487271\nvt 0.803522 0.452221\nvt 0.812847 0.478127\nvt 0.809700 0.361823\nvt 0.630796 0.516894\nvt 0.847456 0.797023\nvt 0.782739 0.862456\nvt 0.778116 0.861828\nvt 0.779350 0.840913\nvt 0.782314 0.839849\nvt 0.780870 0.840582\nvt 0.773670 0.859967\nvt 0.777813 0.840829\nvt 0.769572 0.856946\nvt 0.776317 0.840332\nvt 0.765981 0.852880\nvt 0.774920 0.839443\nvt 0.783627 0.838741\nvt 0.782865 0.820766\nvt 0.782741 0.797020\nvt 0.784109 0.822015\nvt 0.785957 0.825384\nvt 0.785153 0.823574\nvt 0.786728 0.829473\nvt 0.786488 0.827376\nvt 0.784757 0.837301\nvt 0.786667 0.831594\nvt 0.713621 0.413454\nvt 0.576536 0.452221\nvt 0.790378 0.413454\nvt 0.767901 0.413454\nvt 0.599569 0.452221\nvt 0.504374 0.474408\nvt 0.677990 0.439359\nvt 0.631371 0.478127\nvt 0.800376 0.335918\nvt 0.722946 0.439359\nvt 0.655513 0.439359\nvt 0.745423 0.439359\nvt 0.677990 0.478127\nvt 0.799497 0.374686\nvt 0.495049 0.448503\nvt 0.622047 0.452221\nvt 0.554059 0.475380\nvt 0.554059 0.429299\nvt 0.481896 0.551944\nvt 0.767901 0.490989\nvt 0.812847 0.516894\nvt 0.835324 0.439359\nvt 0.790369 0.516894\nvt 0.844431 0.374686\nvt 0.832169 0.361823\nvt 0.835312 0.516894\nvt 0.745384 0.516895\nvt 0.848456 0.452221\nvt 0.736059 0.490989\nvt 0.668663 0.490989\nvt 0.504365 0.551944\nvt 0.713594 0.490989\nvt 0.677987 0.516895\nvt 0.576522 0.529757\nvt 0.453791 0.588326\nvt 0.923938 0.801552\nvt 0.921862 0.807594\nvt 0.920320 0.814487\nvt 0.923936 0.857936\nvt 0.891699 0.846020\nvt 0.921861 0.851894\nvt 0.920319 0.845002\nvt 0.919370 0.821966\nvt 0.891492 0.846184\nvt 0.880098 0.885152\nvt 0.876541 0.879864\nvt 0.852285 0.863001\nvt 0.857384 0.864605\nvt 0.872321 0.874990\nvt 0.610534 0.795261\nvt 0.615932 0.793562\nvt 0.639982 0.771807\nvt 0.636217 0.777407\nvt 0.621407 0.790803\nvt 0.684201 0.807020\nvt 0.682569 0.814319\nvt 0.686400 0.860323\nvt 0.684203 0.853926\nvt 0.682570 0.846628\nvt 0.681564 0.822238\nvt 0.639985 0.889144\nvt 0.636219 0.883545\nvt 0.610536 0.865693\nvt 0.615934 0.867391\nvt 0.631750 0.878384\nvt 0.852287 0.796481\nvt 0.857386 0.794877\nvt 0.880100 0.774332\nvt 0.876544 0.779621\nvt 0.862556 0.792272\nvt 0.519720 0.409735\nvt 0.754865 0.335918\nvt 0.628740 0.374686\nvt 0.588683 0.361823\nvt 0.579358 0.335918\nvt 0.578953 0.374686\nvt 0.728787 0.374686\nvt 0.646188 0.413454\nvt 0.764189 0.361823\nvt 0.762228 0.400591\nvt 0.715179 0.361823\nvt 0.689880 0.361823\nvt 0.664581 0.361823\nvt 0.588277 0.400591\nvt 0.481896 0.435640\nvt 0.586416 0.439359\nvt 0.609450 0.439359\nvt 0.689880 0.400591\nvt 0.653633 0.374686\nvt 0.639281 0.361823\nvt 0.613982 0.361823\nvt 0.664581 0.400591\nvt 0.752904 0.374686\nvt 0.563383 0.439359\nvt 0.956289 0.935240\nvt 0.936730 0.943146\nvt 0.941160 0.944617\nvt 0.939763 0.943727\nvt 0.938267 0.943231\nvt 0.917913 0.973167\nvt 0.915206 0.967956\nvt 0.930123 0.958675\nvt 0.930927 0.960485\nvt 0.921304 0.977549\nvt 0.925251 0.980935\nvt 0.931970 0.962045\nvt 0.933215 0.963293\nvt 0.929600 0.983193\nvt 0.933766 0.944211\nvt 0.929591 0.956683\nvt 0.935210 0.943477\nvt 0.929352 0.954587\nvt 0.929413 0.952466\nvt 0.932453 0.945319\nvt 0.929773 0.950402\nvt 0.486829 0.385824\nvt 0.484411 0.380832\nvt 0.493640 0.374731\nvt 0.482745 0.375285\nvt 0.492718 0.371661\nvt 0.481896 0.369397\nvt 0.492248 0.368402\nvt 0.481896 0.363394\nvt 0.492248 0.365079\nvt 0.482745 0.357506\nvt 0.492718 0.361820\nvt 0.484411 0.351959\nvt 0.493640 0.358751\nvt 0.486829 0.346967\nvt 0.494978 0.355988\nvt 0.489906 0.342722\nvt 0.493525 0.339387\nvt 0.496681 0.353638\nvt 0.498684 0.351792\nvt 0.493525 0.393404\nvt 0.501814 0.396873\nvt 0.497546 0.395701\nvt 0.500910 0.382961\nvt 0.498684 0.381689\nvt 0.503272 0.383609\nvt 0.510435 0.395701\nvt 0.506167 0.396873\nvt 0.505681 0.383609\nvt 0.508044 0.382961\nvt 0.510269 0.381689\nvt 0.514456 0.393404\nvt 0.188414 0.980391\nvt 0.145051 0.633487\nvt 0.199254 0.980391\nvt 0.069165 0.633487\nvt 0.101688 0.633487\nvt 0.025800 0.633487\nvt 0.231776 0.633487\nvt 0.253457 0.633487\nvt 0.058324 0.633487\nvt 0.134210 0.633487\nvt 0.318501 0.633487\nvt 0.036642 0.633487\nvt 0.275139 0.633487\nvt 0.285979 0.633487\nvt 0.329341 0.633487\nvt 0.123369 0.980391\nvt 0.307660 0.633487\nvt 0.351022 0.633487\nvt 0.090847 0.980391\nvt 0.090847 0.633487\nvt 0.047482 0.633487\nvt 0.210095 0.633487\nvt 0.264298 0.633487\nvt 0.123369 0.633487\nvt 0.242617 0.633487\nvt 0.220936 0.633487\nvt 0.155891 0.633487\nvt 0.166732 0.633487\nvt 0.340182 0.633487\nvt 0.307660 0.980391\nvt 0.199255 0.633487\nvt 0.025800 0.980391\nvt -5.312352 0.007836\nvt -5.312188 0.007882\nvt -5.312296 0.007753\nvt -5.312240 0.007819\nvt -5.312148 0.007953\nvt -5.312112 0.008019\nvt -5.312082 0.008081\nvt -5.312057 0.008140\nvt -5.312058 0.008209\nvt -5.312089 0.008373\nvt -5.312064 0.008271\nvt -5.312074 0.008325\nvt -5.312118 0.008419\nvt -5.312149 0.008456\nvt -5.312183 0.008484\nvt -5.312262 0.008517\nvt -5.312392 0.008501\nvt -5.312305 0.008521\nvt -5.312349 0.008516\nvt -5.312426 0.008481\nvt -5.312458 0.008452\nvt -5.312487 0.008414\nvt -5.312513 0.008368\nvt -5.312519 0.008326\nvt -5.312520 0.008279\nvt -5.312517 0.008225\nvt -5.312493 0.008105\nvt -5.312471 0.008040\nvt -5.312438 0.007980\nvt 0.497546 0.337089\nvt 0.501814 0.335918\nvt 0.500910 0.350520\nvt 0.506167 0.335918\nvt 0.503272 0.349872\nvt 0.510435 0.337089\nvt 0.505681 0.349872\nvt 0.514456 0.339387\nvt 0.508044 0.350520\nvt 0.521152 0.346967\nvt 0.513976 0.355988\nvt 0.523570 0.351959\nvt 0.525236 0.357505\nvt 0.515314 0.358750\nvt 0.526085 0.363394\nvt 0.516236 0.361820\nvt 0.526085 0.369397\nvt 0.516706 0.365079\nvt 0.525236 0.375285\nvt 0.516706 0.368402\nvt 0.523570 0.380832\nvt 0.516236 0.371661\nvt 0.515314 0.374731\nvt 0.521152 0.385824\nvt 0.513976 0.377494\nvt 0.518075 0.390069\nvt 0.512272 0.379843\nvt 0.175987 0.533864\nvt 0.710229 0.560355\nvt 0.613214 0.560355\nvt 0.154402 0.404825\nvt 0.132362 0.456637\nvt 0.157355 0.409236\nvt 0.159627 0.414356\nvt 0.136593 0.458041\nvt 0.140942 0.458280\nvt 0.161131 0.419989\nvt 0.161810 0.425920\nvt 0.145241 0.457344\nvt 0.149325 0.455268\nvt 0.161637 0.431918\nvt 0.153037 0.452134\nvt 0.156235 0.448061\nvt 0.808931 0.560355\nvt 0.585861 0.560355\nvt 0.826960 0.529757\nvt 0.862130 0.490989\nvt 0.659874 0.529757\nvt 0.089574 0.564462\nvt 0.157958 0.564462\nvt 0.626891 0.560355\nvt 0.189663 0.533864\nvt 0.737582 0.560355\nvt 0.854634 0.366516\nvt 0.148633 0.533864\nvt 0.116927 0.564462\nvt 0.767901 0.560355\nvt 0.107603 0.533864\nvt 0.687227 0.529757\nvt 0.785930 0.529757\nvt 0.640568 0.560355\nvt 0.728258 0.529757\nvt 0.751259 0.560355\nvt 0.799606 0.529757\nvt 0.062220 0.564462\nvt 0.673551 0.529757\nvt 0.075897 0.564462\nvt 0.130604 0.564462\nvt 0.840637 0.529757\nvt 0.700904 0.529757\nvt 0.603890 0.529757\nvt 0.857790 0.444052\nvt 0.722685 0.712591\nvt 0.707058 0.705873\nvt 0.705953 0.707524\nvt 0.723963 0.699198\nvt 0.723802 0.705981\nvt 0.708726 0.699627\nvt 0.707909 0.703956\nvt 0.708472 0.701847\nvt 0.721428 0.686149\nvt 0.723161 0.692501\nvt 0.708280 0.695197\nvt 0.708661 0.697381\nvt 0.715465 0.675432\nvt 0.711442 0.671459\nvt 0.711466 0.671478\nvt 0.704052 0.688641\nvt 0.705442 0.689814\nvt 0.702168 0.667117\nvt 0.706960 0.668658\nvt 0.702523 0.687864\nvt 0.700914 0.687514\nvt 0.699286 0.687603\nvt 0.697250 0.666895\nvt 0.697702 0.688129\nvt 0.934185 0.984237\nvt 0.934612 0.964183\nvt 0.943355 0.982572\nvt 0.938830 0.984028\nvt 0.939165 0.964433\nvt 0.936108 0.964679\nvt 0.940609 0.963699\nvt 0.947611 0.979909\nvt 0.947588 0.979927\nvt 0.954566 0.971496\nvt 0.951389 0.976175\nvt 0.943052 0.961151\nvt 0.941922 0.962591\nvt 0.958657 0.960054\nvt 0.959262 0.947322\nvt 0.959414 0.953729\nvt 0.945023 0.953323\nvt 0.944962 0.955444\nvt 0.944252 0.949235\nvt 0.958207 0.941079\nvt 0.943448 0.947425\nvt 0.942405 0.945865\nvt 0.944784 0.951227\nvt 0.937645 0.964764\nvt 0.707146 0.972358\nvt 0.718827 0.980564\nvt 0.715461 0.985521\nvt 0.708252 0.970707\nvt 0.721426 0.974796\nvt 0.709102 0.968790\nvt 0.723161 0.968440\nvt 0.709665 0.966682\nvt 0.723963 0.961739\nvt 0.709919 0.964462\nvt 0.723801 0.954950\nvt 0.709473 0.960031\nvt 0.722683 0.948336\nvt 0.708790 0.957991\nvt 0.720651 0.942150\nvt 0.707832 0.956173\nvt 0.700479 0.952438\nvt 0.698895 0.952963\nvt 0.702107 0.952348\nvt 0.703717 0.952699\nvt 0.705245 0.953475\nvt 0.706635 0.954649\nvt 0.935739 0.714057\nvt 0.958206 0.718428\nvt 0.956286 0.724270\nvt 0.944179 0.711026\nvt 0.937235 0.714554\nvt 0.945084 0.709309\nvt 0.959262 0.712181\nvt 0.959414 0.705770\nvt 0.945729 0.707382\nvt 0.958657 0.699440\nvt 0.945911 0.701101\nvt 0.946150 0.703198\nvt 0.946089 0.705319\nvt 0.951384 0.683308\nvt 0.954563 0.687989\nvt 0.938772 0.714638\nvt 0.940292 0.714307\nvt 0.941736 0.713574\nvt 0.943532 0.695740\nvt 0.944575 0.697299\nvt 0.945379 0.699109\nvt 0.943049 0.712466\nvt 0.778117 0.797648\nvt 0.779972 0.819380\nvt 0.781468 0.819877\nvt 0.769574 0.802529\nvt 0.773671 0.799508\nvt 0.776915 0.819626\nvt 0.778435 0.819296\nvt 0.775471 0.820360\nvt 0.763035 0.811548\nvt 0.765982 0.806594\nvt 0.774158 0.821468\nvt 0.759496 0.823333\nvt 0.773028 0.822908\nvt 0.759040 0.829763\nvt 0.759040 0.829710\nvt 0.771057 0.830736\nvt 0.771118 0.828615\nvt 0.760844 0.842274\nvt 0.759495 0.836141\nvt 0.771828 0.834824\nvt 0.772632 0.836635\nvt 0.763034 0.847926\nvt 0.773675 0.838194\nvt 0.771296 0.832833\nvt 0.516034 0.811222\nvt 0.527301 0.821527\nvt 0.512288 0.823700\nvt 0.513715 0.817207\nvt 0.525346 0.825094\nvt 0.526196 0.823178\nvt 0.524783 0.827203\nvt 0.524529 0.829423\nvt 0.511806 0.830509\nvt 0.511806 0.830453\nvt 0.512288 0.837262\nvt 0.524975 0.833854\nvt 0.524593 0.831669\nvt 0.519156 0.854985\nvt 0.516035 0.849740\nvt 0.527813 0.839236\nvt 0.527297 0.862488\nvt 0.522959 0.859289\nvt 0.530731 0.841186\nvt 0.529202 0.840409\nvt 0.532340 0.841537\nvt 0.532004 0.864457\nvt 0.533968 0.841447\nvt 0.535552 0.840921\nusemtl mat\ns 1\nf 2/1/1 4/2/1 1/3/1\nf 3/4/2 6/5/2 4/2/2\nf 5/6/3 8/7/3 6/5/3\nf 7/8/4 10/9/4 8/7/4\nf 9/10/5 12/11/5 10/9/5\nf 11/12/6 14/13/6 12/11/6\nf 13/14/7 16/15/8 14/13/8\nf 15/16/9 18/17/9 16/15/9\nf 17/18/10 20/19/10 18/17/10\nf 19/20/11 22/21/11 20/19/11\nf 22/21/12 23/22/12 24/23/12\nf 23/22/13 26/24/13 24/23/13\nf 25/25/14 28/26/14 26/24/14\nf 27/27/15 30/28/15 28/26/15\nf 29/29/16 32/30/16 30/28/17\nf 31/31/18 34/32/18 32/30/18\nf 33/33/19 36/34/19 34/32/19\nf 35/35/20 38/36/20 36/34/20\nf 37/37/21 40/38/21 38/36/21\nf 39/39/22 42/40/22 40/38/22\nf 41/41/23 44/42/23 42/40/23\nf 43/43/24 46/44/24 44/42/24\nf 45/45/25 48/46/26 46/44/26\nf 47/47/27 50/48/27 48/46/27\nf 49/49/28 52/50/28 50/48/28\nf 51/51/29 54/52/30 52/50/30\nf 53/53/31 56/54/31 54/52/31\nf 55/55/32 58/56/32 56/54/32\nf 57/57/33 60/58/33 58/56/33\nf 59/59/34 62/60/34 60/58/34\nf 78/61/35 86/62/35 94/63/35\nf 61/64/36 96/65/36 62/60/36\nf 95/66/37 1/3/37 96/65/37\nf 96/65/38 16/15/38 32/30/38\nf 98/67/1 100/68/1 97/69/1\nf 99/70/2 102/71/2 100/68/2\nf 101/72/3 104/73/3 102/71/3\nf 103/74/4 106/75/4 104/73/4\nf 105/76/5 108/77/5 106/75/5\nf 107/78/6 110/79/6 108/77/6\nf 109/80/7 112/81/7 110/79/7\nf 111/82/9 114/83/9 112/81/9\nf 113/84/10 116/85/10 114/83/10\nf 115/86/11 118/87/11 116/85/11\nf 117/88/12 120/89/12 118/87/12\nf 119/90/13 122/91/13 120/89/13\nf 121/92/14 124/93/14 122/91/14\nf 123/94/15 126/95/15 124/93/15\nf 125/96/16 128/97/16 126/95/16\nf 127/98/18 130/99/18 128/97/18\nf 129/100/19 132/101/19 130/99/19\nf 131/102/39 134/103/39 132/101/39\nf 133/104/21 136/105/21 134/103/21\nf 136/105/22 137/106/22 138/107/22\nf 137/106/23 140/108/23 138/107/23\nf 139/109/24 142/110/24 140/108/24\nf 141/111/40 144/112/40 142/110/40\nf 143/113/27 146/114/27 144/112/27\nf 145/115/28 148/116/28 146/114/28\nf 147/117/29 150/118/29 148/116/29\nf 149/119/31 152/120/31 150/118/31\nf 151/121/32 154/122/32 152/120/32\nf 153/123/33 156/124/33 154/122/33\nf 155/125/34 158/126/34 156/124/34\nf 166/127/35 174/128/35 182/129/35\nf 157/130/41 192/131/41 158/126/41\nf 191/132/37 97/69/37 192/131/37\nf 152/120/38 192/131/38 128/97/38\nf 193/133/42 195/134/43 196/135/43\nf 196/135/43 197/136/43 198/137/42\nf 199/138/43 201/139/43 202/140/43\nf 203/141/42 202/140/43 204/142/43\nf 205/143/42 198/137/42 206/144/42\nf 194/145/43 205/143/42 195/134/43\nf 216/146/35 217/147/35 200/148/35\nf 202/140/43 225/149/42 226/150/43\nf 207/151/42 196/135/43 205/143/42\nf 207/152/38 194/153/38 193/154/38\nf 200/155/42 204/142/43 201/139/43\nf 227/156/43 226/157/44 230/158/45\nf 240/159/38 3/160/38 2/161/38\nf 239/162/46 243/163/46 240/164/46\nf 195/134/43 206/144/42 197/136/43\nf 201/139/43 227/165/42 225/149/42\nf 204/142/43 226/150/43 227/165/42\nf 245/166/47 247/167/47 244/168/47\nf 249/169/48 233/170/48 248/171/48\nf 197/172/49 251/173/50 252/174/51\nf 125/175/38 123/176/38 258/177/38\nf 266/178/52 268/179/53 265/180/53\nf 288/181/35 289/182/35 271/183/35\nf 298/184/54 300/185/54 297/186/54\nf 315/187/38 316/188/38 301/189/38\nf 325/190/55 327/191/56 324/192/56\nf 328/193/57 302/194/57 301/195/57\nf 206/196/58 232/197/59 241/198/60\nf 206/144/42 198/137/42 264/199/61\nf 332/200/62 334/201/62 331/202/62\nf 225/203/42 269/204/63 296/205/64\nf 265/206/65 337/207/65 266/208/65\nf 336/209/66 339/210/66 337/211/66\nf 339/212/67 340/213/67 341/214/67\nf 341/215/68 306/216/68 342/217/68\nf 306/218/69 343/219/69 342/220/69\nf 305/221/70 344/222/70 343/223/70\nf 304/224/71 345/225/71 344/226/72\nf 303/227/73 329/228/73 345/229/73\nf 267/230/74 347/231/74 268/232/74\nf 346/233/75 349/234/75 347/235/75\nf 348/236/76 351/237/76 349/238/76\nf 350/239/77 353/240/77 351/241/77\nf 352/242/78 355/243/78 353/244/78\nf 354/245/79 357/246/79 355/247/79\nf 356/248/80 359/249/80 357/250/80\nf 358/251/81 245/252/81 359/253/81\nf 372/254/35 373/255/35 243/256/35\nf 331/257/82 382/258/82 332/259/82\nf 381/260/83 384/261/83 382/262/83\nf 384/263/84 385/264/84 386/265/84\nf 386/266/85 387/267/85 388/268/85\nf 387/269/86 390/270/86 388/271/86\nf 389/272/87 392/273/87 390/274/87\nf 391/275/88 394/276/88 392/277/88\nf 393/278/89 298/279/89 394/280/89\nf 333/281/90 255/282/90 334/283/90\nf 278/284/91 256/285/91 255/286/91\nf 277/287/92 257/288/92 256/289/92\nf 276/290/93 258/291/93 257/292/93\nf 275/293/94 259/294/94 258/295/94\nf 274/296/95 260/297/95 259/298/95\nf 273/299/96 261/300/96 260/301/96\nf 272/302/97 262/303/97 261/304/97\nf 396/305/98 226/306/99 225/203/100\nf 324/307/101 398/308/101 325/309/101\nf 398/310/102 399/311/102 400/312/103\nf 399/313/104 402/314/104 400/315/105\nf 401/316/106 404/317/106 402/318/106\nf 403/319/107 406/320/107 404/321/107\nf 405/322/108 408/323/108 406/324/108\nf 407/325/109 410/326/109 408/327/109\nf 409/328/110 249/329/110 410/330/110\nf 326/331/111 412/332/111 327/333/111\nf 411/334/112 414/335/112 412/336/112\nf 413/337/113 416/338/113 414/339/113\nf 415/340/114 235/341/114 416/342/115\nf 363/343/116 236/344/116 235/345/116\nf 362/346/117 237/347/117 236/348/117\nf 361/349/118 238/350/118 237/351/118\nf 360/352/119 239/353/119 238/354/119\nf 262/355/120 270/356/120 263/357/120\nf 420/358/35 421/359/35 335/360/35\nf 427/361/35 428/362/35 228/363/121\nf 434/364/38 435/365/38 250/366/38\nf 441/367/38 442/368/38 253/369/38\nf 448/370/38 449/371/38 330/372/38\nf 455/373/35 456/374/35 231/375/122\nf 270/376/123 445/377/123 263/378/123\nf 458/379/124 446/380/124 445/381/124\nf 457/382/125 447/383/125 446/384/125\nf 456/385/126 448/386/126 447/387/126\nf 455/388/127 449/389/127 448/390/128\nf 454/391/129 450/392/129 449/393/129\nf 453/394/130 451/395/130 450/396/130\nf 452/397/131 233/398/131 451/399/131\nf 301/400/132 424/401/132 328/402/132\nf 437/403/133 425/404/133 424/405/133\nf 436/406/134 426/407/134 425/408/134\nf 435/409/135 427/410/135 426/411/135\nf 434/412/136 428/413/136 427/414/136\nf 433/415/137 429/416/137 428/417/137\nf 432/418/138 430/419/138 429/420/138\nf 431/421/139 243/422/139 430/423/140\nf 300/424/141 417/425/141 297/426/141\nf 444/427/142 418/428/142 417/429/142\nf 443/430/143 419/431/143 418/432/143\nf 442/433/144 420/434/144 419/435/144\nf 441/436/145 421/437/145 420/438/145\nf 440/439/146 422/440/146 421/441/146\nf 439/442/147 423/443/147 422/444/147\nf 438/445/148 247/446/149 423/447/149\nf 328/448/35 466/449/35 467/450/35\nf 495/451/35 496/452/35 509/453/35\nf 511/454/1 494/455/1 510/456/1\nf 512/457/150 495/458/150 511/459/150\nf 513/460/151 496/461/151 512/462/151\nf 514/463/4 497/464/4 513/465/4\nf 515/466/5 498/467/5 514/468/5\nf 516/469/152 499/470/152 515/471/152\nf 517/472/153 500/473/153 516/474/153\nf 518/475/9 501/476/9 517/477/9\nf 519/478/10 502/479/10 518/480/10\nf 521/481/11 520/482/11 519/483/11\nf 523/484/12 522/485/12 521/486/12\nf 525/487/13 524/488/13 523/489/13\nf 527/490/14 526/491/14 525/492/14\nf 529/493/154 528/494/154 527/495/154\nf 531/496/155 530/497/155 529/498/155\nf 533/499/18 532/500/18 531/501/18\nf 535/502/19 534/503/19 533/504/19\nf 537/505/39 536/506/39 535/507/39\nf 539/508/156 538/509/156 537/510/156\nf 541/511/22 540/512/22 539/513/22\nf 543/514/23 542/515/23 541/516/23\nf 545/517/24 544/518/24 543/519/24\nf 547/520/40 546/521/40 545/522/40\nf 549/523/27 548/524/27 547/525/27\nf 550/526/28 486/527/28 549/528/28\nf 551/529/157 487/530/157 550/531/157\nf 552/532/158 488/533/158 551/534/158\nf 553/535/159 489/536/159 552/537/159\nf 554/538/33 490/539/33 553/540/33\nf 555/541/160 491/542/160 554/543/160\nf 556/544/36 492/545/36 555/546/36\nf 510/547/37 493/548/37 556/549/37\nf 515/550/35 511/551/35 535/552/35\nf 538/553/35 540/554/35 562/555/35\nf 566/556/16 573/557/16 572/558/16\nf 481/559/33 213/560/33 212/561/33\nf 482/562/32 212/563/32 211/564/32\nf 203/565/35 579/566/35 580/567/161\nf 558/568/40 586/569/40 585/570/40\nf 562/571/21 582/572/21 581/573/21\nf 559/574/24 585/575/24 584/576/24\nf 557/577/27 208/578/27 586/579/27\nf 568/580/14 578/581/14 577/582/14\nf 507/583/5 221/584/5 220/585/5\nf 504/586/9 224/587/9 223/588/9\nf 479/589/36 215/590/36 214/591/36\nf 505/592/7 223/593/7 222/594/7\nf 483/595/31 211/596/31 210/597/31\nf 560/598/23 584/599/23 583/600/23\nf 478/601/37 216/602/37 215/603/37\nf 503/604/10 574/605/10 224/606/10\nf 569/607/13 577/608/13 576/609/13\nf 509/610/3 219/611/3 218/612/3\nf 485/613/28 209/614/28 208/615/28\nf 480/616/34 214/617/34 213/618/34\nf 570/619/12 576/620/12 575/621/12\nf 565/622/18 579/623/18 573/624/18\nf 564/625/19 580/626/19 579/627/19\nf 567/628/15 572/629/15 578/630/15\nf 571/631/11 575/632/11 574/633/11\nf 563/634/20 581/635/20 580/636/20\nf 506/637/6 222/638/6 221/639/6\nf 508/640/4 220/641/4 219/642/4\nf 561/643/22 583/644/22 582/645/22\nf 477/646/1 217/647/1 216/648/1\nf 476/649/2 218/650/2 217/651/2\nf 484/652/29 210/653/29 209/654/29\nf 588/655/1 590/656/1 587/657/1\nf 589/658/2 592/659/2 590/656/2\nf 591/660/3 594/661/3 592/659/3\nf 593/662/4 596/663/4 594/661/4\nf 595/664/5 598/665/5 596/663/5\nf 597/666/6 600/667/6 598/665/6\nf 599/668/7 602/669/7 600/667/7\nf 601/670/9 603/671/9 602/669/9\nf 323/672/10 604/673/10 603/671/10\nf 322/674/11 605/675/11 604/673/11\nf 321/676/12 606/677/12 605/675/12\nf 320/678/13 607/679/13 606/677/13\nf 319/680/14 608/681/14 607/679/14\nf 318/682/15 609/683/15 608/681/15\nf 317/684/17 610/685/16 609/683/16\nf 316/686/18 611/687/18 610/685/18\nf 315/688/19 612/689/19 611/687/19\nf 314/690/20 613/691/20 612/689/20\nf 313/692/21 614/693/21 613/691/21\nf 312/694/22 615/695/22 614/693/22\nf 311/696/23 616/697/23 615/695/23\nf 310/698/24 617/699/24 616/697/24\nf 309/700/40 618/701/40 617/699/40\nf 308/702/27 619/703/27 618/701/27\nf 307/704/28 621/705/28 619/703/28\nf 620/706/29 623/707/29 621/705/29\nf 622/708/31 625/709/31 623/707/31\nf 624/710/32 627/711/32 625/709/32\nf 626/712/33 629/713/33 627/711/33\nf 628/714/34 631/715/34 629/713/34\nf 639/716/35 647/717/35 655/718/35\nf 630/719/36 665/720/36 631/715/36\nf 664/721/37 587/657/37 665/720/37\nf 625/709/38 665/720/38 610/685/38\nf 349/722/38 588/723/38 664/724/38\nf 464/725/15 651/726/15 465/727/15\nf 469/728/21 646/729/21 470/730/21\nf 666/731/9 657/732/9 459/733/9\nf 462/734/13 653/735/13 463/736/13\nf 668/737/6 659/738/6 667/739/6\nf 473/740/40 642/741/40 474/742/40\nf 471/743/23 644/744/23 472/745/23\nf 466/746/18 649/747/18 467/748/18\nf 470/730/22 645/749/22 471/743/22\nf 670/750/3 662/751/3 669/752/3\nf 671/753/2 663/754/2 670/750/2\nf 459/733/10 656/755/10 460/756/10\nf 463/736/14 652/757/14 464/725/14\nf 672/758/5 660/759/5 668/737/5\nf 474/742/27 641/760/27 475/761/27\nf 674/762/29 639/716/29 673/763/29\nf 461/764/11 656/755/11 655/718/11\nf 468/765/20 647/717/20 469/728/20\nf 676/766/36 634/767/36 675/768/36\nf 673/763/31 638/769/31 677/770/31\nf 675/768/37 633/771/37 678/772/37\nf 678/773/35 671/774/35 350/775/35\nf 472/745/24 643/776/24 473/740/24\nf 475/761/28 640/777/28 674/762/28\nf 465/727/16 650/778/16 466/746/16\nf 467/748/19 648/779/19 468/765/19\nf 669/752/4 661/780/4 672/758/4\nf 679/781/33 636/782/33 680/783/33\nf 461/764/12 654/784/12 462/734/12\nf 680/783/34 635/785/34 676/766/34\nf 677/770/32 637/786/32 679/781/32\nf 667/739/7 658/787/7 666/731/7\nf 678/772/1 632/788/1 671/753/1\nf 279/789/10 183/790/10 280/791/10\nf 282/792/13 180/793/13 283/794/13\nf 281/795/12 181/796/12 282/792/12\nf 295/797/28 167/798/28 681/799/28\nf 683/800/7 185/801/7 682/802/7\nf 682/802/9 184/803/9 279/789/9\nf 685/804/5 187/805/5 684/806/5\nf 687/807/37 160/808/37 686/809/37\nf 287/810/19 175/811/19 288/812/19\nf 689/813/31 165/814/31 688/815/31\nf 286/816/18 176/817/18 287/810/18\nf 690/818/36 161/819/36 687/807/36\nf 101/820/38 331/821/162 334/822/35\nf 691/823/4 188/824/4 685/804/4\nf 289/825/21 173/826/21 290/827/163\nf 692/828/3 189/829/3 691/823/3\nf 284/830/14 180/793/14 179/831/14\nf 694/832/33 163/833/33 693/834/33\nf 333/835/38 332/836/38 386/837/35\nf 681/799/29 166/127/29 689/813/29\nf 285/838/15 179/831/15 178/839/15\nf 290/827/22 172/840/22 291/841/22\nf 292/842/24 170/843/24 293/844/24\nf 686/809/1 159/845/1 695/846/1\nf 684/806/6 186/847/6 683/800/6\nf 294/848/27 168/849/27 295/797/27\nf 280/791/11 182/129/11 281/795/11\nf 288/812/39 174/128/39 289/825/39\nf 693/834/34 162/850/34 690/818/34\nf 695/846/2 190/851/2 692/828/2\nf 293/844/40 169/852/40 294/848/40\nf 285/838/16 177/853/16 286/816/16\nf 688/815/32 164/854/32 694/832/32\nf 291/841/23 171/855/23 292/842/23\nf 380/856/10 87/857/10 696/858/10\nf 698/859/12 85/860/12 697/861/12\nf 697/861/13 84/862/13 699/863/13\nf 364/864/28 71/865/28 365/866/28\nf 378/867/8 89/868/7 379/869/153\nf 379/869/9 88/870/9 380/856/9\nf 376/871/5 91/872/5 377/873/5\nf 371/874/37 64/875/37 372/876/37\nf 701/877/19 79/878/19 700/879/19\nf 366/880/31 69/881/31 367/882/31\nf 702/883/18 80/884/18 701/877/18\nf 370/885/36 65/886/36 371/874/36\nf 375/887/4 92/888/4 376/871/4\nf 704/889/21 77/890/21 703/891/21\nf 374/892/3 93/893/3 375/887/3\nf 699/863/14 83/894/14 705/895/14\nf 368/896/33 67/897/33 369/898/33\nf 365/866/30 70/899/29 366/880/157\nf 400/900/35 701/901/35 700/902/35\nf 705/895/15 82/903/15 706/904/15\nf 703/891/22 76/905/22 707/906/22\nf 708/907/24 74/908/24 709/909/24\nf 372/876/1 63/910/1 373/911/1\nf 377/873/6 90/912/6 378/867/6\nf 710/913/27 72/914/27 364/864/27\nf 696/858/11 86/62/11 698/859/11\nf 700/879/164 78/61/164 704/889/39\nf 399/915/38 33/916/38 31/917/38\nf 369/898/34 66/918/34 370/885/34\nf 373/911/2 94/63/2 374/892/2\nf 706/904/17 81/919/17 702/883/16\nf 709/909/26 73/920/26 710/913/26\nf 367/882/32 68/921/32 368/896/32\nf 708/907/23 76/905/23 75/922/165\nf 2/1/1 3/4/1 4/2/1\nf 3/4/2 5/6/2 6/5/2\nf 5/6/3 7/8/3 8/7/3\nf 7/8/4 9/10/4 10/9/4\nf 9/10/5 11/12/5 12/11/5\nf 11/12/6 13/14/6 14/13/6\nf 13/14/7 15/16/7 16/15/8\nf 15/16/9 17/18/9 18/17/9\nf 17/18/10 19/20/10 20/19/10\nf 19/20/11 21/923/166 22/21/11\nf 22/21/12 21/923/12 23/22/12\nf 23/22/13 25/25/13 26/24/13\nf 25/25/14 27/27/14 28/26/14\nf 27/27/15 29/29/15 30/28/15\nf 29/29/16 31/31/16 32/30/16\nf 31/31/18 33/33/18 34/32/18\nf 33/33/19 35/35/19 36/34/19\nf 35/35/20 37/37/164 38/36/20\nf 37/37/21 39/39/21 40/38/21\nf 39/39/22 41/41/22 42/40/22\nf 41/41/23 43/43/23 44/42/23\nf 43/43/24 45/45/24 46/44/24\nf 45/45/25 47/47/40 48/46/26\nf 47/47/27 49/49/27 50/48/27\nf 49/49/28 51/51/28 52/50/28\nf 51/51/29 53/53/29 54/52/30\nf 53/53/31 55/55/31 56/54/31\nf 55/55/32 57/57/32 58/56/32\nf 57/57/33 59/59/33 60/58/33\nf 59/59/34 61/64/34 62/60/34\nf 94/63/35 63/910/35 64/875/35\nf 64/875/35 65/886/35 66/918/35\nf 66/918/35 67/897/162 68/921/35\nf 68/921/35 69/881/35 66/918/35\nf 69/881/35 70/899/35 66/918/35\nf 70/899/35 71/865/35 72/914/35\nf 72/914/35 73/920/35 70/899/35\nf 73/920/35 74/908/35 70/899/35\nf 74/908/35 75/922/35 78/61/35\nf 75/922/35 76/905/35 78/61/35\nf 76/905/35 77/890/167 78/61/35\nf 78/61/35 79/878/35 80/884/35\nf 80/884/35 81/919/35 78/61/35\nf 81/919/35 82/903/35 78/61/35\nf 82/903/35 83/894/35 86/62/35\nf 83/894/35 84/862/35 86/62/35\nf 84/862/35 85/860/161 86/62/35\nf 86/62/35 87/857/35 88/870/35\nf 88/870/35 89/868/35 86/62/35\nf 89/868/35 90/912/35 86/62/35\nf 90/912/35 91/872/162 92/888/35\nf 92/888/35 93/893/35 94/63/35\nf 94/63/35 64/875/35 70/899/35\nf 64/875/35 66/918/35 70/899/35\nf 90/912/35 92/888/35 86/62/35\nf 92/888/35 94/63/35 86/62/35\nf 70/899/35 74/908/35 78/61/35\nf 78/61/35 82/903/35 86/62/35\nf 94/63/35 70/899/35 78/61/35\nf 61/64/36 95/66/36 96/65/36\nf 95/66/37 2/1/37 1/3/37\nf 96/65/38 1/3/38 8/7/38\nf 1/3/38 4/2/38 8/7/38\nf 4/2/38 6/5/168 8/7/38\nf 8/7/38 10/9/169 16/15/38\nf 10/9/169 12/11/169 16/15/38\nf 12/11/169 14/13/38 16/15/38\nf 16/15/38 18/17/38 24/23/38\nf 18/17/38 20/19/38 24/23/38\nf 20/19/38 22/21/38 24/23/38\nf 24/23/38 26/24/38 28/26/38\nf 28/26/38 30/28/170 32/30/38\nf 32/30/38 34/32/38 36/34/38\nf 36/34/38 38/36/170 40/38/38\nf 40/38/38 42/40/38 44/42/38\nf 44/42/38 46/44/38 48/46/38\nf 48/46/38 50/48/38 52/50/38\nf 52/50/38 54/52/38 56/54/38\nf 56/54/38 58/56/38 60/58/170\nf 60/58/170 62/60/38 56/54/38\nf 62/60/38 96/65/38 56/54/38\nf 24/23/38 28/26/38 16/15/38\nf 28/26/38 32/30/38 16/15/38\nf 32/30/38 36/34/38 40/38/38\nf 40/38/38 44/42/38 32/30/38\nf 44/42/38 48/46/38 32/30/38\nf 48/46/38 52/50/38 56/54/38\nf 96/65/38 8/7/38 16/15/38\nf 48/46/38 56/54/38 32/30/38\nf 56/54/38 96/65/38 32/30/38\nf 98/67/1 99/70/1 100/68/1\nf 99/70/2 101/72/2 102/71/2\nf 101/72/3 103/74/3 104/73/3\nf 103/74/4 105/76/4 106/75/4\nf 105/76/5 107/78/5 108/77/5\nf 107/78/6 109/80/6 110/79/6\nf 109/80/7 111/82/7 112/81/7\nf 111/82/9 113/84/9 114/83/9\nf 113/84/10 115/86/10 116/85/10\nf 115/86/11 117/88/11 118/87/11\nf 117/88/12 119/90/12 120/89/12\nf 119/90/13 121/92/13 122/91/13\nf 121/92/14 123/94/14 124/93/14\nf 123/94/15 125/96/15 126/95/15\nf 125/96/16 127/98/16 128/97/16\nf 127/98/18 129/100/18 130/99/18\nf 129/100/19 131/102/19 132/101/19\nf 131/102/39 133/104/39 134/103/39\nf 133/104/21 135/924/21 136/105/21\nf 136/105/22 135/924/22 137/106/22\nf 137/106/23 139/109/23 140/108/23\nf 139/109/24 141/111/24 142/110/24\nf 141/111/40 143/113/40 144/112/40\nf 143/113/27 145/115/27 146/114/27\nf 145/115/28 147/117/28 148/116/28\nf 147/117/29 149/119/29 150/118/29\nf 149/119/31 151/121/31 152/120/31\nf 151/121/32 153/123/32 154/122/32\nf 153/123/33 155/125/33 156/124/33\nf 155/125/34 157/130/34 158/126/34\nf 190/851/35 159/845/35 160/808/35\nf 160/808/35 161/819/171 190/851/35\nf 161/819/171 162/850/35 190/851/35\nf 162/850/35 163/833/167 164/854/35\nf 164/854/35 165/814/161 162/850/35\nf 165/814/161 166/127/35 162/850/35\nf 166/127/35 167/798/35 168/849/35\nf 168/849/35 169/852/35 166/127/35\nf 169/852/35 170/843/35 166/127/35\nf 170/843/35 171/855/35 174/128/35\nf 171/855/35 172/840/171 174/128/35\nf 172/840/171 173/826/35 174/128/35\nf 174/128/35 175/811/35 178/839/35\nf 175/811/35 176/817/35 178/839/35\nf 176/817/35 177/853/35 178/839/35\nf 178/839/35 179/831/167 180/793/35\nf 180/793/35 181/796/35 182/129/35\nf 182/129/35 183/790/35 184/803/35\nf 184/803/35 185/801/35 186/847/35\nf 186/847/35 187/805/35 188/824/35\nf 188/824/35 189/829/162 190/851/35\nf 178/839/35 180/793/35 174/128/35\nf 180/793/35 182/129/35 174/128/35\nf 182/129/35 184/803/35 190/851/35\nf 184/803/35 186/847/35 190/851/35\nf 186/847/35 188/824/35 190/851/35\nf 190/851/35 162/850/35 166/127/35\nf 166/127/35 170/843/35 174/128/35\nf 190/851/35 166/127/35 182/129/35\nf 157/130/41 191/132/41 192/131/41\nf 191/132/37 98/67/37 97/69/37\nf 192/131/38 97/69/38 100/68/38\nf 100/68/38 102/71/170 104/73/38\nf 104/73/38 106/75/168 108/77/38\nf 108/77/38 110/79/172 112/81/38\nf 112/81/38 114/83/38 120/89/38\nf 114/83/38 116/85/38 120/89/38\nf 116/85/38 118/87/169 120/89/38\nf 120/89/38 122/91/38 128/97/38\nf 122/91/38 124/93/38 128/97/38\nf 124/93/38 126/95/168 128/97/38\nf 128/97/38 130/99/38 132/101/38\nf 132/101/38 134/103/38 136/105/38\nf 136/105/38 138/107/170 140/108/38\nf 140/108/38 142/110/38 144/112/38\nf 144/112/38 146/114/38 148/116/38\nf 148/116/38 150/118/38 144/112/38\nf 150/118/38 152/120/38 144/112/38\nf 152/120/38 154/122/168 156/124/38\nf 156/124/38 158/126/38 152/120/38\nf 158/126/38 192/131/38 152/120/38\nf 192/131/38 100/68/38 104/73/38\nf 104/73/38 108/77/38 192/131/38\nf 108/77/38 112/81/38 192/131/38\nf 128/97/38 132/101/38 136/105/38\nf 136/105/38 140/108/38 128/97/38\nf 140/108/38 144/112/38 128/97/38\nf 112/81/38 120/89/38 192/131/38\nf 120/89/38 128/97/38 192/131/38\nf 144/112/38 152/120/38 128/97/38\nf 193/133/42 194/145/43 195/134/43\nf 196/135/43 195/134/43 197/136/43\nf 199/138/43 200/155/42 201/139/43\nf 203/141/42 199/138/43 202/140/43\nf 205/143/42 196/135/43 198/137/42\nf 194/145/43 207/151/42 205/143/42\nf 199/925/35 208/926/35 209/927/35\nf 199/925/35 209/927/35 210/928/35\nf 223/929/35 224/930/35 200/148/35\nf 222/931/35 223/929/35 200/148/35\nf 199/925/35 210/928/35 211/932/35\nf 199/925/35 211/932/35 212/933/35\nf 221/934/35 222/931/35 200/148/35\nf 220/935/35 221/934/35 200/148/35\nf 200/148/35 199/925/35 213/936/35\nf 199/925/35 212/933/35 213/936/35\nf 219/937/35 220/935/35 200/148/35\nf 218/938/35 219/937/35 200/148/35\nf 200/148/35 213/936/35 214/939/171\nf 200/148/35 214/939/171 215/940/35\nf 217/147/35 218/938/35 200/148/35\nf 200/148/35 215/940/35 216/146/35\nf 202/140/43 201/139/43 225/149/42\nf 207/151/42 193/133/42 196/135/43\nf 200/155/42 203/141/42 204/142/43\nf 226/157/44 228/363/121 229/941/35\nf 230/158/45 231/375/122 227/156/43\nf 226/157/44 229/941/35 230/158/45\nf 241/942/38 232/943/38 233/944/38\nf 233/944/38 234/945/38 11/946/38\nf 234/945/38 17/947/38 15/948/38\nf 234/945/38 15/948/38 13/949/38\nf 240/159/38 241/942/38 233/944/38\nf 238/950/38 239/951/38 55/952/38\nf 239/951/38 240/159/38 2/161/38\nf 55/952/38 239/951/38 57/953/38\nf 236/954/38 237/955/38 51/956/38\nf 237/955/38 238/950/38 53/957/38\nf 53/957/38 238/950/38 55/952/38\nf 49/958/38 235/959/38 236/954/38\nf 51/956/38 49/958/38 236/954/38\nf 240/159/38 233/944/38 7/960/38\nf 234/945/38 13/949/38 11/946/38\nf 53/957/38 51/956/38 237/955/38\nf 233/944/38 11/946/38 9/961/38\nf 233/944/38 9/961/38 7/960/38\nf 57/953/38 239/951/38 59/962/38\nf 59/962/38 239/951/38 61/963/38\nf 240/159/38 7/960/38 5/964/38\nf 61/963/38 239/951/38 95/965/38\nf 95/965/38 239/951/38 2/161/38\nf 240/159/38 5/964/38 3/160/38\nf 239/162/46 242/966/46 243/163/46\nf 195/134/43 205/143/42 206/144/42\nf 201/139/43 204/142/43 227/165/42\nf 204/142/43 202/140/43 226/150/43\nf 245/166/47 246/967/47 247/167/47\nf 249/169/48 234/968/48 233/170/48\nf 197/172/49 250/969/173 251/173/50\nf 252/174/51 253/970/174 198/971/175\nf 252/174/51 198/971/175 197/172/49\nf 264/972/38 254/973/38 263/974/38\nf 254/973/38 145/975/38 263/974/38\nf 145/975/38 143/976/38 263/974/38\nf 262/977/38 263/974/38 141/978/38\nf 262/977/38 133/979/38 131/980/38\nf 260/981/38 261/982/38 129/983/38\nf 261/982/38 262/977/38 131/980/38\nf 258/177/38 259/984/38 125/175/38\nf 259/984/38 260/981/38 127/985/38\nf 256/986/38 257/987/38 119/988/38\nf 257/987/38 258/177/38 123/176/38\nf 125/175/38 259/984/38 127/985/38\nf 113/989/38 255/990/38 115/991/38\nf 255/990/38 256/986/38 117/992/38\nf 115/991/38 255/990/38 117/992/38\nf 260/981/38 129/983/38 127/985/38\nf 261/982/38 131/980/38 129/983/38\nf 133/979/38 262/977/38 135/993/38\nf 143/976/38 141/978/38 263/974/38\nf 141/978/38 139/994/38 262/977/38\nf 119/988/38 117/992/38 256/986/38\nf 139/994/38 137/995/38 262/977/38\nf 137/995/38 135/993/38 262/977/38\nf 121/996/38 119/988/38 257/987/38\nf 123/176/38 121/996/38 257/987/38\nf 266/178/52 267/997/52 268/179/53\nf 296/998/161 269/999/167 270/1000/35\nf 270/1000/35 271/183/35 293/1001/35\nf 271/183/35 272/1002/35 288/181/35\nf 287/1003/35 272/1002/35 273/1004/35\nf 273/1004/35 274/1005/35 286/1006/35\nf 274/1005/35 275/1007/35 285/1008/35\nf 275/1007/35 276/1009/35 284/1010/35\nf 274/1005/35 285/1008/35 286/1006/35\nf 276/1009/35 277/1011/35 282/1012/35\nf 277/1011/35 278/1013/35 281/1014/35\nf 278/1013/35 279/1015/35 280/1016/35\nf 278/1013/35 280/1016/35 281/1014/35\nf 284/1010/35 276/1009/35 283/1017/35\nf 272/1002/35 287/1003/35 288/181/35\nf 273/1004/35 286/1006/35 287/1003/35\nf 295/1018/35 296/998/161 270/1000/35\nf 294/1019/35 295/1018/35 270/1000/35\nf 285/1008/35 275/1007/35 284/1010/35\nf 281/1014/35 282/1012/35 277/1011/35\nf 282/1012/35 283/1017/35 276/1009/35\nf 293/1001/35 294/1019/35 270/1000/35\nf 292/1020/35 293/1001/35 271/183/35\nf 291/1021/35 292/1020/35 271/183/35\nf 290/1022/35 291/1021/35 271/183/35\nf 289/182/35 290/1022/35 271/183/35\nf 298/184/54 299/1023/54 300/185/54\nf 252/1024/38 251/1025/38 301/189/38\nf 301/189/38 302/1026/38 315/187/38\nf 302/1026/38 303/1027/38 310/1028/38\nf 312/1029/38 302/1026/38 311/1030/38\nf 303/1027/38 304/1031/38 309/1032/38\nf 304/1031/38 305/1033/38 308/1034/38\nf 305/1033/38 306/1035/38 307/1036/38\nf 305/1033/38 307/1036/38 308/1034/38\nf 302/1026/38 312/1029/38 313/1037/38\nf 302/1026/38 310/1028/38 311/1030/38\nf 244/1038/38 252/1024/38 301/189/38\nf 323/1039/38 245/1040/38 322/1041/38\nf 245/1040/38 244/1038/38 320/1042/38\nf 322/1041/38 245/1040/38 321/1043/38\nf 321/1043/38 245/1040/38 320/1042/38\nf 244/1038/38 301/189/38 318/1044/38\nf 308/1034/38 309/1032/38 304/1031/38\nf 309/1032/38 310/1028/38 303/1027/38\nf 319/1045/38 320/1042/38 244/1038/38\nf 318/1044/38 319/1045/38 244/1038/38\nf 302/1026/38 313/1037/38 314/1046/38\nf 302/1026/38 314/1046/38 315/187/38\nf 317/1047/38 318/1044/38 301/189/38\nf 316/188/38 317/1047/38 301/189/38\nf 325/190/55 326/1048/55 327/191/56\nf 328/193/57 329/1049/57 302/194/57\nf 206/196/58 330/1050/176 232/197/59\nf 241/198/60 250/1051/177 197/1052/178\nf 241/198/60 197/1052/178 206/196/58\nf 198/137/42 253/1053/42 254/1054/179\nf 264/199/61 330/1055/42 206/144/42\nf 198/137/42 254/1054/179 264/199/61\nf 332/200/62 333/1056/62 334/201/62\nf 227/1057/42 231/1058/42 269/204/63\nf 296/205/64 335/1059/42 225/203/42\nf 225/203/42 227/1057/42 269/204/63\nf 265/206/65 336/1060/65 337/207/65\nf 336/209/66 338/1061/66 339/210/66\nf 339/212/67 338/1062/67 340/213/67\nf 341/215/68 340/1063/180 306/216/68\nf 306/218/69 305/1064/69 343/219/69\nf 305/221/70 304/1065/70 344/222/70\nf 304/224/71 303/1066/71 345/225/71\nf 303/227/73 302/1067/181 329/228/73\nf 267/230/74 346/1068/74 347/231/74\nf 346/233/75 348/1069/75 349/234/75\nf 348/236/76 350/1070/76 351/237/76\nf 350/239/77 352/1071/77 353/240/77\nf 352/242/78 354/1072/78 355/243/78\nf 354/245/79 356/1073/79 357/246/79\nf 356/248/80 358/1074/80 359/249/80\nf 358/251/81 246/1075/81 245/252/81\nf 230/158/45 229/941/35 248/1076/35\nf 229/941/35 243/256/35 248/1076/35\nf 243/256/35 242/1077/35 372/254/35\nf 242/1077/35 360/1078/35 367/1079/35\nf 369/1080/35 242/1077/35 368/1081/35\nf 360/1078/35 361/1082/35 366/1083/35\nf 361/1082/35 362/1084/35 365/1085/35\nf 362/1084/35 363/1086/35 364/1087/35\nf 362/1084/35 364/1087/35 365/1085/35\nf 242/1077/35 369/1080/35 370/1088/35\nf 242/1077/35 367/1079/35 368/1081/35\nf 380/1089/35 249/1090/35 379/1091/35\nf 249/1090/35 248/1076/35 377/1092/35\nf 379/1091/35 249/1090/35 378/1093/35\nf 378/1093/35 249/1090/35 377/1092/35\nf 248/1076/35 243/256/35 375/1094/35\nf 365/1085/35 366/1083/35 361/1082/35\nf 366/1083/35 367/1079/35 360/1078/35\nf 376/1095/35 377/1092/35 248/1076/35\nf 375/1094/35 376/1095/35 248/1076/35\nf 242/1077/35 370/1088/35 371/1096/35\nf 242/1077/35 371/1096/35 372/254/35\nf 374/1097/35 375/1094/35 243/256/35\nf 373/255/35 374/1097/35 243/256/35\nf 331/257/82 381/1098/82 382/258/82\nf 381/260/83 383/1099/83 384/261/83\nf 384/263/84 383/1100/84 385/264/84\nf 386/266/85 385/1101/85 387/267/85\nf 387/269/86 389/1102/86 390/270/86\nf 389/272/87 391/1103/87 392/273/87\nf 391/275/88 393/1104/88 394/276/88\nf 393/278/89 299/1105/89 298/279/89\nf 333/281/90 278/1106/90 255/282/90\nf 278/284/91 277/1107/91 256/285/91\nf 277/287/92 276/1108/92 257/288/92\nf 276/290/93 275/1109/93 258/291/93\nf 275/293/94 274/1110/94 259/294/94\nf 274/296/95 273/1111/95 260/297/95\nf 273/299/96 272/1112/96 261/300/96\nf 272/302/97 271/1113/97 262/303/97\nf 225/203/100 335/1059/182 395/1114/183\nf 396/305/98 228/1115/184 226/306/99\nf 395/1114/183 396/305/98 225/203/100\nf 324/307/101 397/1116/101 398/308/101\nf 398/310/102 397/1117/102 399/311/102\nf 399/313/104 401/1118/104 402/314/104\nf 401/316/106 403/1119/106 404/317/106\nf 403/319/107 405/1120/107 406/320/107\nf 405/322/108 407/1121/108 408/323/108\nf 407/325/109 409/1122/109 410/326/109\nf 409/328/110 234/1123/110 249/329/110\nf 326/331/111 411/1124/111 412/332/111\nf 411/334/112 413/1125/112 414/335/112\nf 413/337/113 415/1126/113 416/338/113\nf 415/340/114 363/1127/114 235/341/114\nf 363/343/116 362/1128/116 236/344/116\nf 362/346/117 361/1129/117 237/347/117\nf 361/349/118 360/1130/118 238/350/118\nf 360/352/119 242/1131/119 239/353/119\nf 262/355/120 271/1132/120 270/356/120\nf 296/998/161 297/1133/35 417/1134/35\nf 296/998/161 417/1134/35 418/1135/35\nf 247/1136/35 395/1137/35 423/1138/35\nf 395/1137/35 335/360/35 422/1139/35\nf 423/1138/35 395/1137/35 422/1139/35\nf 335/360/35 296/998/161 418/1135/35\nf 335/360/35 418/1135/35 419/1140/35\nf 335/360/35 419/1140/35 420/358/35\nf 421/359/35 422/1139/35 335/360/35\nf 396/1141/35 328/448/35 424/1142/35\nf 396/1141/35 424/1142/35 425/1143/35\nf 243/256/35 229/941/35 430/1144/35\nf 229/941/35 228/363/121 429/1145/35\nf 430/1144/35 229/941/35 429/1145/35\nf 228/363/121 396/1141/35 425/1143/35\nf 228/363/121 425/1143/35 426/1146/35\nf 228/363/121 426/1146/35 427/361/35\nf 428/362/35 429/1145/35 228/363/121\nf 241/942/38 240/159/38 431/1147/38\nf 241/942/38 431/1147/38 432/1148/38\nf 301/189/38 251/1025/38 437/1149/38\nf 251/1025/38 250/366/38 436/1150/38\nf 437/1149/38 251/1025/38 436/1150/38\nf 250/366/38 241/942/38 432/1148/38\nf 250/366/38 432/1148/38 433/1151/38\nf 250/366/38 433/1151/38 434/364/38\nf 435/365/38 436/1150/38 250/366/38\nf 252/1024/38 244/1038/38 438/1152/38\nf 252/1024/38 438/1152/38 439/1153/38\nf 300/1154/38 254/973/38 444/1155/38\nf 254/973/38 253/369/38 443/1156/38\nf 444/1155/38 254/973/38 443/1156/38\nf 253/369/38 252/1024/38 439/1153/38\nf 253/369/38 439/1153/38 440/1157/38\nf 253/369/38 440/1157/38 441/367/38\nf 442/368/38 443/1156/38 253/369/38\nf 264/972/38 263/974/38 445/1158/38\nf 264/972/38 445/1158/38 446/1159/38\nf 233/944/38 232/943/38 451/1160/38\nf 232/943/38 330/372/38 450/1161/38\nf 451/1160/38 232/943/38 450/1161/38\nf 330/372/38 264/972/38 446/1159/38\nf 330/372/38 446/1159/38 447/1162/38\nf 330/372/38 447/1162/38 448/370/38\nf 449/371/38 450/1161/38 330/372/38\nf 230/158/45 248/1076/35 452/1163/35\nf 230/158/45 452/1163/35 453/1164/35\nf 270/1000/35 269/999/167 458/1165/35\nf 269/999/167 231/375/122 457/1166/35\nf 458/1165/35 269/999/167 457/1166/35\nf 231/375/122 230/158/45 453/1164/35\nf 231/375/122 453/1164/35 454/1167/35\nf 231/375/122 454/1167/35 455/373/35\nf 456/374/35 457/1166/35 231/375/122\nf 270/376/123 458/1168/123 445/377/123\nf 458/379/124 457/1169/124 446/380/124\nf 457/382/125 456/1170/125 447/383/125\nf 456/385/126 455/1171/126 448/386/126\nf 455/388/127 454/1172/127 449/389/127\nf 454/391/129 453/1173/129 450/392/129\nf 453/394/130 452/1174/130 451/395/130\nf 452/397/131 248/1175/131 233/398/131\nf 301/400/132 437/1176/132 424/401/132\nf 437/403/133 436/1177/133 425/404/133\nf 436/406/134 435/1178/134 426/407/134\nf 435/409/135 434/1179/135 427/410/135\nf 434/412/136 433/1180/136 428/413/136\nf 433/415/137 432/1181/137 429/416/137\nf 432/418/138 431/1182/138 430/419/138\nf 431/421/139 240/1183/139 243/422/139\nf 300/424/141 444/1184/141 417/425/141\nf 444/427/142 443/1185/142 418/428/142\nf 443/430/143 442/1186/143 419/431/143\nf 442/433/144 441/1187/144 420/434/144\nf 441/436/145 440/1188/145 421/437/145\nf 440/439/146 439/1189/146 422/440/146\nf 439/442/147 438/1190/147 423/443/147\nf 438/445/148 244/1191/148 247/446/149\nf 396/1141/35 395/1137/35 328/448/35\nf 395/1137/35 247/1136/35 328/448/35\nf 247/1136/35 246/1192/35 462/1193/35\nf 246/1192/35 459/1194/35 460/1195/185\nf 246/1192/35 460/1195/185 461/1196/35\nf 345/1197/35 329/1198/35 472/1199/35\nf 329/1198/35 328/448/35 467/450/35\nf 345/1197/35 473/1200/35 344/1201/35\nf 343/1202/35 344/1201/35 474/1203/35\nf 474/1203/35 344/1201/35 473/1200/35\nf 475/1204/35 342/1205/35 343/1202/35\nf 474/1203/35 475/1204/35 343/1202/35\nf 473/1200/35 345/1197/35 472/1199/35\nf 328/448/35 247/1136/35 464/1206/35\nf 246/1192/35 461/1196/35 462/1193/35\nf 472/1199/35 329/1198/35 471/1207/35\nf 247/1136/35 462/1193/35 463/1208/35\nf 247/1136/35 463/1208/35 464/1206/35\nf 471/1207/35 329/1198/35 470/1209/35\nf 470/1209/35 329/1198/35 469/1210/35\nf 328/448/35 464/1206/35 465/1211/35\nf 469/1210/35 329/1198/35 468/1212/35\nf 468/1212/35 329/1198/35 467/450/35\nf 328/448/35 465/1211/35 466/449/35\nf 509/453/35 476/1213/35 495/451/35\nf 476/1213/35 477/1214/35 494/1215/35\nf 477/1214/35 478/1216/35 493/1217/35\nf 478/1216/35 479/1218/35 492/1219/35\nf 493/1217/35 478/1216/35 492/1219/35\nf 479/1218/35 480/1220/35 491/1221/35\nf 480/1220/35 481/1222/35 490/1223/35\nf 479/1218/35 491/1221/35 492/1219/35\nf 481/1222/35 482/1224/35 489/1225/35\nf 482/1224/35 483/1226/35 489/1225/35\nf 489/1225/35 483/1226/35 488/1227/35\nf 483/1226/35 484/1228/35 488/1227/35\nf 484/1228/35 485/1229/35 487/1230/35\nf 488/1227/35 484/1228/35 487/1230/35\nf 485/1229/35 486/1231/35 487/1230/35\nf 508/1232/35 509/453/35 496/452/35\nf 476/1213/35 494/1215/35 495/451/35\nf 506/1233/35 507/1234/35 498/1235/35\nf 507/1234/35 508/1232/35 497/1236/35\nf 506/1233/35 498/1235/35 499/1237/35\nf 504/1238/35 505/1239/35 500/1240/35\nf 505/1239/35 506/1233/35 499/1237/35\nf 504/1238/35 500/1240/35 501/1241/35\nf 502/1242/35 503/1243/35 501/1241/35\nf 503/1243/35 504/1238/35 501/1241/35\nf 500/1240/35 505/1239/35 499/1237/35\nf 481/1222/35 489/1225/35 490/1223/35\nf 490/1223/35 491/1221/35 480/1220/35\nf 498/1235/35 507/1234/35 497/1236/35\nf 496/452/35 497/1236/35 508/1232/35\nf 477/1214/35 493/1217/35 494/1215/35\nf 511/454/1 495/1244/1 494/455/1\nf 512/457/150 496/1245/150 495/458/150\nf 513/460/151 497/1246/151 496/461/151\nf 514/463/4 498/1247/4 497/464/4\nf 515/466/5 499/1248/5 498/467/5\nf 516/469/152 500/1249/152 499/470/152\nf 517/472/153 501/1250/153 500/473/153\nf 518/475/9 502/1251/9 501/476/9\nf 519/478/10 520/1252/10 502/479/10\nf 521/481/11 522/1253/11 520/482/11\nf 523/484/12 524/1254/12 522/485/12\nf 525/487/13 526/1255/13 524/488/13\nf 527/490/14 528/1256/14 526/491/14\nf 529/493/154 530/1257/154 528/494/154\nf 531/496/155 532/1258/155 530/497/155\nf 533/499/18 534/1259/18 532/500/18\nf 535/502/19 536/1260/19 534/503/19\nf 537/505/39 538/1261/39 536/506/39\nf 539/508/156 540/1262/156 538/509/156\nf 541/511/22 542/1263/22 540/512/22\nf 543/514/23 544/1264/23 542/515/23\nf 545/517/24 546/1265/24 544/518/24\nf 547/520/40 548/1266/40 546/521/40\nf 549/523/27 486/1267/27 548/524/27\nf 550/526/28 487/1268/28 486/527/28\nf 551/529/157 488/1269/157 487/530/157\nf 552/532/158 489/1270/158 488/533/158\nf 553/535/159 490/1271/159 489/536/159\nf 554/538/33 491/1272/33 490/539/33\nf 555/541/160 492/1273/160 491/542/160\nf 556/544/36 493/1274/36 492/545/36\nf 510/547/37 494/1275/37 493/548/37\nf 511/551/35 510/1276/35 554/1277/35\nf 510/1276/35 556/1278/35 554/1277/35\nf 556/1278/35 555/1279/35 554/1277/35\nf 554/1277/35 553/1280/35 552/1281/35\nf 552/1281/35 551/1282/35 550/1283/35\nf 550/1283/35 549/1284/35 543/1285/35\nf 549/1284/35 547/1286/35 543/1285/35\nf 547/1286/35 545/1287/35 543/1285/35\nf 543/1285/35 541/1288/35 539/1289/35\nf 539/1289/35 537/1290/35 535/552/35\nf 535/552/35 533/1291/35 527/1292/35\nf 533/1291/35 531/1293/35 527/1292/35\nf 531/1293/35 529/1294/35 527/1292/35\nf 527/1292/35 525/1295/35 523/1296/35\nf 523/1296/35 521/1297/35 519/1298/35\nf 519/1298/35 518/1299/35 515/550/35\nf 518/1299/35 517/1300/35 515/550/35\nf 517/1300/35 516/1301/35 515/550/35\nf 515/550/35 514/1302/35 513/1303/35\nf 513/1303/35 512/1304/35 511/551/35\nf 554/1277/35 552/1281/35 511/551/35\nf 552/1281/35 550/1283/35 511/551/35\nf 543/1285/35 539/1289/35 535/552/35\nf 527/1292/35 523/1296/35 535/552/35\nf 523/1296/35 519/1298/35 535/552/35\nf 515/550/35 513/1303/35 511/551/35\nf 550/1283/35 543/1285/35 511/551/35\nf 543/1285/35 535/552/35 511/551/35\nf 519/1298/35 515/550/35 535/552/35\nf 486/1231/35 485/1229/35 557/1305/35\nf 557/1305/35 558/1306/35 548/1307/35\nf 558/1306/35 559/1308/35 546/1309/35\nf 548/1307/35 558/1306/35 546/1309/35\nf 559/1308/35 560/1310/35 544/1311/35\nf 560/1310/35 561/1312/35 542/1313/35\nf 542/1313/35 561/1312/35 540/554/35\nf 561/1312/35 562/555/35 540/554/35\nf 562/555/35 563/1314/35 538/553/35\nf 538/553/35 563/1314/35 536/1315/35\nf 563/1314/35 564/1316/35 536/1315/35\nf 564/1316/35 565/1317/35 534/1318/35\nf 565/1317/35 566/1319/35 532/1320/35\nf 566/1319/35 567/1321/35 530/1322/35\nf 532/1320/35 566/1319/35 530/1322/35\nf 567/1321/35 568/1323/35 528/1324/35\nf 568/1323/35 569/1325/35 526/1326/35\nf 526/1326/35 569/1325/35 524/1327/35\nf 569/1325/35 570/1328/35 522/1329/35\nf 570/1328/35 571/1330/35 520/1331/35\nf 571/1330/35 503/1243/35 502/1242/35\nf 571/1330/35 502/1242/35 520/1331/35\nf 570/1328/35 520/1331/35 522/1329/35\nf 564/1316/35 534/1318/35 536/1315/35\nf 534/1318/35 565/1317/35 532/1320/35\nf 486/1231/35 557/1305/35 548/1307/35\nf 569/1325/35 522/1329/35 524/1327/35\nf 544/1311/35 546/1309/35 559/1308/35\nf 568/1323/35 526/1326/35 528/1324/35\nf 542/1313/35 544/1311/35 560/1310/35\nf 567/1321/35 528/1324/35 530/1322/35\nf 566/556/16 565/1332/16 573/557/16\nf 481/559/33 480/1333/33 213/560/33\nf 482/562/32 481/1334/32 212/563/32\nf 586/1335/35 208/926/35 199/925/35\nf 203/565/35 200/148/35 224/930/35\nf 203/565/35 224/930/35 574/1336/35\nf 585/1337/35 586/1335/35 199/925/35\nf 584/1338/35 585/1337/35 199/925/35\nf 203/565/35 574/1336/35 575/1339/35\nf 203/565/35 575/1339/35 576/1340/35\nf 583/1341/161 584/1338/35 199/925/35\nf 582/1342/35 583/1341/161 199/925/35\nf 203/565/35 576/1340/35 577/1343/35\nf 203/565/35 577/1343/35 578/1344/35\nf 582/1342/35 199/925/35 203/565/35\nf 581/1345/171 582/1342/35 203/565/35\nf 203/565/35 578/1344/35 572/1346/35\nf 203/565/35 572/1346/35 573/1347/35\nf 580/567/161 581/1345/171 203/565/35\nf 203/565/35 573/1347/35 579/566/35\nf 558/568/40 557/1348/40 586/569/40\nf 562/571/21 561/1349/21 582/572/21\nf 559/574/24 558/1350/24 585/575/24\nf 557/577/27 485/1351/27 208/578/27\nf 568/580/14 567/1352/14 578/581/14\nf 507/583/5 506/1353/5 221/584/5\nf 504/586/9 503/1354/9 224/587/9\nf 479/589/36 478/1355/36 215/590/36\nf 505/592/7 504/1356/7 223/593/7\nf 483/595/31 482/1357/31 211/596/31\nf 560/598/23 559/1358/23 584/599/23\nf 478/601/37 477/1359/37 216/602/37\nf 503/604/10 571/1360/10 574/605/10\nf 569/607/13 568/1361/13 577/608/13\nf 509/610/3 508/1362/3 219/611/3\nf 485/613/28 484/1363/28 209/614/28\nf 480/616/34 479/1364/34 214/617/34\nf 570/619/12 569/1365/12 576/620/12\nf 565/622/18 564/1366/18 579/623/18\nf 564/625/19 563/1367/19 580/626/19\nf 567/628/15 566/1368/15 572/629/15\nf 571/631/11 570/1369/11 575/632/11\nf 563/634/20 562/1370/20 581/635/20\nf 506/637/6 505/1371/6 222/638/6\nf 508/640/4 507/1372/4 220/641/4\nf 561/643/22 560/1373/22 583/644/22\nf 477/646/1 476/1374/1 217/647/1\nf 476/649/2 509/1375/2 218/650/2\nf 484/652/29 483/1376/29 210/653/29\nf 588/655/1 589/658/1 590/656/1\nf 589/658/2 591/660/2 592/659/2\nf 591/660/3 593/662/3 594/661/3\nf 593/662/4 595/664/4 596/663/4\nf 595/664/5 597/666/5 598/665/5\nf 597/666/6 599/668/6 600/667/6\nf 599/668/7 601/670/7 602/669/7\nf 601/670/9 323/672/9 603/671/9\nf 323/672/10 322/674/10 604/673/10\nf 322/674/11 321/676/11 605/675/11\nf 321/676/12 320/678/12 606/677/12\nf 320/678/13 319/680/13 607/679/13\nf 319/680/14 318/682/14 608/681/14\nf 318/682/15 317/684/15 609/683/15\nf 317/684/17 316/686/17 610/685/16\nf 316/686/18 315/688/18 611/687/18\nf 315/688/19 314/690/19 612/689/19\nf 314/690/20 313/692/20 613/691/20\nf 313/692/21 312/694/21 614/693/21\nf 312/694/22 311/696/22 615/695/22\nf 311/696/23 310/698/23 616/697/23\nf 310/698/24 309/700/24 617/699/24\nf 309/700/40 308/702/40 618/701/40\nf 308/702/27 307/704/27 619/703/27\nf 307/704/28 620/706/28 621/705/28\nf 620/706/29 622/708/29 623/707/29\nf 622/708/31 624/710/31 625/709/31\nf 624/710/32 626/712/32 627/711/32\nf 626/712/33 628/714/33 629/713/33\nf 628/714/34 630/719/34 631/715/34\nf 663/754/35 632/788/35 633/771/35\nf 633/771/35 634/767/35 635/785/35\nf 635/785/35 636/782/162 637/786/35\nf 637/786/35 638/769/171 639/716/35\nf 639/716/35 640/777/35 641/760/35\nf 641/760/35 642/741/35 643/776/35\nf 643/776/35 644/744/167 645/749/35\nf 645/749/35 646/729/35 643/776/35\nf 646/729/35 647/717/35 643/776/35\nf 647/717/35 648/779/35 649/747/35\nf 649/747/35 650/778/35 647/717/35\nf 650/778/35 651/726/35 647/717/35\nf 651/726/35 652/757/171 655/718/35\nf 652/757/171 653/735/35 655/718/35\nf 653/735/35 654/784/161 655/718/35\nf 655/718/35 656/755/35 657/732/35\nf 657/732/35 658/787/35 655/718/35\nf 658/787/35 659/738/35 655/718/35\nf 659/738/35 660/759/35 661/780/35\nf 661/780/35 662/751/35 663/754/35\nf 663/754/35 633/771/35 635/785/35\nf 635/785/35 637/786/35 663/754/35\nf 637/786/35 639/716/35 663/754/35\nf 639/716/35 641/760/35 647/717/35\nf 641/760/35 643/776/35 647/717/35\nf 659/738/35 661/780/35 655/718/35\nf 661/780/35 663/754/35 655/718/35\nf 647/717/35 651/726/35 655/718/35\nf 663/754/35 639/716/35 655/718/35\nf 630/719/36 664/721/36 665/720/36\nf 664/721/37 588/655/37 587/657/37\nf 665/720/38 587/657/38 594/661/38\nf 587/657/38 590/656/38 594/661/38\nf 590/656/38 592/659/38 594/661/38\nf 594/661/38 596/663/170 598/665/38\nf 598/665/38 600/667/172 602/669/38\nf 602/669/38 603/671/38 604/673/38\nf 604/673/38 605/675/38 602/669/38\nf 605/675/38 606/677/38 602/669/38\nf 606/677/38 607/679/168 608/681/38\nf 608/681/38 609/683/38 610/685/38\nf 610/685/38 611/687/38 612/689/38\nf 612/689/38 613/691/38 614/693/38\nf 614/693/38 615/695/168 616/697/38\nf 616/697/38 617/699/38 614/693/38\nf 617/699/38 618/701/38 614/693/38\nf 618/701/38 619/703/38 625/709/38\nf 619/703/38 621/705/38 625/709/38\nf 621/705/38 623/707/172 625/709/38\nf 625/709/38 627/711/38 665/720/38\nf 627/711/38 629/713/172 665/720/38\nf 629/713/172 631/715/38 665/720/38\nf 594/661/38 598/665/38 665/720/38\nf 598/665/38 602/669/38 665/720/38\nf 606/677/38 608/681/38 610/685/38\nf 610/685/38 612/689/38 614/693/38\nf 602/669/38 606/677/38 665/720/38\nf 606/677/38 610/685/38 665/720/38\nf 610/685/38 614/693/38 618/701/38\nf 618/701/38 625/709/38 610/685/38\nf 359/1377/38 245/1040/38 599/1378/38\nf 245/1040/38 323/1039/38 601/1379/38\nf 245/1040/38 601/1379/38 599/1378/38\nf 355/1380/38 357/1381/38 593/1382/38\nf 357/1381/38 359/1377/38 597/1383/38\nf 593/1382/38 357/1381/38 595/1384/38\nf 351/1385/38 353/1386/38 589/1387/38\nf 353/1386/38 355/1380/38 591/1388/38\nf 591/1388/38 355/1380/38 593/1382/38\nf 347/1389/38 349/722/38 664/724/38\nf 349/722/38 351/1385/38 588/723/38\nf 589/1387/38 353/1386/38 591/1388/38\nf 265/1390/38 268/1391/38 628/1392/38\nf 268/1391/38 347/1389/38 630/1393/38\nf 338/1394/38 336/1395/38 626/1396/38\nf 336/1395/38 265/1390/38 628/1392/38\nf 338/1394/38 624/1397/38 622/1398/38\nf 306/1035/38 340/1399/38 620/1400/38\nf 340/1399/38 338/1394/38 622/1398/38\nf 620/1400/38 307/1036/38 306/1035/38\nf 622/1398/38 620/1400/38 340/1399/38\nf 624/1397/38 338/1394/38 626/1396/38\nf 268/1391/38 630/1393/38 628/1392/38\nf 359/1377/38 599/1378/38 597/1383/38\nf 351/1385/38 589/1387/38 588/723/38\nf 626/1396/38 336/1395/38 628/1392/38\nf 597/1383/38 595/1384/38 357/1381/38\nf 664/724/38 630/1393/38 347/1389/38\nf 464/725/15 652/757/15 651/726/15\nf 469/728/21 647/717/21 646/729/21\nf 666/731/9 658/787/9 657/732/9\nf 462/734/13 654/784/13 653/735/13\nf 668/737/6 660/759/6 659/738/6\nf 473/740/40 643/776/40 642/741/40\nf 471/743/23 645/749/23 644/744/23\nf 466/746/18 650/778/18 649/747/18\nf 470/730/22 646/729/22 645/749/22\nf 670/750/3 663/754/3 662/751/3\nf 671/753/2 632/788/2 663/754/2\nf 459/733/10 657/732/10 656/755/10\nf 463/736/14 653/735/14 652/757/14\nf 672/758/5 661/780/5 660/759/5\nf 474/742/27 642/741/27 641/760/27\nf 674/762/29 640/777/29 639/716/29\nf 461/764/11 460/756/11 656/755/11\nf 468/765/20 648/779/20 647/717/20\nf 676/766/36 635/785/36 634/767/36\nf 673/763/31 639/716/31 638/769/31\nf 675/768/37 634/767/37 633/771/37\nf 341/1401/35 342/1205/35 674/1402/35\nf 342/1205/35 475/1204/35 674/1402/35\nf 337/1403/35 339/1404/35 679/1405/35\nf 339/1404/35 341/1401/35 673/1406/35\nf 337/1403/35 679/1405/35 680/1407/35\nf 267/1408/186 266/1409/186 680/1407/35\nf 266/1409/186 337/1403/35 680/1407/35\nf 348/1410/35 346/1411/35 675/1412/35\nf 346/1411/35 267/1408/186 676/1413/35\nf 676/1413/35 267/1408/186 680/1407/35\nf 352/1414/35 350/775/35 671/774/35\nf 350/775/35 348/1410/35 678/773/35\nf 356/1415/35 354/1416/35 669/1417/35\nf 354/1416/35 352/1414/35 670/1418/35\nf 356/1415/35 668/1419/35 358/1420/35\nf 246/1192/35 358/1420/35 667/1421/35\nf 667/1421/35 358/1420/35 668/1419/35\nf 666/1422/35 459/1194/35 246/1192/35\nf 667/1421/35 666/1422/35 246/1192/35\nf 668/1419/35 356/1415/35 672/1423/35\nf 348/1410/35 675/1412/35 678/773/35\nf 341/1401/35 674/1402/35 673/1406/35\nf 673/1406/35 677/1424/35 339/1404/35\nf 346/1411/35 676/1413/35 675/1412/35\nf 672/1423/35 356/1415/35 669/1417/35\nf 677/1424/35 679/1405/35 339/1404/35\nf 669/1417/35 354/1416/35 670/1418/35\nf 671/774/35 670/1418/35 352/1414/35\nf 472/745/24 644/744/24 643/776/24\nf 475/761/28 641/760/28 640/777/28\nf 465/727/16 651/726/16 650/778/16\nf 467/748/19 649/747/19 648/779/19\nf 669/752/4 662/751/4 661/780/4\nf 679/781/33 637/786/33 636/782/33\nf 461/764/12 655/718/12 654/784/12\nf 680/783/34 636/782/34 635/785/34\nf 677/770/32 638/769/32 637/786/32\nf 667/739/7 659/738/7 658/787/7\nf 678/772/1 633/771/1 632/788/1\nf 279/789/10 184/803/10 183/790/10\nf 282/792/13 181/796/13 180/793/13\nf 281/795/12 182/129/12 181/796/12\nf 295/797/28 168/849/28 167/798/28\nf 683/800/7 186/847/7 185/801/7\nf 682/802/9 185/801/9 184/803/9\nf 685/804/5 188/824/5 187/805/5\nf 687/807/37 161/819/37 160/808/37\nf 287/810/19 176/817/19 175/811/19\nf 689/813/31 166/127/31 165/814/31\nf 286/816/18 177/853/18 176/817/18\nf 690/818/36 162/850/36 161/819/36\nf 334/822/35 255/990/38 113/989/38\nf 334/822/35 113/989/38 111/1425/38\nf 383/1426/38 381/1427/38 101/820/38\nf 381/1427/38 331/821/162 101/820/38\nf 334/822/35 111/1425/38 109/1428/38\nf 385/1429/38 383/1426/38 101/820/38\nf 334/822/35 109/1428/38 107/1430/38\nf 387/1431/38 385/1429/38 101/820/38\nf 334/822/35 107/1430/38 105/1432/172\nf 389/1433/38 387/1431/38 101/820/38\nf 334/822/35 105/1432/172 103/1434/168\nf 391/1435/38 389/1433/38 99/1436/38\nf 334/822/35 103/1434/168 101/820/38\nf 393/1437/38 391/1435/38 98/1438/38\nf 389/1433/38 101/820/38 99/1436/38\nf 299/1439/38 393/1437/38 191/1440/38\nf 254/973/38 300/1154/38 145/975/38\nf 300/1154/38 299/1439/38 149/1441/38\nf 147/1442/38 145/975/38 300/1154/38\nf 149/1441/38 147/1442/38 300/1154/38\nf 151/1443/38 149/1441/38 299/1439/38\nf 153/1444/38 151/1443/38 299/1439/38\nf 155/1445/38 153/1444/38 299/1439/38\nf 157/1446/38 155/1445/38 299/1439/38\nf 191/1440/38 157/1446/38 299/1439/38\nf 98/1438/38 191/1440/38 393/1437/38\nf 99/1436/38 98/1438/38 391/1435/38\nf 691/823/4 189/829/4 188/824/4\nf 289/825/21 174/128/21 173/826/21\nf 692/828/3 190/851/3 189/829/3\nf 284/830/14 283/794/14 180/793/14\nf 694/832/33 164/854/33 163/833/33\nf 297/1133/35 296/998/161 295/1018/35\nf 297/1133/35 295/1018/35 681/1447/35\nf 394/1448/35 298/1449/35 687/1450/35\nf 298/1449/35 297/1133/35 689/1451/35\nf 394/1448/35 686/1452/35 392/1453/35\nf 390/1454/35 392/1453/35 695/1455/35\nf 695/1455/35 392/1453/35 686/1452/35\nf 386/837/35 388/1456/35 685/1457/35\nf 388/1456/35 390/1454/35 691/1458/35\nf 692/1459/35 390/1454/35 695/1455/35\nf 382/1460/35 384/1461/35 332/836/38\nf 384/1461/35 386/837/35 332/836/38\nf 390/1454/35 692/1459/35 691/1458/35\nf 297/1133/35 681/1447/35 689/1451/35\nf 689/1451/35 688/1462/35 298/1449/35\nf 686/1452/35 394/1448/35 687/1450/35\nf 688/1462/35 694/1463/35 298/1449/35\nf 694/1463/35 693/1464/35 298/1449/35\nf 279/1015/35 278/1013/35 333/835/38\nf 682/1465/35 279/1015/35 333/835/38\nf 683/1466/35 682/1465/35 333/835/38\nf 684/1467/35 683/1466/35 386/837/35\nf 683/1466/35 333/835/38 386/837/35\nf 685/1457/35 684/1467/35 386/837/35\nf 691/1458/35 685/1457/35 388/1456/35\nf 693/1464/35 690/1468/35 298/1449/35\nf 690/1468/35 687/1450/35 298/1449/35\nf 681/799/29 167/798/29 166/127/29\nf 285/838/15 284/830/187 179/831/15\nf 290/827/22 173/826/22 172/840/22\nf 292/842/24 171/855/24 170/843/24\nf 686/809/1 160/808/1 159/845/1\nf 684/806/6 187/805/6 186/847/6\nf 294/848/27 169/852/27 168/849/27\nf 280/791/11 183/790/11 182/129/11\nf 288/812/39 175/811/39 174/128/39\nf 693/834/34 163/833/34 162/850/34\nf 695/846/2 159/845/2 190/851/2\nf 293/844/40 170/843/40 169/852/40\nf 285/838/16 178/839/16 177/853/16\nf 688/815/32 165/814/188 164/854/32\nf 291/841/23 172/840/165 171/855/23\nf 380/856/10 88/870/10 87/857/10\nf 698/859/12 86/62/12 85/860/12\nf 697/861/13 85/860/13 84/862/13\nf 364/864/28 72/914/28 71/865/28\nf 378/867/8 90/912/7 89/868/7\nf 379/869/9 89/868/9 88/870/9\nf 376/871/5 92/888/5 91/872/5\nf 371/874/37 65/886/37 64/875/37\nf 701/877/19 80/884/19 79/878/19\nf 366/880/31 70/899/158 69/881/31\nf 702/883/18 81/919/18 80/884/18\nf 370/885/36 66/918/36 65/886/36\nf 375/887/4 93/893/4 92/888/4\nf 704/889/21 78/61/21 77/890/21\nf 374/892/3 94/63/3 93/893/3\nf 699/863/14 84/862/14 83/894/14\nf 368/896/33 68/921/33 67/897/33\nf 365/866/30 71/865/29 70/899/29\nf 410/1469/35 249/1090/35 698/1470/35\nf 249/1090/35 380/1089/35 696/1471/35\nf 249/1090/35 696/1471/35 698/1470/35\nf 406/1472/35 408/1473/35 699/1474/35\nf 408/1473/35 410/1469/35 697/1475/35\nf 406/1472/35 699/1474/35 705/1476/35\nf 402/1477/35 404/1478/35 706/1479/35\nf 404/1478/35 406/1472/35 705/1476/35\nf 398/1480/35 400/900/35 700/902/35\nf 400/900/35 402/1477/35 702/1481/35\nf 326/1482/35 325/1483/35 703/1484/35\nf 325/1483/35 398/1480/35 704/1485/35\nf 413/1486/35 411/1487/35 708/1488/35\nf 411/1487/35 326/1482/35 703/1484/35\nf 413/1486/35 708/1488/35 709/1489/35\nf 363/1086/35 415/1490/35 710/1491/35\nf 415/1490/35 413/1486/35 709/1489/35\nf 710/1491/35 364/1087/35 363/1086/35\nf 709/1489/35 710/1491/35 415/1490/35\nf 325/1483/35 704/1485/35 703/1484/35\nf 402/1477/35 706/1479/35 702/1481/35\nf 404/1478/35 705/1476/35 706/1479/35\nf 410/1469/35 698/1470/35 697/1475/35\nf 708/1488/35 411/1487/35 707/1492/35\nf 707/1492/35 411/1487/35 703/1484/35\nf 697/1475/35 699/1474/35 408/1473/35\nf 400/900/35 702/1481/35 701/901/35\nf 700/902/35 704/1485/35 398/1480/35\nf 705/895/15 83/894/15 82/903/15\nf 703/891/22 77/890/22 76/905/22\nf 708/907/24 75/922/189 74/908/24\nf 372/876/1 64/875/1 63/910/1\nf 377/873/6 91/872/6 90/912/6\nf 710/913/27 73/920/27 72/914/27\nf 696/858/11 87/857/11 86/62/11\nf 700/879/164 79/878/20 78/61/164\nf 416/1493/38 235/959/38 47/1494/38\nf 235/959/38 49/958/38 47/1494/38\nf 412/1495/38 414/1496/38 43/1497/38\nf 414/1496/38 416/1493/38 45/1498/38\nf 412/1495/38 41/1499/38 39/1500/38\nf 324/1501/38 327/1502/38 39/1500/38\nf 327/1502/38 412/1495/38 39/1500/38\nf 399/915/38 397/1503/38 35/1504/38\nf 397/1503/38 324/1501/38 37/1505/38\nf 37/1505/38 324/1501/38 39/1500/38\nf 403/1506/38 401/1507/38 29/1508/38\nf 401/1507/38 399/915/38 31/917/38\nf 407/1509/38 405/1510/38 25/1511/38\nf 405/1510/38 403/1506/38 27/1512/38\nf 407/1509/38 23/1513/38 409/1514/38\nf 234/945/38 409/1514/38 21/1515/38\nf 21/1515/38 409/1514/38 23/1513/38\nf 19/1516/38 17/947/38 234/945/38\nf 21/1515/38 19/1516/38 234/945/38\nf 23/1513/38 407/1509/38 25/1511/38\nf 399/915/38 35/1504/38 33/916/38\nf 41/1499/38 412/1495/38 43/1497/38\nf 416/1493/38 47/1494/38 45/1498/38\nf 45/1498/38 43/1497/38 414/1496/38\nf 397/1503/38 37/1505/38 35/1504/38\nf 25/1511/38 405/1510/38 27/1512/38\nf 29/1508/38 27/1512/38 403/1506/38\nf 31/917/38 29/1508/38 401/1507/38\nf 369/898/34 67/897/34 66/918/34\nf 373/911/2 63/910/2 94/63/2\nf 706/904/17 82/903/155 81/919/17\nf 709/909/26 74/908/26 73/920/26\nf 367/882/32 69/881/32 68/921/32\nf 708/907/23 707/906/23 76/905/23\n";
      exports.table =
        "# Blender v2.80 (sub 51) OBJ File: ''\n# www.blender.org\nmtllib table.mtl\no Cube.029_Cube.000\nv 2.412410 -3.719680 -4.989504\nv -2.412772 -3.719680 -4.989320\nv -2.129799 -3.741642 -4.404068\nv 2.129490 -3.741642 -4.404223\nv 2.412785 -3.719694 5.036335\nv 3.001651 -3.719694 5.036305\nv 2.649621 -3.741651 4.445777\nv 2.129816 -3.741651 4.445796\nv -2.649308 -9.131202 3.714852\nv -2.649279 -9.131202 4.445970\nv -2.649279 -4.072229 4.445972\nv -2.649308 -4.072227 3.714859\nv 2.129791 -3.741647 3.557004\nv -2.129506 -3.741647 3.557171\nv -2.129473 -3.741651 4.445956\nv 2.649315 -4.637515 -3.713450\nv 2.649601 -4.637517 3.714655\nv 2.129791 -4.637517 3.714671\nv 2.129509 -4.637515 -3.713430\nv 2.129509 -4.072217 -3.713429\nv 2.649315 -4.072217 -3.713448\nv -2.129775 -4.637515 -3.713266\nv -2.649580 -4.637515 -3.713251\nv -2.649580 -4.072217 -3.713250\nv -2.129775 -4.072217 -3.713266\nv -2.412772 -4.094176 -4.989326\nv 2.412410 -4.094176 -4.989504\nv 2.129490 -4.072215 -4.404224\nv -2.129799 -4.072215 -4.404068\nv -2.649580 -3.741643 -3.713250\nv -2.649605 -3.741642 -4.404047\nv -3.001634 -3.719680 -4.989295\nv -3.001605 -3.719680 -4.206722\nv -3.001296 -3.719693 4.029662\nv -3.001263 -3.719694 5.036536\nv -2.649279 -3.741651 4.445973\nv -2.649312 -3.741647 3.557180\nv 3.001273 -3.719680 -4.989530\nv 2.649295 -3.741642 -4.404244\nv 3.001273 -4.094176 -4.989530\nv -2.129775 -3.741643 -3.713266\nv 2.129816 -4.637521 4.445793\nv 2.129791 -4.072227 3.714671\nv 2.129816 -4.072229 4.445796\nv 2.649589 -3.741647 3.556989\nv 2.649315 -3.741643 -3.713448\nv 2.129509 -3.741643 -3.713429\nv 2.129490 -4.637512 -4.404228\nv -2.129799 -4.637512 -4.404069\nv -2.129498 -4.072227 3.714834\nv -2.129498 -4.637517 3.714834\nv -2.649308 -4.637517 3.714858\nv -2.129473 -4.637521 4.445951\nv 2.649621 -9.131202 4.445775\nv 2.649601 -9.131202 3.714653\nv 2.649601 -4.072227 3.714655\nv 2.649621 -4.072229 4.445777\nv -2.649605 -4.072215 -4.404047\nv -2.129799 -9.131193 -4.404080\nv -2.649605 -9.131193 -4.404055\nv -3.001263 -4.094186 5.036532\nv -3.001296 -4.094183 4.208280\nv -3.001605 -4.094180 -4.206726\nv -3.001634 -4.094176 -4.989295\nv 3.001610 -3.719693 4.029438\nv 3.001305 -3.719680 -4.206946\nv -2.412394 -3.719694 5.036507\nv 2.649295 -4.072215 -4.404245\nv 2.649295 -9.131193 -4.404263\nv 2.129490 -9.131193 -4.404230\nv 2.412785 -4.094186 5.036335\nv 3.001651 -4.094186 5.036304\nv -2.412394 -4.094186 5.036506\nv -2.129473 -4.072229 4.445952\nv 2.129791 -9.131202 3.714666\nv 2.129816 -9.131202 4.445786\nv -2.649580 -9.131193 -3.713251\nv -2.129775 -9.131193 -3.713269\nv 2.129509 -9.131193 -3.713431\nv 2.649315 -9.131193 -3.713451\nv -2.129473 -9.131202 4.445941\nv -2.129498 -9.131202 3.714828\nv 3.001618 -4.094183 4.208052\nv 3.001305 -4.094180 -4.206946\nvt 0.054477 0.052799\nvt 0.246786 0.084188\nvt 0.066456 0.084188\nvt 0.054477 0.590513\nvt 0.044449 0.558840\nvt 0.066456 0.558840\nvt 0.963252 0.891345\nvt 0.785652 0.849345\nvt 0.963252 0.849345\nvt 0.246786 0.511172\nvt 0.246786 0.558840\nvt 0.694552 0.125045\nvt 0.955252 0.154945\nvt 0.694552 0.154945\nvt 0.975052 0.187445\nvt 0.955252 0.157545\nvt 0.975052 0.157545\nvt 0.975052 0.217345\nvt 0.955252 0.187445\nvt 0.975052 0.187445\nvt 0.308628 0.590513\nvt 0.500937 0.559123\nvt 0.512917 0.590513\nvt 0.283697 0.536511\nvt 0.268794 0.558840\nvt 0.268794 0.511172\nvt 0.044449 0.084188\nvt 0.029546 0.052798\nvt 0.553704 0.451189\nvt 0.537848 0.482771\nvt 0.537848 0.451189\nvt 0.246786 0.121238\nvt 0.537848 0.741559\nvt 0.553704 0.482771\nvt 0.553704 0.741559\nvt 0.960852 0.615845\nvt 0.935152 0.648345\nvt 0.935152 0.615845\nvt 0.044449 0.121238\nvt 0.066456 0.511172\nvt 0.044449 0.511172\nvt 0.935152 0.606345\nvt 0.785652 0.566545\nvt 0.935152 0.566545\nvt 0.066456 0.121238\nvt 0.472213 0.767955\nvt 0.073823 0.948285\nvt 0.073823 0.767955\nvt 0.955252 0.095145\nvt 0.694552 0.125045\nvt 0.694552 0.095145\nvt 0.785652 0.606345\nvt 0.935152 0.648345\nvt 0.785652 0.648345\nvt 0.785652 0.933445\nvt 0.963252 0.975445\nvt 0.785652 0.975445\nvt 0.963252 0.357345\nvt 0.785652 0.327445\nvt 0.963252 0.327445\nvt 0.537848 0.548541\nvt 0.522945 0.559123\nvt 0.522945 0.522073\nvt 0.029546 0.536511\nvt 0.258765 0.590513\nvt 0.283697 0.590513\nvt 0.268794 0.121238\nvt 0.386790 0.504517\nvt 0.374529 0.538869\nvt 0.374529 0.497109\nvt 0.963252 0.387245\nvt 0.785652 0.357345\nvt 0.963252 0.357345\nvt 0.537848 0.773142\nvt 0.553704 0.482771\nvt 0.569559 0.451189\nvt 0.569559 0.482771\nvt 0.553704 0.773142\nvt 0.569559 0.741559\nvt 0.569559 0.773142\nvt 0.960852 0.615845\nvt 0.935152 0.583345\nvt 0.960852 0.583345\nvt 0.955252 0.219945\nvt 0.975052 0.249845\nvt 0.955252 0.249845\nvt 0.955252 0.285045\nvt 0.694552 0.252445\nvt 0.955252 0.252445\nvt 0.785652 0.891345\nvt 0.963252 0.933445\nvt 0.785652 0.933445\nvt 0.785652 0.417145\nvt 0.963252 0.447045\nvt 0.785652 0.447045\nvt 0.785652 0.476945\nvt 0.963252 0.506745\nvt 0.785652 0.506745\nvt 0.785652 0.727845\nvt 0.963252 0.688045\nvt 0.963252 0.727845\nvt 0.785652 0.849345\nvt 0.963252 0.807245\nvt 0.963252 0.849345\nvt 0.963252 0.536645\nvt 0.785652 0.506745\nvt 0.963252 0.506745\nvt 0.993452 0.062645\nvt 0.843952 0.095145\nvt 0.843952 0.062645\nvt 0.785652 0.387245\nvt 0.963252 0.417145\nvt 0.785652 0.417145\nvt 0.399051 0.155502\nvt 0.399051 0.497109\nvt 0.386790 0.155502\nvt 0.955252 0.125045\nvt 0.975052 0.154945\nvt 0.955252 0.154945\nvt 0.694552 0.095145\nvt 0.843952 0.062645\nvt 0.843952 0.095145\nvt 0.785652 0.767545\nvt 0.963252 0.727845\nvt 0.963252 0.767545\nvt 0.963252 0.767545\nvt 0.785652 0.807245\nvt 0.785652 0.767545\nvt 0.258766 0.052799\nvt 0.268794 0.084188\nvt 0.537848 0.590512\nvt 0.308628 0.052798\nvt 0.298600 0.084471\nvt 0.283697 0.052799\nvt 0.298600 0.559123\nvt 0.320608 0.559123\nvt 0.512917 0.052799\nvt 0.320608 0.084471\nvt 0.522945 0.084471\nvt 0.500938 0.084471\nvt 0.283697 0.548541\nvt 0.283697 0.097220\nvt 0.298600 0.522074\nvt 0.694552 0.219945\nvt 0.955252 0.187445\nvt 0.694552 0.187445\nvt 0.955252 0.154945\nvt 0.955252 0.187445\nvt 0.955252 0.219945\nvt 0.694552 0.252445\nvt 0.694552 0.219945\nvt 0.785652 0.536645\nvt 0.963252 0.566545\nvt 0.785652 0.566545\nvt 0.955252 0.252445\nvt 0.979452 0.285045\nvt 0.955252 0.285045\nvt 0.993452 0.030145\nvt 0.843952 0.062645\nvt 0.843952 0.030145\nvt 0.963252 0.476945\nvt 0.785652 0.447045\nvt 0.963252 0.447045\nvt 0.785652 0.688045\nvt 0.963252 0.648345\nvt 0.963252 0.688045\nvt 0.553704 0.741559\nvt 0.935152 0.294945\nvt 0.959452 0.327445\nvt 0.935152 0.327445\nvt 0.785652 0.327445\nvt 0.935152 0.294945\nvt 0.935152 0.327445\nvt 0.029545 0.590513\nvt 0.785652 0.891345\nvt 0.955252 0.125045\nvt 0.955252 0.187445\nvt 0.955252 0.217345\nvt 0.283697 0.094771\nvt 0.283697 0.052799\nvt 0.960852 0.648345\nvt 0.785652 0.606345\nvt 0.472213 0.948285\nvt 0.955252 0.125045\nvt 0.935152 0.606345\nvt 0.963252 0.933445\nvt 0.785652 0.357345\nvt 0.522945 0.123683\nvt 0.537848 0.097220\nvt 0.537848 0.052798\nvt 0.029546 0.094770\nvt 0.374528 0.155502\nvt 0.374528 0.123044\nvt 0.386790 0.123044\nvt 0.386790 0.155502\nvt 0.386790 0.538869\nvt 0.785652 0.387245\nvt 0.553704 0.773142\nvt 0.553704 0.451189\nvt 0.935152 0.615845\nvt 0.975052 0.219945\nvt 0.694552 0.285045\nvt 0.963252 0.891345\nvt 0.963252 0.417145\nvt 0.963252 0.476945\nvt 0.785652 0.688045\nvt 0.785652 0.807245\nvt 0.785652 0.536645\nvt 0.993452 0.095145\nvt 0.963252 0.387245\nvt 0.399051 0.538869\nvt 0.386790 0.504517\nvt 0.386790 0.538869\nvt 0.386790 0.123044\nvt 0.399051 0.123044\nvt 0.975052 0.125045\nvt 0.694552 0.062645\nvt 0.785652 0.727845\nvt 0.963252 0.807245\nvt 0.283697 0.590513\nvt 0.298600 0.123683\nvt 0.694552 0.187445\nvt 0.694552 0.154945\nvt 0.955252 0.252445\nvt 0.963252 0.536645\nvt 0.979452 0.252445\nvt 0.993452 0.062645\nvt 0.785652 0.476945\nvt 0.785652 0.648345\nvt 0.959452 0.294945\nvt 0.785652 0.294945\n\nusemtl \u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B.007\ns 1\nf 1/1/1 3/2/1 4/3/1\nf 5/4/2 7/5/2 8/6/2\nf 10/7/3 12/8/3 9/9/3\nf 8/6/4 14/10/4 15/11/4\nf 16/12/5 18/13/5 19/14/5\nf 19/15/6 21/16/6 16/17/6\nf 23/18/6 25/19/6 22/20/6\nf 27/21/7 29/22/7 26/23/7\nf 34/24/8 36/25/8 37/26/8\nf 1/1/1 39/27/1 38/28/1\nf 40/29/6 1/30/6 38/31/6\nf 41/32/4 37/26/4 14/10/4\nf 2/33/6 27/34/6 26/35/6\nf 18/36/9 44/37/9 42/38/9\nf 46/39/4 13/40/4 45/41/4\nf 19/42/5 49/43/5 48/44/5\nf 46/39/4 4/3/4 47/45/4\nf 43/46/5 25/47/5 20/48/5\nf 51/49/5 23/50/5 22/51/5\nf 42/52/5 51/53/5 18/54/5\nf 55/55/9 57/56/9 54/57/9\nf 29/58/6 60/59/10 58/60/6\nf 63/61/11 58/62/11 24/63/11\nf 46/39/12 45/41/12 65/64/12\nf 67/65/2 36/25/2 35/66/2\nf 3/2/4 30/67/4 41/32/4\nf 13/40/4 41/32/4 14/10/4\nf 62/68/3 35/69/3 34/70/3\nf 68/71/6 70/72/10 28/73/6\nf 26/35/6 32/74/6 2/33/6\nf 71/75/13 6/76/14 5/77/13\nf 61/78/13 67/79/13 35/80/13\nf 51/81/3 74/82/3 50/83/3\nf 17/84/13 43/85/13 18/86/13\nf 19/87/3 43/88/3 20/89/3\nf 76/90/3 43/91/3 75/92/3\nf 78/93/13 24/94/13 77/95/13\nf 80/96/13 20/97/13 79/98/13\nf 24/99/3 60/100/3 77/101/3\nf 81/102/9 50/103/9 74/104/9\nf 81/105/14 11/106/13 10/107/14\nf 51/108/6 43/109/6 18/110/6\nf 67/65/2 8/6/2 15/11/2\nf 54/111/13 44/112/13 76/113/13\nf 66/114/9 65/115/9 84/116/9\nf 51/117/13 12/118/13 52/119/13\nf 28/120/6 49/121/6 29/122/6\nf 80/123/9 68/124/9 21/125/9\nf 78/126/9 29/127/9 25/128/9\nf 2/129/1 31/130/1 3/2/1\nf 26/23/7 58/62/7 64/131/7\nf 71/132/15 57/133/15 72/134/15\nf 27/21/7 68/135/7 28/136/7\nf 73/137/15 44/138/15 71/132/15\nf 73/137/15 11/139/15 74/140/15\nf 84/141/16 83/142/16 21/143/16\nf 45/41/4 8/6/4 7/5/4\nf 14/10/4 36/25/4 15/11/4\nf 47/45/4 3/2/4 41/32/4\nf 16/144/9 56/145/9 17/84/9\nf 52/146/3 24/147/3 23/148/3\nf 22/149/9 50/150/9 51/151/9\nf 75/152/6 56/153/6 55/154/6\nf 19/155/9 28/156/9 20/157/9\nf 19/158/13 25/159/13 22/160/13\nf 9/161/6 50/162/6 82/163/6\nf 20/164/3 70/165/3 79/166/3\nf 73/167/13 5/77/13 67/79/13\nf 49/168/3 25/169/3 29/170/3\nf 42/171/13 74/172/13 53/173/13\nf 1/1/1 2/129/1 3/2/1\nf 5/4/2 6/174/2 7/5/2\nf 10/7/3 11/175/3 12/8/3\nf 8/6/4 13/40/4 14/10/4\nf 16/12/5 17/176/5 18/13/5\nf 19/15/6 20/177/6 21/16/6\nf 23/18/6 24/178/6 25/19/6\nf 27/21/7 28/136/7 29/22/7\nf 30/67/8 31/130/8 33/179/8\nf 31/130/8 32/180/8 33/179/8\nf 33/179/8 34/24/8 30/67/8\nf 30/67/8 34/24/8 37/26/8\nf 34/24/8 35/66/8 36/25/8\nf 1/1/1 4/3/1 39/27/1\nf 40/29/6 27/34/6 1/30/6\nf 41/32/4 30/67/4 37/26/4\nf 2/33/6 1/30/6 27/34/6\nf 18/36/9 43/181/9 44/37/9\nf 46/39/4 47/45/4 13/40/4\nf 19/42/5 22/182/5 49/43/5\nf 46/39/4 39/27/4 4/3/4\nf 43/46/5 50/183/5 25/47/5\nf 51/49/5 52/184/5 23/50/5\nf 42/52/5 53/185/5 51/53/5\nf 55/55/9 56/186/9 57/56/9\nf 29/58/6 59/187/10 60/59/10\nf 12/188/11 11/139/11 62/189/11\nf 11/139/11 61/190/11 62/189/11\nf 62/189/11 63/61/11 24/63/11\nf 63/61/11 64/131/11 58/62/11\nf 24/63/11 12/188/11 62/189/11\nf 45/41/12 7/5/12 65/64/12\nf 7/5/12 6/174/12 65/64/12\nf 65/64/12 66/191/12 46/39/12\nf 66/191/12 38/28/12 39/27/12\nf 39/27/12 46/39/12 66/191/12\nf 67/65/2 15/11/2 36/25/2\nf 3/2/4 31/130/4 30/67/4\nf 13/40/4 47/45/4 41/32/4\nf 33/192/3 32/193/3 64/194/3\nf 64/194/3 63/195/3 33/192/3\nf 63/195/3 62/68/3 34/70/3\nf 62/68/3 61/196/3 35/69/3\nf 34/70/3 33/192/3 63/195/3\nf 68/71/6 69/197/10 70/72/10\nf 26/35/6 64/198/10 32/74/6\nf 71/75/13 72/199/13 6/76/14\nf 61/78/13 73/167/13 67/79/13\nf 51/81/3 53/200/3 74/82/3\nf 17/84/13 56/201/13 43/85/13\nf 19/87/3 18/202/3 43/88/3\nf 76/90/3 44/203/3 43/91/3\nf 78/93/13 25/204/13 24/94/13\nf 80/96/13 21/205/13 20/97/13\nf 24/99/3 58/206/3 60/100/3\nf 81/102/9 82/207/9 50/103/9\nf 81/105/14 74/208/13 11/106/13\nf 51/108/6 50/209/6 43/109/6\nf 67/65/2 5/4/2 8/6/2\nf 54/111/13 57/210/13 44/112/13\nf 65/115/9 6/211/9 83/212/9\nf 6/211/9 72/213/9 83/212/9\nf 83/212/9 84/116/9 65/115/9\nf 84/116/9 40/214/9 38/215/9\nf 38/215/9 66/114/9 84/116/9\nf 51/117/13 50/216/13 12/118/13\nf 28/120/6 48/217/6 49/121/6\nf 80/123/9 69/218/9 68/124/9\nf 78/126/9 59/219/9 29/127/9\nf 2/129/1 32/180/1 31/130/1\nf 26/23/7 29/22/7 58/62/7\nf 71/132/15 44/138/15 57/133/15\nf 27/21/7 40/220/7 68/135/7\nf 73/137/15 74/140/15 44/138/15\nf 73/137/15 61/190/15 11/139/15\nf 72/134/16 57/133/16 83/142/16\nf 57/133/16 56/221/16 83/142/16\nf 56/221/16 21/143/16 83/142/16\nf 21/143/16 68/135/16 84/141/16\nf 68/135/16 40/220/16 84/141/16\nf 45/41/4 13/40/4 8/6/4\nf 14/10/4 37/26/4 36/25/4\nf 47/45/4 4/3/4 3/2/4\nf 16/144/9 21/222/9 56/145/9\nf 52/146/3 12/223/3 24/147/3\nf 22/149/9 25/224/9 50/150/9\nf 75/152/6 43/225/6 56/153/6\nf 19/155/9 48/226/9 28/156/9\nf 19/158/13 20/227/13 25/159/13\nf 9/161/6 12/228/6 50/162/6\nf 20/164/3 28/229/3 70/165/3\nf 73/167/13 71/75/13 5/77/13\nf 49/168/3 22/230/3 25/169/3\nf 42/171/13 44/231/13 74/172/13\n";

      /***/
    },
    /* 4 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Shader = void 0;
      var index_1 = __webpack_require__(0);
      var Shader = /** @class */ (function () {
        function Shader(vertexSource, fragmentSource) {
          this.program = null;
          this.program = index_1.gl.createProgram();
          var vertexShader = this.compileShader(vertexSource, index_1.gl.VERTEX_SHADER);
          index_1.gl.attachShader(this.program, vertexShader);
          index_1.gl.deleteShader(vertexShader);
          var fragmentShader = this.compileShader(fragmentSource, index_1.gl.FRAGMENT_SHADER);
          index_1.gl.attachShader(this.program, fragmentShader);
          index_1.gl.deleteShader(fragmentShader);
          index_1.gl.linkProgram(this.program);
          if (!index_1.gl.getProgramParameter(this.program, index_1.gl.LINK_STATUS)) {
            console.log("Error linking shader program:");
            console.log(index_1.gl.getProgramInfoLog(this.program));
          }
        }
        Shader.prototype.compileShader = function (source, type) {
          var shader = index_1.gl.createShader(type);
          index_1.gl.shaderSource(shader, source);
          index_1.gl.compileShader(shader);
          if (!index_1.gl.getShaderParameter(shader, index_1.gl.COMPILE_STATUS)) {
            console.log("Error compiling " + (type === index_1.gl.VERTEX_SHADER ? "vertex" : "fragment") + " shader:");
            console.log(index_1.gl.getShaderInfoLog(shader));
          }
          return shader;
        };
        Shader.prototype.setMat4 = function (uniform, mat) {
          var loc = index_1.gl.getUniformLocation(this.program, uniform);
          index_1.gl.uniformMatrix4fv(loc, false, mat);
        };
        Shader.prototype.setVec3 = function (uniform, vec) {
          var loc = index_1.gl.getUniformLocation(this.program, uniform);
          index_1.gl.uniform3fv(loc, vec);
        };
        Shader.prototype.setVec4 = function (uniform, vec) {
          var loc = index_1.gl.getUniformLocation(this.program, uniform);
          index_1.gl.uniform4fv(loc, vec);
        };
        Shader.prototype.use = function () {
          index_1.gl.useProgram(this.program);
        };
        return Shader;
      })();
      exports.Shader = Shader;

      /***/
    },
    /* 5 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              });
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, "default", { enumerable: true, value: v });
            }
          : function (o, v) {
              o["default"] = v;
            });
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
          __setModuleDefault(result, mod);
          return result;
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Camera = void 0;
      var glm = __importStar(__webpack_require__(1));
      var Camera = /** @class */ (function () {
        function Camera(center, radius, phi, psi) {
          if (center === void 0) {
            center = [0.0, 0.0, 0.0];
          }
          if (radius === void 0) {
            radius = 10.6;
          }
          if (phi === void 0) {
            phi = Math.PI;
          }
          if (psi === void 0) {
            psi = 0;
          }
          this.sensitivity = 0.01;
          this.center = center;
          this.radius = radius;
          this.phi = phi;
          this.psi = psi;
          this.position = [radius * Math.cos(phi) * Math.cos(psi), radius * Math.sin(psi), radius * Math.sin(phi) * Math.cos(psi)];
        }
        Camera.prototype.ProcessMouseMovement = function (xoffset, yoffset) {
          this.phi += xoffset * this.sensitivity;
          this.psi += yoffset * this.sensitivity;
          if (this.psi < glm.glMatrix.toRadian(-50.0)) this.psi = glm.glMatrix.toRadian(-50.0);
          if (this.psi > glm.glMatrix.toRadian(60.0)) this.psi = glm.glMatrix.toRadian(60.0);
          this.UpdatePosition();
        };
        Camera.prototype.ProcessMouseWheel = function (offset) {
          if (offset < 0) {
            this.radius -= 50 * this.sensitivity;
          } else if (offset > 0) {
            this.radius += 50 * this.sensitivity;
          }
          if (this.radius > 11.7) this.radius = 11.7;
          if (this.radius < 3.5) this.radius = 3.5;
          this.UpdatePosition();
        };
        Camera.prototype.UpdatePosition = function () {
          this.position = [
            this.radius * Math.cos(this.phi) * Math.cos(this.psi),
            this.radius * Math.sin(this.psi),
            this.radius * Math.sin(this.phi) * Math.cos(this.psi),
          ];
        };
        Camera.prototype.Update = function () {};
        Camera.prototype.GetLookAt = function () {
          var lookat = glm.mat4.create();
          glm.mat4.lookAt(lookat, this.position, this.center, [0.0, 1.0, 0.0]);
          return lookat;
        };
        return Camera;
      })();
      exports.Camera = Camera;

      /***/
    },
    /* 6 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DirectionalLight = void 0;
      var DirectionalLight = /** @class */ (function () {
        function DirectionalLight(direction, ambient, diffuse, specular) {
          this.direction = new Float32Array(direction);
          this.ambient = new Float32Array(ambient);
          this.diffuse = new Float32Array(diffuse);
          this.specular = new Float32Array(specular);
        }
        return DirectionalLight;
      })();
      exports.DirectionalLight = DirectionalLight;

      /***/
    },
    /* 7 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Trajectory = void 0;
      var index_1 = __webpack_require__(0);
      var pi = 3.1415926535897932;
      var Point = /** @class */ (function () {
        function Point(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
        }
        return Point;
      })();
      var Trajectory = /** @class */ (function () {
        function Trajectory(length) {
          this.Points = [];
          this.VAO = null;
          this.VBO = null;
          this.raw = [];
          this.length = length;
          this.VAO = index_1.gl.createVertexArray();
          index_1.gl.bindVertexArray(this.VAO);
          this.VBO = index_1.gl.createBuffer();
          index_1.gl.bindBuffer(index_1.gl.ARRAY_BUFFER, this.VBO);
          index_1.gl.enableVertexAttribArray(0);
          index_1.gl.vertexAttribPointer(0, 3, index_1.gl.FLOAT, false, 0, 0);
          index_1.gl.bindVertexArray(null);
        }
        Trajectory.prototype.AddPoint = function (phi, theta) {
          var radius = 0.56 + 10 * 0.25;
          this.raw.push(
            Math.cos(pi / 2 - theta) * Math.sin(phi) * radius,
            Math.sin(pi / 2 - theta) * radius,
            Math.cos(pi / 2 - theta) * Math.cos(phi) * radius
          );
          if (this.raw.length / 3 > this.length) {
            this.raw.shift();
            this.raw.shift();
            this.raw.shift();
          }
        };
        Trajectory.prototype.Draw = function () {
          index_1.gl.bindVertexArray(this.VAO);
          index_1.gl.bufferData(index_1.gl.ARRAY_BUFFER, new Float32Array(this.raw), index_1.gl.STREAM_DRAW);
          index_1.gl.drawArrays(index_1.gl.LINE_STRIP, 0, this.raw.length / 3);
        };
        Trajectory.prototype.Clear = function () {
          this.raw = [];
        };
        return Trajectory;
      })();
      exports.Trajectory = Trajectory;

      /***/
    },
    /* 8 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.VertexArray = void 0;
      var index_1 = __webpack_require__(0);
      var VertexArray = /** @class */ (function () {
        function VertexArray(vertices) {
          this.VAO = null;
          this.VBO = null;
          this.EBO = null;
          this.size = vertices.length / 6;
          this.VAO = index_1.gl.createVertexArray();
          index_1.gl.bindVertexArray(this.VAO);
          this.VBO = index_1.gl.createBuffer();
          index_1.gl.bindBuffer(index_1.gl.ARRAY_BUFFER, this.VBO);
          index_1.gl.bufferData(index_1.gl.ARRAY_BUFFER, vertices, index_1.gl.STATIC_DRAW);
          index_1.gl.enableVertexAttribArray(0);
          index_1.gl.vertexAttribPointer(0, 3, index_1.gl.FLOAT, false, 8 * 4, 0);
          index_1.gl.enableVertexAttribArray(1);
          index_1.gl.vertexAttribPointer(1, 3, index_1.gl.FLOAT, false, 8 * 4, 3 * 4);
          index_1.gl.enableVertexAttribArray(2);
          index_1.gl.vertexAttribPointer(2, 2, index_1.gl.FLOAT, false, 8 * 4, 6 * 4);
          index_1.gl.bindVertexArray(null);
        }
        VertexArray.prototype.use = function () {
          index_1.gl.bindVertexArray(this.VAO);
        };
        return VertexArray;
      })();
      exports.VertexArray = VertexArray;

      /***/
    },
    /* 9 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Texture = void 0;
      var index_1 = __webpack_require__(0);
      var Texture = /** @class */ (function () {
        function Texture(filename) {
          var _this = this;
          this.texture = index_1.gl.createTexture();
          this.image = new Image();
          this.image.onload = function (e) {
            index_1.gl.bindTexture(index_1.gl.TEXTURE_2D, _this.texture);
            index_1.gl.texImage2D(index_1.gl.TEXTURE_2D, 0, index_1.gl.RGBA, index_1.gl.RGBA, index_1.gl.UNSIGNED_BYTE, _this.image);
            index_1.gl.texParameteri(index_1.gl.TEXTURE_2D, index_1.gl.TEXTURE_WRAP_S, index_1.gl.REPEAT);
            index_1.gl.texParameteri(index_1.gl.TEXTURE_2D, index_1.gl.TEXTURE_WRAP_T, index_1.gl.REPEAT);
            index_1.gl.texParameteri(index_1.gl.TEXTURE_2D, index_1.gl.TEXTURE_MIN_FILTER, index_1.gl.LINEAR_MIPMAP_LINEAR);
            index_1.gl.texParameteri(index_1.gl.TEXTURE_2D, index_1.gl.TEXTURE_MAG_FILTER, index_1.gl.LINEAR_MIPMAP_NEAREST);
            index_1.gl.generateMipmap(index_1.gl.TEXTURE_2D);
          };
          this.image.src = filename;
        }
        Texture.prototype.Use = function () {
          index_1.gl.bindTexture(index_1.gl.TEXTURE_2D, this.texture);
        };
        return Texture;
      })();
      exports.Texture = Texture;

      /***/
    },
    /* 10 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      var OBJFile = /** @class */ (function () {
        function OBJFile(fileContents, defaultModelName) {
          this.defaultModelName = "untitled";
          this.currentMaterial = "";
          this.currentGroup = "";
          this.smoothingGroup = 0;
          this.result = {
            materialLibraries: [],
            models: [],
          };
          this.fileContents = fileContents;
          if (defaultModelName !== undefined) {
            this.defaultModelName = defaultModelName;
          }
        }
        OBJFile.prototype.parseAsync = function () {
          var _this = this;
          return new Promise(function (resolve, reject) {
            try {
              resolve(_this.parse());
            } catch (theError) {
              reject(theError);
            }
          });
        };
        OBJFile.prototype.parse = function () {
          var stripComments = function (line) {
            var commentIndex = line.indexOf("#");
            if (commentIndex > -1) {
              return line.substring(0, commentIndex);
            }
            return line;
          };
          var lines = this.fileContents.split("\n");
          for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            var strippedline = stripComments(line);
            var lineItems = strippedline.replace(/\s\s+/g, " ").trim().split(" ");
            switch (lineItems[0].toLowerCase()) {
              case "o": // Start A New Model
                this.parseObject(lineItems);
                break;
              case "g": // Start a new polygon group
                this.parseGroup(lineItems);
                break;
              case "v": // Define a vertex for the current model
                this.parseVertexCoords(lineItems);
                break;
              case "vt": // Texture Coords
                this.parseTextureCoords(lineItems);
                break;
              case "vn": // Define a vertex normal for the current model
                this.parseVertexNormal(lineItems);
                break;
              case "s": // Smooth shading statement
                this.parseSmoothShadingStatement(lineItems);
                break;
              case "f": // Define a Face/Polygon
                this.parsePolygon(lineItems);
                break;
              case "mtllib": // Reference to a material library file (.mtl)
                this.parseMtlLib(lineItems);
                break;
              case "usemtl": // Sets the current material to be applied to polygons defined from this point forward
                this.parseUseMtl(lineItems);
                break;
            }
          }
          return this.result;
        };
        OBJFile.prototype.currentModel = function () {
          if (this.result.models.length === 0) {
            this.result.models.push({
              faces: [],
              name: this.defaultModelName,
              textureCoords: [],
              vertexNormals: [],
              vertices: [],
            });
            this.currentGroup = "";
            this.smoothingGroup = 0;
          }
          return this.result.models[this.result.models.length - 1];
        };
        OBJFile.prototype.parseObject = function (lineItems) {
          var modelName = lineItems.length >= 2 ? lineItems[1] : this.defaultModelName;
          this.result.models.push({
            faces: [],
            name: modelName,
            textureCoords: [],
            vertexNormals: [],
            vertices: [],
          });
          this.currentGroup = "";
          this.smoothingGroup = 0;
        };
        OBJFile.prototype.parseGroup = function (lineItems) {
          if (lineItems.length !== 2) {
            throw "Group statements must have exactly 1 argument (eg. g group_1)";
          }
          this.currentGroup = lineItems[1];
        };
        OBJFile.prototype.parseVertexCoords = function (lineItems) {
          var x = lineItems.length >= 2 ? parseFloat(lineItems[1]) : 0.0;
          var y = lineItems.length >= 3 ? parseFloat(lineItems[2]) : 0.0;
          var z = lineItems.length >= 4 ? parseFloat(lineItems[3]) : 0.0;
          this.currentModel().vertices.push({ x: x, y: y, z: z });
        };
        OBJFile.prototype.parseTextureCoords = function (lineItems) {
          var u = lineItems.length >= 2 ? parseFloat(lineItems[1]) : 0.0;
          var v = lineItems.length >= 3 ? parseFloat(lineItems[2]) : 0.0;
          var w = lineItems.length >= 4 ? parseFloat(lineItems[3]) : 0.0;
          this.currentModel().textureCoords.push({ u: u, v: v, w: w });
        };
        OBJFile.prototype.parseVertexNormal = function (lineItems) {
          var x = lineItems.length >= 2 ? parseFloat(lineItems[1]) : 0.0;
          var y = lineItems.length >= 3 ? parseFloat(lineItems[2]) : 0.0;
          var z = lineItems.length >= 4 ? parseFloat(lineItems[3]) : 0.0;
          this.currentModel().vertexNormals.push({ x: x, y: y, z: z });
        };
        OBJFile.prototype.parsePolygon = function (lineItems) {
          var totalVertices = lineItems.length - 1;
          if (totalVertices < 3) {
            throw "Face statement has less than 3 vertices";
          }
          var face = {
            group: this.currentGroup,
            material: this.currentMaterial,
            smoothingGroup: this.smoothingGroup,
            vertices: [],
          };
          for (var i = 0; i < totalVertices; i += 1) {
            var vertexString = lineItems[i + 1];
            var vertexValues = vertexString.split("/");
            if (vertexValues.length < 1 || vertexValues.length > 3) {
              throw "Two many values (separated by /) for a single vertex";
            }
            var vertexIndex = 0;
            var textureCoordsIndex = 0;
            var vertexNormalIndex = 0;
            vertexIndex = parseInt(vertexValues[0], 10);
            if (vertexValues.length > 1 && vertexValues[1] !== "") {
              textureCoordsIndex = parseInt(vertexValues[1], 10);
            }
            if (vertexValues.length > 2) {
              vertexNormalIndex = parseInt(vertexValues[2], 10);
            }
            if (vertexIndex === 0) {
              throw "Faces uses invalid vertex index of 0";
            }
            // Negative vertex indices refer to the nth last defined vertex
            // convert these to postive indices for simplicity
            if (vertexIndex < 0) {
              vertexIndex = this.currentModel().vertices.length + 1 + vertexIndex;
            }
            face.vertices.push({
              textureCoordsIndex: textureCoordsIndex,
              vertexIndex: vertexIndex,
              vertexNormalIndex: vertexNormalIndex,
            });
          }
          this.currentModel().faces.push(face);
        };
        OBJFile.prototype.parseMtlLib = function (lineItems) {
          if (lineItems.length >= 2) {
            this.result.materialLibraries.push(lineItems[1]);
          }
        };
        OBJFile.prototype.parseUseMtl = function (lineItems) {
          if (lineItems.length >= 2) {
            this.currentMaterial = lineItems[1];
          }
        };
        OBJFile.prototype.parseSmoothShadingStatement = function (lineItems) {
          if (lineItems.length !== 2) {
            throw "Smoothing group statements must have exactly 1 argument (eg. s <number|off>)";
          }
          var groupNumber = lineItems[1].toLowerCase() === "off" ? 0 : parseInt(lineItems[1], 10);
          this.smoothingGroup = groupNumber;
        };
        return OBJFile;
      })();
      exports.default = OBJFile;

      /***/
    },
    /* 11 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              });
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k;
              o[k2] = m[k];
            });
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, "default", { enumerable: true, value: v });
            }
          : function (o, v) {
              o["default"] = v;
            });
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
          __setModuleDefault(result, mod);
          return result;
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Gyroscope = void 0;
      var model = __importStar(__webpack_require__(2));
      var glm = __importStar(__webpack_require__(1));
      var objmodels = __importStar(__webpack_require__(3));
      var g = 9.80665;
      var pi = 3.1415926535897932;
      var Gyroscope = /** @class */ (function () {
        function Gyroscope(length, mass, radius, psi_dot, phi_dot, theta) {
          this.psi = 0;
          this.phi = 0;
          this.theta_dot = 0;
          this.time = 0;
          this.diskPos = [];
          this.disk = new Disk();
          this.axis = new Axis();
          this.box = new Box();
          this.stand = new Stand();
          model.LoadModel(objmodels.axis, "assets/AxisMat.png", this.axis);
          model.LoadModel(objmodels.box, "assets/boxMat.png", this.box);
          model.LoadModel(objmodels.disk, "assets/DiskMat.png", this.disk);
          model.LoadModel(objmodels.stand, "assets/standMat.png", this.stand);
          this.length = length;
          this.mass = mass;
          this.radius = radius;
          this.psi_dot = psi_dot;
          this.phi_dot = phi_dot;
          this.theta = theta;
          this.CalculateConstants();
          this.CalculateDiskPos();
          this.disk.Update(this.diskPos, this.radius / 0.08, 0, 0, 0);
        }
        Gyroscope.prototype.GetPhi = function () {
          return this.phi;
        };
        Gyroscope.prototype.GetTheta = function () {
          return this.theta;
        };
        Gyroscope.prototype.GetEk = function () {
          return (
            0.5 *
            (this.I0 * (this.theta_dot * this.theta_dot + this.phi_dot * this.phi_dot * Math.sin(this.theta) * Math.sin(this.theta)) +
              this.I_psi * (this.psi_dot + this.phi_dot * Math.cos(this.theta)) * (this.psi_dot + this.phi_dot * Math.cos(this.theta)))
          );
        };
        Gyroscope.prototype.GetU = function () {
          return this.mass * g * this.length * Math.cos(this.theta);
        };
        Gyroscope.prototype.GetE = function () {
          return Math.round((this.GetEk() + this.GetU() * 10) / 10.0);
        };
        Gyroscope.prototype.Update = function (dt) {
          this.time += dt;
          var prevPsi = this.psi;
          var prevPhi = this.phi;
          this.CalculateValues(dt);
          this.CalculateDiskPos();
          this.box.Update(this.phi - prevPhi);
          this.axis.Update(this.phi - prevPhi, this.theta - pi / 2);
          this.disk.Update(this.diskPos, this.radius / 0.08, this.psi - prevPsi, this.phi - prevPhi, this.theta - pi / 2);
        };
        Gyroscope.prototype.Reset = function () {
          this.mass = 0.1;
          this.radius = 0.08;
          this.length = 0.2;
          this.psi = 0;
          this.psi_dot = 500;
          this.phi = 0;
          this.phi_dot = 0;
          this.theta = pi / 2;
          this.theta_dot = 0;
          this.time = 0;
          this.CalculateConstants();
          this.CalculateDiskPos();
          this.box.Reset();
          this.axis.Reset();
          this.disk.Reset(this.diskPos, this.radius / 0.08);
        };
        Gyroscope.prototype.SetTransform = function () {
          this.CalculateConstants();
          this.CalculateDiskPos();
          this.disk.Update(this.diskPos, this.radius / 0.08, 0, 0, this.theta - pi / 2);
          this.axis.Update(0, this.theta - pi / 2);
        };
        Gyroscope.prototype.CalculateValues = function (dt) {
          var K1 = [];
          K1.push(dt * this.dy1(this.theta));
          K1.push(dt * this.dy1(this.theta + K1[0] / 2));
          K1.push(dt * this.dy1(this.theta + K1[1] / 2));
          K1.push(dt * this.dy1(this.theta + K1[2]));
          this.theta_dot += (K1[0] + 2 * K1[1] + 2 * K1[2] + K1[3]) / 6;
          var K2 = [];
          K2.push(dt * this.dy2(this.theta_dot));
          K2.push(dt * this.dy2(this.theta_dot + K2[0] / 2));
          K2.push(dt * this.dy2(this.theta_dot + K2[1] / 2));
          K2.push(dt * this.dy2(this.theta_dot + K2[2]));
          this.theta += (K2[0] + 2 * K2[1] + 2 * K2[2] + K2[3]) / 6;
          this.phi_dot = this.L_phi - this.L_psi * Math.cos(this.theta);
          this.phi_dot /= this.I0;
          this.phi_dot /= Math.sin(this.theta);
          this.phi_dot /= Math.sin(this.theta);
          this.psi_dot = this.L_psi / this.I_psi;
          this.psi_dot -= this.phi_dot * Math.cos(this.theta);
          var K3 = [];
          K3.push(dt * this.dy3(this.theta));
          K3.push(dt * this.dy3(this.theta + K3[0] / 2));
          K3.push(dt * this.dy3(this.theta + K3[1] / 2));
          K3.push(dt * this.dy3(this.theta + K3[2]));
          this.phi += (K3[0] + 2 * K3[1] + 2 * K3[2] + K3[3]) / 6;
          var K4 = [];
          K4.push(dt * this.dy4(this.theta));
          K4.push(dt * this.dy4(this.theta + K4[0] / 2));
          K4.push(dt * this.dy4(this.theta + K4[1] / 2));
          K4.push(dt * this.dy4(this.theta + K4[2]));
          this.psi += (K4[0] + 2 * K4[1] + 2 * K4[2] + K4[3]) / 6;
        };
        Gyroscope.prototype.CalculateConstants = function () {
          this.I_psi = 0.5 * this.mass * this.radius * this.radius;
          this.I0 = this.mass * this.length * this.length + this.I_psi * 0.5;
          this.L_psi = this.I_psi * (this.phi_dot * Math.cos(this.theta) + this.psi_dot);
          this.L_phi = this.I0 * this.phi_dot * Math.sin(this.theta) * Math.sin(this.theta) + this.L_psi * Math.cos(this.theta);
        };
        Gyroscope.prototype.CalculateDiskPos = function () {
          var radius = 0.56 + 10 * this.length;
          this.diskPos = [
            Math.cos(pi / 2 - this.theta) * Math.sin(this.phi) * radius,
            Math.sin(pi / 2 - this.theta) * radius,
            Math.cos(pi / 2 - this.theta) * Math.cos(this.phi) * radius,
          ];
        };
        Gyroscope.prototype.dy1 = function (arg) {
          var fun1 = -(this.L_phi - this.L_psi * Math.cos(arg)) * this.L_psi;
          var fun2 = Math.cos(arg) * (this.L_phi - this.L_psi * Math.cos(arg)) * (this.L_phi - this.L_psi * Math.cos(arg));
          var fun3 = this.mass * this.length * g * Math.sin(arg);
          fun1 /= this.I0 * this.I0 * Math.sin(arg);
          fun2 /= this.I0 * this.I0 * Math.sin(arg) * Math.sin(arg) * Math.sin(arg);
          fun3 /= this.I0;
          return fun1 + fun2 + fun3;
        };
        Gyroscope.prototype.dy2 = function (arg) {
          return arg;
        };
        Gyroscope.prototype.dy3 = function (arg) {
          var fun1 = this.L_phi - this.L_psi * Math.cos(arg);
          var fun2 = this.I0 * Math.sin(arg) * Math.sin(arg);
          return fun1 / fun2;
        };
        Gyroscope.prototype.dy4 = function (arg) {
          var fun1 = this.L_psi / this.I_psi;
          var fun2 = this.phi_dot * Math.cos(arg);
          return fun1 - fun2;
        };
        return Gyroscope;
      })();
      exports.Gyroscope = Gyroscope;
      var Stand = /** @class */ (function () {
        function Stand() {}
        return Stand;
      })();
      var Box = /** @class */ (function () {
        function Box() {}
        Box.prototype.Update = function (dPhi) {
          glm.mat4.rotateY(this.modelMat, this.modelMat, dPhi);
        };
        Box.prototype.Reset = function () {
          glm.mat4.identity(this.modelMat);
        };
        return Box;
      })();
      var Axis = /** @class */ (function () {
        function Axis() {
          this.nutation = glm.mat4.create();
          this.precession = glm.mat4.create();
          this.rotation = glm.mat4.create();
          this.translation = glm.mat4.create();
          glm.mat4.identity(this.nutation);
          glm.mat4.identity(this.precession);
          glm.mat4.identity(this.rotation);
          glm.mat4.identity(this.translation);
        }
        Axis.prototype.Update = function (dPhi, dTheta) {
          glm.mat4.identity(this.translation);
          glm.mat4.identity(this.nutation);
          glm.mat4.rotateX(this.nutation, this.nutation, dTheta);
          glm.mat4.rotateY(this.precession, this.precession, dPhi);
          glm.mat4.mul(this.rotation, this.precession, this.nutation);
          glm.mat4.identity(this.modelMat);
          glm.mat4.mul(this.modelMat, this.translation, this.rotation);
        };
        Axis.prototype.Reset = function () {
          glm.mat4.identity(this.nutation);
          glm.mat4.identity(this.precession);
          glm.mat4.identity(this.rotation);
          glm.mat4.identity(this.translation);
          glm.mat4.identity(this.modelMat);
        };
        return Axis;
      })();
      var Disk = /** @class */ (function () {
        function Disk() {
          this.nutation = glm.mat4.create();
          this.precession = glm.mat4.create();
          this.rotation = glm.mat4.create();
          this.translation = glm.mat4.create();
          this.diskRotation = glm.mat4.create();
          glm.mat4.identity(this.nutation);
          glm.mat4.identity(this.precession);
          glm.mat4.identity(this.diskRotation);
          glm.mat4.identity(this.rotation);
          glm.mat4.identity(this.translation);
        }
        Disk.prototype.Update = function (diskPos, radius, dPsi, dPhi, dTheta) {
          glm.mat4.identity(this.translation);
          glm.mat4.translate(this.translation, this.translation, new Float32Array(diskPos));
          glm.mat4.identity(this.nutation);
          glm.mat4.rotateX(this.nutation, this.nutation, dTheta);
          glm.mat4.rotateY(this.precession, this.precession, dPhi);
          glm.mat4.rotateZ(this.diskRotation, this.diskRotation, dPsi);
          glm.mat4.mul(this.rotation, this.nutation, this.diskRotation);
          glm.mat4.mul(this.rotation, this.precession, this.rotation);
          glm.mat4.identity(this.modelMat);
          glm.mat4.mul(this.modelMat, this.translation, this.rotation);
          glm.mat4.scale(this.modelMat, this.modelMat, [radius, radius, 1.0]);
        };
        Disk.prototype.Reset = function (diskPos, radius) {
          glm.mat4.identity(this.nutation);
          glm.mat4.identity(this.precession);
          glm.mat4.identity(this.diskRotation);
          glm.mat4.identity(this.rotation);
          glm.mat4.identity(this.translation);
          glm.mat4.identity(this.modelMat);
          glm.mat4.translate(this.translation, this.translation, new Float32Array(diskPos));
          glm.mat4.mul(this.modelMat, this.translation, this.modelMat);
          glm.mat4.scale(this.modelMat, this.modelMat, [radius, radius, 1.0]);
        };
        return Disk;
      })();

      /***/
    },
    /* 12 */
    /***/ function (module, exports, __webpack_require__) {
      "use strict";

      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FragTrajectory = exports.vertTrajectory = exports.FragBase = exports.vertBase = void 0;
      exports.vertBase =
        "#version 300 es\n    layout(location = 0) in vec3 pos;\n    layout(location = 1) in vec3 normal;\n    layout(location = 2) in vec2 uv;\n\n    uniform mat4 model;\n    uniform mat4 view;\n    uniform mat4 proj;\n\n    out vec3 v_pos;\n    out vec3 v_normal;\n    out vec2 v_uv;\n\n    void main() {\n      gl_Position = proj * view * model * vec4(pos, 1.0);\n      v_pos = vec3(model * vec4(pos, 1.0));\n      v_normal =  mat3(transpose(inverse(model))) * normal;\n      v_uv = vec2(uv.x, -uv.y);\n    }";
      exports.FragBase =
        "#version 300 es\n    #ifdef GL_ES\n        precision highp float;\n    #endif\n\n    in vec3 v_pos;\n    in vec3 v_normal;\n    in vec2 v_uv;\n\n    out vec4 color;\n\n    const float density = 0.07;\n    const float gradient = 7.0;\n\n\n    uniform vec3 viewPos;\n    uniform sampler2D diffuse_tex;\n\n    struct DirectionalLight \n    {\n        vec3 direction;\n\n        vec3 ambient;\n        vec3 diffuse;\n        vec3 specular;\n    };\n\n    uniform DirectionalLight lights[20];\n\n    vec3 CalcDirLight(DirectionalLight light, vec3 normal, vec3 viewDir)\n    {\n        vec3 lightDir = normalize(-light.direction);\n        // diffuse\n        float diff = max(dot(normal, lightDir), 0.0);\n\n        // specular\n        vec3 reflectDir = reflect(-lightDir, normal);\n        float max_spec = max(dot(viewDir, reflectDir), 0.0);\n\n        float spec = max_spec;\n        for (int i = 0; i < 32; i++)\n            spec *= max_spec;\n\n        // combine results\n        vec3 ambient  = light.ambient;\n        vec3 diffuse  = light.diffuse  * diff * vec3(texture(diffuse_tex, v_uv));\n        vec3 specular = light.specular * spec;\n        return (ambient + diffuse + specular);\n    } \n\n    void main() \n    {\n        vec3 norm = normalize(v_normal);\n        vec3 viewDir = normalize(viewPos - v_pos);\n\n        vec3 result = vec3(0.0, 0.0, 0.0);\n        for (int i = 0; i < 20; i++)\n            result += CalcDirLight(lights[i], norm, viewDir);\n\n        vec2 p = vec2(v_pos.x, v_pos.z);\n        float distance = length(p);\n        float visibility = exp(-pow((distance * density), gradient));\n        visibility = clamp(visibility, 0.0, 1.0);\n\n        color = mix(vec4(0.82, 0.88, 0.94, 1.0), vec4(result, 1.0), visibility);\n    }";
      exports.vertTrajectory =
        "#version 300 es\n    layout(location = 0) in vec3 pos;\n\n    uniform mat4 t_model;\n    uniform mat4 t_view;\n    uniform mat4 t_proj;\n\n    void main() {\n      gl_Position = t_proj * t_view * vec4(pos, 1.0);\n    }";
      exports.FragTrajectory =
        "#version 300 es\n    #ifdef GL_ES\n        precision highp float;\n    #endif\n\n    out vec4 color;\n\n\n    void main() \n    {\n        color = vec4(0.0, 0.0, 0.0, 1.0);\n    }";

      /***/
    },
    /******/
  ]
);
//# sourceMappingURL=bundle.js.map
