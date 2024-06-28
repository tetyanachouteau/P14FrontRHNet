import React from 'react';
import { render, screen } from '@testing-library/react'; // Import render and screen utilities from testing-library/react
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM extensions for assertions
import Erreur from './Erreur'; // Import the component to be tested

describe('Erreur Component', () => {
    // Test: renders Border component
    test('renders Border component', () => {
        render(<Erreur />); // Render the Erreur component
        const borderElement = screen.getByRole('border'); // Find the element by role 'border'
        expect(borderElement).toBeInTheDocument(); // Assert that the border element is in the document
    });

    // Test: renders Callout component with title "Error 404"
    test('renders Callout component with title "Error 404"', () => {
        render(<Erreur />); // Render the Erreur component
        const calloutTitleElement = screen.getByText(/Error 404/i); // Find the element with text matching /Error 404/i (case insensitive)
        expect(calloutTitleElement).toBeInTheDocument(); // Assert that the callout title element is in the document
    });

    // Test: renders specific error message
    test('renders specific error message', () => {
        render(<Erreur />); // Render the Erreur component
        const errorMessage = screen.getByText('⚠️ Oops! The page you are requesting does not exist.'); // Find the element with the specific error message
        expect(errorMessage).toBeInTheDocument(); // Assert that the error message element is in the document
    });
});
