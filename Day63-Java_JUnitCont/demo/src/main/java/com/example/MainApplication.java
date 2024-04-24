package com.example;

public class MainApplication {

    // Method to be tested in topLevelTest
    public int add(int a, int b) {
        return a + b;
    }

    // Method to be tested in nestedTest
    public boolean isOneLessThanTwo() {
        return 1 < 2;
    }

    // Method to be tested in parameterizedTest
    public boolean isLessThanFive(int number) {
        return number < 5;
    }

    // Method to be tested in hamcrestAssertionTest
    public String getGreetingMessage() {
        return "Hello, JUnit!";
    }

    // Main method to execute the application logic
    public static void main(String[] args) {
        MainApplication app = new MainApplication();

        // Demonstrating the add method
        int sum = app.add(2, 2);
        System.out.println("2 + 2 = " + sum);

        // Demonstrating the isOneLessThanTwo method
        boolean result = app.isOneLessThanTwo();
        System.out.println("Is 1 less than 2: " + result);

        // Demonstrating the isLessThanFive method with an example value
        boolean check = app.isLessThanFive(3);
        System.out.println("Is 3 less than 5: " + check);

        // Demonstrating the getGreetingMessage method
        String message = app.getGreetingMessage();
        System.out.println("Greeting Message: " + message);
    }
}
