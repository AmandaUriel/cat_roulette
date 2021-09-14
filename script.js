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
                img.src = "https://i1.sndcdn.com/avatars-000318220287-pxw0p3-t500x500.jpg";
            }else{
                img.src = 'https://s.keepmeme.com/files/en_posts/20200822/0095dcd8ed821a024a2b383a9b01bc04cute-cat-holding-a-gun.jpg';
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