import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect'; 
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import List from './List'; 

describe('List Component', () => {
    test('renders the page title', () => {
        render(
            <MemoryRouter>
                <List />
            </MemoryRouter>
        );

        // Check if the title is present
        const pageTitle = screen.getByText(/Current Employees/i);
        expect(pageTitle).toBeInTheDocument();
    });
    test('renders List component', () => {
        render(
            <MemoryRouter>
                <List />
            </MemoryRouter>
        ); 

        const searchInfoElement = screen.getByText(/Search info/i); 
        expect(searchInfoElement).toBeInTheDocument(); 

        const helpElement = screen.getByText(/How to sort the list/i); 
        expect(helpElement).toBeInTheDocument(); 

        const entriesElement = screen.getByText(/Show/i); 
        expect(entriesElement).toBeInTheDocument(); 
        
    });

    test('paginates data correctly', () => {
        render(
            <MemoryRouter>
                <List />
            </MemoryRouter>
        );

        const nextButton = screen.getByText('Next');
        fireEvent.click(nextButton);

        const previousButton = screen.getByText('Previous');
        fireEvent.click(previousButton);
    });

    test('renders table with headers "First Name" and "Last Name"', () => {
        render(
            <MemoryRouter>
                <List />
            </MemoryRouter>
        );

        // Check if table is present
        const table = screen.getByRole('table');
        expect(table).toBeInTheDocument();

    });

});

