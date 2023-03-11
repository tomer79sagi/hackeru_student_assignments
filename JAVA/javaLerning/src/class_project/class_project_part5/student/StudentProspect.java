package javaLerning.src.class_project.class_project_part5.student;

import java.util.ArrayList;

public class StudentProspect {
    ArrayList<String> communications;

    public StudentProspect(){
        communications = new ArrayList<String>();
    }

    public void addCommunications(String comn){
        this.communications.add(comn);
    }

    public String toString(){
        String text = "";

        for (String communication : communications) {
            text += communication + ";";
        }
        return text;
    }






}
