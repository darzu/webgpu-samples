(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[704],{5671:function(e,n,t){"use strict";t.d(n,{Tl:function(){return d},hu:function(){return c}});var r=t(5893),i=t(9008),a=t.n(i),o=t(1163),s=t(7294),u=t(9147),f=t.n(u);t(7319);let l=e=>{let n=(0,s.useRef)(null),i=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:n,contents:i}=e;return{name:n,...function(e){let n;let i=null;{i=document.createElement("div");let a=t(4631);n=a(i,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(t){return(0,r.jsx)("div",{...t,children:(0,r.jsx)("div",{ref(t){i&&t&&(t.appendChild(i),n.setOption("value",e))}})})}}}(i)}}),e.sources),u=(0,s.useRef)(null),l=(0,s.useMemo)(()=>{if(e.gui){let n=t(4376);return new n.GUI({autoPlace:!1})}},[]),d=(0,s.useRef)(null),c=(0,s.useMemo)(()=>{if(e.stats){let n=t(2792);return new n}},[]),g=(0,o.useRouter)(),m=g.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[p,h]=(0,s.useState)(null),[v,x]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(m?x(m[1]):x(i[0].name),l&&u.current)for(u.current.appendChild(l.domElement);l.__controllers.length>0;)l.__controllers[0].remove();c&&d.current&&(c.dom.style.position="absolute",c.showPanel(1),d.current.appendChild(c.dom));let t={active:!0},r=()=>{t.active=!1};try{let a=n.current;if(!a)throw Error("The canvas is not available");let o=e.init({canvas:a,pageState:t,gui:l,stats:c});o instanceof Promise&&o.catch(e=>{console.error(e),h(e)})}catch(s){console.error(s),h(s)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description}),(0,r.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),p?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,r.jsx)("p",{children:"".concat(p)})]}):null]}),(0,r.jsxs)("div",{className:f().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",left:10},ref:d}),(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:u}),(0,r.jsx)("canvas",{ref:n})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:f().sourceFileNav,children:(0,r.jsx)("ul",{children:i.map((e,n)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":v==e.name,onClick(){x(e.name)},children:e.name})},n))})}),i.map((e,n)=>(0,r.jsx)(e.Container,{className:f().sourceFileContainer,"data-active":v==e.name},n))]})]})},d=e=>(0,r.jsx)(l,{...e});function c(e,n){if(!e)throw Error(n)}},6888:function(e,n,t){"use strict";t.d(n,{W:function(){return a}});var r=t(6906),i=t(9385);let a={positions:r.m,triangles:r.g,normals:[],uvs:[]};a.normals=(0,i.b)(a.positions,a.triangles),a.uvs=(0,i.q)(a.positions,"xy"),a.triangles.push([a.positions.length,a.positions.length+2,a.positions.length+1],[a.positions.length,a.positions.length+1,a.positions.length+3]),a.positions.push([-100,20,-100],[100,20,100],[-100,20,100],[100,20,-100]),a.normals.push([0,1,0],[0,1,0],[0,1,0],[0,1,0]),a.uvs.push([0,0],[1,1],[0,1],[1,0])},9385:function(e,n,t){"use strict";t.d(n,{b:function(){return i},q:function(){return o}});var r=t(6416);function i(e,n){let t=e.map(()=>[0,0,0]);return n.forEach(n=>{let[i,a,o]=n,s=e[i],u=e[a],f=e[o],l=r.R3.subtract(u,s),d=r.R3.subtract(f,s);r.R3.normalize(l,l),r.R3.normalize(d,d);let c=r.R3.cross(l,d);r.R3.add(t[i],c,t[i]),r.R3.add(t[a],c,t[a]),r.R3.add(t[o],c,t[o])}),t.forEach(e=>{r.R3.normalize(e,e)}),t}let a={xy:[0,1],xz:[0,2],yz:[1,2]};function o(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xy",t=a[n],r=e.map(()=>[0,0]),i=[1/0,1/0],o=[-1/0,-1/0];return e.forEach((e,n)=>{r[n][0]=e[t[0]],r[n][1]=e[t[1]],i[0]=Math.min(e[t[0]],i[0]),i[1]=Math.min(e[t[1]],i[1]),o[0]=Math.max(e[t[0]],o[0]),o[1]=Math.max(e[t[1]],o[1])}),r.forEach(e=>{e[0]=(e[0]-i[0])/(o[0]-i[0]),e[1]=(e[1]-i[1])/(o[1]-i[1])}),r}},9704:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(5671),i=t(6416),a=t(6888),o="struct LightData {\n  position : vec4<f32>,\n  color : vec3<f32>,\n  radius : f32,\n}\nstruct LightsBuffer {\n  lights: array<LightData>,\n}\n@group(0) @binding(0) var<storage, read_write> lightsBuffer: LightsBuffer;\n\nstruct Config {\n  numLights : u32,\n}\n@group(0) @binding(1) var<uniform> config: Config;\n\nstruct LightExtent {\n  min : vec4<f32>,\n  max : vec4<f32>,\n}\n@group(0) @binding(2) var<uniform> lightExtent: LightExtent;\n\n@compute @workgroup_size(64, 1, 1)\nfn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {\n  var index = GlobalInvocationID.x;\n  if (index >= config.numLights) {\n    return;\n  }\n\n  lightsBuffer.lights[index].position.y = lightsBuffer.lights[index].position.y - 0.5 - 0.003 * (f32(index) - 64.0 * floor(f32(index) / 64.0));\n\n  if (lightsBuffer.lights[index].position.y < lightExtent.min.y) {\n    lightsBuffer.lights[index].position.y = lightExtent.max.y;\n  }\n}\n",s="struct Uniforms {\n  modelMatrix : mat4x4<f32>,\n  normalModelMatrix : mat4x4<f32>,\n}\nstruct Camera {\n  viewProjectionMatrix : mat4x4<f32>,\n  invViewProjectionMatrix : mat4x4<f32>,\n}\n@group(0) @binding(0) var<uniform> uniforms : Uniforms;\n@group(0) @binding(1) var<uniform> camera : Camera;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4<f32>,\n  @location(0) fragNormal: vec3<f32>,    // normal in world space\n  @location(1) fragUV: vec2<f32>,\n}\n\n@vertex\nfn main(\n  @location(0) position : vec3<f32>,\n  @location(1) normal : vec3<f32>,\n  @location(2) uv : vec2<f32>\n) -> VertexOutput {\n  var output : VertexOutput;\n  let worldPosition = (uniforms.modelMatrix * vec4(position, 1.0)).xyz;\n  output.Position = camera.viewProjectionMatrix * vec4(worldPosition, 1.0);\n  output.fragNormal = normalize((uniforms.normalModelMatrix * vec4(normal, 1.0)).xyz);\n  output.fragUV = uv;\n  return output;\n}\n",u="struct GBufferOutput {\n  @location(0) normal : vec4<f32>,\n\n  // Textures: diffuse color, specular color, smoothness, emissive etc. could go here\n  @location(1) albedo : vec4<f32>,\n}\n\n@fragment\nfn main(\n  @location(0) fragNormal: vec3<f32>,\n  @location(1) fragUV : vec2<f32>\n) -> GBufferOutput {\n  // faking some kind of checkerboard texture\n  let uv = floor(30.0 * fragUV);\n  let c = 0.2 + 0.5 * ((uv.x + uv.y) - 2.0 * floor((uv.x + uv.y) / 2.0));\n\n  var output : GBufferOutput;\n  output.normal = vec4(fragNormal, 1.0);\n  output.albedo = vec4(c, c, c, 1.0);\n\n  return output;\n}\n",f="@vertex\nfn main(\n  @builtin(vertex_index) VertexIndex : u32\n) -> @builtin(position) vec4<f32> {\n  const pos = array(\n    vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),\n    vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),\n  );\n\n  return vec4<f32>(pos[VertexIndex], 0.0, 1.0);\n}\n",l="\n@group(0) @binding(0) var gBufferNormal: texture_2d<f32>;\n@group(0) @binding(1) var gBufferAlbedo: texture_2d<f32>;\n@group(0) @binding(2) var gBufferDepth: texture_depth_2d;\n\noverride canvasSizeWidth: f32;\noverride canvasSizeHeight: f32;\n\n@fragment\nfn main(\n  @builtin(position) coord : vec4<f32>\n) -> @location(0) vec4<f32> {\n  var result : vec4<f32>;\n  let c = coord.xy / vec2<f32>(canvasSizeWidth, canvasSizeHeight);\n  if (c.x < 0.33333) {\n    let rawDepth = textureLoad(\n      gBufferDepth,\n      vec2<i32>(floor(coord.xy)),\n      0\n    );\n    // remap depth into something a bit more visible\n    let depth = (1.0 - rawDepth) * 50.0;\n    result = vec4(depth);\n  } else if (c.x < 0.66667) {\n    result = textureLoad(\n      gBufferNormal,\n      vec2<i32>(floor(coord.xy)),\n      0\n    );\n    result.x = (result.x + 1.0) * 0.5;\n    result.y = (result.y + 1.0) * 0.5;\n    result.z = (result.z + 1.0) * 0.5;\n  } else {\n    result = textureLoad(\n      gBufferAlbedo,\n      vec2<i32>(floor(coord.xy)),\n      0\n    );\n  }\n  return result;\n}\n",d="\n@group(0) @binding(0) var gBufferNormal: texture_2d<f32>;\n@group(0) @binding(1) var gBufferAlbedo: texture_2d<f32>;\n@group(0) @binding(2) var gBufferDepth: texture_depth_2d;\n\nstruct LightData {\n  position : vec4<f32>,\n  color : vec3<f32>,\n  radius : f32,\n}\nstruct LightsBuffer {\n  lights: array<LightData>,\n}\n@group(1) @binding(0) var<storage, read> lightsBuffer: LightsBuffer;\n\nstruct Config {\n  numLights : u32,\n}\nstruct Camera {\n  viewProjectionMatrix : mat4x4<f32>,\n  invViewProjectionMatrix : mat4x4<f32>,\n}\n@group(1) @binding(1) var<uniform> config: Config;\n@group(1) @binding(2) var<uniform> camera: Camera;\n\nfn world_from_screen_coord(coord : vec2<f32>, depth_sample: f32) -> vec3<f32> {\n  // reconstruct world-space position from the screen coordinate.\n  let posClip = vec4(coord.x * 2.0 - 1.0, (1.0 - coord.y) * 2.0 - 1.0, depth_sample, 1.0);\n  let posWorldW = camera.invViewProjectionMatrix * posClip;\n  let posWorld = posWorldW.xyz / posWorldW.www;\n  return posWorld;\n}\n\n@fragment\nfn main(\n  @builtin(position) coord : vec4<f32>\n) -> @location(0) vec4<f32> {\n  var result : vec3<f32>;\n\n  let depth = textureLoad(\n    gBufferDepth,\n    vec2<i32>(floor(coord.xy)),\n    0\n  );\n\n  // Don't light the sky.\n  if (depth >= 1.0) {\n    discard;\n  }\n\n  let bufferSize = textureDimensions(gBufferDepth);\n  let coordUV = coord.xy / vec2<f32>(bufferSize);\n  let position = world_from_screen_coord(coordUV, depth);\n\n  let normal = textureLoad(\n    gBufferNormal,\n    vec2<i32>(floor(coord.xy)),\n    0\n  ).xyz;\n\n  let albedo = textureLoad(\n    gBufferAlbedo,\n    vec2<i32>(floor(coord.xy)),\n    0\n  ).rgb;\n\n  for (var i = 0u; i < config.numLights; i++) {\n    let L = lightsBuffer.lights[i].position.xyz - position;\n    let distance = length(L);\n    if (distance > lightsBuffer.lights[i].radius) {\n      continue;\n    }\n    let lambert = max(dot(normal, normalize(L)), 0.0);\n    result += vec3<f32>(\n      lambert * pow(1.0 - distance / lightsBuffer.lights[i].radius, 2.0) * lightsBuffer.lights[i].color * albedo\n    );\n  }\n\n  // some manual ambient\n  result += vec3(0.2);\n\n  return vec4(result, 1.0);\n}\n",c="src/sample/deferredRendering/main.ts";let g=i.R3.fromValues(-50,-30,-50),m=i.R3.fromValues(50,50,50),p=async e=>{let{canvas:n,pageState:t,gui:r}=e,c=await navigator.gpu.requestAdapter(),p=await c.requestDevice();if(!t.active)return;let h=n.getContext("webgpu"),v=window.devicePixelRatio||1;n.width=n.clientWidth*v,n.height=n.clientHeight*v;let x=n.width/n.height,b=navigator.gpu.getPreferredCanvasFormat();h.configure({device:p,format:b,alphaMode:"premultiplied"});let B=p.createBuffer({size:8*a.W.positions.length*Float32Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});{let P=new Float32Array(B.getMappedRange());for(let y=0;y<a.W.positions.length;++y)P.set(a.W.positions[y],8*y),P.set(a.W.normals[y],8*y+3),P.set(a.W.uvs[y],8*y+6);B.unmap()}let w=3*a.W.triangles.length,E=p.createBuffer({size:w*Uint16Array.BYTES_PER_ELEMENT,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0});{let G=new Uint16Array(E.getMappedRange());for(let T=0;T<a.W.triangles.length;++T)G.set(a.W.triangles[T],3*T);E.unmap()}let U=p.createTexture({size:[n.width,n.height],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"rgba16float"}),M=p.createTexture({size:[n.width,n.height],usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,format:"bgra8unorm"}),R=p.createTexture({size:[n.width,n.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}),S=[U.createView(),M.createView(),R.createView()],_=[{arrayStride:8*Float32Array.BYTES_PER_ELEMENT,attributes:[{shaderLocation:0,offset:0,format:"float32x3"},{shaderLocation:1,offset:3*Float32Array.BYTES_PER_ELEMENT,format:"float32x3"},{shaderLocation:2,offset:6*Float32Array.BYTES_PER_ELEMENT,format:"float32x2"}]}],L={topology:"triangle-list",cullMode:"back"},V=p.createRenderPipeline({layout:"auto",vertex:{module:p.createShaderModule({code:s}),entryPoint:"main",buffers:_},fragment:{module:p.createShaderModule({code:u}),entryPoint:"main",targets:[{format:"rgba16float"},{format:"bgra8unorm"}]},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"},primitive:L}),A=p.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"depth"}}]}),D=p.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]}),C=p.createRenderPipeline({layout:p.createPipelineLayout({bindGroupLayouts:[A]}),vertex:{module:p.createShaderModule({code:f}),entryPoint:"main"},fragment:{module:p.createShaderModule({code:l}),entryPoint:"main",targets:[{format:b}],constants:{canvasSizeWidth:n.width,canvasSizeHeight:n.height}},primitive:L}),N=p.createRenderPipeline({layout:p.createPipelineLayout({bindGroupLayouts:[A,D]}),vertex:{module:p.createShaderModule({code:f}),entryPoint:"main"},fragment:{module:p.createShaderModule({code:d}),entryPoint:"main",targets:[{format:b}]},primitive:L}),F={colorAttachments:[{view:S[0],clearValue:{r:0,g:0,b:1,a:1},loadOp:"clear",storeOp:"store"},{view:S[1],clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:R.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},O={colorAttachments:[{view:void 0,clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}]},j={mode:"rendering",numLights:128},z=(()=>{let e=p.createBuffer({size:Uint32Array.BYTES_PER_ELEMENT,mappedAtCreation:!0,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});return new Uint32Array(e.getMappedRange())[0]=j.numLights,e.unmap(),e})();r.add(j,"mode",["rendering","gBuffers view"]),r.add(j,"numLights",1,1024).step(1).onChange(()=>{p.queue.writeBuffer(z,0,new Uint32Array([j.numLights]))});let I=p.createBuffer({size:128,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),W=p.createBuffer({size:128,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),k=p.createBindGroup({layout:V.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:I}},{binding:1,resource:{buffer:W}}]}),q=p.createBindGroup({layout:A,entries:[{binding:0,resource:S[0]},{binding:1,resource:S[1]},{binding:2,resource:S[2]}]}),Y=i.R3.sub(m,g),H=8192*Float32Array.BYTES_PER_ELEMENT,Q=p.createBuffer({size:H,usage:GPUBufferUsage.STORAGE,mappedAtCreation:!0}),X=new Float32Array(Q.getMappedRange()),J=i.vh.create(),Z=0;for(let K=0;K<1024;K++){Z=8*K;for(let $=0;$<3;$++)J[$]=Math.random()*Y[$]+g[$];J[3]=1,X.set(J,Z),J[0]=2*Math.random(),J[1]=2*Math.random(),J[2]=2*Math.random(),J[3]=20,X.set(J,Z+4)}Q.unmap();let ee=p.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),en=new Float32Array(8);en.set(g,0),en.set(m,4),p.queue.writeBuffer(ee,0,en.buffer,en.byteOffset,en.byteLength);let et=p.createComputePipeline({layout:"auto",compute:{module:p.createShaderModule({code:o}),entryPoint:"main"}}),er=p.createBindGroup({layout:D,entries:[{binding:0,resource:{buffer:Q}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:W}}]}),ei=p.createBindGroup({layout:et.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:Q}},{binding:1,resource:{buffer:z}},{binding:2,resource:{buffer:ee}}]}),ea=i.R3.fromValues(0,50,-100),eo=i.R3.fromValues(0,1,0),es=i.R3.fromValues(0,0,0),eu=i._E.perspective(2*Math.PI/5,x,1,2e3),ef=i._E.inverse(i._E.lookAt(ea,es,eo)),el=i._E.multiply(eu,ef),ed=i._E.translation([0,-45,0]);p.queue.writeBuffer(I,0,ed.buffer,ed.byteOffset,ed.byteLength);let ec=i._E.invert(ed);i._E.transpose(ec,ec),p.queue.writeBuffer(I,64,ec.buffer,ec.byteOffset,ec.byteLength),requestAnimationFrame(function e(){if(!t.active)return;let n=function(){let e=i.R3.fromValues(0,50,-100),n=Math.PI*(Date.now()/5e3),t=i._E.rotateY(i._E.translation(es),n);i.R3.transformMat4(e,t,e);let r=i.R3.transformMat4(e,t),a=i._E.lookAt(r,es,eo);return i._E.multiply(eu,a,el),el}();p.queue.writeBuffer(W,0,n.buffer,n.byteOffset,n.byteLength);let r=i._E.invert(n);p.queue.writeBuffer(W,64,r.buffer,r.byteOffset,r.byteLength);let a=p.createCommandEncoder();{let o=a.beginRenderPass(F);o.setPipeline(V),o.setBindGroup(0,k),o.setVertexBuffer(0,B),o.setIndexBuffer(E,"uint16"),o.drawIndexed(w),o.end()}{let s=a.beginComputePass();s.setPipeline(et),s.setBindGroup(0,ei),s.dispatchWorkgroups(Math.ceil(16)),s.end()}if("gBuffers view"===j.mode){O.colorAttachments[0].view=h.getCurrentTexture().createView();let u=a.beginRenderPass(O);u.setPipeline(C),u.setBindGroup(0,q),u.draw(6),u.end()}else{O.colorAttachments[0].view=h.getCurrentTexture().createView();let f=a.beginRenderPass(O);f.setPipeline(N),f.setBindGroup(0,q),f.setBindGroup(1,er),f.draw(6),f.end()}p.queue.submit([a.finish()]),requestAnimationFrame(e)})},h=()=>(0,r.Tl)({name:"Deferred Rendering",description:"This example shows how to do deferred rendering with webgpu.\n      Render geometry info to multiple targets in the gBuffers in the first pass.\n      In this sample we have 2 gBuffers for normals and albedo, along with a depth texture.\n      And then do the lighting in a second pass with per fragment data read from gBuffers so it's independent of scene complexity.\n      World-space positions are reconstructed from the depth texture and camera matrix.\n      We also update light position in a compute shader, where further operations like tile/cluster culling could happen.\n      The debug view shows the depth buffer on the left (flipped and scaled a bit to make it more visible), the normal G buffer\n      in the middle, and the albedo G-buffer on the right side of the screen.\n      ",gui:!0,init:p,sources:[{name:c.substring(29),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\nimport { mat4, vec3, vec4 } from 'wgpu-matrix';\nimport { mesh } from '../../meshes/stanfordDragon';\n\nimport lightUpdate from './lightUpdate.wgsl';\nimport vertexWriteGBuffers from './vertexWriteGBuffers.wgsl';\nimport fragmentWriteGBuffers from './fragmentWriteGBuffers.wgsl';\nimport vertexTextureQuad from './vertexTextureQuad.wgsl';\nimport fragmentGBuffersDebugView from './fragmentGBuffersDebugView.wgsl';\nimport fragmentDeferredRendering from './fragmentDeferredRendering.wgsl';\n\nconst kMaxNumLights = 1024;\nconst lightExtentMin = vec3.fromValues(-50, -30, -50);\nconst lightExtentMax = vec3.fromValues(50, 50, 50);\n\nconst init: SampleInit = async ({ canvas, pageState, gui }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (!pageState.active) return;\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const aspect = canvas.width / canvas.height;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  // Create the model vertex buffer.\n  const kVertexStride = 8;\n  const vertexBuffer = device.createBuffer({\n    // position: vec3, normal: vec3, uv: vec2\n    size:\n      mesh.positions.length * kVertexStride * Float32Array.BYTES_PER_ELEMENT,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  {\n    const mapping = new Float32Array(vertexBuffer.getMappedRange());\n    for (let i = 0; i < mesh.positions.length; ++i) {\n      mapping.set(mesh.positions[i], kVertexStride * i);\n      mapping.set(mesh.normals[i], kVertexStride * i + 3);\n      mapping.set(mesh.uvs[i], kVertexStride * i + 6);\n    }\n    vertexBuffer.unmap();\n  }\n\n  // Create the model index buffer.\n  const indexCount = mesh.triangles.length * 3;\n  const indexBuffer = device.createBuffer({\n    size: indexCount * Uint16Array.BYTES_PER_ELEMENT,\n    usage: GPUBufferUsage.INDEX,\n    mappedAtCreation: true,\n  });\n  {\n    const mapping = new Uint16Array(indexBuffer.getMappedRange());\n    for (let i = 0; i < mesh.triangles.length; ++i) {\n      mapping.set(mesh.triangles[i], 3 * i);\n    }\n    indexBuffer.unmap();\n  }\n\n  // GBuffer texture render targets\n  const gBufferTexture2DFloat16 = device.createTexture({\n    size: [canvas.width, canvas.height],\n    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,\n    format: 'rgba16float',\n  });\n  const gBufferTextureAlbedo = device.createTexture({\n    size: [canvas.width, canvas.height],\n    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,\n    format: 'bgra8unorm',\n  });\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,\n  });\n\n  const gBufferTextureViews = [\n    gBufferTexture2DFloat16.createView(),\n    gBufferTextureAlbedo.createView(),\n    depthTexture.createView(),\n  ];\n\n  const vertexBuffers: Iterable<GPUVertexBufferLayout> = [\n    {\n      arrayStride: Float32Array.BYTES_PER_ELEMENT * 8,\n      attributes: [\n        {\n          // position\n          shaderLocation: 0,\n          offset: 0,\n          format: 'float32x3',\n        },\n        {\n          // normal\n          shaderLocation: 1,\n          offset: Float32Array.BYTES_PER_ELEMENT * 3,\n          format: 'float32x3',\n        },\n        {\n          // uv\n          shaderLocation: 2,\n          offset: Float32Array.BYTES_PER_ELEMENT * 6,\n          format: 'float32x2',\n        },\n      ],\n    },\n  ];\n\n  const primitive: GPUPrimitiveState = {\n    topology: 'triangle-list',\n    cullMode: 'back',\n  };\n\n  const writeGBuffersPipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexWriteGBuffers,\n      }),\n      entryPoint: 'main',\n      buffers: vertexBuffers,\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentWriteGBuffers,\n      }),\n      entryPoint: 'main',\n      targets: [\n        // normal\n        { format: 'rgba16float' },\n        // albedo\n        { format: 'bgra8unorm' },\n      ],\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n    primitive,\n  });\n\n  const gBufferTexturesBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {\n          sampleType: 'unfilterable-float',\n        },\n      },\n      {\n        binding: 1,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {\n          sampleType: 'unfilterable-float',\n        },\n      },\n      {\n        binding: 2,\n        visibility: GPUShaderStage.FRAGMENT,\n        texture: {\n          sampleType: 'depth',\n        },\n      },\n    ],\n  });\n\n  const lightsBufferBindGroupLayout = device.createBindGroupLayout({\n    entries: [\n      {\n        binding: 0,\n        visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,\n        buffer: {\n          type: 'read-only-storage',\n        },\n      },\n      {\n        binding: 1,\n        visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,\n        buffer: {\n          type: 'uniform',\n        },\n      },\n      {\n        binding: 2,\n        visibility: GPUShaderStage.FRAGMENT,\n        buffer: {\n          type: 'uniform',\n        },\n      },\n    ],\n  });\n\n  const gBuffersDebugViewPipeline = device.createRenderPipeline({\n    layout: device.createPipelineLayout({\n      bindGroupLayouts: [gBufferTexturesBindGroupLayout],\n    }),\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexTextureQuad,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentGBuffersDebugView,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n      constants: {\n        canvasSizeWidth: canvas.width,\n        canvasSizeHeight: canvas.height,\n      },\n    },\n    primitive,\n  });\n\n  const deferredRenderPipeline = device.createRenderPipeline({\n    layout: device.createPipelineLayout({\n      bindGroupLayouts: [\n        gBufferTexturesBindGroupLayout,\n        lightsBufferBindGroupLayout,\n      ],\n    }),\n    vertex: {\n      module: device.createShaderModule({\n        code: vertexTextureQuad,\n      }),\n      entryPoint: 'main',\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: fragmentDeferredRendering,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive,\n  });\n\n  const writeGBufferPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: gBufferTextureViews[0],\n\n        clearValue: { r: 0.0, g: 0.0, b: 1.0, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n      {\n        view: gBufferTextureViews[1],\n\n        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  const textureQuadPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        // view is acquired and set in render loop.\n        view: undefined,\n\n        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n  };\n\n  const settings = {\n    mode: 'rendering',\n    numLights: 128,\n  };\n  const configUniformBuffer = (() => {\n    const buffer = device.createBuffer({\n      size: Uint32Array.BYTES_PER_ELEMENT,\n      mappedAtCreation: true,\n      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n    });\n    new Uint32Array(buffer.getMappedRange())[0] = settings.numLights;\n    buffer.unmap();\n    return buffer;\n  })();\n\n  gui.add(settings, 'mode', ['rendering', 'gBuffers view']);\n  gui\n    .add(settings, 'numLights', 1, kMaxNumLights)\n    .step(1)\n    .onChange(() => {\n      device.queue.writeBuffer(\n        configUniformBuffer,\n        0,\n        new Uint32Array([settings.numLights])\n      );\n    });\n\n  const modelUniformBuffer = device.createBuffer({\n    size: 4 * 16 * 2, // two 4x4 matrix\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const cameraUniformBuffer = device.createBuffer({\n    size: 4 * 16 * 2, // two 4x4 matrix\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const sceneUniformBindGroup = device.createBindGroup({\n    layout: writeGBuffersPipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: modelUniformBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: {\n          buffer: cameraUniformBuffer,\n        },\n      },\n    ],\n  });\n\n  const gBufferTexturesBindGroup = device.createBindGroup({\n    layout: gBufferTexturesBindGroupLayout,\n    entries: [\n      {\n        binding: 0,\n        resource: gBufferTextureViews[0],\n      },\n      {\n        binding: 1,\n        resource: gBufferTextureViews[1],\n      },\n      {\n        binding: 2,\n        resource: gBufferTextureViews[2],\n      },\n    ],\n  });\n\n  // Lights data are uploaded in a storage buffer\n  // which could be updated/culled/etc. with a compute shader\n  const extent = vec3.sub(lightExtentMax, lightExtentMin);\n  const lightDataStride = 8;\n  const bufferSizeInByte =\n    Float32Array.BYTES_PER_ELEMENT * lightDataStride * kMaxNumLights;\n  const lightsBuffer = device.createBuffer({\n    size: bufferSizeInByte,\n    usage: GPUBufferUsage.STORAGE,\n    mappedAtCreation: true,\n  });\n\n  // We randomaly populate lights randomly in a box range\n  // And simply move them along y-axis per frame to show they are\n  // dynamic lightings\n  const lightData = new Float32Array(lightsBuffer.getMappedRange());\n  const tmpVec4 = vec4.create();\n  let offset = 0;\n  for (let i = 0; i < kMaxNumLights; i++) {\n    offset = lightDataStride * i;\n    // position\n    for (let i = 0; i < 3; i++) {\n      tmpVec4[i] = Math.random() * extent[i] + lightExtentMin[i];\n    }\n    tmpVec4[3] = 1;\n    lightData.set(tmpVec4, offset);\n    // color\n    tmpVec4[0] = Math.random() * 2;\n    tmpVec4[1] = Math.random() * 2;\n    tmpVec4[2] = Math.random() * 2;\n    // radius\n    tmpVec4[3] = 20.0;\n    lightData.set(tmpVec4, offset + 4);\n  }\n  lightsBuffer.unmap();\n\n  const lightExtentBuffer = device.createBuffer({\n    size: 4 * 8,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n  const lightExtentData = new Float32Array(8);\n  lightExtentData.set(lightExtentMin, 0);\n  lightExtentData.set(lightExtentMax, 4);\n  device.queue.writeBuffer(\n    lightExtentBuffer,\n    0,\n    lightExtentData.buffer,\n    lightExtentData.byteOffset,\n    lightExtentData.byteLength\n  );\n\n  const lightUpdateComputePipeline = device.createComputePipeline({\n    layout: 'auto',\n    compute: {\n      module: device.createShaderModule({\n        code: lightUpdate,\n      }),\n      entryPoint: 'main',\n    },\n  });\n  const lightsBufferBindGroup = device.createBindGroup({\n    layout: lightsBufferBindGroupLayout,\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: lightsBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: {\n          buffer: configUniformBuffer,\n        },\n      },\n      {\n        binding: 2,\n        resource: {\n          buffer: cameraUniformBuffer,\n        },\n      },\n    ],\n  });\n  const lightsBufferComputeBindGroup = device.createBindGroup({\n    layout: lightUpdateComputePipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: lightsBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: {\n          buffer: configUniformBuffer,\n        },\n      },\n      {\n        binding: 2,\n        resource: {\n          buffer: lightExtentBuffer,\n        },\n      },\n    ],\n  });\n  //--------------------\n\n  // Scene matrices\n  const eyePosition = vec3.fromValues(0, 50, -100);\n  const upVector = vec3.fromValues(0, 1, 0);\n  const origin = vec3.fromValues(0, 0, 0);\n\n  const projectionMatrix = mat4.perspective(\n    (2 * Math.PI) / 5,\n    aspect,\n    1,\n    2000.0\n  );\n\n  const viewMatrix = mat4.inverse(mat4.lookAt(eyePosition, origin, upVector));\n\n  const viewProjMatrix = mat4.multiply(projectionMatrix, viewMatrix);\n\n  // Move the model so it's centered.\n  const modelMatrix = mat4.translation([0, -45, 0]);\n\n  const modelData = modelMatrix as Float32Array;\n  device.queue.writeBuffer(\n    modelUniformBuffer,\n    0,\n    modelData.buffer,\n    modelData.byteOffset,\n    modelData.byteLength\n  );\n  const invertTransposeModelMatrix = mat4.invert(modelMatrix);\n  mat4.transpose(invertTransposeModelMatrix, invertTransposeModelMatrix);\n  const normalModelData = invertTransposeModelMatrix as Float32Array;\n  device.queue.writeBuffer(\n    modelUniformBuffer,\n    64,\n    normalModelData.buffer,\n    normalModelData.byteOffset,\n    normalModelData.byteLength\n  );\n\n  // Rotates the camera around the origin based on time.\n  function getCameraViewProjMatrix() {\n    const eyePosition = vec3.fromValues(0, 50, -100);\n\n    const rad = Math.PI * (Date.now() / 5000);\n    const rotation = mat4.rotateY(mat4.translation(origin), rad);\n    vec3.transformMat4(eyePosition, rotation, eyePosition);\n    const rotatedEyePosition = vec3.transformMat4(eyePosition, rotation);\n\n    const viewMatrix = mat4.lookAt(rotatedEyePosition, origin, upVector);\n\n    mat4.multiply(projectionMatrix, viewMatrix, viewProjMatrix);\n    return viewProjMatrix as Float32Array;\n  }\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!pageState.active) return;\n\n    const cameraViewProj = getCameraViewProjMatrix();\n    device.queue.writeBuffer(\n      cameraUniformBuffer,\n      0,\n      cameraViewProj.buffer,\n      cameraViewProj.byteOffset,\n      cameraViewProj.byteLength\n    );\n    const cameraInvViewProj = mat4.invert(cameraViewProj) as Float32Array;\n    device.queue.writeBuffer(\n      cameraUniformBuffer,\n      64,\n      cameraInvViewProj.buffer,\n      cameraInvViewProj.byteOffset,\n      cameraInvViewProj.byteLength\n    );\n\n    const commandEncoder = device.createCommandEncoder();\n    {\n      // Write position, normal, albedo etc. data to gBuffers\n      const gBufferPass = commandEncoder.beginRenderPass(\n        writeGBufferPassDescriptor\n      );\n      gBufferPass.setPipeline(writeGBuffersPipeline);\n      gBufferPass.setBindGroup(0, sceneUniformBindGroup);\n      gBufferPass.setVertexBuffer(0, vertexBuffer);\n      gBufferPass.setIndexBuffer(indexBuffer, 'uint16');\n      gBufferPass.drawIndexed(indexCount);\n      gBufferPass.end();\n    }\n    {\n      // Update lights position\n      const lightPass = commandEncoder.beginComputePass();\n      lightPass.setPipeline(lightUpdateComputePipeline);\n      lightPass.setBindGroup(0, lightsBufferComputeBindGroup);\n      lightPass.dispatchWorkgroups(Math.ceil(kMaxNumLights / 64));\n      lightPass.end();\n    }\n    {\n      if (settings.mode === 'gBuffers view') {\n        // GBuffers debug view\n        // Left: depth\n        // Middle: normal\n        // Right: albedo (use uv to mimic a checkerboard texture)\n        textureQuadPassDescriptor.colorAttachments[0].view = context\n          .getCurrentTexture()\n          .createView();\n        const debugViewPass = commandEncoder.beginRenderPass(\n          textureQuadPassDescriptor\n        );\n        debugViewPass.setPipeline(gBuffersDebugViewPipeline);\n        debugViewPass.setBindGroup(0, gBufferTexturesBindGroup);\n        debugViewPass.draw(6);\n        debugViewPass.end();\n      } else {\n        // Deferred rendering\n        textureQuadPassDescriptor.colorAttachments[0].view = context\n          .getCurrentTexture()\n          .createView();\n        const deferredRenderingPass = commandEncoder.beginRenderPass(\n          textureQuadPassDescriptor\n        );\n        deferredRenderingPass.setPipeline(deferredRenderPipeline);\n        deferredRenderingPass.setBindGroup(0, gBufferTexturesBindGroup);\n        deferredRenderingPass.setBindGroup(1, lightsBufferBindGroup);\n        deferredRenderingPass.draw(6);\n        deferredRenderingPass.end();\n      }\n    }\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst DeferredRendering: () => JSX.Element = () =>\n  makeSample({\n    name: 'Deferred Rendering',\n    description: `This example shows how to do deferred rendering with webgpu.\n      Render geometry info to multiple targets in the gBuffers in the first pass.\n      In this sample we have 2 gBuffers for normals and albedo, along with a depth texture.\n      And then do the lighting in a second pass with per fragment data read from gBuffers so it's independent of scene complexity.\n      World-space positions are reconstructed from the depth texture and camera matrix.\n      We also update light position in a compute shader, where further operations like tile/cluster culling could happen.\n      The debug view shows the depth buffer on the left (flipped and scaled a bit to make it more visible), the normal G buffer\n      in the middle, and the albedo G-buffer on the right side of the screen.\n      `,\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: 'vertexWriteGBuffers.wgsl',\n        contents: vertexWriteGBuffers,\n        editable: true,\n      },\n      {\n        name: 'fragmentWriteGBuffers.wgsl',\n        contents: fragmentWriteGBuffers,\n        editable: true,\n      },\n      {\n        name: 'vertexTextureQuad.wgsl',\n        contents: vertexTextureQuad,\n        editable: true,\n      },\n      {\n        name: 'fragmentGBuffersDebugView.wgsl',\n        contents: fragmentGBuffersDebugView,\n        editable: true,\n      },\n      {\n        name: 'fragmentDeferredRendering.wgsl',\n        contents: fragmentDeferredRendering,\n        editable: true,\n      },\n      {\n        name: 'lightUpdate.wgsl',\n        contents: lightUpdate,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default DeferredRendering;\n"},{name:"vertexWriteGBuffers.wgsl",contents:s,editable:!0},{name:"fragmentWriteGBuffers.wgsl",contents:u,editable:!0},{name:"vertexTextureQuad.wgsl",contents:f,editable:!0},{name:"fragmentGBuffersDebugView.wgsl",contents:l,editable:!0},{name:"fragmentDeferredRendering.wgsl",contents:d,editable:!0},{name:"lightUpdate.wgsl",contents:o,editable:!0}],filename:c});var v=h},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}}}]);