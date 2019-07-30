export const gpuDetect = () => {
  let canvas = document.createElement("canvas");
  let gl;
  let debugInfo;
  let renderer;
  let smallRender;
  try {
    gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } catch (e) {}

  if (gl) {
    debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    smallRender = renderer.toLowerCase();
  }
  canvas = null;
  let Return = {};
  if (smallRender.includes("intel iris")) {
    Return.any = false;
  } else if (
    smallRender.includes("amd") ||
    smallRender.includes("ati") ||
    smallRender.includes("radeon") ||
    smallRender.includes("gtx") ||
    smallRender.includes("nvidia")
  ) {
    Return.any = true;
    Return.model = renderer;
  } else {
    Return.any = false;
    Return.model = "None";
  }

  // return {
  //   any: true
  // };
  return Return;
};
