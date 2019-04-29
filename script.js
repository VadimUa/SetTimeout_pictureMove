var image = document.querySelector('img.tank');
image.style.setProperty('position', 'absolute');
image.style.setProperty('left', '100px');

    function move_image(){
    let left = image.style.left;
    left = parseInt(left);
    left +=25; 
    image.style.left = left + 'px';
    }
    
let exitcase =  setInterval(move_image, 1000);
if( left > screen.width){
    exitcase = clearInterval(exitcase);
}