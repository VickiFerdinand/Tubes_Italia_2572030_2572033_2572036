window.addEventListener("load", function () {
    // ini buat ngilangin loading awal
    setTimeout(function () {
        document.body.classList.add("page-loaded");

        setTimeout(function () {
            var tirai = document.getElementById("transition-curtain");
            if (tirai) {
                tirai.style.zIndex = "-1";
            }
        }, 800);

        // ini biar gambarnya langsung tampil semua
        var kartuMuncu = document.getElementsByClassName("reveal-up");
        for (var kebawah = 0; kebawah < kartuMuncu.length; kebawah++) {
            kartuMuncu[kebawah].classList.add("tampil");
        }
    }, 800);

    var semuaLink = document.getElementsByTagName("a");

    for (var kebawah = 0; kebawah < semuaLink.length; kebawah++) {
        semuaLink[kebawah].addEventListener("click", function (e) {
            var tujuan = this.getAttribute("href");
            var classTombol = this.className || "";

            // ini kalo klik buat pindah halaman web
            if (tujuan && tujuan.indexOf("#") !== 0 && tujuan.indexOf("javascript:") !== 0 && classTombol.indexOf("navbar-toggler") === -1 && this.getAttribute("target") !== "_blank") {
                e.preventDefault();

                var tirai = document.getElementById("transition-curtain");
                if (tirai) {
                    tirai.style.zIndex = "99999";
                }

                document.body.classList.remove("page-loaded");

                setTimeout(function () {
                    window.location.href = tujuan;
                }, 1000);
            }
        });
    }

   
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

    // ini buat mobile yh, nutup menu hape otomatis kalo di scroll tanpa ngejut
    window.addEventListener("scroll", function () {

        var menuUtama = document.getElementById("menuUtama");

        // rahasianya ada di "collapsing" biar ga dipanggil bertubi-tubi pas lagi animasi
        if (menuUtama && menuUtama.classList.contains("show") && !menuUtama.classList.contains("collapsing")) {
            var bsCollapse = bootstrap.Collapse.getInstance(menuUtama);
            if (bsCollapse) {
                bsCollapse.hide();
            } else {
                menuUtama.classList.remove("show");
            }
        }

    });

    var tombolFilter = document.querySelectorAll(".filter-nav .nav-link");
    var semuaItem = document.getElementsByClassName("item");

    // ini kalo tombol filter di klik
    for (var kesamping = 0; kesamping < tombolFilter.length; kesamping++) {
        tombolFilter[kesamping].addEventListener("click", function () {

            for (var hapus = 0; hapus < tombolFilter.length; hapus++) {
                tombolFilter[hapus].classList.remove("active");
            }

            this.classList.add("active");

            var kategori = this.getAttribute("data-filter");

            // ini buat nampilin atau nyembunyiin card
            for (var kebawah = 0; kebawah < semuaItem.length; kebawah++) {
                if (kategori === "all") {
                    semuaItem[kebawah].style.display = "block";
                } else {
                    if (semuaItem[kebawah].classList.contains(kategori)) {
                        semuaItem[kebawah].style.display = "block";
                    } else {
                        semuaItem[kebawah].style.display = "none";
                    }
                }
            }
        });
    }
});