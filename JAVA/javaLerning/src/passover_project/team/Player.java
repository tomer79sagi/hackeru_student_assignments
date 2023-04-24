package javaLerning.src.passover_project.team;

import javaLerning.src.passover_project.enums.PlayerPosition;
import javaLerning.src.passover_project.util.NBADate;

import java.util.Comparator;
import java.util.Objects;

public class Player extends TeamMember implements Comparable<Player>{
    public Player(String firstName, String lastName, NBADate dob, Team team) {
        super(firstName, lastName, dob, team);
    }

    private String collegeName;
    public String getCollegeName() {
        return collegeName;
    }

    private int jerseyNumber;
    public int getJerseyNumber() {
        return jerseyNumber;
    }

    private PlayerPosition position;

    public PlayerPosition getPosition() {
        return position;
    }

    public static final Comparator <Player> nameComparator;
    public static final Comparator <Player> collegeComparator;
    public static final Comparator <Player> collegeNameComparator;
    public static final Comparator <Player> collegeDOBComparator;

    static {
        nameComparator = Comparator.comparing((Player p)-> p.getLastName()).thenComparing((Player p)-> p.getFirstName());
        collegeComparator = Comparator.comparing((Player::getCollegeName));
        collegeNameComparator = collegeComparator.thenComparing(nameComparator);
        collegeDOBComparator= collegeNameComparator.thenComparing(Player::getDob);
    }

    public int compareTo(Player player){
        int harta = getFirstName().compareTo(player.getFirstName());
        if (harta != 0 ){
            return harta;
        }

        harta = getLastName().compareTo(player.getLastName());
        if (harta !=0){
            return harta;
        }

        harta = getDob().compareTo(player.getDob());
        if (harta != 0 ){
            return harta;
        }

        return getCollegeName().compareTo(player.getCollegeName());
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Player player = (Player) o;
        return getFirstName().equals(player.getFirstName())
                && getLastName().equals(player.getLastName())
                && getDob().equals(player.getDob())
                && getCollegeName().equals(player.getCollegeName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getFirstName(),getLastName(),getDob(),getCollegeName());
    }

    @Override
    public void printSummary() {
        System.out.println("Name: " + getFirstName() +
                ", Last name: " + getLastName() +
                ", Position: " + getPosition());
    }

    @Override
    public String toString() {
        return "Name: " + getFirstName() +
                ", Last name: " + getLastName() +
                ", Collage name: " +getCollegeName() +
                ", Jersey number: " + getJerseyNumber() +
                "Position: " + getPosition().getPositionName() +
                ", Birth date: " +getDob();
    }
}
