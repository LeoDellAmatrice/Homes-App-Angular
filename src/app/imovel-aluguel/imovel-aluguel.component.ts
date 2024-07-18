import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imovel-aluguel',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './imovel-aluguel.component.html',
  styleUrl: './imovel-aluguel.component.css'
})
export class ImovelAluguelComponent {
  imovel: Imovel | undefined;

  constructor(
    private imvService: ImovelService,
    private route: ActivatedRoute,
    private rt: Router
  ){
    const id = this.route.snapshot.params['id'];
    this.imovel = this.imvService.buscarImovelPeloId(id);
  }

  voltardetalhes(){
    const url = `/detalhes/${this.imovel?.id}`
    this.rt.navigate([url]);
  }
}
