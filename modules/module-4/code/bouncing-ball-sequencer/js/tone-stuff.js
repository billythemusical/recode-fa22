// Make a synth in Tone.js and connect to speakers
// We will use two synths - one for each axis x and y

const synthParams = {
    oscillator: {
        0: 'triangle', 
        1: 'sawtooth', 
        2: 'sine', 
        3: 'square',
    },
    envelope: {
        attack: 0.001,
        decay: 0.001,
        sustain: 0.3,
        release: 0.3
    },
    filter: 3000,
}

// A PolySynth can play multiple notes at once, aka is polyphonic
const synth = new Tone.PolySynth(synthParams)
// A audio filter to control the tone
const filter = new Tone.Filter(8000, "lowpass").toMaster()
// Connect the synth to the filter which is connected to the master output
synth.connect(filter)

// An audio feedback delay effect
const delayParams = { 
    delayTime: 1.0, 
    feedback: 0.0, 
    wet: 0.0
}
const delay = new Tone.FeedbackDelay(delayParams).toMaster()
// Connect the filter to the delay as the synth is already going to filter
filter.connect(delay)

// Start with the volume down 6 db to avoid distortion
Tone.Master.volume.value = -6

