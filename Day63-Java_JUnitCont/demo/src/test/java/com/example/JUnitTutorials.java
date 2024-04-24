package com.example;

// Import statements for JUnit 5 features
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import static org.junit.jupiter.api.Assertions.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.CoreMatchers.*;

// Main class to demonstrate different JUnit 5 features
public class JUnitTutorials {

   
    // Create an instance of MainApplication to test its methods
    private final MainApplication app = new MainApplication();

    // Unit test for the 'add' method
    @Test
    void addTest() {
        // Verifies that the addition method correctly adds two numbers
        System.out.println("Unit test for addition method");
        assertEquals(4, app.add(2, 2), "2 + 2 should equal 4");
    }

    // Nested class for organizing related comparison tests
    @Nested
    class ComparisonTests {

        // Unit test for the 'isOneLessThanTwo' method
        @Test
        void isOneLessThanTwoTest() {
            // Tests that the comparison method correctly evaluates 1 < 2
            System.out.println("Unit test for comparison method");
            assertTrue(app.isOneLessThanTwo(), "1 is less than 2");
        }
    }

    // Parameterized test for 'isLessThanFive' method
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 4})
    void isLessThanFiveTest(int number) {
        // Checks the 'isLessThanFive' method with multiple inputs
        System.out.println("Parameterized test for 'isLessThanFive' method");
        assertTrue(app.isLessThanFive(number), "Number is less than 5");
    }

    // Unit test for the 'getGreetingMessage' method using Hamcrest assertion
    @Test
    void greetingMessageTest() {
        // Tests that the greeting message method returns the correct string format
        // This test demonstrates the use of Hamcrest for more readable and expressive assertions
        String message = app.getGreetingMessage();
        System.out.println("Unit test for greeting message method using Hamcrest assertion");
        assertThat(message, startsWith("Hello"));
    }
}