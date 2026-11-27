import java.util.Scanner;

public class Glocery {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("What is the kind of fruit you would like to purchase?");
        String fruit = scanner.nextLine();

        System.out.println("What is the price of the fruit:");
        double buyingPrice = Double.parseDouble(scanner.nextLine());

        System.out.println("Quantity of the fruits required:");
        int quantity = Integer.parseInt(scanner.nextLine());

        scanner.close();

        product p = new product(fruit, buyingPrice);
        p.receiveProduct(quantity, buyingPrice);
        display(p);
    }

        private static void display(product p) {
        System.out.println("\nProduct: " + p.productName());
        System.out.println("Quantity on hand: " + p.quantityOnHand());
        System.out.println("Quantity sold: " + p.quantitySold());
        System.out.println("Net profit to date: " + p.netProfitToDate());
    }


    }
