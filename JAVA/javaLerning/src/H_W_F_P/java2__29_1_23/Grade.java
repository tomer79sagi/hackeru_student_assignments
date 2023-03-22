package javaLerning.src.H_W_F_P.java2__29_1_23;

public class Grade {
    public static void main(String[] args) {

        for (int i = 0; i < 10; i++) {
            int grade = (int)(Math.random()*102);

            System.out.println(grade);

            if (grade > 0 && grade <= 55){
                System.out.println("מספיק");
            } else if (grade >= 56 && grade <= 65) {
                System.out.println("כ.טוב");
            } else if (grade >= 66 && grade <= 75) {
                System.out.println("טוב");
            } else if (grade >= 76 && grade <=85) {
                System.out.println("כ. טוב מאד");
            } else if (grade >= 86 && grade <=95) {
                System.out.println("טוב מאד");
            } else if (grade >= 96 && grade <= 100) {
                System.out.println("מצויין");
            }else {
                System.out.println("NOT in range");
            }
            System.out.println();
        }

    }
}
