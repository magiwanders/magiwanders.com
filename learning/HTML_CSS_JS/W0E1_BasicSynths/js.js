var c = new AudioContext
var o = c.createOscillator()
o.connect(c.destination)

var c1 = new AudioContext
var o1 = c1.createOscillator()
o1.connect(c1.destination)

function play() {
  o.start();
}

function playA() {
  o.frequency.value = 440
}

function playB() {
  o.frequency.value = 440 * semitone(2)
}

function playC() {
  o.frequency.value = 440 * semitone(3)
}

function semitone(c) {
  return Math.pow(2, c/12)
}

function stop() {
  o.stop()
}

function randomNote() {
  o1.frequency.value = 1000 * Math.random()
}

function startRandom() {
  o1.start()
  setInterval(randomNote(), 100) // Does not work
}

function stopRandom() {
  o1.stop()
}
