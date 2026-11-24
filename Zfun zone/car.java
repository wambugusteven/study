import java.util.Scanner;

public class car {
    private String make;
    String model;
    String color;
    int year;
    double mpg;

    public void turnLeft () {};
     public void turnRight () {};
      public void moveFoward () {};
       public void moveBackward () {};
        public void honk () {};

        public static void main(String[] args) {
            car myCar = new car car();
            myCar.make = "Subaru";
            myCar.model = "Legacy sedan";
            myCar.year = 2024;
            myCar.mpg = 40;
            myCar.color = "balck";

            Strings[] cars = {"Honda", "Subaru", "Mazda CX series", "BYD", "Tesla", "Toyota"};
            for(c: cars) {
                System.out.println(c);
            }
            for(int i; i < 0; i++) {
                System.out.println(cars(i));
            }

            Scanner in = new scanner (System.in);
            System.out.println("What is your favorite fruit?");

            int choice = 0;

            do {
                System.out.println("1. Apples");
                System.out.println("2. Oranges");
                System.out.println("3. Pinneples");
                System.out.println("4. Avocado");
                System.out.println("5. Melon");
                System.out.println("6. Pawpaw");
                choice = in.nextInt();
            } while (choice > 6) {
                System.out.println("you chose: " + choice);
            }
        }

}