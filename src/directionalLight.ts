import * as glm from "gl-matrix";

export class DirectionalLight {
  direction: glm.vec3;
  ambient: glm.vec3;
  diffuse: glm.vec3;
  specular: glm.vec3;

  constructor(direction: number[], ambient: number[], diffuse: number[], specular: number[]) {
    this.direction = new Float32Array(direction);
    this.ambient = new Float32Array(ambient);
    this.diffuse = new Float32Array(diffuse);
    this.specular = new Float32Array(specular);
  }
}
