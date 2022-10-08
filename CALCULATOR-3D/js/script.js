
let btn = document.querySelectorAll('input');
let val = document.querySelector('.value');
let result = document.querySelector('.result');

btn.forEach((number) =>{
  let dataVal = number.value;
  number.addEventListener('click',()=>{
    switch(dataVal){
    case '=':
      result.innerHTML = eval(val.innerHTML);
      break;
    case 'clr':
      result.innerHTML = "";
      val.innerHTML = "";
      break;
      case 'del':
        val.innerHTML = val.innerHTML.slice(0,-1);
        result.innerHTML = "";
        break;
    default:
      val.innerHTML += dataVal;
      break;
    }
  })
})
