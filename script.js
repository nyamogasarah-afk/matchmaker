const btn = document.getElementById('matchBtn');
const errorEl = document.getElementById('error');
const resultEl = document.getElementById('result');

const emojiSets = ["💜","🤍","💘","💝","💖","💕","🥰","😍","✨","💯"];

function checkMatch(){
  const n1=document.getElementById('name1').value.trim();
  const n2=document.getElementById('name2').value.trim();
  errorEl.style.display='none'; resultEl.style.display='none';
  if(!n1||!n2){errorEl.textContent="💜 Oops! Please enter both names 🤍";errorEl.style.display='block';return;}
  if(n1.toLowerCase()===n2.toLowerCase()){errorEl.textContent="🤔 Names can't be same! Try different 😅";errorEl.style.display='block';return;}
  
  btn.textContent="💜 Calculating Love... 🤍✨"; btn.disabled=true;
  
  setTimeout(()=>{
    const score=Math.floor(Math.random()*101);
    let msg="";
    if(score<20) msg="💔 Low spark... but friendship is beautiful! 🤍✨";
    else if(score<45) msg="💜 Cute! There's a little spark ✨ Keep chatting! 😊";
    else if(score<70) msg="💕 Nice! Strong vibes! You have potential 💜🤍";
    else if(score<85) msg="💖 Wow! Great match! You look perfect together 😍💘";
    else if(score<100) msg="💘 OMG! Amazing! You're soulmates! 🥰✨💜";
    else msg="💯💜 PERFECT! 100% SOULMATES! True Purple Love! 👩‍❤️‍👨💍✨";

    document.getElementById('score').textContent = score + "% " + (score>80?"💜":"🤍");
    document.getElementById('message').textContent = msg;
    resultEl.style.display='block';

    // Emoji rain effect 💜🤍💘
    for(let i=0;i<15;i++){
      const h=document.createElement('div');
      h.textContent=emojiSets[Math.floor(Math.random()*emojiSets.length)];
      h.style.position='fixed'; h.style.left=Math.random()*100+'vw'; h.style.top='-30px';
      h.style.fontSize=(20+Math.random()*25)+'px';
      h.style.animation=`fall ${2+Math.random()*2.5}s linear forwards`;
      h.style.pointerEvents='none'; h.style.zIndex='999';
      document.body.appendChild(h);
      setTimeout(()=>h.remove(),4000);
    }

    btn.textContent="💜✨ Check Match ✨🤍"; btn.disabled=false;
  },900);
}

const style=document.createElement('style');
style.textContent=`@keyframes fall{to{transform:translateY(110vh) rotate(720deg); opacity:0}}`;
document.head.appendChild(style);

btn.addEventListener('click',checkMatch);
document.addEventListener('keypress',e=>{if(e.key==='Enter') checkMatch()});