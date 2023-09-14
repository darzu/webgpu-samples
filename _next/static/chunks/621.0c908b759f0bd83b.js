(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return f},hu:function(){return m}});var r=t(5893),a=t(9008),o=t.n(a),i=t(1163),s=t(7294),c=t(9147),u=t.n(c);t(7319);let l=e=>{let n=(0,s.useRef)(null),a=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:a}=e;return{name:n,...function(e){let n;let a=null;{a=document.createElement("div");let o=t(4631);n=o(a,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){a&&t&&(t.appendChild(a),n.setOption("value",e))}})})}}}(a)}}),e.sources),c=(0,s.useRef)(null),l=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),f=(0,s.useRef)(null),m=(0,s.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),d=(0,i.useRouter)(),p=d.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[h,v]=(0,s.useState)(null),[x,g]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(p?g(p[1]):g(a[0].name),l&&c.current)for(c.current.appendChild(l.domElement);l.__controllers.length>0;)l.__controllers[0].remove();m&&f.current&&(m.dom.style.position="absolute",m.showPanel(1),f.current.appendChild(m.dom));let t={active:!0},r=()=>{t.active=!1};try{let o=n.current;if(!o)throw Error("The canvas is not available");let i=e.init({canvas:o,pageState:t,gui:l,stats:m});i instanceof Promise&&i.catch(e=>{console.error(e),v(e)})}catch(s){console.error(s),v(s)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),h?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,r.jsx)("p",{children:"".concat(h)})]}):null]}),(0,r.jsxs)("div",{className:u().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",left:10},ref:f}),(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:u().sourceFileNav,children:(0,r.jsx)("ul",{children:a.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":x==e.name,onClick(){g(e.name)},children:e.name})},n))})}),a.map((e,n)=>(0,r.jsx)(e.Container,{className:u().sourceFileContainer,"data-active":x==e.name},n))]})]})},f=e=>(0,r.jsx)(l,{...e});function m(e,n){if(!e)throw Error(n)}},4655:function(e,n,t){"use strict";t.d(n,{Ax:function(){return o},MO:function(){return i},O$:function(){return r},v8:function(){return a},zS:function(){return s}});let r=40,a=0,o=32,i=36,s=new Float32Array([1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,1,0,1,-1,-1,1,1,0,0,1,0,0,1,-1,1,1,1,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,-1,1,1,1,0,1,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,1,-1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,-1,-1,1,1,0,0,1,1,0,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,-1,1,-1,1,0,1,0,1,0,0,-1,1,1,1,0,1,1,1,0,1,1,1,-1,1,1,1,0,1,1,0,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,1,-1,1,-1,1,0,1,0,1,1,0,-1,-1,-1,1,0,0,0,1,0,0,-1,-1,1,1,0,0,1,1,0,1,-1,1,-1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,-1,1,1,1,0,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,0,-1,-1,1,1,0,0,1,1,1,0,1,-1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,-1,-1,1,1,0,0,1,0,1,-1,-1,-1,1,0,0,0,1,1,1,-1,1,-1,1,0,1,0,1,1,0,1,1,-1,1,1,1,0,1,0,0,1,-1,-1,1,1,0,0,1,0,1,-1,1,-1,1,0,1,0,1,1,0])},8621:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(6416),a=t(5671),o=t(4655),i="struct Uniforms {\n  modelViewProjectionMatrix : array<mat4x4<f32>, 16>,\n}\n\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragUV : vec2<f32>,\n  @location(1) fragPosition: vec4<f32>,\n}\n\n@vertex\nfn main(\n  @builtin(instance_index) instanceIdx : u32,\n  @location(0) position : vec4<f32>,\n  @location(1) uv : vec2<f32>\n) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix[instanceIdx] * position;\n  output.fragUV = uv;\n  output.fragPosition = 0.5 * (position + vec4(1.0));\n  return output;\n}\n",s=t(1945),c="src/sample/instancedCube/main.ts";let u=async e=>{let{canvas:n,pageState:t}=e,a=await navigator.gpu.requestAdapter(),c=await a.requestDevice();if(!t.active)return;let u=n.getContext("webgpu"),l=window.devicePixelRatio||1;n.width=n.clientWidth*l,n.height=n.clientHeight*l;let f=navigator.gpu.getPreferredCanvasFormat();u.configure({device:c,format:f,alphaMode:"premultiplied"});let m=c.createBuffer({size:o.zS.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(m.getMappedRange()).set(o.zS),m.unmap();let d=c.createRenderPipeline({layout:"auto",vertex:{module:c.createShaderModule({code:i}),entryPoint:"main",buffers:[{arrayStride:o.O$,attributes:[{shaderLocation:0,offset:o.v8,format:"float32x4"},{shaderLocation:1,offset:o.Ax,format:"float32x2"}]}]},fragment:{module:c.createShaderModule({code:s.Z}),entryPoint:"main",targets:[{format:f}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),p=c.createTexture({size:[n.width,n.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),h=c.createBuffer({size:1024,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),v=c.createBindGroup({layout:d.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}}]}),x=n.width/n.height,g=r._E.perspective(2*Math.PI/5,x,1,100),b=Array(16),y=new Float32Array(256),w=0;for(let C=0;C<4;C++)for(let P=0;P<4;P++)b[w]=r._E.translation(r.R3.fromValues(4*(C-2+.5),4*(P-2+.5),0)),w++;let M=r._E.translation(r.R3.fromValues(0,0,-12)),S=r._E.create(),_={colorAttachments:[{view:void 0,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:p.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};requestAnimationFrame(function e(){if(!t.active)return;!function(){let e=Date.now()/1e3,n=0,t=0;for(let a=0;a<4;a++)for(let o=0;o<4;o++)r._E.rotate(b[t],r.R3.fromValues(Math.sin((a+.5)*e),Math.cos((o+.5)*e),0),1,S),r._E.multiply(M,S,S),r._E.multiply(g,S,S),y.set(S,n),t++,n+=16}(),c.queue.writeBuffer(h,0,y.buffer,y.byteOffset,y.byteLength),_.colorAttachments[0].view=u.getCurrentTexture().createView();let n=c.createCommandEncoder(),a=n.beginRenderPass(_);a.setPipeline(d),a.setBindGroup(0,v),a.setVertexBuffer(0,m),a.draw(o.MO,16,0,0),a.end(),c.queue.submit([n.finish()]),requestAnimationFrame(e)})},l=()=>(0,a.Tl)({name:"Instanced Cube",description:"This example shows the use of instancing.",init:u,sources:[{name:c.substring(25),contents:"import { mat4, vec3 } from 'wgpu-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport instancedVertWGSL from './instanced.vert.wgsl';\nimport vertexPositionColorWGSL from '../../shaders/vertexPositionColor.frag.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: instancedVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: vertexPositionColorWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Backface culling since the cube is solid piece of geometry.\n      // Faces pointing away from the camera will be occluded by faces\n      // pointing toward the camera.\n      cullMode: 'back',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const xCount = 4;\n  const yCount = 4;\n  const numInstances = xCount * yCount;\n  const matrixFloatCount = 16; // 4x4 matrix\n  const matrixSize = 4 * matrixFloatCount;\n  const uniformBufferSize = numInstances * matrixSize;\n\n  // Allocate a buffer large enough to hold transforms for every\n  // instance.\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const aspect = canvas.width / canvas.height;\n  const projectionMatrix = mat4.perspective(\n    (2 * Math.PI) / 5,\n    aspect,\n    1,\n    100.0\n  );\n\n  type Mat4 = mat4.default;\n  const modelMatrices = new Array<Mat4>(numInstances);\n  const mvpMatricesData = new Float32Array(matrixFloatCount * numInstances);\n\n  const step = 4.0;\n\n  // Initialize the matrix data for every instance.\n  let m = 0;\n  for (let x = 0; x < xCount; x++) {\n    for (let y = 0; y < yCount; y++) {\n      modelMatrices[m] = mat4.translation(\n        vec3.fromValues(\n          step * (x - xCount / 2 + 0.5),\n          step * (y - yCount / 2 + 0.5),\n          0\n        )\n      );\n      m++;\n    }\n  }\n\n  const viewMatrix = mat4.translation(vec3.fromValues(0, 0, -12));\n\n  const tmpMat4 = mat4.create();\n\n  // Update the transformation matrix data for each instance.\n  function updateTransformationMatrix() {\n    const now = Date.now() / 1000;\n\n    let m = 0,\n      i = 0;\n    for (let x = 0; x < xCount; x++) {\n      for (let y = 0; y < yCount; y++) {\n        mat4.rotate(\n          modelMatrices[i],\n          vec3.fromValues(\n            Math.sin((x + 0.5) * now),\n            Math.cos((y + 0.5) * now),\n            0\n          ),\n          1,\n          tmpMat4\n        );\n\n        mat4.multiply(viewMatrix, tmpMat4, tmpMat4);\n        mat4.multiply(projectionMatrix, tmpMat4, tmpMat4);\n\n        mvpMatricesData.set(tmpMat4, m);\n\n        i++;\n        m += matrixFloatCount;\n      }\n    }\n  }\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    // Update the matrix data.\n    updateTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      mvpMatricesData.buffer,\n      mvpMatricesData.byteOffset,\n      mvpMatricesData.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(cubeVertexCount, numInstances, 0, 0);\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst InstancedCube: () => JSX.Element = () =>\n  makeSample({\n    name: 'Instanced Cube',\n    description: 'This example shows the use of instancing.',\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/instanced.vert.wgsl',\n        contents: instancedVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/vertexPositionColor.frag.wgsl',\n        contents: vertexPositionColorWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default InstancedCube;\n"},{name:"../../shaders/instanced.vert.wgsl",contents:i,editable:!0},{name:"../../shaders/vertexPositionColor.frag.wgsl",contents:s.Z,editable:!0},{name:"../../meshes/cube.ts",contents:t(2448).Z}],filename:c});var f=l},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2448:function(e,n){"use strict";n.Z="export const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.\nexport const cubePositionOffset = 0;\nexport const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.\nexport const cubeUVOffset = 4 * 8;\nexport const cubeVertexCount = 36;\n\n// prettier-ignore\nexport const cubeVertexArray = new Float32Array([\n  // float4 position, float4 color, float2 uv,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n]);\n"},1945:function(e,n){"use strict";n.Z="@fragment\nfn main(\n  @location(0) fragUV: vec2<f32>,\n  @location(1) fragPosition: vec4<f32>\n) -> @location(0) vec4<f32> {\n  return fragPosition;\n}\n"}}]);