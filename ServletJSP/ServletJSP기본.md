# Back-end기본

### 확장자별 응답방식의 차이

1. html 확장자로 자료를 요청한 경우 → **한바이트한바이트 반환**하며 응답해줌
2. jsp 확장자로 요청한 경우 → 서버에서 jsp엔진이 실행하여 나온 **결과값을** 응답해줌 
3. a 라는 url이 요청된 경우(엔진이 이해할 수 없는 확장자) 
 → web.xml이 담당해줌 
    1. 요청된 url과 같은 이름을 갖고 있는 url 태그 servlet-mappling태그 내에서 찾음  
    2. servlet-mapping에서 해당 url태그의 servlet-name 짝꿍을 찾음.
    3. 이 servlet-name과 같은 name을 갖고 있는 태그를 servlet태그 내에서 찾음
    4. 찾은 태그와 쌍을 이루는 servlet-class찾아서 응답해줌.

- Servlet/jsp를 사용하는 경우 매서드가 자동 호출됨

servlet 은 잘 안쓰나 servlet기반의 spring을 많이 씀 → 미리 공부해두기 

요즘은 jsp보다 JSON으로 응답하는 추세임 

서버 응답 ? 

Tier : 물리적인 단계 

Layer : 논리적인 단계 

![Untitled](Back-end%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%2077998b5ee681476288acd78bd84a4981/Untitled.png)

Front layer에 있는 기술은 DBMS에 접근 불가(Node.js제외)