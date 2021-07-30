
import crypto from 'crypto';
import MD5Provider from '../models/MD5Provider';

class MD5HashProvider implements MD5Provider{

    public async generateHash(payload:string):Promise<string>{
        
        return crypto.createHash("md5").update(payload).digest("hex");
    }

    
}

export default MD5HashProvider;