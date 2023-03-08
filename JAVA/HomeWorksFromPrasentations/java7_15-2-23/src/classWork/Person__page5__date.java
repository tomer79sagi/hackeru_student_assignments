package classWork;


public class Person {
    String FirstName;
    String LastName;
    String BirthDate;


    public Person(String FirstName, String LastName, String BirthDate){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.BirthDate = BirthDate;
    }

    public void printName() {
        System.out.print("hello ");
        System.out.println(this.FirstName);
    }

    public String toString(){
        return "your name is: " + FirstName + " " + LastName + "\n" +
                "and you born in: " + BirthDate;
    }
}
