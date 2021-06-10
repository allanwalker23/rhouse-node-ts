import { getCustomRepository, getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Cidade from '../models/Cidade';
import Propriedade from '../models/Propriedade';
import PropriedadeRepository from '../repositories/PropriedadeRepository';

interface Request{
    id: number;
    titulo: string;
    descricao: string;
    preco_mensal: number;
    qtd_quarto: number;
    qtd_banheiro: number;
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    url_foto: string;
	cidade_id:number;
	cidade:string;
	
}
class CreatePropriedadeService {
  public async execute({
  bairro,
  cep,
  cidade,
  cidade_id,
  complemento,
  descricao,
  id,
  numero,
  preco_mensal,
  qtd_banheiro,
  qtd_quarto,
  rua,
  titulo,
  url_foto
  }: Request): Promise<Propriedade> {
    const propriedadeRepository = getCustomRepository(PropriedadeRepository);
    const cidadeRepository = getRepository(Cidade);

    let propriedadeCidade = await cidadeRepository.findOne({
      where: {
        nome: cidade,
      },
    });

    if (!propriedadeCidade) {
        throw new AppError('Não foi possível publicar sua propriedade, verifique o nome da cidade novamente')
    }

    const propriedade = propriedadeRepository.create({
        bairro,
        cep,
        cidade_id,
        complemento,
        descricao,
        id,
        numero,
        preco_mensal,
        qtd_banheiro,
        qtd_quarto,
        rua,
        titulo,
        url_foto,
        cidade: propriedadeCidade,
    });

    await propriedadeRepository.save(propriedade);

    return propriedade;
  }
}

export default CreatePropriedadeService;
