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


Mycontainer.addEventListener('mousedown', function(e){
    document.addEventListener('mousemove', MyFunc)
});
    function MyFunc(event)
{     
    Mycontainer.style.position='absolute';
    Mycontainer.style.top= event.pageY +'px';
    Mycontainer.style.left= event.pageX+'px';    
          }

Mycontainer.addEventListener('mouseup', function(e){
    document.removeEventListener('mousemove', MyFunc)
});


