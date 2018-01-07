var Mybutton= document.getElementById('but1')
var Mycontainer= document.getElementById('container')
var Myfilter= document.getElementById('filter')
Mybutton.addEventListener('click', function(event){
    Myfilter.style.display='block'
    Mycontainer.style.display='block'
    
})
var Myclick= document.getElementById('icon')
Myclick.addEventListener('click', function(event){
    Mycontainer.style.display='none'
    Myfilter.style.display='none'
})
Myfilter.addEventListener('click', function(event){
    Myfilter.style.display='none'
    Mycontainer.style.display='none'
})