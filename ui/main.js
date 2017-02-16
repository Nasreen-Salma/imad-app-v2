console.log('Loaded!');

//changing the inner html
var element=document.getElementById('main-text');
element.innerHTML='New-value';

//move the image
var img=document.getElementById('madi');
var marginLeft=0;

function moveRight()
{
   marginLeft=marginLeft+10;
   img.style.marginLeft=marginLeft+'px';
}
madi.onclick=function(){
var interval=setInterval(moveRight,50) ;
};