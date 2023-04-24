package javaLerning.src.lesson_20.Page_29;

import java.util.Arrays;

public enum MonthEnum {
    January(1), February(2),
    March(3), April(4),
    May(5), June(6),
    July(7), August(8),
    September(9), October(10),
    November(11), December(12);

    private final int month;

    MonthEnum(int month) {
        this.month = month;
    }

    public int getMonth() {
        return month;
    }

    public static MonthEnum findEnumFromInt(int v){
        MonthEnum[] values = values();

        return Arrays.stream(values).filter(m -> m.getMonth() == v).
                findFirst().orElseThrow(()-> new IllegalArgumentException("Invalid month value"));
    }
}
