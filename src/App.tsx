import React from 'react';

function App() {
   const [list, setList] = React.useState(['Jonnas', 'Julio', 'Judas']);

   function handleList() {
      setList((states) => [...states, 'Jako']);
   }
   return (
      <>
         <h1 className="text">Stating in Unit testing</h1>

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
