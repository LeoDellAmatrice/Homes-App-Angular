import { Injectable } from '@angular/core';
import { Imovel } from './imovel';


@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private imoveisDB: Imovel[] =
  [
    {
      "id": 1,
      "url_foto": "1.jpg",
      "nome": "Sobrado Lindo",
      "cidade": "Saltinho",
      "estado": "Minas Gerais",
      "favorito": false,
      "tipoImovel": "casa",
      "latitude": "-19.9386",
      "longitude": "-44.0554",
      "adicionais": [
        {
          "chave": "Quartos disponíveis",
          "valor": "4"
        },
        {
          "chave": "Extras",
          "valor": "Piscina e Campo de Vôlei"
        },
        {
          "chave": "Banheiros",
          "valor": "2"
        },
        {
          "chave": "Garagem",
          "valor": "2 carros"
        },
        {
          "chave": "Área Construída",
          "valor": "250m²"
        },
        {
          "chave": "Churrasqueira",
          "valor": "Sim"
        },
        {
          "chave": "Jardim",
          "valor": "Sim"
        },
        {
          "chave": "Ano de Construção",
          "valor": "2015"
        }
      ],
      "aluguel": [
        {
          "chave": "aluguel mensal",
          "valor": 4500.00
        },
        {
          "chave": "aluguel anual",
          "valor": 54000.00
        },
        {
          "chave": "aluguel diário",
          "valor": 300.00
        }
      ]
    },
    {
      "id": 2,
      "url_foto": "2.jpg",
      "nome": "Kitnet Econômica",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "favorito": false,
      "tipoImovel": "apartamento",
      "latitude": "-22.7288",
      "longitude": "-47.6494",
      "adicionais": [
        {
          "chave": "Banheiro",
          "valor": "1"
        },
        {
          "chave": "Área Construída",
          "valor": "30m²"
        },
        {
          "chave": "Andar",
          "valor": "2º"
        },
        {
          "chave": "Mobília",
          "valor": "Parcialmente Mobiliado"
        },
        {
          "chave": "Vagas de Garagem",
          "valor": "1"
        },
        {
          "chave": "Condomínio",
          "valor": "Sim"
        },
        {
          "chave": "Academia",
          "valor": "Não"
        },
        {
          "chave": "Ano de Construção",
          "valor": "2010"
        }
      ],
      "aluguel": [
        {
          "chave": "aluguel mensal",
          "valor": 900.00
        },
        {
          "chave": "aluguel anual",
          "valor": 10800.00
        },
        {
          "chave": "aluguel diário",
          "valor": 60.00
        }
      ]
    },
    {
      "id": 3,
      "url_foto": "3.jpg",
      "nome": "Casarão na Floresta",
      "cidade": "Americana",
      "estado": "São Paulo",
      "favorito": false,
      "tipoImovel": "casa",
      "latitude": "-22.7377",
      "longitude": "-47.3331",
      "adicionais": [
        {
          "chave": "Quartos disponíveis",
          "valor": "10"
        },
        {
          "chave": "Quintal",
          "valor": "Muito Grande"
        },
        {
          "chave": "Banheiros",
          "valor": "5"
        },
        {
          "chave": "Garagem",
          "valor": "5 carros"
        },
        {
          "chave": "Área Construída",
          "valor": "500m²"
        },
        {
          "chave": "Piscina",
          "valor": "Sim"
        },
        {
          "chave": "Churrasqueira",
          "valor": "Sim"
        },
        {
          "chave": "Ano de Construção",
          "valor": "2005"
        }
      ],
      "aluguel": [
        {
          "chave": "aluguel mensal",
          "valor": 12000.00
        },
        {
          "chave": "aluguel anual",
          "valor": 144000.00
        },
        {
          "chave": "aluguel diário",
          "valor": 800.00
        }
      ]
    },
    {
      "id": 4,
      "url_foto": "4.jpg",
      "nome": "Casa 04",
      "cidade": "Nova Odessa",
      "estado": "São Paulo",
      "favorito": false,
      "tipoImovel": "casa",
      "latitude": "-22.7775",
      "longitude": "-47.2948",
      "adicionais": [
        {
          "chave": "Quartos disponíveis",
          "valor": "4"
        },
        {
          "chave": "Piscina",
          "valor": "Sim"
        },
        {
          "chave": "Banheiros",
          "valor": "3"
        },
        {
          "chave": "Garagem",
          "valor": "3 carros"
        },
        {
          "chave": "Área Construída",
          "valor": "300m²"
        },
        {
          "chave": "Jardim",
          "valor": "Sim"
        },
        {
          "chave": "Churrasqueira",
          "valor": "Sim"
        },
        {
          "chave": "Ano de Construção",
          "valor": "2012"
        }
      ],
      "aluguel": [
        {
          "chave": "aluguel mensal",
          "valor": 7000.00
        },
        {
          "chave": "aluguel anual",
          "valor": 84000.00
        },
        {
          "chave": "aluguel diário",
          "valor": 500.00
        }
      ]
    },
    {
      "id": 5,
      "url_foto": "5.jpg",
      "nome": "Casa 05",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "favorito": false,
      "tipoImovel": "casa",
      "latitude": "-22.7289",
      "longitude": "-47.6492",
      "adicionais": [
        {
          "chave": "Quartos disponíveis",
          "valor": "4"
        },
        {
          "chave": "Piscina",
          "valor": "Sim"
        },
        {
          "chave": "Banheiros",
          "valor": "2"
        },
        {
          "chave": "Garagem",
          "valor": "2 carros"
        },
        {
          "chave": "Área Construída",
          "valor": "280m²"
        },
        {
          "chave": "Jardim",
          "valor": "Sim"
        },
        {
          "chave": "Churrasqueira",
          "valor": "Sim"
        },
        {
          "chave": "Ano de Construção",
          "valor": "2013"
        }
      ],
      "aluguel": [
        {
          "chave": "aluguel mensal",
          "valor": 5000.00
        },
        {
          "chave": "aluguel anual",
          "valor": 60000.00
        },
        {
          "chave": "aluguel diário",
          "valor": 350.00
        }
      ]
    },
    {
      "id": 6,
      "url_foto": "6.jpg",
      "nome": "Casa 06",
      "cidade": "Cabreúva",
      "estado": "São Paulo",
      "favorito": false,
      "tipoImovel": "casa",
      "latitude": "-23.3054",
      "longitude": "-47.1327",
      "adicionais": [
        {
          "chave": "Quartos disponíveis",
          "valor": "4"
        },
        {
          "chave": "Piscina",
          "valor": "Sim"
        },
        {
          "chave": "Banheiros",
          "valor": "2"
        },
        {
          "chave": "Garagem",
          "valor": "2 carros"
        },
        {
          "chave": "Área Construída",
          "valor": "250m²"
        },
        {
          "chave": "Jardim",
          "valor": "Sim"
        },
        {
          "chave": "Churrasqueira",
          "valor": "Sim"
        },
        {
          "chave": "Ano de Construção",
          "valor": "2014"
        }
      ],
      "aluguel": [
        {
          "chave": "aluguel mensal",
          "valor": 6000.00
        },
        {
          "chave": "aluguel anual",
          "valor": 72000.00
        },
        {
          "chave": "aluguel diário",
          "valor": 400.00
        }
      ]
    },
    {
      "id": 7,
      "url_foto": "7.jpg",
      "nome": "Casa 07",
      "cidade": "Sumaré",
      "estado": "São Paulo",
      "favorito": false,
      "tipoImovel": "casa",
      "latitude": "-22.8212",
      "longitude": "-47.2664",
      "adicionais": [
        {
          "chave": "Quartos disponíveis",
          "valor": "3"
        },
        {
          "chave": "Piscina",
          "valor": "Não"
        },
        {
          "chave": "Banheiros",
          "valor": "2"
        },
        {
          "chave": "Garagem",
          "valor": "1 carro"
        },
        {
          "chave": "Área Construída",
          "valor": "180m²"
        },
        {
          "chave": "Jardim",
          "valor": "Sim"
        },
        {
          "chave": "Churrasqueira",
          "valor": "Sim"
        },
        {
          "chave": "Ano de Construção",
          "valor": "2011"
        }
      ],
      "aluguel": [
        {
          "chave": "aluguel mensal",
          "valor": 4000.00
        },
        {
          "chave": "aluguel anual",
          "valor": 48000.00
        },
        {
          "chave": "aluguel diário",
          "valor": 250.00
        }
      ]
    },
    {
      "id": 8,
      "url_foto": "8.jpg",
      "nome": "Casa 08",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "favorito": false,
      "tipoImovel": "casa",
      "latitude": "-22.7235",
      "longitude": "-47.6490",
      "adicionais": [
        {
          "chave": "Quartos disponíveis",
          "valor": "4"
        },
        {
          "chave": "Piscina",
          "valor": "Sim"
        },
        {
          "chave": "Banheiros",
          "valor": "2"
        },
        {
          "chave": "Garagem",
          "valor": "2 carros"
        },
        {
          "chave": "Área Construída",
          "valor": "300m²"
        },
        {
          "chave": "Jardim",
          "valor": "Sim"
        },
        {
          "chave": "Churrasqueira",
          "valor": "Sim"
        },
        {
          "chave": "Ano de Construção",
          "valor": "2014"
        }
      ],
      "aluguel": [
        {
          "chave": "aluguel mensal",
          "valor": 6500.00
        },
        {
          "chave": "aluguel anual",
          "valor": 78000.00
        },
        {
          "chave": "aluguel diário",
          "valor": 450.00
        }
      ]
    },
    {
      "id": 9,
      "url_foto": "9.jpg",
      "nome": "Casa 09",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "favorito": false,
      "tipoImovel": "apartamento",
      "latitude": "-22.7244",
      "longitude": "-47.6515",
      "adicionais": [
        {
          "chave": "Quartos disponíveis",
          "valor": "2"
        },
        {
          "chave": "Piscina",
          "valor": "Sim"
        },
        {
          "chave": "Banheiros",
          "valor": "1"
        },
        {
          "chave": "Garagem",
          "valor": "1 carro"
        },
        {
          "chave": "Área Construída",
          "valor": "90m²"
        },
        {
          "chave": "Jardim",
          "valor": "Não"
        },
        {
          "chave": "Churrasqueira",
          "valor": "Não"
        },
        {
          "chave": "Ano de Construção",
          "valor": "2017"
        }
      ],
      "aluguel": [
        {
          "chave": "aluguel mensal",
          "valor": 2500.00
        },
        {
          "chave": "aluguel anual",
          "valor": 30000.00
        },
        {
          "chave": "aluguel diário",
          "valor": 150.00
        }
      ]
    }
  ]  
  
  buscarTodosImoveis(): Imovel[] {
    return this.imoveisDB
  }

  buscarImovelPeloId(id: number): Imovel | undefined {
    let imovel;

    for (let i = 0; i < this.imoveisDB.length; i++) {
      imovel = this.imoveisDB[i];

      if (imovel.id == id) {
        break
      }
    }
    return imovel
  }

}
