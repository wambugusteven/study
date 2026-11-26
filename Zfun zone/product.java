public class product {
    private String name;
    private double sellingPrice;
    private double totalSales, totalCost;
    private int onHand, sold;

    public product(String n, double p) {
        name = n;
        sellingPrice = p;
        totalCost = 0.0;
        totalSales = 0.0;
        onHand = 0;
        sold = 0;
    }

    public void receiveProduct(int q, double c) {

        if (q <= 0) {
            throw new IllegalArgumentException("Quantity must be positive");
        }
        if (c < 0) {
            throw new IllegalArgumentException("Cost cannot be negative");
        }
        onHand = onHand + q;
        totalCost = totalCost + q * c;
    }

    public void setSellingPrice(double p) {
        if (p < 0) {
            throw new IllegalArgumentException("Selling price cannot be negative");
        }
        sellingPrice = p;
    }

    public void makeSales(int q) {
        if (q <= 0) {
            throw new IllegalArgumentException("Quantity must be positive");
        }
        if (q > onHand) {
            throw new IllegalArgumentException("Not enough stock. On hand: " + onHand);
        }
        onHand = onHand - q;
        sold = sold + q;
        totalSales = totalSales + (q * sellingPrice);
    }

    public String productName() {
        return name;
    }

    public int quantityOnHand() {
        return onHand;
    }

    public int quantitySold() {
        return sold;
    }

    public double netProfitToDate() {
        return totalSales - totalCost;
    }

    public double averageSellingPrice() {
        // FIXED: avoids dividing by zero (which returned NaN)
        if (sold == 0) {
            return 0.0;
        }
        return totalSales / sold;
    }
}