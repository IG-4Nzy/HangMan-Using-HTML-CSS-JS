const words = [
    {
        word :"apple",
       hints: {
            hint1:"a fruit",
            hint2:"round shaped fruit",
            hint3: "red color"
        }
    },
    {
        word :"book",
       hints: {
            hint1:"flat surface",
            hint2:"mainly used by students",
            hint3: "memory"
        }
    },
    {
        word :"dog",
       hints: {
            hint1:"animal",
            hint2:"domestic and wild",
            hint3: "barks"
        }
    },
    {
        word: "cat",
        hints: {
          hint1: "animal",
          hint2: "commonly kept as a pet",
          hint3: "meows"
        }
      },
      {
        word: "tree",
        hints: {
          hint1: "plant",
          hint2: "has leaves",
          hint3: "provides shade"
        }
      },
      {
        word: "book",
        hints: {
          hint1: "object",
          hint2: "contains pages",
          hint3: "read for information"
        }
      },
      {
        word: "sun",
        hints: {
          hint1: "star",
          hint2: "provides light",
          hint3: "source of heat"
        }
      },
      {
        word: "car",
        hints: {
          hint1: "vehicle",
          hint2: "runs on roads",
          hint3: "has four wheels"
        }
      },
      {
        word: "water",
        hints: {
          hint1: "liquid",
          hint2: "essential for life",
          hint3: "flows in rivers"
        }
      },
      {
        word: "computer",
        hints: {
          hint1: "device",
          hint2: "used for processing information",
          hint3: "has a screen and keyboard"
        }
      },
      {
        word: "pizza",
        hints: {
          hint1: "food",
          hint2: "popular dish",
          hint3: "made with dough and toppings"
        }
      },
      {
        word: "football",
        hints: {
          hint1: "sport",
          hint2: "played with a ball",
          hint3: "involves kicking"
        }
      },
      {
        word: "guitar",
        hints: {
          hint1: "instrument",
          hint2: "stringed",
          hint3: "played with fingers or a pick"
        }
    }
]


let wordGuessed = '';
let word;
let tries = 0;
let parts = document.getElementsByClassName('parts');
let flag = 0;
let dash;
let hintsText;
let clicks = 0;
let modal;
let modalText;



document.addEventListener('DOMContentLoaded',function(){
    dash = document.getElementById('dashDiv');
    hintsText = document.getElementById('hint');
    modal = document.getElementById('modal');
    modalText = document.getElementById('text-content');
    console.clear();
    generateNewWord();

})

function generateNewWord(){
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWordObj = words[randomIndex];
    const hintLists = document.getElementById('hintLists');

    word = randomWordObj.word;
    const hints = randomWordObj.hints;

    console.log(word);

    for (let hint in hints){
        console.log(hints[hint]);
        const element = document.createElement('li');
        element.textContent = hints[hint];
        hintLists.appendChild(element);
    }

    generateDash(word);

}

function restart(){
    window.location.reload();
}

function buttonClicked(letter){
    if(flag != 3){
        const dashes = document.getElementsByClassName('dash');
        if(tries >= word.length){
            setTimeout(function(){
                modal.classList.remove('hidden');
                modalText.textContent="YOU LOSE";
            },100);
        }else if (word.includes(letter)){
            tries ++;
            console.log(wordGuessed);

            for (let i = 0; i < word.length; i++) {
                if (word[i] === letter) {
                    dashes[i].textContent = letter.toUpperCase();
                    wordGuessed += letter;
                }
            }

            isWordCorrect(wordGuessed);
        }else{
            parts[flag].classList.remove('hidden');
            flag ++;
        }
    }else{
        parts[flag].classList.remove('hidden');
        setTimeout(function(){
            modal.classList.remove('hidden');
            document.querySelector('.container').classList.remove('relative');
            modalText.textContent="YOU LOSE";
        },500);
    }
    
   
}

function isWordCorrect(wordGuessed){
    if (word == wordGuessed){
        setTimeout(function(){
            modal.classList.remove('hidden');
            document.querySelector('.container').classList.remove('relative');
            modalText.textContent="YOU WIN";
        },1000);
        
    }
}

function generateDash(word){
    for (i = 0 ; i < word.length ; i++){
        const element = document.createElement('div');
        element.classList.add('dash');
        dash.appendChild(element);
    }
}

function closeModal(){
    modal.classList.add('hidden');
    restart();
}