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
};

initPage();
