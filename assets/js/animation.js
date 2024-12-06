const wrap = document.querySelector('.wrap');
const totalParticles = 300; // Adjust for more or fewer particles
const orbSize = 100; // Size of the orb
const baseHue = 180; // Color base for the particles

for (let i = 0; i < totalParticles; i++) {
  const particle = document.createElement('div');
  particle.className = 'c';

  // Random angles and hues for particles
  const zAngle = Math.random() * 360;
  const yAngle = Math.random() * 360;
  const hue = baseHue + (40 / totalParticles) * i;

  // Set styles and animation for each particle
  particle.style.animation = `orbit${i} 14s infinite`;
  particle.style.animationDelay = `${i * 0.01}s`;
  particle.style.backgroundColor = `hsla(${hue}, 100%, 50%, 1)`;

  // Generate keyframes dynamically
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
    @keyframes orbit${i} {
      20% { opacity: 1; }
      30% {
        transform: rotateZ(-${zAngle}deg) rotateY(${yAngle}deg) translateX(${orbSize}px) rotateZ(${zAngle}deg);
      }
      80% {
        transform: rotateZ(-${zAngle}deg) rotateY(${yAngle}deg) translateX(${orbSize}px) rotateZ(${zAngle}deg);
        opacity: 1;
      }
      100% {
        transform: rotateZ(-${zAngle}deg) rotateY(${yAngle}deg) translateX(${orbSize * 3}px) rotateZ(${zAngle}deg);
      }
    }
  `, styleSheet.cssRules.length);

  wrap.appendChild(particle);
}
