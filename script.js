
    let metas = [];

    // LOGIN
    function entrar(){

      const nome = document.getElementById("nome").value.trim();
      const senha = document.getElementById("senha").value.trim();

      if(nome === "" || senha === ""){
        alert("Preencha nome e senha!");
        return;
      }

      document.getElementById("login").style.display = "none";
      document.getElementById("app").style.display = "block";

      document.getElementById("tituloUsuario").innerText =
        "Olá, " + nome ;
    }

    // ADICIONAR META
    function adicionarMeta(){

      const input = document.getElementById("novaMeta");

      const texto = input.value.trim();

      if(texto === ""){
        alert("Digite uma meta!");
        return;
      }

      metas.push({
        texto: texto,
        concluida: false
      });

      input.value = "";

      mostrarMetas();
    }

    // MOSTRAR METAS
    function mostrarMetas(){

      const lista = document.getElementById("listaMetas");

      lista.innerHTML = "";

      metas.forEach((meta, index) => {

        const div = document.createElement("div");

        div.className = "meta";

        if(meta.concluida){
          div.classList.add("concluida");
        }

        div.innerHTML = `
          <label>

            <input 
              type="checkbox"
              ${meta.concluida ? "checked" : ""}
              onchange="alternarMeta(${index})"
            >

            <span>${meta.texto}</span>

          </label>
        `;

        lista.appendChild(div);

      });

      atualizarProgresso();

      verificarConclusao();
    }

    // MARCAR META
    function alternarMeta(index){

      metas[index].concluida =
        !metas[index].concluida;

      mostrarMetas();
    }

    // PROGRESSO
    function atualizarProgresso(){

      const concluidas =
        metas.filter(meta => meta.concluida).length;

      document.getElementById("progresso").innerText =
        `${concluidas} de ${metas.length} metas concluídas`;
    }

    // VERIFICAR FINALIZAÇÃO
    function verificarConclusao(){

  const todasConcluidas =
    metas.length > 0 &&
    metas.every(meta => meta.concluida);

  const frases = [

    "Parabéns! Você venceu mais um dia! ",

    "É melhor você tentar algo, vê-lo não funcionar e aprender com isso, do que não fazer nada.",

    "Nossa maior fraqueza é desistir. O caminho mais certo para o sucesso é sempre tentar apenas uma vez mais. ",

    "Cada meta concluída é um passo pro sucesso! ",

    "Você conseguiu! Nunca duvide da sua capacidade ",

    "Seu esforço de hoje constrói seu futuro ",

    "O sucesso não cai do céu. Ele exige muita luta, esforço, estudo e força de vontade. ",

    "Orgulhe-se do que você fez hoje ",

    "Você está ficando cada vez melhor! ",

    "O fracasso é uma ótima oportunidade para começar de novo de forma mais inteligente."

  ];

  if(todasConcluidas){

    const fraseAleatoria =
      frases[Math.floor(Math.random() * frases.length)];

    document.getElementById("mensagem").innerText =
      fraseAleatoria;

    soltarConfetes();

  }else{

    document.getElementById("mensagem").innerText = "";

  }

}
    // CONFETES
    function soltarConfetes(){

      for(let i = 0; i < 80; i++){

        const confete =
          document.createElement("div");

        confete.classList.add("confete");

        confete.style.left =
          Math.random() * 100 + "vw";

        confete.style.background =
          corAleatoria();

        confete.style.animationDuration =
          (Math.random() * 3 + 2) + "s";

        document.body.appendChild(confete);

        setTimeout(() => {
          confete.remove();
        }, 5000);

      }

    }

    // CORES DOS CONFETES
    function corAleatoria(){

      const cores = [
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff",
        "#ff5e00"
      ];

      return cores[
        Math.floor(Math.random() * cores.length)
      ];

    }