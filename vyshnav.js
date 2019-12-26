class TextScramble{constructor(el){this.el=el;this.chars='!<>-_\\/[]{}—=+*^?#Hacker________';this.update=this.update.bind(this);}
setText(newText){const oldText=this.el.innerText;const length=Math.max(oldText.length,newText.length);const promise=new Promise(resolve=>this.resolve=resolve);this.queue=[];for(let i=0;i<length;i++){const from=oldText[i]||'';const to=newText[i]||'';const start=Math.floor(Math.random()*40);const end=start+Math.floor(Math.random()*40);this.queue.push({from,to,start,end});}
cancelAnimationFrame(this.frameRequest);this.frame=0;this.update();return promise;}
update(){let output='';let complete=0;for(let i=0,n=this.queue.length;i<n;i++){let{from,to,start,end,char}=this.queue[i];if(this.frame>=end){complete++;output+=to;}else if(this.frame>=start){if(!char||Math.random()<0.28){char=this.randomChar();this.queue[i].char=char;}
output+=`<span class="dud">${char}</span>`;}else{output+=from;}}
this.el.innerHTML=output;if(complete===this.queue.length){this.resolve();}else{this.frameRequest=requestAnimationFrame(this.update);this.frame++;}}
randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)];}}
const phrases=['<b>INFOSECIANS</b>'];const el=document.querySelector('.text');const fx=new TextScramble(el);let counter=0;const next=()=>{fx.setText(phrases[counter]).then(()=>{setTimeout(next,800);});counter=(counter+1)%phrases.length;};next();

$(document).ready(function() {
$("#intro-text > h2").css('opacity',1).lettering('words').children("span").lettering().children("span").lettering(); 
})

/*Life's Not Complete Without Art. (Expand Your Editor > ASCII Is Not Responsive ;)


                    ,.ood888888888888boo.,
               .od888P^""            ""^Y888bo.
           .od8P''   ..oood88888888booo.    ``Y8bo.
        .odP'"  .ood8888888888888888888888boo.  "`Ybo.
      .d8'   od8'd888888888f`8888't888888888b`8bo   `Yb.
     d8'  od8^   8888888888[  `'  ]8888888888   ^8bo  `8b
   .8P  d88'     8888888888P      Y8888888888     `88b  Y8.
  d8' .d8'       `Y88888888'      `88888888P'       `8b. `8b
 .8P .88P            """"            """"            Y88. Y8.
 88  888                                              888  88
 88  888                                              888  88
 88  888.        ..                        ..        .888  88
 `8b `88b,     d8888b.od8bo.      .od8bo.d8888b     ,d88' d8'
  Y8. `Y88.    8888888888888b    d8888888888888    .88P' .8P
   `8b  Y88b.  `88888888888888  88888888888888'  .d88P  d8'
     Y8.  ^Y88bod8888888888888..8888888888888bod88P^  .8P
      `Y8.   ^Y888888888888888LS888888888888888P^   .8P'
        `^Yb.,  `^^Y8888888888888888888888P^^'  ,.dP^'
           `^Y8b..   ``^^^Y88888888P^^^'    ..d8P^'
               `^Y888bo.,            ,.od888P^'
                    "`^^Y8888TMR8888P^^'"  
|I'm Batman|
*/