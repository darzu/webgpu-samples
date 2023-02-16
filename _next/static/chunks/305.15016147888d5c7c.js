(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{5671:function(e,n,t){"use strict";t.d(n,{T:function(){return d}});var r=t(5893),a=t(9008),i=t.n(a),o=t(1163),s=t(7294),c=t(9147),l=t.n(c);t(7319);let u=e=>{let n=(0,s.useRef)(null),a=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:a}=e;return{name:n,...function(e){let n;let a=null;{a=document.createElement("div");let i=t(4631);n=i(a,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){a&&t&&(t.appendChild(a),n.setOption("value",e))}})})}}}(a)}}),e.sources),c=(0,s.useRef)(null),u=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),d=(0,o.useRouter)(),m=d.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[p,v]=(0,s.useState)(null),[g,x]=(0,s.useState)(null);return(0,s.useEffect)(()=>{m?x(m[1]):x(a[0].name),u&&c.current&&c.current.appendChild(u.domElement);let t={active:!0},r=()=>{t.active=!1};try{let i=n.current,o=e.init({canvas:i,pageState:t,gui:u});o instanceof Promise&&o.catch(e=>{console.error(e),v(e)})}catch(s){console.error(s),v(s)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/austinEng/webgpu-samples/tree/main/".concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),p?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Is WebGPU Enabled?"}),(0,r.jsx)("p",{children:"".concat(p)})]}):null]}),(0,r.jsxs)("div",{className:l().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:l().sourceFileNav,children:(0,r.jsx)("ul",{children:a.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":g==e.name,onClick(){x(e.name)},children:e.name})},n))})}),a.map((e,n)=>(0,r.jsx)(e.Container,{className:l().sourceFileContainer,"data-active":g==e.name},n))]})]})},d=e=>(0,r.jsx)(u,{...e})},3305:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5671),a=t(134),i="@group(0) @binding(1) var mySampler: sampler;\n@group(0) @binding(2) var myTexture: texture_external;\n\n@fragment\nfn main(@location(0) fragUV : vec2<f32>) -> @location(0) vec4<f32> {\n  return textureSampleBaseClampToEdge(myTexture, mySampler, fragUV);\n}\n",o="src/sample/videoUploading/main.ts";let s=async e=>{let{canvas:n,pageState:r}=e,o=document.createElement("video");o.loop=!0,o.autoplay=!0,o.muted=!0,o.src=new t.U(t(9082)).toString(),await o.play();let s=await navigator.gpu.requestAdapter(),c=await s.requestDevice();if(!r.active)return;let l=n.getContext("webgpu"),u=window.devicePixelRatio||1;n.width=n.clientWidth*u,n.height=n.clientHeight*u;let d=navigator.gpu.getPreferredCanvasFormat();l.configure({device:c,format:d,alphaMode:"opaque"});let m=c.createRenderPipeline({layout:"auto",vertex:{module:c.createShaderModule({code:a.Z}),entryPoint:"vert_main"},fragment:{module:c.createShaderModule({code:i}),entryPoint:"main",targets:[{format:d}]},primitive:{topology:"triangle-list"}}),p=c.createSampler({magFilter:"linear",minFilter:"linear"});requestAnimationFrame(function e(){if(!r.active)return;let n=c.createBindGroup({layout:m.getBindGroupLayout(0),entries:[{binding:1,resource:p},{binding:2,resource:c.importExternalTexture({source:o})}]}),t=c.createCommandEncoder(),a=l.getCurrentTexture().createView(),i=t.beginRenderPass({colorAttachments:[{view:a,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]});i.setPipeline(m),i.setBindGroup(0,n),i.draw(6,1,0,0),i.end(),c.queue.submit([t.finish()]),requestAnimationFrame(e)})},c=()=>(0,r.T)({name:"Video Uploading",description:"This example shows how to upload video frame to WebGPU.",init:s,sources:[{name:o.substring(26),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport fullscreenTexturedQuadWGSL from '../../shaders/fullscreenTexturedQuad.wgsl';\nimport sampleExternalTextureWGSL from '../../shaders/sampleExternalTexture.frag.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  // Set video element\n  const video = document.createElement('video');\n  video.loop = true;\n  video.autoplay = true;\n  video.muted = true;\n  video.src = new URL(\n    '../../../assets/video/pano.webm',\n    import.meta.url\n  ).toString();\n  await video.play();\n\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'opaque',\n  });\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: fullscreenTexturedQuadWGSL,\n      }),\n      entryPoint: 'vert_main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: sampleExternalTextureWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n  });\n\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    const uniformBindGroup = device.createBindGroup({\n      layout: pipeline.getBindGroupLayout(0),\n      entries: [\n        {\n          binding: 1,\n          resource: sampler,\n        },\n        {\n          binding: 2,\n          resource: device.importExternalTexture({\n            source: video,\n          }),\n        },\n      ],\n    });\n\n    const commandEncoder = device.createCommandEncoder();\n    const textureView = context.getCurrentTexture().createView();\n\n    const renderPassDescriptor: GPURenderPassDescriptor = {\n      colorAttachments: [\n        {\n          view: textureView,\n          clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n          loadOp: 'clear',\n          storeOp: 'store',\n        },\n      ],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.draw(6, 1, 0, 0);\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst VideoUploading: () => JSX.Element = () =>\n  makeSample({\n    name: 'Video Uploading',\n    description: 'This example shows how to upload video frame to WebGPU.',\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/fullscreenTexturedQuad.wgsl',\n        contents: fullscreenTexturedQuadWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/sampleExternalTexture.wgsl',\n        contents: sampleExternalTextureWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default VideoUploading;\n"},{name:"../../shaders/fullscreenTexturedQuad.wgsl",contents:a.Z,editable:!0},{name:"../../shaders/sampleExternalTexture.wgsl",contents:i,editable:!0}],filename:o});var l=c},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},134:function(e,n){"use strict";n.Z="@group(0) @binding(0) var mySampler : sampler;\n@group(0) @binding(1) var myTexture : texture_2d<f32>;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragUV : vec2<f32>,\n}\n\n@vertex\nfn vert_main(@builtin(vertex_index) VertexIndex : u32) -> VertexOutput {\n  const pos = array(\n    vec2( 1.0,  1.0),\n    vec2( 1.0, -1.0),\n    vec2(-1.0, -1.0),\n    vec2( 1.0,  1.0),\n    vec2(-1.0, -1.0),\n    vec2(-1.0,  1.0),\n  );\n\n  const uv = array(\n    vec2(1.0, 0.0),\n    vec2(1.0, 1.0),\n    vec2(0.0, 1.0),\n    vec2(1.0, 0.0),\n    vec2(0.0, 1.0),\n    vec2(0.0, 0.0),\n  );\n\n  var output : VertexOutput;\n  output.Position = vec4(pos[VertexIndex], 0.0, 1.0);\n  output.fragUV = uv[VertexIndex];\n  return output;\n}\n\n@fragment\nfn frag_main(@location(0) fragUV : vec2<f32>) -> @location(0) vec4<f32> {\n  return textureSample(myTexture, mySampler, fragUV);\n}\n"},9082:function(e,n,t){"use strict";e.exports=t.p+"static/assets/video/pano.5b0db72b3dd7f1b9.webm"}}]);