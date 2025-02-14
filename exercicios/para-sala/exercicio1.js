/*Crie uma classe chamada User com os atributos:
- nome;
- username;
- email;
- senha;

Crie os seguintes metódos com as suas regras:

- login: para logar precisa do email e senha e verificar se o email e senha estão corretos, se estiverem, retornar uma mensagem de login realizado,
senão, falha no login;
- alterar senha: possibilidade de trocar a senha atual por uma senha nova.
*/

class User {
  constructor(name, userName, email, password) {
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      return `Login realizado com sucesso/Login successfully`;
    } else {
      return `Autenticação falhou / Authentication failed`;
    }
  }

  setPassword(newPassword) {
    this.password = newPassword;

    return `Senha alterada`;
  }

  getEmail() {
    return `o seu email cadastrado é ${this.email}`;
  }
}

const userClaudia = new User(
  "Cláudia",
  "clauprudente",
  "claudiamary.santos@gmail.com",
  "senha123#"
);
console.log(userClaudia);

console.log(userClaudia.login("claudiamary.santos@gmail.com", "senha123#"));
console.log(userClaudia.setPassword("senhanova"));

console.log(userClaudia.password);
