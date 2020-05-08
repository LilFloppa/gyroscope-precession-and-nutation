export const vertBase: string = `#version 300 es
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

export const FragBase: string = `#version 300 es
    #ifdef GL_ES
        precision highp float;
    #endif

    in vec3 v_pos;
    in vec3 v_normal;
    in vec2 v_uv;

    out vec4 color;

    const float density = 0.07;
    const float gradient = 7.0;


    uniform vec3 viewPos;
    uniform sampler2D diffuse_tex;

    struct DirectionalLight 
    {
        vec3 direction;

        vec3 ambient;
        vec3 diffuse;
        vec3 specular;
    };

    uniform DirectionalLight lights[20];

    vec3 CalcDirLight(DirectionalLight light, vec3 normal, vec3 viewDir)
    {
        vec3 lightDir = normalize(-light.direction);
        // diffuse
        float diff = max(dot(normal, lightDir), 0.0);

        // specular
        vec3 reflectDir = reflect(-lightDir, normal);
        float max_spec = max(dot(viewDir, reflectDir), 0.0);

        float spec = max_spec;
        for (int i = 0; i < 32; i++)
            spec *= max_spec;

        // combine results
        vec3 ambient  = light.ambient;
        vec3 diffuse  = light.diffuse  * diff * vec3(texture(diffuse_tex, v_uv));
        vec3 specular = light.specular * spec;
        return (ambient + diffuse + specular);
    } 

    void main() 
    {
        vec3 norm = normalize(v_normal);
        vec3 viewDir = normalize(viewPos - v_pos);

        vec3 result = vec3(0.0, 0.0, 0.0);
        for (int i = 0; i < 20; i++)
            result += CalcDirLight(lights[i], norm, viewDir);

        vec2 p = vec2(v_pos.x, v_pos.z);
        float distance = length(p);
        float visibility = exp(-pow((distance * density), gradient));
        visibility = clamp(visibility, 0.0, 1.0);

        color = mix(vec4(0.82, 0.88, 0.94, 1.0), vec4(result, 1.0), visibility);
    }`;
