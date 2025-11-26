    // Firefly generation
    const container = document.getElementById("fireflies-container");
    const fireflyCount = 28;
    
    for (let i = 0; i < fireflyCount; i++) {
      const fly = document.createElement("div");
      fly.className = "firefly";
      
      fly.style.top = `${Math.random() * 120}vh`;
      fly.style.left = `${Math.random() * 100}vw`;
      
      const driftX = (Math.random() - 0.5) * 200;
      const driftY = -80 - Math.random() * 120;
      fly.style.setProperty("--dx", `${driftX}px`);
      fly.style.setProperty("--dy", `${driftY}px`);
      fly.style.setProperty("--delay", `${Math.random() * 4}s`);
      
      container.appendChild(fly);
    }

    // Begin journey function
    function beginJourney() {
      const welcomeSeq = document.querySelector('.welcome-sequence');
      const mainContent = document.querySelector('.main-content');
      const scrollHint = document.querySelector('.scroll-hint');
      
      welcomeSeq.style.transition = 'opacity 1.5s ease-out';
      welcomeSeq.style.opacity = '0';
      
      setTimeout(() => {
        welcomeSeq.style.display = 'none';
        mainContent.classList.add('visible');
        scrollHint.classList.add('visible');
      }, 1500);
    }

    // Auto-begin after 10 seconds if user doesn't click
    setTimeout(beginJourney, 10000);

    // Orb reveal on scroll
    const orbs = document.querySelectorAll('.orb');
    const scrollHint = document.querySelector('.scroll-hint');
    
    function updateOrbs() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hide scroll hint after scrolling
      if (scrollY > windowHeight * 0.3) {
        scrollHint.style.opacity = '0';
      }
      
      orbs.forEach((orb, index) => {
        const orbTop = orb.offsetTop + orb.offsetParent.offsetTop;
        const triggerPoint = scrollY + windowHeight * 0.75;
        
        if (triggerPoint > orbTop) {
          setTimeout(() => {
            orb.classList.add('visible');
          }, index * 80);
        } else {
          orb.classList.remove('visible');
        }
      });
    }
    
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(updateOrbs);
    });
    
    updateOrbs();