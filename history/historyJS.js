document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        document.body.classList.add("page-loaded");
    }, 800);


    const navLinks = document.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const destination = link.getAttribute("href");
            if (
                destination &&
                !destination.startsWith("#") &&
                !destination.startsWith("javascript:") &&
                !link.classList.contains("navbar-toggler") &&
                link.target !== "_blank"
            ) {
                e.preventDefault();
                document.body.classList.remove("page-loaded");
                setTimeout(() => {
                    window.location.href = destination;
                }, 1000);
            }
        });
    });


    const menuElement = document.getElementById('menuUtama');

    const bsCollapse = new bootstrap.Collapse(menuElement, { toggle: false });

    let isScrolling = false;

    window.addEventListener('scroll', () => {

        if (menuElement.classList.contains('show') && !isScrolling) {
            isScrolling = true;


            menuElement.style.opacity = '0';
            menuElement.style.transform = 'translateY(-10px)';
            menuElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

            setTimeout(() => {
                bsCollapse.hide();
            }, 50);
        }
    });


    menuElement.addEventListener('hidden.bs.collapse', () => {
        menuElement.style.opacity = '';
        menuElement.style.transform = '';
        menuElement.style.transition = '';
        isScrolling = false;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".era-section");
    const nodes = document.querySelectorAll(".timeline-node");

    const updateTimeline = () => {
        let scrollY = window.scrollY;

        let docHeight = document.body.scrollHeight - window.innerHeight;

        let progressPercent = (scrollY / docHeight) * 100;

        document.documentElement.style.setProperty('--scroll-progress', `${progressPercent}%`);

        let currentSection = "";
        sections.forEach(section => {

            const sectionTop = section.offsetTop - (window.innerHeight / 2);
            if (scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        nodes.forEach(node => {
            node.classList.remove("active");
            if (node.getAttribute("data-target") === currentSection) {
                node.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", updateTimeline);

    updateTimeline();
});