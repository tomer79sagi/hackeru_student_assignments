package javaLerning.src.H_W_F_P.java17__22_3_23.page14;

public class Person
        implements Comparable<Person> {

    private String firstName;
    private String lastName;
    private int age;
    private int siblingOrder;

    public Person(String firstName, String lastName, int siblingOrder) {
        setFirstName(firstName);
        setLastName(lastName);
        setSiblingOrder(siblingOrder);
    }

    public Person(String firstName, String lastName, int age, int siblingOrder) {
      setFirstName(firstName);
      setLastName(lastName);
      setAge(age);
      setSiblingOrder(siblingOrder);
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getSiblingOrder() {
        return siblingOrder;
    }

    public void setSiblingOrder(int siblingOrder) {
        this.siblingOrder = siblingOrder;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public int compareTo(Person person) {
        int diff = firstName.compareTo(person.firstName);
        if (diff != 0) return diff;

        diff = lastName.compareTo(person.lastName);
        if (diff != 0) return diff;

        return siblingOrder - person.siblingOrder;
    }

    @Override
    public String toString() {
        return "Person{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", siblingOrder=" + siblingOrder +
                '}';
    }
}

//
//
//
//public class Program
//{
//    public static void main(String[] args) {
//        Person david = new Person("David", "Levi", 4);
//        Person itzik = new Person("David", "Levi", 12);
//        CompareByName comparator = new CompareByName();
//        System.out.println(comparator.compare(david, itzik));
//        System.out.println("L".compareTo("A"));
//    }
//}
//
//public class Person {
//
//    private String firstName;
//    private String lastName;
//
//    private int age;
//
//    public Person(String firstName, String lastName, int age) {
//        setFirstName(firstName);
//        setLastName(lastName);
//        this.age = age;
//    }
//
//    public String getFirstName() {
//        return firstName;
//    }
//
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//
//    public int getAge() {
//        return age;
//    }
//}
//
//public class CompareByName {
//    public int compare(Person p1, Person p2) {
//        int diff = p1.getLastName().compareTo(p2.getLastName());
//        if (diff != 0) return diff;
//
//        diff = p1.getFirstName().compareTo(p2.getFirstName());
//        if (diff != 0) return diff;
//
//        return p1.getAge() - p2.getAge();
//    }
//}
