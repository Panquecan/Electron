function AtualizarCalendario() {
    const hoje = new Date();
    const dia = hoje.getDate();
    
    const mesNome = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    const mes = mesNome[hoje.getMonth()];    

    document.getElementById("dia").textContent = dia;
    document.getElementById("mes").textContent = mes;
}

AtualizarCalendario();