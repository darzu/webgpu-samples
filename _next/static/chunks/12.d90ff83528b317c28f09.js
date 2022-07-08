(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"2UOq":function(e,n){e.exports="/webgpu-samples/_next/static/492338bd866e6ea346579de8f6bc585c.jpg"},GYrK:function(e,n){e.exports="/webgpu-samples/_next/static/9767b4089e4c1acb1df717dce9c9884f.jpg"},Mb7E:function(e,n){e.exports="/webgpu-samples/_next/static/65768dadf05d5bcf456e005571f3e2da.jpg"},PZk9:function(e,n,t){"use strict";n.a="@group(0) @binding(1) var mySampler: sampler;\r\n@group(0) @binding(2) var myTexture: texture_cube<f32>;\r\n\r\n@fragment\r\nfn main(@location(0) fragUV: vec2<f32>,\r\n        @location(1) fragPosition: vec4<f32>) -> @location(0) vec4<f32> {\r\n  // Our camera and the skybox cube are both centered at (0, 0, 0)\r\n  // so we can use the cube geomtry position to get viewing vector to sample the cube texture.\r\n  // The magnitude of the vector doesn't matter.\r\n  var cubemapVec = fragPosition.xyz - vec3<f32>(0.5, 0.5, 0.5);\r\n  return textureSample(myTexture, mySampler, cubemapVec);\r\n}\r\n"},WG3L:function(e,n){e.exports="/webgpu-samples/_next/static/616e668f9dcfa869ea6aeaa66e04b759.jpg"},XOX6:function(e,n){e.exports="/webgpu-samples/_next/static/8b7b4c60317e0ba6816f30c3d05024e7.jpg"},jzbf:function(e,n,t){"use strict";t.r(n),function(e,r){var a=t("o0o1"),i=t.n(a),o=t("HaE+"),s=t("IOcx"),c=t("8i9l"),u=t("1uVF"),m=t("8N3a"),p=t("PZk9"),d=function(){var e=Object(o.a)(i.a.mark((function e(n){var r,a,o,c,d,f,l,g,b,x,h,v,w,P,T,y,S,M,B,E,U,V,C,G,R,_,A,O;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O=function(){if(r.current){A(),o.queue.writeBuffer(S,0,G.buffer,G.byteOffset,G.byteLength),E.colorAttachments[0].view=c.getCurrentTexture().createView();var e=o.createCommandEncoder(),n=e.beginRenderPass(E);n.setPipeline(b),n.setVertexBuffer(0,g),n.setBindGroup(0,B),n.draw(u.d,1,0,0),n.end(),o.queue.submit([e.finish()]),requestAnimationFrame(O)}},A=function(){var e=Date.now()/800;s.a.rotate(_,R,Math.PI/10*Math.sin(e),s.b.fromValues(1,0,0)),s.a.rotate(_,_,.2*e,s.b.fromValues(0,1,0)),s.a.multiply(G,_,C),s.a.multiply(G,V,G)},r=n.canvasRef,e.next=5,navigator.gpu.requestAdapter();case 5:return a=e.sent,e.next=8,a.requestDevice();case 8:if(o=e.sent,null!==r.current){e.next=11;break}return e.abrupt("return");case 11:return c=r.current.getContext("webgpu"),d=window.devicePixelRatio||1,f=[r.current.clientWidth*d,r.current.clientHeight*d],l=c.getPreferredFormat(a),c.configure({device:o,format:l,size:f}),g=o.createBuffer({size:u.c.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(g.getMappedRange()).set(u.c),g.unmap(),b=o.createRenderPipeline({layout:"auto",vertex:{module:o.createShaderModule({code:m.a}),entryPoint:"main",buffers:[{arrayStride:u.e,attributes:[{shaderLocation:0,offset:u.a,format:"float32x4"},{shaderLocation:1,offset:u.b,format:"float32x2"}]}]},fragment:{module:o.createShaderModule({code:p.a}),entryPoint:"main",targets:[{format:l}]},primitive:{topology:"triangle-list",cullMode:"none"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),x=o.createTexture({size:f,format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),v=[t("Mb7E"),t("GYrK"),t("2UOq"),t("XOX6"),t("rqp2"),t("WG3L")],w=v.map((function(e){var n=document.createElement("img");return n.src=e,n.decode().then((function(){return createImageBitmap(n)}))})),e.next=25,Promise.all(w);case 25:for(P=e.sent,h=o.createTexture({dimension:"2d",size:[P[0].width,P[0].height,6],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),T=0;T<P.length;T++)y=P[T],o.queue.copyExternalImageToTexture({source:y},{texture:h,origin:[0,0,T]},[y.width,y.height]);64,S=o.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),M=o.createSampler({magFilter:"linear",minFilter:"linear"}),B=o.createBindGroup({layout:b.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:S,offset:0,size:64}},{binding:1,resource:M},{binding:2,resource:h.createView({dimension:"cube"})}]}),E={colorAttachments:[{view:void 0,loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:x.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},U=f[0]/f[1],V=s.a.create(),s.a.perspective(V,2*Math.PI/5,U,1,3e3),C=s.a.create(),s.a.scale(C,C,s.b.fromValues(1e3,1e3,1e3)),G=s.a.create(),R=s.a.create(),_=s.a.create(),requestAnimationFrame(O);case 42:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){return Object(c.a)({name:"Cubemap",description:"This example shows how to render and sample from a cubemap texture.",init:d,sources:[{name:e.substr(r.length+1),contents:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport basicVertWGSL from '../../shaders/basic.vert.wgsl';\nimport sampleCubemapWGSL from './sampleCubemap.frag.wgsl';\n\nconst init: SampleInit = async ({ canvasRef }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n  const context = canvasRef.current.getContext('webgpu');\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  const presentationSize = [\n    canvasRef.current.clientWidth * devicePixelRatio,\n    canvasRef.current.clientHeight * devicePixelRatio,\n  ];\n  const presentationFormat = context.getPreferredFormat(adapter);\n\n  context.configure({\n    device,\n    format: presentationFormat,\n    size: presentationSize,\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: basicVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: sampleCubemapWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Since we are seeing from inside of the cube\n      // and we are using the regular cube geomtry data with outward-facing normals,\n      // the cullMode should be 'front' or 'none'.\n      cullMode: 'none',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: presentationSize,\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  // Fetch the 6 separate images for negative/positive x, y, z axis of a cubemap\n  // and upload it into a GPUTexture.\n  let cubemapTexture: GPUTexture;\n  {\n    // The order of the array layers is [+X, -X, +Y, -Y, +Z, -Z]\n    const imgSrcs = [\n      require(`../../../assets/img/cubemap/posx.jpg`),\n      require(`../../../assets/img/cubemap/negx.jpg`),\n      require(`../../../assets/img/cubemap/posy.jpg`),\n      require(`../../../assets/img/cubemap/negy.jpg`),\n      require(`../../../assets/img/cubemap/posz.jpg`),\n      require(`../../../assets/img/cubemap/negz.jpg`),\n    ];\n    const promises = imgSrcs.map((src) => {\n      const img = document.createElement('img');\n      img.src = src;\n      return img.decode().then(() => createImageBitmap(img));\n    });\n    const imageBitmaps = await Promise.all(promises);\n\n    cubemapTexture = device.createTexture({\n      dimension: '2d',\n      // Create a 2d array texture.\n      // Assume each image has the same size.\n      size: [imageBitmaps[0].width, imageBitmaps[0].height, 6],\n      format: 'rgba8unorm',\n      usage:\n        GPUTextureUsage.TEXTURE_BINDING |\n        GPUTextureUsage.COPY_DST |\n        GPUTextureUsage.RENDER_ATTACHMENT,\n    });\n\n    for (let i = 0; i < imageBitmaps.length; i++) {\n      const imageBitmap = imageBitmaps[i];\n      device.queue.copyExternalImageToTexture(\n        { source: imageBitmap },\n        { texture: cubemapTexture, origin: [0, 0, i] },\n        [imageBitmap.width, imageBitmap.height]\n      );\n    }\n  }\n\n  const uniformBufferSize = 4 * 16; // 4x4 matrix\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n          offset: 0,\n          size: uniformBufferSize,\n        },\n      },\n      {\n        binding: 1,\n        resource: sampler,\n      },\n      {\n        binding: 2,\n        resource: cubemapTexture.createView({\n          dimension: 'cube',\n        }),\n      },\n    ],\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  const aspect = presentationSize[0] / presentationSize[1];\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 3000);\n\n  const modelMatrix = mat4.create();\n  mat4.scale(modelMatrix, modelMatrix, vec3.fromValues(1000, 1000, 1000));\n  const modelViewProjectionMatrix = mat4.create() as Float32Array;\n  const viewMatrix = mat4.create();\n\n  const tmpMat4 = mat4.create();\n\n  // Comppute camera movement:\n  // It rotates around Y axis with a slight pitch movement.\n  function updateTransformationMatrix() {\n    const now = Date.now() / 800;\n\n    mat4.rotate(\n      tmpMat4,\n      viewMatrix,\n      (Math.PI / 10) * Math.sin(now),\n      vec3.fromValues(1, 0, 0)\n    );\n    mat4.rotate(tmpMat4, tmpMat4, now * 0.2, vec3.fromValues(0, 1, 0));\n\n    mat4.multiply(modelViewProjectionMatrix, tmpMat4, modelMatrix);\n    mat4.multiply(\n      modelViewProjectionMatrix,\n      projectionMatrix,\n      modelViewProjectionMatrix\n    );\n  }\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    updateTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      modelViewProjectionMatrix.buffer,\n      modelViewProjectionMatrix.byteOffset,\n      modelViewProjectionMatrix.byteLength\n    );\n\n    renderPassDescriptor.colorAttachments[0].view = context\n      .getCurrentTexture()\n      .createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n    passEncoder.end();\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst CubemapCubes: () => JSX.Element = () =>\n  makeSample({\n    name: 'Cubemap',\n    description:\n      'This example shows how to render and sample from a cubemap texture.',\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/basic.vert.wgsl',\n        contents: basicVertWGSL,\n        editable: true,\n      },\n      {\n        name: './sampleCubemap.frag.wgsl',\n        contents: sampleCubemapWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default CubemapCubes;\n"},{name:"../../shaders/basic.vert.wgsl",contents:m.a,editable:!0},{name:"./sampleCubemap.frag.wgsl",contents:p.a,editable:!0},{name:"../../meshes/cube.ts",contents:t("MYnn").default}],filename:e})}}.call(this,"src/sample/cubemap/main.ts","src/sample/cubemap")},rqp2:function(e,n){e.exports="/webgpu-samples/_next/static/dd976f1fbac59521155344d1b0cdebc2.jpg"}}]);