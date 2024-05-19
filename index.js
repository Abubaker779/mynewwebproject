document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#AU-link').addEventListener('click',() => {load_cont('AU');});
    document.querySelector('#ABK-link').addEventListener('click',() => {load_cont('ABK');});
    document.querySelector('#IEA-link').addEventListener('click',() => {load_cont('IEA');});
    document.querySelector('#GST-link').addEventListener('click',() => {load_cont('GST');});
    document.querySelector('#IT-link').addEventListener('click',() => {load_cont('IT');});    
    document.querySelector('#TDS-link').addEventListener('click',() => {load_cont('TDS');});


    load_cont('AU');
});



function load_cont(arg){

    document.querySelectorAll('.Info').forEach(function(element){
        element.style.display='none';
    })


    if(arg){
        document.querySelector(`#${arg}`).style.display='block';
    }

}