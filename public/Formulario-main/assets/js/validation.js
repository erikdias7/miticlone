document.getElementById("data-nascimento").addEventListener("input", function (e) {
  let input = e.target;
  let inputValue = input.value.replace(/\D/g, "").substring(0, 8); // Limit to 8 characters

  if (inputValue.length > 4) {
    inputValue = `${inputValue.substring(0, 2)}/${inputValue.substring(2, 4)}/${inputValue.substring(4, 8)}`;
  } else if (inputValue.length > 2) {
    inputValue = `${inputValue.substring(0, 2)}/${inputValue.substring(2, 4)}`;
  }

  input.value = inputValue;
});

function formatarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formatarTelefone(telefone) {
  telefone = telefone.replace(/\D/g, "");
  return telefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
}

document.getElementById("cpf").addEventListener("input", function () {
  this.value = formatarCPF(this.value);
});

document.getElementById("telefone").addEventListener("input", function () {
  this.value = formatarTelefone(this.value);
});

function togglePasswordVisibility(inputId) {
  const input = document.getElementById(inputId);
  const passwordToggle = input.nextElementSibling;
  const isPassword = input.type === "password";

  input.type = isPassword ? "text" : "password";
  passwordToggle.textContent = "👁️";
}

function validatePassword() {
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;
  const senhaError = document.getElementById("senha-error");
  const confirmarSenhaError = document.getElementById("confirmar-senha-error");

  if (senha !== confirmarSenha) {
    senhaError.textContent = "A confirmação de senha deve ser igual à senha.";
    confirmarSenhaError.textContent = "A confirmação de senha deve ser igual à senha.";
    return false;
  } else {
    senhaError.textContent = "";
    confirmarSenhaError.textContent = "";
    return true;
  }
}

function validateForm() {
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;

  if (senha.length < 6 || senha !== confirmarSenha) {
    return false;
  }

  return true;
}

document
  .getElementById("cadastro-form")
  .addEventListener("submit", function (event) {
    const senhaInput = document.getElementById("senha");
    const senhaValue = senhaInput.value;
    const senhaError = document.getElementById("senha-error");

    if (senhaValue.length < 6) {
      event.preventDefault();
      senhaError.textContent = "A senha deve ter pelo menos 6 caracteres.";
      senhaError.style.display = "block";
    } else {
      senhaError.textContent = "";
      senhaError.style.display = "none";
    }
  });

document
  .getElementById("cadastro-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const productId = document.getElementById("product-info").getAttribute("data-product-id")
    const email = document.getElementById("email").value;

    if (validateForm()) {
      console.log("validateForm true")
      fetchDataAndCreateObject(productId, email).then(console.log).catch(console.error);
      renderMercadoPagaButton();
      } else {
      console.log("validateForm false")
      document.querySelector(".mercadopagobot").style.display = "none";
    }
  });

const renderMercadoPagaButton = () => {

  // Create the main container div
  const mercadopagobotDiv = document.createElement('div');
  mercadopagobotDiv.className = 'mercadopagobot';

  // Create the inner div
  const walletContainerDiv = document.createElement('div');
  walletContainerDiv.id = 'wallet_container_fortaleza';

  // Append the inner div to the main container div
  mercadopagobotDiv.appendChild(walletContainerDiv);

  // Find the target div with the class "mp"
  const mpDiv = document.querySelector('.mp');

  // Append the main container div to the target div
  mpDiv.appendChild(mercadopagobotDiv);

  document.getElementById("continue").style.display = "none"
}