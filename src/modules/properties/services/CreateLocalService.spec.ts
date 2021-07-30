import FakeLocalRepository from '../repositories/fakes/FakeLocalRepository';
import CreateLocalService from './CreateLocalService';

describe('CreateLocal',()=>{
    it('Deve permitir a criação de um novo local',async ()=>{
        const fakeLocaisRepository = new FakeLocalRepository();
        const createLocal = new CreateLocalService(fakeLocaisRepository);

        const local =await createLocal.execute({
            titulo:"Espaço Donnaruma",
            descricao:"Espaço 200M Quadrados",
            limite_pessoa:300,
            limite_garagem:4,
            preco:200,
            bairro:"Quintino",
            cep:"21311380",
            complemento:"Casarão",
            espaco_m2:1.200,
            qtd_banheiro:3,
            qtd_quarto:4,
            logradouro:"Rua Silvio Luiz",
            numero:729,
            foto_local_id:1,
            id_cidade:1,
            id_usuario:1, 
            tipo_cobranca_id:1,
            tipo_local_id:1,
            visualizacoes:233
            
        })

        expect(local).toHaveProperty('id')
        expect(local.tipo_cobranca_id).toBe(1)
        
    })

})