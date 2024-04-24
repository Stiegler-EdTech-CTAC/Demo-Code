package main.java.com.example;

public class Calc {

    // Method to add two integers
    public int add(int a, int b) {
        return a + b;
    }

    // Method to subtract two integers
    public int subtract(int a, int b) {
        return a - b;
    }

    // Method to multiply two integers
    public int multiply(int a, int b) {
        return a * b;
    }

    // Method to divide two integers
    public double divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Division by zero is not allowed.");
        }
        return (double) a / b;
    }

    // Main method to demonstrate the usage of the Calculator class
    public static void main(String[] args) {
        Calculator calculator = new Calculator();

        // Demonstrating each method
        System.out.println("Addition of 5 and 3: " + calculator.add(5, 3));
        System.out.println("Subtraction of 5 from 10: " + calculator.subtract(10, 5));
        System.out.println("Multiplication of 4 and 6: " + calculator.multiply(4, 6));
        System.out.println("Division of 8 by 2: " + calculator.divide(8, 2));
    }
}
