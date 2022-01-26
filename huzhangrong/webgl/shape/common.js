// 根据源代码创建着色器对象
function createShader(gl, type, source) {
	const shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	return shader;
}

function createProgramFun(vertexShaderSource, fragmentShaderSource) {
	// 获取 canvas 并设置尺寸
	const canvas = document.querySelector('#canvas');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	// 获取 webgl 上下文
	const gl = canvas.getContext('webgl');
	// 创建顶点着色器对象
	const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
	// 创建片元着色器对象
	const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
	// 创建 webgl 程序对象
	const program = gl.createProgram();
	// 绑定顶点着色器
	gl.attachShader(program, vertexShader);
	// 绑定片元着色器
	gl.attachShader(program, fragmentShader);
	// 链接程序
	gl.linkProgram(program);
	// 使用程序
	gl.useProgram(program);
	return {
		program,
		gl
	};
}
