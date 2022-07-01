# Select

```jsx
var selectSidoObj = document.querySelector("div.select>select.sido");
    var selectSigunguObj = document.querySelector("div.select>select.sigungu");
    selectSidoObj.addEventListener('click', function(){
        console.log(this.value, '클릭되었습니다');
    });
    selectSidoObj.addEventListener('change', function(){
        console.log(this.value, '변경되었습니다');
        switch(this.value){
            case'서울시':
                selectSigunguObj.innerHTML = '';    //시군구의 innerHTML을 초기화 
                var seoul = '<option>구를 선택하세요</option>';
                seoul += '<option>중구</option>';
                seoul += '<option>강북구</option>';
                seoul += '<option>강동구</option>';
                seoul += '<option>강남구</option>';
                seoul += '<option>강서구</option>';
                selectSigunguObj.innerHTML = seoul;        //innerHTML을 seoul로 바꿈 
                selectSigunguObj.style.display = 'inline-block';  //none을 block으로 바꿈
                break;
            case'제주도':
                selectSigunguObj.innerHTML = '';      //시군구의 innerHTML을 초기화 
                var jeju = '<option>시를 선택하세요</option>';
                jeju += '<option>제주시</option>';
                jeju += '<option>서귀포시</option>';
                selectSigunguObj.innerHTML = jeju;        //innerHTML을 jeju로 바꿈 
                selectSigunguObj.style.display = 'inline-block';  //none을 block으로 바꿈
                break;
            default:
                selectSigunguObj.innerHTML = '';      //시군구의 innerHTML을 초기화 
                selectSigunguObj.style.display = 'none';
        }
    });
    //기존의 값이 바뀔 때 Change 이벤트 발생
```

- createElement, createTextNode, appendChild 사용하여 제주도만 수정

```jsx
case'제주도':
      // selectSigunguObj.innerHTML = '';      //시군구의 innerHTML을 초기화 
      // var jeju = '<option>시를 선택하세요</option>';
      // jeju += '<option>제주시</option>';
      // jeju += '<option>서귀포시</option>';
      // selectSigunguObj.innerHTML = jeju;        //innerHTML을 jeju로 바꿈 
      var opt1 = document.createElement('option');
      var txt1 = document.createTextNode('시를 선택하세요');
      opt1.appendChild(txt1);   //text객체를 option 객체에 추가함. 자식개념으로 넣는것 
      selectSigunguObj.appendChild(opt1); //option객체를 select객체에 추가함 
      
      var opt2 = document.createElement('option');
      var txt2 = document.createTextNode('제주시');
      opt2.appendChild(txt2);   //
      selectSigunguObj.appendChild(opt2); // 

      var opt3 = document.createElement('option');
      var txt3 = document.createTextNode('서귀포시');
      opt3.appendChild(txt3);   //
      selectSigunguObj.appendChild(opt3); //

      selectSigunguObj.style.display = 'inline-block';  //none을 block으로 바꿈
      break;
```