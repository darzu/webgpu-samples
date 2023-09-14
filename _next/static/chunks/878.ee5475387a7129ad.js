(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[878],{5671:function(e,t,n){"use strict";n.d(t,{Tl:function(){return m},hu:function(){return p}});var a=n(5893),i=n(9008),r=n.n(i),o=n(1163),s=n(7294),c=n(9147),l=n.n(c);n(7319);let u=e=>{let t=(0,s.useRef)(null),i=(0,s.useMemo)(()=>e.sources.map(e=>{let{name:t,contents:i}=e;return{name:t,...function(e){let t;let i=null;{i=document.createElement("div");let r=n(4631);t=r(i,{lineNumbers:!0,lineWrapping:!0,theme:"monokai",readOnly:!0})}return{Container:function(n){return(0,a.jsx)("div",{...n,children:(0,a.jsx)("div",{ref(n){i&&n&&(n.appendChild(i),t.setOption("value",e))}})})}}}(i)}}),e.sources),c=(0,s.useRef)(null),u=(0,s.useMemo)(()=>{if(e.gui){let t=n(4376);return new t.GUI({autoPlace:!1})}},[]),m=(0,s.useRef)(null),p=(0,s.useMemo)(()=>{if(e.stats){let t=n(2792);return new t}},[]),h=(0,o.useRouter)(),d=h.asPath.match(/#([a-zA-Z0-9\.\/]+)/),[f,g]=(0,s.useState)(null),[v,x]=(0,s.useState)(null);return(0,s.useEffect)(()=>{if(d?x(d[1]):x(i[0].name),u&&c.current)for(c.current.appendChild(u.domElement);u.__controllers.length>0;)u.__controllers[0].remove();p&&m.current&&(p.dom.style.position="absolute",p.showPanel(1),m.current.appendChild(p.dom));let n={active:!0},a=()=>{n.active=!1};try{let r=t.current;if(!r)throw Error("The canvas is not available");let o=e.init({canvas:r,pageState:n,gui:u,stats:p});o instanceof Promise&&o.catch(e=>{console.error(e),g(e)})}catch(s){console.error(s),g(s)}return a},[]),(0,a.jsxs)("main",{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n            .CodeMirror {\n              height: auto !important;\n              margin: 1em 0;\n            }\n\n            .CodeMirror-scroll {\n              height: auto !important;\n              overflow: visible !important;\n            }\n          "}}),(0,a.jsx)("title",{children:"".concat(e.name," - WebGPU Samples")}),(0,a.jsx)("meta",{name:"description",content:e.description}),(0,a.jsx)("meta",{httpEquiv:"origin-trial",content:e.originTrial})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:e.name}),(0,a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat("webgpu/webgpu-samples","/tree/main/").concat(e.filename),children:"See it on Github!"}),(0,a.jsx)("p",{children:e.description}),f?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{children:"Something went wrong. Do your browser and device support WebGPU?"}),(0,a.jsx)("p",{children:"".concat(f)})]}):null]}),(0,a.jsxs)("div",{className:l().canvasContainer,children:[(0,a.jsx)("div",{style:{position:"absolute",left:10},ref:m}),(0,a.jsx)("div",{style:{position:"absolute",right:10},ref:c}),(0,a.jsx)("canvas",{ref:t})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("nav",{className:l().sourceFileNav,children:(0,a.jsx)("ul",{children:i.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#".concat(e.name),"data-active":v==e.name,onClick(){x(e.name)},children:e.name})},t))})}),i.map((e,t)=>(0,a.jsx)(e.Container,{className:l().sourceFileContainer,"data-active":v==e.name},t))]})]})},m=e=>(0,a.jsx)(u,{...e});function p(e,t){if(!e)throw Error(t)}},4655:function(e,t,n){"use strict";n.d(t,{Ax:function(){return r},MO:function(){return o},O$:function(){return a},v8:function(){return i},zS:function(){return s}});let a=40,i=0,r=32,o=36,s=new Float32Array([1,-1,1,1,1,0,1,1,0,1,-1,-1,1,1,0,0,1,1,1,1,-1,-1,-1,1,0,0,0,1,1,0,1,-1,-1,1,1,0,0,1,0,0,1,-1,1,1,1,0,1,1,0,1,-1,-1,-1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,-1,1,1,1,0,1,1,1,1,1,-1,-1,1,1,0,0,1,1,0,1,1,-1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,-1,-1,1,1,0,0,1,1,0,-1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,-1,1,1,1,0,1,1,0,-1,1,-1,1,0,1,0,1,0,0,-1,1,1,1,0,1,1,1,0,1,1,1,-1,1,1,1,0,1,1,0,-1,-1,1,1,0,0,1,1,0,1,-1,1,1,1,0,1,1,1,1,1,-1,1,-1,1,0,1,0,1,1,0,-1,-1,-1,1,0,0,0,1,0,0,-1,-1,1,1,0,0,1,1,0,1,-1,1,-1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,-1,1,1,1,0,1,1,1,1,1,-1,-1,1,1,0,0,1,1,1,0,-1,-1,1,1,0,0,1,1,1,0,1,-1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,-1,-1,1,1,0,0,1,0,1,-1,-1,-1,1,0,0,0,1,1,1,-1,1,-1,1,0,1,0,1,1,0,1,1,-1,1,1,1,0,1,0,0,1,-1,-1,1,1,0,0,1,0,1,-1,1,-1,1,0,1,0,1,1,0])},3878:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(6416),i=n(5671),r=n(4655),o="struct Uniforms {\n  modelViewProjectionMatrix : mat4x4<f32>,\n}\n\n@group(0) @binding(0) var<uniform> uniforms : Uniforms;\n@group(0) @binding(1) var mySampler: sampler;\n@group(0) @binding(2) var myTexture: texture_2d<f32>;\n\nstruct VertexOutput {\n  @builtin(position) Position : vec4f,\n  @location(0) fragUV : vec2f,\n}\n\n@vertex\nfn vertex_main(\n  @location(0) position : vec4f,\n  @location(1) uv : vec2f\n) -> VertexOutput {\n  return VertexOutput(uniforms.modelViewProjectionMatrix * position, uv);\n}\n\n@fragment\nfn fragment_main(@location(0) fragUV: vec2f) -> @location(0) vec4f {\n  return textureSample(myTexture, mySampler, fragUV);\n}\n";let s={name:"src/sample/cameras/camera.ts".substring(19),contents:"// Note: The code in this file does not use the 'dst' output parameter of functions in the\n// 'wgpu-matrix' library, so produces many temporary vectors and matrices.\n// This is intentional, as this sample prefers readability over performance.\nimport { Mat4, Vec3, Vec4, mat4, vec3 } from 'wgpu-matrix';\nimport Input from './input';\n\n// Information about this file, used by the sample UI\nexport const cameraSourceInfo = {\n  name: __filename.substring(__dirname.length + 1),\n  contents: __SOURCE__,\n};\n\n// Common interface for camera implementations\nexport default interface Camera {\n  // update updates the camera using the user-input and returns the view matrix.\n  update(delta_time: number, input: Input): Mat4;\n\n  // The camera matrix.\n  // This is the inverse of the view matrix.\n  matrix: Mat4;\n  // Alias to column vector 0 of the camera matrix.\n  right: Vec4;\n  // Alias to column vector 1 of the camera matrix.\n  up: Vec4;\n  // Alias to column vector 2 of the camera matrix.\n  back: Vec4;\n  // Alias to column vector 3 of the camera matrix.\n  position: Vec4;\n}\n\n// The common functionality between camera implementations\nclass CameraBase {\n  // The camera matrix\n  private matrix_ = new Float32Array([\n    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,\n  ]);\n\n  // The calculated view matrix\n  private readonly view_ = mat4.create();\n\n  // Aliases to column vectors of the matrix\n  private right_ = new Float32Array(this.matrix_.buffer, 4 * 0, 4);\n  private up_ = new Float32Array(this.matrix_.buffer, 4 * 4, 4);\n  private back_ = new Float32Array(this.matrix_.buffer, 4 * 8, 4);\n  private position_ = new Float32Array(this.matrix_.buffer, 4 * 12, 4);\n\n  // Returns the camera matrix\n  get matrix() {\n    return this.matrix_;\n  }\n  // Assigns `mat` to the camera matrix\n  set matrix(mat: Mat4) {\n    mat4.copy(mat, this.matrix_);\n  }\n\n  // Returns the camera view matrix\n  get view() {\n    return this.view_;\n  }\n  // Assigns `mat` to the camera view\n  set view(mat: Mat4) {\n    mat4.copy(mat, this.view_);\n  }\n\n  // Returns column vector 0 of the camera matrix\n  get right() {\n    return this.right_;\n  }\n  // Assigns `vec` to the first 3 elements of column vector 0 of the camera matrix\n  set right(vec: Vec3) {\n    vec3.copy(vec, this.right_);\n  }\n\n  // Returns column vector 1 of the camera matrix\n  get up() {\n    return this.up_;\n  }\n  // Assigns `vec` to the first 3 elements of column vector 1 of the camera matrix\n  set up(vec: Vec3) {\n    vec3.copy(vec, this.up_);\n  }\n\n  // Returns column vector 2 of the camera matrix\n  get back() {\n    return this.back_;\n  }\n  // Assigns `vec` to the first 3 elements of column vector 2 of the camera matrix\n  set back(vec: Vec3) {\n    vec3.copy(vec, this.back_);\n  }\n\n  // Returns column vector 3 of the camera matrix\n  get position() {\n    return this.position_;\n  }\n  // Assigns `vec` to the first 3 elements of column vector 3 of the camera matrix\n  set position(vec: Vec3) {\n    vec3.copy(vec, this.position_);\n  }\n}\n\n// WASDCamera is a camera implementation that behaves similar to first-person-shooter PC games.\nexport class WASDCamera extends CameraBase implements Camera {\n  // The camera absolute pitch angle\n  private pitch = 0;\n  // The camera absolute yaw angle\n  private yaw = 0;\n\n  // The movement veloicty\n  private readonly velocity_ = vec3.create();\n\n  // Speed multiplier for camera movement\n  movementSpeed = 10;\n\n  // Speed multiplier for camera rotation\n  rotationSpeed = 1;\n\n  // Movement velocity drag coeffient [0 .. 1]\n  // 0: Instantly stops moving\n  // 1: Continues forever\n  frictionCoefficient = 0.01;\n\n  // Returns velocity vector\n  get velocity() {\n    return this.velocity_;\n  }\n  // Assigns `vec` to the velocity vector\n  set velocity(vec: Vec3) {\n    vec3.copy(vec, this.velocity_);\n  }\n\n  // Construtor\n  constructor(options?: {\n    // The initial position of the camera\n    position?: Vec3;\n    // The initial target of the camera\n    target?: Vec3;\n  }) {\n    super();\n    if (options && (options.position || options.target)) {\n      const position = options.position ?? vec3.create(0, 0, -5);\n      const target = options.target ?? vec3.create(0, 0, 0);\n      const forward = vec3.sub(target, position);\n      this.recalculateAngles(vec3.normalize(forward));\n      this.position = position;\n    }\n  }\n\n  // Returns the camera matrix\n  get matrix() {\n    return super.matrix;\n  }\n\n  // Assigns `mat` to the camera matrix, and recalcuates the camera angles\n  set matrix(mat: Mat4) {\n    super.matrix = mat;\n    this.recalculateAngles(this.back);\n  }\n\n  update(deltaTime: number, input: Input): Mat4 {\n    const sign = (positive: boolean, negative: boolean) =>\n      (positive ? 1 : 0) - (negative ? 1 : 0);\n\n    // Apply the delta rotation to the pitch and yaw angles\n    this.yaw -= input.analog.x * deltaTime * this.rotationSpeed;\n    this.pitch -= input.analog.y * deltaTime * this.rotationSpeed;\n\n    // Wrap yaw between [0\xb0 .. 360\xb0], just to prevent large accumulation.\n    this.yaw = mod(this.yaw, Math.PI * 2);\n    // Clamp pitch between [-90\xb0 .. +90\xb0] to prevent somersaults.\n    this.pitch = clamp(this.pitch, -Math.PI / 2, Math.PI / 2);\n\n    // Save the current position, as we're about to rebuild the camera matrix.\n    const position = vec3.copy(this.position);\n\n    // Reconstruct the camera's rotation, and store into the camera matrix.\n    super.matrix = mat4.rotateX(mat4.rotationY(this.yaw), this.pitch);\n\n    // Calculate the new target velocity\n    const digital = input.digital;\n    const deltaRight = sign(digital.right, digital.left);\n    const deltaUp = sign(digital.up, digital.down);\n    const targetVelocity = vec3.create();\n    const deltaBack = sign(digital.backward, digital.forward);\n    vec3.addScaled(targetVelocity, this.right, deltaRight, targetVelocity);\n    vec3.addScaled(targetVelocity, this.up, deltaUp, targetVelocity);\n    vec3.addScaled(targetVelocity, this.back, deltaBack, targetVelocity);\n    vec3.normalize(targetVelocity, targetVelocity);\n    vec3.mulScalar(targetVelocity, this.movementSpeed, targetVelocity);\n\n    // Mix new target velocity\n    this.velocity = lerp(\n      targetVelocity,\n      this.velocity,\n      Math.pow(this.frictionCoefficient, deltaTime)\n    );\n\n    // Integrate velocity to calculate new position\n    this.position = vec3.addScaled(position, this.velocity, deltaTime);\n\n    // Invert the camera matrix to build the view matrix\n    this.view = mat4.invert(this.matrix);\n    return this.view;\n  }\n\n  // Recalculates the yaw and pitch values from a directional vector\n  recalculateAngles(dir: Vec3) {\n    this.yaw = Math.atan2(dir[0], dir[2]);\n    this.pitch = -Math.asin(dir[1]);\n  }\n}\n\n// ArcballCamera implements a basic orbiting camera around the world origin\nexport class ArcballCamera extends CameraBase implements Camera {\n  // The camera distance from the target\n  private distance = 0;\n\n  // The current angular velocity\n  private angularVelocity = 0;\n\n  // The current rotation axis\n  private axis_ = vec3.create();\n\n  // Returns the rotation axis\n  get axis() {\n    return this.axis_;\n  }\n  // Assigns `vec` to the rotation axis\n  set axis(vec: Vec3) {\n    vec3.copy(vec, this.axis_);\n  }\n\n  // Speed multiplier for camera rotation\n  rotationSpeed = 1;\n\n  // Speed multiplier for camera zoom\n  zoomSpeed = 0.1;\n\n  // Rotation velocity drag coeffient [0 .. 1]\n  // 0: Instantly stops spinning\n  // 1: Spins forever\n  frictionCoefficient = 0.0001;\n\n  // Construtor\n  constructor(options?: {\n    // The initial position of the camera\n    position?: Vec3;\n  }) {\n    super();\n    if (options && options.position) {\n      this.position = options.position;\n      this.distance = vec3.len(this.position);\n      this.back = vec3.normalize(this.position);\n      this.recalcuateRight();\n      this.recalcuateUp();\n    }\n  }\n\n  // Returns the camera matrix\n  get matrix() {\n    return super.matrix;\n  }\n\n  // Assigns `mat` to the camera matrix, and recalcuates the distance\n  set matrix(mat: Mat4) {\n    super.matrix = mat;\n    this.distance = vec3.len(this.position);\n  }\n\n  update(deltaTime: number, input: Input): Mat4 {\n    const epsilon = 0.0000001;\n\n    if (input.analog.touching) {\n      // Currently being dragged.\n      this.angularVelocity = 0;\n    } else {\n      // Dampen any existing angular velocity\n      this.angularVelocity *= Math.pow(this.frictionCoefficient, deltaTime);\n    }\n\n    // Calculate the movement vector\n    const movement = vec3.create();\n    vec3.addScaled(movement, this.right, input.analog.x, movement);\n    vec3.addScaled(movement, this.up, -input.analog.y, movement);\n\n    // Cross the movement vector with the view direction to calculate the rotation axis x magnitude\n    const crossProduct = vec3.cross(movement, this.back);\n\n    // Calculate the magnitude of the drag\n    const magnitude = vec3.len(crossProduct);\n\n    if (magnitude > epsilon) {\n      // Normalize the crossProduct to get the rotation axis\n      this.axis = vec3.scale(crossProduct, 1 / magnitude);\n\n      // Remember the current angular velocity. This is used when the touch is released for a fling.\n      this.angularVelocity = magnitude * this.rotationSpeed;\n    }\n\n    // The rotation around this.axis to apply to the camera matrix this update\n    const rotationAngle = this.angularVelocity * deltaTime;\n    if (Math.abs(rotationAngle) > epsilon) {\n      // Rotate the matrix around axis\n      // Note: The rotation is not done as a matrix-matrix multiply as the repeated multiplications\n      // will quickly introduce substantial error into the matrix.\n      this.back = vec3.normalize(rotate(this.back, this.axis, rotationAngle));\n      this.recalcuateRight();\n      this.recalcuateUp();\n    }\n\n    // recalculate `this.position` from `this.back` considering zoom\n    if (input.analog.zoom !== 0) {\n      this.distance *= 1 + input.analog.zoom * this.zoomSpeed;\n    }\n    this.position = vec3.scale(this.back, this.distance);\n\n    // Invert the camera matrix to build the view matrix\n    this.view = mat4.invert(this.matrix);\n    return this.view;\n  }\n\n  // Assigns `this.right` with the cross product of `this.up` and `this.back`\n  recalcuateRight() {\n    this.right = vec3.normalize(vec3.cross(this.up, this.back));\n  }\n\n  // Assigns `this.up` with the cross product of `this.back` and `this.right`\n  recalcuateUp() {\n    this.up = vec3.normalize(vec3.cross(this.back, this.right));\n  }\n}\n\n// Returns `x` clamped between [`min` .. `max`]\nfunction clamp(x: number, min: number, max: number): number {\n  return Math.min(Math.max(x, min), max);\n}\n\n// Returns `x` float-modulo `div`\nfunction mod(x: number, div: number): number {\n  return x - Math.floor(Math.abs(x) / div) * div * Math.sign(x);\n}\n\n// Returns `vec` rotated `angle` radians around `axis`\nfunction rotate(vec: Vec3, axis: Vec3, angle: number): Vec3 {\n  return vec3.transformMat4Upper3x3(vec, mat4.rotation(axis, angle));\n}\n\n// Returns the linear interpolation between 'a' and 'b' using 's'\nfunction lerp(a: Vec3, b: Vec3, s: number): Vec3 {\n  return vec3.addScaled(a, vec3.sub(b, a), s);\n}\n"};class c{get matrix(){return this.matrix_}set matrix(e){a._E.copy(e,this.matrix_)}get view(){return this.view_}set view(e){a._E.copy(e,this.view_)}get right(){return this.right_}set right(e){a.R3.copy(e,this.right_)}get up(){return this.up_}set up(e){a.R3.copy(e,this.up_)}get back(){return this.back_}set back(e){a.R3.copy(e,this.back_)}get position(){return this.position_}set position(e){a.R3.copy(e,this.position_)}constructor(){this.matrix_=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),this.view_=a._E.create(),this.right_=new Float32Array(this.matrix_.buffer,0,4),this.up_=new Float32Array(this.matrix_.buffer,16,4),this.back_=new Float32Array(this.matrix_.buffer,32,4),this.position_=new Float32Array(this.matrix_.buffer,48,4)}}class l extends c{get velocity(){return this.velocity_}set velocity(e){a.R3.copy(e,this.velocity_)}get matrix(){return super.matrix}set matrix(e){super.matrix=e,this.recalculateAngles(this.back)}update(e,t){var n,i,r,o;let s=(e,t)=>(e?1:0)-(t?1:0);this.yaw-=t.analog.x*e*this.rotationSpeed,this.pitch-=t.analog.y*e*this.rotationSpeed,this.yaw=(n=this.yaw)-Math.floor(Math.abs(n)/(i=2*Math.PI))*i*Math.sign(n),this.pitch=Math.min(Math.max(this.pitch,-Math.PI/2),Math.PI/2);let c=a.R3.copy(this.position);super.matrix=a._E.rotateX(a._E.rotationY(this.yaw),this.pitch);let l=t.digital,u=s(l.right,l.left),m=s(l.up,l.down),p=a.R3.create(),h=s(l.backward,l.forward);return a.R3.addScaled(p,this.right,u,p),a.R3.addScaled(p,this.up,m,p),a.R3.addScaled(p,this.back,h,p),a.R3.normalize(p,p),a.R3.mulScalar(p,this.movementSpeed,p),this.velocity=(r=this.velocity,o=Math.pow(this.frictionCoefficient,e),a.R3.addScaled(p,a.R3.sub(r,p),o)),this.position=a.R3.addScaled(c,this.velocity,e),this.view=a._E.invert(this.matrix),this.view}recalculateAngles(e){this.yaw=Math.atan2(e[0],e[2]),this.pitch=-Math.asin(e[1])}constructor(e){if(super(),this.pitch=0,this.yaw=0,this.velocity_=a.R3.create(),this.movementSpeed=10,this.rotationSpeed=1,this.frictionCoefficient=.01,e&&(e.position||e.target)){var t,n;let i=null!==(t=e.position)&&void 0!==t?t:a.R3.create(0,0,-5),r=null!==(n=e.target)&&void 0!==n?n:a.R3.create(0,0,0),o=a.R3.sub(r,i);this.recalculateAngles(a.R3.normalize(o)),this.position=i}}}class u extends c{get axis(){return this.axis_}set axis(e){a.R3.copy(e,this.axis_)}get matrix(){return super.matrix}set matrix(e){super.matrix=e,this.distance=a.R3.len(this.position)}update(e,t){var n,i;t.analog.touching?this.angularVelocity=0:this.angularVelocity*=Math.pow(this.frictionCoefficient,e);let r=a.R3.create();a.R3.addScaled(r,this.right,t.analog.x,r),a.R3.addScaled(r,this.up,-t.analog.y,r);let o=a.R3.cross(r,this.back),s=a.R3.len(o);s>1e-7&&(this.axis=a.R3.scale(o,1/s),this.angularVelocity=s*this.rotationSpeed);let c=this.angularVelocity*e;return Math.abs(c)>1e-7&&(this.back=a.R3.normalize((n=this.back,i=this.axis,a.R3.transformMat4Upper3x3(n,a._E.rotation(i,c)))),this.recalcuateRight(),this.recalcuateUp()),0!==t.analog.zoom&&(this.distance*=1+t.analog.zoom*this.zoomSpeed),this.position=a.R3.scale(this.back,this.distance),this.view=a._E.invert(this.matrix),this.view}recalcuateRight(){this.right=a.R3.normalize(a.R3.cross(this.up,this.back))}recalcuateUp(){this.up=a.R3.normalize(a.R3.cross(this.back,this.right))}constructor(e){super(),this.distance=0,this.angularVelocity=0,this.axis_=a.R3.create(),this.rotationSpeed=1,this.zoomSpeed=.1,this.frictionCoefficient=1e-4,e&&e.position&&(this.position=e.position,this.distance=a.R3.len(this.position),this.back=a.R3.normalize(this.position),this.recalcuateRight(),this.recalcuateUp())}}let m={name:"src/sample/cameras/input.ts".substring(19),contents:"// Information about this file, used by the sample UI\nexport const inputSourceInfo = {\n  name: __filename.substring(__dirname.length + 1),\n  contents: __SOURCE__,\n};\n\n// Input holds as snapshot of input state\nexport default interface Input {\n  // Digital input (e.g keyboard state)\n  readonly digital: {\n    readonly forward: boolean;\n    readonly backward: boolean;\n    readonly left: boolean;\n    readonly right: boolean;\n    readonly up: boolean;\n    readonly down: boolean;\n  };\n  // Analog input (e.g mouse, touchscreen)\n  readonly analog: {\n    readonly x: number;\n    readonly y: number;\n    readonly zoom: number;\n    readonly touching: boolean;\n  };\n}\n\n// InputHandler is a function that when called, returns the current Input state.\nexport type InputHandler = () => Input;\n\n// createInputHandler returns an InputHandler by attaching event handlers to the window.\nexport function createInputHandler(window: Window): InputHandler {\n  const digital = {\n    forward: false,\n    backward: false,\n    left: false,\n    right: false,\n    up: false,\n    down: false,\n  };\n  const analog = {\n    x: 0,\n    y: 0,\n    zoom: 0,\n  };\n  let mouseDown = false;\n\n  const setDigital = (e: KeyboardEvent, value: boolean) => {\n    switch (e.code) {\n      case 'KeyW':\n        digital.forward = value;\n        e.preventDefault();\n        e.stopPropagation();\n        break;\n      case 'KeyS':\n        digital.backward = value;\n        e.preventDefault();\n        e.stopPropagation();\n        break;\n      case 'KeyA':\n        digital.left = value;\n        e.preventDefault();\n        e.stopPropagation();\n        break;\n      case 'KeyD':\n        digital.right = value;\n        e.preventDefault();\n        e.stopPropagation();\n        break;\n      case 'Space':\n        digital.up = value;\n        e.preventDefault();\n        e.stopPropagation();\n        break;\n      case 'ShiftLeft':\n      case 'ControlLeft':\n      case 'KeyC':\n        digital.down = value;\n        e.preventDefault();\n        e.stopPropagation();\n        break;\n    }\n  };\n\n  window.addEventListener('keydown', (e) => setDigital(e, true));\n  window.addEventListener('keyup', (e) => setDigital(e, false));\n  window.addEventListener('mousedown', () => {\n    mouseDown = true;\n  });\n  window.addEventListener('mouseup', () => {\n    mouseDown = false;\n  });\n  window.addEventListener('mousemove', (e) => {\n    mouseDown = (e.buttons & 1) !== 0;\n    if (mouseDown) {\n      analog.x += e.movementX;\n      analog.y += e.movementY;\n    }\n  });\n  window.addEventListener(\n    'wheel',\n    (e) => {\n      mouseDown = (e.buttons & 1) !== 0;\n      if (mouseDown) {\n        // The scroll value varies substantially between user agents / browsers.\n        // Just use the sign.\n        analog.zoom += Math.sign(e.deltaY);\n        e.preventDefault();\n        e.stopPropagation();\n      }\n    },\n    { passive: false }\n  );\n\n  return () => {\n    const out = {\n      digital,\n      analog: {\n        x: analog.x,\n        y: analog.y,\n        zoom: analog.zoom,\n        touching: mouseDown,\n      },\n    };\n    // Clear the analog values, as these accumulate.\n    analog.x = 0;\n    analog.y = 0;\n    analog.zoom = 0;\n    return out;\n  };\n}\n"};var p="src/sample/cameras/main.ts";let h=async e=>{let t,{canvas:i,pageState:s,gui:c}=e;if(!s.active)return;let m=function(e){let t={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1},n={x:0,y:0,zoom:0},a=!1,i=(e,n)=>{switch(e.code){case"KeyW":t.forward=n,e.preventDefault(),e.stopPropagation();break;case"KeyS":t.backward=n,e.preventDefault(),e.stopPropagation();break;case"KeyA":t.left=n,e.preventDefault(),e.stopPropagation();break;case"KeyD":t.right=n,e.preventDefault(),e.stopPropagation();break;case"Space":t.up=n,e.preventDefault(),e.stopPropagation();break;case"ShiftLeft":case"ControlLeft":case"KeyC":t.down=n,e.preventDefault(),e.stopPropagation()}};return e.addEventListener("keydown",e=>i(e,!0)),e.addEventListener("keyup",e=>i(e,!1)),e.addEventListener("mousedown",()=>{a=!0}),e.addEventListener("mouseup",()=>{a=!1}),e.addEventListener("mousemove",e=>{(a=(1&e.buttons)!=0)&&(n.x+=e.movementX,n.y+=e.movementY)}),e.addEventListener("wheel",e=>{(a=(1&e.buttons)!=0)&&(n.zoom+=Math.sign(e.deltaY),e.preventDefault(),e.stopPropagation())},{passive:!1}),()=>{let e={digital:t,analog:{x:n.x,y:n.y,zoom:n.zoom,touching:a}};return n.x=0,n.y=0,n.zoom=0,e}}(window),p=a.R3.create(3,2,5),h={arcball:new u({position:p}),WASD:new l({position:p})},d={type:"arcball"},f=d.type;c.add(d,"type",["arcball","WASD"]).onChange(()=>{let e=d.type;h[e].matrix=h[f].matrix,f=e});let g=await navigator.gpu.requestAdapter(),v=await g.requestDevice(),x=i.getContext("webgpu"),b=window.devicePixelRatio||1;i.width=i.clientWidth*b,i.height=i.clientHeight*b;let w=navigator.gpu.getPreferredCanvasFormat();x.configure({device:v,format:w,alphaMode:"premultiplied"});let y=v.createBuffer({size:r.zS.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0});new Float32Array(y.getMappedRange()).set(r.zS),y.unmap();let _=v.createRenderPipeline({layout:"auto",vertex:{module:v.createShaderModule({code:o}),entryPoint:"vertex_main",buffers:[{arrayStride:r.O$,attributes:[{shaderLocation:0,offset:r.v8,format:"float32x4"},{shaderLocation:1,offset:r.Ax,format:"float32x2"}]}]},fragment:{module:v.createShaderModule({code:o}),entryPoint:"fragment_main",targets:[{format:w}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),S=v.createTexture({size:[i.width,i.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),C=v.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});{let R=await fetch(new n.U(n(5685)).toString()),T=await createImageBitmap(await R.blob());t=v.createTexture({size:[T.width,T.height,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),v.queue.copyExternalImageToTexture({source:T},{texture:t},[T.width,T.height])}let P=v.createSampler({magFilter:"linear",minFilter:"linear"}),A=v.createBindGroup({layout:_.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:C}},{binding:1,resource:P},{binding:2,resource:t.createView()}]}),V={colorAttachments:[{view:void 0,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:S.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},M=i.width/i.height,E=a._E.perspective(2*Math.PI/5,M,1,100),k=a._E.create(),U=Date.now();requestAnimationFrame(function e(){let t=Date.now(),n=(t-U)/1e3;if(U=t,!s.active)return;let i=function(e){let t=h[d.type],n=t.update(e,m());return a._E.multiply(E,n,k),k}(n);v.queue.writeBuffer(C,0,i.buffer,i.byteOffset,i.byteLength),V.colorAttachments[0].view=x.getCurrentTexture().createView();let o=v.createCommandEncoder(),c=o.beginRenderPass(V);c.setPipeline(_),c.setBindGroup(0,A),c.setVertexBuffer(0,y),c.draw(r.MO),c.end(),v.queue.submit([o.finish()]),requestAnimationFrame(e)})},d=()=>(0,i.Tl)({name:"Cameras",description:"This example provides example camera implementations",gui:!0,init:h,sources:[{name:p.substring(19),contents:"import { mat4, vec3 } from 'wgpu-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\nimport cubeWGSL from './cube.wgsl';\nimport { ArcballCamera, WASDCamera, cameraSourceInfo } from './camera';\nimport { createInputHandler, inputSourceInfo } from './input';\n\nconst init: SampleInit = async ({ canvas, pageState, gui }) => {\n  if (!pageState.active) {\n    return;\n  }\n\n  // The input handler\n  const inputHandler = createInputHandler(window);\n\n  // The camera types\n  const initialCameraPosition = vec3.create(3, 2, 5);\n  const cameras = {\n    arcball: new ArcballCamera({ position: initialCameraPosition }),\n    WASD: new WASDCamera({ position: initialCameraPosition }),\n  };\n\n  // GUI parameters\n  const params: { type: 'arcball' | 'WASD' } = {\n    type: 'arcball',\n  };\n\n  // Callback handler for camera mode\n  let oldCameraType = params.type;\n  gui.add(params, 'type', ['arcball', 'WASD']).onChange(() => {\n    // Copy the camera matrix from old to new\n    const newCameraType = params.type;\n    cameras[newCameraType].matrix = cameras[oldCameraType].matrix;\n    oldCameraType = newCameraType;\n  });\n\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n  const context = canvas.getContext('webgpu') as GPUCanvasContext;\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  canvas.width = canvas.clientWidth * devicePixelRatio;\n  canvas.height = canvas.clientHeight * devicePixelRatio;\n  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    alphaMode: 'premultiplied',\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: cubeWGSL,\n      }),\n      entryPoint: 'vertex_main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: cubeWGSL,\n      }),\n      entryPoint: 'fragment_main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n      cullMode: 'back',\n    },\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: [canvas.width, canvas.height],\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const uniformBufferSize = 4 * 16; // 4x4 matrix\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  // Fetch the image and upload it into a GPUTexture.\n  let cubeTexture: GPUTexture;\n  {\n    const response = await fetch(\n      new URL('../../../assets/img/Di-3d.png', import.meta.url).toString()\n    );\n    const imageBitmap = await createImageBitmap(await response.blob());\n\n    cubeTexture = device.createTexture({\n      size: [imageBitmap.width, imageBitmap.height, 1],\n      format: 'rgba8unorm',\n      usage:\n        GPUTextureUsage.TEXTURE_BINDING |\n        GPUTextureUsage.COPY_DST |\n        GPUTextureUsage.RENDER_ATTACHMENT,\n    });\n    device.queue.copyExternalImageToTexture(\n      { source: imageBitmap },\n      { texture: cubeTexture },\n      [imageBitmap.width, imageBitmap.height]\n    );\n  }\n\n  // Create a sampler with linear filtering for smooth interpolation.\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: sampler,\n      },\n      {\n        binding: 2,\n        resource: cubeTexture.createView(),\n      },\n    ],\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  const aspect = canvas.width / canvas.height;\n  const projectionMatrix = mat4.perspective(\n    (2 * Math.PI) / 5,\n    aspect,\n    1,\n    100.0\n  );\n  const modelViewProjectionMatrix = mat4.create();\n\n  function getModelViewProjectionMatrix(deltaTime: number) {\n    const camera = cameras[params.type];\n    const viewMatrix = camera.update(deltaTime, inputHandler());\n    mat4.multiply(projectionMatrix, viewMatrix, modelViewProjectionMatrix);\n    return modelViewProjectionMatrix as Float32Array;\n  }\n\n  let lastFrameMS = Date.now();\n\n  function frame() {\n    const now = Date.now();\n    const deltaTime = (now - lastFrameMS) / 1000;\n    lastFrameMS = now;\n\n    if (!pageState.active) {\n      // Sample is no longer the active page.\n      return;\n    }\n\n    const modelViewProjection = getModelViewProjectionMatrix(deltaTime);\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      modelViewProjection.buffer,\n      modelViewProjection.byteOffset,\n      modelViewProjection.byteLength\n    );\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(cubeVertexCount);\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst TexturedCube: () => JSX.Element = () =>\n  makeSample({\n    name: 'Cameras',\n    description: 'This example provides example camera implementations',\n    gui: true,\n    init,\n    sources: [\n      {\n        name: __filename.substring(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      cameraSourceInfo,\n      inputSourceInfo,\n      {\n        name: '../../shaders/cube.wgsl',\n        contents: cubeWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default TexturedCube;\n"},s,m,{name:"../../shaders/cube.wgsl",contents:o,editable:!0},{name:"../../meshes/cube.ts",contents:n(2448).Z}],filename:p});var f=d},9147:function(e){e.exports={canvasContainer:"SampleLayout_canvasContainer__zRR_l",sourceFileNav:"SampleLayout_sourceFileNav__ml48P",sourceFileContainer:"SampleLayout_sourceFileContainer__3s84x"}},2448:function(e,t){"use strict";t.Z="export const cubeVertexSize = 4 * 10; // Byte size of one cube vertex.\nexport const cubePositionOffset = 0;\nexport const cubeColorOffset = 4 * 4; // Byte offset of cube vertex color attribute.\nexport const cubeUVOffset = 4 * 8;\nexport const cubeVertexCount = 36;\n\n// prettier-ignore\nexport const cubeVertexArray = new Float32Array([\n  // float4 position, float4 color, float2 uv,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, -1, 1, 1,   1, 0, 1, 1,  1, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  1, -1, -1, 1,  1, 0, 0, 1,  1, 0,\n\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  1, 1, 1, 1,    1, 1, 1, 1,  1, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n  -1, 1, -1, 1,  0, 1, 0, 1,  0, 0,\n  -1, 1, 1, 1,   0, 1, 1, 1,  0, 1,\n  1, 1, -1, 1,   1, 1, 0, 1,  1, 0,\n\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  -1, -1, -1, 1, 0, 0, 0, 1,  0, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n  -1, 1, 1, 1,   0, 1, 1, 1,  1, 1,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,\n  -1, -1, 1, 1,  0, 0, 1, 1,  1, 0,\n  1, -1, 1, 1,   1, 0, 1, 1,  0, 0,\n  1, 1, 1, 1,    1, 1, 1, 1,  0, 1,\n\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,\n  -1, -1, -1, 1, 0, 0, 0, 1,  1, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n  1, 1, -1, 1,   1, 1, 0, 1,  0, 0,\n  1, -1, -1, 1,  1, 0, 0, 1,  0, 1,\n  -1, 1, -1, 1,  0, 1, 0, 1,  1, 0,\n]);\n"},5685:function(e,t,n){"use strict";e.exports=n.p+"static/assets/img/Di-3d.ba319100a0ec2120.png"}}]);