import javax.swing.*;                                 

public class FindPrice {

    public static void main(String[] args) {
        final int NUMBER_OF_ITEMS = 10;
        int[] validValues = {101, 108, 201, 213, 266, 304, 311, 409, 411, 412};    
        double[] prices = {0.29, 1.23, 3.50, 0.69, 6.79, 3.19, 0.99, 0.89, 1.26, 8.00};  // FIXED: { }
        String strItem;                                // FIXED: capital S
        int itemOrdered;
        double itemPrice = 0.0;
        boolean isValidItem = false;

        strItem = JOptionPane.showInputDialog(null, "Enter the item number:");
        if (strItem == null) {
            return;
        }

       
        try {
            itemOrdered = Integer.parseInt(strItem.trim());
        } catch (NumberFormatException e) {
            JOptionPane.showMessageDialog(null, "Please enter a valid number.");
            return;
        }

       
        for (int i = 0; i < NUMBER_OF_ITEMS; i++) {
            if (itemOrdered == validValues[i]) {
                isValidItem = true;
                itemPrice = prices[i];
                break;
            }
        }

       
        if (isValidItem) {
            JOptionPane.showMessageDialog(null, "The price of item " + itemOrdered + " is $" + itemPrice);
        } else {
            JOptionPane.showMessageDialog(null, "Sorry, item " + itemOrdered + " was not found.");
        }
    }
}