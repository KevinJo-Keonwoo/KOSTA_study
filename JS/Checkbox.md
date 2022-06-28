# Checkbox

```jsx
var cbArr =
        document.querySelectorAll("div.checkbox input[type=checkbox]") //type가 checkbox인 input객체들을 가져옴
    cbArr.forEach(function(item, index){
        // item.addEventListener('click', function(){}); //기능이 필요하다면 이렇게 사용 이번에는 사용 안할 것 
        // if(index == 0){   //첫번째 체크박스 객체 
            
        // }

        console.log(item, item.checked);
    });
    
    cbArr[0].addEventListener('click', function(){
        for(var i=1; i<cbArr.length; i++){
            cbArr[i].checked = this.checked;
        }
    })
    //html option에서 value를 넣어줄 수도 있음 
    //0번인덱스에서 클릭이 감지되면, 1(지금선택된 객체의 checked 상태)를 2(1부터 끝까지의 배열내에 있는 객체의 상태)에 대입함
```