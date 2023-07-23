import { attr, css, getNode } from '../lib/index.js'

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
const body = getNode('body');
let index = 0;

// 2. nav 클릭시 배경 색상 변경
function setBgColor(index){
    const {color} = data[index];
    const [colorA, colorB] = color;
  
    if(!(colorB)) colorB = '#000';

    css(body, 'background', `linear-gradient(to bottom, ${colorA}, ${colorB})`);
}

// 3. 이미지 변경
function setImage(target, index){

  
  let selectedImg = visual.querySelector('img');
  let {alt, name} = data[index];

  attr(selectedImg, 'src', `./assets/${name}.jpeg`);
}

// 4. 텍스트 변경
function setNameText(index) {
	const {name} = data[index];

	nickName.textContent = `${name}`;
}

// li목록 click시 텍스트(nickName), 배경, 이미지 변경
function changePoster(e){
  let target = e.target.closest('li'); 
  index = attr(target, 'data-index') - 1;

  setBgColor(index);
  setImage(target, index);
  setNameText(index);
}

nav.addEventListener('click', changePoster);










