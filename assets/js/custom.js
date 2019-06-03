$(document).ready(function() {
    $('.modal').modal();
    $('.dropdown-trigger').dropdown();
    $('.datepicker').datepicker();
    $('select').formSelect();


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


});

function showPassword() {
    var prev = document.getElementById("password");
    if (prev.type === "password") {
        prev.type = "text";
    } else {
        prev.type = "password";
    }
}

function removeData() {
    document.getElementById("myForm").reset();
}