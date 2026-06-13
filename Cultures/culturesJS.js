document.addEventListener("DOMContentLoaded", () => {
    // Membuka Tirai
    setTimeout(() => { document.body.classList.add("page-loaded"); }, 800);

  
    const navLinks = document.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const destination = link.getAttribute("href");
            if (destination && !destination.startsWith("#") && !destination.startsWith("javascript:") && !link.classList.contains("navbar-toggler") && link.target !== "_blank") {
                e.preventDefault();
                document.body.classList.remove("page-loaded");
                setTimeout(() => { window.location.href = destination; }, 1000);
            }
        });
    });

    // Auto-close Hamburger Menu
    const menuElement = document.getElementById('menuUtama');
    const bsCollapse = new bootstrap.Collapse(menuElement, { toggle: false });
    let statusScrollKebawah = false;

    window.addEventListener('scroll', () => {
        if (menuElement.classList.contains('show') && !statusScrollKebawah) {
            statusScrollKebawah = true;
            menuElement.style.opacity = '0';
            menuElement.style.transform = 'translateY(-10px)';
            menuElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            setTimeout(() => { bsCollapse.hide(); }, 50);
        }
    });

    menuElement.addEventListener('hidden.bs.collapse', () => {
        menuElement.style.opacity = '';
        menuElement.style.transform = '';
        menuElement.style.transition = '';
        statusScrollKebawah = false;
    });
});




document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { document.body.classList.add("page-loaded"); }, 800);

    const navLinks = document.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const dest = link.getAttribute("href");
            
            if (dest.startsWith("#")) {
                e.preventDefault();
                const targetId = dest.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
                }
                return;
            }

            if (dest && !dest.startsWith("javascript:") && !link.classList.contains("navbar-toggler") && link.target !== "_blank") {
                e.preventDefault();
                document.body.classList.remove("page-loaded");
                setTimeout(() => { window.location.href = dest; }, 1000);
            }
        });
    });

    const menu = document.getElementById('menuUtama');
    if(menu) {
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

    const reveals = document.querySelectorAll('.reveal-up');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    reveals.forEach(el => revealObserver.observe(el));

    const sections = document.querySelectorAll('.food-section');
    const sidebarLinks = document.querySelectorAll('#food-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});