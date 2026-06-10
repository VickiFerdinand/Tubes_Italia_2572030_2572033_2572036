window.addEventListener('load', () => { document.body.classList.add("page-loaded"); });
setTimeout(() => { document.body.classList.add("page-loaded"); }, 800);

document.addEventListener("DOMContentLoaded", () => {
    const navs = document.querySelectorAll("a");
    navs.forEach(a => {
        a.addEventListener("click", (e) => {
            const href = a.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                const trg = document.getElementById(href.substring(1));
                if (trg) window.scrollTo({ top: trg.offsetTop - 120, behavior: 'smooth' });
                return;
            }
            if (href && !href.startsWith("javascript:") && !a.classList.contains("navbar-toggler") && a.target !== "_blank") {
                e.preventDefault();
                document.body.classList.remove("page-loaded");
                setTimeout(() => { window.location.href = href; }, 1000);
            }
        });
    });

    const menu = document.getElementById('menuUtama');
    if (menu && typeof bootstrap !== 'undefined') {
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
    }

    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            heroBg.style.transform = `translate3d(0, ${window.scrollY * 0.4}px, 0)`;
        });
    }

    const els = document.querySelectorAll('.elemenMuncul');
    if (els.length > 0 && typeof IntersectionObserver !== 'undefined') {
        const obs = new IntersectionObserver((es, o) => {
            es.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('tampil');
                    o.unobserve(e.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        els.forEach(el => obs.observe(el));
    }

    const secs = document.querySelectorAll('.bagianMakanan');
    const links = document.querySelectorAll('#menuSampingMakanan a');
    if (secs.length > 0 && links.length > 0) {
        window.addEventListener('scroll', () => {
            let cur = '';
            secs.forEach(s => {
                if (scrollY >= (s.offsetTop - 200)) cur = s.getAttribute('id');
            });
            links.forEach(l => {
                l.classList.remove('kategoriAktif');
                if (cur && l.getAttribute('href').includes(cur)) {
                    l.classList.add('kategoriAktif');
                    if (window.innerWidth < 992) {
                        const wrap = document.getElementById('menuSampingMakanan');
                        wrap.scrollTo({ left: l.offsetLeft - (wrap.offsetWidth / 2) + (l.offsetWidth / 2), behavior: 'smooth' });
                    }
                }
            });
        });
    }
});