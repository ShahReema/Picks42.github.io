/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    //add dropdown class to the drop down li

    function dropdown_class_hover() {
        var select = $(".main_ul .drop_down_hover");
        var icon = "<i class='fa fa-caret-down' aria-hidden='true'></i>";
        select.parent().addClass("has_dropdown hover_effect");
        $(".hover_effect>a").append(icon);
    }
    function dropdown_class_click() {
        var select = $(".main_ul .drop_down_click");
        var icon = "<i class='fa fa-caret-down' aria-hidden='true'></i>";
        select.parent().addClass("has_dropdown click_effect");
        $(".click_effect>a").append(icon);

    }
    dropdown_class_hover();
    dropdown_class_click();

    $(".main_ul .has_dropdown.hover_effect").hover(function () {
        $(this).find(".drop_down_hover").stop().fadeIn();
    },
            function () {
                $(this).find(".drop_down_hover").stop().fadeOut();
            });

    $(".main_ul .has_dropdown.click_effect").click(function () {

        $(this).find(".drop_down_click").toggle();
    });
    //create close button
    function nav_close() {
        var icon = "<i class='fa fa-bars' aria-hidden='true'></i>";
        $(".menu_wrapper .brand_name").after("<div class='close_btn'></div>");
        $(".menu_wrapper .close_btn").append(icon);

    }
    nav_close();

    $(".menu_wrapper .close_btn").click(function () {
        $(".menu_wrapper .main_menu").slideToggle();
    });

});