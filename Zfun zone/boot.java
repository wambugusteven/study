public class boot {
    public String item;
    public int price;

    public boot(String item, int price) {
        this.item = item;
        this.price = price;
    }

    public double payAfterTax() {
        double tax = 0.08;
        return price + (price * tax);
    }
}