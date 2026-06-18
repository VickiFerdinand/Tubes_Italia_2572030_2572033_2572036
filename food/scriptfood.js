window.addEventListener("load", function () {

    setTimeout(function () {
        document.body.classList.add("page-loaded");

        var elemenMuncul = document.getElementsByClassName("elemenMuncul");
        for (var kebawah = 0; kebawah < elemenMuncul.length; kebawah++) {
            elemenMuncul[kebawah].classList.add("tampil");
        }
    }, 800);

    var semuaLink = document.getElementsByTagName("a");

    for (var kebawah = 0; kebawah < semuaLink.length; kebawah++) {
        semuaLink[kebawah].addEventListener("click", function (e) {
            var tujuan = this.getAttribute("href");
            var classTombol = this.className || "";

            if (tujuan && tujuan.indexOf("#") !== 0 && tujuan.indexOf("javascript:") !== 0 && classTombol.indexOf("navbar-toggler") === -1 && this.getAttribute("target") !== "_blank") {
                e.preventDefault();
                document.body.classList.remove("page-loaded");

                setTimeout(function () {
                    window.location.href = tujuan;
                }, 1000);
            }
        });
    }
    
    var menuSampingLinks = document.querySelectorAll("#menuSampingMakanan a");
    var semuaBagian = document.getElementsByClassName("bagianMakanan");
    var linkAll = document.querySelector('a[data-filter="all"]');
    
    if (window.innerWidth <= 991 && linkAll) {
        linkAll.classList.add("kategoriAktif");
    }
    
    for (var kesamping = 0; kesamping < menuSampingLinks.length; kesamping++) {
        menuSampingLinks[kesamping].addEventListener("click", function (e) {
            var tujuan = this.getAttribute("href");
            var filterValue = this.getAttribute("data-filter");
            
            if (tujuan && tujuan.indexOf("#") === 0) {
                if (window.innerWidth <= 991) {
                    e.preventDefault();
                    
                    for (var hapus = 0; hapus < menuSampingLinks.length; hapus++) {
                        menuSampingLinks[hapus].classList.remove("kategoriAktif");
                    }
                    this.classList.add("kategoriAktif");
                    
                    for (var kebawah = 0; kebawah < semuaBagian.length; kebawah++) {
                        if (filterValue === "all") {
                            semuaBagian[kebawah].style.display = "block";
                        } else {
                            if (semuaBagian[kebawah].getAttribute("id") === filterValue) {
                                semuaBagian[kebawah].style.display = "block";
                            } else {
                                semuaBagian[kebawah].style.display = "none";
                            }
                        }
                    }
                }
            }
        });
    }
    
    window.addEventListener("pageshow", function (event) {
        // ngecek kalo halaman ini dimuat dari memori rekaman (cache) browser
        if (event.persisted) {
            document.body.classList.add("page-loaded");

            var tirai = document.getElementById("transition-curtain");
            if (tirai) {
                tirai.style.zIndex = "-1";
            }
        }
    });

    window.addEventListener("pageshow", function (event) {

        if (event.persisted) {
            var tirai = document.getElementById("transition-curtain");

            if (tirai) {
                tirai.style.zIndex = "99999";
            }

            document.body.classList.add("page-loaded");

            setTimeout(function () {
                if (tirai) {
                    tirai.style.zIndex = "-1";
                }
            }, 800);
        }
    });

    // ini buat mobile yh, nutup menu hape otomatis kalo di scroll ga ngejut
    window.addEventListener("scroll", function () {

        var menuUtama = document.getElementById("menuUtama");

        if (menuUtama && menuUtama.classList.contains("show") && !menuUtama.classList.contains("collapsing")) {
            var bsCollapse = bootstrap.Collapse.getInstance(menuUtama);
            if (bsCollapse) {
                bsCollapse.hide();
            } else {
                menuUtama.classList.remove("show");
            }
        }

        var btnTop = document.getElementById("btn-back-to-top");
        if (btnTop) {
            if (window.scrollY > 300) {
                btnTop.style.display = "block";
            } else {
                btnTop.style.display = "none";
            }
        }
    });

    var btnTop = document.getElementById("btn-back-to-top");
    if (btnTop) {
        btnTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});