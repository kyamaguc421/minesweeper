console.log("start!");
const STATUS = ['default', 'none', 'flag', 'question'];
let ns = 9;
let ms = 9;
let matrix = initMatrix(ns, ms);

new Vue({
	el: '#app',
	data: {
		states: matrix,
		classObject: {
			default: true,
			safe: false,
			flag: false,
			question: false
		},
	},
	methods: {
		onSelect: function () {
			this.classObject.default = false;
			this.classObject.false = true;
		}
	}
});

// ２次元配列の初期化
function initMatrix(N, M, val=0) {
	let matrix = new Array(N);
	for(let n = 0; n < N; n++) {
		matrix[n] = new Array(M).fill(val);
	}
	return matrix;
}


console.log("end!");