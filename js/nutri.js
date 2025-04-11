// IMC //
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');
  
    if (!peso || !altura || altura <= 0) {
      resultadoDiv.innerHTML = "Por favor, preencha os campos corretamente.";
      return;
    }
  
    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    let classificacao = "";
  
    if (imc < 18.5) {
      classificacao = "Magreza";
    } else if (imc < 24.9) {
      classificacao = "Normal";
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
      classificacao = "Obesidade Grau 1";
    } else if (imc < 39.9) {
      classificacao = "Obesidade Grau 2";
    } else {
      classificacao = "Obesidade Grau 3";
    }
  
    resultadoDiv.innerHTML = `
      <strong>Seu IMC:</strong> ${imcFormatado}<br>
      <strong>Classificação:</strong> ${classificacao}
    `;
  }

  

  function calcularIMC() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');
  
    if (!nome || !idade || !sexo || !peso || !altura || altura <= 0) {
      resultadoDiv.innerHTML = "Por favor, preencha todos os campos corretamente.";
      return;
    }
  
    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
  
    // Simulação da classificação com base em percentis:
    let classificacao = "";
  
    if (imc < 14) {
      classificacao = "Abaixo do peso (Percentil < 3)";
    } else if (imc >= 14 && imc <= 17) {
      classificacao = "Peso normal (Percentil 3-85)";
    } else if (imc > 17 && imc <= 19) {
      classificacao = "Sobrepeso (Percentil 85-97)";
    } else {
      classificacao = "Obesidade (Percentil > 97)";
    }
  
    resultadoDiv.innerHTML = `
      <strong>Nome:</strong> ${nome}<br>
      <strong>Idade:</strong> ${idade} anos<br>
      <strong>Sexo:</strong> ${sexo}<br><br>
      <strong>IMC:</strong> ${imcFormatado}<br>
      <strong>Classificação:</strong> ${classificacao}
    `;
  }
//
//
//







// TMB //
function mostrarFormulario(tipo) {
    document.getElementById("form-adulto").classList.remove("ativo");
    document.getElementById("form-crianca").classList.remove("ativo");
  
    if (tipo === "adulto") {
      document.getElementById("form-adulto").classList.add("ativo");
    } else {
      document.getElementById("form-crianca").classList.add("ativo");
    }
  }
  
  function calcularTMBAdulto() {
    const idade = parseInt(document.getElementById("idadeAdulto").value);
    const sexo = document.getElementById("sexoAdulto").value;
    const peso = parseFloat(document.getElementById("pesoAdulto").value);
    const altura = parseFloat(document.getElementById("alturaAdulto").value);
    const resultado = document.getElementById("resultadoAdulto");
  
    if (!idade || !peso || !altura || !sexo) {
      resultado.innerHTML = "Preencha todos os campos corretamente.";
      return;
    }
  
    let tmb = 0;
  
    if (sexo === "masculino") {
      tmb = 66.5 + (13.75 * peso) + (5.003 * altura) - (6.755 * idade);
    } else {
      tmb = 655.1 + (9.563 * peso) + (1.850 * altura) - (4.676 * idade);
    }
  
    resultado.innerHTML = `TMB estimada: <strong>${tmb.toFixed(2)} kcal/dia</strong>`;
  }
  
  function calcularTMBCrianca() {
    const idade = parseInt(document.getElementById("idadeCrianca").value);
    const sexo = document.getElementById("sexoCrianca").value;
    const peso = parseFloat(document.getElementById("pesoCrianca").value);
    const resultado = document.getElementById("resultadoCrianca");
  
    if (!idade || !peso || !sexo) {
      resultado.innerHTML = "Preencha todos os campos corretamente.";
      return;
    }
  
    let tmb = 0;
  
    if (sexo === "masculino") {
      tmb = (22.7 * peso) + 495;
    } else {
      tmb = (22.5 * peso) + 499;
    }
  
    resultado.innerHTML = `TMB estimada: <strong>${tmb.toFixed(2)} kcal/dia</strong>`;
  }
//////





// Peso Ideal //

function mostrarFormulario(tipo) {
    document.getElementById('form-adulto').style.display = tipo === 'adulto' ? 'block' : 'none';
    document.getElementById('form-crianca').style.display = tipo === 'crianca' ? 'block' : 'none';
    document.getElementById('resultadoPI').textContent = ''; // limpa resultado
  }

  function calcularPesoIdealAdulto(event) {
    event.preventDefault();
    const altura = parseFloat(document.getElementById('alturaAdulto').value);
    const sexo = document.getElementById('sexoAdulto').value;

    let pesoIdeal;
    if (sexo === 'masculino') {
      pesoIdeal = 52 + 0.75 * (altura - 152.4);
    } else {
      pesoIdeal = 49 + 0.67 * (altura - 152.4);
    }

    document.getElementById('resultadoPI').textContent = `Peso ideal aproximado: ${pesoIdeal.toFixed(1)} kg`;
  }

  function calcularPesoIdealCrianca(event) {
    event.preventDefault();
    const idade = parseInt(document.getElementById('idadeCrianca').value);
    const altura = parseFloat(document.getElementById('alturaCrianca').value);

    // Fórmula estimada genérica (baseada nas faixas etárias)
    const pesoIdeal = (altura - 100 + (idade / 10)) * 0.9;

    document.getElementById('resultadoPI').textContent = `Peso ideal estimado: ${pesoIdeal.toFixed(1)} kg`;
  }

