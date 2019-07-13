$(document).ready(function () {
    // Bootstrap Select
    var $selectpicker = $('.selectpicker');
    $selectpicker.selectpicker();

    // mobile menu
    var $mobileMenu = $('.mobile-menu');
    var $mobileMenuButton = $('.mobile-menu__button');
    var $mobileMenuItemWithSub = $('.mobile-menu__item--with-submenu');
    var $mobileMenuLinkWithSub = $('.mobile-menu__link--with-submenu');

    function hide_menu() {
        $mobileMenu.removeClass('mobile-menu--is-open');
    }

    function show_menu() {
        $mobileMenu.addClass('mobile-menu--is-open');
    }

    $mobileMenuLinkWithSub.click(function () {
        $(this).closest($mobileMenuItemWithSub).toggleClass('sub-menu-is-open');
        return false;
    });

    $mobileMenuButton.click(function () {
        if ($mobileMenu.hasClass('mobile-menu--is-open')) {
            hide_menu();
        }
        else {
            show_menu();
        }
    });
    $(document).on("click touchstart", "body", function (evt) {
        var $menu = $('#mobile-menu');
        if (!$menu.is(evt.target) // The target of the click isn't the container.
            && $menu.has(evt.target).length === 0) // Nor a child element of the container
        {
            hide_menu();
        }
    });


    // mobile-tabs-functions
    var $tabButton = $('.why-we__button');
    var $tabItem = $('.why-we__item');
    $tabButton.click(function () {
        var $currTab = $(this).parent($tabItem);
        $currTab.toggleClass('active');
    });

    // Brands Slider
    var $owlBrands = $('.banner-slider .owl-carousel');
    if ($owlBrands.length > 0) {
        $owlBrands.owlCarousel({
            loop: true,
            margin: 40,
            responsiveClass: true,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1200: {
                    items: 6
                }
            }
        });
    }


    // Footer Menu
    var $footerMenuButton = $('.mobile-footer-button');
    var $footerMenu = $('.footer__top-right');

    $footerMenuButton.click(function () {
        if ($footerMenu.hasClass('footer-menu--is-open')) {
            $footerMenu.removeClass('footer-menu--is-open');
        }
        else {
            $footerMenu.addClass('footer-menu--is-open');
        }
    });


    // aside menu
    var $asideMenu = $('.aside-menu');
    var $asideMenuButton = $('.aside-menu__current-item-button');
    $asideMenuButton.click(function () {
        $asideMenu.toggleClass('aside-menu--is-open');
    });

    // Accordion
    var $accordionButton = $('.card .btn');
    var $accordionItem = $('.card');
    $accordionButton.click(function () {
        var $self = $(this);
        if (!$self.closest($accordionItem).hasClass('card--is-open')) {
            $accordionItem.each(function () {
                $(this).removeClass('card--is-open');
            });
            $self.closest($accordionItem).addClass('card--is-open');
        }
        else {
            $self.closest($accordionItem).removeClass('card--is-open');
        }
    });

    // Contact Form
    var $contactForm = $('.contact-form');
    var $contactFormButton = $('.contact-form .btn--submit');
    var $message = $('.message-sent-wrapper');
    var $textField = $('.mdl-textfield__input');
    var $textFieldWrapper = $('.mdl-textfield');
    var $valid = false;
    $textField.on('mouseup keyup keypress blur', function () {
        $valid = true;
        $textField.each(function () {
            if (!$(this).closest($textFieldWrapper).hasClass('is-dirty') || $(this).closest($textFieldWrapper).hasClass('is-invalid')) {
                $valid = false;
                $contactForm.addClass('form-not-valid');
            }
        });
        if ($valid === true) {
            $contactForm.removeClass('form-not-valid');
        }
    });
    $contactFormButton.click(function () {
        $contactForm.addClass('d-none');
        $message.removeClass('d-none');
    });


    // Product Slider
    var $owlProduct = $('.product-slider .owl-carousel');
    if ($owlProduct.length > 0) {
        $owlProduct.owlCarousel({
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 450
        });
    }


    // Payment Method
    var $paymentItem = $('.payment-method__item');
    var $addCartButton = $('.add-curt-button');

    $paymentItem.click(function () {
        $paymentItem.each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        checkPaymentMethod();
    });

    function checkPaymentMethod() {
        $paymentItem.each(function () {
            if ($(this).hasClass('active')) {
                $addCartButton.prop('disabled', false);
                return false;
            }
            else {
                $addCartButton.prop('disabled', true);
            }
        })
    }


    // custom scrollbar
    var $scrollContainer = $(".scrollable-box");
    $scrollContainer.mCustomScrollbar({
        axis:"x" // horizontal scrollbar
    });

});