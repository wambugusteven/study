public class oneProduct {
    private String name;
    private double sellingPrice;
    private double totalSales, totalCost;
    private int onHand, sold;

  public oneProduct(String n, double p) {
    name = n;
    sellingPrice = p;
    totalCost = 0.0;
    totalSales = 0.0;
    onHand = 0;
    sold = 0;
  }

  public void receiveProduct(int q, double c) {
    onHand = onHand + q;
    totalCost = totalCost  + q * c;
  }

  public void setSellingPrice(double p) {
    sellingPrice = p;
  }

  public void makeSales(int q) {
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
    return totalSales / sold;
  }
}