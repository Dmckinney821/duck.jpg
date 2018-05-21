$('#mainImageLinks li a').bind('mouseenter', function() {
    var url = $(this).attr('href');
    $('#mainImage').attr('src', url);
    return false; // prevent the default action on click
 });