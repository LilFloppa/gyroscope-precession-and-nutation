import { gl } from "./index";

export class Shader {
  private program: WebGLProgram | null = null;

  constructor(vertexSource: string, fragmentSource: string) {
    this.program = gl.createProgram();

    let vertexShader: WebGLShader = this.compileShader(vertexSource, gl.VERTEX_SHADER);
    gl.attachShader(this.program as WebGLProgram, vertexShader);
    gl.deleteShader(vertexShader);

    let fragmentShader: WebGLShader = this.compileShader(fragmentSource, gl.FRAGMENT_SHADER);
    gl.attachShader(this.program as WebGLProgram, fragmentShader);
    gl.deleteShader(fragmentShader);

    gl.linkProgram(this.program as WebGLProgram);

    if (!gl.getProgramParameter(this.program as WebGLProgram, gl.LINK_STATUS)) {
      console.log("Error linking shader program:");
      console.log(gl.getProgramInfoLog(this.program as WebGLProgram));
    }
  }

  private compileShader(source: string, type: number): WebGLShader {
    let shader: WebGLShader | null = gl.createShader(type);

    gl.shaderSource(shader as WebGLShader, source);
    gl.compileShader(shader as WebGLShader);

    if (!gl.getShaderParameter(shader as WebGLShader, gl.COMPILE_STATUS)) {
      console.log(`Error compiling ${type === gl.VERTEX_SHADER ? "vertex" : "fragment"} shader:`);
      console.log(gl.getShaderInfoLog(shader as WebGLShader));
    }

    return shader as WebGLShader;
  }

  setMat4(uniform: string, mat: Float32Array) {
    let loc: WebGLUniformLocation = gl.getUniformLocation(this.program, uniform);
    gl.uniformMatrix4fv(loc, false, mat);
  }

  setVec4(uniform: string, vec: Float32Array) {
    let loc: WebGLUniformLocation = gl.getUniformLocation(this.program, uniform);
    gl.uniform4fv(loc, vec);
  }

  use() {
    gl.useProgram(this.program);
  }
}
