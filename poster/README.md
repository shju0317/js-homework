# :fire: mission 2.

## :grey_question: 썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직 작성

### 요구사항
1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
    1. 이벤트 위임
    2. 반복문
2. 이미지와 색상의 데이터는 `data.js` 에서 불러와주세요.
3. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
    1. 배경색 변경 ( colorB의 기본값은 `#000` 으로 한다 )
    
    ```jsx
    elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
    ```
    
      b. 이미지 변경
    
    ```jsx
    target.src = `./assets/${data.name}.jpeg`;
    target.alt = data.alt;
    ```
    
4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.
    
    ```jsx
    target.textContent = data.name;
    ```
    
5. 함수를 분리시켜주세요.
    1. `setBgColor` 함수
    2. `setImage` 함수
    3. `setNameText` 함수
6. 가독성이 좋은 코드로 리팩토링 해주세요.

## :camera: 결과 스크린샷
![image](https://github.com/shju0317/js-homework/assets/31871923/e7b86b21-5f15-4716-a183-be61b44d7afd)
![image](https://github.com/shju0317/js-homework/assets/31871923/a8f1ba0b-f496-4c31-a85b-0cc3641d4997)

## :speech_balloon: 코드리뷰
- setBgColor() : 배경 색상 변경
  ```js
  function setBgColor(index){
      const {color} = data[index];
      const [colorA, colorB] = color;
    
      if(!(colorB)) colorB = '#000';

      css(body, 'background', `linear-gradient(to bottom, ${colorA}, ${colorB})`);
  }
  ```
- setImage() : 이미지 변경
  ```js
  function setImage(target, index){

    
    let selectedImg = visual.querySelector('img');
    let {alt, name} = data[index];

    attr(selectedImg, 'src', `./assets/${name}.jpeg`);
  }
  ```
- setNameText() : 텍스트 변경
  ```js
  function setNameText(index) {
    const {name} = data[index];

    nickName.textContent = `${name}`;
  }
  ```
