package javaLerning.src.passover_project.team;

import javaLerning.src.passover_project.enums.NBAConstants;
import javaLerning.src.passover_project.util.PrintableSummary;

import java.util.HashSet;

public class Team implements PrintableSummary{
    private final String name;
    private final String shortName;
    private NBAConstants.conference conference;
    private final HashSet<Player> players;
    private Coach coach;

    public Team(String name, String shortName, NBAConstants.conference conference, HashSet<Player> players, Coach coach) {
        this.name = name;
        this.shortName = shortName;
        this.conference = conference;
        this.players = players;
        this.coach = coach;
    }

    public String getName() {
        return name;
    }

    public String getShortName() {
        return shortName;
    }

    public NBAConstants.conference getConference() {
        return conference;
    }

    public HashSet<Player> getPlayers() {
        return players;
    }

    public Coach getCoach() {
        return coach;
    }

    public void setCoach(Coach coach) {
        this.coach = coach;
    }

    public void addPlayer(Player player){
        players.add(player);
    }

    public void getPlayerByJerseyNumber(int jerseyNumber){
        players.stream().filter(p -> p.getJerseyNumber() == jerseyNumber).findFirst().orElseThrow();
    }
    public void getPlayerByLastName(String lastName){
        players.stream().filter(p -> p.getLastName().equals(lastName)).findFirst().orElseThrow();
    }

    @Override
    public void printSummary() {
        System.out.println("Team name: " + getName() + ", Short name: " + "(" + getShortName() + ")");
        players.forEach(PrintableSummary::printSummary);
    }

}
