import React from 'react';

const CheckNumber = () => {
   const [number, setNumber] = React.useState('');
   const [error, setError] = React.useState('');

   const isEven = parseInt(number) % 2 === 0;

   return (
      <>
         <h1 role="test">Tests</h1>
         <input
            type="text"
            placeholder="Digite um numero"
            value={number}
            onChange={(e) => {
               const rawValue = e.target.value;
               const numberValue = parseInt(rawValue);

               const keyPress = e.nativeEvent.target;

               console.log(keyPress);

               if (isNaN(numberValue)) {
                  setError('Digite um valor valido');
                  return;
               }

               setError('');

               setNumber(rawValue);
            }}
         />
         <p>{isEven ? 'Par' : 'Impar'}</p>
         <p>{error}</p>
      </>
   );
};

export default CheckNumber;
