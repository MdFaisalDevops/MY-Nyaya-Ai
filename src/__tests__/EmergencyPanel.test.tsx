import { render, screen } from '@testing-library/react';
import EmergencyPanel from '@/components/ui/EmergencyPanel';

describe('EmergencyPanel Component', () => {
  it('renders the emergency numbers correctly', () => {
    render(<EmergencyPanel />);
    
    // Check for standard emergency numbers
    expect(screen.getByText('112')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('1091')).toBeInTheDocument();
    
    // Check for the critical message
    expect(screen.getByText(/Immediate danger or severe threats detected/i)).toBeInTheDocument();
  });
});
