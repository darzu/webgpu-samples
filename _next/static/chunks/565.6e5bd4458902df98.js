(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{5671:function(e,n,t){"use strict";t.d(n,{T:function(){return u}});var a=t(5893),i=t(9008),r=t.n(i),s=t(1163),o=t(7294),c=t(9147),l=t.n(c);t(7319);let d=e=>{let n=(0,o.useRef)(null),i=(0,o.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:i}=e;return{name:n,...function(e){let n;let i=null;{i=document.createElement("div");let r=t(4631);n=r(i,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,a.jsx)("div",{...t,children:(0,a.jsx)("div",{ref(t){i&&t&&(t.appendChild(i),n.setOption("value",e))}})})}}}(i)}}),e.sources),c=(0,o.useRef)(null),d=(0,o.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),u=(0,o.useRef)(null),m=(0,o.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),h=(0,s.useRouter)(),p=h.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[v,g]=(0,o.useState)(null),[f,x]=(0,o.useState)(null);return(0,o.useEffect)(()=>{p?x(p[1]):x(i[0].name),d&&c.current&&c.current.appendChild(d.domElement),m&&u.current&&(m.dom.style.position="absolute",m.showPanel(1),u.current.appendChild(m.dom));let t={active:!0},a=()=>{t.active=!1};try{let r=n.current,s=e.init({canvas:r,pageState:t,gui:d,stats:m});s instanceof Promise&&s.catch(e=>{console.error(e),g(e)})}catch(o){console.error(o),g(o)}return a},[]),(0,a.jsxs)("main",{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,a.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,a.jsx)("meta",{name:"description",content:e.description}),(0,a.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:e.name}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,a.jsx)("p",{children:e.description}),v?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Is WebGPU Enabled?"}),(0,a.jsx)("p",{children:"".concat(v)})]}):null]}),(0,a.jsxs)("div",{className:l().canvasContainer,children:[(0,a.jsx)("div",{style:{position:"absolute",left:10},ref:u}),(0,a.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,a.jsx)("canvas",{ref:n})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("nav",{className:l().sourceFileNav,children:(0,a.jsx)("ul",{children:i.map((e,n)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.name),"data-active":f==e.name,onClick(){x(e.name)},children:e.name})},n))})}),i.map((e,n)=>(0,a.jsx)(e.Container,{className:l().sourceFileContainer,"data-active":f==e.name},n))]})]})},u=e=>(0,a.jsx)(d,{...e})},8565:function(e,n,t){"use strict";var a="src/sample/resizeCanvas/main.ts";t.r(n);var i=t(5671),r=t(1974),s=t(2690),o=t(4057),c=t.n(o);let l=async e=>{let n,t,{canvas:a,pageState:i}=e,o=await navigator.gpu.requestAdapter(),l=await o.requestDevice();if(!i.active)return;let d=a.getContext("webgpu"),u=navigator.gpu.getPreferredCanvasFormat(),m=window.devicePixelRatio||1;a.width=a.clientWidth*m,a.height=a.clientHeight*m,d.configure({device:l,format:u,alphaMode:"premultiplied"});let h=l.createRenderPipeline({layout:"auto",vertex:{module:l.createShaderModule({code:r.Z}),entryPoint:"main"},fragment:{module:l.createShaderModule({code:s.Z}),entryPoint:"main",targets:[{format:u}]},primitive:{topology:"triangle-list"},multisample:{count:4}});a.classList.add(c().animatedCanvasSize),requestAnimationFrame(function e(){if(!i.active)return;let r=a.clientWidth*m,s=a.clientHeight*m;(r!==a.width||s!==a.height)&&r&&s&&(void 0!==n&&n.destroy(),a.width=r,a.height=s,t=(n=l.createTexture({size:[a.width,a.height],sampleCount:4,format:u,usage:GPUTextureUsage.RENDER_ATTACHMENT})).createView());let o=l.createCommandEncoder(),c={colorAttachments:[{view:t,resolveTarget:d.getCurrentTexture().createView(),clearValue:{r:.2,g:.2,b:.2,a:1},loadOp:"clear",storeOp:"store"}]},p=o.beginRenderPass(c);p.setPipeline(h),p.draw(3,1,0,0),p.end(),l.queue.submit([o.finish()]),requestAnimationFrame(e)})},d=()=>(0,i.T)({name:"Resize Canvas",description:"Shows multisampled rendering a basic triangle on a dynamically sized canvas.",init:l,sources:[{name:a.substring(24),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport triangleVertWGSL from '../../shaders/triangle.vert.wgsl';\nimport redFragWGSL from '../../shaders/red.frag.wgsl';\n\nimport styles from './animatedCanvasSize.module.css';\n\nconst init: SampleInit = async ({ canvas, pageState }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  const sampleCount = 4;\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: triangleVertWGSL,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: redFragWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n    },\n    multisample: {\n      count: 4,\n    },\n  });\n\n  let renderTarget: GPUTexture | undefined = undefined;\n  let renderTargetView: GPUTextureView;\n\n  canvas.classList.add(styles.animatedCanvasSize);\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    const currentWidth = canvas.clientWidth * devicePixelRatio;\n    const currentHeight = canvas.clientHeight * devicePixelRatio;\n\n    // The canvas size is animating via CSS.\n    // When the size changes, we need to reallocate the render target.\n    // We also need to set the physical size of the canvas to match the computed CSS size.\n    if (\n      (currentWidth !== canvas.width || currentHeight !== canvas.height) &&\n      currentWidth &&\n      currentHeight\n    ) {\n      if (renderTarget !== undefined) {\n        // Destroy the previous render target\n        renderTarget.destroy();\n      }\n\n      // Setting the canvas width and height will automatically resize the textures returned\n      // when calling getCurrentTexture() on the context.\n      canvas.width = currentWidth;\n      canvas.height = currentHeight;\n\n      // Resize the multisampled render target to match the new canvas size.\n      renderTarget = device.createTexture({\n        size: [canvas.width, canvas.height],\n        sampleCount,\n        format: presentationFormat,\n        usage: GPUTextureUsage.RENDER_ATTACHMENT,\n      });\n\n      renderTargetView = renderTarget.createView();\n    }\n\n    const commandEncoder = device.createCommandEncoder();\n\n    const renderPassDescriptor: GPURenderPassDescriptor = {\n      colorAttachments: [\n        {\n          view: renderTargetView,\n          resolveTarget: context.getCurrentTexture().createView(),\n          clearValue: { r: 0.2, g: 0.2, b: 0.2, a: 1.0 },\n          loadOp: 'clear',\n          storeOp: 'store',\n        },\n      ],\n    };\n\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.draw(3, 1, 0, 0);\n    passEncoder.end();\n\n    device.queue.submit([commandEncoder.finish()]);\n    requestAnimationFrame(frame);\n  }\n\n  requestAnimationFrame(frame);\n};\n\nconst ResizeCanvas: () => JSX.Element = () =>\n  makeSample({\n    name: 'Resize Canvas',\n    description:\n      'Shows multisampled rendering a basic triangle on a dynamically sized canvas.',\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/triangle.vert.wgsl',\n        contents: triangleVertWGSL,\n        editable: true,\n      },\n      {\n        name: '../../shaders/red.frag.wgsl',\n        contents: redFragWGSL,\n        editable: true,\n      },\n      {\n        name: './animatedCanvasSize.module.css',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!./animatedCanvasSize.module.css')\n          .default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default ResizeCanvas;\n"},{name:"../../shaders/triangle.vert.wgsl",contents:r.Z,editable:!0},{name:"../../shaders/red.frag.wgsl",contents:s.Z,editable:!0},{name:"./animatedCanvasSize.module.css",contents:t(7751).Z}],filename:a});n.default=d},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},4057:function(e){e.exports={animatedCanvasSize:"animatedCanvasSize_animatedCanvasSize__SMQPJ","animated-size":"animatedCanvasSize_animated-size__fXLtb"}},7751:function(e,n){"use strict";n.Z="@keyframes animated-size {\n  0% {\n    width: 10px;\n    height: 600px;\n  }\n  50% {\n    width: 100%;\n    height: 600px;\n  }\n  100% {\n    width: 10px;\n    height: 600px;\n  }\n}\n\n.animatedCanvasSize {\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-name: animated-size;\n  animation-timing-function: ease;\n}"},2690:function(e,n){"use strict";n.Z="@fragment\nfn main() -> @location(0) vec4<f32> {\n  return vec4(1.0, 0.0, 0.0, 1.0);\n}\n"},1974:function(e,n){"use strict";n.Z="@vertex\nfn main(\n  @builtin(vertex_index) VertexIndex : u32\n) -> @builtin(position) vec4<f32> {\n  var pos = array<vec2<f32>, 3>(\n    vec2(0.0, 0.5),\n    vec2(-0.5, -0.5),\n    vec2(0.5, -0.5)\n  );\n\n  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n}\n"}}]);