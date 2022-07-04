# 선택자(Selector)

### 선택자(Selector)

**$("p:first")** 

- 첫번째 p태그요소를 찾아라

**$("ul li:first-child"):** 

- 모든 ul태그요소의 자식인 li태그의 첫번째 요소들을 찾아라

```jsx
$("ul li:first-child").hide();

<p>List 1:</p>
<ul>
  <li>Coffee</li>
  <li>Milk</li>
  <li>Tea</li>
</ul>

<p>List 2:</p>
<ul>
  <li>Coffee</li>
  <li>Milk</li>
  <li>Tea</li>
</ul>
```

- 위 코드에서 coffee만 지워짐

**$(":button")**

- button태그와 input type이 button인 모든 button을 찾아라 
즉 button이 포함된 태그들을 찾음
- <button> and <input style=’button’>
- button 태그가 form 태그 내에 있으면 <button type=”submit”>
button 태그가 form 태그 밖에 있으면 <button type=”button”>

![Untitled](%E1%84%89%E1%85%A5%E1%86%AB%E1%84%90%E1%85%A2%E1%86%A8%E1%84%8C%E1%85%A1(Selector)%2097b4e7630c4948498c19837bf0441a1b/Untitled.png)

**$("tr:even") / $("tr:odd")**

- `tr:nth-child(2n)`과 같은 효과 / 2n+1
- tr태그의 짝수행만 찾음 / tr태그의 홀수행만 찾음