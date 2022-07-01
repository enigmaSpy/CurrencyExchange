const userHave = document.querySelector('.owned');
const userWant = document.querySelector('.wanted');
const userOwnedCur = document.querySelector('.ownedCur');
const userWantedCur =document.querySelector('.wantedCur');
const primaryButton = document.querySelector('.primaryButton');
const reverseBtn = document.querySelector('.reverseBtn');
const currency = {
    pln: 1.00,
    eur: 0.2125,
    dol: 0.2232,
    jpy: 30.64,
};

const reverseOptions =()=>{
   let userH = +userHave.value;
   let userW = +userWant.value;

   let ownedCur = userOwnedCur.value;
   let wantedCur = userWantedCur.value;

   userHave.value = userW;
   userWant.value = userH;
   userWantedCur.value =ownedCur;
   userOwnedCur.value =wantedCur;
};

const reverseBtnFunc=()=>{
    reverseBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        reverseOptions();
    });
}
const exchangeFunc = ()=>{
    if (!userHave.value || userHave.value==0 ) {
        userHave.style.backgroundColor = 'rgb(202, 162, 162)';
    }
    else{
        userHave.style.backgroundColor = 'white';
        userWant.value= ( +userHave.value * currency[userWantedCur.value] / currency[userOwnedCur.value]).toFixed(2);
    }
}

const init=()=>{

    primaryButton.addEventListener('click', (e)=>{
        e.preventDefault();
        exchangeFunc();
    }); 
    userOwnedCur.addEventListener('input', ()=>{
        exchangeFunc();
    });
    userWantedCur.addEventListener('input', ()=>{
        exchangeFunc();
    });
    reverseBtnFunc();
    
};
init();