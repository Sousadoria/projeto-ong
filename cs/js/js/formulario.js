import { buscarCadastros, salvarCadastros } from "./storage.js";

const formulario = document.querySelector("#formCadastro");

if (formulario) {

    const campos = formulario.querySelectorAll(
        "input, select, textarea"
    );

    // Validação em tempo real
    campos.forEach(function (campo) {

        campo.addEventListener("input", function () {

            if (campo.checkValidity()) {
                campo.classList.add("campo-valido");
                campo.classList.remove("campo-invalido");
            } else {
                campo.classList.add("campo-invalido");
                campo.classList.remove("campo-valido");
            }

        });

    });

    // Envio do formulário
    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const cadastro = {
            nome: document.querySelector("#nome").value,
            email: document.querySelector("#email").value,
            nascimento: document.querySelector("#nascimento").value,
            cpf: document.querySelector("#cpf").value,
            telefone: document.querySelector("#telefone").value,
            endereco: document.querySelector("#endereco").value,
            cidade: document.querySelector("#cidade").value,
            estado: document.querySelector("#estado").value,
            area: document.querySelector("#area").value,
            mensagem: document.querySelector("#mensagem").value
        };

        const cadastros = buscarCadastros();

        cadastros.push(cadastro);

        salvarCadastros(cadastros);

        alert("Cadastro realizado com sucesso!");

        formulario.reset();

        campos.forEach(function (campo) {
            campo.classList.remove("campo-valido");
            campo.classList.remove("campo-invalido");
        });
    });
}