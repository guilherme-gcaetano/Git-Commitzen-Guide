import "./Register.css";
import { useState } from "react";
import Input from "../../components/Input";

const Register = () => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const autorizedUsers = [
    {
      email: "commitzen@glide.com.br",
      password: "123456",
    },
  ];

  //onchange 1
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  //onchange 2
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = autorizedUsers.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);

    if (!user) {
      alert("Usuário não autorizado.");
    } else {
      alert("Usuário autorizado.");
      e.target.reset();
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h2>Entrar</h2>
        </div>
        <form id="form" className="form">
          <div className="form-control">
            <Input type="email" id="email" label="Email" placeholder="Digite seu e-mail..." onChange={onEmailChange}></Input>
            </div>
          <div className="form-control">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite sua senha..."
              onChange={onPasswordChange}
            />
          </div>
          <div className="form-control">
            <input
              type="submit"
              id="enviar"
              placeholder="Enviar"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
