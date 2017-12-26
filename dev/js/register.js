/*
 * (c) Afaan Bilal
 */
$(function() {
    
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            $('#success').html("<div class='alert alert-info'>");
                    $('#success > .alert-info').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-info')
                        .append("<strong><i class='fa fa-spin fa-cog'></i> Please wait... </strong>");
                    $('#success > .alert-info')
                        .append('</div>');
            
                        // get values from FORM
            var name = $("#name").val();
            var phone = $("#phone").val();
            var email = $("#email").val();
            var instt = $("#institution").val();
            var parentage = $("#parentage").val();
            var academic = $("#academic").val();
            var address = $("#address").val();

            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbw0HF5NoukyBTEjZ4h9dvgalBlGsRP4_IWQmwnUN2nOhj_1CPKL/exec",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    instt: instt,
                    parentage: parentage,
                    academic: academic,
                    address: address
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Registration details successfully sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#registerForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that our servers are not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#registerForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
