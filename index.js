function bagOpen(){ //

    let bag = document.querySelector(".select-window");
    let inven = document.querySelector(".inven");
    // console.log(bag);
        bag.style.display ='none';
        inven.style.display='block';
      
}

function back() {
    let back = document.querySelector(".back");
    let bag = document.querySelector(".select-window");
    let inven = document.querySelector(".inven");

    bag.style.display ='block';
    inven.style.display='none';
    
}

function weapon(){

    let playImgChange = document.querySelector(".player-img");

    if(playImgChange.classList.contains("is-active")){ // class 있으면
        
        
      }
      else{ // class 없으면
        playImgChange.className = playImgChange.className + " weapon";
      }
}
