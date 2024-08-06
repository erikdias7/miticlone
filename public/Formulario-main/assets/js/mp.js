const mp = new MercadoPago("APP_USR-b70f62be-82ce-45f0-a07a-919b3b25bd3f", {
  locale: "pt-BR",
});

function getEmail() {
  return document.getElementById("email").value;
}

async function fetchDataAndCreateObject(productId, email) {
  try {
    if (isNaN(productId) || productId <= 0) {
      throw new Error("Invalid product ID");
    }

    if (!email) throw new Error("Invalid email");

    const response = await fetch(
      `http://localhost:3000/api/pay/${productId}/${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const result = await response.json();
    const preferenceId = result.id;

    const data = {
      initialization: {
        preferenceId: preferenceId,
      },
    };

    await mp.bricks().create("wallet", "wallet_container_fortaleza", data);

    return preferenceId;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
