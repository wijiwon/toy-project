let monsterAtk ; //몬스터 공격권
let playerAtk; // 플레이어 공격권
let userman;
let dieMonster=[];
let mainmonster;
let outputdiv = document.querySelector(".monster-output");

// 캐릭터 생성자함수
function user(number){
  if(number == 1){
    this.name = "player1"; //공격력 쎈 애
    this.atk = 40; //공격력 
    this.def = 10; //방격력 
  }
  else{
    this.name = "player2"; //방어력 쎈 애
    this.atk = 30; //공격력
    this.def = 20; //방격력 
  }
  // 고정값
  this.hp = 100; //체력 100
  this.exp = 0; //경험치 0
  this.money = 0; //돈 0
  this.item = null; //무기
  this.level = 1; //레벨
}

user1.onclick = function(){
  let mimg = document.querySelector(".player-img");
  mimg.classList.remove('img2');  
  mimg.classList.add('img1');  
  userman = new user(1);
  userselect(userman);

}
user2.onclick = function(){
  let mimg = document.querySelector(".player-img");
  mimg.classList.remove('img1');  
  mimg.classList.add('img2'); 
  userman = new user(0);
  userselect(userman);
}

function userselect(userman){
  // let outputUserData  = document.querySelector(".userData");

  let phpid = document.querySelector(".php-id");
  phpid.innerHTML=`체력: ${userman.hp}`;

  let patk = document.querySelector(".patk");
  patk.innerHTML=`공격력: ${userman.atk}`;

  let pdef = document.querySelector(".pdef");
  pdef.innerHTML=`방어력: ${userman.def}`;

  let pmoney = document.querySelector(".pmoney");
  pmoney.innerHTML=`소지금: ${userman.money}`;

  let exp = document.querySelector(".exp");
  exp.innerHTML=`EXP: ${userman.exp}/${userman.level * 30}`;


//   outputUserData.innerHTML = `캐릭터레벨${userman.level} 캐릭터이름: ${userman.name} 캐릭터HP: ${userman.hp}
//    캐릭터 공격력: ${userman.atk} 캐릭터 방어력: ${userman.def} 경험치: ${userman.exp}/${userman.level * 30}
//     돈: ${userman.money} 무기: ${userman.item}`;
}

// 몬스터 생성자함수
function monster(name, hp, atk, def, exp, money){
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.def = def;
  this.exp = exp;
  this.money = money
  this.box = null;
};

let monsterArr=[];

monsterArr.push(new monster("몬스터1", 100, 10, 10, 5, 1000));
monsterArr.push(new monster("몬스터2", 100, 20, 20, 10, 1000));




// 산책 버튼
walk.addEventListener("click",monsterChoice);

// 몬스터 랜덤으로 나오기
function monsterChoice(){  
  let randomIndex = Math.floor(Math.random()* monsterArr.length);

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
  let hpid = document.querySelector(".hp-id");
  hpid.innerHTML=`체력: ${mh/4}`;

  let atk = document.querySelector(".atk");
  atk.innerHTML=`공격력: ${mainmonster.atk}`;

  let def = document.querySelector(".def");
  def.innerHTML=`방어력: ${mainmonster.def}`;

  let money = document.querySelector(".money");
  money.innerHTML=`소지금: ${mainmonster.money}`;

  let monexp = document.querySelector(".monexp");
  monexp.innerHTML=`EXP: ${mainmonster.exp}`;

  let mimg = document.querySelector(".monster-img");
  
  mimg.classList.remove('img3');

  if(randomIndex==0){
    mimg.classList.remove('img2');
      mimg.classList.add('img1');
  }
  else{
    mimg.classList.remove("img1");
    mimg.classList.add('img2');
  }
}


// 랜덤박스 (hpPotion, atkPotion, turn) : 랜덤
function box(){
  let boxlist = ["체력증가물약","공격력증가물약","방어력증가물약"];
  let randombox = (Math.floor(Math.random()*boxlist.length));
  for (let i = 0; i < boxlist.length; i++) {
    switch (randombox) {
      case i:
        mainmonster.box = boxlist[i];
        break;
      default:
        break;
    };
  }
}
// 도망가기
run.onclick = function(){
  let immg = document.querySelector(".monster-img");

  if(immg.classList.contains("img1")){
    immg.classList.remove('img1');

    let hpbar = document.querySelector(".hp");
    hpbar.style.width = `400px`;

    let atk = document.querySelector(".atk");
    atk.innerHTML=`공격력:`;

    let def = document.querySelector(".def");
    def.innerHTML=`방어력:`;

    let money = document.querySelector(".money");
    money.innerHTML=`소지금:`;

    let monexp = document.querySelector(".monexp");
    monexp.innerHTML=`EXP:`;

  }
  else if(immg.classList.contains("img2")){
    immg.classList.remove('img2');

    let hpbar = document.querySelector(".hp");
    hpbar.style.width = `400px`;

    let atk = document.querySelector(".atk");
    atk.innerHTML=`공격력: `;

    let def = document.querySelector(".def");
    def.innerHTML=`방어력:`;

    let money = document.querySelector(".money");
    money.innerHTML=`소지금:`;

    let monexp = document.querySelector(".monexp");
    monexp.innerHTML=`EXP:`;
  }
  // mainmonster = null;
  // document.querySelector(".monster-status").innerHTML = mainmonster;
  
}

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
// 크리티컬, 일반 택1
function playerAttack(ph) {  
      
      let playerAttack = document.querySelector(".status-window");
      let bag = document.querySelector(".select-window");
      let sw = document.querySelector(".sw");
      let sw2 = document.querySelector(".sw2");
      let critical = parseInt(Math.random()*2);
      let mh =mainmonster.hp ;
      let hpbar = document.querySelector(".hp");
      let hpid = document.querySelector(".hp-id");
     
      hpbar.style.width = `${mh}px`;

      switch (critical) {
        case 0:

            bag.style.display='none'; //  가방 끄고
            playerAttack.style.display='block'; // 공격 상태창 띄우고
            playerAttack.innerHTML += `효과가 미미했다.${mainmonster.name}에게 ${(userman.atk - mainmonster.def)}피해를 입혔다`;
            mh = mh -(userman.atk - mainmonster.def);
            
            hpbar.style.width = `${mh*4}px`;
            hpid.innerHTML=`체력: ${mh}`;

            sw.style.display='block';

            if(mh>0){
              mainmonster.hp = mh;
            }

            // 몬스터가 죽었을 때
          else{ // mh가 0 이하일때


            mh =0;
            hpbar.style.width = `${mh}px`;
            hpid.innerHTML=`체력: ${mh}`;
            playerAttack.innerHTML =`${mainmonster.name}에게 ${((userman.atk)*2 - mainmonster.def)}피해를 입혔다.
            ${mainmonster.name}를 처치했다`;

            sw.style.display='none';
            sw2.style.display='block';

            expFun(mainmonster.exp, mainmonster.money);
          }
          
          break;

        case 1:

          bag.style.display='none';
          playerAttack.style.display='block';
          playerAttack.innerHTML = `효과가 굉장했다.${mainmonster.name}에게 ${((userman.atk)*2 - mainmonster.def)}피해를 입혔다`;
          mh = mh -((userman.atk)*2 - mainmonster.def);

          hpbar.style.width = `${mh}px`;
          hpid.innerHTML=`체력: ${mh}`;

          sw.style.display='block';

          if(mh>0){
            mainmonster.hp = mh;
          }

          // 몬스터가 죽었을 때
          else{ // mh가 0 이하일때

            mh =0;
            hpbar.style.width = `${mh}px`;
            hpid.innerHTML=`체력: ${mh}`;
            
            playerAttack.innerHTML =`${mainmonster.name}에게 ${((userman.atk)*2 - mainmonster.def)}피해를 입혔다.
            ${mainmonster.name}를 처치했다`;

            sw.style.display='none';
            sw2.style.display='block';


            expFun(mainmonster.exp, mainmonster.money);
          }

          break;

          default:
          break;
    }
}

// 플레이어가 공격후 재생버튼 누르면 몬스터가 공격하고 플레이어한테 공격권 준다
function monsterAttack() { 

   

    let monsterAttack = document.querySelector(".status-window3");
    let sw3 = document.querySelector(".sw3");
    let sw = document.querySelector(".sw");
    let playerAttack = document.querySelector(".status-window");

    let ph = userman.hp
    let phpbar=document.querySelector(".php");
    let phpid = document.querySelector(".php-id");
   

    if(monsterAtk==1 && playerAtk==0){ // 몬스터가 공격권일 떄

            playerAttack.style.display="none";
            playerAttack.innerHTML= null;
            sw.style.display="none";
            monsterAttack.style.display = "block";

            monsterAttack.innerHTML += `몬스터가 공격했다.${mainmonster.name}한테 ${(mainmonster.atk - userman.def)}피해를 입었다`;
            
            
            ph = ph -(mainmonster.atk - userman.def);
            
            
            ph4 = ph*4;
            alert("남은유저피" +ph)
             
            phpbar.style.width = `${ph4}px`;
            phpid.innerHTML=`체력: ${ph}`;

            sw3.style.display='block';

            if(ph>0){
              userman.hp = ph
            }
    }
}
function userturn(){  // 초기 선택창으로 가는거

  
  let bag = document.querySelector(".select-window");
  let reward = document.querySelector(".status-window2");
  let monsterAttack = document.querySelector(".status-window3");
  let sw = document.querySelector(".sw3");

      reward.style.display='none';
      monsterAttack.style.display='none'
      monsterAttack.innerHTML= null;  // 몬스터 공격창 지우고
      sw.style.display="none"; // 옆에 userturn 지우고
      bag.style.display ='block'; // 목록 다시 띄우고
}

function expFun(exp,money){
  userman.exp += exp;
  userman.money += money;
  dieMonster.push("몬스터 잔해물") // dieMonster 배열에 잔해물과  box 3개중 1개를 배열에 넣는다.
  dieMonster.push(mainmonster.box);

  let immg = document.querySelector(".monster-img");


  if(immg.classList.contains("img2")){ //보상 이미지 뜨게 해주고

    immg.classList.remove("img2");
    immg.classList.add("img3");
    
  }
  else if(immg.classList.contains("img1")){

    immg.classList.remove("img1");
    immg.classList.add("img3");
  
  }

  alert(dieMonster[0]);
  alert(dieMonster[1]);

  if(userman.level * 30 <= userman.exp){
    userman.exp -= userman.level * 30;
    userman.level += 1;
    userman.atk += 10;
    userman.def += 5;
    userman.hp += 50;
  }

  userselect(userman);
  // console.log(dieMonster);
}

function reward() {

  let reward = document.querySelector(".status-window2");
  let playerAttack = document.querySelector(".status-window");
  let sw3 = document.querySelector(".sw3");
  let sw2 = document.querySelector(".sw2");

  playerAttack.style.display='none';
  reward.style.display='block';
  sw2.style.display='none';
  sw3.style.display='block';

  reward.innerHTML =`${dieMonster[0]}과 ${dieMonster[1]}을 획득했다.`;

  monsterArr[0]=new monster("몬스터1", 100, 10, 10, 5, 1000);
  monsterArr[1]=new monster("몬스터2", 100, 20, 20, 10, 1000);
  
}
