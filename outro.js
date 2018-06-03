const scribble = require('scribbletune');

const getRiff = (note) => {
	return scribble.clip({
		notes: [note, 'g#3', 'a3'],
		pattern: 'x_xx'.repeat(8)
	});
};

let f = getRiff('f#3');
let e = getRiff('e3');
let d = getRiff('d3');
let c = getRiff('c#3');


scribble.midi(f.concat(e, d, c), 'outro-synth.mid');