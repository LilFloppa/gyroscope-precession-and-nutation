import { gl } from "./index";
const pi = 3.1415926535897932;

class Point {
  x: number;
  y: number;
  z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

export class Trajectory {
  private Points: Point[] = [];

  private VAO: WebGLVertexArrayObject | null = null;
  private VBO: WebGLBuffer | null = null;

  length: number;

  raw: number[] = [];

  constructor(length: number) {
    this.length = length;

    this.VAO = gl.createVertexArray();
    gl.bindVertexArray(this.VAO);

    this.VBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);

    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

    gl.bindVertexArray(null);
  }

  AddPoint(phi: number, theta: number) {
    let radius: number = 0.56 + 10 * 0.25;
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
  }

  Draw() {
    gl.bindVertexArray(this.VAO);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.raw), gl.STREAM_DRAW);
    gl.drawArrays(gl.LINE_STRIP, 0, this.raw.length / 3);
  }

  Clear() {
    this.raw = [];
  }
}
