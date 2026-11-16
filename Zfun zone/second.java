public class second {
    public static void main(String[] args){
        String name = "Maina";
        int age = 47;

        boot banana = new boot("Banana", 5);
        boot avocado = new boot("Avocado", 30);
        boot oranges = new boot("Oranges", 20);

        System.out.println("This is my first code in Java");
        System.out.println("Today, " + name + " is " + age + " years old");
        System.out.println(banana.item + ", " +  banana.price);
        System.out.println("The price of banana after taxing is: " + banana.payAfterTax())

    }
}
