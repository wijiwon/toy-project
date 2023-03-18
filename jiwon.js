
function basicsetting(name, hp, atk, def, money){
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.money = money;

}



let player = new basicsetting("플레이어", 500, 100, 30, 20000); //이름, hp, 공격력, 방어력, 소지금
console.log(player);
let monster = new basicsetting("몬스터", 300, 100, 30);
console.log(monster);

let inven = [];             //플레이어 인벤토리
let box = [boxMoney, boxexp, boxHpPosion, boxAtkPosion, boxTurnAgain, Weapon]; //보상_돈, 경험치, hp물약, 공격력증가물약, 턴한번더, 무기

function divFight(){
    console.log("공격버튼 눌림");
    playerTurn();
}

let playerAtk = true;      //플레이어 선공권
let monsterAtk = true;  //몬스터 선공권


function playerTurn(platerAtteck){         // 플레이어 주도 공격턴. 만들어져 있던 변수 player애서 가져와야 한다.
    let playerAtteckTurn = document.querySelector(".player");
    while (player.hp > 0 && monster.hp > 0 && playerAtk == true) {
        if(player.hp > 0 && monster.hp >= 0){       //플레이어 hp가 0이 아니면 공격진행
            monster.hp = monster.hp - (player.atk - monster.def);
            alert(`플레이어 공격! 효과는 미비했다.`)
            console.log("플레이어 공격. 몬스터 hp: " + monster.hp);
            monsterAtk = true;
            monsterTurn();
        }
        else if (player.hp > 0 && monster.hp <= 0){                       //플레이어가 승리하면 보상흭득
            inven.push()

            console.log(inven);
            playerAtk == false;
        }
        else if (player.hp <= 0 && monster.hp >= 0){                       //플레이어 hp가 0이면 공격x
            playerAtk == false;
        }

        break;
    }
    

    
}



function monsterTurn(monsterAtteck){         // 몬스터 주도 공격턴. 만들어져 있던 변수 monster애서 가져와야 한다.
    let monsterAtteckTurn = document.querySelector(".monster");
    while (monster.hp > 0 && player.hp > 0 && monsterAtk == true) {
        if(monster.hp > 0 ){       //몬스터 hp가 0이 아니면 공격진행
            player.hp = player.hp - (monster.atk - player.def);
            alert(`몬스터 공격! 효과는 미비했다.`)
            console.log("몬스터 공격. 플레이어 hp: " + player.hp);
            playerTurn();
        }
        else if (monster.hp <= 0){                       //플레이어 hp가 0이면 공격x
            monsterAtk == false;
        }
        break;
    }
    

}


function critical(){            //크리티컬
    
    while(){
        if(){
            
        }
        else{
            
        }
    }
}