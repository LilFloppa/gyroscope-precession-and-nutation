import * as glm from "gl-matrix";
import { gl } from ".";

export class Camera {
  position: glm.vec3;
  private center: glm.vec3;

  private radius: number;
  private phi: number;
  private psi: number;

  private sensitivity: number = 0.01;

  constructor(center: glm.vec3 = [0.0, 0.0, 0.0], radius: number = 5, phi: number = 0, psi: number = 0) {
    this.center = center;
    this.radius = radius;
    this.phi = phi;
    this.psi = psi;

    this.position = [radius * Math.cos(phi) * Math.cos(psi), radius * Math.sin(psi), radius * Math.sin(phi) * Math.cos(psi)];
  }

  ProcessMouseMovement(xoffset: number, yoffset: number): void {
    this.phi += xoffset * this.sensitivity;
    this.psi += yoffset * this.sensitivity;
    if (this.psi < glm.glMatrix.toRadian(-60.0)) this.psi = glm.glMatrix.toRadian(-60.0);
    if (this.psi > glm.glMatrix.toRadian(60.0)) this.psi = glm.glMatrix.toRadian(60.0);

    this.UpdatePosition();
  }

  ProcessMouseWheel(offset: number) {
    if (offset < 0) {
      this.radius -= 50 * this.sensitivity;
    } else if (offset > 0) {
      this.radius += 50 * this.sensitivity;
    }

    // if (this.radius > 13.0) this.radius = 13.0;

    //  if (this.radius < 5.0) this.radius = 5.0;

    this.UpdatePosition();
  }

  private UpdatePosition(): void {
    this.position = [
      this.radius * Math.cos(this.phi) * Math.cos(this.psi),
      this.radius * Math.sin(this.psi),
      this.radius * Math.sin(this.phi) * Math.cos(this.psi),
    ];
  }

  Update(): void {}

  GetLookAt(): glm.mat4 {
    let lookat: glm.mat4 = glm.mat4.create();
    glm.mat4.lookAt(lookat, this.position, this.center, [0.0, 1.0, 0.0]);
    return lookat;
  }
}
