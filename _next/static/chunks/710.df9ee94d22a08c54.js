(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[710],{5671:function(e,n,t){"use strict";t.d(n,{T:function(){return f}});var r=t(5893),a=t(9008),i=t.n(a),o=t(1163),s=t(7294),c=t(9147),u=t.n(c);t(7319);let l=e=>{let n=(0,s.useRef)(null),a=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:a}=e;return{name:n,...function(e){let n;let a=null;{a=document.createElement("div");let i=t(4631);n=i(a,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){a&&t&&(t.appendChild(a),n.setOption("value",e))}})})}}}(a)}}),e.sources),c=(0,s.useRef)(null),l=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),f=(0,o.useRouter)(),m=f.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[d,p]=(0,s.useState)(null),[h,x]=(0,s.useState)(null);return(0,s.useEffect)(()=>{m?x(m[1]):x(a[0].name),l&&c.current&&c.current.appendChild(l.domElement);let t={active:!0},r=()=>{t.active=!1};try{let i=n.current,o=e.init({canvas:i,pageState:t,gui:l});o instanceof Promise&&o.catch(e=>{console.error(e),p(e)})}catch(s){console.error(s),p(s)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/austinEng/webgpu-samples/tree/main/".concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),d?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Is WebGPU Enabled?"}),(0,r.jsx)("p",{children:"".concat(d)})]}):null]}),(0,r.jsxs)("div",{className:u().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:u().sourceFileNav,children:(0,r.jsx)("ul",{children:a.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":h==e.name,onClick(){x(e.name)},children:e.name})},n))})}),a.map((e,n)=>(0,r.jsx)(e.Container,{className:u().sourceFileContainer,"data-active":h==e.name},n))]})]})},f=e=>(0,r.jsx)(l,{...e})},4655:function(e,n,t){"use strict";t.d(n,{Ax:function(){return i},MO:function(){return o},O$:function(){return r},v8:function(){return a},zS:function(){return s}});let r=40,a=0,i=32,o=36,s=new Float32Array([1,-1,1,1,1,0,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,0,0,1,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,1,1,-1,-1,1,1,0,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,0,0,-1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,-1,1,1,1,0,1,0,0,-1,1,-1,1,0,1,0,1,1,0,-1,1,1,1,0,1,1,1,1,1,1,1,-1,1,1,1,0,1,0,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,1,-1,1,0,1,0,1,0,0,-1,-1,-1,1,0,0,0,1,1,0,-1,-1,1,1,0,0,1,1,1,1,-1,1,-1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,1,0,1,-1,-1,1,1,0,0,1,1,0,0,-1,-1,1,1,0,0,1,1,0,0,1,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,-1,-1,-1,1,0,0,0,1,0,1,-1,1,-1,1,0,1,0,1,0,0,1,1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,-1,1,-1,1,0,1,0,1,0,0])},5710:function(e,n,t){"use strict";var r="src/sample/twoCubes/main.ts";t.r(n);var a=t(5975),i=t(7160),o=t(5671),s=t(4655),c=t(3569),u=t(1945);let l=async e=>{let{canvas:n,pageState:t}=e,r=await navigator.gpu.requestAdapter(),o=await r.requestDevice();if(!t.active)return;let l=n.getContext("webgpu"),f=window.devicePixelRatio||1;n.width=n.clientWidth*f,n.height=n.clientHeight*f;let m=navigator.gpu.getPreferredCanvasFormat();l.configure({device:o,format:m,alphaMode:"opaque"});let d=o.createBuffer({size:s.zS.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(d.getMappedRange()).set(s.zS),d.unmap();let p=o.createRenderPipeline({layout:"auto",vertex:{module:o.createShaderModule({code:c.Z}),entryPoint:"main",buffers:[{arrayStride:s.O$,attributes:[{shaderLocation:0,offset:s.v8,format:"float32x4"},{shaderLocation:1,offset:s.Ax,format:"float32x2"}]}]},fragment:{module:o.createShaderModule({code:u.Z}),entryPoint:"main",targets:[{format:m}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),h=o.createTexture({size:[n.width,n.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),x=o.createBuffer({size:320,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),v=o.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:x,offset:0,size:64}}]}),g=o.createBindGroup({layout:p.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:x,offset:256,size:64}}]}),b={colorAttachments:[{view:void 0,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:h.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},w=n.width/n.height,M=a.Ue();a.G3(M,2*Math.PI/5,w,1,100);let P=a.Ue();a.Iu(P,P,i.al(-2,0,0));let y=a.Ue();a.Iu(y,y,i.al(2,0,0));let V=a.Ue(),C=a.Ue(),S=a.Ue();a.Iu(S,S,i.al(0,0,-7));let B=a.Ue(),j=a.Ue();requestAnimationFrame(function e(){if(!t.active)return;!function(){let e=Date.now()/1e3;a.U1(B,P,1,i.al(Math.sin(e),Math.cos(e),0)),a.U1(j,y,1,i.al(Math.cos(e),Math.sin(e),0)),a.Jp(V,S,B),a.Jp(V,M,V),a.Jp(C,S,j),a.Jp(C,M,C)}(),o.queue.writeBuffer(x,0,V.buffer,V.byteOffset,V.byteLength),o.queue.writeBuffer(x,256,C.buffer,C.byteOffset,C.byteLength),b.colorAttachments[0].view=l.getCurrentTexture().createView();let n=o.createCommandEncoder(),r=n.beginRenderPass(b);r.setPipeline(p),r.setVertexBuffer(0,d),r.setBindGroup(0,v),r.draw(s.MO,1,0,0),r.setBindGroup(0,g),r.draw(s.MO,1,0,0),r.end(),o.queue.submit([n.finish()]),requestAnimationFrame(e)})},f=()=>(0,o.T)({name:"Two Cubes",description:"This example shows some of the alignment requirements        involved when updating and binding multiple slices of a        uniform buffer. It renders two rotating cubes which have transform        matrices at different offsets in a uniform buffer.",init:l,sources:[{name:r.substring(20),contents:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport basicVertWGSL from '../../shaders/basic.vert.wgsl';\nimport vertexPositionColorWGSL from '../../shaders/vertexPositionColor.frag.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'opaque',\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: basicVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: vertexPositionColorWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Backface culling since the cube is solid piece of geometry.\n      // Faces pointing away from the camera will be occluded by faces\n      // pointing toward the camera.\n      cullMode: 'back',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const matrixSize = 4 * 16; // 4x4 matrix\n  const offset = 256; // uniformBindGroup offset must be 256-byte aligned\n  const uniformBufferSize = offset + matrixSize;\n\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroup1 = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: 0,\n          size: matrixSize,\n        },\n      },\n    ],\n  });\n\n  const uniformBindGroup2 = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: offset,\n          size: matrixSize,\n        },\n      },\n    ],\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  const aspect = canvas.width / canvas.height;\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  const modelMatrix1 = mat4.create();\n  mat4.translate(modelMatrix1, modelMatrix1, vec3.fromValues(-2, 0, 0));\n  const modelMatrix2 = mat4.create();\n  mat4.translate(modelMatrix2, modelMatrix2, vec3.fromValues(2, 0, 0));\n  const modelViewProjectionMatrix1 = mat4.create() as Float32Array;\n  const modelViewProjectionMatrix2 = mat4.create() as Float32Array;\n  const viewMatrix = mat4.create();\n  mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -7));\n\n  const tmpMat41 = mat4.create();\n  const tmpMat42 = mat4.create();\n\n  function updateTransformationMatrix() {\n    const now = Date.now() / 1000;\n\n    mat4.rotate(\n      tmpMat41,\n      modelMatrix1,\n      1,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0)\n    );\n    mat4.rotate(\n      tmpMat42,\n      modelMatrix2,\n      1,\n      vec3.fromValues(Math.cos(now), Math.sin(now), 0)\n    );\n\n    mat4.multiply(modelViewProjectionMatrix1, viewMatrix, tmpMat41);\n    mat4.multiply(\n      modelViewProjectionMatrix1,\n      projectionMatrix,\n      modelViewProjectionMatrix1\n    );\n    mat4.multiply(modelViewProjectionMatrix2, viewMatrix, tmpMat42);\n    mat4.multiply(\n      modelViewProjectionMatrix2,\n      projectionMatrix,\n      modelViewProjectionMatrix2\n    );\n  }\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    updateTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      modelViewProjectionMatrix1.buffer,\n      modelViewProjectionMatrix1.byteOffset,\n      modelViewProjectionMatrix1.byteLength\n    );\n    device.queue.writeBuffer(\n      uniformBuffer,\n      offset,\n      modelViewProjectionMatrix2.buffer,\n      modelViewProjectionMatrix2.byteOffset,\n      modelViewProjectionMatrix2.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n\n    // Bind the bind group (with the transformation matrix) for\n    // each cube, and draw.\n    passEncoder.setBindGroup(0, uniformBindGroup1);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n\n    passEncoder.setBindGroup(0, uniformBindGroup2);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst TwoCubes: () => JSX.Element = () =>\n  makeSample({\n    name: 'Two Cubes',\n    description:\n      'This example shows some of the alignment requirements \\\n       involved when updating and binding multiple slices of a \\\n       uniform buffer. It renders two rotating cubes which have transform \\\n       matrices at different offsets in a uniform buffer.',\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/basic.vert.wgsl',\n        contents: basicVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/vertexPositionColor.frag.wgsl',\n        contents: vertexPositionColorWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default TwoCubes;\n"},{name:"../../shaders/basic.vert.wgsl",contents:c.Z,editable:!0},{name:"../../shaders/vertexPositionColor.frag.wgsl",contents:u.Z,editable:!0},{name:"../../meshes/cube.ts",contents:t(2448).Z}],filename:r});n.default=f},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2448:function(e,n){"use strict";n.Z="export const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.\nexport const cubePositionOffset = 0;\nexport const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.\nexport const cubeUVOffset = 4 * 8;\nexport const cubeVertexCount = 36;\n\n// prettier-ignore\nexport const cubeVertexArray = new Float32Array([\n  // float4 position, float4 color, float2 uv,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n]);\n"},3569:function(e,n){"use strict";n.Z="struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>,\n}\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragUV : vec2<f32>,\n  @location(1) fragPosition: vec4<f32>,\n}\n\n@vertex\nfn main(\n  @location(0) position : vec4<f32>,\n  @location(1) uv : vec2<f32>\n) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = uniforms.modelViewProjectionMatrix * position;\n  output.fragUV = uv;\n  output.fragPosition = 0.5 * (position + vec4(1.0, 1.0, 1.0, 1.0));\n  return output;\n}\n"},1945:function(e,n){"use strict";n.Z="@fragment\nfn main(\n  @location(0) fragUV: vec2<f32>,\n  @location(1) fragPosition: vec4<f32>\n) -> @location(0) vec4<f32> {\n  return fragPosition;\n}\n"}}]);