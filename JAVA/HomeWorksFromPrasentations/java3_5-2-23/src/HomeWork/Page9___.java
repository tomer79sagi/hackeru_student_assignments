package HomeWork;

public class Page9___ {
    public static void main(String[] args) {

        //1
        System.out.println(1);

        for (int i=1;i<=10;i++){
            System.out.print("* ");
        }
        System.out.println();
        System.out.println();

        //2
        System.out.println(2);

        int sum = 0;
        for (int i=1;i<=20;i++){
            sum+=i;
        }
        System.out.println(sum);
        System.out.println();

        //3
        System.out.println(3);

        for (byte i=0;i<10;i++) {
            byte num = (byte) Math.floor(Math.random() * 90 + 10);
            System.out.print(num+" ");
        }
        System.out.println();

        //4
        System.out.println(4);

        for (byte i=0;i<10;i++) {
            short num2 = (short) Math.floor(Math.random() * 900 + 10);
            System.out.print(num2+" ");
        }
    }
}
