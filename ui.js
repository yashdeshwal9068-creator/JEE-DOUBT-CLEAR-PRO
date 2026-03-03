function loadUI() {
    renderSubject('math', 'math-list');
    renderSubject('physics', 'phys-list');
    renderSubject('chemistry', 'chem-list');
}

function renderSubject(subj, listId) {
    const list = document.getElementById(listId);
    FormulaDB[subj].forEach(f => {
        const btn = document.createElement('button');
        btn.className = 'formula-btn';
        btn.innerHTML = `<strong>${f.name}</strong><br><small>${f.eqn}</small>`;
        btn.onclick = () => openReactor(f);
        list.appendChild(btn);
    });
}

function openReactor(f) {
    window.currentF = f;
    document.getElementById('reactor-modal').style.display = 'block';
    document.getElementById('reactor-title').innerText = f.name;
    document.getElementById('formula-display').innerText = f.eqn;
    
    const inputDiv = document.getElementById('reactor-inputs');
    inputDiv.innerHTML = "";
    f.vars.forEach(v => {
        inputDiv.innerHTML += `<div class="in-row"><label>${v}: </label><input type="text" id="in-${v}" placeholder="Solve?"></div>`;
    });
}

function closeReactor() { document.getElementById('reactor-modal').style.display = 'none'; }
window.onload = loadUI;
