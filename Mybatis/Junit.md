# Junit

### Junit

- 4버전 사용

![Untitled](Junit%20e186e3c5f41348b58f108fe80e8a83a2/Untitled.png)

- BeforeClass : 테스트 전 딱 한번만 호출됨
- AfterClass : 테스트 후 딱 한번만 호출됨
- Before : 테스트 전 각각의 테스트에 대해 한번씩 호출됨
- After : 테스트 후 각각의 테스트에 대해 한번씩 호출됨

- 테스트용 dependency

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>5.2.9.RELEASE</version>
</dependency>
```

- assert : 단정짓다

```java
package com.my.repository;

import static org.junit.Assert.assertEquals;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

import com.my.dto.Product;
import com.my.exception.FindException;

//스프링 컨테이너(ApplicationContext)구동
@RunWith(SpringRunner.class)

//Spring 컨테이너용 XML파일 설정
@ContextConfiguration(locations={
		"file:src/main/webapp/WEB-INF/spring/appServlet/servlet-context.xml"})

public class ProductOracleRepositoryTest {
	private Logger logger = Logger.getLogger(getClass());
	@Autowired
	private ProductOracleRepository repository;
	
	@Test
	public void testSelectByProdNo() throws FindException{
//		fail("Not yet implemented");
		String prodNo = "C0001";
		String expectedProdName = "아메리카노";
		Product p = repository.selectByProdNo(prodNo);
//		logger.debug(expectedProdName.equals(p.getProdName()));
		
		assertEquals(expectedProdName, p.getProdName()); //예상된 이름값고 실제 이름값이 같다고 단정(assert)짓는것 
	}

}
```