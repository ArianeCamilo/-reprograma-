$(document).ready(function () {
    $("#ensinar-btn").click(function () {
        $("#ensinar-form").show(500);
        $("#apoiar-form").hide(100);
    });
    $("#apoiar-btn").click(function () {
        $("#apoiar-form").show(500);
        $("#ensinar-form").hide(100);
    });
    $("#ensinar-submit").click(function () {
        alert("Obrigada! Entraremos em contato para mais informações!");
        return false;
    });
    $("#apoiar-submit").click(function () {
        alert("Obrigada! Entraremos em contato para mais informações!");
        return false;
    });
});