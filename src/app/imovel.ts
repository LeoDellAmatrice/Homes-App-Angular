interface Propriedades {
    chave: String;
    valor: number|string;
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
    adicionais: Propriedades[];
}