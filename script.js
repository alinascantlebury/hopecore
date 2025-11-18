const orbs = document.querySelectorAll('.orb');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const screenHeight = window.innerHeight;

  orbs.forEach((orb, index) => {
    const triggerPoint = (index + 1) * screenHeight * 0.35;
    if (scrollY > triggerPoint) {
      orb.style.transform = 'scale(1.6)';
    } else {
      orb.style.transform = 'scale(0)';
    }
  });
});

// Fireflies from before stays unchanged
const container = document.getElementById("fireflies-container");
const fireflyCount = 22;
for (let i = 0; i < fireflyCount; i++){
  const fly=document.createElement("div");
  fly.className="firefly";
  fly.style.top=`${Math.random()*100}vh`;
  fly.style.left=`${Math.random()*100}vw`;
  fly.style.setProperty("--dx", `${Math.random()*200-100}px`);
  fly.style.setProperty("--dy", `${Math.random()*-200}px`);
  container.appendChild(fly);
}
