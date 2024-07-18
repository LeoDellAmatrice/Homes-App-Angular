interface Propriedades {
    chave: String;
    valor: number|string;
}

interface DetalhesAluguel {
    chave: String;
    valor: number;
}

export interface Imovel {
    id: number;
    url_foto: string;
    nome: string;
    cidade: string;
    estado: string;
    tipoImovel: string;
    favorito: boolean;
    latitude: String; 
    longitude: String;
    valor: number;
    adicionais: Propriedades[];
    aluguel: DetalhesAluguel[];
}