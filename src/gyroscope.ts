import { VertexArray } from "./vertexArray";
import { Shader } from "./shader";
import { Texture } from "./texture";
import * as model from "./model";

import * as objmodels from "./objmodels";

export class Gyroscope {
  stand: Stand;
  box: Box;
  axis: Axis;
  disk: Disk;

  // Свойства

  Update(): void {
    this.stand.Update();
    this.box.Update();
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

class Box implements model.IModel {
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
  gyro.box = new Box();
  gyro.stand = new Stand();

  model.LoadModel(objmodels.axis, "assets/AxisMat.png", gyro.axis);
  model.LoadModel(objmodels.box, "assets/boxMat.png", gyro.box);
  model.LoadModel(objmodels.disk, "assets/DiskMat.png", gyro.disk);
  model.LoadModel(objmodels.stand, "assets/standMat.png", gyro.stand);

  return gyro;
}
