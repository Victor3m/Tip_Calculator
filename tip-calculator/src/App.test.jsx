import { render, screen, fireEvent } from '@testing-library/react'
import App from './App.js';

describe('CalculateTip', () => {
    it('should calculate the tip amount correctly', () => {
      const { getByText, getByLabelText } = render(<App />);
      const tipInput = screen.getByLabelText('Tip Percentage (0% - 100%)');
      const billInput = screen.getByLabelText('Bill Amount ($)');
  
      fireEvent.change(billInput, { target: { value: '$100' } });
      fireEvent.change(tipInput, { target: { value: '15%' } });
  
      const tipAmount = getByText('Tip Amount: $15.00');
      const total = getByText('Total Bill: $115.00');
  
      expect(tipAmount).toBeInTheDocument();
      expect(total).toBeInTheDocument();
  
      fireEvent.change(billInput, { target: { value: '$200' } });
      fireEvent.change(tipInput, { target: { value: '20%' } });
  
      const updatedTipAmount = getByText('Tip Amount: $40.00');
      const updatedTotal = getByText('Total Bill: $240.00');
  
      expect(updatedTipAmount).toBeInTheDocument();
      expect(updatedTotal).toBeInTheDocument();
    });
  });