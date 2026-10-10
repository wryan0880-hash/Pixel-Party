(function(){
  const KEY='pixel-party-points',THEME='pixel-party-retro';
  const getPoints=()=>Number(localStorage.getItem(KEY)||0);
  const setPoints=n=>{localStorage.setItem(KEY,String(Math.max(0,Math.floor(n))));document.dispatchEvent(new Event('pointschange'));};
  window.PixelParty={points:getPoints,earn:n=>setPoints(getPoints()+n),spend:n=>{if(getPoints()<n)return false;setPoints(getPoints()-n);return true;},retro:()=>localStorage.getItem(THEME)==='yes',buyRetro:()=>{localStorage.setItem(THEME,'yes');document.documentElement.classList.add('retro');document.dispatchEvent(new Event('themechange'));}};
  const render=()=>{document.querySelectorAll('[data-points]').forEach(e=>e.textContent=getPoints());if(PixelParty.retro())document.documentElement.classList.add('retro');};
  document.addEventListener('DOMContentLoaded',render);document.addEventListener('pointschange',render);document.addEventListener('themechange',render);
})();
