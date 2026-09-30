/* =====================================================
   MENU HAMBÚRGUER
   ===================================================== */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");


if (menuToggle && menu) {

    menuToggle.addEventListener("click", function () {

        menu.classList.toggle("active");

    });

}


/* =====================================================
   MODAL
   ===================================================== */

const botoesModal = document.querySelectorAll(".abrir-modal");

const modal = document.querySelector("#modalProjeto");

const botoesFecharModal =
    document.querySelectorAll(".modal-fechar");


if (modal) {

    botoesModal.forEach(function (botao) {

        botao.addEventListener("click", function () {

            modal.classList.add("aberto");

            modal.setAttribute("aria-hidden", "false");

        });

    });


    botoesFecharModal.forEach(function (botao) {

        botao.addEventListener("click", function () {

            modal.classList.remove("aberto");

            modal.setAttribute("aria-hidden", "true");

        });

    });


    modal.addEventListener("click", function (evento) {

        if (evento.target === modal) {

            modal.classList.remove("aberto");

            modal.setAttribute("aria-hidden", "true");

        }

    });

}


/* =====================================================
   FORMULÁRIO
   ===================================================== */

const formulario =
    document.querySelector("#formCadastro");

const alerta =
    document.querySelector("#alertaCadastro");


if (formulario) {

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();


        if (formulario.checkValidity()) {

            alerta.hidden = false;

            alerta.textContent =
                "Cadastro realizado com sucesso!";

            formulario.reset();

            alerta.scrollIntoView({
                behavior: "smooth"
            });

        } else {

            formulario.reportValidity();

        }

    });

}

const campos = formulario.querySelectorAll("input, select, textarea");

campos.forEach(function(campo) {
    campo.addEventListener("input", function() {

        if (campo.checkValidity()) {
            campo.classList.add("campo-valido");
            campo.classList.remove("campo-invalido");
        } else {
            campo.classList.add("campo-invalido");
            campo.classList.remove("campo-valido");
        }
    });
});