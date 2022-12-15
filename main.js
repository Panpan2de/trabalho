const emailInput = document.querySelector("idEmail");
const senhaInput = document.querySelector("idSenha");
const logar = document.querySelector("#idLogar");

const errorMessage = document.querySelector("idmMsg");

logar.addEventListener("click", (e) => {
    e.preventDefault();

    const emailValue = emailInput.value;
    const senhaValue = senhaInput.value;

    if (emailValue === "" || senhaValue === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos!";
        return
    }else if(emailValue === "adm@email.com" && senhaValue === "adm123") {
        alert("Sucesso")
    }
});
