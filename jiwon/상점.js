

function count(type)  {                                         // 물품 선택 시 카운트할 함수
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus' && number <= 9) {
      number = parseInt(number) + 1;

    }else if(type === 'minus' && number >= 1)  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }


function popup(){                       //물품선택 시 나타날 팝업
    let HP = document.querySelector(".posionHP");
    let pophp = document.querySelector(".infoHP");
    let open = true;
        switch (open) {
            case true:
                pophp.style.display='none';
                open = false;
                console.log(open);
                break;
            case false:
                pophp.style.display='block';
                open = true;
                console.log(open);
                break;

        }

  
}


