# Logger

### Logger

- Import시 `import org.apache.log4j.Logger` 임포트하기
- logger관련 dependency

```xml
<!-- https://mvnrepository.com/artifact/log4j/log4j -->
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```

![Untitled](Logger%20c89345ccd3334f05bfe2708664b6eff1/Untitled.png)

- 가급적 DEBUG레벨의 Log를 사용하기 / INFO의 남용은 좋지 않음
- Appenders → 로그를 어디에 출력할 지
    - Console : 콘솔에 로그가 출력됨
    - Files : 해당 파일에 로그가 저장됨
- 아래와 같은 경우, error레벨의 로그가 콘솔에 출력됨

![Untitled](Logger%20c89345ccd3334f05bfe2708664b6eff1/Untitled%201.png)

![Untitled](Logger%20c89345ccd3334f05bfe2708664b6eff1/Untitled%202.png)

- **소스코드에는 모든 레벨의 로그를 넣어두고 설정에서 로그 레벨을 관리하여 로그를 출력**
- **설정파일에 상위 레벨의 로그를 설정해두면 상위 레벨의 로그까지 모두 출력함 
상위 레벨의 로그를 설정해두면 하위 레벨의 로그를 출력하지 않음**
- **즉, 소스코드에는 다양한 레벨의 로그를 넣어두고 설정 파일을 변경하여 관리**

- target > classes 디렉토리에는 컴파일된 java 클래스들 및  마이바티스/log4j 설정파일들이 저장됨
- 탐캣 실행시 같이 배포됨

![Untitled](Logger%20c89345ccd3334f05bfe2708664b6eff1/Untitled%203.png)

![Untitled](Logger%20c89345ccd3334f05bfe2708664b6eff1/Untitled%204.png)

- info 이상레벨의 로그만 실행하겠다.

- slf4j dependency설정

```xml
<!-- Logging : SimpleLoggingFacadeForJava-->
<dependency>	
	<groupId>org.slf4j</groupId>
	<artifactId>slf4j-api</artifactId>
	<version>1.6.6</version>
</dependency>
<dependency>	
	<groupId>org.slf4j</groupId>	
	<artifactId>jcl-over-slf4j</artifactId>	
	<version>1.6.6</version>
</dependency>
<dependency>	
	<groupId>org.slf4j</groupId>	
	<artifactId>slf4j-log4j12</artifactId>	
	<version>1.6.6</version>
</dependency>
```