document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    function calcularExpressao() {
        try {
            display.value = eval(display.value) || ""; // Evita erros ao pressionar igual sem valor
        } catch {
            display.value = "Erro";
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            if (value === "clear") {
                display.value = "";
            } else if (value === "equals") {
                calcularExpressao();
            } else if (value === "decimal") {
                // Impede que mais de um ponto seja inserido
                if (!display.value.includes(".")) {
                    display.value += ".";
                }
            } else {
                display.value += value;
            }
        });
    });

    // Adicionando suporte ao teclado
    document.addEventListener("keydown", function (event) {
        if (/^[0-9+\-*/.]$/.test(event.key)) {
            display.value += event.key;
        } else if (event.key === "Enter") {
            calcularExpressao();
        } else if (event.key === "Backspace") {
            display.value = display.value.slice(0, -1);
        } else if (event.key === "Escape") {
            display.value = "";
        } else if (event.key === ".") {
            // Impede que mais de um ponto seja inserido com a tecla de atalho
            if (!display.value.includes(".")) {
                display.value += ".";
            }
        }
    });
});

// Adicionando a estrutura HTML e estilos CSS
document.body.innerHTML = `
    <div class="calculator">
        <input type="text" id="display" readonly>
        <div class="buttons">
            <button class="btn" data-value="7">7</button>
            <button class="btn" data-value="8">8</button>
            <button class="btn" data-value="9">9</button>
            <button class="btn" data-value="/">/</button>
            <button class="btn" data-value="4">4</button>
            <button class="btn" data-value="5">5</button>
            <button class="btn" data-value="6">6</button>
            <button class="btn" data-value="*">*</button>
            <button class="btn" data-value="1">1</button>
            <button class="btn" data-value="2">2</button>
            <button class="btn" data-value="3">3</button>
            <button class="btn" data-value="-">-</button>
            <button class="btn" data-value="0">0</button>
            <button class="btn" data-value="clear">C</button>
            <button class="btn" data-value="equals">=</button>
            <button class="btn" data-value="+">+</button>
            <button class="btn" data-value="decimal">.</button>
        </div>
    </div>
    <style>
        .calculator {
            width: 220px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            background-color: #f9f9f9;
        }
        #display {
            width: 100%;
            height: 40px;
            margin-bottom: 10px;
            font-size: 24px;
            text-align: right;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #fff;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .btn {
            width: 100%;
            height: 50px;
            font-size: 20px;
            background-color: #f1f1f1;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        .btn:hover {
            background-color: #ddd;
        }
        .btn:active {
            background-color: #ccc;
        }
    </style>
`;
