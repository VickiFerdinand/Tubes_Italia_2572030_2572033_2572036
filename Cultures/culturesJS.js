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

    // ini buat mobile yh, nutup menu
    window.addEventListener("scroll", function () {
        var menuUtama = document.getElementById("menuUtama");
        if (menuUtama && menuUtama.classList.contains("show")) {
            menuUtama.classList.remove("show");
        }
    });
});