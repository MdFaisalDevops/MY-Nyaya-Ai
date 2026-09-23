import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import EmptyState from '@/components/ui/EmptyState';
import ConfidenceBadge from '@/components/ui/ConfidenceBadge';
import StatusBadge from '@/components/ui/StatusBadge';
import ProgressBar from '@/components/ui/ProgressBar';

describe('UI Components', () => {
  describe('Button', () => {
    it('renders correctly', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('can be disabled', () => {
      render(<Button disabled>Click me</Button>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeDisabled();
    });
  });

  describe('Badge', () => {
    it('renders correctly', () => {
      render(<Badge>New</Badge>);
      expect(screen.getByText('New')).toBeInTheDocument();
    });
  });

  describe('Card', () => {
    it('renders with header and content', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Title</CardTitle>
          </CardHeader>
          <CardContent>Content</CardContent>
        </Card>
      );
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });

  describe('Checkbox', () => {
    it('renders correctly', () => {
      render(<Checkbox aria-label="Accept terms" />);
      expect(screen.getByRole('checkbox', { name: /accept terms/i })).toBeInTheDocument();
    });
  });

  describe('EmptyState', () => {
    it('renders title and description', () => {
      render(<EmptyState title="No items" description="Try again later" />);
      expect(screen.getByText('No items')).toBeInTheDocument();
      expect(screen.getByText('Try again later')).toBeInTheDocument();
    });
  });

  describe('ConfidenceBadge', () => {
    it('renders high confidence correctly', () => {
      render(<ConfidenceBadge level="High" />);
      expect(screen.getByText('High Confidence')).toBeInTheDocument();
    });
  });

  describe('StatusBadge', () => {
    it('renders status correctly', () => {
      render(<StatusBadge status="completed">Completed Status</StatusBadge>);
      expect(screen.getByText('Completed Status')).toBeInTheDocument();
    });
  });

  describe('ProgressBar', () => {
    it('renders progress value', () => {
      render(<ProgressBar completed={5} total={10} />);
      expect(screen.getByText('5 of 10 steps completed (50%)')).toBeInTheDocument();
    });
  });
});
