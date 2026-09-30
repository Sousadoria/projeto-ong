const botoesModal = document.querySelectorAll(".abrir-modal");
const modal = document.querySelector("#modalProjeto");
const botoesFecharModal = document.querySelectorAll(".modal-fechar");

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