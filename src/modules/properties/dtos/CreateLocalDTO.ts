export interface CreateLocalDTO{
    titulo: string;
    descricao: string;
    preco: number;
    qtd_quarto: number;
    qtd_banheiro: number;
    limite_pessoa: number;
    espaco_m2: number;
    cep: string;
    logradouro: string;
    numero: number;
    complemento: string;
    bairro: string;
    visualizacoes: number;
    limite_garagem:number;
	tipo_local_id:number;
    tipo_cobranca_id:number;
    foto_local_id:number;
    id_usuario:number;
    id_cidade:number;
}