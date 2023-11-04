$(document).ready(function(){
    if(window.matchMedia('(min-width: 992px)').matches){
        $("#block").load('Zone-interventionMax.html');
    }
    else{
        $("#block").load('Zone-interventionMin.html')
    };
})