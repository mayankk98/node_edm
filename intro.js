const scribble = require('scribbletune');


// Creating Percussion sound using clip method
let perc = scribble.clip({
	notes: ['c2', 'c#2', 'd2', 'd#2'],
	pattern: 'x-x-x--x',
	sizzle: true, 	// Uses math.sine to vary the volume of the notes
	shuffle: true 	// Randomizes the notes passed
});


let perc1 = scribble.clip({
	notes: ['c2', 'c#2', 'd2', 'd#2'],
	pattern: 'x-x-x--x',
	sizzle: true, 	
	shuffle: true 	
});

scribble.midi(perc.concat(perc, perc, perc1));


// Creating the Bass clip

let bass = scribble.clip({
	notes: ['f#2'],
	pattern: 'x-'.repeat(8)
});

scribble.midi(bass);


// Creating the kick clip

let kick = scribble.clip({
	notes: ['c4'],
	pattern: 'x---'.repeat(4)
});

scribble.midi(kick);


// Creating the snare drum clip

let snare = scribble.clip({
	notes: ['c4'],
	pattern: '----x-----------'
});

scribble.midi(snare);


// Creating the clap clip

let clap = scribble.clip({
	notes: ['c4'],
	pattern: '------------x---'
});

scribble.midi(clap);


// Creating the hat clip

let hats = scribble.clip({
	notes: ['c4'],
	pattern: '--x-'.repeat(4)
});

scribble.midi(hats);


let rise = scribble.clip({
	notes: ['c4'],
	pattern: 'x'.repeat(16),
	accentMap: [5, 10, 20, 30, 40, 50, 60, 70, 80 ,90, 100, 110, 120, 120, 120, 120] // Accentuates or increases the volume of the beats gradually
});

scribble.midi(rise);




