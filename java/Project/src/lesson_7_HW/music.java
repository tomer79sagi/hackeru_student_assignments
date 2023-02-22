package lesson_7_HW;

public class music {


    String firstName;

    String musicType;

    String instrument;

    int experience;


    public music() {
    }

    public music(String firstName, String musicType, String instrument, int experience) {
        this.firstName = firstName;
        this.musicType = musicType;
        this.instrument = instrument;
        this.experience = experience;
    }

    public void printName(){
        System.out.println("My name is :" + firstName);
    }
    public String getMyName(){
        return "My name is:" + firstName;
    }

    public void printExperience(){
        System.out.println("I have" + experience + "years of experience");
    }

    public int getExperience(){
        return  experience;
    }



}
