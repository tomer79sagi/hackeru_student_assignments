package javaLerning.src.tirgulClass.comparing;

public class person {
    private String name;

    public person(String name){
        setName(name);
//
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)return true;

        if (obj ==null || getClass() != obj.getClass()) return false;

        person objperson = (person)obj;

        return getName().equals(objperson.getName());
    }

}
