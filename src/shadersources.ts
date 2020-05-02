export const gyroVertSource: string = `#version 300 es
    layout(location = 0) in vec3 position;
    layout(location = 1) in vec3 normal;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 proj;

    out vec3 vert_normal;

    void main() {
      gl_Position = proj * view * model * vec4(position, 1.0);
      vert_normal = normal;
    }`;

export const gyroFragSource: string = `#version 300 es
    #ifdef GL_ES
        precision highp float;
    #endif

    in vec3 vert_normal;
    out vec4 color;

    void main() {
            vec3 dir = vec3(0.0, -1.0, 0.0);
            float res = max(-dot(vert_normal, dir), 0.0);
            color = vec4(res, res, res, 1.0);
    }`;
