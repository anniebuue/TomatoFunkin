#pragma header

uniform float isSelected;
uniform float isLocked;

void main()
{
    float condIsLocked = isLocked;
    float condIsSelected = isSelected * (1.0 - condIsLocked);

    vec4 color = flixel_texture2D(bitmap, openfl_TextureCoordv);
    
    color.rgb = condIsSelected * color.rgb + (1.0 - condIsSelected) * (((0.5 - condIsLocked * 0.4) * ((color.r + color.g + color.b) / 3.0)) * vec3(1.0, 1.0, 1.0));
    
    gl_FragColor = color;
}