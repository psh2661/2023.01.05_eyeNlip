let gnb = document.querySelector('#gnb');
let gnb_bg = document.querySelector('#gnb');
let lnb01 = document.querySelectorAll('.lnb01');
let lnb02 = document.querySelectorAll('.lnb02');
console.log(lnb);

// 마우스를 올렸을때
gnb.addEventListener('mouseenter',()=>{
  gnb_bg.style.height = '250px';
  for(i=0; i<lnb01.length; i++){
    lnb01[i].style.display = 'block';
  }
})
// 마우스를 떼었을때
gnb.addEventListener('mouseleave',()=>{
  gnb_bg.style.height = '0px';
  for(i=0; i<lnb01.length; i++){
    lnb01[i].style.display = 'none';
  }
})
gnb.addEventListener('mouseenter',()=>{
  gnb_bg.style.height = '250px';
  for(i=0; i<lnb02.length; i++){
    lnb02[i].style.display = 'block';
  }
})
// 마우스를 떼었을때
gnb.addEventListener('mouseleave',()=>{
  gnb_bg.style.height = '0px';
  for(i=0; i<lnb02.length; i++){
    lnb02[i].style.display = 'none';
  }
})