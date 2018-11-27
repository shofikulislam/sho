/*
Template Name: Shofik_Portfolio
Author: Md. Shofikul Islam
Version: 1.0
1. Fixed header
2. Smoothscroll js
3. Progress Bar
4. Typed JS TRIGGER
5. Contact form
6. Back to top

*/
jQuery(function ($) {
    "use strict";
    var $window = $(window),
        $body = $('body');

    /*========Preloader Setup========*/
    setTimeout(function(){
        $('.preloader').addClass('loaded');
    }, 1000);


    /* ----------------------------------------------------------- */
    /*                         Fixed header
    /* ----------------------------------------------------------- */
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $(".navbar").addClass("fixed");
        } else {
            $(".navbar").removeClass("fixed");
        }
    });

    /*========Navbar Close On Click Mobile Responsive========*/
    $(".nav-item .nav-link").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    /* ----------------------------------------------------------- */
    /*                         ScrollIt Setup
    /* ----------------------------------------------------------- */
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -68 // offste (in px) for fixed top navigation
    });
    /* ----------------------------------------------------------- */
    /*                         Progressbar
    /* ----------------------------------------------------------- */

    $(window).on('scroll', function () {
        $('.web-design').animate({
            width: '90%'
        }, 2000);
        $('.html').animate({
            width: '95%'
        }, 2000);
        $('.css').animate({
            width: '95%'
        }, 2000);
        $('.bootstrap').animate({
            width: '90%'
        }, 2000);
        $('.javascript').animate({
            width: '75%'
        }, 2000);
    });

    /* ----------------------------------------------------------- */
    /*                         Typed JS TRIGGER
    /* ----------------------------------------------------------- */

    $(".typed").typed({
        strings: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore officiis obcaecati, fuga nobis cum neque magni laudantium autem consequuntur."],
        loop: true,
        startDelay: 1e3,
        backDelay: 3e3
    });

    /* ----------------------------------------------------------- */
    /*                         Contact form
    /* ----------------------------------------------------------- */
    $('#contact-form').submit(function () {
        var $form = $(this),
            $error = $form.find('.error-container'),
            action = $form.attr('action');
        $error.slideUp(750, function () {
            $error.hide();
            var $name = $form.find('.form-name'),
                $email = $form.find('.form-email'),
                $message = $form.find('.form-message');
            $.post(action, {
                    name: $name.val(),
                    email: $email.val(),
                    message: $message.val()
                },
                function (data) {
                    $error.html(data);
                    $error.slideDown('slow');
                    if (data.match('success') != null) {
                        $name.val('');
                        $email.val('');
                        $message.val('');
                    }
                }
            );
        });
        return false;
    });

    /* ----------------------------------------------------------- */
    /*                         Back to top
    /* ----------------------------------------------------------- */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').on('click', function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('hide');


    var rellax = new Rellax('.rellax');

});