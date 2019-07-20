package titanic;


/*@author Tony Deng*/
/*A demo Project for EZOPS Interview*/

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication (scanBasePackages = { "titanic" })
@EnableJpaRepositories("titanic.repository")
@EntityScan("titanic.model")
public class Application {
	
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

   

}
