package javaLerning.src.H_W_F_P.java18__29_3_23.page15.page25;


import java.time.LocalDate;


public record Date(int day, int month, int year) {

    final static LocalDate date = LocalDate.now();

    public Date(int year) {
        this(0, 0, year);
    }

    public Date(int month, int year) {
        this(0, month, year);
    }

    public Date(){
        this(date.getDayOfMonth(), date.getMonthValue(), date.getYear());
    }

    public Date {
        if (year >= 1900 && year < 2200)  //test of the year
        {
            System.out.println("Year is ok");

            if (month >= 1 && month <= 12) {
                System.out.println("Month is OK");
            }

            if ((month == 1) && (day >= 1 && day <= 31)) {
                System.out.println("Day is OK");
            }
            if ((month == 2) && (day >= 1 && day <= 28)
                    && (year %4 != 0)
                    && (year %400 == 0)
                    || ((month == 2)
                    && (day >= 1 && day <= 29)
                    && (year %4 == 0))
                    && (year %400 == 0)){

                System.out.println("Day is OK");
            }
            if ((month == 3) && (day >= 1 && day <= 31)) {
                System.out.println("Day is OK");
            }
            if ((month == 4) && (day >= 1 && day <= 30)) {
                System.out.println("Day is OK");
            }
            if ((month == 5) && (day >= 1 && day <= 31)) {
                System.out.println("Day is OK");
            }
            if ((month == 6) && (day >= 1 && day <= 30)) {
                System.out.println("Day is OK");
            }
            if ((month == 7) && (day >= 1 && day <= 31)) {
                System.out.println("Day is OK");
            }
            if ((month == 8) && (day >= 1 && day <= 31)) {
                System.out.println("Day is OK");
            }
            if ((month == 9) && (day >= 1 && day <= 30)) {
                System.out.println("Day is OK");
            }
            if ((month == 10) && (day >= 1 && day <= 31)) {
                System.out.println("Day is OK");
            }
            if ((month == 11) && (day >= 1 && day <= 30)) {
                System.out.println("Day is OK");
            }
            if ((month == 12) && (day >= 1 && day <= 31)) {
                System.out.println("Day is OK");
            }
        }
    }

    @Override
    public String toString() {
        return "Date{"
                + day +
                "/" + month +
                "/" + year +
                '}';
    }
}
class test{
    public static void main(String[] args) {
        Date date = new Date();
        System.out.println(date);

        Date myDate = new Date(29,2,2023);
        System.out.println(myDate);

    }
}
