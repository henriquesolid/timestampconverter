package ie.cct.controllers; //same path as folder

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController; //import for controllers

@RestController //used to push the restcontroller
public class UTCController { //public class utcontroller as the folder

    @GetMapping("/utc")
    public String utc(){
        return "wrong url dude! - Try => localhost/utc/663811200";
    }
    

    @GetMapping("/utc/{timestamp}") //{} allow any caracter
    public UTCDate utcTimestamp(@PathVariable("timestamp") Long timestamp){ //variable string because the timestamp is number, path variable to show that it come from the url and the name
        SimpleDateFormat sdf = new SimpleDateFormat(); //create a simple date format
        sdf.setTimeZone(TimeZone.getTimeZone("UTC")); 
        timestamp = timestamp * 1000; //Transform timestamp in milliseconds in seconds

        String result = sdf.format(new Date(timestamp));

        System.out.println(result);

        return new UTCDate(result); //return the string given by the user

    }

}