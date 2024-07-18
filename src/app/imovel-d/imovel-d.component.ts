import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-imovel-d',
  standalone: true,
  imports: [],
  templateUrl: './imovel-d.component.html',
  styleUrl: './imovel-d.component.css'
})
export class ImovelDComponent {
  imovel: Imovel | undefined;

  constructor(
    private imvService: ImovelService,
    private route: ActivatedRoute,
    private rt: Router
  ){
    const id = this.route.snapshot.params['id'];
    this.imovel = this.imvService.buscarImovelPeloId(id);
  }

  paginaAlugar(){  
    const url = `/detalhes/${this.imovel?.id}/alugar`
    this.rt.navigate([url]);
  }

  paginaComprar(){
    alert('Pagina');
  }

  paginaFinanciamento(){
    alert('Pagina');
  }
}
