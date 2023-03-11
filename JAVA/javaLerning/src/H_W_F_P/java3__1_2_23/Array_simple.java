package javaLerning.src.H_W_F_P.java3__1_2_23;

public class Array_simple {
    public static void main(String[] args) {
        String[] studentNames = {"Eitan", "Tal", "Aviad", "Yarin"};
        int[] studentGrades = {78, 99, 34, 88};

        // 1. Classic form
        for (int i=0 ; i<studentNames.length ; i++) {
            if (i%2==0){

            }
            System.out.printf("Name: %s, Grade: %d \n", studentNames[i], studentGrades[i]);
        }

        // 2. forEach
        // JS: studentNames.forEach(name => { alert() });
        for (String name : studentNames) {
            System.out.println(name);
        }
    }
}
