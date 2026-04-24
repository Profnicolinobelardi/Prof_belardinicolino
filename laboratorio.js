// DATABASE ESERCIZI LABORATORIO
const eserciziLab = [
  {
    titolo: "Eq. Esponenziale Semplice",
    guida_eq: `2^x = 16`,
    guida_steps: [
      `<b>Trasforma nella stessa base:</b> Sappiamo che 16 è uguale a \\(2^4\\).`,
      `<b>Riscrivi:</b> \\(2^x = 2^4\\)`,
      `<b>Uguaglia gli esponenti:</b> \\(x = 4\\)`
    ],
    pratica_eq: `3^x = 81`,
    pratica_hints: [
      `<b>Aiuto 1:</b> Devi scrivere l'81 come una potenza di 3. Moltiplica 3 per se stesso... quante volte?`,
      `<b>Aiuto 2:</b> \\(3 \\cdot 3 = 9\\), \\(9 \\cdot 3 = 27\\), \\(27 \\cdot 3 = 81\\). Quindi 81 è \\(3^4\\).`,
      `<b>Aiuto 3:</b> Riscrivi l'equazione: \\(3^x = 3^4\\)`,
      `<b>Fase Finale:</b> Le basi sono uguali (3), quindi puoi toglierle e uguagliare gli esponenti.`
    ],
    soluzione: `\\(x = 4\\)`
  },
  {
    titolo: "Eq. Esponenziale con Somma",
    guida_eq: `3^{x+1} = 27`,
    guida_steps: [
      `<b>Trasforma nella stessa base:</b> Sappiamo che 27 è \\(3^3\\).`,
      `<b>Riscrivi:</b> \\(3^{x+1} = 3^3\\)`,
      `<b>Uguaglia gli esponenti:</b> \\(x + 1 = 3\\)`,
      `<b>Risolvi:</b> Sposta l'1 a destra. \\(x = 3 - 1 \\implies x = 2\\)`
    ],
    pratica_eq: `2^{x+2} = 32`,
    pratica_hints: [
      `<b>Aiuto 1:</b> Riscrivi il 32 come potenza in base 2.`,
      `<b>Aiuto 2:</b> \\(2^5 = 32\\).`,
      `<b>Aiuto 3:</b> Sostituisci: \\(2^{x+2} = 2^5\\).`,
      `<b>Fase Finale:</b> Uguaglia gli esponenti: \\(x + 2 = 5\\). Risolvi questa equazioncina!`
    ],
    soluzione: `\\(x = 3\\)`
  },
  {
    titolo: "Eq. Esponenziale = 1",
    guida_eq: `5^{2x} = 1`,
    guida_steps: [
      `<b>Trasforma nella stessa base:</b> Qualsiasi numero elevato a 0 fa 1. Quindi \\(1 = 5^0\\).`,
      `<b>Riscrivi:</b> \\(5^{2x} = 5^0\\)`,
      `<b>Uguaglia gli esponenti:</b> \\(2x = 0 \\implies x = 0\\)`
    ],
    pratica_eq: `7^{3x} = 1`,
    pratica_hints: [
      `<b>Aiuto 1:</b> C'è un 1 a destra. Guarda l'Esempio Guida: usa l'esponente 0!`,
      `<b>Aiuto 2:</b> Dato che a sinistra c'è base 7, scrivi 1 come \\(7^0\\).`,
      `<b>Aiuto 3:</b> L'equazione diventa \\(7^{3x} = 7^0\\).`,
      `<b>Fase Finale:</b> Uguaglia gli esponenti: \\(3x = 0\\). Se dividi per 3... cosa ottieni?`
    ],
    soluzione: `\\(x = 0\\)`
  },
  {
    titolo: "Eq. Cambio Entrambe le Basi",
    guida_eq: `4^x = 8`,
    guida_steps: [
      `<b>Trasforma nella stessa base:</b> Trasformiamo entrambe le basi in base 2. Sappiamo che \\(4 = 2^2\\) e \\(8 = 2^3\\).`,
      `<b>Riscrivi:</b> \\((2^2)^x = 2^3 \\implies 2^{2x} = 2^3\\)`,
      `<b>Uguaglia gli esponenti:</b> \\(2x = 3 \\implies x = \\frac{3}{2}\\)`
    ],
    pratica_eq: `9^x = 27`,
    pratica_hints: [
      `<b>Aiuto 1:</b> 9 non può diventare facilmente 27, ma sia il 9 che il 27 sono potenze di uno stesso numero (il 3).`,
      `<b>Aiuto 2:</b> Riscrivi \\(9 = 3^2\\) e \\(27 = 3^3\\).`,
      `<b>Aiuto 3:</b> Sostituisci: \\((3^2)^x = 3^3\\), che diventa \\(3^{2x} = 3^3\\).`,
      `<b>Fase Finale:</b> Uguaglia gli esponenti e trova la \\(x\\).`
    ],
    soluzione: `\\(x = \\frac{3}{2}\\)`
  },
  {
    titolo: "Disequazione Base > 1",
    guida_eq: `2^x > 8`,
    guida_steps: [
      `<b>Risoluzione:</b> \\(2^x > 2^3\\). Poiché la base è 2 (maggiore di 1), il verso NON CAMBIA.`,
      `Quindi: \\(x > 3\\).`,
      `<b>Intervallo:</b> L'intervallo è \\((3, +\\infty)\\).`
    ],
    pratica_eq: `3^x > 27`,
    pratica_hints: [
      `<b>Aiuto 1:</b> Riscrivi 27 in base 3.`,
      `<b>Aiuto 2:</b> Diventa \\(3^x > 3^3\\).`,
      `<b>Aiuto 3:</b> Controlla la base: il 3 è maggiore di 1, quindi togli le basi senza cambiare il verso (il > rimane >).`,
      `<b>Fase Finale:</b> Scrivi il risultato finale.`
    ],
    soluzione: `\\(x > 3\\)`
  },
  {
    titolo: "Disequazione Base < 1",
    guida_eq: `\\left(\\frac{1}{2}\\right)^x \\ge \\frac{1}{4}`,
    guida_steps: [
      `<b>Risoluzione:</b> Sappiamo che \\(1/4 = (1/2)^2\\). Quindi: \\((1/2)^x \\ge (1/2)^2\\).`,
      `Poiché la base è 1/2 (minore di 1), il verso <b>CAMBIA</b>.`,
      `Da \\(\\ge\\) passa a \\(\\le\\). Quindi: \\(x \\le 2\\).`,
      `<b>Intervallo:</b> \\((-\\infty, 2]\\).`
    ],
    pratica_eq: `\\left(\\frac{1}{3}\\right)^x \\ge \\frac{1}{9}`,
    pratica_hints: [
      `<b>Aiuto 1:</b> Riscrivi 1/9 come potenza di 1/3.`,
      `<b>Aiuto 2:</b> Dato che \\(3^2 = 9\\), \\(1/9 = (1/3)^2\\). Sostituisci: \\((1/3)^x \\ge (1/3)^2\\).`,
      `<b>Aiuto 3:</b> ATTENZIONE! La base è 1/3 (tra 0 e 1). Devi invertire il verso della disequazione!`,
      `<b>Fase Finale:</b> Riscrivi la disequazione girando la "bocca del coccodrillo".`
    ],
    soluzione: `\\(x \\le 2\\)`
  },
  {
    titolo: "Proprietà Logaritmi (Somma)",
    guida_eq: `\\log_2(3) + \\log_2(5)`,
    guida_steps: [
      `<b>Regola:</b> La somma di due logaritmi con la stessa base si unisce in un unico logaritmo il cui argomento è il PRODOTTO.`,
      `\\(\\log_a(x) + \\log_a(y) = \\log_a(x \\cdot y)\\)`,
      `<b>Soluzione:</b> \\(\\log_2(3 \\cdot 5) = \\log_2(15)\\)`
    ],
    pratica_eq: `\\log_3(4) + \\log_3(7)`,
    pratica_hints: [
      `<b>Aiuto 1:</b> Guarda la regola nell'Esempio Guida. Il "più" (+) fuori dal logaritmo diventa un "per" (\\(\\cdot\\)) dentro l'argomento.`,
      `<b>Aiuto 2:</b> Unisci i due logaritmi: \\(\\log_3(4 \\cdot 7)\\).`,
      `<b>Fase Finale:</b> Svolgi la moltiplicazione \\(4 \\cdot 7\\) e scrivi il logaritmo finale.`
    ],
    soluzione: `\\(\\log_3(28)\\)`
  },
  {
    titolo: "Equazione Logaritmica",
    guida_eq: `\\log_2(2x - 3) = \\log_2 2`,
    guida_steps: [
      `<b>1. C.E.:</b> Argomento > 0 \\(\\implies 2x - 3 > 0 \\implies x > 3/2\\).`,
      `<b>2. Risolvo:</b> Stessa base, tolgo i logaritmi: \\(2x - 3 = 2\\).`,
      `<b>3. Calcolo:</b> \\(2x = 5 \\implies x = 5/2\\).`,
      `<b>4. Verifica:</b> Poiché 5/2 > 3/2, la soluzione è accettabile.`
    ],
    pratica_eq: `\\log_3(2x - 1) = \\log_3 5`,
    pratica_hints: [
      `<b>Aiuto 1 (C.E.):</b> Poni l'argomento con la \\(x\\) maggiore di zero. \\(2x - 1 > 0 \\implies x > 1/2\\).`,
      `<b>Aiuto 2 (Risoluzione):</b> Hai la stessa base (3) sia a destra che a sinistra. Togli i logaritmi e scrivi: \\(2x - 1 = 5\\).`,
      `<b>Aiuto 3 (Calcolo):</b> Sposta il -1 a destra (cambia segno) e ottieni \\(2x = 6\\).`,
      `<b>Fase Finale:</b> Trova la \\(x\\) dividendo per 2 e controlla se è più grande della C.E. (1/2).`
    ],
    soluzione: `\\(x = 3\\) (Accettabile)`
  }
];

let indiceCorrente = 0;
let hintTracciati = 0;

function initLab() {
  const elDots = document.getElementById("dots-container");
  if(!elDots) return;
  elDots.innerHTML = "";
  for(let i=0; i<eserciziLab.length; i++) {
    let d = document.createElement("div");
    d.className = "dot";
    d.id = "dot-" + i;
    d.title = eserciziLab[i].titolo;
    d.onclick = () => { 
      if(document.getElementById("soluzione-box").style.display==="block" || i < indiceCorrente) { 
        cambiaEsercizioDiretto(i); 
      } 
    };
    elDots.appendChild(d);
  }
  caricaEsercizio(0);
}

function renderMathLab(element) {
  if(typeof renderMathInElement !== 'undefined') {
    renderMathInElement(element, {
      delimiters: [
        {left: '$$', right: '$$', display: true}, 
        {left: '$', right: '$', display: false}, 
        {left: '\\(', right: '\\)', display: false}, 
        {left: '\\[', right: '\\]', display: true}
      ]
    });
  }
}

function caricaEsercizio(indice) {
  if(indice < 0 || indice >= eserciziLab.length) return;
  indiceCorrente = indice;
  hintTracciati = 0;
  
  const es = eserciziLab[indice];
  
  const elGuidaEq = document.getElementById("guida-eq");
  const elGuidaSteps = document.getElementById("guida-steps");
  const elPraticaEq = document.getElementById("pratica-eq");
  const elPraticaHints = document.getElementById("pratica-hints");
  const elBtnHint = document.getElementById("btn-hint");
  const elSolBox = document.getElementById("soluzione-box");
  const elSolText = document.getElementById("soluzione-text");
  const elBtnPrev = document.getElementById("btn-prev");
  const elBtnNext = document.getElementById("btn-next");

  elGuidaEq.innerHTML = "\\[" + es.guida_eq + "\\]";
  elGuidaSteps.innerHTML = "";
  es.guida_steps.forEach(st => {
    let d = document.createElement("div");
    d.className = "step-item"; d.innerHTML = st;
    elGuidaSteps.appendChild(d);
  });

  elPraticaEq.innerHTML = "\\[" + es.pratica_eq + "\\]";
  elPraticaHints.innerHTML = "";
  es.pratica_hints.forEach((st, i) => {
    let d = document.createElement("div");
    d.className = "step-item"; d.innerHTML = st;
    d.id = "hint-" + i;
    elPraticaHints.appendChild(d);
  });

  elSolBox.style.display = "none";
  elBtnHint.style.display = "block";
  elBtnHint.disabled = false;
  elSolText.innerHTML = es.soluzione;
  
  elBtnPrev.disabled = (indiceCorrente === 0);
  elBtnNext.disabled = (indiceCorrente === eserciziLab.length - 1);
  
  document.querySelectorAll(".dot").forEach(d => d.classList.remove("active"));
  document.getElementById("dot-"+indiceCorrente).classList.add("active");

  setTimeout(() => renderMathLab(document.getElementById("app-container")), 50);
}

function mostraAiuto() {
  const es = eserciziLab[indiceCorrente];
  const elBtnHint = document.getElementById("btn-hint");
  const elSolBox = document.getElementById("soluzione-box");

  if(hintTracciati < es.pratica_hints.length) {
    document.getElementById("hint-" + hintTracciati).style.display = "block";
    hintTracciati++;
    
    if(hintTracciati === es.pratica_hints.length) {
      elBtnHint.innerHTML = "🎉 Mostra Soluzione Finale";
      elBtnHint.style.borderColor = "#22c55e";
      elBtnHint.style.color = "#166534";
      elBtnHint.style.background = "#dcfce7";
    }
  } else {
    elBtnHint.style.display = "none"; 
    elSolBox.style.display = "block"; 
    elBtnHint.innerHTML = "💡 Mostra un suggerimento";
    elBtnHint.style.borderColor = "";
    elBtnHint.style.color = "";
    elBtnHint.style.background = "";
  }
}

function cambiaEsercizio(dir) {
  caricaEsercizio(indiceCorrente + dir);
  const elBtnHint = document.getElementById("btn-hint");
  elBtnHint.innerHTML = "💡 Mostra un suggerimento";
  elBtnHint.style.borderColor = "";
  elBtnHint.style.color = "";
  elBtnHint.style.background = "";
}

function cambiaEsercizioDiretto(idx) {
  caricaEsercizio(idx);
  const elBtnHint = document.getElementById("btn-hint");
  elBtnHint.innerHTML = "💡 Mostra un suggerimento";
  elBtnHint.style.borderColor = "";
  elBtnHint.style.color = "";
  elBtnHint.style.background = "";
}

window.addEventListener('load', () => {
  initLab();
});
