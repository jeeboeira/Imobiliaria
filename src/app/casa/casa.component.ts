import { Component, inject } from '@angular/core';
import { LocalizacaoCasaComponent } from '../localizacao-casa/localizacao-casa.component';
import { Casalocalizacao } from '../casalocalizacao';
import { CasaServService } from '../casa-serv.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-casa',
  imports: [CommonModule, LocalizacaoCasaComponent, FormsModule],
  templateUrl: './casa.component.html',
  styleUrl: './casa.component.css',
  standalone: true
})
export class CasaComponent {

  filtro: string = '';

  casalocalizacaoLista: Casalocalizacao[] = [];
  filteredLocationList: Casalocalizacao[] = [];

  casaServico: CasaServService = inject(CasaServService);

  constructor() {
    this.casaServico.getAllHousingLocations().subscribe({
      next: (lista) => {
        this.casalocalizacaoLista = lista;
        this.filteredLocationList = lista;
      },
      error: (err) => {
        console.error('❌ Erro ao buscar dados com HttpClient:', err);
      }
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.casalocalizacaoLista;
      return;
    }
    this.filteredLocationList = this.casalocalizacaoLista.filter((loc) =>
      loc.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
