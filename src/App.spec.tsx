import { render } from '@testing-library/react';
import App from './App';

test('sum', () => {
   const { getByText } = render(<App />);

   // expect(getByText('Stating in Unit testing')).toBeInTheDocument();
   expect(getByText('Stating in Unit testing')).toHaveAttribute(
      'class',
      'text',
   );
});
