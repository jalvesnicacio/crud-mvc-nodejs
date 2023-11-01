import React, { useState } from 'react';

const CadastroProduto = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
            console.log('Dados do produto a ser cadastrado:', data);
        })
        .catch((error) => {
          // Lide com erros de solicitação, se houver.
          console.log('Um erro aconteceu:', error);
        });
      

    // Aqui você pode enviar os dados para o servidor Node.js, como mencionado anteriormente.
    // Por enquanto, apenas exibiremos os dados no console.
    // console.log('Dados do produto a ser cadastrado:', product);
  };

  return (
    <div>
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="preco">Preço:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default CadastroProduto;
