package com.example;

import main.java.com.example.Calc;

public class App {
    
    public static void main(String[] args) {

        Calc calc = new Calc();

        int sum = calc.add(5, 3);
        int difference = calc.subtract(10, 6);
        int product = calc.multiply(4, 2);
        double quotient = calc.divide(10, 2);
        
        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + difference);
        System.out.println("Product: " + product);
        System.out.println("Quotient: " + quotient);
    }
}