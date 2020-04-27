import { gl } from "./index";

export class VertexArray {
  readonly VAO: WebGLVertexArrayObject | null = null;
  readonly VBO: WebGLBuffer | null = null;
  readonly EBO: WebGLBuffer | null = null;

  constructor(vertices: Float32Array, indices: Int32Array) {
    this.VAO = gl.createVertexArray();
    gl.bindVertexArray(this.VAO);

    this.VBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.VBO);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    if (indices !== null) {
      this.EBO = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.EBO);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
    }

    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

    gl.bindVertexArray(null);
  }

  use() {
    gl.bindVertexArray(this.VAO);
  }
}
