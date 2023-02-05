package Lesson4;

public class Lesson4 {

    public static void main(String[] args) {

        for (int i =0; i<1000; i++) {
            if (i%17 ==2 && i%32 ==1){
                System.out.println(i);
                break;
            }
        }

    }


}
