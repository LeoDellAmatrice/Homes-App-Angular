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
      "valor": 1200000,
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
          "chave": "aluguel semanal",
          "valor": 1200.00
        },
        {
          "chave": "aluguel trimestral",
          "valor": 12000.00
        },
        {
          "chave": "aluguel semestral",
          "valor": 24000.00
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
        "valor": 150000,
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
            "chave": "aluguel semanal",
            "valor": 250.00
          },
          {
            "chave": "aluguel trimestral",
            "valor": 2500.00
          },
          {
            "chave": "aluguel semestral",
            "valor": 5000.00
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
        "valor": 2500000,
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
            "chave": "aluguel semanal",
            "valor": 3500.00
          },
          {
            "chave": "aluguel trimestral",
            "valor": 32000.00
          },
          {
            "chave": "aluguel semestral",
            "valor": 60000.00
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
        "valor": 1800000,
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
            "valor": 8000.00
          },
          {
            "chave": "aluguel semanal",
            "valor": 2000.00
          },
          {
            "chave": "aluguel trimestral",
            "valor": 22000.00
          },
          {
            "chave": "aluguel semestral",
            "valor": 42000.00
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
        "valor": 1700000,
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
            "valor": 7000.00
          },
          {
            "chave": "aluguel semanal",
            "valor": 1800.00
          },
          {
            "chave": "aluguel trimestral",
            "valor": 20000.00
          },
          {
            "chave": "aluguel semestral",
            "valor": 38000.00
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
        "latitude": "-23.3071",
        "longitude": "-47.1329",
        "valor": 1600000,
        "adicionais": [
          {
            "chave": "Quartos disponíveis",
            "valor": "3"
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
            "valor": "260m²"
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
            "valor": 6000.00
          },
          {
            "chave": "aluguel semanal",
            "valor": 1500.00
          },
          {
            "chave": "aluguel trimestral",
            "valor": 18000.00
          },
          {
            "chave": "aluguel semestral",
            "valor": 34000.00
          }
        ]
      },
      {
        "id": 7,
        "url_foto": "7.jpg",
        "nome": "Mansão Luxuosa",
        "cidade": "Campinas",
        "estado": "São Paulo",
        "favorito": false,
        "tipoImovel": "casa",
        "latitude": "-22.9099",
        "longitude": "-47.0626",
        "valor": 3500000,
        "adicionais": [
          {
            "chave": "Quartos disponíveis",
            "valor": "8"
          },
          {
            "chave": "Piscina",
            "valor": "Sim"
          },
          {
            "chave": "Banheiros",
            "valor": "6"
          },
          {
            "chave": "Garagem",
            "valor": "6 carros"
          },
          {
            "chave": "Área Construída",
            "valor": "700m²"
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
            "valor": "2018"
          }
        ],
        "aluguel": [
          {
            "chave": "aluguel mensal",
            "valor": 20000.00
          },
          {
            "chave": "aluguel semanal",
            "valor": 5500.00
          },
          {
            "chave": "aluguel trimestral",
            "valor": 52000.00
          },
          {
            "chave": "aluguel semestral",
            "valor": 100000.00
          }
        ]
      },
      {
        "id": 8,
        "url_foto": "8.jpg",
        "nome": "Apartamento Moderno",
        "cidade": "São Paulo",
        "estado": "São Paulo",
        "favorito": false,
        "tipoImovel": "apartamento",
        "latitude": "-23.5505",
        "longitude": "-46.6333",
        "valor": 1200000,
        "adicionais": [
          {
            "chave": "Quartos disponíveis",
            "valor": "3"
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
            "valor": "120m²"
          },
          {
            "chave": "Jardim",
            "valor": "Não"
          },
          {
            "chave": "Churrasqueira",
            "valor": "Sim"
          },
          {
            "chave": "Ano de Construção",
            "valor": "2017"
          }
        ],
        "aluguel": [
          {
            "chave": "aluguel mensal",
            "valor": 7000.00
          },
          {
            "chave": "aluguel semanal",
            "valor": 2000.00
          },
          {
            "chave": "aluguel trimestral",
            "valor": 18000.00
          },
          {
            "chave": "aluguel semestral",
            "valor": 35000.00
          }
        ]
      },
      {
        "id": 9,
        "url_foto": "9.jpg",
        "nome": "Casa de Praia",
        "cidade": "Ubatuba",
        "estado": "São Paulo",
        "favorito": false,
        "tipoImovel": "casa",
        "latitude": "-23.4333",
        "longitude": "-45.0833",
        "valor": 2000000,
        "adicionais": [
          {
            "chave": "Quartos disponíveis",
            "valor": "5"
          },
          {
            "chave": "Piscina",
            "valor": "Sim"
          },
          {
            "chave": "Banheiros",
            "valor": "4"
          },
          {
            "chave": "Garagem",
            "valor": "4 carros"
          },
          {
            "chave": "Área Construída",
            "valor": "400m²"
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
            "valor": "2019"
          }
        ],
        "aluguel": [
          {
            "chave": "aluguel mensal",
            "valor": 15000.00
          },
          {
            "chave": "aluguel semanal",
            "valor": 4000.00
          },
          {
            "chave": "aluguel trimestral",
            "valor": 45000.00
          },
          {
            "chave": "aluguel semestral",
            "valor": 85000.00
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
