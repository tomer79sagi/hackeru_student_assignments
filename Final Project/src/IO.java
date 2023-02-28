import java.util.Scanner;

public class IO {
    private static final Scanner scanner = new Scanner(System.in);

    public static void print(String message) {
        System.out.print(message);
    }

    public static void println(String message) {
        System.out.println(message);
    }

    public static String readString() {
        return scanner.nextLine();
    }

    public static int readInt() {
        return scanner.nextInt();
    }

    public static double readDouble() {
        return scanner.nextDouble();
    }

    public static void consumeNewLine() {
        scanner.nextLine();
    }
}
