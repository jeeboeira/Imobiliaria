import { Component, inject } from '@angular/core';
import { Casalocalizacao } from '../casalocalizacao';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CasaServService } from '../casa-serv.service';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  standalone: true
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  casaServico = inject(CasaServService)
  casaLocalizacao: Casalocalizacao | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  
  constructor() {
    const casaLocalizacaoId = parseInt(this.route.snapshot.params['id'], 10);

    this.casaServico.getHousingLocationById(casaLocalizacaoId).subscribe(
      (casaLocalizacao) => {
       this.casaLocalizacao = casaLocalizacao;
       });
  }

  submitApplication() {
    this.casaServico.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
