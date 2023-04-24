package javaLerning.src.lesson_20.Page_29;

import java.time.LocalDate;

public record MyDate(int year, int month, int day) {
    public MyDate {
        if (year > 2100 || year < 2000)
            throw new  IllegalArgumentException("2000 - 2099");

        if (month > 12 || month < 1)
            throw new IllegalArgumentException("1 - 12");

        if (day > 31 || day < 1)
            throw new IllegalArgumentException("1 - 31");
    }

    public MyDate(){
        this (LocalDate.now().getYear(),LocalDate.now().getMonthValue(), LocalDate.now().getDayOfMonth());
    }

    @Override
    public String toString() {
        return "The date is : " + day + "/" + month + "/" + year;
    }

    public static void main(String[] args) {
        MyDate d = new MyDate(2023,2,20);
        System.out.println(d);
    }
}
