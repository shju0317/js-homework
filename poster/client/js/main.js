import { attr, getNode } from '../lib/index.js'

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = getNode('.nav')
const visual = getNode('.visual')
const nickName = getNode('.nickName')

let index = 0;

console.log("nav: ", nav);
console.log("visual: ", visual);

// 2. nav 클릭시 배경 색상 변경
function changeBgColor(){
  
}

// 3. 이미지 변경
function changeVisual(target, index){

  
  let selectedImg = visual.querySelector('img');
  let {alt, name} = data[index];

  attr(selectedImg, 'src', `./assets/${name}.jpeg`);
}

// 4. 텍스트 변경
function changeNickName(index) {
	const {name} = data[index];

	nickName.textContent = `${name}`;
}

function changePoster(e){
  let target = e.target.closest('li'); 
  index = attr(target, 'data-index') - 1;

  changeVisual(target,index);
  changeNickName(index);


}

nav.addEventListener('click', changePoster);










