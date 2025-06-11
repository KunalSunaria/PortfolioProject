  // Loader Animation
  const loaderAnimation = () => {
    const tl = gsap.timeline();
    
    // Animate loader content
    tl.to(".reveal.heading", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power4.out"
    })
    .to(".reveal.kunal", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power4.out"
    }, "-=0.5")
    .to(".reveal.kunal span", {
      duration: 0.5,
      color: "#0000ff",
      ease: "power2.inOut"
    })
    
    // Collapse loader and show main content
    .to(".loader", {
      duration: 1,
      height: 0,
      ease: "power4.inOut",
      onComplete: () => {
        document.querySelector(".loader").style.display = "none";
      }
    });
    
    return tl;
  };

  // Page Animations
  const initAnimations = () => {
    // Hero section animation
    gsap.from(".hero h1", {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out"
    });
    
    gsap.from(".hero h1 span", {
      duration: 1.5,
      color: "#0000ff",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
    
    gsap.from(".image img", {
      duration: 1.5,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)"
    });
    
    // About section animations
    gsap.from(".div3 h1", {
      scrollTrigger: {
        scrub:true,
        trigger: ".About",
        start: "top 80%"
      },
      duration: 1,
      x: -50,
      opacity: 0,
      ease: "power3.out"
    });
    
    gsap.from(".About p", {
      scrollTrigger: {
        scrub:true ,
        trigger: ".About",
        start: "top 70%"
      },
      duration: 1,
      x: 50,
      opacity: 0,
      delay: 0.3,
      ease: "power3.out"
    });
    
    gsap.from(".box", {
      scrollTrigger: {
        scrub:true,
        trigger: ".About",
        start: "top 60%"
      },
      duration: 1,
      y: 100,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.7)"
    });

  };

  // Initialize everything when page loads
  document.addEventListener("DOMContentLoaded", () => {
    // Set initial states
    gsap.set(".reveal.heading", { y: 50, opacity: 0 });
    gsap.set(".reveal.kunal", { y: 50, opacity: 0 });
    gsap.set(".loader", { height: "100vh" });
    
    // Run loader animation first
    loaderAnimation().then(() => {
      // Initialize scroll animations after loader completes
      initAnimations();
      
      gsap.defaults({ ease: "power2.out" });
    
    // Animation timeline for the header
    const headerTL = gsap.timeline({
        scrollTrigger: {
          scrub:true,
            trigger: ".services-header",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
    headerTL
        .from(".section-subtitle", {
            y: 30,
            opacity: 0,
            duration: 0.6
        })
        .from(".section-title", {
            y: 40,
            opacity: 0,
            duration: 0.8
        }, "-=0.4")
        .from(".divider", {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1.2
        }, "-=0.6");
    
    // Card animations - staggered entrance
    gsap.utils.toArray(".service-card").forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
              scrub:true,
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none none"
            },
            y: 80,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.15
        });
        
        // Hover effect enhancement
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3
            });
        });
    });
    
    // Footer animation
    gsap.from(".services-footer", {
        scrollTrigger: {
            scrub:true,
            trigger: ".services-footer",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1
    });
    
    // Bonus: Animated background elements (subtle, non-intrusive)
    const bgShapes = document.createElement('div');
    bgShapes.className = 'bg-shapes';
    document.querySelector('.services').prepend(bgShapes);
    
    for (let i = 0; i < 5; i++) {
        const shape = document.createElement('div');
        shape.className = `bg-shape bg-shape-${i}`;
        bgShapes.appendChild(shape);
        
        gsap.to(shape, {
            scrollTrigger: {
              scrub:true,
                trigger: ".services",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            },
            x: i % 2 === 0 ? -20 : 20,
            y: i % 2 === 0 ? 30 : -30,
            rotation: i * 10,
            ease: "none"
        });
    }
    gsap.utils.toArray(".skill-category").forEach((category, i) => {
      gsap.from(category, {
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 70%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: "back.out(1.2)"
      });
    });

    // 3. PROJECTS SECTION
    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: ".projects-container",
          start: "top 75%",
          toggleActions: "play none none none"
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: "power2.out"
      });
    });

    // 4. TESTIMONIALS SECTION
    gsap.utils.toArray(".testimonial-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 75%",
          toggleActions: "play none none none"
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: "power2.out"
      });
    });

    // 5. MICRO-INTERACTIONS
    const cursor = document.querySelector('.micro-interaction');
    if (cursor) {
      // Make cursor visible
      gsap.to(cursor, { opacity: 0.7, duration: 1 });
      
      // Cursor follow
      document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
          x: e.clientX - 10,
          y: e.clientY - 10,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      // Hover effects
      const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-card, .testimonial-card');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          gsap.to(cursor, {
            scale: 2,
            backgroundColor: "#76f4b1",
            duration: 0.2
          });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(cursor, {
            scale: 1,
            backgroundColor: "#6ec3f4",
            duration: 0.2
          });
        });
      });
    }
      // Initialize ScrollTrigger
      ScrollTrigger.refresh();
    });

  });
  // Add this inside your existing DOMContentLoaded function
document.addEventListener('DOMContentLoaded', function() {
  // Check if contact section exists
  const contactSection = document.getElementById('contact');
  if (!contactSection) return;

  // Create timeline
  const contactTL = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });

  // Animation sequence
  contactTL
    .from('.contact-container', { 
      opacity: 0,
      y: 40,
      duration: 0.8
    })
    .from('.contact-title', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, '-=0.4')
    .from('.contact-subtitle', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, '-=0.3')
    .from('.form-group', {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.6
    }, '-=0.3')
    .from('.submit-btn', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, '-=0.2')
    .from('.contact-footer', {
      opacity: 0,
      y: 20,
      duration: 0.6
    }, '-=0.2');

  // Add subtle hover effects
  gsap.set('.form-input, .form-textarea', {
    boxShadow: '0 0 0 0 rgba(100, 149, 237, 0)'
  });

  const inputElements = document.querySelectorAll('.form-input, .form-textarea');
  inputElements.forEach(input => {
    input.addEventListener('focus', () => {
      gsap.to(input, {
        boxShadow: '0 0 0 2px rgba(100, 149, 237, 0.3)',
        duration: 0.3
      });
    });
    input.addEventListener('blur', () => {
      gsap.to(input, {
        boxShadow: '0 0 0 0 rgba(100, 149, 237, 0)',
        duration: 0.3
      });
    });
  });
});
const cursor = document.querySelector('.micro-interaction');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Project card hover effects
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                cursor.style.background = 'var(--highlight-blue)';
                cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            });
            card.addEventListener('mouseleave', () => {
                cursor.style.background = 'var(--highlight-green)';
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
        
        // Link hover effects
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            link.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });

    
  


    