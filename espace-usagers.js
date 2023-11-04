$(document).ready(function(){
    if(window.matchMedia('(min-width: 992px)').matches){
        $("#block").load('Espace-usagerMax.html');
    }
    else{
        $("#block").load('Espace-usagerMin.html')
    };
})