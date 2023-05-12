import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckNumber from '.';

describe('CheckNumber component', () => {
   it('should show title in page', () => {
      const { getByText } = render(<CheckNumber />);

      expect(getByText('Tests')).toBeInTheDocument();
   });
});
