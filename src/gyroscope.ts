import { VertexArray } from "./vertexArray";
import { Shader } from "./shader";
import { Texture } from "./texture";
import * as model from "./model";

import * as objmodels from "./objmodels";

export class Gyroscope {
  stand: Stand;
  axis: Axis;
  disk: Disk;

  // Свойства

  Update(): void {
    this.stand.Update();
    this.axis.Update();
    this.disk.Update();
  }
}

class Stand implements model.IModel {
  array: VertexArray;
  shader: Shader;
  texture: Texture;

  Update(): void {}
}

class Axis implements model.IModel {
  array: VertexArray;
  shader: Shader;
  texture: Texture;

  Update(): void {}
}

class Disk implements model.IModel {
  array: VertexArray;
  shader: Shader;
  texture: Texture;

  Update(): void {}
}

export function LoadGyroscope(): Gyroscope {
  let gyro: Gyroscope = new Gyroscope();

  gyro.disk = new Disk();
  gyro.axis = new Axis();
  gyro.stand = new Stand();

  model.LoadModel(objmodels.axis, gyro.axis);
  model.LoadModel(objmodels.disk, gyro.disk);
  model.LoadModel(objmodels.stand, gyro.stand);

  return gyro;
}
