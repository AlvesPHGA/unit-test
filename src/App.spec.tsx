import { getByPlaceholderText, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// test('sum', () => {
//    const { getByText } = render(<App />);

//    // expect(getByText('Stating in Unit testing')).toBeInTheDocument();
//    expect(getByText('Stating in Unit testing')).toHaveAttribute(
//       'class',
//       'text',
//    );
// });

describe('App component', () => {
   it('should render list items', () => {
      const { getByText } = render(<App />);

      expect(getByText('Jonnas')).toBeInTheDocument();
      expect(getByText('Julio')).toBeInTheDocument();
      expect(getByText('Judas')).toBeInTheDocument();
   });

   it('should be able to add new item to the list', async () => {
      const { getByText, getByPlaceholderText } = render(<App />);

      const addButton = getByText('Adicionar');
      const inputElement = getByPlaceholderText('Type new item');

      await userEvent.type(inputElement, 'novo');
      await userEvent.click(addButton);

      expect(getByText('novo')).toBeInTheDocument();
   });
});
