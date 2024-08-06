function createUser(data) {
  return fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Sucesso:", data);
      return data;
    })
    .catch((error) => {
      console.error("Erro:", error);
      alert("Erro ao criar usuário. Por favor, tente novamente.");
      return null;
    });
}

document
  .getElementById("cadastro-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const userData = {
      fullName: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      password: document.getElementById("senha").value,
      cpf: document.getElementById("cpf").value,
      phone: document.getElementById("telefone").value,
      locality: document.getElementById("localidade").value,
      postalCode: document.getElementById("cep").value,
      city: document.getElementById("cidade").value,
      neighborhood: document.getElementById("bairro").value,
      street: document.getElementById("rua").value,
      number: document.getElementById("numero").value,
      complement: document.getElementById("complemento").value,
      birthDate: document.getElementById("data-nascimento").value,
      client: "some_client_identifier",
      userParentId: "some_user_parent_id",
      referralUserId: document.getElementById("cod").value,
    };

    const createdUser = await createUser(userData);
  });
