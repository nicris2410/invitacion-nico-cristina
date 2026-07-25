const overlay=document.getElementById('overlay'),audio=document.getElementById('audio'),music=document.getElementById('music');
document.getElementById('enter').onclick=async()=>{try{audio.volume=.55;await audio.play()}catch(e){}overlay.style.display='none';music.style.display='block'};
music.onclick=async()=>{if(audio.paused){try{await audio.play();music.textContent='⏸'}catch(e){}}else{audio.pause();music.textContent='▶'}};
const wedding=new Date('2026-10-24T13:00:00+02:00');
function tick(){let d=wedding-new Date();if(d<=0){days.textContent=hours.textContent=minutes.textContent=seconds.textContent='0';message.textContent='¡Ha llegado nuestro gran día!';return}days.textContent=Math.floor(d/86400000);d%=86400000;hours.textContent=String(Math.floor(d/3600000)).padStart(2,'0');d%=3600000;minutes.textContent=String(Math.floor(d/60000)).padStart(2,'0');d%=60000;seconds.textContent=String(Math.floor(d/1000)).padStart(2,'0')}
tick();setInterval(tick,1000);