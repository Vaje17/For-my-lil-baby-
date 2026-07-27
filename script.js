// PAGE SWITCHING

function showPage(pageId){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

}


// START BUTTON

document.getElementById("startBtn").onclick = function(){

    showPage("letters");

};


// ENVELOPES

let openedLetters = 0;

const messages = [

"💌 My first letter: I just wanted to remind you that you are special to me and I love having you in my life ❤️",

"💌 My second letter: Even if we are far away, I still feel close to you. Distance can't change my feelings 🥺",

"💌 My third letter: Thank you for making me smile. I hope this little surprise makes you happy ❤️"

];


document.querySelectorAll(".letter").forEach(letter=>{


    letter.onclick = function(){


        if(this.classList.contains("opened")) return;


        this.classList.add("opened");


        let id = this.dataset.id;


        this.querySelector("img").src =
        "images/env_open.png";


        document.getElementById("letterText").innerHTML =
        messages[id-1];


        openedLetters++;


        if(openedLetters === 3){

            document.getElementById("nextBtn").style.display="block";

        }


    }


});


// GO TO DATE PAGE

document.getElementById("nextBtn").onclick=function(){

    showPage("date");

};
// YES / NO BUTTONS

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

const answerBox = document.getElementById("answerBox");

const flowerBox = document.getElementById("flowerBox");


yesBtn.onclick = function(){

    answerBox.innerHTML = `

    <img src="images/girl_happy.png" width="250">

    <h2>
    YAAAAAY ❤️<br>
    Be ready then!!
    </h2>

    `;


    flowerBox.style.display="block";


};



noBtn.onclick = function(){

    answerBox.innerHTML = `

    <img src="images/girl_sad.png" width="250">

    <h2>
    Oh noooo 🥺<br>
    Please say yes...
    </h2>

    `;


};



// FLOWER CLICK

document.getElementById("flower").onclick=function(){


    document.getElementById("paper").style.display="block";


};



// BACK BUTTON

document.getElementById("backBtn").onclick=function(){


    showPage("final");


};



// LITTLE HEART EFFECT

function createHeart(){


    const heart=document.createElement("div");


    heart.innerHTML="❤️";


    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-20px";

    heart.style.fontSize=
    Math.random()*20+15+"px";


    heart.style.animation=
    "rise 5s linear";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },5000);


}


setInterval(createHeart,700);



// ADD HEART ANIMATION

const style=document.createElement("style");

style.innerHTML=`

@keyframes rise{

from{

transform:translateY(0);

opacity:1;

}

to{

transform:translateY(-110vh);

opacity:0;

}

}

`;


document.head.appendChild(style);
