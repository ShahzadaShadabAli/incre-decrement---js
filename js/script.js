document.querySelector('.decrement').onclick = function(){
   
    var counter = document.querySelector('.counter').innerHTML
    if(counter == 0){
        document.querySelector('.counter').innerHTML = 0;
    } else{
        document.querySelector('.counter').innerHTML = counter -1;
    }
    
}

document.querySelector('.increment').onclick = function(){
   
    var counter = document.querySelector('.counter').innerHTML
    
          document.querySelector('.counter').innerHTML = Number(counter) +1;
    
    
}

document.querySelector('.reset').onclick = function(){
     document.querySelector('.counter').innerHTML=0

}