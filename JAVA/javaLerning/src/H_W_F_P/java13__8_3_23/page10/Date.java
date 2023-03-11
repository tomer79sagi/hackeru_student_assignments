package javaLerning.src.H_W_F_P.java13__8_3_23.page10;

import static javaLerning.src.myColors.MyColors.*;

public class Date {

    private int year;

    private int month;

    private int day;

    public Date(int year, int month, int day) {
        setYear(year);
        setMonth(month);
        setDay(day);
    }

    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        if (year > 0) {
            this.year = year;
        }
    }


    public int getMonth() {
        return this.month;
    }

    public void setMonth(int month) {
        if (month > 0 && month < 13){
            this.month = month;
        }

    }


    public int getDay() {
        return this.day;
    }

    public void setDay(int day) {
        if (day > 0 && day <=31){
            this.day = day;
        }

    }

    public String toString(){
        return getDay() +"/"+ getMonth() + "/" +getYear();
    }
}

class test {
    public static void main(String[] args) {

        for(int i = 0; i<100; i++){
            Date d = new Date(((int)Math.floor(Math.random()*3000)),((int)Math.floor(Math.random()*11 +1)),((int)Math.floor(Math.random()*30 +1)));
            System.out.println(BLUE + d);
        }

    }
}
