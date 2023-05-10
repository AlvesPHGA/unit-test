import React from 'react';

function App() {
   const [newItem, setNewItem] = React.useState('');
   const [list, setList] = React.useState(['Jonnas', 'Julio', 'Judas']);

   function handleList() {
      setTimeout(() => {
         setList((states) => [...states, newItem]);
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
               <li key={item}>{item}</li>
            ))}
         </ul>
      </>
   );
}

export default App;
