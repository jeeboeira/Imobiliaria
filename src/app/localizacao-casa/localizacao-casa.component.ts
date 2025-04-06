import { Component, Input} from '@angular/core';
import { Casalocalizacao } from '../casalocalizacao';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-localizacao-casa',
  imports: [RouterLink],
  templateUrl: './localizacao-casa.component.html',
  styleUrl: './localizacao-casa.component.css',
})
export class LocalizacaoCasaComponent {
  @Input() casalocalizacao!: Casalocalizacao;
}
