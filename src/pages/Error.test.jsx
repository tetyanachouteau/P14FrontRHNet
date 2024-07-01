import React from 'react';
import { render, screen } from '@testing-library/react'; // Import render and screen utilities from testing-library/react
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM extensions for assertions
import Error from './Error'; // Import the component to be tested

describe('Error Component', () => {
    // Test: renders Border component
    // Test: renders Callout component with title "Error 404"
    test('renders Callout component with title "Error 404"', () => {
        render(<Error />); // Render the Error component
        const calloutTitleElement = screen.getByText(/Error 404/i); // Find the element with text matching /Error 404/i (case insensitive)
        expect(calloutTitleElement).toBeInTheDocument(); // Assert that the callout title element is in the document
    });
});
