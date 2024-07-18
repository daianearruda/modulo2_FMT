import React, { useState, useEffect } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: ''
  });

  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const checkFormCompletion = () => {
      const values = Object.values(formData);
      const isComplete = values.reduce((total, value) => (value ? total + 1 : total), 0) === values.length;
      setIsFormComplete(isComplete);
    };

    checkFormCompletion();
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormComplete) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Preencha todos os campos antes de enviar.');
    }
  };

  return (
    <div className="container">
      <h2>Formulário de Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="idade"
          placeholder="Idade"
          value={formData.idade}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {isFormComplete && <p className="message">Formulário totalmente preenchido!</p>}
    </div>
  );
}

export default Form
