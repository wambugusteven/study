import java.util.Scanner;

public class second {
    public static void main(String[] args){

        

        String name = "Maina";
        int age = 47;

        boot banana = new boot("Banana", 5);
        boot myCoffee = new boot("latte", 5);
        product sales = new product("Bob baked beans", 1.25);

        System.out.println("This is my first code in Java");
        System.out.println("Today, " + name + " is " + age + " years old");
        System.out.println(banana.getItem() + ", " +  banana.getPrice());
        System.out.println(myCoffee.getCoffeeName() + ", " + myCoffee.getCoffeePrice());
        System.out.println("The price of banana after tax: Ksh" + banana.payAfterTax());
        System.out.println("Remaining inventory of " + sales.productName() + " is " + sales.quantityOnHand());

    }
}
