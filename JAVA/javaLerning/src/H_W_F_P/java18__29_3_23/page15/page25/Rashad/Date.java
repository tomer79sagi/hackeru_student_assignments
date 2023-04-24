package javaLerning.src.H_W_F_P.java18__29_3_23.page15.page25.Rashad;

import java.time.LocalDate;

import static java.time.Year.isLeap;

public record Date(int year, int month, int day) {
    public Date {
        if(year <=1900 || year >=2999){
            throw new RuntimeException("year must be between 1900 - 2999");
        }
        if(month<1 || month>12){
            throw new RuntimeException("months must be between 1-12");
        }

        if(day<1 || day>31){
            throw new RuntimeException("days must be between 1-31");
        }
        if (month == 4 || month == 6 || month == 9 || month == 11){
            if(day > 30 ){
                throw new RuntimeException("on months 4,6,9 and 11 days must be between 1-30");
            }
        }if(month == 2){
            if(!isLeap(year)){
                if (day > 28 ){
                    throw new RuntimeException("on non leap years days on Feb must be between 1-28");
                }
            }else if(day > 29){
                throw new RuntimeException("on leap years days on Feb must be between 1-29");
            }
        }
    }


    public Date(int year) {
        this(year, LocalDate.now().getMonthValue(), LocalDate.now().getDayOfMonth());
    }
    public Date(int year, int month) {
        this(year, month, LocalDate.now().getDayOfMonth());
    }
    public Date() {
        this(LocalDate.now().getYear(), LocalDate.now().getMonthValue(), LocalDate.now().getDayOfMonth());
    }

}
