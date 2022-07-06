$(document).ready(function(e){
    $('#menu').load('./views/menu.html', function(data){
        $(this).html(data);
    })
});
$(document).ready(function(e){
    $('#home').load('./views/home.html', function(data){
        $(this).html(data);
    })
});