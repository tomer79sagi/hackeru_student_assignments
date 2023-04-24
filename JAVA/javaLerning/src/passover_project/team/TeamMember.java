package javaLerning.src.passover_project.team;

import javaLerning.src.passover_project.util.NBADate;
import javaLerning.src.passover_project.util.PrintableSummary;

public abstract class TeamMember  implements PrintableSummary {
    private String firstName;
    private String lastName;
    private NBADate dob;
    private Team team;

    public TeamMember(String firstName, String lastName, NBADate dob, Team team) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.team = team;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public NBADate getDob() {
        return dob;
    }

    public Team getTeam() {
        return team;
    }

    @Override
    public String toString() {
        return "Team member name: " + getFirstName() + "\nTeam member last name: " + getLastName();
    }
}
