
const api = axios.create({
  baseURL: "https://api-curriculo-stumpf1988.herokuapp.com",
});

// const api = axios.create({
//   baseURL: "https://localhost:8082",
// });

//post cadastro
function EnviaCadastro() {
  const nome = document.querySelector("#nome").value;
  const telefone = document.querySelector("#telefone").value;
  const email = document.querySelector("#email").value;

  if (nome == "" || telefone == "" || email == "") {
    alert("Informe todos os dados!");
  } else {
    alert("Obrigada por enviar teus dados! Em breve entrarei em contao!");
  }

  api
    .post("/cadastro", {
      nome,
      telefone,
      email,
    })
    .then((result) => {
      const cadastro = result.data;
      cadastroList = cadastro;
      window.location.href = "/";
    })
    .catch((err) => {
      alert(err);
      console.log(err);
      console.log(err.request);
      console.log(err.response);
    });
}


//post comentario
function EnviaComentario() {
  const nome = document.querySelector("#nome2").value;
  const comentario = document.querySelector("#comentario").value;

  if (nome == "" || comentario == "") {
    alert("Informe todos os dados!");
  } else {
    alert("Mensagem enviada com sucesso!");
  }

  api
    .post("/comentario", {
      nome,
      comentario,
    })
    .then((result) => {
      const coment = result.data;
      comentarioList = coment;
      window.location.href = "/";
    })
    .catch((err) => {
      alert(err);
      console.log(err);
      console.log(err.request);
      console.log(err.response);
    });
}