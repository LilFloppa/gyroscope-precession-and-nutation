import { gl } from "./index";

export class Texture {
  texture: WebGLTexture;
  image: HTMLImageElement;

  constructor(filename: string) {
    this.texture = gl.createTexture();
    this.image = new Image();

    this.image.onload = (e) => {
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.image);

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    };

    this.image.src = filename;
  }

  Use() {
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
  }
}
