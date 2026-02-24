const getBasePrefix = () => {
    const path = window.location.pathname.replace(/\\/g, '/');
    return path.includes('/pages/') ? '../' : '';
};

const applyNavLinks = () => {
    const prefix = getBasePrefix();
    document.querySelectorAll('[data-nav-link]').forEach(link => {
        const target = link.getAttribute('data-nav-link');
        if (!target) return;

        if (!prefix && target.startsWith('index.html#')) {
            link.setAttribute('href', target);
            return;
        }

        link.setAttribute('href', `${prefix}${target}`);
    });
};

const initNav = () => {
    applyNavLinks();

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
};

const initSignupForm = () => {
    const signupForm = document.getElementById('signupForm');
    if (!signupForm) return;

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real implementation, this would send data to a server
        alert('Thank you for signing up! We\'ll add you to our mailing list.');
        signupForm.reset();
    });
};

const initSlideshows = () => {
    const slideshows = document.querySelectorAll('[data-slideshow]');
    if (!slideshows.length) return;

    slideshows.forEach((slideshow) => {
        const configuredSlides = (slideshow.dataset.slides || '')
            .split(',')
            .map(path => path.trim())
            .filter(Boolean);

        if (configuredSlides.length) {
            slideshow.querySelectorAll('.about-slide').forEach(node => node.remove());

            const controls = slideshow.querySelector('.slideshow-control.prev');
            configuredSlides.forEach((imagePath, index) => {
                const slide = document.createElement('div');
                slide.className = `about-slide${index === 0 ? ' is-active' : ''}`;

                const img = document.createElement('img');
                img.src = imagePath;
                img.alt = `Buckeyes for Harm Reduction event highlight photo ${index + 1}`;
                img.onerror = () => {
                    img.onerror = null;
                    img.src = '../assets/images/about/about-placeholder.svg';
                };

                slide.appendChild(img);
                if (controls) {
                    slideshow.insertBefore(slide, controls);
                } else {
                    slideshow.appendChild(slide);
                }
            });

            const dotsContainer = slideshow.querySelector('.slideshow-dots');
            if (dotsContainer) {
                dotsContainer.innerHTML = '';
                configuredSlides.forEach((_, index) => {
                    const dot = document.createElement('button');
                    dot.type = 'button';
                    dot.className = `slide-dot${index === 0 ? ' is-active' : ''}`;
                    dot.setAttribute('data-slide-to', String(index));
                    dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
                    dotsContainer.appendChild(dot);
                });
            }
        }

        const slides = Array.from(slideshow.querySelectorAll('.about-slide'));
        const dots = Array.from(slideshow.querySelectorAll('.slide-dot'));
        const prevBtn = slideshow.querySelector('[data-slide-action="prev"]');
        const nextBtn = slideshow.querySelector('[data-slide-action="next"]');
        if (!slides.length) return;

        const intervalMs = Number(slideshow.dataset.slideInterval) || 5000;

        let currentIndex = slides.findIndex(slide => slide.classList.contains('is-active'));
        if (currentIndex < 0) currentIndex = 0;

        const showSlide = (index) => {
            currentIndex = (index + slides.length) % slides.length;

            slides.forEach((slide, slideIndex) => {
                slide.classList.toggle('is-active', slideIndex === currentIndex);
            });

            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle('is-active', dotIndex === currentIndex);
            });
        };

        const nextSlide = () => showSlide(currentIndex + 1);
        const prevSlide = () => showSlide(currentIndex - 1);

        prevBtn?.addEventListener('click', prevSlide);
        nextBtn?.addEventListener('click', nextSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        let autoplay = window.setInterval(nextSlide, intervalMs);

        slideshow.addEventListener('mouseenter', () => {
            window.clearInterval(autoplay);
        });

        slideshow.addEventListener('mouseleave', () => {
            autoplay = window.setInterval(nextSlide, intervalMs);
        });

        showSlide(currentIndex);
    });
};

const loadIncludes = async () => {
    const includeTargets = document.querySelectorAll('[data-include]');
    if (!includeTargets.length) return;

    const prefix = getBasePrefix();

    await Promise.all(
        Array.from(includeTargets).map(async (target) => {
            const file = target.getAttribute('data-include');
            if (!file) return;

            const includePath = file.startsWith('http') || file.startsWith('/')
                ? file
                : `${prefix}${file.replace(/^\.\//, '')}`;

            try {
                const response = await fetch(includePath);
                if (!response.ok) return;
                const content = await response.text();
                const parsed = new DOMParser().parseFromString(content, 'text/html');
                target.innerHTML = parsed.body && parsed.body.innerHTML.trim()
                    ? parsed.body.innerHTML
                    : content;
            } catch (error) {
                console.error('Include failed:', includePath, error);
            }
        })
    );
};

const initPage = async () => {
    await loadIncludes();
    initNav();
    initSignupForm();
    initSlideshows();
};

initPage();
