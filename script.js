// Mobile menu open/close and body scroll lock
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavClose = document.getElementById('mobile-nav-close');

    if (hamburger && mobileNav && mobileNavClose) {
        function openMobileNav() {
            mobileNav.classList.add('active');
            mobileNav.setAttribute('aria-hidden', 'false');
            hamburger.setAttribute('aria-expanded', 'true');
            document.body.classList.add('mobile-nav-open');
        }

        function closeMobileNav() {
            mobileNav.classList.remove('active');
            mobileNav.setAttribute('aria-hidden', 'true');
            hamburger.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('mobile-nav-open');
        }

        hamburger.addEventListener('click', openMobileNav);
        mobileNavClose.addEventListener('click', closeMobileNav);

        // Close menu on ESC key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
                closeMobileNav();
            }
        });

        // Close menu when clicking outside content
        mobileNav.addEventListener('click', function (e) {
            if (e.target === mobileNav) {
                closeMobileNav();
            }
        });
    }
});
// Initialize AOS Animation Library
document.addEventListener("DOMContentLoaded", () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // GSAP ScrollTrigger Animations for Luxury About Section
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Parallax effect for the main image
        gsap.to("#luxury-main-img", {
            y: -30,
            ease: "none",
            scrollTrigger: {
                trigger: ".luxury-about",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

        // Stagger reveal for floating cards
        gsap.from(".gs-reveal", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".luxury-image-area",
                start: "top 70%"
            }
        });

        // GSAP Animations for Brand Legacy Section
        if (document.querySelector('.brand-legacy')) {
            gsap.from(".bl-img", {
                scale: 1.1,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".brand-legacy",
                    start: "top 80%"
                }
            });

            gsap.from(".bl-glass-card", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".brand-legacy",
                    start: "top 60%"
                }
            });

            const blContentElements = gsap.utils.toArray('.bl-label, .bl-heading, .bl-divider, .bl-desc, .bl-highlights li, .bl-btn');
            if (blContentElements.length > 0) {
                gsap.from(blContentElements, {
                    y: 30,
                
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".bl-content",
                        start: "top 75%"
                    }
                });
            }
            
            // Magnetic button effect for Brand Legacy section
            const btn = document.querySelector('.bl-btn');
            if (btn) {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    gsap.to(btn, {
                        x: x * 0.3,
                        y: y * 0.3,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
                
                btn.addEventListener('mouseleave', () => {
                    gsap.to(btn, {
                        x: 0,
                        y: 0,
                        duration: 0.5,
                        ease: "elastic.out(1, 0.3)"
                    });
                });
            }
        }
    }
});