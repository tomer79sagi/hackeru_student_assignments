package javaLerning.src.H_W_F_P.java3__1_2_23;

public class Ex3 {
    public static void main(String[] args) {

        for (int i = 0; i < 5; i++) {

            int grade = (int) (Math.random() * 102);

            System.out.println(grade);

            if (grade >= 0 && grade <= 55) {
                System.out.println("מספיק");
            } else if (grade >= 56 && grade <= 65) {
                System.out.println("כ.טוב");
            } else if (grade >= 65 && grade <= 75) {
                System.out.println("טוב");
            } else if (grade >= 76 && grade <= 85) {
                System.out.println("כ.טוב מאוד");
            } else if (grade >= 86 && grade <= 95) {
                System.out.println("טוב מאוד");
            } else if (grade >= 96 && grade <= 100) {
                System.out.println("מצוין");
            } else {
                System.out.println("לא בטווח");
            }
        }
    }
}
