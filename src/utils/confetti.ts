import confetti from 'canvas-confetti';

/**
 * Fires a burst of celebratory confetti matching the YEC logo colors:
 * - Amber/Orange: #ff9900
 * - Teal/Emerald: #39ae8a
 * - Crimson Red: #e31837
 * - Crisp White: #ffffff
 */
export const triggerYecConfetti = (origin?: { x: number; y: number }) => {
  const colors = ['#ff9900', '#39ae8a', '#e31837', '#ffffff', '#ffd166'];

  confetti({
    particleCount: 50,
    spread: 70,
    origin: origin || { y: 0.65 },
    colors,
    ticks: 200,
    gravity: 1.1,
    scalar: 1,
    shapes: ['square', 'circle']
  });

  // Secondary burst for rich depth
  setTimeout(() => {
    confetti({
      particleCount: 25,
      angle: 60,
      spread: 55,
      origin: { x: (origin?.x || 0.5) - 0.1, y: origin?.y || 0.65 },
      colors
    });
    confetti({
      particleCount: 25,
      angle: 120,
      spread: 55,
      origin: { x: (origin?.x || 0.5) + 0.1, y: origin?.y || 0.65 },
      colors
    });
  }, 120);
};

export const playAudioBeep = (freq = 440, type: OscillatorType = 'sine', duration = 0.12) => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    // Ignore audio context autoplay restrictions
  }
};

/**
 * Realistic retro Polaroid camera shutter click and motor ejection sound
 */
export const playCameraShutterSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();

    // Sharp mechanical shutter blade click
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(880, ctx.currentTime);
    osc1.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.04);
    gain1.gain.setValueAtTime(0.12, ctx.currentTime);
    gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start();
    osc1.stop(ctx.currentTime + 0.04);

    // Motor whirr (ejecting instant film)
    setTimeout(() => {
      try {
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(180, ctx.currentTime);
        osc2.frequency.linearRampToValueAtTime(260, ctx.currentTime + 0.2);
        gain2.gain.setValueAtTime(0.04, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start();
        osc2.stop(ctx.currentTime + 0.22);
      } catch {}
    }, 45);
  } catch {}
};
