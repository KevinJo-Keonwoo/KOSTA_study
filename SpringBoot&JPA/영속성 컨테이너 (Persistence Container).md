# Persistence Container

### persist메서드로 호출하는 경우

em.persist(c) → c라는 객체의 id값을 불러옴 

1차캐시에 같은 객체가 있는지 찾아보고 저장됨 

1차캐시 내에서 key와 value값으로 구성되는데 id값이 c객체의 식별자(key)가 됨 

객체에 해당하는 SQL구문도 만들어짐 

이 SQL구문도 SQL저장소내에서 key와 value형태로 저장되어 있음. 

id1 key에 대응하는 SQL구문이 value로 있음 

DML이 아니면 SQL저장소에 저장되지 않음 

![Untitled](Persistence%20Container%20b9ffc27fa5164ec4b32508e9aedb3000/Untitled.png)

tranaction을 commit하지 않는 경우 DB에 반영이되지는 않음

1000번지는 엔터티매니저 외부에 생성되었기 때문에 close 해도 사라지지않음

2000번지나 2001번지는 close와 동시에 사라짐 

### find메서드로 호출하는 경우

Select구문히 호출되며 

복제본으로 snapshot에도 있음 

set메서드를 호출한 경우 항상 snapshot과 비교를 해봄 

set메서드를 통해 객체를 변경(snapshot과 다른경우)하면  SELECT가 아닌 UPDATE구문이 만들어짐 

key는 ID3  / value는 update구문 (map 형식) 

close메서드를 호출하여 끝내는 것이 아니라, transaction을 commit해야함 

commit하는 경우 SQL저장소의 내용이 JDBC API를통해 DB에 반영이 됨 

**close메서드를 호출하는 경우 SQL구문이 그냥 객체의 외부로 나가지게 되는 것이며, 
DB에 반영을 하려면 반드시 transaction을 commit해야함** 

![Untitled](Persistence%20Container%20b9ffc27fa5164ec4b32508e9aedb3000/Untitled%201.png)

### Find메서드 동작과정

![Untitled](Persistence%20Container%20b9ffc27fa5164ec4b32508e9aedb3000/Untitled%202.png)

### Persist메서드 동작과정

![Untitled](Persistence%20Container%20b9ffc27fa5164ec4b32508e9aedb3000/Untitled%203.png)

### Remove메서드 동작과정

- 1차캐시에 엔터티가 없으면 바로 종료
    
    ![Untitled](Persistence%20Container%20b9ffc27fa5164ec4b32508e9aedb3000/Untitled%204.png)
    

스냅샷

- 맵 자료구조임
- 스냅샷 메모리는 컨테이너가 사라질때 같이 사라지고
- 스냅샷 엔터티 객체의 복제본은 Delete할때 사라짐\

![JPA상태전이.png](Persistence%20Container%20b9ffc27fa5164ec4b32508e9aedb3000/JPA%25EC%2583%2581%25ED%2583%259C%25EC%25A0%2584%25EC%259D%25B4.png)