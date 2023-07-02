$(document).on("click",".menu-toggle",function () {
    $(".sidebar").toggleClass("open");
    if ($(window).width() < 1023) {
        $(".sidebar").removeClass("sidebar-mini");
    }
}),
$(document).on("click",".btn-right a",function () {
    $(".rightbar").toggleClass("open");
}),
$(document).on("click",".sidebar-mini-btn",function () {
    $(".sidebar").toggleClass("sidebar-mini");
}),
$(document).on("click",".hamburger-icon",function () {
    $(this).toggleClass("active");
    if ($(window).width() < 1024) {
        $(".sidebar").toggleClass("sidebar-mini");
    }
})