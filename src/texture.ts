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
      gl.generateMipmap(gl.TEXTURE_2D);
    };

    this.image.src = filename;
  }

  Use() {
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
  }
}
