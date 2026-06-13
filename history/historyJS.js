window.addEventListener("load", function () {
    // ini buat ngilangin loading awal
    setTimeout(function () {
        document.body.classList.add("page-loaded");
    }, 800);

    var semuaLink = document.getElementsByTagName("a");

    for (var kebawah = 0; kebawah < semuaLink.length; kebawah++) {
        semuaLink[kebawah].addEventListener("click", function (e) {
            var tujuan = this.getAttribute("href");
            var classTombol = this.className || "";
            var targetTab = this.getAttribute("target");

            // ini kalo klik buat pindah halaman web
            if (tujuan && tujuan.indexOf("#") !== 0 && tujuan.indexOf("javascript:") !== 0 && classTombol.indexOf("navbar-toggler") === -1 && targetTab !== "_blank") {
                e.preventDefault();

                document.body.classList.remove("page-loaded");

                setTimeout(function () {
                    window.location.href = tujuan;
                }, 1000);
            }
        });
    }

    // ini buat mobile yh, nutup menu kalo di scroll
    window.addEventListener("scroll", function () {
        var menuUtama = document.getElementById("menuUtama");
        if (menuUtama && menuUtama.classList.contains("show")) {
            menuUtama.classList.remove("show");
        }
    });
});