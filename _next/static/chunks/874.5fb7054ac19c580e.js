(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{5671:function(e,t,n){"use strict";n.d(t,{T:function(){return d}});var r=n(5893),i=n(9008),a=n.n(i),o=n(1163),s=n(7294),u=n(9147),c=n.n(u);n(7319);let l=e=>{let t=(0,s.useRef)(null),i=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:t,contents:i}=e;return{name:t,...function(e){let t;let i=null;{i=document.createElement("div");let a=n(4631);t=a(i,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(n){return(0,r.jsx)("div",{...n,children:(0,r.jsx)("div",{ref(n){i&&n&&(n.appendChild(i),t.setOption("value",e))}})})}}}(i)}}),e.sources),u=(0,s.useRef)(null),l=(0,s.useMemo)(()=>{if(e.gui){let t=n(4376);return new t.GUI({autoPlace:!1})}},[]),d=(0,o.useRouter)(),m=d.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[h,p]=(0,s.useState)(null),[f,g]=(0,s.useState)(null);return(0,s.useEffect)(()=>{m?g(m[1]):g(i[0].name),l&&u.current&&u.current.appendChild(l.domElement);let n={active:!0},r=()=>{n.active=!1};try{let a=t.current,o=e.init({canvas:a,pageState:n,gui:l});o instanceof Promise&&o.catch(e=>{console.error(e),p(e)})}catch(s){console.error(s),p(s)}return r},[]),(0,r.jsxs)("main",{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,r.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,r.jsx)("meta",{name:"description",content:e.description})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,r.jsx)("p",{children:e.description}),h?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Is WebGPU Enabled?"}),(0,r.jsx)("p",{children:"".concat(h)})]}):null]}),(0,r.jsxs)("div",{className:c().canvasContainer,children:[(0,r.jsx)("div",{style:{position:"absolute",right:10},ref:u}),(0,r.jsx)("canvas",{ref:t})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("nav",{className:c().sourceFileNav,children:(0,r.jsx)("ul",{children:i.map((e,t)=>(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"#".concat(e.name),"data-active":f==e.name,onClick(){g(e.name)},children:e.name})},t))})}),i.map((e,t)=>(0,r.jsx)(e.Container,{className:c().sourceFileContainer,"data-active":f==e.name},t))]})]})},d=e=>(0,r.jsx)(l,{...e})},6874:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r,i,a=n(5671),o="// A storage buffer holding an array of atomic<u32>.\n// The array elements are a sequence of red, green, blue components, for each\n// lightmap texel, for each quad surface.\n@group(1) @binding(0)\nvar<storage, read_write> accumulation : array<atomic<u32>>;\n\n// The output lightmap texture.\n@group(1) @binding(1)\nvar lightmap : texture_storage_2d_array<rgba16float, write>;\n\n// Uniform data used by the accumulation_to_lightmap entry point\nstruct Uniforms {\n  // Scalar for converting accumulation values to output lightmap values\n  accumulation_to_lightmap_scale : f32,\n  // Accumulation buffer rescaling value\n  accumulation_buffer_scale : f32,\n  // The width of the light\n  light_width : f32,\n  // The height of the light\n  light_height : f32,\n  // The center of the light\n  light_center : vec3f,\n}\n\n// accumulation_to_lightmap uniforms binding point\n@group(1) @binding(2) var<uniform> uniforms : Uniforms;\n\n// Number of photons emitted per workgroup\noverride PhotonsPerWorkgroup : u32;\n\n// Maximum value that can be added to the accumulation buffer from a single photon\noverride PhotonEnergy : f32;\n\n// Number of bounces of each photon\nconst PhotonBounces = 4;\n\n// Amount of light absorbed with each photon bounce (0: 0%, 1: 100%)\nconst LightAbsorbtion = 0.5;\n\n// Radiosity compute shader.\n// Each invocation creates a photon from the light source, and accumulates\n// bounce lighting into the 'accumulation' buffer.\n@compute @workgroup_size(PhotonsPerWorkgroup)\nfn radiosity(@builtin(global_invocation_id) invocation_id : vec3u) {\n  init_rand(invocation_id);\n  photon();\n}\n\n// Spawns a photon at the light source, performs ray tracing in the scene,\n// accumulating light values into 'accumulation' for each quad surface hit.\nfn photon() {\n  // Create a random ray from the light.\n  var ray = new_light_ray();\n  // Give the photon an initial energy value.\n  var color = PhotonEnergy * vec3f(1, 0.8, 0.6);\n\n  // Start bouncing.\n  for (var i = 0; i < (PhotonBounces+1); i++) {\n    // Find the closest hit of the ray with the scene's quads.\n    let hit = raytrace(ray);\n    let quad = quads[hit.quad];\n\n    // Bounce the ray.\n    ray.start = hit.pos + quad.plane.xyz * 1e-5;\n    ray.dir = normalize(reflect(ray.dir, quad.plane.xyz) + rand_unit_sphere() * 0.75);\n\n    // Photon color is multiplied by the quad's color.\n    color *= quad.color;\n\n    // Accumulate the aborbed light into the 'accumulation' buffer.\n    accumulate(hit.uv, hit.quad, color * LightAbsorbtion);\n\n    // What wasn't absorbed is reflected.\n    color *= 1 - LightAbsorbtion;\n  }\n}\n\n// Performs an atomicAdd() with 'color' into the 'accumulation' buffer at 'uv'\n// and 'quad'.\nfn accumulate(uv : vec2f, quad : u32, color : vec3f) {\n  let dims = textureDimensions(lightmap);\n  let base_idx = accumulation_base_index(vec2u(uv * vec2f(dims)), quad);\n  atomicAdd(&accumulation[base_idx + 0], u32(color.r + 0.5));\n  atomicAdd(&accumulation[base_idx + 1], u32(color.g + 0.5));\n  atomicAdd(&accumulation[base_idx + 2], u32(color.b + 0.5));\n}\n\n// Returns the base element index for the texel at 'coord' for 'quad'\nfn accumulation_base_index(coord : vec2u, quad : u32) -> u32 {\n  let dims = textureDimensions(lightmap);\n  let c = min(vec2u(dims) - 1, coord);\n  return 3 * (c.x + dims.x * c.y + dims.x * dims.y * quad);\n}\n\n// Returns a new Ray at a random point on the light, in a random downwards\n// direction.\nfn new_light_ray() -> Ray {\n  let center = uniforms.light_center;\n  let pos = center + vec3f(uniforms.light_width * (rand() - 0.5),\n                           0,\n                           uniforms.light_height * (rand() - 0.5));\n  let dir = normalize(vec3f(0, -1, 0) + rand_unit_sphere());\n  return Ray(pos, dir);\n}\n\noverride AccumulationToLightmapWorkgroupSizeX : u32;\noverride AccumulationToLightmapWorkgroupSizeY : u32;\n\n// Compute shader used to copy the atomic<u32> data in 'accumulation' to\n// 'lightmap'. 'accumulation' might also be scaled to reduce integer overflow.\n@compute @workgroup_size(AccumulationToLightmapWorkgroupSizeX, AccumulationToLightmapWorkgroupSizeY)\nfn accumulation_to_lightmap(@builtin(global_invocation_id) invocation_id : vec3u,\n                            @builtin(workgroup_id)         workgroup_id  : vec3u) {\n  let dims = textureDimensions(lightmap);\n  let quad = workgroup_id.z; // The workgroup 'z' value holds the quad index.\n  let coord = invocation_id.xy;\n  if (all(coord < dims)) {\n    // Load the color value out of 'accumulation'\n    let base_idx = accumulation_base_index(coord, quad);\n    let color = vec3(f32(atomicLoad(&accumulation[base_idx + 0])),\n                     f32(atomicLoad(&accumulation[base_idx + 1])),\n                     f32(atomicLoad(&accumulation[base_idx + 2])));\n\n    // Multiply the color by 'uniforms.accumulation_to_lightmap_scale' and write it to\n    // the lightmap.\n    textureStore(lightmap, coord, quad, vec4(color * uniforms.accumulation_to_lightmap_scale, 1));\n\n    // If the 'accumulation' buffer is nearing saturation, then\n    // 'uniforms.accumulation_buffer_scale' will be less than 1, scaling the values\n    // to something less likely to overflow the u32.\n    if (uniforms.accumulation_buffer_scale != 1.0) {\n      let scaled = color * uniforms.accumulation_buffer_scale + 0.5;\n      atomicStore(&accumulation[base_idx + 0], u32(scaled.r));\n      atomicStore(&accumulation[base_idx + 1], u32(scaled.g));\n      atomicStore(&accumulation[base_idx + 2], u32(scaled.b));\n    }\n  }\n}\n",s="// The lightmap data\n@group(1) @binding(0) var lightmap : texture_2d_array<f32>;\n\n// The sampler used to sample the lightmap\n@group(1) @binding(1) var smpl : sampler;\n\n// Vertex shader input data\nstruct VertexIn {\n  @location(0) position : vec4f,\n  @location(1) uv : vec3f,\n  @location(2) emissive : vec3f,\n}\n\n// Vertex shader output data\nstruct VertexOut {\n  @builtin(position) position : vec4f,\n  @location(0) uv : vec2f,\n  @location(1) emissive : vec3f,\n  @interpolate(flat)\n  @location(2) quad : u32,\n}\n\n@vertex\nfn vs_main(input : VertexIn) -> VertexOut {\n  var output : VertexOut;\n  output.position = common_uniforms.mvp * input.position;\n  output.uv = input.uv.xy;\n  output.quad = u32(input.uv.z + 0.5);\n  output.emissive = input.emissive;\n  return output;\n}\n\n@fragment\nfn fs_main(vertex_out : VertexOut) -> @location(0) vec4f {\n  return textureSample(lightmap, smpl, vertex_out.uv, vertex_out.quad) + vec4f(vertex_out.emissive, 1);\n}\n",u="// The lightmap data\n@group(1) @binding(0) var lightmap : texture_2d_array<f32>;\n\n// The sampler used to sample the lightmap\n@group(1) @binding(1) var smpl : sampler;\n\n// The output framebuffer\n@group(1) @binding(2) var framebuffer : texture_storage_2d<rgba16float, write>;\n\noverride WorkgroupSizeX : u32;\noverride WorkgroupSizeY : u32;\n\n@compute @workgroup_size(WorkgroupSizeX, WorkgroupSizeY)\nfn main(@builtin(global_invocation_id) invocation_id : vec3u) {\n  // Calculate the fragment's NDC coordinates for the intersection of the near\n  // clip plane and far clip plane\n  let uv = vec2f(invocation_id.xy) / vec2f(textureDimensions(framebuffer).xy);\n  let ndcXY = (uv - 0.5) * vec2(2, -2);\n\n  // Transform the coordinates back into world space\n  var near = common_uniforms.inv_mvp * vec4f(ndcXY, 0.0, 1);\n  var far = common_uniforms.inv_mvp * vec4f(ndcXY, 1, 1);\n  near /= near.w;\n  far /= far.w;\n\n  // Create a ray that starts at the near clip plane, heading in the fragment's\n  // z-direction, and raytrace to find the nearest quad that the ray intersects.\n  let ray = Ray(near.xyz, normalize(far.xyz - near.xyz));\n  let hit = raytrace(ray);\n  let quad = quads[hit.quad];\n\n  // Sample the quad's lightmap, and add emissive.\n  let color = textureSampleLevel(lightmap, smpl, hit.uv, hit.quad, 0).rgb +\n              quad.emissive * quad.color;\n  textureStore(framebuffer, invocation_id.xy, vec4(color, 1));\n}\n",c="// The linear-light input framebuffer\n@group(0) @binding(0) var input  : texture_2d<f32>;\n\n// The tonemapped, gamma-corrected output framebuffer\n@group(0) @binding(1) var output : texture_storage_2d<{OUTPUT_FORMAT}, write>;\n\nconst TonemapExposure = 0.5;\n\nconst Gamma = 2.2;\n\noverride WorkgroupSizeX : u32;\noverride WorkgroupSizeY : u32;\n\n@compute @workgroup_size(WorkgroupSizeX, WorkgroupSizeY)\nfn main(@builtin(global_invocation_id) invocation_id : vec3u) {\n  let color = textureLoad(input, invocation_id.xy, 0).rgb;\n  let tonemapped = reinhard_tonemap(color);\n  textureStore(output, invocation_id.xy, vec4f(tonemapped, 1));\n}\n\nfn reinhard_tonemap(linearColor: vec3f) -> vec3f {\n  let color = linearColor * TonemapExposure;\n  let mapped = color / (1+color);\n  return pow(mapped, vec3f(1 / Gamma));\n}\n",l="const pi = 3.14159265359;\n\n// Quad describes 2D rectangle on a plane\nstruct Quad {\n  // The surface plane\n  plane    : vec4f,\n  // A plane with a normal in the 'u' direction, intersecting the origin, at\n  // right-angles to the surface plane.\n  // The dot product of 'right' with a 'vec4(pos, 1)' will range between [-1..1]\n  // if the projected point is within the quad.\n  right    : vec4f,\n  // A plane with a normal in the 'v' direction, intersecting the origin, at\n  // right-angles to the surface plane.\n  // The dot product of 'up' with a 'vec4(pos, 1)' will range between [-1..1]\n  // if the projected point is within the quad.\n  up       : vec4f,\n  // The diffuse color of the quad\n  color    : vec3f,\n  // Emissive value. 0=no emissive, 1=full emissive.\n  emissive : f32,\n};\n\n// Ray is a start point and direction.\nstruct Ray {\n  start : vec3f,\n  dir   : vec3f,\n}\n\n// Value for HitInfo.quad if no intersection occured.\nconst kNoHit = 0xffffffff;\n\n// HitInfo describes the hit location of a ray-quad intersection\nstruct HitInfo {\n  // Distance along the ray to the intersection\n  dist : f32,\n  // The quad index that was hit\n  quad : u32,\n  // The position of the intersection\n  pos : vec3f,\n  // The UVs of the quad at the point of intersection\n  uv : vec2f,\n}\n\n// CommonUniforms uniform buffer data\nstruct CommonUniforms {\n  // Model View Projection matrix\n  mvp : mat4x4f,\n  // Inverse of mvp\n  inv_mvp : mat4x4f,\n  // Random seed for the workgroup\n  seed : vec3u,\n}\n\n// The common uniform buffer binding.\n@group(0) @binding(0) var<uniform> common_uniforms : CommonUniforms;\n\n// The quad buffer binding.\n@group(0) @binding(1) var<storage> quads : array<Quad>;\n\n// intersect_ray_quad will check to see if the ray 'r' intersects the quad 'q'.\n// If an intersection occurs, and the intersection is closer than 'closest' then\n// the intersection information is returned, otherwise 'closest' is returned.\nfn intersect_ray_quad(r : Ray, quad : u32, closest : HitInfo) -> HitInfo {\n  let q = quads[quad];\n  let plane_dist = dot(q.plane, vec4(r.start, 1));\n  let ray_dist = plane_dist / -dot(q.plane.xyz, r.dir);\n  let pos = r.start + r.dir * ray_dist;\n  let uv = vec2(dot(vec4f(pos, 1), q.right),\n                dot(vec4f(pos, 1), q.up)) * 0.5 + 0.5;\n  let hit = plane_dist > 0 &&\n            ray_dist > 0 &&\n            ray_dist < closest.dist &&\n            all((uv > vec2f()) & (uv < vec2f(1)));\n  return HitInfo(\n    select(closest.dist, ray_dist, hit),\n    select(closest.quad, quad,     hit),\n    select(closest.pos,  pos,      hit),\n    select(closest.uv,   uv,       hit),\n  );\n}\n\n// raytrace finds the closest intersecting quad for the given ray\nfn raytrace(ray : Ray) -> HitInfo {\n  var hit = HitInfo();\n  hit.dist = 1e20;\n  hit.quad = kNoHit;\n  for (var quad = 0u; quad < arrayLength(&quads); quad++) {\n    hit = intersect_ray_quad(ray, quad, hit);\n  }\n  return hit;\n}\n\n// A psuedo random number. Initialized with init_rand(), updated with rand().\nvar<private> rnd : vec3u;\n\n// Initializes the random number generator.\nfn init_rand(invocation_id : vec3u) {\n  const A = vec3(1741651 * 1009,\n                 140893  * 1609 * 13,\n                 6521    * 983  * 7 * 2);\n  rnd = (invocation_id * A) ^ common_uniforms.seed;\n}\n\n// Returns a random number between 0 and 1.\nfn rand() -> f32 {\n  const C = vec3(60493  * 9377,\n                 11279  * 2539 * 23,\n                 7919   * 631  * 5 * 3);\n\n  rnd = (rnd * C) ^ (rnd.yzx >> vec3(2u));\n  return f32(rnd.x) / f32(0xffffffff);\n}\n\n// Returns a random point within a unit sphere centered at (0,0,0).\nfn rand_unit_sphere() -> vec3f {\n    var u = rand();\n    var v = rand();\n    var theta = u * 2.0 * pi;\n    var phi = acos(2.0 * v - 1.0);\n    var r = pow(rand(), 1.0/3.0);\n    var sin_theta = sin(theta);\n    var cos_theta = cos(theta);\n    var sin_phi = sin(phi);\n    var cos_phi = cos(phi);\n    var x = r * sin_phi * sin_theta;\n    var y = r * sin_phi * cos_theta;\n    var z = r * cos_phi;\n    return vec3f(x, y, z);\n}\n",d=n(7160);function m(e){return d.tk(d.Ue(),e)}function h(e,t){return d.IH(d.Ue(),e,t)}function p(e,t){return d.lu(d.Ue(),e,t)}function f(e){var t;let n=1/d.x9(e);return t=d.al(n,n,n),d.dC(d.Ue(),t,e)}function g(e){let t=d.al(Math.cos(e.rotation)*(e.width/2),0,Math.sin(e.rotation)*(e.depth/2)),n=d.al(0,e.height/2,0),r=d.al(Math.sin(e.rotation)*(e.width/2),0,-Math.cos(e.rotation)*(e.depth/2)),a=e.color instanceof Array?e.color:Array(6).fill(e.color),o=t=>"concave"===e.type?t:m(t);return[{center:h(e.center,t),right:o(m(r)),up:n,color:a[i.PositiveX]},{center:h(e.center,n),right:o(t),up:m(r),color:a[i.PositiveY]},{center:h(e.center,r),right:o(t),up:n,color:a[i.PositiveZ]},{center:p(e.center,t),right:o(r),up:n,color:a[i.NegativeX]},{center:p(e.center,n),right:o(t),up:r,color:a[i.NegativeY]},{center:p(e.center,r),right:o(m(t)),up:n,color:a[i.NegativeZ]}]}(r=i||(i={}))[r.PositiveX=0]="PositiveX",r[r.PositiveY=1]="PositiveY",r[r.PositiveZ=2]="PositiveZ",r[r.NegativeX=3]="NegativeX",r[r.NegativeY=4]="NegativeY",r[r.NegativeZ=5]="NegativeZ";let v={center:d.al(0,9.95,0),right:d.al(1,0,0),up:d.al(0,0,1),color:d.al(5,5,5),emissive:1};class b{constructor(e){this.quads=[...g({center:d.al(0,5,0),width:10,height:10,depth:10,rotation:0,color:[d.al(0,.5,0),d.al(.5,.5,.5),d.al(.5,.5,.5),d.al(.5,0,0),d.al(.5,.5,.5),d.al(.5,.5,.5)],type:"concave"}),...g({center:d.al(1.5,1.5,1),width:3,height:3,depth:3,rotation:.3,color:d.al(.8,.8,.8),type:"convex"}),...g({center:d.al(-2,3,-2),width:3,height:6,depth:3,rotation:-.4,color:d.al(.8,.8,.8),type:"convex"}),v],this.lightCenter=v.center,this.lightWidth=d.Zh(v.right),this.lightHeight=d.Zh(v.up);let t=e.createBuffer({size:64*this.quads.length,usage:GPUBufferUsage.STORAGE,mappedAtCreation:!0}),n=new Float32Array(t.getMappedRange()),r=new Float32Array(40*this.quads.length),i=new Uint32Array(9*this.quads.length),a=0,o=0,s=0,u=0,c=0;for(let l=0;l<this.quads.length;l++){var m,b,y,_,x,w,P,S,T,G,k,U,z,C,q,R;let A=this.quads[l],E=(C=A.right,q=A.up,R=d.kC(d.Ue(),C,q),d.Fv(d.Ue(),R));n[s++]=E[0],n[s++]=E[1],n[s++]=E[2],n[s++]=-d.AK(E,A.center);let L=f(A.right);n[s++]=L[0],n[s++]=L[1],n[s++]=L[2],n[s++]=-d.AK(L,A.center);let W=f(A.up);n[s++]=W[0],n[s++]=W[1],n[s++]=W[2],n[s++]=-d.AK(W,A.center),n[s++]=A.color[0],n[s++]=A.color[1],n[s++]=A.color[2],n[s++]=null!==(m=A.emissive)&&void 0!==m?m:0;let B=h(p(A.center,A.right),A.up),M=h(h(A.center,A.right),A.up),N=p(p(A.center,A.right),A.up),F=p(h(A.center,A.right),A.up);r[u++]=B[0],r[u++]=B[1],r[u++]=B[2],r[u++]=1,r[u++]=0,r[u++]=1,r[u++]=l,r[u++]=A.color[0]*(null!==(b=A.emissive)&&void 0!==b?b:0),r[u++]=A.color[1]*(null!==(y=A.emissive)&&void 0!==y?y:0),r[u++]=A.color[2]*(null!==(_=A.emissive)&&void 0!==_?_:0),r[u++]=M[0],r[u++]=M[1],r[u++]=M[2],r[u++]=1,r[u++]=1,r[u++]=1,r[u++]=l,r[u++]=A.color[0]*(null!==(x=A.emissive)&&void 0!==x?x:0),r[u++]=A.color[1]*(null!==(w=A.emissive)&&void 0!==w?w:0),r[u++]=A.color[2]*(null!==(P=A.emissive)&&void 0!==P?P:0),r[u++]=N[0],r[u++]=N[1],r[u++]=N[2],r[u++]=1,r[u++]=0,r[u++]=0,r[u++]=l,r[u++]=A.color[0]*(null!==(S=A.emissive)&&void 0!==S?S:0),r[u++]=A.color[1]*(null!==(T=A.emissive)&&void 0!==T?T:0),r[u++]=A.color[2]*(null!==(G=A.emissive)&&void 0!==G?G:0),r[u++]=F[0],r[u++]=F[1],r[u++]=F[2],r[u++]=1,r[u++]=1,r[u++]=0,r[u++]=l,r[u++]=A.color[0]*(null!==(k=A.emissive)&&void 0!==k?k:0),r[u++]=A.color[1]*(null!==(U=A.emissive)&&void 0!==U?U:0),r[u++]=A.color[2]*(null!==(z=A.emissive)&&void 0!==z?z:0),i[c++]=a+0,i[c++]=a+2,i[c++]=a+1,i[c++]=a+1,i[c++]=a+2,i[c++]=a+3,o+=6,a+=4}t.unmap();let I=e.createBuffer({size:r.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(I.getMappedRange()).set(r),I.unmap();let O=e.createBuffer({size:i.byteLength,usage:GPUBufferUsage.INDEX,mappedAtCreation:!0});new Uint16Array(O.getMappedRange()).set(i),O.unmap(),this.vertexCount=a,this.indexCount=o,this.vertices=I,this.indices=O,this.vertexBufferLayout=[{arrayStride:40,attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x3"},{shaderLocation:2,offset:28,format:"float32x3"}]}],this.quadBuffer=t}}var y=n(5975);class _{update(e){let t=y.Ue(),n=y.Ue(),r=y.Ue(),i=y.Ue();y.G3(i,2*Math.PI/8,1,.5,100);let a=e.rotateCamera?this.frame/1e3:0;y.zB(t,d.al(15*Math.sin(a),5,15*Math.cos(a)),d.al(0,5,0),d.al(0,1,0)),y.Jp(n,i,t),y.U_(r,n);let o=new Float32Array(this.uniformBuffer.size/4),s=new Uint32Array(o.buffer);for(let u=0;u<16;u++)o[u]=n[u];for(let c=0;c<16;c++)o[c+16]=r[c];s[32]=4294967295*Math.random(),s[33]=4294967295*Math.random(),s[34]=4294967295*Math.random(),this.device.queue.writeBuffer(this.uniformBuffer,0,o.buffer,o.byteOffset,o.byteLength),this.frame++}constructor(e,t){this.wgsl=l,this.frame=0,this.device=e,this.uniformBuffer=e.createBuffer({label:"Common.uniformBuffer",size:144,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let n=e.createBindGroupLayout({label:"Common.bindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}]}),r=e.createBindGroup({label:"Common.bindGroup",layout:n,entries:[{binding:0,resource:{buffer:this.uniformBuffer,offset:0,size:this.uniformBuffer.size}},{binding:1,resource:{buffer:t,offset:0,size:t.size}}]});this.uniforms={bindGroupLayout:n,bindGroup:r}}}class x{run(e){this.accumulationMean+=this.kPhotonsPerFrame*this.kPhotonEnergy/this.kTotalLightmapTexels;let t=1/this.accumulationMean,n=this.accumulationMean>2*this.kAccumulationMeanMax?.5:1;this.accumulationMean*=n;let r=new Float32Array(this.uniformBuffer.size/4);r[0]=t,r[1]=n,r[2]=this.scene.lightWidth,r[3]=this.scene.lightHeight,r[4]=this.scene.lightCenter[0],r[5]=this.scene.lightCenter[1],r[6]=this.scene.lightCenter[2],this.device.queue.writeBuffer(this.uniformBuffer,0,r.buffer,r.byteOffset,r.byteLength);let i=e.beginComputePass();i.setBindGroup(0,this.common.uniforms.bindGroup),i.setBindGroup(1,this.bindGroup),i.setPipeline(this.radiosityPipeline),i.dispatchWorkgroups(this.kWorkgroupsPerFrame),i.setPipeline(this.accumulationToLightmapPipeline),i.dispatchWorkgroups(Math.ceil(x.lightmapWidth/this.kAccumulationToLightmapWorkgroupSizeX),Math.ceil(x.lightmapHeight/this.kAccumulationToLightmapWorkgroupSizeY),this.lightmap.depthOrArrayLayers),i.end()}constructor(e,t,n){this.kPhotonsPerWorkgroup=256,this.kWorkgroupsPerFrame=1024,this.kPhotonsPerFrame=this.kPhotonsPerWorkgroup*this.kWorkgroupsPerFrame,this.kPhotonEnergy=1e5,this.kAccumulationToLightmapWorkgroupSizeX=16,this.kAccumulationToLightmapWorkgroupSizeY=16,this.accumulationMean=0,this.kAccumulationMeanMax=268435456,this.device=e,this.common=t,this.scene=n,this.lightmap=e.createTexture({label:"Radiosity.lightmap",size:{width:x.lightmapWidth,height:x.lightmapHeight,depthOrArrayLayers:n.quads.length},format:x.lightmapFormat,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING}),this.accumulationBuffer=e.createBuffer({label:"Radiosity.accumulationBuffer",size:x.lightmapWidth*x.lightmapHeight*n.quads.length*16,usage:GPUBufferUsage.STORAGE}),this.kTotalLightmapTexels=x.lightmapWidth*x.lightmapHeight*n.quads.length,this.uniformBuffer=e.createBuffer({label:"Radiosity.uniformBuffer",size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});let r=e.createBindGroupLayout({label:"Radiosity.bindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:x.lightmapFormat,viewDimension:"2d-array"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});this.bindGroup=e.createBindGroup({label:"Radiosity.bindGroup",layout:r,entries:[{binding:0,resource:{buffer:this.accumulationBuffer,size:this.accumulationBuffer.size}},{binding:1,resource:this.lightmap.createView()},{binding:2,resource:{buffer:this.uniformBuffer,size:this.uniformBuffer.size}}]});let i=e.createShaderModule({code:o+t.wgsl}),a=e.createPipelineLayout({label:"Radiosity.accumulatePipelineLayout",bindGroupLayouts:[t.uniforms.bindGroupLayout,r]});this.radiosityPipeline=e.createComputePipeline({label:"Radiosity.radiosityPipeline",layout:a,compute:{module:i,entryPoint:"radiosity",constants:{PhotonsPerWorkgroup:this.kPhotonsPerWorkgroup,PhotonEnergy:this.kPhotonEnergy}}}),this.accumulationToLightmapPipeline=e.createComputePipeline({label:"Radiosity.accumulationToLightmapPipeline",layout:a,compute:{module:i,entryPoint:"accumulation_to_lightmap",constants:{AccumulationToLightmapWorkgroupSizeX:this.kAccumulationToLightmapWorkgroupSizeX,AccumulationToLightmapWorkgroupSizeY:this.kAccumulationToLightmapWorkgroupSizeY}}})}}x.lightmapFormat="rgba16float",x.lightmapWidth=256,x.lightmapHeight=256;class w{run(e){let t=e.beginRenderPass(this.renderPassDescriptor);t.setPipeline(this.pipeline),t.setVertexBuffer(0,this.scene.vertices),t.setIndexBuffer(this.scene.indices,"uint16"),t.setBindGroup(0,this.common.uniforms.bindGroup),t.setBindGroup(1,this.bindGroup),t.drawIndexed(this.scene.indexCount),t.end()}constructor(e,t,n,r,i){this.common=t,this.scene=n;let a=e.createTexture({label:"RasterizerRenderer.depthTexture",size:[i.width,i.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT});this.renderPassDescriptor={label:"RasterizerRenderer.renderPassDescriptor",colorAttachments:[{view:i.createView(),clearValue:[.1,.2,.3,1],loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:a.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}};let o=e.createBindGroupLayout({label:"RasterizerRenderer.bindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array"}},{binding:1,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,sampler:{}}]});this.bindGroup=e.createBindGroup({label:"RasterizerRenderer.bindGroup",layout:o,entries:[{binding:0,resource:r.lightmap.createView()},{binding:1,resource:e.createSampler({addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",magFilter:"linear",minFilter:"linear"})}]});let u=e.createShaderModule({label:"RasterizerRenderer.module",code:s+t.wgsl});this.pipeline=e.createRenderPipeline({label:"RasterizerRenderer.pipeline",layout:e.createPipelineLayout({bindGroupLayouts:[t.uniforms.bindGroupLayout,o]}),vertex:{module:u,entryPoint:"vs_main",buffers:n.vertexBufferLayout},fragment:{module:u,entryPoint:"fs_main",targets:[{format:"rgba16float"}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})}}class P{run(e){let t=e.beginComputePass();t.setBindGroup(0,this.bindGroup),t.setPipeline(this.pipeline),t.dispatchWorkgroups(Math.ceil(this.width/this.kWorkgroupSizeX),Math.ceil(this.height/this.kWorkgroupSizeY)),t.end()}constructor(e,t,n,r){this.kWorkgroupSizeX=16,this.kWorkgroupSizeY=16,this.width=n.width,this.height=n.height;let i=e.createBindGroupLayout({label:"Tonemapper.bindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"2d"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:r.format,viewDimension:"2d"}}]});this.bindGroup=e.createBindGroup({label:"Tonemapper.bindGroup",layout:i,entries:[{binding:0,resource:n.createView()},{binding:1,resource:r.createView()}]});let a=e.createShaderModule({code:c.replace("{OUTPUT_FORMAT}",r.format)+t.wgsl}),o=e.createPipelineLayout({label:"Tonemap.pipelineLayout",bindGroupLayouts:[i]});this.pipeline=e.createComputePipeline({label:"Tonemap.pipeline",layout:o,compute:{module:a,entryPoint:"main",constants:{WorkgroupSizeX:this.kWorkgroupSizeX,WorkgroupSizeY:this.kWorkgroupSizeY}}})}}class S{run(e){let t=e.beginComputePass();t.setPipeline(this.pipeline),t.setBindGroup(0,this.common.uniforms.bindGroup),t.setBindGroup(1,this.bindGroup),t.dispatchWorkgroups(this.framebuffer.width/this.kWorkgroupSizeX,this.framebuffer.height/this.kWorkgroupSizeY),t.end()}constructor(e,t,n,r){this.kWorkgroupSizeX=16,this.kWorkgroupSizeY=16,this.common=t,this.framebuffer=r;let i=e.createBindGroupLayout({label:"Raytracer.bindGroupLayout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,texture:{viewDimension:"2d-array"}},{binding:1,visibility:GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,sampler:{}},{binding:2,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"2d"}}]});this.bindGroup=e.createBindGroup({label:"rendererBindGroup",layout:i,entries:[{binding:0,resource:n.lightmap.createView()},{binding:1,resource:e.createSampler({addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge",magFilter:"linear",minFilter:"linear"})},{binding:2,resource:r.createView()}]}),this.pipeline=e.createComputePipeline({label:"raytracerPipeline",layout:e.createPipelineLayout({bindGroupLayouts:[t.uniforms.bindGroupLayout,i]}),compute:{module:e.createShaderModule({code:u+t.wgsl}),entryPoint:"main",constants:{WorkgroupSizeX:this.kWorkgroupSizeX,WorkgroupSizeY:this.kWorkgroupSizeY}}})}}var T="src/sample/cornell/main.ts";let G=async e=>{let{canvas:t,pageState:n,gui:r}=e,i=navigator.gpu.getPreferredCanvasFormat(),a="bgra8unorm"===i?["bgra8unorm-storage"]:[],o=await navigator.gpu.requestAdapter();for(let s of a)if(!o.features.has(s))throw Error("sample requires ".concat(s,", but is not supported by the adapter"));let u=await o.requestDevice({requiredFeatures:a});if(!n.active)return;let c={renderer:"rasterizer",rotateCamera:!0};r.add(c,"renderer",["rasterizer","raytracer"]),r.add(c,"rotateCamera",!0);let l=window.devicePixelRatio||1;t.width=t.clientWidth*l,t.height=t.clientHeight*l;let d=t.getContext("webgpu");d.configure({device:u,format:i,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING,alphaMode:"premultiplied"});let m=u.createTexture({label:"framebuffer",size:[t.width,t.height],format:"rgba16float",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),h=new b(u),p=new _(u,h.quadBuffer),f=new x(u,p,h),g=new w(u,p,h,f,m),v=new S(u,p,f,m);requestAnimationFrame(function e(){if(!n.active)return;let t=d.getCurrentTexture(),r=u.createCommandEncoder();switch(p.update({rotateCamera:c.rotateCamera}),f.run(r),c.renderer){case"rasterizer":g.run(r);break;case"raytracer":v.run(r)}let i=new P(u,p,m,t);i.run(r),u.queue.submit([r.finish()]),requestAnimationFrame(e)})},k=()=>(0,a.T)({name:"Cornell box",description:"A classic Cornell box, using a lightmap generated using software ray-tracing.",gui:!0,init:G,sources:[{name:T.substring(19),contents:"import { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport radiosityWGSL from './radiosity.wgsl';\nimport rasterizerWGSL from './rasterizer.wgsl';\nimport raytracerWGSL from './raytracer.wgsl';\nimport tonemapperWGSL from './tonemapper.wgsl';\nimport commonWGSL from './common.wgsl';\nimport Scene from './scene';\nimport Common from './common';\nimport Radiosity from './radiosity';\nimport Rasterizer from './rasterizer';\nimport Tonemapper from './tonemapper';\nimport Raytracer from './raytracer';\n\nconst init: SampleInit = async ({ canvas, pageState, gui }) => {\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n  const requiredFeatures: GPUFeatureName[] =\n    presentationFormat === 'bgra8unorm' ? ['bgra8unorm-storage'] : [];\n  const adapter = await navigator.gpu.requestAdapter();\n  for (const feature of requiredFeatures) {\n    if (!adapter.features.has(feature)) {\n      throw new Error(\n        `sample requires ${feature}, but is not supported by the adapter`\n      );\n    }\n  }\n  const device = await adapter.requestDevice({ requiredFeatures });\n\n  if (!pageState.active) return;\n\n  const params: {\n    renderer: 'rasterizer' | 'raytracer';\n    rotateCamera: boolean;\n  } = {\n    renderer: 'rasterizer',\n    rotateCamera: true,\n  };\n\n  gui.add(params, 'renderer', ['rasterizer', 'raytracer']);\n  gui.add(params, 'rotateCamera', true);\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n  context.configure({\n    device,\n    format: presentationFormat,\n    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.STORAGE_BINDING,\n    alphaMode: 'premultiplied',\n  });\n\n  const framebuffer = device.createTexture({\n    label: 'framebuffer',\n    size: [canvas.width, canvas.height],\n    format: 'rgba16float',\n    usage:\n      GPUTextureUsage.RENDER_ATTACHMENT |\n      GPUTextureUsage.STORAGE_BINDING |\n      GPUTextureUsage.TEXTURE_BINDING,\n  });\n\n  const scene = new Scene(device);\n  const common = new Common(device, scene.quadBuffer);\n  const radiosity = new Radiosity(device, common, scene);\n  const rasterizer = new Rasterizer(\n    device,\n    common,\n    scene,\n    radiosity,\n    framebuffer\n  );\n  const raytracer = new Raytracer(device, common, radiosity, framebuffer);\n\n  function frame() {\n    if (!pageState.active) {\n      // Sample is no longer the active page.\n      return;\n    }\n\n    const canvasTexture = context.getCurrentTexture();\n    const commandEncoder = device.createCommandEncoder();\n\n    common.update({\n      rotateCamera: params.rotateCamera,\n    });\n    radiosity.run(commandEncoder);\n\n    switch (params.renderer) {\n      case 'rasterizer': {\n        rasterizer.run(commandEncoder);\n        break;\n      }\n      case 'raytracer': {\n        raytracer.run(commandEncoder);\n        break;\n      }\n    }\n\n    const tonemapper = new Tonemapper(\n      device,\n      common,\n      framebuffer,\n      canvasTexture\n    );\n    tonemapper.run(commandEncoder);\n\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n\n  requestAnimationFrame(frame);\n};\n\nconst CornellBox: () => JSX.Element = () =>\n  makeSample({\n    name: 'Cornell box',\n    description:\n      'A classic Cornell box, using a lightmap generated using software ray-tracing.',\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: './radiosity.wgsl',\n        contents: radiosityWGSL,\n        editable: true,\n      },\n      {\n        name: './rasterizer.wgsl',\n        contents: rasterizerWGSL,\n        editable: true,\n      },\n      {\n        name: './raytracer.wgsl',\n        contents: raytracerWGSL,\n        editable: true,\n      },\n      {\n        name: './tonemapper.wgsl',\n        contents: tonemapperWGSL,\n        editable: true,\n      },\n      {\n        name: './common.wgsl',\n        contents: commonWGSL,\n        editable: true,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default CornellBox;\n"},{name:"./radiosity.wgsl",contents:o,editable:!0},{name:"./rasterizer.wgsl",contents:s,editable:!0},{name:"./raytracer.wgsl",contents:u,editable:!0},{name:"./tonemapper.wgsl",contents:c,editable:!0},{name:"./common.wgsl",contents:l,editable:!0}],filename:T});var U=k},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}}}]);