window.addEventListener("load", function () {

    // ini buat ngilangin loading awal layar
    setTimeout(function () {

        document.body.classList.add("page-loaded");

        // ini biar gambarnya langsung tampil semua
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


            // ini kalo klik menu samping, warna merahnya dipindah ke menu yang diklik
            if (tujuan && tujuan.indexOf("#") === 0) {

                var menuSamping = document.getElementById("menuSampingMakanan");

                // ngecek pastiin yang diklik itu beneran ada di dalem menu samping
                if (menuSamping && menuSamping.contains(this)) {

                    var semuaMenu = menuSamping.getElementsByTagName("a");

                    // hapus semua warna merah dari menu
                    for (var hapus = 0; hapus < semuaMenu.length; hapus++) {
                        semuaMenu[hapus].classList.remove("kategoriAktif");
                    }

                    // kasih warna merah ke menu yang barusan aja diklik
                    this.classList.add("kategoriAktif");
                }

            }

            // ini kalo klik buat pindah halaman web lain
            else if (tujuan && tujuan.indexOf("javascript:") !== 0 && classTombol.indexOf("navbar-toggler") === -1 && this.getAttribute("target") !== "_blank") {

                e.preventDefault();

                document.body.classList.remove("page-loaded");

                setTimeout(function () {
                    window.location.href = tujuan;
                }, 1000);

            }

        });

    }

    // ini buat mobile yh, nutup menu hape otomatis kalo di scroll
    window.addEventListener("scroll", function () {

        var menuUtama = document.getElementById("menuUtama");

        if (menuUtama && menuUtama.classList.contains("show")) {
            menuUtama.classList.remove("show");
        }

    });

});