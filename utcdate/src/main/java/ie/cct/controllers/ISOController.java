package ie.cct.controllers; //same path as folder

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.TimeZone;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController; //import for controllers

@RestController //used to push the restcontroller
public class ISOController { //public class ISOontroller as the folder

    @GetMapping("/iso")
    public String iso(){
        return "wrong url dude!";
    }
    

    @GetMapping("/iso/{timestamp}") //{} allow any caracter
    public ISODate isoTimestamp(@PathVariable("timestamp") Long timestamp){ //variable string because the timestamp is number, path variable to show that it come from the url and the name
        // System.out.println("timestamp: " + timestamp);
        timestamp = timestamp * 1000;
        // System.out.println("timestamp times 1000: " + timestamp);
        DateFormat df = new SimpleDateFormat("dd-MM-yyyy'T'HH:mm:ss.S'Z'");
        df.setTimeZone(TimeZone.getTimeZone("UTC"));
        String my8601formattedDate = df.format(timestamp);
        
        System.out.println(my8601formattedDate);

        return new ISODate(my8601formattedDate);

    }

}