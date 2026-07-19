document.addEventListener('DOMContentLoaded', () => {

    // Smooth fade configuration on page initialization
    const heroContent = document.querySelector('.hero-content-container');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(15px)';
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 150);
    }

    // Video Trigger Action handler
    const videoTrigger = document.querySelector('.hero-video-trigger');
    if (videoTrigger) {
        videoTrigger.addEventListener('click', () => {
            console.log('Open cinematic dynamic viewport modal target loaded.');
        });
    }

    // Dynamic Header Background shift on scroll mechanics
    const headerElement = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            headerElement.style.background = 'rgba(3, 15, 30, 0.95)';
            headerElement.style.backdropFilter = 'blur(10px)';
            headerElement.style.padding = '12px 40px';
            headerElement.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
        } else {
            headerElement.style.background = 'linear-gradient(to bottom, rgba(3, 15, 30, 0.8) 0%, rgba(3, 15, 30, 0) 100%)';
            headerElement.style.backdropFilter = 'none';
            headerElement.style.padding = '20px 40px';
            headerElement.style.boxShadow = 'none';
        }
    });

    /* --- Typing effect for the hero tagline --- */
    const typedEl = document.getElementById('heroTypedText');
    if (typedEl) {
        const fullText = typedEl.getAttribute('data-typed-text') || '';
        typedEl.textContent = '';
        const cursor = document.createElement('span');
        cursor.className = 'typed-cursor';
        typedEl.appendChild(cursor);

        let i = 0;
        const typeSpeed = 22;
        const typeNext = () => {
            if (i <= fullText.length) {
                typedEl.textContent = fullText.slice(0, i);
                typedEl.appendChild(cursor);
                i++;
                setTimeout(typeNext, typeSpeed);
            }
        };
        setTimeout(typeNext, 500);
    }

    /* --- Floating particle background inside the hero --- */
    const particleLayer = document.getElementById('particleLayer');
    if (particleLayer) {
        const PARTICLE_COUNT = 50;
        for (let p = 0; p < PARTICLE_COUNT; p++) {
            const dot = document.createElement('span');
            dot.className = 'particle';
            const size = Math.random() * 3 + 1.5;
            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.left = `${Math.random() * 100}%`;
            const duration = Math.random() * 20 + 10; // 10-30s
            dot.style.animationDuration = `${duration}s`;
            dot.style.animationDelay = `${Math.random() * duration}s`;
            particleLayer.appendChild(dot);
        }
    }
});
/*Hero End*/

const initTimelineAnimations = () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const iconBox = item.querySelector('.timeline-icon-box');
            if (iconBox) {
                iconBox.style.transform = 'scale(1.08)';
                iconBox.style.backgroundColor = '#0b63a3';
                iconBox.style.color = '#ffffff';
                iconBox.style.transition = 'all 0.3s ease';
            }
        });

        item.addEventListener('mouseleave', () => {
            const iconBox = item.querySelector('.timeline-icon-box');
            if (iconBox) {
                iconBox.style.transform = 'scale(1)';
                iconBox.style.backgroundColor = '#f4f8fc';
                iconBox.style.color = '#0b63a3';
            }
        });
    });
};

initTimelineAnimations();
/* --- Journey & Impact Section JS--- */

/* --- Programs & Expeditions Layout Master JS--- */

const initCardsInteraction = () => {
    const bookButtons = document.querySelectorAll('.btn-book-now');

    bookButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cardTitle = e.target.closest('.expedition-meta').querySelector('h4').innerText;
            console.log(`Booking trigger registered explicitly for: ${cardTitle}`);
        });
    });
};

initCardsInteraction();

/* --- Programs & Expeditions Layout Master JS--- */

const initDonationWidget = () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customInput = document.querySelector('.custom-amount-input');
    const amountGrid = document.querySelector('.amount-grid');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            console.log(`Frequency target context configured: ${btn.dataset.tab}`);
        });
    });

    amountButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            amountButtons.forEach(a => a.classList.remove('active'));
            btn.classList.add('active');

            if (btn.classList.contains('custom-amount-btn')) {
                amountGrid.style.marginBottom = '10px';
                customInput.style.display = 'block';
                customInput.focus();
            } else {
                amountGrid.style.marginBottom = '20px';
                customInput.style.display = 'none';
                console.log(`Fixed tier amount defined: $${btn.dataset.amount}`);
            }
        });
    });
};

initDonationWidget();

/*5555*/
const initBeforeAfterSlider = () => {
    const slider = document.getElementById('imageSlider');
    const beforeImgContainer = document.getElementById('beforeImgContainer');
    const handle = document.getElementById('sliderHandle');

    if (!slider || !beforeImgContainer || !handle) return;

    let isDragging = false;

    const updateSliderWidth = (clientX) => {
        const rect = slider.getBoundingClientRect();
        let offsetX = clientX - rect.left;

        if (offsetX < 0) offsetX = 0;
        if (offsetX > rect.width) offsetX = rect.width;

        const percentage = (offsetX / rect.width) * 100;

        beforeImgContainer.style.width = `${percentage}%`;
        handle.style.left = `${percentage}%`;
    };

    handle.addEventListener('mousedown', () => { isDragging = true; });
    window.addEventListener('mouseup', () => { isDragging = false; });

    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSliderWidth(e.clientX);
    });

    handle.addEventListener('touchstart', () => { isDragging = true; });
    window.addEventListener('touchend', () => { isDragging = false; });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        if (e.touches.length > 0) {
            updateSliderWidth(e.touches[0].clientX);
        }
    });
};

initBeforeAfterSlider();
/*666*/

const initGalleryControls = () => {
    const galleryItems = document.querySelectorAll('.gallery-item video');

    galleryItems.forEach(video => {
        video.addEventListener('loadedmetadata', () => {
            video.playbackRate = 0.95;
        });
    });

    const spotlightCards = document.querySelectorAll('.spotlight-card');
    spotlightCards.forEach(card => {
        card.addEventListener('click', () => {
            const heading = card.querySelector('h3').innerText;
            console.log(`Loading resource node reference index for: ${heading}`);
        });
    });
};

initGalleryControls();

/*777*/

const initFooterAndScrollControls = () => {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const playButtons = document.querySelectorAll('.play-overlay-btn');
    playButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const videoElement = e.target.closest('.video-preview-box').querySelector('video');
            if (videoElement) {
                if (videoElement.paused) {
                    videoElement.play();
                    btn.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
                } else {
                    videoElement.pause();
                    btn.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
                }
            }
        });
    });
};

initFooterAndScrollControls();


/*Sticky*/
window.addEventListener("scroll", function () {
    const header = document.querySelector(".site-header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/*Video hero button*/
const modal = document.getElementById("video-modal");
const openBtn = document.getElementById("open-video-modal");
const closeBtn = document.querySelector(".close-video");
const video = document.getElementById("heroVideo");

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    video.play();
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    video.pause();
    video.currentTime = 0;
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
        video.pause();
        video.currentTime = 0;
    }
});

/* =========================================================
   UPGRADE: Scroll-Reveal (IntersectionObserver + fadeInUp)
   ========================================================= */
const initScrollReveal = () => {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
};

initScrollReveal();

/* =========================================================
   UPGRADE: Counter animation for stat numbers (2s @ 60fps)
   ========================================================= */
const initCounters = () => {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const animateCounter = (el) => {
        const target = parseFloat(el.dataset.target || '0');
        const suffix = el.dataset.suffix || '';
        const duration = 2000; // 2s
        const frameRate = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameRate);
        let frame = 0;

        const ease = (t) => 1 - Math.pow(1 - t, 3); // ease-out cubic

        const counterTimer = setInterval(() => {
            frame++;
            const progress = ease(frame / totalFrames);
            const current = Math.floor(target * progress);
            el.textContent = current.toLocaleString() + suffix;

            if (frame >= totalFrames) {
                clearInterval(counterTimer);
                el.textContent = target.toLocaleString() + suffix;
            }
        }, frameRate);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    counters.forEach(c => observer.observe(c));
};

initCounters();

/* =========================================================
   UPGRADE: Donation goal progress bar fill-on-scroll
   ========================================================= */
const initProgressBarReveal = () => {
    const fillEl = document.querySelector('.progress-bar-fill');
    if (!fillEl) return;

    const target = parseFloat(fillEl.dataset.fill || '0');
    const label = fillEl.querySelector('.progress-percentage-label');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fillEl.style.width = `${target}%`;

                // Animate the percentage label alongside the bar fill
                let current = 0;
                const step = () => {
                    current += 2;
                    if (current >= target) {
                        current = target;
                        if (label) label.textContent = `${target}%`;
                        return;
                    }
                    if (label) label.textContent = `${current}%`;
                    requestAnimationFrame(step);
                };
                requestAnimationFrame(step);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.4 });

    observer.observe(fillEl);
};

initProgressBarReveal();

/* =========================================================
   UPGRADE: Magnetic button effect (mouse-follow translate)
   ========================================================= */
const initMagneticButtons = () => {
    const magneticEls = document.querySelectorAll('.magnetic-btn');

    magneticEls.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const relX = e.clientX - rect.left - rect.width / 2;
            const relY = e.clientY - rect.top - rect.height / 2;
            const strength = 0.35;
            btn.style.transform = `translate(${relX * strength}px, ${relY * strength}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
};

initMagneticButtons();

/* =========================================================
   UPGRADE: 3D tilt effect for cards (mousemove perspective)
   ========================================================= */
const initTiltCards = () => {
    const tiltEls = document.querySelectorAll('.tilt-card');

    tiltEls.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    });
};

initTiltCards();

/* =========================================================
   UPGRADE: Hero card mouse-follow background gradient shift
   ========================================================= */
const initHeroMouseGradient = () => {
    const heroSection = document.querySelector('.hero-section');
    const heroTrigger = document.querySelector('.hero-video-trigger');
    if (!heroSection || !heroTrigger) return;

    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
        heroTrigger.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(242,101,34,0.08), transparent 60%)`;
    });

    heroSection.addEventListener('mouseleave', () => {
        heroTrigger.style.background = 'transparent';
    });
};

initHeroMouseGradient();

/* =========================================================
   UPGRADE: Hero visual parallax on scroll (translateY + rotateY)
   ========================================================= */
const initHeroScrollParallax = () => {
    const trigger = document.querySelector('.hero-video-trigger');
    if (!trigger) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const translate = Math.min(scrollY * 0.15, 60);
        const rotate = Math.min(scrollY * 0.02, 8);
        trigger.style.transform = `translateY(${translate}px) rotateY(${rotate}deg)`;
    });
};

initHeroScrollParallax();