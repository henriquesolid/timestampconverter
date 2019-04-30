package ie.cct.controllers;


public class ISODate{

    private boolean success;
    private String time;

    public ISODate (String time){
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