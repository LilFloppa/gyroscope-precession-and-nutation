import { VertexArray } from "./vertexArray";
import { Shader } from "./shader";
import { Texture } from "./texture";
import * as model from "./model";

import * as glm from "gl-matrix";
import * as objmodels from "./objmodels";

const g = 9.80665;
const pi = 3.1415926535897932;

export class Gyroscope {
  stand: Stand;
  box: Box;
  axis: Axis;
  disk: Disk;

  I_psi: number;
  I0: number;
  mass: number;
  radius: number;
  length: number;
  psi: number = 0;
  psi_dot: number;
  phi: number = 0;
  phi_dot: number;
  theta: number;
  theta_dot: number = 0;
  L_psi: number;
  L_phi: number;
  time: number = 0;

  diskPos: number[] = [];

  constructor(length: number, mass: number, radius: number, psi_dot: number, phi_dot: number, theta: number) {
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

  Update(dt: number): void {
    this.time += dt;

    let prevPsi: number = this.psi;
    let prevPhi: number = this.phi;
    this.CalculateValues(dt);

    this.CalculateDiskPos();
    this.box.Update(this.phi - prevPhi);
    this.axis.Update(this.phi - prevPhi, this.theta - pi / 2);
    this.disk.Update(this.diskPos, this.radius / 0.08, this.psi - prevPsi, this.phi - prevPhi, this.theta - pi / 2);
  }

  Reset(): void {
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
  }

  SetTransform() {
    this.CalculateConstants();
    this.CalculateDiskPos();

    this.disk.Update(this.diskPos, this.radius / 0.08, 0, 0, this.theta - pi / 2);
    this.axis.Update(0, this.theta - pi / 2);
  }

  CalculateValues(dt: number) {
    let K1: number[] = [];
    K1.push(dt * this.dy1(this.theta));
    K1.push(dt * this.dy1(this.theta + K1[0] / 2));
    K1.push(dt * this.dy1(this.theta + K1[1] / 2));
    K1.push(dt * this.dy1(this.theta + K1[2]));

    this.theta_dot += (K1[0] + 2 * K1[1] + 2 * K1[2] + K1[3]) / 6;

    let K2: number[] = [];
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

    let K3: number[] = [];
    K3.push(dt * this.dy3(this.theta));
    K3.push(dt * this.dy3(this.theta + K3[0] / 2));
    K3.push(dt * this.dy3(this.theta + K3[1] / 2));
    K3.push(dt * this.dy3(this.theta + K3[2]));

    this.phi += (K3[0] + 2 * K3[1] + 2 * K3[2] + K3[3]) / 6;

    let K4: number[] = [];
    K4.push(dt * this.dy4(this.theta));
    K4.push(dt * this.dy4(this.theta + K4[0] / 2));
    K4.push(dt * this.dy4(this.theta + K4[1] / 2));
    K4.push(dt * this.dy4(this.theta + K4[2]));

    this.psi += (K4[0] + 2 * K4[1] + 2 * K4[2] + K4[3]) / 6;
  }

  CalculateConstants(): void {
    this.I_psi = 0.5 * this.mass * this.radius * this.radius;
    this.I0 = this.mass * this.length * this.length + this.I_psi * 0.5;
    this.L_psi = this.I_psi * (this.phi_dot * Math.cos(this.theta) + this.psi_dot);
    this.L_phi = this.I0 * this.phi_dot * Math.sin(this.theta) * Math.sin(this.theta) + this.L_psi * Math.cos(this.theta);
  }

  CalculateDiskPos(): void {
    let radius: number = 0.56 + 10 * this.length;
    this.diskPos = [
      Math.cos(pi / 2 - this.theta) * Math.sin(this.phi) * radius,
      Math.sin(pi / 2 - this.theta) * radius,
      Math.cos(pi / 2 - this.theta) * Math.cos(this.phi) * radius,
    ];
  }

  dy1(arg: number): number {
    let fun1: number = -(this.L_phi - this.L_psi * Math.cos(arg)) * this.L_psi;
    let fun2: number = Math.cos(arg) * (this.L_phi - this.L_psi * Math.cos(arg)) * (this.L_phi - this.L_psi * Math.cos(arg));
    let fun3: number = this.mass * this.length * g * Math.sin(arg);

    fun1 /= this.I0 * this.I0 * Math.sin(arg);
    fun2 /= this.I0 * this.I0 * Math.sin(arg) * Math.sin(arg) * Math.sin(arg);
    fun3 /= this.I0;

    return fun1 + fun2 + fun3;
  }

  dy2(arg: number): number {
    return arg;
  }

  dy3(arg: number): number {
    let fun1: number = this.L_phi - this.L_psi * Math.cos(arg);
    let fun2: number = this.I0 * Math.sin(arg) * Math.sin(arg);

    return fun1 / fun2;
  }

  dy4(arg: number): number {
    let fun1: number = this.L_psi / this.I_psi;
    let fun2: number = this.phi_dot * Math.cos(arg);

    return fun1 - fun2;
  }
}

class Stand implements model.IModel {
  array: VertexArray;
  texture: Texture;

  modelMat: glm.mat4;
}

class Box implements model.IModel {
  array: VertexArray;
  texture: Texture;

  modelMat: glm.mat4;

  Update(dPhi: number): void {
    glm.mat4.rotateY(this.modelMat, this.modelMat, dPhi);
  }

  Reset(): void {
    glm.mat4.identity(this.modelMat);
  }
}

class Axis implements model.IModel {
  array: VertexArray;
  texture: Texture;

  nutation: glm.mat4;
  precession: glm.mat4;
  rotation: glm.mat4;
  translation: glm.mat4;
  modelMat: glm.mat4;

  constructor() {
    this.nutation = glm.mat4.create();
    this.precession = glm.mat4.create();
    this.rotation = glm.mat4.create();
    this.translation = glm.mat4.create();

    glm.mat4.identity(this.nutation);
    glm.mat4.identity(this.precession);
    glm.mat4.identity(this.rotation);
    glm.mat4.identity(this.translation);
  }

  Update(dPhi: number, dTheta: number): void {
    glm.mat4.identity(this.translation);

    glm.mat4.identity(this.nutation);
    glm.mat4.rotateX(this.nutation, this.nutation, dTheta);

    glm.mat4.rotateY(this.precession, this.precession, dPhi);
    glm.mat4.mul(this.rotation, this.precession, this.nutation);

    glm.mat4.identity(this.modelMat);
    glm.mat4.mul(this.modelMat, this.translation, this.rotation);
  }

  Reset(): void {
    glm.mat4.identity(this.nutation);
    glm.mat4.identity(this.precession);
    glm.mat4.identity(this.rotation);
    glm.mat4.identity(this.translation);
    glm.mat4.identity(this.modelMat);
  }
}

class Disk implements model.IModel {
  array: VertexArray;
  texture: Texture;

  modelMat: glm.mat4;
  nutation: glm.mat4;
  precession: glm.mat4;
  diskRotation: glm.mat4;
  rotation: glm.mat4;
  translation: glm.mat4;

  constructor() {
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

  Update(diskPos: number[], radius: number, dPsi: number, dPhi: number, dTheta: number): void {
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
  }

  Reset(diskPos: number[], radius: number): void {
    glm.mat4.identity(this.nutation);
    glm.mat4.identity(this.precession);
    glm.mat4.identity(this.diskRotation);
    glm.mat4.identity(this.rotation);
    glm.mat4.identity(this.translation);
    glm.mat4.identity(this.modelMat);

    glm.mat4.translate(this.translation, this.translation, new Float32Array(diskPos));
    glm.mat4.mul(this.modelMat, this.translation, this.modelMat);
    glm.mat4.scale(this.modelMat, this.modelMat, [radius, radius, 1.0]);
  }
}
