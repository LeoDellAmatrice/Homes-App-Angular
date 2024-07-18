import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imovel-financiamento',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './imovel-financiamento.component.html',
  styleUrl: './imovel-financiamento.component.css'
})
export class ImovelFinanciamentoComponent {
  imovel: Imovel | undefined;
  valorEntrada = 0;
  anos = 0;
  valorparcela = 0;

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

  calcularFinanciamento() {
    if (this.imovel){
      if (this.valorEntrada <= 0 || this.valorEntrada > this.imovel.valor){
        alert("O valor da entrada não foi preenchido corretamente")
      }
      if (this.anos <= 0){
        alert("O número de anos não foi preenchido corretamente")
        return
      }
        const precoImovel = this.imovel?.valor - this.valorEntrada
        this.valorparcela = precoImovel / (this.anos * 12)
    }
  }
}