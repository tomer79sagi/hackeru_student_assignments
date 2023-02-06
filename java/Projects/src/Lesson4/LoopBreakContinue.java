package Lesson4;

public class LoopBreakContinue {

    public static void main(String[] args) {
        breakWithFlag();
        breakWithLabeledStatement();
        continueExample();
        printEven();
        moduleFiveAndThree();

    }

    static void breakWithFlag() {
        boolean flag = false;

        for (int i = 0; i <300 && flag == false; i++) {

            for (int j = 0; j <300 && flag == false ; j++) {
                if ((i * j) % 17 == 5) {
                    System.out.printf("%d | %d \n", i, j);
                    flag = true;
                }

            }
        }
    }

    static void breakWithLabeledStatement() {
        myLabel:
        for (int i = 0; i < 300; i++) {

            for (int j = 0; j < 300; j++) {
                if ((i * j) % 17 == 5) {
                    System.out.printf("%d | %d \n", i, j);
                    break myLabel;
                }

            }
        }

    }

    static void continueExample() {
        for (int j = 0; j <10 ; j++) {
            if (j % 2 == 0) {
                continue;
            }

            System.out.printf("%d  ", j);
            if(j==9) System.out.println();
        }
    }

    static void printEven() {
        for (int j = 2; j <=100 ; j++) {
            if (j % 2 != 0) {
                continue;
            }

            System.out.printf("%d  ", j);
            if(j==100) System.out.println();
        }
    }

    static void moduleFiveAndThree() {
        for (int j = 0; j <=100 ; j++) {
            if (j % 5 == 0 && j % 3 == 0) {
                System.out.printf("%d  ", j);
            }
            if(j==100) System.out.println();

        }

    }


}
