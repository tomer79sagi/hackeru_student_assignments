package javaLerning.src.passover_project.team;

import javaLerning.src.passover_project.util.NBADate;
import javaLerning.src.passover_project.util.PrintableSummary;

public class Coach implements Comparable<Coach>, PrintableSummary {
    @Override
    public int compareTo(Coach o) {
        return 0;
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public void printSummary() {
        PrintableSummary.super.printSummary();
    }
}
