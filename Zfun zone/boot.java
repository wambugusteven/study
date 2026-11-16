public class boot {
    private String item;
    private int price;
    private String coffeeName;
    private int coffeePrice;

    private static final double MAX_PRICE = 100.0;
    private static final String[] VALID_NAME = {"latte", "cappuccino", "espresso", "americano", "mocha"};

    public boot(String item, int price) {
        this.item = item;
        setPrice(price);
        setCoffeePrice(coffeePrice);
        setCoffeeName(coffeeName);
    }

    public double payAfterTax() {
        double tax = 0.08;
        return price + (price * tax);
    }

    public void setPrice( int price) {
        if(price < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        } 
        if (price > MAX_PRICE) {
            throw new IllegalArgumentException("Price cannot exceed " +  MAX_PRICE);
        }
        this.price = price;
    }

    public void setCoffeeName( String coffeeName) {
        String lowercaseName = coffeeName.toLowerCase();
        for( String validName : VALID_NAME) {
            if(validName.equals(lowercaseName)) {
                this.coffeeName = coffeeName;
                return;
            }
        }
         throw  new IllegalArgumentException("Invalid drinks. Must be one of this: " + String.join(", ", VALID_NAME));
    }

    public void setCoffeePrice( int coffeePrice) {
        if(coffeePrice < 0) {
            throw new IllegalArgumentException("Price cannot be negative");
        }
        if( coffeePrice > MAX_PRICE) {
            throw new IllegalArgumentException("Price cannot exceed " + MAX_PRICE);
        }
      this.coffeePrice = coffeePrice;
    }

    public String getItem() {
        return item;
    }
    public double getPrice() {
        return price;
    }
    public String getCoffeeName() {
        return coffeeName;
    }
    public int getCoffeePrice() {
        return coffeePrice;
    }


}