import { Shader } from "./shader";
import { VertexArray } from "./vertexArray";
import { Texture } from "./texture";

import * as obj from "obj-file-parser-ts";

export interface IModel {
  array: VertexArray;
  shader: Shader;
  texture: Texture;

  Update(): void;
}

export class Model implements IModel {
  array: VertexArray;
  shader: Shader;
  texture: Texture;

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

export function LoadModel(data: string, model: IModel) {
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
    for (let vertex of face.vertices) {
      let v: number[] = [vertices[vertex.vertexIndex - 1].x, vertices[vertex.vertexIndex - 1].y, vertices[vertex.vertexIndex - 1].z];
      let uv: number[] = [UVs[vertex.textureCoordsIndex - 1].u, UVs[vertex.textureCoordsIndex - 1].v];
      let n: number[] = [normals[vertex.vertexNormalIndex - 1].x, normals[vertex.vertexNormalIndex - 1].y, normals[vertex.vertexNormalIndex - 1].z];
      parsed_vertices.push(new Vertex(v, uv, n));
    }
  }

  let raw: number[] = [];
  for (let vertex of parsed_vertices) {
    raw.push(...vertex.coords, ...vertex.normal);
  }

  model.array = new VertexArray(new Float32Array(raw));
}
