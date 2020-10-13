c = new AudioContext
o = c.createOscillator()
g = c.createGain()
o.connect(g)
g.connect(c.destination)
g.gain.value = 0
o.start()

attack = 0.05
release = 0.1
sustain = 0.1

function set_attack(time) {
  attack = time;
}

function play_note() {
  c.resume() // Must  be resumed explicitly because the script is inside of codepen.

  // g.gain.setValueAtTime(0.2, c.currentTime)
  // g.gain.setValueAtTime(0, c.currentTime+0.2)

  g.gain.setTargetAtTime(0.2, c.currentTime, attack) // Lower the last number, the shorter the attack.
  g.gain.setTargetAtTime(0, c.currentTime+sustain, release) // Higher the last number, the lionger the release.
}
