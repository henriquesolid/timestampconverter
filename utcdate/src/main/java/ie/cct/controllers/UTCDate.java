package ie.cct.controllers;


public class UTCDate{

    private boolean success;
    private String time;

    public UTCDate (String time){
        this.time = time;
        this.success = true;
    }

    public boolean getSuccess(){
        return success;
    }


    public String getTime(){
        return time;
    }
}