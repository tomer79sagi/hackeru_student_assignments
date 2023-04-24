package javaLerning.src.passover_project.util;

public interface PrintableSummary {
    public default void printSummary(){
        System.out.println(this);
    }
}
