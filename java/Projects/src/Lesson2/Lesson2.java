import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.Scanner;

public class Lesson2 {
    public static void main(String[] args) {
        System.out.println("HI");
        Scanner scan = new Scanner(System.in);
        System.out.println("Input age:");
        int age = scan.nextInt();

        // souf - System.out.printf("")
        // Java String format() method is used for formatting the String.

        String fName = "Ivan";
        String lName = "San";

        System.out.printf("Hi! I'm %s years old. My name is %s and my last name is %s", age, fName, lName);

        String str1 = String.format("%d", 15); // Integer value
        String str2 = String.format("%s", "BeginnersBook.com"); // String
        String str3 = String.format("%f", 16.10); // Float value
        String str4 = String.format("%x", 189);  // Hexadecimal value
        String str5 = String.format("%c", 'P');  // Char value
        String str6 = String.format("%o", 189); // Octal value
        System.out.println(str1);
        System.out.println(str2);
        System.out.println(str3);
        System.out.println(str4);
        System.out.println(str5);
        System.out.println(str6);

        Date date = new Date();
        System.out.printf("Date is %tD " , date); // A date & time conversion—date as %tm%td%ty

      /*  d	 	A decimal integer.
          f	 	A float.
                n	 	A new line character appropriate to the platform running the application. You should always use %n, rather than \n.
                tB	 	A date & time conversion—locale-specific full name of month.
        td, te	 	A date & time conversion—2-digit day of month. td has leading zeroes as needed, te does not.
        ty, tY	 	A date & time conversion—ty = 2-digit year, tY = 4-digit year.
                tl	 	A date & time conversion—hour in 12-hour clock.
                tM	 	A date & time conversion—minutes in 2 digits, with leading zeroes as necessary.
        tp	 	A date & time conversion—locale-specific am/pm (lower case).
        tm	 	A date & time conversion—months in 2 digits, with leading zeroes as necessary.
        tD	 	A date & time conversion—date as %tm%td%ty
        08	Eight characters in width, with leading zeroes as necessary.
        +	Includes sign, whether positive or negative.
                ,	Includes locale-specific grouping characters.
        -	Left-justified..
        .3	Three places after decimal point.
        10.3	Ten characters in width, right justified, with three places after decimal point.*/

        long n = 461012;
        System.out.format("%d%n", n);      //  -->  "461012"
        System.out.format("%08d%n", n);    //  -->  "00461012"
        System.out.format("%+8d%n", n);    //  -->  " +461012"
        System.out.format("%,8d%n", n);    // -->  " 461,012"
        System.out.format("%+,8d%n%n", n); //  -->  "+461,012"

        double pi = Math.PI;

        System.out.format("%f%n", pi);       // -->  "3.141593"
        System.out.format("%.3f%n", pi);     // -->  "3.142"
        System.out.format("%10.3f%n", pi);   // -->  "     3.142"
        System.out.format("%-10.3f%n", pi);  // -->  "3.142"
        System.out.format(Locale.FRANCE,
                "%-10.4f%n%n", pi); // -->  "3,1416"

        Calendar c = Calendar.getInstance();
        System.out.format("%tB %te, %tY%n", c, c, c); // -->  "May 29, 2006"

        System.out.format("%tl:%tM %tp%n", c, c, c);  // -->  "2:34 am"

        System.out.format("%tD%n", c);    // -->  "05/29/06"



    }
}
