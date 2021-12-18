
const api = axios.create({
  baseURL: "https://api-curriculo-stumpf1988.herokuapp.com/",
});

//post
function Enviar() {
  const nome = document.querySelector("#nome").value;
  const telefone = document.querySelector("#telefone").value;
  const email = document.querySelector("#email").value;
  const comentario = document.querySelector("#comentario").value;

  if (nome == "" || telefone == "" || email == "") {
    alert("Informe todos os dados!");
  } else {
    alert("Mensagem enviada com sucesso!");
  }

  api
    .post("/", {
      nome,
      telefone,
      email,
      comentario,
    })
    .then((result) => {
      const cadastro = result.data;
      cadastroList = cadastro;
      window.location.href = "index.html";
    })
    .catch((err) => {
      alert(err);
      console.log(err);
      console.log(err.request);
      console.log(err.response);
    });
}
