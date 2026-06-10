document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { document.body.classList.add("page-loaded"); }, 800);

    const navLinks = document.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const dest = link.getAttribute("href");
            if (dest && !dest.startsWith("#") && !dest.startsWith("javascript:") && !link.classList.contains("navbar-toggler") && link.target !== "_blank") {
                e.preventDefault();
                document.body.classList.remove("page-loaded");
                setTimeout(() => { window.location.href = dest; }, 1000);
            }
        });
    });

    const menu = document.getElementById('menuUtama');
    const bsCol = new bootstrap.Collapse(menu, { toggle: false });
    let isScrl = false;

    window.addEventListener('scroll', () => {
        if (menu.classList.contains('show') && !isScrl) {
            isScrl = true;
            menu.style.opacity = '0';
            menu.style.transform = 'translateY(-10px)';
            menu.style.transition = 'all 0.3s ease';
            setTimeout(() => { bsCol.hide(); }, 50);
        }
    });

    menu.addEventListener('hidden.bs.collapse', () => {
        menu.style.cssText = '';
        isScrl = false;
    });

    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            heroBg.style.transform = `translate3d(0, ${window.scrollY * 0.4}px, 0)`;
        });
    }

    const btns = document.querySelectorAll('.filter-nav .nav-link');
    const items = document.querySelectorAll('.item');

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const val = btn.getAttribute('data-filter');
            items.forEach(item => {
                if (val === 'all' || item.classList.contains(val)) {
                    item.classList.remove('hide');
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.classList.add('hide');
                }
            });
            setTimeout(() => { ScrollObserver.takeRecords(); }, 100);
        });
    });

    const reveals = document.querySelectorAll('.reveal-up');
    const obsOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };

    const ScrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, obsOptions);

    reveals.forEach(el => ScrollObserver.observe(el));

    const mapPins = document.querySelectorAll('.map-pin');

    mapPins.forEach(pin => {
        pin.addEventListener('click', () => {
            const targetCity = pin.getAttribute('data-target');
            const targetButton = document.querySelector(`.filter-nav .nav-link[data-filter="${targetCity}"]`);

            if (targetButton) {
                targetButton.click();
            }

            const filterSection = document.getElementById('filter-section-target');
            if (filterSection) {
                const offsetTop = filterSection.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});