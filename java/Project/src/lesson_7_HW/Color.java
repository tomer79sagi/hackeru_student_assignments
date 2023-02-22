package lesson_7_HW;

public class Color {

    int red;
    int green;
    int blue;

    public Color(int red, int green, int blue) {
        if (red >= 0 && red <= 255){
            this.red = red;
        }else {
            this.red = 0;
        }

        if (green >= 0 && green <= 255){
            this.green = green;
        }else {
            this.green = 0;
        }

        if (blue >= 0 && blue <= 255){
            this.blue = blue;
        }else {
            this.blue = 0;
        }
    }

    public Color() {
        this.red = 255;
        this.green = 255;
        this.blue = 255;
    }


    @Override
    public String toString() {
        return "red color is" + " " + this.red + " " + "green color is" + " " + this.green + "red blue is" + " " + this.blue;
    }
}
