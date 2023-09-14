(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return f},hu:function(){return d}});var r=t(5893),a=t(9008),o=t.n(a),i=t(1163),s=t(7294),c=t(9147),l=t.n(c);t(7319);let u=e=>{let n=(0,s.useRef)(null),a=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:a}=e;return{name:n,...function(e){let n;let a=null;{a=document.createElement("div");let o=t(4631);n=o(a,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){a&&t&&(t.appendChild(a),n.setOption("value",e))}})})}}}(a)}}),e.sources),c=(0,s.useRef)(null),u=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),f=(0,s.useRef)(null),d=(0,s.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),m=(0,i.useRouter)(),h=m.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[p,v]=(0,s.useState)(null),[g,w]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(h?w(h[1]):w(a[0].name),u&&c.current)for(c.current.appendChild(u.domElement);u.__controllers.length>0;)u.__controllers[0].remove();d&&f.current&&(d.dom.style.position="absolute",d.showPanel(1),f.current.appendChild(d.dom));let t={active:!0},r=()=>{t.active=!1};try{let o=n.current;if(!o)throw Error("The canvas is not available");let i=e.init({canvas:o,pageState:t,gui:u,stats:d});i instanceof Promise&&i.catch(e=>{console.error(e),v(e)})}catch(s){console.error(s),v(s)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),p?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,r.jsx)("p",{children:"".concat(p)})]}):null]}),(0,r.jsxs)("div",{className:l().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",left:10},ref:f}),(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:l().sourceFileNav,children:(0,r.jsx)("ul",{children:a.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":g==e.name,onClick(){w(e.name)},children:e.name})},n))})}),a.map((e,n)=>(0,r.jsx)(e.Container,{className:l().sourceFileContainer,"data-active":g==e.name},n))]})]})},f=e=>(0,r.jsx)(u,{...e});function d(e,n){if(!e)throw Error(n)}},6078:function(e,n,t){"use strict";var r="src/sample/worker/main.ts";t.r(n);var a=t(5671);let o=async e=>{let{canvas:n,pageState:r}=e;if(!r.active)return;let a=new Worker(t.tu(new URL(t.p+t.u(808),t.b)));a.addEventListener("message",e=>{"log"===e.data.type?console.log(e.data.message):console.error("Unknown Message Type: ".concat(e.data.type))});try{let o=n.transferControlToOffscreen(),i=window.devicePixelRatio||1;o.width=n.clientWidth*i,o.height=n.clientHeight*i,a.postMessage({type:"init",offscreenCanvas:o},[o])}catch(s){console.warn(s.message),a.terminate()}},i=()=>(0,a.Tl)({name:"WebGPU in a Worker",description:"This example shows one method of using WebGPU in a web worker and presenting to\n      the main thread. It uses canvas.transferControlToOffscreen() to produce an offscreen canvas\n      which is then transferred to the worker where all the WebGPU calls are made.",init:o,sources:[{name:r.substring(18),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  if (!pageState.active) return;\n\n  // The web worker is created by passing a path to the worker's source file, which will then be\n  // executed on a separate thread.\n  const worker = new Worker(new URL('./worker.ts', import.meta.url));\n\n  // The primary way to communicate with the worker is to send and receive messages.\n  worker.addEventListener('message', (ev) => {\n    // The format of the message can be whatever you'd like, but it's helpful to decide on a\n    // consistent convention so that you can tell the message types apart as your apps grow in\n    // complexity. Here we establish a convention that all messages to and from the worker will\n    // have a `type` field that we can use to determine the content of the message.\n    switch (ev.data.type) {\n      case 'log': {\n        // Workers don't have a built-in mechanism for logging to the console, so it's useful to\n        // create a way to echo console messages.\n        console.log(ev.data.message);\n        break;\n      }\n      default: {\n        console.error(`Unknown Message Type: ${ev.data.type}`);\n      }\n    }\n  });\n\n  try {\n    // In order for the worker to display anything on the page, an OffscreenCanvas must be used.\n    // Here we can create one from our normal canvas by calling transferControlToOffscreen().\n    // Anything drawn to the OffscreenCanvas that call returns will automatically be displayed on\n    // the source canvas on the page.\n    const offscreenCanvas = canvas.transferControlToOffscreen();\n    const devicePixelRatio = window.devicePixelRatio || 1;\n    offscreenCanvas.width = canvas.clientWidth * devicePixelRatio;\n    offscreenCanvas.height = canvas.clientHeight * devicePixelRatio;\n\n    // Send a message to the worker telling it to initialize WebGPU with the OffscreenCanvas. The\n    // array passed as the second argument here indicates that the OffscreenCanvas is to be\n    // transferred to the worker, meaning this main thread will lose access to it and it will be\n    // fully owned by the worker.\n    worker.postMessage({ type: 'init', offscreenCanvas }, [offscreenCanvas]);\n  } catch (err) {\n    // TODO: This catch is added here because React will call init twice with the same canvas, and\n    // the second time will fail the transferControlToOffscreen() because it's already been\n    // transferred. I'd love to know how to get around that.\n    console.warn(err.message);\n    worker.terminate();\n  }\n};\n\nconst WebGPUWorker: () => JSX.Element = () =>\n  makeSample({\n    name: 'WebGPU in a Worker',\n    description: `This example shows one method of using WebGPU in a web worker and presenting to\n      the main thread. It uses canvas.transferControlToOffscreen() to produce an offscreen canvas\n      which is then transferred to the worker where all the WebGPU calls are made.`,\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: './worker.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!./worker.ts').default,\n      },\n      {\n        name: '../../shaders/basic.vert.wgsl',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../shaders/basic.vert.wgsl').default,\n      },\n      {\n        name: '../../shaders/vertexPositionColor.frag.wgsl',\n        contents:\n          // eslint-disable-next-line @typescript-eslint/no-var-requires\n          require('!!raw-loader!../../shaders/vertexPositionColor.frag.wgsl')\n            .default,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default WebGPUWorker;\n"},{name:"./worker.ts",contents:t(9168).Z},{name:"../../shaders/basic.vert.wgsl",contents:t(3569).Z},{name:"../../shaders/vertexPositionColor.frag.wgsl",contents:t(1945).Z},{name:"../../meshes/cube.ts",contents:t(2448).Z}],filename:r});n.default=i},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2448:function(e,n){"use strict";n.Z="export const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.\nexport const cubePositionOffset = 0;\nexport const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.\nexport const cubeUVOffset = 4 * 8;\nexport const cubeVertexCount = 36;\n\n// prettier-ignore\nexport const cubeVertexArray = new Float32Array([\n  // float4 position, float4 color, float2 uv,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n]);\n"},9168:function(e,n){"use strict";n.Z="import { mat4, vec3 } from 'wgpu-matrix';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport basicVertWGSL from '../../shaders/basic.vert.wgsl';\nimport vertexPositionColorWGSL from '../../shaders/vertexPositionColor.frag.wgsl';\n\n// The worker process can instantiate a WebGPU device immediately, but it still needs an\n// OffscreenCanvas to be able to display anything. Here we listen for an 'init' message from the\n// main thread that will contain an OffscreenCanvas transferred from the page, and use that as the\n// signal to begin WebGPU initialization.\nself.addEventListener('message', (ev) => {\n  switch (ev.data.type) {\n    case 'init': {\n      try {\n        init(ev.data.offscreenCanvas);\n      } catch (err) {\n        self.postMessage({\n          type: 'log',\n          message: `Error while initializing WebGPU in worker process: ${err.message}`,\n        });\n      }\n      break;\n    }\n  }\n});\n\n// Once we receive the OffscreenCanvas this init() function is called, which functions similarly\n// to the init() method for all the other samples. The remainder of this file is largely identical\n// to the rotatingCube sample.\nasync function init(canvas) {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const context = canvas.getContext('webgpu');\n\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: basicVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: vertexPositionColorWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Backface culling since the cube is solid piece of geometry.\n      // Faces pointing away from the camera will be occluded by faces\n      // pointing toward the camera.\n      cullMode: 'back',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const uniformBufferSize = 4 * 16; // 4x4 matrix\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  const aspect = canvas.width / canvas.height;\n  const projectionMatrix = mat4.perspective(\n    (2 * Math.PI) / 5,\n    aspect,\n    1,\n    100.0\n  );\n  const modelViewProjectionMatrix = mat4.create();\n\n  function getTransformationMatrix() {\n    const viewMatrix = mat4.identity();\n    mat4.translate(viewMatrix, vec3.fromValues(0, 0, -4), viewMatrix);\n    const now = Date.now() / 1000;\n    mat4.rotate(\n      viewMatrix,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0),\n      1,\n      viewMatrix\n    );\n\n    mat4.multiply(projectionMatrix, viewMatrix, modelViewProjectionMatrix);\n\n    return modelViewProjectionMatrix as Float32Array;\n  }\n\n  function frame() {\n    const transformationMatrix = getTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      transformationMatrix.buffer,\n      transformationMatrix.byteOffset,\n      transformationMatrix.byteLength\n    );\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n\n  // Note: It is important to return control to the browser regularly in order for the worker to\n  // process events. You shouldn't simply loop infinitely with while(true) or similar! Using a\n  // traditional requestAnimationFrame() loop in the worker is one way to ensure that events are\n  // handled correctly by the worker.\n  requestAnimationFrame(frame);\n}\n\nexport {};\n"},3569:function(e,n){"use strict";n.Z="struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>,\n}\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragUV : vec2<f32>,\n  @location(1) fragPosition: vec4<f32>,\n}\n\n@vertex\nfn main(\n  @location(0) position : vec4<f32>,\n  @location(1) uv : vec2<f32>\n) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix * position;\n  output.fragUV = uv;\n  output.fragPosition = 0.5 * (position + vec4(1.0, 1.0, 1.0, 1.0));\n  return output;\n}\n"},1945:function(e,n){"use strict";n.Z="@fragment\nfn main(\n  @location(0) fragUV: vec2<f32>,\n  @location(1) fragPosition: vec4<f32>\n) -> @location(0) vec4<f32> {\n  return fragPosition;\n}\n"}}]);