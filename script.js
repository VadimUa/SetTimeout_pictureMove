let exitcase =  setInterval(move_image_right, 1000);
var image = document.querySelector('img.tank');
image.style.setProperty('position', 'absolute');
image.style.setProperty('left', '5px');
image.style.setProperty('right', '5px');

    function move_image_right(){
    let left = image.style.left;
    left = parseInt(left);
    left +=25; 
    image.style.left = left + 'px';
    }
    
move_image_right();

if( image.onclick() ){
   function move_image_left(){
    let right = image.style.right;
    right = parseInt(right);
    right +=25; 
    image.style.right = right + 'px'; 
   }
}

