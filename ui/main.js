console.log('Loaded!');

//changing the inner html
var element=document.getElementById('main-text');
element.innerHTML='New-value';

//move the image
var img=document.getElementById('madi');
function moveRight()
{
   var marginLeft=marginLeft+10;
   madi.style.marginLeft=marginLeft+'px';
}
madi.onclick=function(){
var interval=setInterval(moveRight,100) ;
};