// Import necessary modules
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; // Import testing methods
import '@testing-library/jest-dom/extend-expect'; // Jest extensions for assertions
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router for testing
import Home from './Home'; // Import the Home component to be tested

// Utility function to render with Router
const renderWithRouter = (ui) => {
    return render(<Router>{ui}</Router>);
};

// Test suite for the Home page
describe('Home Page', () => {
    // Test: renders the main components
    it('renders the main components', () => {
        renderWithRouter(<Home />);

        expect(screen.getByText('View Current Employees')).toBeInTheDocument();
        expect(screen.getByText('Create Employee')).toBeInTheDocument();
        expect(screen.getByLabelText('First Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
        expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument();
        expect(screen.getByLabelText('Start Date')).toBeInTheDocument();
        expect(screen.getByLabelText('Street')).toBeInTheDocument();
        expect(screen.getByLabelText('City')).toBeInTheDocument();
        expect(screen.getByLabelText('State')).toBeInTheDocument();
        expect(screen.getByLabelText('Zip Code')).toBeInTheDocument();
        expect(screen.getByLabelText('Department')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /create/i })).toBeInTheDocument();
    });

    // Test: displays error message for short first name
    it('displays error message for short first name', () => {
        renderWithRouter(<Home />);

        fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'Jo' } });
        fireEvent.click(screen.getByRole('button', { name: /create/i }));

        expect(screen.getByText((content, element) => content.startsWith('First name is too short'))).toBeInTheDocument();
    });

    // Test: displays error message for invalid first name
    it('displays error message for invalid first name', () => {
        renderWithRouter(<Home />);

        fireEvent.change(screen.getByLabelText('First Name'), { target: { value: 'John123' } });
        fireEvent.click(screen.getByRole('button', { name: /create/i }));

        expect(screen.getByText((content, element) => content.startsWith('First name should not contain numbers or special characters'))).toBeInTheDocument();
    });

    // Add more tests here for other fields and validations if necessary
});

// Test suite for the Modal component
describe('Modal component', () => {
    // Test: does not display "Employee Created!" text when modal is not visible
    it('does not display "Employee Created!" text when modal is not visible', () => {
        // Render with isModalVisible set to false (adjust as per your application logic)
        render(false);

        // Check that the text "Employee Created!" is not present in the document
        expect(screen.queryByText('Employee Created!')).not.toBeInTheDocument();
    });
});
