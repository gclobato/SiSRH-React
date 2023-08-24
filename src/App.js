import React, { useState } from 'react';

function App() {
  const [funcionários, setfuncionários] = useState([]);
  const [nome, setnome] = useState('');
  const [position, setPosition] = useState('');
  const [cargo, setcargo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newfuncionário = { nome, position, cargo };
    setfuncionários([...funcionários, newfuncionário]);
    setnome('');
    setPosition('');
    setcargo('');
  };

  return (
    <div>
      <h1>Funcionário(s)</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome
          <input type="text" value={nome} onChange={(e) => setnome(e.target.value)} />
        </label>
        <br />
        <label>
          CPF:
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </label>
        <br />
        <label>
          Cargo:
          <input type="text" value={cargo} onChange={(e) => setcargo(e.target.value)} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
      <h2>Cadastrado:</h2>
      <ul>
        {funcionários.map((funcionário, index) => (
          <li key={index}>
            Nome: {funcionário.nome}, CPF: {funcionário.position}, Cargo: {funcionário.cargo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
