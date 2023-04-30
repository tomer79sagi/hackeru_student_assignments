package javaLerning.src.H_W_F_P.java18__29_3_23.page15.page25;

import java.time.LocalDate;

public record DateTest(int day, int month, int year) {
    final static LocalDate date = LocalDate.now();

    public DateTest(int year) {
        this(0, 0, year);
    }

    public DateTest(int month, int year) {
        this(0, month, year);
    }

    public DateTest(){
        this(date.getDayOfMonth(), date.getMonthValue(), date.getYear());
    }

    public DateTest{
        if (year >= 1 && year <= 3000){
            System.out.println("year is OK");
            if (month == 1 || month == 3 ||month == 5|| month==7|| month == 8 || month==10 || month==12){
                System.out.println("month is OK");

            }
        }
    }
}
