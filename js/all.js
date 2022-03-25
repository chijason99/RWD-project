$(document).ready(function () {
   $(".bar .menu-button").click(function (e) { 
        e.preventDefault();
        $(".bar .menu").toggleClass("menu-show");
        
    });
    $(".cart-menu-main li").click(function (e) { 
        e.preventDefault();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        
    });
    $(".cart-list-item li>.heart").click(function (e) { 
        e.preventDefault();
        $(this).find("i").toggleClass("fa-solid");
    });
});
