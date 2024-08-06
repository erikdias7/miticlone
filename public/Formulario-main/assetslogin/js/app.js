document.getElementById('data-nascimento').addEventListener('input', function (e) {
    let input = e.target;
    let inputValue = input.value.replace(/\D/g, '').substring(0, 8);

    if (inputValue.length > 4) {
        inputValue = inputValue.substring(0, 2) + '/' + inputValue.substring(2, 4) + '/' + inputValue.substring(4, 8);
    } else if (inputValue.length > 2) {
        inputValue = inputValue.substring(0, 2) + '/' + inputValue.substring(2, 4);
    }

    input.value = inputValue;
});

// Função para formatar CPF
function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

// Função para formatar telefone
function formatarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

// Adiciona event listener para formatar CPF ao digitar
document.getElementById('cpf').addEventListener('input', function () {
    this.value = formatarCPF(this.value);
});

// Adiciona event listener para formatar telefone ao digitar
document.getElementById('telefone').addEventListener('input', function () {
    this.value = formatarTelefone(this.value);
});

function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const passwordToggle = input.nextElementSibling;

    if (input.type === 'password') {
        input.type = 'text';
        passwordToggle.textContent = '👁️';
    } else {
        input.type = 'password';
        passwordToggle.textContent = '👁️';
    }
}

function validatePassword() {
    var senha = document.getElementById('senha').value;
    var confirmarSenha = document.getElementById('confirmar-senha').value;
    var senhaError = document.getElementById('senha-error');
    var confirmarSenhaError = document.getElementById('confirmar-senha-error');

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