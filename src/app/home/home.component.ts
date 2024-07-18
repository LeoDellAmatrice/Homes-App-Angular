import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  imoveisDB: Imovel[] = []
  Filtroapt = false
  Filtrocasa = false
  botaoapt = "button"
  botaocasa = "button"


  constructor(private imovelService: ImovelService) {
    this.imoveisDB = this.imovelService.buscarTodosImoveis()
  }

  removerAcentos(str: String) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  favoritar(imovel: Imovel) {

    if (imovel.favorito == false) {
      imovel.favorito = true
      const audio = new Audio("favsom.mp3")
      audio.play()
    } else {
      imovel.favorito = false
    }
  }

  abrirMapa(imovel: Imovel) {
    window.open(`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${imovel.latitude},${imovel.longitude}`);
  }

  MostrarFavoritos() {
    this.Filtrocasa = false
    this.Filtroapt = false
    this.botaocasa = "button"
    this.botaoapt = "button"
    const listaFiltrada: Imovel[] = []

    for (let i = 0; i < this.imoveisDB.length; i++) {
      const imovel = this.imoveisDB[i]

      if (imovel.favorito == true) {
        listaFiltrada.push(imovel)
      }
    }
    this.imoveisDB = listaFiltrada
  }

  MostrarTodos() {
    this.Filtrocasa = false
    this.Filtroapt = false
    this.botaocasa = "button"
    this.botaoapt = "button"
    this.imoveisDB = this.imovelService.buscarTodosImoveis()
  }

  filtrocasa() {
    const listaFiltrada: Imovel[] = []
    this.imoveisDB = this.imovelService.buscarTodosImoveis()

    if (this.Filtrocasa == false) {
      this.Filtrocasa = true
      this.Filtroapt = false
      this.botaocasa = "button2"
      this.botaoapt = "button"
      for (let i = 0; i < this.imoveisDB.length; i++) {
        const imovel = this.imoveisDB[i]

        if (imovel.tipoImovel == "casa") {
          listaFiltrada.push(imovel)
        }
      }
      this.imoveisDB = listaFiltrada
    } else if (this.Filtrocasa == true) {
      this.Filtrocasa = false
      this.Filtroapt = false
      this.botaocasa = "button"
      this.botaoapt = "button"
      this.imoveisDB = this.imovelService.buscarTodosImoveis()
    }
  }

  filtroapt() {
    const listaFiltrada: Imovel[] = []
    this.imoveisDB = this.imovelService.buscarTodosImoveis()

    if (this.Filtroapt == false) {
      this.Filtroapt = true
      this.Filtrocasa = false
      this.botaoapt = "button2"
      this.botaocasa = "button"
      for (let i = 0; i < this.imoveisDB.length; i++) {
        const imovel = this.imoveisDB[i]

        if (imovel.tipoImovel == "apartamento") {
          listaFiltrada.push(imovel)
        }
      }
      this.imoveisDB = listaFiltrada
    } else if (this.Filtroapt == true) {
      this.Filtrocasa = false
      this.Filtroapt = false
      this.botaocasa = "button"
      this.botaoapt = "button"
      this.imoveisDB = this.imovelService.buscarTodosImoveis()
    }
  }

  listarImoveisComFiltro(texto: String) {

    this.imoveisDB = this.imovelService.buscarTodosImoveis()
    
    const imoveisFiltrados: Imovel[] = []

    for (let i = 0; i < this.imoveisDB.length; i++) {
      const imovel = this.imoveisDB[i]

      const textoM = this.removerAcentos(texto.toUpperCase())
      const cidadeImovelM = this.removerAcentos(imovel.cidade.toUpperCase())
      const estadoImovelM = this.removerAcentos(imovel.estado.toUpperCase())

      if (cidadeImovelM.includes(textoM) ||
        estadoImovelM.includes(textoM)) {

        imoveisFiltrados.push(imovel)
      }
    }
    this.imoveisDB = imoveisFiltrados
  }
}