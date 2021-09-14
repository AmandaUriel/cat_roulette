const btn = document.querySelector('button');//call button
const img = document.getElementById("image");//call image
const form = document.querySelector("form");//call form
const input1 = document.getElementById('user1');
const input2 = document.getElementById('user2');
const time = document.getElementById('time');

let counter = 0;//number of clicks
let randomNum = Math.ceil(Math.random() * 20);//1 - 20
let maxi = 20;//max amount of clicks

if( randomNum == 1 ){ randomNum + 1; };//if it's 1, be 2

btn.innerHTML = "Click Me!";//add button a tetx

btn.onclick = () => {
    
    if(( input1.value ) && ( input2.value )){
        
        form.style.display = 'none';
        counter++;//increase counter
        maxi--;

        if(counter < randomNum){
            
            btn.innerHTML = "Luck! Click Again! "+maxi;
            btn.style.left = '11%';
            btn.classList.add('btn');

            if( maxi % 2 === 0){
                time.innerHTML = "It's "+input1.value+" time!";
            }else{
                time.innerHTML = "It's "+input2.value+" time!";
            }

        }else{
            if( randomNum % 2 === 0 ){
                img.src = "IMG/catgun_player_1.jpg";
            }else{
                img.src = 'IMG/catgun_player_2.jpg';
            }
            btn.style.left = '30%';
            btn.innerHTML = "RELOAD";

            if( counter === randomNum ){
                if( maxi % 2 === 0){
                    time.innerHTML = input1.value+" Lose";
                }else{
                    time.innerHTML = input2.value+" Lose";
                }
            }

        }

        if(counter === randomNum+1){
            location.reload();//reload the page duh
        }

    }
}