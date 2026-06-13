$(document).ready(function () {

    setTimeout(function () {
        $("body").addClass("page-loaded");
    }, 800);

    $("a").on("click", function (e) {
        let destination = $(this).attr("href");

        if (destination && destination.startsWith("#")) {
            e.preventDefault();
            let trg = $(destination);
            if (trg.length) {
                $('html, body').animate({
                    scrollTop: trg.offset().top - 120
                }, 500);
            }
            return;
        }

        if (destination && !destination.startsWith("javascript:") && !$(this).hasClass("navbar-toggler") && $(this).attr("target") !== "_blank") {
            e.preventDefault();
            $("body").removeClass("page-loaded");
            setTimeout(function () {
                window.location.href = destination;
            }, 1000);
        }
    });

    $(window).on("scroll", function () {
        let scrollY = $(window).scrollTop();
        let windowHeight = $(window).height();

        let menuUtama = $("#menuUtama");
        if (menuUtama.hasClass("show")) {
            menuUtama.collapse('hide');
        }

        $(".bagianMakanan").each(function () {
            let sectionTop = $(this).offset().top - 200;
            if (scrollY >= sectionTop) {
                let id = $(this).attr("id");
                $("#menuSampingMakanan a").removeClass("kategoriAktif");
                $("#menuSampingMakanan a[href='#" + id + "']").addClass("kategoriAktif");
            }
        });

        $(".elemenMuncul").each(function () {
            let position = $(this).offset().top;
            if (scrollY > position - windowHeight + 100) {
                $(this).addClass("tampil");
            }
        });
    });

    $(window).trigger("scroll");
});