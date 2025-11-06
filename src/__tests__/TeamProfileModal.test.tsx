import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TeamProfileModal from '@/components/TeamProfileModal';

const member = { name: 'Test User', role: 'President' as const, bio: 'Bio here' };

describe('TeamProfileModal accessibility', () => {
  let onClose: () => void;
  beforeEach(() => { onClose = vi.fn(); });

  it('focuses close button initially and traps focus', async () => {
    render(<TeamProfileModal member={member} onClose={onClose} />);

    const closeBtn = screen.getByRole('button', { name: /close profile/i });
    expect(closeBtn).toHaveFocus();

    const user = userEvent.setup();
    // Tab should wrap within modal (only close button focusable in minimal render)
    await user.tab();
    expect(closeBtn).toHaveFocus();

    // Shift+Tab also wraps
    await user.tab({ shift: true });
    expect(closeBtn).toHaveFocus();
  });

  it('closes on Escape', async () => {
    render(<TeamProfileModal member={member} onClose={onClose} />);
    const user = userEvent.setup();
    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalled();
  });
});
