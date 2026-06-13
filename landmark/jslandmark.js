$(document).ready(function () {

    setTimeout(function () {
        $("body").addClass("page-loaded");
    }, 800);

    $("a").on("click", function (e) {
        var tujuan = $(this).attr("href");

        if (tujuan && tujuan.startsWith("#")) {
            e.preventDefault();
            var targetElemen = $(tujuan);
            if (targetElemen.length > 0) {
                $('html, body').animate({
                    scrollTop: targetElemen.offset().top - 120
                }, 500);
            }
            return;
        }

        if (tujuan && !tujuan.startsWith("javascript:") && !$(this).hasClass("navbar-toggler") && $(this).attr("target") !== "_blank") {
            e.preventDefault();
            $("body").removeClass("page-loaded");

            setTimeout(function () {
                window.location.href = tujuan;
            }, 1000);
        }
    });

    $(window).on("scroll", function () {
        var tinggiScroll = $(window).scrollTop();
        var tinggiLayar = $(window).height();

        var menuUtama = $("#menuUtama");
        if (menuUtama.hasClass("show")) {
            menuUtama.collapse('hide');
        }

    
        $(".reveal-up").each(function () {
            var posisiElemen = $(this).offset().top;

            if (tinggiScroll > posisiElemen - tinggiLayar + 100) {
                $(this).addClass("tampil");
            }
        });
    });

    $(window).trigger("scroll");


    $(".filter-nav .nav-link").on("click", function () {

    
        $(".filter-nav .nav-link").removeClass("active");

    
        $(this).addClass("active");

    
        var kategori = $(this).attr("data-filter");

        
        if (kategori == "all") {
            $(".item").show();
        } else {
            $(".item").hide();
            $("." + kategori).show();
        }

       
        $(".reveal-up").removeClass("tampil");
        setTimeout(function () {
            $(window).trigger("scroll");
        }, 50);
    });

});