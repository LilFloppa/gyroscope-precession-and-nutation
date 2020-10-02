import { gl } from "./index";

export class VertexArray {
  readonly VAO: WebGLVertexArrayObject | null = null;
  readonly VBO: WebGLBuffer | null = null;
  readonly EBO: WebGLBuffer | null = null;

  readonly size: number;

  constructor(vertices: Float32Array) {
    this.size = vertices.length / 8;

    this.VAO = gl.createVertexArray();
    gl.bindVertexArray(this.VAO);

    this.VBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 8 * 4, 0);

    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 8 * 4, 3 * 4);

    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 2, gl.FLOAT, false, 8 * 4, 6 * 4);

    gl.bindVertexArray(null);
  }

  use() {
    gl.bindVertexArray(this.VAO);
  }
}
