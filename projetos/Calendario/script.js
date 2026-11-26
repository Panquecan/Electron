function AtualizarCalendario() {
    const hoje = new Date();
    const dia = hoje.getDate();
    
    const mesNome = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const mes = mesNome[hoje.getMonth()];    

    const horas = String(hoje.getHours()).padStart(2, '0');
    const minutos = String(hoje.getMinutes()).padStart(2, '0');
    const segundos = String(hoje.getSeconds()).padStart(2, '0');
    const horarioAtual = `${horas}:${minutos}:${segundos}`;

    document.getElementById("dia").textContent = dia;
    document.getElementById("mes").textContent = mes;
    document.getElementById("horario").textContent = horarioAtual;
}

setInterval(AtualizarCalendario, 1000);
AtualizarCalendario();