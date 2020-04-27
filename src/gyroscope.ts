import { VertexArray } from "./vertexArray";
import { Shader } from "./shader";
import { Texture } from "./texture";

export class Gyroscope {
  readonly stand: Stand;
  readonly axis: Axis;
  readonly disk: Disk;
}

class Stand {
  readonly array: VertexArray;
  readonly shader: Shader;
  readonly texture: Texture;
}

class Axis {
  readonly array: VertexArray;
  readonly shader: Shader;
  readonly texture: Texture;

  Update(): void {}
}

class Disk {
  readonly array: VertexArray;
  readonly shader: Shader;
  readonly texture: Texture;

  Update(): void {}
}
