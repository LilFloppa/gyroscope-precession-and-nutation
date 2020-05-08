import { Shader } from "./shader";
import { VertexArray } from "./vertexArray";
import { Texture } from "./texture";

import * as glm from "gl-matrix";
import * as obj from "obj-file-parser-ts";

export interface IModel {
  array: VertexArray;
  shader: Shader;
  texture: Texture;

  modelMat: glm.mat4;

  Update(): void;
}

export class Model implements IModel {
  array: VertexArray;
  shader: Shader;
  texture: Texture;

  modelMat: glm.mat4;

  Update(): void {}
}

class Vertex {
  coords: number[];
  normal: number[];
  UV: number[];

  constructor(coords: number[], UV: number[], normal: number[]) {
    this.coords = coords;
    this.UV = UV;
    this.normal = normal;
  }
}

export function LoadModel(data: string, texFileName: string, model: IModel) {
  const objFile = new obj.default(data);
  console.log(objFile);
  const parsed = objFile.parse();

  let vertices: { x: number; y: number; z: number }[] = [];
  let UVs: { u: number; v: number }[] = [];
  let normals: { x: number; y: number; z: number }[] = [];

  let parsed_vertices: Vertex[] = [];

  parsed.models[0].vertices.forEach((vertex) => vertices.push({ x: vertex.x, y: vertex.y, z: vertex.z }));
  parsed.models[0].textureCoords.forEach((coord) => UVs.push({ u: coord.u, v: coord.v }));
  parsed.models[0].vertexNormals.forEach((normal) => normals.push({ x: normal.x, y: normal.y, z: normal.z }));

  for (let face of parsed.models[0].faces) {
    let vs: number[] = [];
    for (let vertex of face.vertices) {
      vs.push(vertices[vertex.vertexIndex - 1].x, vertices[vertex.vertexIndex - 1].y, vertices[vertex.vertexIndex - 1].z);
    }

    let x: number[] = [vs[0 + 3] - vs[0], vs[1 + 3] - vs[1], vs[2 + 3] - vs[2]];
    let y: number[] = [vs[0 + 6] - vs[0], vs[1 + 6] - vs[1], vs[2 + 6] - vs[2]];

    let n: number[] = [x[1] * y[2] - x[2] * y[1], x[2] * y[0] - x[0] * y[2], x[0] * y[1] - y[0] * x[1]];

    for (let vertex of face.vertices) {
      let v: number[] = [vertices[vertex.vertexIndex - 1].x, vertices[vertex.vertexIndex - 1].y, vertices[vertex.vertexIndex - 1].z];
      let uv: number[] = [UVs[vertex.textureCoordsIndex - 1].u, UVs[vertex.textureCoordsIndex - 1].v];
      parsed_vertices.push(new Vertex(v, uv, n));
    }
  }

  let raw: number[] = [];
  for (let vertex of parsed_vertices) {
    raw.push(...vertex.coords, ...vertex.normal, ...vertex.UV);
  }

  model.modelMat = glm.mat4.create();
  glm.mat4.identity(model.modelMat);
  model.array = new VertexArray(new Float32Array(raw));
  model.texture = new Texture(texFileName);
}
