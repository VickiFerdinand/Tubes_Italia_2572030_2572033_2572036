window.addEventListener("load", function () {
    // ini buat ngilangin loading layar
    setTimeout(function () {
        document.body.classList.add("page-loaded");

        // ini biar semua kartunya langsung muncul pas buka layar
        var elemenMuncul = document.getElementsByClassName("reveal-up");
        for (var kebawah = 0; kebawah < elemenMuncul.length; kebawah++) {
            elemenMuncul[kebawah].classList.add("tampil");
        }

        setTimeout(function () {
            var tirai = document.getElementById("transition-curtain");
            if (tirai) {
                tirai.style.zIndex = "-1";
            }
        }, 800);
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

    // ini buat mobile yh, nutup menu hape otomatis kalo di scroll ga ngejut
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
});