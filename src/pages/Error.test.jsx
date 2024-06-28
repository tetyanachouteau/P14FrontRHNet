import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Erreur from './Erreur';

describe('Erreur Component', () => {
    test('renders Border component', () => {
        render(<Erreur />);
        const borderElement = screen.getByRole('border');
        expect(borderElement).toBeInTheDocument();
    });

    test('renders Callout component with title "Error 404"', () => {
        render(<Erreur />);
        const calloutTitleElement = screen.getByText(/Error 404/i);
        expect(calloutTitleElement).toBeInTheDocument();
    });

    test('renders specific error message', () => {
        render(<Erreur />);
        const errorMessage = screen.getByText('⚠️ Oops! The page you are requesting does not exist.');
        expect(errorMessage).toBeInTheDocument();
    });
});
