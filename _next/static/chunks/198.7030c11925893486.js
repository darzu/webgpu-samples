(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[198],{5671:function(e,n,t){"use strict";t.d(n,{T:function(){return u}});var a=t(5893),r=t(9008),i=t.n(r),s=t(1163),o=t(7294),c=t(9147),l=t.n(c);t(7319);let d=e=>{let n=(0,o.useRef)(null),r=(0,o.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:r}=e;return{name:n,...function(e){let n;let r=null;{r=document.createElement("div");let i=t(4631);n=i(r,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,a.jsx)("div",{...t,children:(0,a.jsx)("div",{ref(t){r&&t&&(t.appendChild(r),n.setOption("value",e))}})})}}}(r)}}),e.sources),c=(0,o.useRef)(null),d=(0,o.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),u=(0,s.useRouter)(),m=u.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[p,g]=(0,o.useState)(null),[v,h]=(0,o.useState)(null);return(0,o.useEffect)(()=>{m?h(m[1]):h(r[0].name),d&&c.current&&c.current.appendChild(d.domElement);let t={active:!0},a=()=>{t.active=!1};try{let i=n.current,s=e.init({canvas:i,pageState:t,gui:d});s instanceof Promise&&s.catch(e=>{console.error(e),g(e)})}catch(o){console.error(o),g(o)}return a},[]),(0,a.jsxs)("main",{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,a.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,a.jsx)("meta",{name:"description",content:e.description})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:e.name}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("austinEng/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,a.jsx)("p",{children:e.description}),p?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Is WebGPU Enabled?"}),(0,a.jsx)("p",{children:"".concat(p)})]}):null]}),(0,a.jsxs)("div",{className:l().canvasContainer,children:[(0,a.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,a.jsx)("canvas",{ref:n})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("nav",{className:l().sourceFileNav,children:(0,a.jsx)("ul",{children:r.map((e,n)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.name),"data-active":v==e.name,onClick(){h(e.name)},children:e.name})},n))})}),r.map((e,n)=>(0,a.jsx)(e.Container,{className:l().sourceFileContainer,"data-active":v==e.name},n))]})]})},u=e=>(0,a.jsx)(d,{...e})},1198:function(e,n,t){"use strict";var a="src/sample/helloTriangleMSAA/main.ts";t.r(n);var r=t(5671),i=t(1974),s=t(2690);let o=async e=>{let{canvas:n,pageState:t}=e,a=await navigator.gpu.requestAdapter(),r=await a.requestDevice();if(!t.active)return;let o=n.getContext("webgpu"),c=window.devicePixelRatio||1;n.width=n.clientWidth*c,n.height=n.clientHeight*c;let l=navigator.gpu.getPreferredCanvasFormat();o.configure({device:r,format:l,alphaMode:"opaque"});let d=r.createRenderPipeline({layout:"auto",vertex:{module:r.createShaderModule({code:i.Z}),entryPoint:"main"},fragment:{module:r.createShaderModule({code:s.Z}),entryPoint:"main",targets:[{format:l}]},primitive:{topology:"triangle-list"},multisample:{count:4}}),u=r.createTexture({size:[n.width,n.height],sampleCount:4,format:l,usage:GPUTextureUsage.RENDER_ATTACHMENT}),m=u.createView();requestAnimationFrame(function e(){if(!t.active)return;let n=r.createCommandEncoder(),a={colorAttachments:[{view:m,resolveTarget:o.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"discard"}]},i=n.beginRenderPass(a);i.setPipeline(d),i.draw(3,1,0,0),i.end(),r.queue.submit([n.finish()]),requestAnimationFrame(e)})},c=()=>(0,r.T)({name:"Hello Triangle MSAA",description:"Shows multisampled rendering a basic triangle.",init:o,sources:[{name:a.substring(29),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport triangleVertWGSL from '../../shaders/triangle.vert.wgsl';\nimport redFragWGSL from '../../shaders/red.frag.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'opaque',\n  });\n\n  const sampleCount = 4;\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: triangleVertWGSL,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: redFragWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n    multisample: {\n      count: 4,\n    },\n  });\n\n  const texture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    sampleCount,\n    format: presentationFormat,\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n  const view = texture.createView();\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    const commandEncoder = device.createCommandEncoder();\n\n    const renderPassDescriptor: GPURenderPassDescriptor = {\n      colorAttachments: [\n        {\n          view,\n          resolveTarget: context.getCurrentTexture().createView(),\n          clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n          loadOp: 'clear',\n          storeOp: 'discard',\n        },\n      ],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.draw(3, 1, 0, 0);\n    passEncoder.end();\n\n    device.queue.submit([commandEncoder.finish()]);\n    requestAnimationFrame(frame);\n  }\n\n  requestAnimationFrame(frame);\n};\n\nconst HelloTriangleMSAA: () => JSX.Element = () =>\n  makeSample({\n    name: 'Hello Triangle MSAA',\n    description: 'Shows multisampled rendering a basic triangle.',\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/triangle.vert.wgsl',\n        contents: triangleVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/red.frag.wgsl',\n        contents: redFragWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default HelloTriangleMSAA;\n"},{name:"../../shaders/triangle.vert.wgsl",contents:i.Z,editable:!0},{name:"../../shaders/red.frag.wgsl",contents:s.Z,editable:!0}],filename:a});n.default=c},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2690:function(e,n){"use strict";n.Z="@fragment\nfn main() -> @location(0) vec4<f32> {\n  return vec4(1.0, 0.0, 0.0, 1.0);\n}\n"},1974:function(e,n){"use strict";n.Z="@vertex\nfn main(\n  @builtin(vertex_index) VertexIndex : u32\n) -> @builtin(position) vec4<f32> {\n  var pos = array<vec2<f32>, 3>(\n    vec2(0.0, 0.5),\n    vec2(-0.5, -0.5),\n    vec2(0.5, -0.5)\n  );\n\n  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n}\n"}}]);