package info.kpsportfolio.demo.SpotOfJava;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class RestEndpointController {
    
    @RequestMapping("/hello")
    public String index() {
        return "A spot of Java hello for you!";
    }
    
}
