$(document).ready(function () {


    setTimeout(function () {
        $("body").addClass("page-loaded");
    }, 800);

  
    $("a").on("click", function (e) {
        var tujuan = $(this).attr("href");

        
        if (tujuan && tujuan.startsWith("#")) {
            e.preventDefault();
            var elemenTujuan = $(tujuan);

            if (elemenTujuan.length > 0) {
                var kebawah = elemenTujuan.offset().top - 120;

                $('html, body').animate({
                    scrollTop: kebawah
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
        var menuUtama = $("#menuUtama");
        if (menuUtama.hasClass("show")) {
            menuUtama.collapse('hide');
        }
    });

});