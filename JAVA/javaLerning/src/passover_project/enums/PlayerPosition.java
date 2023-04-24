package javaLerning.src.passover_project.enums;

public enum PlayerPosition {
    G("Guard"),
    C("Center"),
    F("Forward");

    private final String positionName;

    PlayerPosition(String position) {
        positionName = position;
    }

    public String getPositionName() {
        return positionName;
    }
}
