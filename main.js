// main.js
import { series } from './Scripts/data.js';

function fillSeriesTable() {
    const seriesTable = document.getElementById('seriesTable');
    let totalSeasons = 0;
    series.forEach(serie => {
        const row = document.createElement('tr');

        row.id = `serie-${serie.id}`; 
        const idCell = document.createElement('td');
        idCell.textContent = serie.id;
        row.appendChild(idCell);
        const nameCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = '#'; // Enlace vacío por ahora
        link.textContent = serie.name;
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            showSerieDetails(serie.id);
        });
        nameCell.appendChild(link); // Agregar el enlace al texto
        row.appendChild(nameCell);

        const channelCell = document.createElement('td');
        channelCell.textContent = serie.channel;
        row.appendChild(channelCell);
        
        const seasonsCell = document.createElement('td');
        seasonsCell.textContent = serie.seasons;
        row.appendChild(seasonsCell);
        
        seriesTable.appendChild(row);
        totalSeasons += serie.seasons;
    });

    const seasonAverage = (totalSeasons / series.length).toFixed(0);
    const seasonsAverageText = document.getElementById('seasonsAverageText');
    seasonsAverageText.textContent = `Seasons average: ${seasonAverage}`;
}



function showSerieDetails(serieId) {
    const selectedSerieId = serieId
    const selectedSerie = series.find(serie => serie.id === selectedSerieId);
    if (selectedSerie) {
        const details = document.getElementById('details');
        details.innerHTML = `
            <div class="card">
                <img src="${selectedSerie.image}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${selectedSerie.name}</h5>
                    <p class="card-text">${selectedSerie.description}</p>
                    <a href="${selectedSerie.link}" target="_blank" class="card-link">${selectedSerie.link}</a>
                </div>
            </div>
        `;
    }
}


document.addEventListener('DOMContentLoaded', fillSeriesTable);
