$(document).ready(function(){
    if(window.matchMedia('(min-width: 992px)').matches){
        $("#block").load('Espace-partenaireMax.html');
    }
    else{
        $("#block").load('Espace-partenaireMin.html')
    };
})