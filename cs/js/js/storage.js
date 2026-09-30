export function buscarCadastros() {
    return JSON.parse(
        localStorage.getItem("cadastrosONG")
    ) || [];
}

export function salvarCadastros(cadastros) {
    localStorage.setItem(
        "cadastrosONG",
        JSON.stringify(cadastros)
    );
}