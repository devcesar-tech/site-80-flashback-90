//Cole este código no início do seu arquivo script.js. Repare que usamos os colchetes [] para criar uma lista e chaves {} para colocar os dados de cada festa:
//1. Criamos a nossa lista de eventos
const meusShows = [
    { 
        data: "24/10",
        descricao: "Night Club House apresenta: Noite do Neon em Anastácio-MS às 22:00h"
    },
    {
        data: "31/10",
        descricao: "Arena Club apresenta: House Fest em Aquidauana-MS às 22;00h"
    },
    {
        data: "05/12",
        descricao: "Club FlashDance apresenta: Noite FlashMix em Campo Grande-MS às 22:00h"
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

