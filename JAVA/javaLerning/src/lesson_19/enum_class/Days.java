package javaLerning.src.lesson_19.enum_class;

public enum Days {
    SUNDAY(1),
    MONDAY(2),
    TUESDAY(3),
    WEDNESDAY(4),
    THURSDAY(5),
    FRIDAY(6),
    SATURDAY(7);

    private final int dayNum;

    Days(int dayNum){
        this.dayNum = dayNum;
    }

    @Override
    public String toString() {
        return "day of the week by number : " + dayNum;
    }
}
