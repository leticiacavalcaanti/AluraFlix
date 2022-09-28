var mostrarFilmes = document.getElementById("listarFilmes");
var listaFotoNome = {
  nome: "Interstellar",
  foto:
    "https://images-na.ssl-images-amazon.com/images/I/51+YBX+JLoL._SX331_BO1,204,203,200_.jpg"
};
var listaFilmes = [listaFotoNome];

function adicionarFilme() {
  var filme = document.getElementById("filme").value;
  var nomeDoFilme = document.getElementById("nomeDoFilme").value;

  if (filme.endsWith(".jpg")) {
    listaFotoNome = {
      nome: nomeDoFilme,
      foto: filme
    };
    listaFilmes.push(listaFotoNome);
    listarFilmes();
  } else {
    alert("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
  document.getElementById("nomeDoFilme").value = "";
}

function listarFilmes() {
  mostrarFilmes.innerHTML = [];
  for (var i = 0; i < listaFilmes.length; i++) {
    listaFotoNome = listaFilmes[i];

    mostrarFilmes.innerHTML +=
      "<div id='poster'><img src=" +
      listaFotoNome.foto +
      "> <label>" +
      listaFotoNome.nome +
      "</label>";
    ("</div>");
  }
}