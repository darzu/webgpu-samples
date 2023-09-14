(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[588],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return p},hu:function(){return l}});var r=t(5893),a=t(9008),o=t.n(a),i=t(1163),s=t(7294),d=t(9147),u=t.n(d);t(7319);let c=e=>{let n=(0,s.useRef)(null),a=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:a}=e;return{name:n,...function(e){let n;let a=null;{a=document.createElement("div");let o=t(4631);n=o(a,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){a&&t&&(t.appendChild(a),n.setOption("value",e))}})})}}}(a)}}),e.sources),d=(0,s.useRef)(null),c=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),p=(0,s.useRef)(null),l=(0,s.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),f=(0,i.useRouter)(),m=f.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[h,P]=(0,s.useState)(null),[v,g]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(m?g(m[1]):g(a[0].name),c&&d.current)for(d.current.appendChild(c.domElement);c.__controllers.length>0;)c.__controllers[0].remove();l&&p.current&&(l.dom.style.position="absolute",l.showPanel(1),p.current.appendChild(l.dom));let t={active:!0},r=()=>{t.active=!1};try{let o=n.current;if(!o)throw Error("The canvas is not available");let i=e.init({canvas:o,pageState:t,gui:c,stats:l});i instanceof Promise&&i.catch(e=>{console.error(e),P(e)})}catch(s){console.error(s),P(s)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),h?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,r.jsx)("p",{children:"".concat(h)})]}):null]}),(0,r.jsxs)("div",{className:u().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",left:10},ref:p}),(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:d}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:u().sourceFileNav,children:(0,r.jsx)("ul",{children:a.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":v==e.name,onClick(){g(e.name)},children:e.name})},n))})}),a.map((e,n)=>(0,r.jsx)(e.Container,{className:u().sourceFileContainer,"data-active":v==e.name},n))]})]})},p=e=>(0,r.jsx)(c,{...e});function l(e,n){if(!e)throw Error(n)}},7502:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b},geometryVertexArray:function(){return h}});var r,a,o=t(5671),i=t(6416),s="struct Uniforms {\n  modelMatrix : array<mat4x4<f32>, 5>,\n}\nstruct Camera {\n  viewProjectionMatrix : mat4x4<f32>,\n}\n\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n@binding(1) @group(0) var<uniform> camera : Camera;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragColor : vec4<f32>,\n}\n\n@vertex\nfn main(\n  @builtin(instance_index) instanceIdx : u32,\n  @location(0) position : vec4<f32>,\n  @location(1) color : vec4<f32>\n) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = camera.viewProjectionMatrix * uniforms.modelMatrix[instanceIdx] * position;\n  output.fragColor = color;\n  return output;\n}",d="@fragment\nfn main(\n  @location(0) fragColor: vec4<f32>\n) -> @location(0) vec4<f32> {\n  return fragColor;\n}\n",u="struct Uniforms {\n  modelMatrix : array<mat4x4<f32>, 5>,\n}\nstruct Camera {\n  viewProjectionMatrix : mat4x4<f32>,\n}\n\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n@binding(1) @group(0) var<uniform> camera : Camera;\n\n@vertex\nfn main(\n  @builtin(instance_index) instanceIdx : u32,\n  @location(0) position : vec4<f32>\n) -> @builtin(position) vec4<f32> {\n  return camera.viewProjectionMatrix * uniforms.modelMatrix[instanceIdx] * position;\n}\n",c="@vertex\nfn main(\n  @builtin(vertex_index) VertexIndex : u32\n) -> @builtin(position) vec4<f32> {\n  const pos = array(\n    vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),\n    vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),\n  );\n\n  return vec4(pos[VertexIndex], 0.0, 1.0);\n}\n",p="@group(0) @binding(0) var depthTexture: texture_depth_2d;\n\n@fragment\nfn main(\n  @builtin(position) coord : vec4<f32>\n) -> @location(0) vec4<f32> {\n  let depthValue = textureLoad(depthTexture, vec2<i32>(floor(coord.xy)), 0);\n  return vec4<f32>(depthValue, depthValue, depthValue, 1.0);\n}\n",l="struct Uniforms {\n  modelMatrix : array<mat4x4<f32>, 5>,\n}\nstruct Camera {\n  viewProjectionMatrix : mat4x4<f32>,\n}\n\n@binding(0) @group(0) var<uniform> uniforms : Uniforms;\n@binding(1) @group(0) var<uniform> camera : Camera;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) clipPos : vec4<f32>,\n}\n\n@vertex\nfn main(\n  @builtin(instance_index) instanceIdx : u32,\n  @location(0) position : vec4<f32>\n) -> VertexOutput {\n  var output : VertexOutput;\n  output.Position = camera.viewProjectionMatrix * uniforms.modelMatrix[instanceIdx] * position;\n  output.clipPos = output.Position;\n  return output;\n}\n",f="@group(1) @binding(0) var depthTexture: texture_depth_2d;\n\n@fragment\nfn main(\n  @builtin(position) coord: vec4<f32>,\n  @location(0) clipPos: vec4<f32>\n) -> @location(0) vec4<f32> {\n  let depthValue = textureLoad(depthTexture, vec2<i32>(floor(coord.xy)), 0);\n  let v : f32 = abs(clipPos.z / clipPos.w - depthValue) * 2000000.0;\n  return vec4<f32>(v, v, v, 1.0);\n}\n",m="src/sample/reversedZ/main.ts";let h=new Float32Array([-1.5,-1,1e-4,1,1,0,0,1,.5,-1,1e-4,1,1,0,0,1,-1.5,1,1e-4,1,1,0,0,1,.5,-1,1e-4,1,1,0,0,1,.5,1,1e-4,1,1,0,0,1,-1.5,1,1e-4,1,1,0,0,1,-.5,-1,-.0001,1,0,1,0,1,1.5,-1,-.0001,1,0,1,0,1,-.5,1,-.0001,1,0,1,0,1,1.5,-1,-.0001,1,0,1,0,1,1.5,1,-.0001,1,0,1,0,1,-.5,1,-.0001,1,0,1,0,1]),P=i._E.identity();P[10]=-1,P[14]=1,(r=a||(a={}))[r.Default=0]="Default",r[r.Reversed=1]="Reversed";let v=[a.Default,a.Reversed],g={[a.Default]:"less",[a.Reversed]:"greater"},x={[a.Default]:1,[a.Reversed]:0},w=async e=>{let{canvas:n,pageState:t,gui:r}=e,o=await navigator.gpu.requestAdapter(),m=await o.requestDevice();if(!t.active)return;let w=n.getContext("webgpu"),y=window.devicePixelRatio||1;n.width=n.clientWidth*y,n.height=n.clientHeight*y;let b=navigator.gpu.getPreferredCanvasFormat();w.configure({device:m,format:b,alphaMode:"premultiplied"});let B=m.createBuffer({size:h.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(B.getMappedRange()).set(h),B.unmap();let R="depth32float",D=m.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth"}}]}),S=m.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),M=m.createPipelineLayout({bindGroupLayouts:[S]}),G={layout:M,vertex:{module:m.createShaderModule({code:u}),entryPoint:"main",buffers:[{arrayStride:32,attributes:[{shaderLocation:0,offset:0,format:"float32x4"}]}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:R}},C=[];G.depthStencil.depthCompare=g[a.Default],C[a.Default]=m.createRenderPipeline(G),G.depthStencil.depthCompare=g[a.Reversed],C[a.Reversed]=m.createRenderPipeline(G);let T=m.createPipelineLayout({bindGroupLayouts:[S,D]}),L={layout:T,vertex:{module:m.createShaderModule({code:l}),entryPoint:"main",buffers:[{arrayStride:32,attributes:[{shaderLocation:0,offset:0,format:"float32x4"}]}]},fragment:{module:m.createShaderModule({code:f}),entryPoint:"main",targets:[{format:b}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:R}},V=[];L.depthStencil.depthCompare=g[a.Default],V[a.Default]=m.createRenderPipeline(L),L.depthStencil.depthCompare=g[a.Reversed],V[a.Reversed]=m.createRenderPipeline(L);let E=m.createPipelineLayout({bindGroupLayouts:[S]}),U={layout:E,vertex:{module:m.createShaderModule({code:s}),entryPoint:"main",buffers:[{arrayStride:32,attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}]}]},fragment:{module:m.createShaderModule({code:d}),entryPoint:"main",targets:[{format:b}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:R}},A=[];U.depthStencil.depthCompare=g[a.Default],A[a.Default]=m.createRenderPipeline(U),U.depthStencil.depthCompare=g[a.Reversed],A[a.Reversed]=m.createRenderPipeline(U);let O=m.createPipelineLayout({bindGroupLayouts:[D]}),_=m.createRenderPipeline({layout:O,vertex:{module:m.createShaderModule({code:c}),entryPoint:"main"},fragment:{module:m.createShaderModule({code:p}),entryPoint:"main",targets:[{format:b}]},primitive:{topology:"triangle-list"}}),F=m.createTexture({size:[n.width,n.height],format:R,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),j=F.createView(),z=m.createTexture({size:[n.width,n.height],format:R,usage:GPUTextureUsage.RENDER_ATTACHMENT}),I=z.createView(),W={colorAttachments:[],depthStencilAttachment:{view:j,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},Q=[{colorAttachments:[{view:void 0,clearValue:{r:0,g:0,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:I,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},{colorAttachments:[{view:void 0,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:I,depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}}],N=[{colorAttachments:[{view:void 0,clearValue:{r:0,g:0,b:.5,a:1},loadOp:"clear",storeOp:"store"}]},{colorAttachments:[{view:void 0,loadOp:"load",storeOp:"store"}]}],q=m.createBindGroup({layout:D,entries:[{binding:0,resource:j}]}),k=m.createBuffer({size:320,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),H=m.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),X=m.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),Y=[m.createBindGroup({layout:S,entries:[{binding:0,resource:{buffer:k}},{binding:1,resource:{buffer:H}}]}),m.createBindGroup({layout:S,entries:[{binding:0,resource:{buffer:k}},{binding:1,resource:{buffer:X}}]})],Z=[,,,,,],J=new Float32Array(80),K=0;for(let $=0;$<1;$++)for(let ee=0;ee<5;ee++){let en=-800*K,et=1+50*K;Z[K]=i._E.translation(i.R3.fromValues($-.5+.5,(4-.2*en)*(ee-2.5+1),en)),i._E.scale(Z[K],i.R3.fromValues(et,et,et),Z[K]),K++}let er=i._E.translation(i.R3.fromValues(0,0,-12)),ea=.5*n.width/n.height,eo=i._E.perspective(2*Math.PI/5,ea,5,9999),ei=i._E.multiply(eo,er),es=i._E.multiply(P,ei),ed=ei;m.queue.writeBuffer(H,0,ed.buffer,ed.byteOffset,ed.byteLength),ed=es,m.queue.writeBuffer(X,0,ed.buffer,ed.byteOffset,ed.byteLength);let eu=i._E.create(),ec={mode:"color"};r.add(ec,"mode",["color","precision-error","depth-texture"]),requestAnimationFrame(function e(){if(!t.active)return;(function(){let e=Date.now()/1e3;for(let n=0,t=0;n<5;n++,t+=16)i._E.rotate(Z[n],i.R3.fromValues(Math.sin(e),Math.cos(e),0),Math.PI/180*30,eu),J.set(eu,t)})(),m.queue.writeBuffer(k,0,J.buffer,J.byteOffset,J.byteLength);let r=w.getCurrentTexture().createView(),a=m.createCommandEncoder();if("color"===ec.mode)for(let o of v){Q[o].colorAttachments[0].view=r,Q[o].depthStencilAttachment.depthClearValue=x[o];let s=a.beginRenderPass(Q[o]);s.setPipeline(A[o]),s.setBindGroup(0,Y[o]),s.setVertexBuffer(0,B),s.setViewport(n.width*o/2,0,n.width/2,n.height,0,1),s.draw(12,5,0,0),s.end()}else if("precision-error"===ec.mode)for(let d of v){{W.depthStencilAttachment.depthClearValue=x[d];let u=a.beginRenderPass(W);u.setPipeline(C[d]),u.setBindGroup(0,Y[d]),u.setVertexBuffer(0,B),u.setViewport(n.width*d/2,0,n.width/2,n.height,0,1),u.draw(12,5,0,0),u.end()}{Q[d].colorAttachments[0].view=r,Q[d].depthStencilAttachment.depthClearValue=x[d];let c=a.beginRenderPass(Q[d]);c.setPipeline(V[d]),c.setBindGroup(0,Y[d]),c.setBindGroup(1,q),c.setVertexBuffer(0,B),c.setViewport(n.width*d/2,0,n.width/2,n.height,0,1),c.draw(12,5,0,0),c.end()}}else for(let p of v){{W.depthStencilAttachment.depthClearValue=x[p];let l=a.beginRenderPass(W);l.setPipeline(C[p]),l.setBindGroup(0,Y[p]),l.setVertexBuffer(0,B),l.setViewport(n.width*p/2,0,n.width/2,n.height,0,1),l.draw(12,5,0,0),l.end()}{N[p].colorAttachments[0].view=r;let f=a.beginRenderPass(N[p]);f.setPipeline(_),f.setBindGroup(0,q),f.setViewport(n.width*p/2,0,n.width/2,n.height,0,1),f.draw(6),f.end()}}m.queue.submit([a.finish()]),requestAnimationFrame(e)})},y=()=>(0,o.Tl)({name:"Reversed Z",description:"This example shows the use of reversed z technique for better utilization of depth buffer precision.\n      The left column uses regular method, while the right one uses reversed z technique.\n      Both are using depth32float as their depth buffer format. A set of red and green planes are positioned very close to each other.\n      Higher sets are placed further from camera (and are scaled for better visual purpose).\n      To use reversed z to render your scene, you will need depth store value to be 0.0, depth compare function to be greater,\n      and remap depth range by multiplying an additional matrix to your projection matrix.\n      Related reading:\n      https://developer.nvidia.com/content/depth-precision-visualized\n      https://thxforthefish.com/posts/reverse_z/\n      ",gui:!0,init:w,sources:[{name:m.substring(21),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\nimport { mat4, vec3 } from 'wgpu-matrix';\n\nimport vertexWGSL from './vertex.wgsl';\nimport fragmentWGSL from './fragment.wgsl';\nimport vertexDepthPrePassWGSL from './vertexDepthPrePass.wgsl';\nimport vertexTextureQuadWGSL from './vertexTextureQuad.wgsl';\nimport fragmentTextureQuadWGSL from './fragmentTextureQuad.wgsl';\nimport vertexPrecisionErrorPassWGSL from './vertexPrecisionErrorPass.wgsl';\nimport fragmentPrecisionErrorPassWGSL from './fragmentPrecisionErrorPass.wgsl';\n\n// Two planes close to each other for depth precision test\nconst geometryVertexSize = 4 * 8; // Byte size of one geometry vertex.\nconst geometryPositionOffset = 0;\nconst geometryColorOffset = 4 * 4; // Byte offset of geometry vertex color attribute.\nconst geometryDrawCount = 6 * 2;\n\nconst d = 0.0001; // half distance between two planes\nconst o = 0.5; // half x offset to shift planes so they are only partially overlaping\n\n// prettier-ignore\nexport const geometryVertexArray = new Float32Array([\n  // float4 position, float4 color\n  -1 - o, -1, d, 1, 1, 0, 0, 1,\n  1 - o, -1, d, 1, 1, 0, 0, 1,\n  -1 - o, 1, d, 1, 1, 0, 0, 1,\n  1 - o, -1, d, 1, 1, 0, 0, 1,\n  1 - o, 1, d, 1, 1, 0, 0, 1,\n  -1 - o, 1, d, 1, 1, 0, 0, 1,\n\n  -1 + o, -1, -d, 1, 0, 1, 0, 1,\n  1 + o, -1, -d, 1, 0, 1, 0, 1,\n  -1 + o, 1, -d, 1, 0, 1, 0, 1,\n  1 + o, -1, -d, 1, 0, 1, 0, 1,\n  1 + o, 1, -d, 1, 0, 1, 0, 1,\n  -1 + o, 1, -d, 1, 0, 1, 0, 1,\n]);\n\nconst xCount = 1;\nconst yCount = 5;\nconst numInstances = xCount * yCount;\nconst matrixFloatCount = 16; // 4x4 matrix\nconst matrixStride = 4 * matrixFloatCount; // 64;\n\nconst depthRangeRemapMatrix = mat4.identity();\ndepthRangeRemapMatrix[10] = -1;\ndepthRangeRemapMatrix[14] = 1;\n\nenum DepthBufferMode {\n  Default = 0,\n  Reversed,\n}\n\nconst depthBufferModes: DepthBufferMode[] = [\n  DepthBufferMode.Default,\n  DepthBufferMode.Reversed,\n];\nconst depthCompareFuncs = {\n  [DepthBufferMode.Default]: 'less' as GPUCompareFunction,\n  [DepthBufferMode.Reversed]: 'greater' as GPUCompareFunction,\n};\nconst depthClearValues = {\n  [DepthBufferMode.Default]: 1.0,\n  [DepthBufferMode.Reversed]: 0.0,\n};\n\nconst init: SampleInit = async ({ canvas, pageState, gui }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  const verticesBuffer = device.createBuffer({\n    size: geometryVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(geometryVertexArray);\n  verticesBuffer.unmap();\n\n  const depthBufferFormat = 'depth32float';\n\n  const depthTextureBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {\n          sampleType: 'depth',\n        },\n      },\n    ],\n  });\n\n  // Model, view, projection matrices\n  const uniformBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.VERTEX,\n        buffer: {\n          type: 'uniform',\n        },\n      },\n      {\n        binding: 1,\n        visibility: GPUShaderStage.VERTEX,\n        buffer: {\n          type: 'uniform',\n        },\n      },\n    ],\n  });\n\n  const depthPrePassRenderPipelineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [uniformBindGroupLayout],\n  });\n\n  // depthPrePass is used to render scene to the depth texture\n  // this is not needed if you just want to use reversed z to render a scene\n  const depthPrePassRenderPipelineDescriptorBase = {\n    layout: depthPrePassRenderPipelineLayout,\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexDepthPrePassWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: geometryVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: geometryPositionOffset,\n              format: 'float32x4',\n            },\n          ],\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n      cullMode: 'back',\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: depthBufferFormat,\n    },\n  } as GPURenderPipelineDescriptor;\n\n  // we need the depthCompare to fit the depth buffer mode we are using.\n  // this is the same for other passes\n  const depthPrePassPipelines: GPURenderPipeline[] = [];\n  depthPrePassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Default];\n  depthPrePassPipelines[DepthBufferMode.Default] = device.createRenderPipeline(\n    depthPrePassRenderPipelineDescriptorBase\n  );\n  depthPrePassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Reversed];\n  depthPrePassPipelines[DepthBufferMode.Reversed] = device.createRenderPipeline(\n    depthPrePassRenderPipelineDescriptorBase\n  );\n\n  // precisionPass is to draw precision error as color of depth value stored in depth buffer\n  // compared to that directly calcualated in the shader\n  const precisionPassRenderPipelineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [uniformBindGroupLayout, depthTextureBindGroupLayout],\n  });\n  const precisionPassRenderPipelineDescriptorBase = {\n    layout: precisionPassRenderPipelineLayout,\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexPrecisionErrorPassWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: geometryVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: geometryPositionOffset,\n              format: 'float32x4',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentPrecisionErrorPassWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n      cullMode: 'back',\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: depthBufferFormat,\n    },\n  } as GPURenderPipelineDescriptor;\n  const precisionPassPipelines: GPURenderPipeline[] = [];\n  precisionPassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Default];\n  precisionPassPipelines[DepthBufferMode.Default] = device.createRenderPipeline(\n    precisionPassRenderPipelineDescriptorBase\n  );\n  precisionPassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Reversed];\n  // prettier-ignore\n  precisionPassPipelines[DepthBufferMode.Reversed] = device.createRenderPipeline(\n    precisionPassRenderPipelineDescriptorBase\n  );\n\n  // colorPass is the regular render pass to render the scene\n  const colorPassRenderPiplineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [uniformBindGroupLayout],\n  });\n  const colorPassRenderPipelineDescriptorBase: GPURenderPipelineDescriptor = {\n    layout: colorPassRenderPiplineLayout,\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: geometryVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: geometryPositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // color\n              shaderLocation: 1,\n              offset: geometryColorOffset,\n              format: 'float32x4',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n      cullMode: 'back',\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: depthBufferFormat,\n    },\n  };\n  const colorPassPipelines: GPURenderPipeline[] = [];\n  colorPassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Default];\n  colorPassPipelines[DepthBufferMode.Default] = device.createRenderPipeline(\n    colorPassRenderPipelineDescriptorBase\n  );\n  colorPassRenderPipelineDescriptorBase.depthStencil.depthCompare =\n    depthCompareFuncs[DepthBufferMode.Reversed];\n  colorPassPipelines[DepthBufferMode.Reversed] = device.createRenderPipeline(\n    colorPassRenderPipelineDescriptorBase\n  );\n\n  // textureQuadPass is draw a full screen quad of depth texture\n  // to see the difference of depth value using reversed z compared to default depth buffer usage\n  // 0.0 will be the furthest and 1.0 will be the closest\n  const textureQuadPassPiplineLayout = device.createPipelineLayout({\n    bindGroupLayouts: [depthTextureBindGroupLayout],\n  });\n  const textureQuadPassPipline = device.createRenderPipeline({\n    layout: textureQuadPassPiplineLayout,\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexTextureQuadWGSL,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentTextureQuadWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: depthBufferFormat,\n    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,\n  });\n  const depthTextureView = depthTexture.createView();\n\n  const defaultDepthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: depthBufferFormat,\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n  const defaultDepthTextureView = defaultDepthTexture.createView();\n\n  const depthPrePassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [],\n    depthStencilAttachment: {\n      view: depthTextureView,\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  // drawPassDescriptor and drawPassLoadDescriptor are used for drawing\n  // the scene twice using different depth buffer mode on splitted viewport\n  // of the same canvas\n  // see the difference of the loadOp of the colorAttachments\n  const drawPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // view is acquired and set in render loop.\n        view: undefined,\n\n        clearValue: { r: 0.0, g: 0.0, b: 0.5, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: defaultDepthTextureView,\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n  const drawPassLoadDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // attachment is acquired and set in render loop.\n        view: undefined,\n\n        loadOp: 'load',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: defaultDepthTextureView,\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n  const drawPassDescriptors = [drawPassDescriptor, drawPassLoadDescriptor];\n\n  const textureQuadPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // view is acquired and set in render loop.\n        view: undefined,\n\n        clearValue: { r: 0.0, g: 0.0, b: 0.5, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n  };\n  const textureQuadPassLoadDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // view is acquired and set in render loop.\n        view: undefined,\n\n        loadOp: 'load',\n        storeOp: 'store',\n      },\n    ],\n  };\n  const textureQuadPassDescriptors = [\n    textureQuadPassDescriptor,\n    textureQuadPassLoadDescriptor,\n  ];\n\n  const depthTextureBindGroup = device.createBindGroup({\n    layout: depthTextureBindGroupLayout,\n    entries: [\n      {\n        binding: 0,\n        resource: depthTextureView,\n      },\n    ],\n  });\n\n  const uniformBufferSize = numInstances * matrixStride;\n\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n  const cameraMatrixBuffer = device.createBuffer({\n    size: 4 * 16, // 4x4 matrix\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n  const cameraMatrixReversedDepthBuffer = device.createBuffer({\n    size: 4 * 16, // 4x4 matrix\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const uniformBindGroups = [\n    device.createBindGroup({\n      layout: uniformBindGroupLayout,\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: uniformBuffer,\n          },\n        },\n        {\n          binding: 1,\n          resource: {\n            buffer: cameraMatrixBuffer,\n          },\n        },\n      ],\n    }),\n    device.createBindGroup({\n      layout: uniformBindGroupLayout,\n      entries: [\n        {\n          binding: 0,\n          resource: {\n            buffer: uniformBuffer,\n          },\n        },\n        {\n          binding: 1,\n          resource: {\n            buffer: cameraMatrixReversedDepthBuffer,\n          },\n        },\n      ],\n    }),\n  ];\n\n  type Mat4 = mat4.default;\n  const modelMatrices = new Array<Mat4>(numInstances);\n  const mvpMatricesData = new Float32Array(matrixFloatCount * numInstances);\n\n  let m = 0;\n  for (let x = 0; x < xCount; x++) {\n    for (let y = 0; y < yCount; y++) {\n      const z = -800 * m;\n      const s = 1 + 50 * m;\n\n      modelMatrices[m] = mat4.translation(\n        vec3.fromValues(\n          x - xCount / 2 + 0.5,\n          (4.0 - 0.2 * z) * (y - yCount / 2 + 1.0),\n          z\n        )\n      );\n      mat4.scale(modelMatrices[m], vec3.fromValues(s, s, s), modelMatrices[m]);\n\n      m++;\n    }\n  }\n\n  const viewMatrix = mat4.translation(vec3.fromValues(0, 0, -12));\n\n  const aspect = (0.5 * canvas.width) / canvas.height;\n  // wgpu-matrix perspective doesn't handle zFar === Infinity now.\n  // https://github.com/greggman/wgpu-matrix/issues/9\n  const projectionMatrix = mat4.perspective((2 * Math.PI) / 5, aspect, 5, 9999);\n\n  const viewProjectionMatrix = mat4.multiply(projectionMatrix, viewMatrix);\n  // to use 1/z we just multiple depthRangeRemapMatrix to our default camera view projection matrix\n  const reversedRangeViewProjectionMatrix = mat4.multiply(\n    depthRangeRemapMatrix,\n    viewProjectionMatrix\n  );\n\n  let bufferData = viewProjectionMatrix as Float32Array;\n  device.queue.writeBuffer(\n    cameraMatrixBuffer,\n    0,\n    bufferData.buffer,\n    bufferData.byteOffset,\n    bufferData.byteLength\n  );\n  bufferData = reversedRangeViewProjectionMatrix as Float32Array;\n  device.queue.writeBuffer(\n    cameraMatrixReversedDepthBuffer,\n    0,\n    bufferData.buffer,\n    bufferData.byteOffset,\n    bufferData.byteLength\n  );\n\n  const tmpMat4 = mat4.create();\n  function updateTransformationMatrix() {\n    const now = Date.now() / 1000;\n\n    for (let i = 0, m = 0; i < numInstances; i++, m += matrixFloatCount) {\n      mat4.rotate(\n        modelMatrices[i],\n        vec3.fromValues(Math.sin(now), Math.cos(now), 0),\n        (Math.PI / 180) * 30,\n        tmpMat4\n      );\n      mvpMatricesData.set(tmpMat4, m);\n    }\n  }\n\n  const settings = {\n    mode: 'color',\n  };\n  gui.add(settings, 'mode', ['color', 'precision-error', 'depth-texture']);\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    updateTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      mvpMatricesData.buffer,\n      mvpMatricesData.byteOffset,\n      mvpMatricesData.byteLength\n    );\n\n    const attachment = context.getCurrentTexture().createView();\n    const commandEncoder = device.createCommandEncoder();\n    if (settings.mode === 'color') {\n      for (const m of depthBufferModes) {\n        drawPassDescriptors[m].colorAttachments[0].view = attachment;\n        drawPassDescriptors[m].depthStencilAttachment.depthClearValue =\n          depthClearValues[m];\n        const colorPass = commandEncoder.beginRenderPass(\n          drawPassDescriptors[m]\n        );\n        colorPass.setPipeline(colorPassPipelines[m]);\n        colorPass.setBindGroup(0, uniformBindGroups[m]);\n        colorPass.setVertexBuffer(0, verticesBuffer);\n        colorPass.setViewport(\n          (canvas.width * m) / 2,\n          0,\n          canvas.width / 2,\n          canvas.height,\n          0,\n          1\n        );\n        colorPass.draw(geometryDrawCount, numInstances, 0, 0);\n        colorPass.end();\n      }\n    } else if (settings.mode === 'precision-error') {\n      for (const m of depthBufferModes) {\n        {\n          depthPrePassDescriptor.depthStencilAttachment.depthClearValue =\n            depthClearValues[m];\n          const depthPrePass = commandEncoder.beginRenderPass(\n            depthPrePassDescriptor\n          );\n          depthPrePass.setPipeline(depthPrePassPipelines[m]);\n          depthPrePass.setBindGroup(0, uniformBindGroups[m]);\n          depthPrePass.setVertexBuffer(0, verticesBuffer);\n          depthPrePass.setViewport(\n            (canvas.width * m) / 2,\n            0,\n            canvas.width / 2,\n            canvas.height,\n            0,\n            1\n          );\n          depthPrePass.draw(geometryDrawCount, numInstances, 0, 0);\n          depthPrePass.end();\n        }\n        {\n          drawPassDescriptors[m].colorAttachments[0].view = attachment;\n          drawPassDescriptors[m].depthStencilAttachment.depthClearValue =\n            depthClearValues[m];\n          const precisionErrorPass = commandEncoder.beginRenderPass(\n            drawPassDescriptors[m]\n          );\n          precisionErrorPass.setPipeline(precisionPassPipelines[m]);\n          precisionErrorPass.setBindGroup(0, uniformBindGroups[m]);\n          precisionErrorPass.setBindGroup(1, depthTextureBindGroup);\n          precisionErrorPass.setVertexBuffer(0, verticesBuffer);\n          precisionErrorPass.setViewport(\n            (canvas.width * m) / 2,\n            0,\n            canvas.width / 2,\n            canvas.height,\n            0,\n            1\n          );\n          precisionErrorPass.draw(geometryDrawCount, numInstances, 0, 0);\n          precisionErrorPass.end();\n        }\n      }\n    } else {\n      // depth texture quad\n      for (const m of depthBufferModes) {\n        {\n          depthPrePassDescriptor.depthStencilAttachment.depthClearValue =\n            depthClearValues[m];\n          const depthPrePass = commandEncoder.beginRenderPass(\n            depthPrePassDescriptor\n          );\n          depthPrePass.setPipeline(depthPrePassPipelines[m]);\n          depthPrePass.setBindGroup(0, uniformBindGroups[m]);\n          depthPrePass.setVertexBuffer(0, verticesBuffer);\n          depthPrePass.setViewport(\n            (canvas.width * m) / 2,\n            0,\n            canvas.width / 2,\n            canvas.height,\n            0,\n            1\n          );\n          depthPrePass.draw(geometryDrawCount, numInstances, 0, 0);\n          depthPrePass.end();\n        }\n        {\n          textureQuadPassDescriptors[m].colorAttachments[0].view = attachment;\n          const depthTextureQuadPass = commandEncoder.beginRenderPass(\n            textureQuadPassDescriptors[m]\n          );\n          depthTextureQuadPass.setPipeline(textureQuadPassPipline);\n          depthTextureQuadPass.setBindGroup(0, depthTextureBindGroup);\n          depthTextureQuadPass.setViewport(\n            (canvas.width * m) / 2,\n            0,\n            canvas.width / 2,\n            canvas.height,\n            0,\n            1\n          );\n          depthTextureQuadPass.draw(6);\n          depthTextureQuadPass.end();\n        }\n      }\n    }\n    device.queue.submit([commandEncoder.finish()]);\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst ReversedZ: () => JSX.Element = () =>\n  makeSample({\n    name: 'Reversed Z',\n    description: `This example shows the use of reversed z technique for better utilization of depth buffer precision.\n      The left column uses regular method, while the right one uses reversed z technique.\n      Both are using depth32float as their depth buffer format. A set of red and green planes are positioned very close to each other.\n      Higher sets are placed further from camera (and are scaled for better visual purpose).\n      To use reversed z to render your scene, you will need depth store value to be 0.0, depth compare function to be greater,\n      and remap depth range by multiplying an additional matrix to your projection matrix.\n      Related reading:\n      https://developer.nvidia.com/content/depth-precision-visualized\n      https://thxforthefish.com/posts/reverse_z/\n      `,\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: './vertex.wgsl',\n        contents: vertexWGSL,\n        editable: true,\n      },\n      {\n        name: './fragment.wgsl',\n        contents: fragmentWGSL,\n        editable: true,\n      },\n      {\n        name: './vertexDepthPrePass.wgsl',\n        contents: vertexDepthPrePassWGSL,\n        editable: true,\n      },\n      {\n        name: './vertexTextureQuad.wgsl',\n        contents: vertexTextureQuadWGSL,\n        editable: true,\n      },\n      {\n        name: './fragmentTextureQuad.wgsl',\n        contents: fragmentTextureQuadWGSL,\n        editable: true,\n      },\n      {\n        name: './vertexPrecisionErrorPass.wgsl',\n        contents: vertexPrecisionErrorPassWGSL,\n        editable: true,\n      },\n      {\n        name: './fragmentPrecisionErrorPass.wgsl',\n        contents: fragmentPrecisionErrorPassWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default ReversedZ;\n"},{name:"./vertex.wgsl",contents:s,editable:!0},{name:"./fragment.wgsl",contents:d,editable:!0},{name:"./vertexDepthPrePass.wgsl",contents:u,editable:!0},{name:"./vertexTextureQuad.wgsl",contents:c,editable:!0},{name:"./fragmentTextureQuad.wgsl",contents:p,editable:!0},{name:"./vertexPrecisionErrorPass.wgsl",contents:l,editable:!0},{name:"./fragmentPrecisionErrorPass.wgsl",contents:f,editable:!0}],filename:m});var b=y},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}}}]);