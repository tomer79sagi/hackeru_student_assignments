package lessone_9.class_project_part1;

import java.util.Scanner;

public class IO {

    static public String nextString() {
        Scanner input = new Scanner(System.in);
        System.out.print("> ");
        return input.nextLine();
    }
    static public int nextInt() {
        Scanner input = new Scanner(System.in);
        System.out.print("> ");
        return input.nextInt();
    }
}