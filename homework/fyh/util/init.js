/**
 * 
 * 初始化着色器
 * @return shaderProgram
 */
 function initShaders(gl, VertexSource, FragmentSource) {
  
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, VertexSource);
    gl.compileShader(vertexShader);

    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {//获取编译状态
        const error = gl.getShaderInfoLog(vertexShader);
        console.log("error", error);
        gl.deleteShader(vertexShader);
        return;
    }


  
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, FragmentSource);
    gl.compileShader(fragmentShader);


    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {//获取编译状态
        const error = gl.getShaderInfoLog(fragmentShader);
        console.log("error", error);
        gl.deleteShader(fragmentShader);
        return;
    }

 
    const shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);

    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);


    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        const error = gl.getProgramInfoLog(shaderProgram);
        console.log("error", error);
        gl.deleteProgram(shaderProgram);
        return;
    }

    return shaderProgram;
}


function createVBO(gl, data) {
    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    return vbo;
}

function createVAO(gl){
  const vao=gl.createVertexArray();
  gl.bindVertexArray(vao);
  return vao;
}

function createEBO(gl,data){
  var ebo = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ebo);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Int16Array(data), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
  return ebo;
}

