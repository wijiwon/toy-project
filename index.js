let monsterAtk ; //몬스터 공격권
let playerAtk; // 플레이어 공격권

function bagOpen(){ //

    let bag = document.querySelector(".select-window");
    let inven = document.querySelector(".inven");
    // console.log(bag);
        bag.style.display ='none';
        inven.style.display='block';
      
}

function back(){
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
        // playImgChange.classList.remove("weapon");

        // setTimeout(function() {
        //   playImgChange.classList.remove("weapon");
        // }, 1000);
      }
}

// 공격 버튼을 눌렀을 때 할퀴기모션이 나오고 1초뒤에 사라지고 몬스터한테 공격권 주고(1)
// 몬스터 공격
function atk(){ 

    let atkmotion = document.querySelector(".atkmotion");
    atkmotion.style.display='block';

     setTimeout(function() {
      atkmotion.style.display='none';
        }, 1000);

    monsterAtk = 1;
    playerAtk = 0;
    playerAttack();
    
    
    
}
// 
function playerAttack() {  
      
      let playerAttack = document.querySelector(".status-window");
      // let playerAttack2 = document.querySelector(".status-window2");
      let bag = document.querySelector(".select-window");
      let sw = document.querySelector(".sw");
      // let sw2 = document.querySelector(".sw2");
    
      let critical = parseInt(Math.random()*2);
      
      switch (critical) {
        case 0:
            bag.style.display='none';
            playerAttack.style.display='block';
            playerAttack.textContent = `효과가 미미했다.`;
            sw.style.display='block';
          
          break;

        case 1:

          bag.style.display='none';
          playerAttack.style.display='block';
          playerAttack.textContent = `효과가 굉장했다.`;
          sw.style.display='block';
          // bag.style.display='none';
          
          // playerAttack2.style.display='block';
          // sw2.style.display='block';
          
            
          break;

        default:
          break;
      }

}

// 플레이어가 공격후 재생버튼 누르면 몬스터가 공격하고 플레이어한테 공격권 준다
function monsterAttack() { 

    alert(monsterAtk);
    alert(playerAtk);

    let monsterAttack = document.querySelector(".status-window3");
    let sw3 = document.querySelector(".sw3");
    let sw = document.querySelector(".sw");
    let playerAttack = document.querySelector(".status-window");

    if(monsterAtk==1 && playerAtk==0){ // 몬스터가 공격권일 떄

            playerAttack.style.display="none";
            sw.style.display="none";
            monsterAttack.style.display = "block";
            monsterAttack.textContent=`몬스터가 공격했다`;
            sw3.style.display='block';
            //  monsterAtk = 0;
            //  playerAtk = 1;
    }
    // else if(monsterAtk==0 && playerAtk==1){ //유저가 공격권 일 때

    //   let bag = document.querySelector(".select-window");
      
    //   // console.log(bag);
    //       bag.style.display ='block';
          


    // }
    
     
//     if(monsterAtk==1 && playerAtk==0){
//       
      
      

//         monsterAtk=0;
//         playerAtk=1;
    
        
//  }
//    else if(monsterAtk==0 && playerAtk==1){

//  }

}
function userturn(){
  let bag = document.querySelector(".select-window");
  let monsterAttack = document.querySelector(".status-window3");
  let sw = document.querySelector(".sw3");

      monsterAttack.style.display='none'; 
      sw.style.display="none";
      bag.style.display ='block';


}