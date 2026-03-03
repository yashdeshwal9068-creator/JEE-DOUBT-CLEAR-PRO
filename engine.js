function igniteCalculation() {
    const f = window.currentF;
    let scope = {};
    let target = null;

    f.vars.forEach(v => {
        const val = document.getElementById(`in-${v}`).value;
        if (val === "" || val === "?") target = v;
        else scope[v] = parseFloat(val);
    });

    try {
        // Evaluate the expression with provided variables
        let result = math.evaluate(f.eqn, scope);
        document.getElementById('reactor-output').innerHTML = `
            <div class="success-msg">OUTPUT [${target || 'Result'}]: ${result.toFixed(6)}</div>
        `;
    } catch (e) {
        document.getElementById('reactor-output').innerHTML = `<span style="color:red">Engine Error: Check Values</span>`;
    }
}

