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
        link.href = `#serie-${serie.id}`; 
        link.textContent = serie.name;
        link.addEventListener('click', () => showSerieDetails(serie.id)); 
        nameCell.appendChild(link);
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
                </div>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', fillSeriesTable);
