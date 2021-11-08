const btn = document.querySelector('button');//call button
const img = document.getElementById("image");//call image
const form = document.querySelector("form");//call form
const input1 = document.getElementById('user1');
const input2 = document.getElementById('user2');
const time = document.getElementById('time');

let counter = 0;//number of clicks
let maxi = 20;//max amount of clicks
let randomNum = Math.ceil(Math.random() * 20);//1 - 20

if( randomNum === 1 ){ randomNum + 1; };//if it's 1, be 2

btn.innerHTML = "Click Me!";//add button a tetx

// when click on the button
btn.onclick = () => {
    
    // if both player names isn't blank:
    if(( input1.value ) && ( input2.value )){
        
        form.style.display = 'none';// form to add player's name dissapear
        counter++;//increase counter
        maxi--;//decrease the maximun num.

        // while counter is less than the choosen number
        if(counter < randomNum){
            
            btn.innerHTML = "Luck! Click Again! "+maxi;
            btn.classList.add('btn');

            if( maxi % 2 === 0){
                time.innerHTML = input1.value+" you're Lucky!";
            }else{
                time.innerHTML = input2.value+" you're Lucky!";
            }

        }else{
            // randomly choose a image (for gameover)
            let randomImg = Math.floor( Math.random() * 7 );// 0 - 7
            
            // pick a random cat picture
            switch( randomImg ){
                case 0: img.src = "IMG/catgun_player_1.jpg"; break;
                case 1: img.src = "IMG/catgun_player_2.jpg"; break;
                case 2: img.src = "IMG/catgun_3.jpg"; break;
                case 3: img.src = "IMG/catgun_4.jpg"; break;
                case 4: img.src = "IMG/catgun_5.png"; break;
                case 5: img.src = "IMG/catgun_6.jpg"; break;
                case 6: img.src = "IMG/catgun_7.jpg"; break;
            }

            // change button text
            btn.innerHTML = "RELOAD";

            // if counter is equal the random choosen number (game over)
            if( counter === randomNum ){
                if( maxi % 2 === 0){
                    time.innerHTML = input1.value+" Lose";
                }else{
                    time.innerHTML = input2.value+" Lose";
                }
            }

        }

        // when click reload, it will increase the counter then it will became greater then the randomNum
        // so before it, reload the page
        if(counter === randomNum+1){
            location.reload();//reload the page duh
        }


    }

}