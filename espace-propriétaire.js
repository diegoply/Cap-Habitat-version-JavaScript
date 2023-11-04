$(document).ready(function(){
    if(window.matchMedia('(min-width: 992px)').matches){
        $("#block").load('Espace-propriétaireMax.html');
    }
    else{
        $("#block").load('Espace-propriétaireMin.html')
    };
})