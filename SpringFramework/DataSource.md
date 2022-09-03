# DataSource

SimpleDriverDataSource

- 설정 파일을 통해  DB에 접속
- 메서드를 호출할 때 그제서야 DB를 연결하러 감
- 메서드 호출되지 않으면 DB연결하러 가지 X (Connection 미리 만들어내지 않음)
- 병목현상(다수 사용자 동시 접속) 해결하기 위해
- 5명이 DB 연결 요청 > 객체 5개 만들어짐 > 한 Connection 만들어지고 다음 Connection 만들어짐 > 동시 접속자 있다고 해도 Connection 빠르고 느리게 받아갈 수 있음
- DB와의 쓰레드는 1개임
- 미리 여러개의 DataConnection을 만들어놓자 → DataConnectionPool
- HikariCP를 통해 Connection 객체를 미리 여러개 만들어놓을 수 있음
- Connection이 필요한경우 HikariCP에 요청해 유휴중인 Connection을 찾아 이용할 수 있음

- HikariCP 다운로드
    
    MavenRepository → **[Hikari JDBC Connection Pool →](https://mvnrepository.com/artifact/com.walterjwhite.java.dependencies/hikari-jdbc-connection-pool) [0.0.17](https://mvnrepository.com/artifact/com.walterjwhite.java.dependencies/hikari-jdbc-connection-pool/0.0.17)** 
    
    ![Untitled](DataSource%20cca0d1eb47d24524ae5e670a4df23095/Untitled.png)
    
    ![Untitled](DataSource%20cca0d1eb47d24524ae5e670a4df23095/Untitled%201.png)
    
    ![Untitled](DataSource%20cca0d1eb47d24524ae5e670a4df23095/Untitled%202.png)