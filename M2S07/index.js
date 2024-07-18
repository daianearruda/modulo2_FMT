import React, { useState, useEffect } from 'react';
import './Contador.css';

function Contador() {
  const [contador, setContador] = useState(0);
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const fetchNoticia = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/');
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setNoticia(data.items[0].titulo);
        }
      } catch (error) {
        console.error('Erro ao buscar a notícia:', error);
      }
    };

    fetchNoticia();
  }, []);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className="container">
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      {noticia && <p className="noticia">Notícia do dia: {noticia}</p>}
    </div>
  );
}

export default Contador;
