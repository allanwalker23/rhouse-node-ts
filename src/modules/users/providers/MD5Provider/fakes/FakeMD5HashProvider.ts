
import MD5Provider from '../models/MD5Provider';

class FakeMD5HashProvider implements MD5Provider{

    public async generateHash(payload:string):Promise<string>{
        return payload;        
    }

    
}

export default FakeMD5HashProvider;