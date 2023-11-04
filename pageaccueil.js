$(document).ready(function(){
    if(window.matchMedia('(min-width: 992px)').matches){
        $("#block").load('pageAccueilMax.html');
    }
    else{
        $("#block").load('pageAccueilMin.html')
    };
})