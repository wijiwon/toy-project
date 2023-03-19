
walk.addEventListener("click",monsterChoice());

function monsterChoice(){  
    let randomIndex = Math.floor(Math.random()* monsterArr.length); //랜덤 값 담고
    for (let i = 0; i < monsterArr.length; i++) {
      switch (randomIndex){
        case i:
            mainmonster = monsterArr[i];
            box();
          break;
        default:
          break;
      }
    }
    // outputdiv.innerHTML = `몬스터이름: ${mainmonster.name} 몬스터HP: ${mainmonster.hp} 
    // 몬스터 공격력: ${mainmonster.atk}  몬스터 방격력: ${mainmonster.def} 몬스터랜덤박스: ${mainmonster.box}`
    let hpbar = document.querySelector(".hp");
    let mh = (mainmonster.hp*4);
    for (let i = 40; i < 401; i+=40) {
      switch (mh){ 
        case i:
           hpbar.style.width = `${mh}px`;
          break;
        default:
          break;
      }
    }
    let atk = document.querySelector(".atk");
    atk.innerHTML=`공격력: ${mainmonster.atk}`;
  
    let def = document.querySelector(".def");
    def.innerHTML=`방어력: ${mainmonster.def}`;
  
    let money = document.querySelector(".money");
    money.innerHTML=`소지금: ${mainmonster.money}`;
  
    let monexp = document.querySelector(".monexp");
    monexp.innerHTML=`EXP: ${mainmonster.exp}`;
  
    let mimg = document.querySelector(".monster-img");
    
    if(randomIndex==0){
      mimg.classList.remove('img2');
        mimg.classList.add('img1');
    }
    else{
      mimg.classList.remove("img1");
      mimg.classList.add('img2');
    }
  }