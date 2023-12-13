$(document).ready(function () {
    $('#Submit').click(function () {
        var user = $('#username').val();
        if (user == "") {
            $('#ShowError1').html('**The username must be filled.');
            $('#ShowError1').css('color', 'red');
            return false;
        }

        if ((user.length <= 2) || (user.length >= 20)){
            $('#ShowError1').html('**The username must be between 3 and 20 letter.');
            $('#ShowError1').css('color', 'red');
            // $('#ShowError').css('text-wrap', 'wrap');
            return false;
        }

        var em=$('#email').val();
        if (em == "") {
            $('#ShowError2').html('**The E-mail must be filled.');
            $('#ShowError2').css('color', 'red');
            return false;
        }

        var phn=$('#phonenumber').val();
        if (phn == "") {
            $('#ShowError3').html('**The Phone number must be filled.');
            $('#ShowError3').css('color', 'red');
            return false;
        }
    });
})    