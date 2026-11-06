//Cole este código no início do seu arquivo script.js. Repare que usamos os colchetes [] para criar uma lista e chaves {} para colocar os dados de cada festa:
//1. Criamos a nossa lista de eventos
const meusShows = [
    { 
        data: "06/11",
        descricao: "Canal Aquidauana DJs apresenta: DJ Cesar no Vinil às 20:00h "
    },
    {
        data: "25/11",
        descricao: "Canal Planet Mix apresenta: DJ Cesar no Vinil às 20:00h"
    },
    {
        data: "05/12",
        descricao: "Canal 80FLASHBACK 90 apresenta: 1 Ano de transmissão às 17:00h"
    }
];

//Logo abaixo da lista de shows, cole este motor lógico que vai ler a lista e construir as tags para você:
// 2. Criamos uma variável vazia para acumular o código das linhas
let htmlAcumulado = "";

// 3. Passamos por cada show da lista construindo o HTML dinamicamente
meusShows.forEach(function(show) {
        htmlAcumulado += `
            <tr>
                <td class="data-evento">${show.data}</td>
                <td>${show.descricao}</td>
            </tr>
        `;
});
 
// 4. Procuramos a tabela pelo ID e injetamos o resultado final nela
document.getElementById('lista-agenda').innerHTML = htmlAcumulado
