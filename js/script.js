function isMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true
       } else {
           return false
       }
}

$(document).ready(function () {
    for (i = 1; i <= 10; i++) {
        $("#input_div").append('<input  id="count' + i.toString() + '" name="order" type="number" min="0" max="30" size="10" range="1" value="1">');
    }
});


function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Anket Linki Kopyalandı: " + copyText.value);
}
$(function () {
    var scntDiv = $('#p_scents');
    var i = $('#p_scents p').size() + 1;

    $('#addScnt').live('click', function () {
        $('<p><label for="p_scnts"><input type="text" id="p_scnt" size="20" name="p_scnt_' + i + '" value="" placeholder="Input Value" /></label> <a href="#" id="remScnt">Remove</a></p>').appendTo(scntDiv);
        i++;
        return false;
    });

    $('#remScnt').live('click', function () {
        if (i > 2) {
            $(this).parents('p').remove();
            i--;
        }
        return false;
    });
});
