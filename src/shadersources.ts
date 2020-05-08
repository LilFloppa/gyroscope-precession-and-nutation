export const gyroVertSource: string = `#version 300 es
    layout(location = 0) in vec3 pos;
    layout(location = 1) in vec3 normal;
    layout(location = 2) in vec2 uv;

    uniform mat4 model;
    uniform mat4 view;
    uniform mat4 proj;

    out vec3 v_pos;
    out vec3 v_normal;
    out vec2 v_uv;
    
    void main() {
      gl_Position = proj * view * model * vec4(pos, 1.0);
      v_pos = vec3(model * vec4(pos, 1.0));
      v_normal = normal;
      v_uv = vec2(uv.x, -uv.y);
    }`;

export const gyroFragSource: string = `#version 300 es
    #ifdef GL_ES
        precision highp float;
    #endif

    in vec3 v_pos;
    in vec3 v_normal;
    in vec2 v_uv;

    out vec4 color;

    uniform vec3 viewPos;
    uniform sampler2D diffuse_tex;

    void main() {
            vec3 lightPos = vec3(-10.0, 10.0, 10.0);
            vec3 lightColor = vec3(1.0, 1.0, 1.0);

            // Ambient
            float ambientStrength = 0.1;
            vec3 ambient = ambientStrength * lightColor;

            // Diffuse
            vec3 norm = normalize(v_normal);
            vec3 lightDir = normalize(lightPos - v_pos);  

            float diff = max(dot(norm, lightDir), 0.0);
            vec3 diffuse = diff * vec3(texture(diffuse_tex, v_uv));

            // Specular
            float specularStrength = 0.5;
            vec3 viewDir = normalize(viewPos - v_pos);
            vec3 reflectDir = reflect(-lightDir, norm);  

            float max_spec = max(dot(viewDir, reflectDir), 0.0);

            float spec = max_spec;
            for (int i = 0; i < 32; i++)
                spec *= max_spec;

            vec3 specular = specularStrength * spec * lightColor;  

            // Result
            vec3 result = ambient + diffuse + specular;
            color = vec4(result, 1.0);
    }`;
