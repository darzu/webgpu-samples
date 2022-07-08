(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"b+lR":function(e,n,t){"use strict";n.a="@binding(1) @group(0) var mySampler: sampler;\n@binding(2) @group(0) var myTexture: texture_2d<f32>;\n\n@fragment\nfn main(\n  @location(0) fragUV: vec2<f32>,\n  @location(1) fragPosition: vec4<f32>\n) -> @location(0) vec4<f32> {\n  let texColor = textureSample(myTexture, mySampler, fragUV * 0.8 + vec2<f32>(0.1, 0.1));\n  var f : f32;\n  if (length(texColor.rgb - vec3<f32>(0.5, 0.5, 0.5)) < 0.01) {\n    f = 1.0;\n  } else {\n    f = 0.0;\n  }\n  return (1.0 - f) * texColor + f * fragPosition;\n}\n"},djvJ:function(e,n,t){"use strict";t.r(n),function(e,r){var a=t("o0o1"),i=t.n(a),o=t("HaE+"),s=t("IOcx"),c=t("8i9l"),u=t("1uVF"),f=t("8N3a"),l=t("b+lR"),m=function(){var e=Object(o.a)(i.a.mark((function e(n){var t,r,a,o,c,m,d,p,g,x,h,b,v,w,T,S,P,y,C;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C=function(){if(t.current){var e=y();a.queue.writeBuffer(h,0,e.buffer,e.byteOffset,e.byteLength);var n=o.getCurrentTexture();T.colorAttachments[0].view=n.createView();var r=a.createCommandEncoder(),i=r.beginRenderPass(T);i.setPipeline(g),i.setBindGroup(0,w),i.setVertexBuffer(0,p),i.draw(u.d,1,0,0),i.end(),r.copyTextureToTexture({texture:n},{texture:b},m),a.queue.submit([r.finish()]),requestAnimationFrame(C)}},y=function(){var e=s.a.create();s.a.translate(e,e,s.b.fromValues(0,0,-4));var n=Date.now()/1e3;s.a.rotate(e,e,1,s.b.fromValues(Math.sin(n),Math.cos(n),0));var t=s.a.create();return s.a.multiply(t,P,e),t},t=n.canvasRef,e.next=5,navigator.gpu.requestAdapter();case 5:return r=e.sent,e.next=8,r.requestDevice();case 8:if(a=e.sent,null!==t.current){e.next=11;break}return e.abrupt("return");case 11:o=t.current.getContext("webgpu"),c=window.devicePixelRatio||1,m=[t.current.clientWidth*c,t.current.clientHeight*c],d=o.getPreferredFormat(r),o.configure({device:a,format:d,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,size:m}),p=a.createBuffer({size:u.c.byteLength,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),new Float32Array(p.getMappedRange()).set(u.c),p.unmap(),g=a.createRenderPipeline({layout:"auto",vertex:{module:a.createShaderModule({code:f.a}),entryPoint:"main",buffers:[{arrayStride:u.e,attributes:[{shaderLocation:0,offset:u.a,format:"float32x4"},{shaderLocation:1,offset:u.b,format:"float32x2"}]}]},fragment:{module:a.createShaderModule({code:l.a}),entryPoint:"main",targets:[{format:d}]},primitive:{topology:"triangle-list",cullMode:"back"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),x=a.createTexture({size:m,format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),64,h=a.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),b=a.createTexture({size:m,format:d,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST}),v=a.createSampler({magFilter:"linear",minFilter:"linear"}),w=a.createBindGroup({layout:g.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:h}},{binding:1,resource:v},{binding:2,resource:b.createView()}]}),T={colorAttachments:[{view:void 0,clearValue:{r:.5,g:.5,b:.5,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:x.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},S=m[0]/m[1],P=s.a.create(),s.a.perspective(P,2*Math.PI/5,S,1,100),requestAnimationFrame(C);case 31:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.default=function(){return Object(c.a)({name:"Textured Cube",description:"This example uses the previous frame's rendering result        as the source texture for the next frame.",init:m,sources:[{name:e.substr(r.length+1),contents:"import { mat4, vec3 } from 'gl-matrix';\nimport { makeSample, SampleInit } from '../../components/SampleLayout';\n\nimport {\n  cubeVertexArray,\n  cubeVertexSize,\n  cubeUVOffset,\n  cubePositionOffset,\n  cubeVertexCount,\n} from '../../meshes/cube';\n\nimport basicVertWGSL from '../../shaders/basic.vert.wgsl';\nimport sampleSelfWGSL from './sampleSelf.frag.wgsl';\n\nconst init: SampleInit = async ({ canvasRef }) => {\n  const adapter = await navigator.gpu.requestAdapter();\n  const device = await adapter.requestDevice();\n\n  if (canvasRef.current === null) return;\n  const context = canvasRef.current.getContext('webgpu');\n\n  const devicePixelRatio = window.devicePixelRatio || 1;\n  const presentationSize = [\n    canvasRef.current.clientWidth * devicePixelRatio,\n    canvasRef.current.clientHeight * devicePixelRatio,\n  ];\n  const presentationFormat = context.getPreferredFormat(adapter);\n\n  context.configure({\n    device,\n    format: presentationFormat,\n\n    // Specify we want both RENDER_ATTACHMENT and COPY_SRC since we\n    // will copy out of the swapchain texture.\n    usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,\n    size: presentationSize,\n  });\n\n  // Create a vertex buffer from the cube data.\n  const verticesBuffer = device.createBuffer({\n    size: cubeVertexArray.byteLength,\n    usage: GPUBufferUsage.VERTEX,\n    mappedAtCreation: true,\n  });\n  new Float32Array(verticesBuffer.getMappedRange()).set(cubeVertexArray);\n  verticesBuffer.unmap();\n\n  const pipeline = device.createRenderPipeline({\n    layout: 'auto',\n    vertex: {\n      module: device.createShaderModule({\n        code: basicVertWGSL,\n      }),\n      entryPoint: 'main',\n      buffers: [\n        {\n          arrayStride: cubeVertexSize,\n          attributes: [\n            {\n              // position\n              shaderLocation: 0,\n              offset: cubePositionOffset,\n              format: 'float32x4',\n            },\n            {\n              // uv\n              shaderLocation: 1,\n              offset: cubeUVOffset,\n              format: 'float32x2',\n            },\n          ],\n        },\n      ],\n    },\n    fragment: {\n      module: device.createShaderModule({\n        code: sampleSelfWGSL,\n      }),\n      entryPoint: 'main',\n      targets: [\n        {\n          format: presentationFormat,\n        },\n      ],\n    },\n    primitive: {\n      topology: 'triangle-list',\n\n      // Backface culling since the cube is solid piece of geometry.\n      // Faces pointing away from the camera will be occluded by faces\n      // pointing toward the camera.\n      cullMode: 'back',\n    },\n\n    // Enable depth testing so that the fragment closest to the camera\n    // is rendered in front.\n    depthStencil: {\n      depthWriteEnabled: true,\n      depthCompare: 'less',\n      format: 'depth24plus',\n    },\n  });\n\n  const depthTexture = device.createTexture({\n    size: presentationSize,\n    format: 'depth24plus',\n    usage: GPUTextureUsage.RENDER_ATTACHMENT,\n  });\n\n  const uniformBufferSize = 4 * 16; // 4x4 matrix\n  const uniformBuffer = device.createBuffer({\n    size: uniformBufferSize,\n    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,\n  });\n\n  // We will copy the frame's rendering results into this texture and\n  // sample it on the next frame.\n  const cubeTexture = device.createTexture({\n    size: presentationSize,\n    format: presentationFormat,\n    usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,\n  });\n\n  // Create a sampler with linear filtering for smooth interpolation.\n  const sampler = device.createSampler({\n    magFilter: 'linear',\n    minFilter: 'linear',\n  });\n\n  const uniformBindGroup = device.createBindGroup({\n    layout: pipeline.getBindGroupLayout(0),\n    entries: [\n      {\n        binding: 0,\n        resource: {\n          buffer: uniformBuffer,\n        },\n      },\n      {\n        binding: 1,\n        resource: sampler,\n      },\n      {\n        binding: 2,\n        resource: cubeTexture.createView(),\n      },\n    ],\n  });\n\n  const renderPassDescriptor: GPURenderPassDescriptor = {\n    colorAttachments: [\n      {\n        view: undefined, // Assigned later\n\n        clearValue: { r: 0.5, g: 0.5, b: 0.5, a: 1.0 },\n        loadOp: 'clear',\n        storeOp: 'store',\n      },\n    ],\n    depthStencilAttachment: {\n      view: depthTexture.createView(),\n\n      depthClearValue: 1.0,\n      depthLoadOp: 'clear',\n      depthStoreOp: 'store',\n    },\n  };\n\n  const aspect = presentationSize[0] / presentationSize[1];\n  const projectionMatrix = mat4.create();\n  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);\n\n  function getTransformationMatrix() {\n    const viewMatrix = mat4.create();\n    mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -4));\n    const now = Date.now() / 1000;\n    mat4.rotate(\n      viewMatrix,\n      viewMatrix,\n      1,\n      vec3.fromValues(Math.sin(now), Math.cos(now), 0)\n    );\n\n    const modelViewProjectionMatrix = mat4.create();\n    mat4.multiply(modelViewProjectionMatrix, projectionMatrix, viewMatrix);\n\n    return modelViewProjectionMatrix as Float32Array;\n  }\n\n  function frame() {\n    // Sample is no longer the active page.\n    if (!canvasRef.current) return;\n\n    const transformationMatrix = getTransformationMatrix();\n    device.queue.writeBuffer(\n      uniformBuffer,\n      0,\n      transformationMatrix.buffer,\n      transformationMatrix.byteOffset,\n      transformationMatrix.byteLength\n    );\n\n    const swapChainTexture = context.getCurrentTexture();\n    renderPassDescriptor.colorAttachments[0].view = swapChainTexture.createView();\n\n    const commandEncoder = device.createCommandEncoder();\n    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);\n    passEncoder.setPipeline(pipeline);\n    passEncoder.setBindGroup(0, uniformBindGroup);\n    passEncoder.setVertexBuffer(0, verticesBuffer);\n    passEncoder.draw(cubeVertexCount, 1, 0, 0);\n    passEncoder.end();\n\n    // Copy the rendering results from the swapchain into |cubeTexture|.\n    commandEncoder.copyTextureToTexture(\n      {\n        texture: swapChainTexture,\n      },\n      {\n        texture: cubeTexture,\n      },\n      presentationSize\n    );\n\n    device.queue.submit([commandEncoder.finish()]);\n\n    requestAnimationFrame(frame);\n  }\n  requestAnimationFrame(frame);\n};\n\nconst TexturedCube: () => JSX.Element = () =>\n  makeSample({\n    name: 'Textured Cube',\n    description:\n      \"This example uses the previous frame's rendering result \\\n       as the source texture for the next frame.\",\n    init,\n    sources: [\n      {\n        name: __filename.substr(__dirname.length + 1),\n        contents: __SOURCE__,\n      },\n      {\n        name: '../../shaders/basic.vert.wgsl',\n        contents: basicVertWGSL,\n        editable: true,\n      },\n      {\n        name: './sampleSelf.frag.wgsl',\n        contents: sampleSelfWGSL,\n        editable: true,\n      },\n      {\n        name: '../../meshes/cube.ts',\n        // eslint-disable-next-line @typescript-eslint/no-var-requires\n        contents: require('!!raw-loader!../../meshes/cube.ts').default,\n      },\n    ],\n    filename: __filename,\n  });\n\nexport default TexturedCube;\n"},{name:"../../shaders/basic.vert.wgsl",contents:f.a,editable:!0},{name:"./sampleSelf.frag.wgsl",contents:l.a,editable:!0},{name:"../../meshes/cube.ts",contents:t("MYnn").default}],filename:e})}}.call(this,"src/sample/fractalCube/main.ts","src/sample/fractalCube")}}]);