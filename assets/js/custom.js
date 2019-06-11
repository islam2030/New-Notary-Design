$(document).ready(function() {
    // start glabel
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.datepicker').datepicker();
    $('select').formSelect();

    // start datepicker arabic
    $('.datepicker').datepicker({
        firstDay: true,
        autoClose: true,
        format: 'yyyy-mm-dd',
        i18n: {
            months: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            monthsShort: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
            weekdays: ["الجمعه", "الخميس", "الاربعاء", "الثلاثاء", "الاثنين", "حد", "سبت"],
            weekdaysShort: ["الجمعه", "الخميس", "الاربعاء", "الثلاثاء", "الاثنين", "حد", "سبت"],
            weekdaysAbbrev: ["ج", "خ", "ر", "ث", "ت", "ح", "س"]
        }
    });

    // start button loading action
    $('.btn').on('click', function() {
        $(this).addClass('btn--loading');
        setTimeout(() => {
            $(this).removeClass('btn--loading');
        }, 2000);
    });

    // start upload image
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.profile-pic').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
            $(".upload-button").hide();
            $(".edit-button").show();
        }
    }

    $(".file-upload").on('change', function() {
        readURL(this);
    });
    $(".upload-button").on('click', function() {
        $(".file-upload").click();
    });
    $(".edit-button").on('click', function() {
        $(".file-upload").click();
    });
    // start anther upload
    var readURL2 = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.prev-pic').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
            $(".upload_list").hide();
            $(".remove_box").show();
        }
    }
    $("#file-input").on('change', function() {
        readURL2(this);
    });
    $(".remove-button").on('click', function() {
        $(".docment_box").remove();
    });

    // add one step numberic
    $(".add_number").on("click", function() {
        console.log('clicked');
        var button = $(this);
        var oldValue = button.parent().find("input").val();
        if (button.text() == "add") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().find("input").val(newVal);
    });

    // add stikey when back to scroll up
    var didScroll;
    var lastScrollTop = 0;
    var delta = 250;
    var navbarHeight = $('.form-actions').outerHeight();

    $(window).scroll(function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        console.log(st);

        // Make scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If scrolled down and past the navbar, add class .nav-up.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('.form-actions').removeClass('scroll-up');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.form-actions').addClass('scroll-up');
            }
        }
        lastScrollTop = st;
    }

});
// start show password and hide
function showPassword() {
    var prev = document.getElementById("password");
    if (prev.type === "password") {
        prev.type = "text";
        $(".view").removeClass().addClass("eye-slash");
    } else {
        prev.type = "password";
        $(".eye-slash").removeClass().addClass("view");
    }
}
// start remove or reset data input
function removeData() {
    document.getElementById("myForm").reset();
}