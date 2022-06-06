# 펑션

### FUNCTION : 함수

- ✔프로시저는 리턴값이 없으나, 함수가 리턴값이 있는 것

```sql
CREATE OR REPLACE FUNCTION a_func(num1 number, num2 number)
RETURN number  --여기서 반환하는 것이 아니므로 ;을 찍지 않는다
IS
num3 number;
BEGIN
num3 := num1 + num2;
RETURN num3;
END;
```

- 시작행, 끝행 함수 만들기

```sql
CREATE OR REPLACE FUNCTION start_row( current_page number, cnt_per_page number)
RETURN number
IS
		start_num number;
BEGIN
		start_num := (cnt_per_page * (current_page - 1)) + 1;
RETURN start_num;
END;

CREATE OR REPLACE FUNCTION end_row( current_page number, cnt_per_page number)
RETURN number
IS 
    end_num number;
BEGIN
    end_num := (cnt_per_page * current_page); 
    RETURN end_num;
END;
```