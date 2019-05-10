package ie.cct.utcdate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
@ComponentScan("ie.cct")
public class UtcdateApplication {

	public static void main(String[] args) {
		SpringApplication.run(UtcdateApplication.class, args);
	}

	@Bean
   public WebMvcConfigurer corsConfigurer() {
      return new WebMvcConfigurerAdapter() {
         @Override
         public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("{timestamp}").allowedOrigins("*");
         }
      };
   }

}

// @Configuration
// @EnableWebMvc
// public class WebConfig extends WebMvcConfigurerAdapter {

//     @Override
//     public void addCorsMappings(CorsRegistry registry) {
//         registry.addMapping("/ie/**")
//             .allowedOrigins("*")
//             .allowedMethods("GET")
//             .allowedHeaders("*")
//             .exposedHeaders("*")
//             .allowCredentials(false).maxAge(3600);
//     }
// }