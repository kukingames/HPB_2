const name = "咲良"; // ← 好きな子の名前

window.addEventListener("load", () => {

    document.getElementById("birthdayName").textContent = name;

});

    for(let i=0;i<30;i++){
    const h=document.createElement('div');
    h.className='heart';
    h.innerHTML='💖';
    h.style.left=Math.random()*100+'vw';
    h.style.fontSize=(18+Math.random()*20)+'px';
    h.style.animationDuration=(5+Math.random()*5)+'s';
    document.body.appendChild(h);
}

function openLetter(){
document.querySelector('.envelope').style.transform='scale(1.5)';
setTimeout(startBirthday,1000);
}

function startBirthday(){
document.getElementById('start').style.display='none';
const c=document.getElementById('countdown');
c.style.display='flex';
let n=3;
c.textContent=n;

const t=setInterval(()=>{
n--;
if(n>0){c.textContent=n;}
else{
clearInterval(t);
c.textContent='🥳';
confetti();
setTimeout(()=>{
c.style.display='none';
document.getElementById('main').style.display='flex';
},1000);
}
},1000);
}

function confetti(){

    const colors = [
        "#ff7eb6",
        "#ffd6e7",
        "#ffffff",
        "#ffe066"
    ];

    for(let i = 0; i < 80; i++){

        const d = document.createElement("div");

        d.className = "confetti";

        d.style.left = Math.random() * 100 + "vw";
        d.style.top = "-20px";

        const size = 6 + Math.random() * 6;

        d.style.width = size + "px";
        d.style.height = size + "px";

        d.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        d.style.animationDuration =
            (2 + Math.random()) + "s";

        document.body.appendChild(d);

        setTimeout(() => d.remove(), 3500);
    }

    // キラキラ追加
    for(let i = 0; i < 30; i++){

        const star = document.createElement("div");

        star.className = "sparkle";
        star.textContent = "✨";

        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        document.body.appendChild(star);

        setTimeout(() => star.remove(), 2500);
    }

    flashEffect();
}

function flashEffect(){

    const flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.top = "0";
    flash.style.left = "0";
    flash.style.width = "100vw";
    flash.style.height = "100vh";

    flash.style.background =
"radial-gradient(circle,#ffffff,#ffd6e7)";

    flash.style.opacity = "0";
    flash.style.pointerEvents = "none";

    flash.style.zIndex = "99999";

    document.body.appendChild(flash);

    flash.animate(
        [
            { opacity: 0 },
            { opacity: 0.8 },
            { opacity: 0 }
        ],
        {
            duration: 400,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        flash.remove();
    }, 400);
}

const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show');});
});

window.addEventListener('load',()=>{
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('secretBtn').onclick=()=>{
document.getElementById('secretMessage').style.display='block';
};
});
