import { useState } from 'react';
import './Contador.css';

function Contador() {
  // Inicializa o estado com valor 0
  const [contador, setContador] = useState(0);

  // Função para aumentar o valor do contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // Função para diminuir o valor do contador
  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

export default Contador;
