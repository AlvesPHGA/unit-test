import { render, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './list';

// test('sum', () => {
//    const { getByText } = render(<List />);

//    // expect(getByText('Stating in Unit testing')).toBeInTheDocument();
//    expect(getByText('Stating in Unit testing')).toHaveAttribute(
//       'class',
//       'text',
//    );
// });

describe('List component', () => {
   it('should render list items', () => {
      const { getByText } = render(
         <List initialItems={['Jonnas', 'Junim', 'Costa']} />,
      );

      expect(getByText('Jonnas')).toBeInTheDocument();
      expect(getByText('Junim')).toBeInTheDocument();
      expect(getByText('Costa')).toBeInTheDocument();
   });

   it('should be able to add new item to the list', async () => {
      const { getByText, getByPlaceholderText, findByText } = render(
         <List initialItems={[]} />,
      );

      const inputElement = getByPlaceholderText('Type new item');
      const addButton = getByText('Adicionar');

      await userEvent.type(inputElement, 'novo');
      await userEvent.click(addButton);

      expect(await findByText('novo')).toBeInTheDocument();
   });

   it('should be able to add remove item from the list', async () => {
      const { getByText, getAllByText } = render(
         <List initialItems={['Jonnas']} />,
      );

      const removeButtons = getAllByText('Remove');

      userEvent.click(removeButtons[0]);

      await waitForElementToBeRemoved(() => {
         return getByText('Jonnas');
      });
   });
});
