document.getElementById("quantidade-dependentes").addEventListener("change", function () {
    var quantidade = parseInt(this.value); // Obtém o número selecionado de dependentes
    var container2 = document.querySelectorAll(".container2"); // Seleciona todos os containers existentes

    // Oculta todos os containers existentes
    container2.forEach(function (container) {
      container.style.display = "none";
    });

    // Exibe apenas os containers necessários de acordo com a quantidade selecionada
    for (var i = 0; i < quantidade; i++) {
      container2[i].style.display = "block";
    }
  });