/* eslint-disable */
import { render, screen } from '@testing-library/react';
import Quiz from './Quiz';

// mock data is set to the default state
const mockFormData = {
    category: 'any',
    difficulty: '',
    answerType: '',
    amountOfQuestions: '5'
};
const mockToggleIsHome = jest.fn();
const mockToggleTheme = jest.fn(prev => prev === 'light' ? 'dark' : 'light');
const mockTheme = 'light';

describe('testing Quiz component', () => {

    test('check answers button should load on initial render', async () => {
        render(<Quiz 
            formData={mockFormData}
            toggleIsHome={mockToggleIsHome} 
            toggleTheme={mockToggleTheme}
            theme={mockTheme}
        />)
        const element = await screen.findByText(/Check Answers/i)
        expect(element.textContent).toBe('Check Answers');
    });
})