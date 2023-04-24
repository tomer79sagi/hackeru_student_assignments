package javaLerning.src.passover_project.util;

import java.time.LocalDate;

public class NBADate implements Comparable <NBADate>{
    private final LocalDate date;

    public NBADate(int day,int month ,int year ) {
        this.date = LocalDate.of(day, month, year);
    }

    public NBADate() {
        date = LocalDate.now();
    }

    public int getNBADay() {
        return date.getDayOfMonth();
    }

    public int getNBAMonth() {
        return date.getMonthValue();
    }

    public int getNBAYear() {
        return date.getYear();
    }

    @Override
    public int compareTo(NBADate o) {
        return date.compareTo(o.date);
    }

    @Override
    public String toString() {
        return "NBADate{ " + date + " }";
    }
}
