package javaLerning.src.db;

public interface IDB {
    void update();

    default void save(){
        int code = 1234;
        System.out.println(this.getClass() + " saved in data base");
    }
    default void delete(){
        int code = 4321;
        System.out.println(this.getClass() + " deleted from date base");
    }
}
