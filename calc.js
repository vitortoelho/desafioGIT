// Estruturando a calculadora
// Passo 1: Criar a estrutura básica do HTML, CSS e JavaScript

// Criar um listener para os botões da calculadora
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            if (value === "clear") {
                display.value = "";
            } else if (value === "equals") {
                try {
                    display.value = eval(display.value); // Nota: Usar eval não é seguro para produção
                } catch {
                    display.value = "Erro";
                }
            } else {
                display.value += value;
            }
        });
    });
});
