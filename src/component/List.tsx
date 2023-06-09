import React from 'react';

type ListProps = {
   initialItems: string[];
};

const List = ({ initialItems }: ListProps) => {
   const [newItem, setNewItem] = React.useState('');
   const [list, setList] = React.useState(initialItems);

   function handleList() {
      setTimeout(() => {
         setList((states) => [...states, newItem]);
      }, 500);
   }

   function handleRemoveItem(item: string) {
      setTimeout(() => {
         setList((states) => states.filter((i) => i !== item));
      }, 500);
   }

   return (
      <>
         <h1 className="text">Stating in Unit testing</h1>

         <input
            placeholder="Type new item"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
         />
         <button onClick={handleList}>Adicionar</button>
         <ul>
            {list.map((item) => (
               <li key={item}>
                  {item}
                  <button onClick={() => handleRemoveItem(item)}>Remove</button>
               </li>
            ))}
         </ul>
      </>
   );
};

export default List;
