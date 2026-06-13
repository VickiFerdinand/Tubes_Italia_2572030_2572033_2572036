window.addEventListener("load", function () {

    // ini buat ngilangin loading awal layar
    setTimeout(function () {

        document.body.classList.add("page-loaded");

        // pancing semua elemen html kita supaya muncul pelan pelan pas beres loading
        var kotakMuncul = document.getElementsByClassName("reveal-up");

        for (var kebawah = 0; kebawah < kotakMuncul.length; kebawah++) {
            kotakMuncul[kebawah].classList.add("tampil");
        }


        // ini mindahin z index tirainya biar navbar bisa dipencet pencet
        setTimeout(function () {

            var tirai = document.getElementById("transition-curtain");

            if (tirai) {
                tirai.style.zIndex = "-1";
            }

        }, 800);


    }, 800);



    // ini logika buat kalo kita klik navbar buat pindah halaman web
    var semuaLink = document.getElementsByTagName("a");

    for (var kebawah = 0; kebawah < semuaLink.length; kebawah++) {

        semuaLink[kebawah].addEventListener("click", function (e) {

            var tujuan = this.getAttribute("href");
            var classTombol = this.className || "";

            // ini biar kode pindah halamannya cuma jalan kalo bukan hashtag
            if (tujuan && tujuan.indexOf("#") !== 0 && tujuan.indexOf("javascript:") !== 0 && classTombol.indexOf("navbar-toggler") === -1 && this.getAttribute("target") !== "_blank") {

                e.preventDefault();

                var tirai = document.getElementById("transition-curtain");

                if (tirai) {
                    tirai.style.zIndex = "99999";
                }

                document.body.classList.remove("page-loaded");

                // tunggu semenit eh 1 detik dlu baru lompat halamannya
                setTimeout(function () {
                    window.location.href = tujuan;
                }, 1000);

            }
        });

    }



    // ini buat mobile yh, biar menu garis tiganya nutup otomatis kalo user nge-scroll layar ke bawah
    window.addEventListener("scroll", function () {

        var menuUtama = document.getElementById("menuUtama");

        if (menuUtama && menuUtama.classList.contains("show")) {
            menuUtama.classList.remove("show");
        }

    });

});