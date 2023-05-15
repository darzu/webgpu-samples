(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{5671:function(e,n,t){"use strict";t.d(n,{T:function(){return u}});var a=t(5893),r=t(9008),i=t.n(r),o=t(1163),s=t(7294),l=t(9147),c=t.n(l);t(7319);let d=e=>{let n=(0,s.useRef)(null),r=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:r}=e;return{name:n,...function(e){let n;let r=null;{r=document.createElement("div");let i=t(4631);n=i(r,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,a.jsx)("div",{...t,children:(0,a.jsx)("div",{ref(t){r&&t&&(t.appendChild(r),n.setOption("value",e))}})})}}}(r)}}),e.sources),l=(0,s.useRef)(null),d=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),u=(0,s.useRef)(null),m=(0,s.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),p=(0,o.useRouter)(),g=p.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[v,h]=(0,s.useState)(null),[f,x]=(0,s.useState)(null);return(0,s.useEffect)(()=>{g?x(g[1]):x(r[0].name),d&&l.current&&l.current.appendChild(d.domElement),m&&u.current&&(m.dom.style.position="absolute",m.showPanel(1),u.current.appendChild(m.dom));let t={active:!0},a=()=>{t.active=!1};try{let i=n.current,o=e.init({canvas:i,pageState:t,gui:d,stats:m});o instanceof Promise&&o.catch(e=>{console.error(e),h(e)})}catch(s){console.error(s),h(s)}return a},[]),(0,a.jsxs)("main",{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,a.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,a.jsx)("meta",{name:"description",content:e.description}),(0,a.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:e.name}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,a.jsx)("p",{children:e.description}),v?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Is WebGPU Enabled?"}),(0,a.jsx)("p",{children:"".concat(v)})]}):null]}),(0,a.jsxs)("div",{className:c().canvasContainer,children:[(0,a.jsx)("div",{style:{position:"absolute",left:10},ref:u}),(0,a.jsx)("div",{style:{position:"absolute",right:10},ref:l}),(0,a.jsx)("canvas",{ref:n})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("nav",{className:c().sourceFileNav,children:(0,a.jsx)("ul",{children:r.map((e,n)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.name),"data-active":f==e.name,onClick(){x(e.name)},children:e.name})},n))})}),r.map((e,n)=>(0,a.jsx)(e.Container,{className:c().sourceFileContainer,"data-active":f==e.name},n))]})]})},u=e=>(0,a.jsx)(d,{...e})},6607:function(e,n,t){"use strict";var a="src/sample/helloTriangle/main.ts";t.r(n);var r=t(5671),i=t(1974),o=t(2690);let s=async e=>{let{canvas:n,pageState:t}=e,a=await navigator.gpu.requestAdapter(),r=await a.requestDevice();if(!t.active)return;let s=n.getContext("webgpu"),l=window.devicePixelRatio||1;n.width=n.clientWidth*l,n.height=n.clientHeight*l;let c=navigator.gpu.getPreferredCanvasFormat();s.configure({device:r,format:c,alphaMode:"premultiplied"});let d=r.createRenderPipeline({layout:"auto",vertex:{module:r.createShaderModule({code:i.Z}),entryPoint:"main"},fragment:{module:r.createShaderModule({code:o.Z}),entryPoint:"main",targets:[{format:c}]},primitive:{topology:"triangle-list"}});requestAnimationFrame(function e(){if(!t.active)return;let n=r.createCommandEncoder(),a=s.getCurrentTexture().createView(),i=n.beginRenderPass({colorAttachments:[{view:a,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]});i.setPipeline(d),i.draw(3,1,0,0),i.end(),r.queue.submit([n.finish()]),requestAnimationFrame(e)})},l=()=>(0,r.T)({name:"Hello Triangle",description:"Shows rendering a basic triangle.",init:s,sources:[{name:a.substring(25),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport triangleVertWGSL from '../../shaders/triangle.vert.wgsl';\nimport redFragWGSL from '../../shaders/red.frag.wgsl';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: triangleVertWGSL,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: redFragWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n  });\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    const commandEncoder = device.createCommandEncoder();\n    const textureView = context.getCurrentTexture().createView();\n\n    const renderPassDescriptor: GPURenderPassDescriptor = {\n      colorAttachments: [\n        {\n          view: textureView,\n          clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n          loadOp: 'clear',\n          storeOp: 'store',\n        },\n      ],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.draw(3, 1, 0, 0);\n    passEncoder.end();\n\n    device.queue.submit([commandEncoder.finish()]);\n    requestAnimationFrame(frame);\n  }\n\n  requestAnimationFrame(frame);\n};\n\nconst HelloTriangle: () => JSX.Element = () =>\n  makeSample({\n    name: 'Hello Triangle',\n    description: 'Shows rendering a basic triangle.',\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/triangle.vert.wgsl',\n        contents: triangleVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/red.frag.wgsl',\n        contents: redFragWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default HelloTriangle;\n"},{name:"../../shaders/triangle.vert.wgsl",contents:i.Z,editable:!0},{name:"../../shaders/red.frag.wgsl",contents:o.Z,editable:!0}],filename:a});n.default=l},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2690:function(e,n){"use strict";n.Z="@fragment\nfn main() -> @location(0) vec4<f32> {\n  return vec4(1.0, 0.0, 0.0, 1.0);\n}\n"},1974:function(e,n){"use strict";n.Z="@vertex\nfn main(\n  @builtin(vertex_index) VertexIndex : u32\n) -> @builtin(position) vec4<f32> {\n  var pos = array<vec2<f32>, 3>(\n    vec2(0.0, 0.5),\n    vec2(-0.5, -0.5),\n    vec2(0.5, -0.5)\n  );\n\n  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n}\n"}}]);