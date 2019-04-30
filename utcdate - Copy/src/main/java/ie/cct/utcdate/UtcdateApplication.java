package ie.cct.utcdate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("ie.cct")
public class UtcdateApplication {

	public static void main(String[] args) {
		SpringApplication.run(UtcdateApplication.class, args);
	}

}
