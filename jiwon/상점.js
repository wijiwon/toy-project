let mon=0;


// HP 물약 선택시 수량 카운트 -----------------------------------------------------------------------------------------
function countHp(type)  {                                         // 물품 선택 시 카운트할 함수
    // 결과를 표시할 element
    const resultElement = document.getElementById('HPresult');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'HPplus' && number <= 998) {
      number = parseInt(number) + 1;

    }else if(type === 'HPminus' && number >= 1)  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }
//---------------------------------------------------------------------------------------------------------------------


// Atk 물약 선택시 수량 카운트 -----------------------------------------------------------------------------------------
function countAtk(type)  {                                         // 물품 선택 시 카운트할 함수
    // 결과를 표시할 element
    const resultElement = document.getElementById('ATKresult');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'ATKplus' && number <= 998) {
      number = parseInt(number) + 1;

    }else if(type === 'ATKminus' && number >= 1)  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }
//---------------------------------------------------------------------------------------------------------------------

// 검 선택시 수량 카운트 -----------------------------------------------------------------------------------------
function countSD(type)  {                                         // 물품 선택 시 카운트할 함수
    // 결과를 표시할 element
    const resultElement = document.getElementById('SDresult');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'SDplus' && number <= 998) {
      number = parseInt(number) + 1;

    }else if(type === 'SDminus' && number >= 1)  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }
//---------------------------------------------------------------------------------------------------------------------

// 갑옷 선택시 수량 카운트 -----------------------------------------------------------------------------------------
function countAM(type)  {                                         // 물품 선택 시 카운트할 함수
    // 결과를 표시할 element
    const resultElement = document.getElementById('AMresult');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'AMplus' && number <= 998) {
      number = parseInt(number) + 1;

    }else if(type === 'AMminus' && number >= 1)  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }
//---------------------------------------------------------------------------------------------------------------------

// 방패 선택시 수량 카운트 -----------------------------------------------------------------------------------------
function countSH(type)  {                                         // 물품 선택 시 카운트할 함수
    // 결과를 표시할 element
    const resultElement = document.getElementById('SHresult');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'SHplus' && number <= 998) {
      number = parseInt(number) + 1;

    }else if(type === 'SHminus' && number >= 1)  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }
//---------------------------------------------------------------------------------------------------------------------





// HP 물약 선택시 나타날 팝업 -----------------------------------------------------------------------------------------
/*
function popup(){                       //물품선택 시 나타날 팝업
    let popHp = document.querySelector(".infoHP");    //HP
    let popAtk = document.querySelector(".infoAtk");  //ATK
    let popSd = document.querySelector(".infoSd");    //sword
    let popAm = document.querySelector(".infoAm");    //armour
    let popSh = document.querySelector(".infoSh");    //shield
    console.log("동작");

    switch () {
      case popHp:
        
        break;
    
      default:
        break;
    }


    if(popHp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      popHp.classList.remove('open');
      console.log("동작");
      
    }
    else if(popHp.classList.contains('open')){
      popHp.classList.add('open');
      popAtk.style.display = `none`;
    }

    else if(popAtk.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      popAtk.classList.remove('open');
      console.log("동작");
      
    }
    else if(popAtk.classList.contains('open')){
      popAtk.classList.add('open');
      popHp.style.display = `none`;
    }
}

*/

function Xpopup(){                       //팝업 내 x 클릭 시 팝업 지워짐
  let popHP = document.querySelector(".infoSpan.close1");    //HP
  let popATK = document.querySelector(".infoSpan.close2");    //HP
  let popDEF = document.querySelector(".infoSpan.close3");    //HP
  let popSD = document.querySelector(".infoSpan.close4");    //HP
  let popSH = document.querySelector(".infoSpan.close5");    //HP


    if(popHP.classList.contains('close1')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      popHP.classList.remove('close1');
      popHP.classList.add('open1');
    }
    else if(popHP.classList.contains('close2')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      popHP.classList.remove('close2');
      popHP.classList.add('open2');
    }

}

//---------------------------------------------------------------------------------------------------------------------



function popup(){

  /*
  let HP = document.querySelector(".infoSpan.open1");     //none    //X block
  let ATK = document.querySelector(".infoSpan.open2");
  let DEF = document.querySelector(".infoSpan.open3");
  let SD = document.querySelector(".infoSpan.open4");
  let SH = document.querySelector(".infoSpan.open5");

  if(HP.classList.contains('open1')){
    HP.classList.remove('open1');
    ATK.classList.add('open2');
    DEF.classList.add('open3');
    SD.classList.add('open4');
    SH.classList.add('open5');
    HP.classList.add('close1');
  }
*/
let hp = document.querySelector(".open1");

if(hp.classList.contains('open1')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
  hp.classList.remove('open1');
}
else{
  hp.classList.add('open1');
}

let a = document.querySelector('.info'); // open2 눌렀을떄 떠있는 창을 닫고 open2 를 띄운다

for(let i=1 ; i <6 ; i++){
if(a.classList.contains('.info > openi')){  // open1 이 열려있을떄

    a.classList.add('openi'); // open1 을 지우고
    a.classList.remove('open1'); // open2를 더한다
  }
}
for(let i=1 ; i <6 ; i++){
if(a.classList.contains('.info > openi')){  // open1 이 열려있을떄

    a.classList.remove('openi'); // open1 을 지우고
    a.classList.add('open2'); // open2를 더한다
  }
}
for(let i=1 ; i <6 ; i++){
if(a.classList.contains('.info > openi')){  // open1 이 열려있을떄

    a.classList.remove('openi'); // open1 을 지우고
    a.classList.add('open3'); // open2를 더한다
  }
}
for(let i=1 ; i <6 ; i++){
if(a.classList.contains('.info > openi')){  // open1 이 열려있을떄

    a.classList.remove('openi'); // open1 을 지우고
    a.classList.add('open4'); // open2를 더한다
  }
}
for(let i=1 ; i <6 ; i++){
if(a.classList.contains('.info > openi')){  // open1 이 열려있을떄

    a.classList.remove('openi'); // open1 을 지우고
    a.classList.add('open5'); // open2를 더한다
  }
}

/*

  else if(HP.classList.contains('open2')){
    HP.classList.add('open1');
    ATK.classList.remove('open2');
    DEF.classList.add('open3');
    SD.classList.add('open4');
    SH.classList.add('open5');
    HP.classList.add('close2');
  }
*/

  /*
  if(HP.classList.contains('open1')){
    HP.classList.remove('open1');
    ATK.classList.add('open2');
    DEF.classList.add('open3');
    SD.classList.add('open4');
    SH.classList.add('open5');
  }
  else if(HP.classList.contains('open2')){
    HP.classList.add('open1');
    ATK.classList.remove('open2');
    DEF.classList.add('open3');
    SD.classList.add('open4');
    SH.classList.add('open5');
  }
  */
  
}



/*

// Atk 물약 선택시 나타날 팝업 -----------------------------------------------------------------------------------------

ATK.onclick =  function popup(){                       //물품선택 시 나타날 팝업
    let popAtk = document.querySelector(".infoAtk");

    if(popAtk.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      popAtk.classList.remove('open');
      
    }
    else{
      popAtk.classList.add('open');
    }
}

//---------------------------------------------------------------------------------------------------------------------

// 검 선택시 나타날 팝업 -----------------------------------------------------------------------------------------
SH.onclick = function () {
  let a = document.querySelector(.infosd.open);
  let b =document.querySelector(.info.open3)

  if(popSd.classList.contains('open1')){ // 상의를 눌렀는데 open2 아니면

      a.style.display = 'none';
      b.style.display = ' block'


  }
}


SD.onclick =  function popup(){                       //물품선택 시 나타날 팝업
  let popHp = document.querySelector(".infoHP");    //HP
  let popAtk = document.querySelector(".infoAtk");  //ATK
  let popSd = document.querySelector(".infoSd");    //sword
  let popAm = document.querySelector(".infoAm");    //armour
  let popSh = document.querySelector(".infoSh");    //shield

    if(popSd.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      popSd.classList.remove('open');
    }
    else{
      popSd.classList.add('open');
      if(popHp.style.display == `block`){
        console.log("실행1");
        popHp.style.display = `none`;
      }
      else if(popAtk.style.display == `block`){
        console.log("실행2");
        popAtk.style.display = `none`;
      }
      else if(popAm.style.display == `block`){
        console.log("실행1");
        popAm.style.display = `none`;
      }
      else if(popSh.style.display == `block`){
        console.log("실행4");
        popSh.style.display = `none`;
      }
      
    }
}
//---------------------------------------------------------------------------------------------------------------------

// 갑옷 선택시 나타날 팝업 -----------------------------------------------------------------------------------------

AM.onclick =  function popup(){                       //물품선택 시 나타날 팝업
  let popHp = document.querySelector(".infoHP");    //HP
  let popAtk = document.querySelector(".infoAtk");  //ATK
  let popSd = document.querySelector(".infoSd");    //sword
  let popAm = document.querySelector(".infoAm");    //armour
  let popSh = document.querySelector(".infoSh");    //shield

    if(popAm.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      popAm.classList.remove('open');
    }
    else{
      popAm.classList.add('open');
      popHp.style.display = `none`;
      popAtk.style.display = `none`;
      popSd.style.display = `none`;
      popSh.style.display = `none`;
    }
}

//---------------------------------------------------------------------------------------------------------------------

// 방패 선택시 나타날 팝업 -----------------------------------------------------------------------------------------

SH.onclick =  function popup(){                       //물품선택 시 나타날 팝업
    let pophp = document.querySelector(".infoSh");

    if(pophp.classList.contains('open')){     //open 클래스가 있는지 확인 있으면 true . display 적용은 css에서
      pophp.classList.remove('open');
    }
    else{
      pophp.classList.add('open');
    }
}
*/
//---------------------------------------------------------------------------------------------------------------------

function change(){
  
  let cun = document.querySelector(".monsterText");
  let money = document.querySelector(".moneyText");       //예시. 기존 소지하고 있는것과 연결되어야 함
  const getmre = document.querySelector(".cntRemains");
  

  let mre = getmre.innerText;
  // for (let cun = 0; index < array.length; index++) {
  //   const element = array[index];
    
  // }
  
  if(mre >= 5){
    mre = mre - 5;
    mon +=1000;
    cun.innerHTML =`${mre}`;
    money.innerHTML =`${mon}`;
    // console.log(`교환완료`);
    // console.log(typeof mon);
  }
  
  
  else if(mre == 0){
    mre = 0;
    alert(`현재 개수: ${mre}개. 교환 할 수 없습니다! `)
    console.log(`교환안됨`);
    console.log(mon);
  }
  cun.innerText = `${mre}`;
  getmre.innerText = `${mre}`;
  money.innerText = `${mon}`;

}
