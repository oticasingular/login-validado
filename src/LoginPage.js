import React, { useState } from 'react';
import './LoginPage.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemEmail, setMensagemEmail] = useState('');
  const [mensagemSenha, setMensagemSenha] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const handleLogin = () => {
    setMensagemEmail('');
    setMensagemSenha('');
    setMensagemSucesso('');

    let valido = true;

    if(email !== 'eduardo.lino@pucpr.br'){
      setMensagemEmail('E-mail não cadastrado!');
      valido = false;
    }

    if(senha !== '123456') {
      setMensagemSenha('Senha incorreta! tente outra vez.');
      valido = false;
    }

    if (valido) {
      setMensagemSucesso('Acessado com sucesso!')
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>

      <div className="form-group">
        <label>E-mail:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          />
          {mensagemEmail && (
            <p style={{ color: 'red', marginTop: '5px' }}>{mensagemEmail}</p>
          )}
        </div>

      <div className="form-group">
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          />
          {mensagemSenha && (
            <p style={{ color: 'red', marginTop: '5px' }}>{mensagemSenha}</p>
          )}
        </div>

        <button onClick={handleLogin}>Acessar</button>

        {mensagemSucesso && (
          <p style={{ color: 'green', marginTop: '20px' }}>{mensagemSucesso}</p>
        )}
        </div>
  );
};

export default LoginPage;
