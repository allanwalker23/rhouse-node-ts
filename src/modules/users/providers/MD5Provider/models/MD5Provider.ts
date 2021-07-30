export default interface MD5Provider{
    generateHash(payload:string):Promise<string>;
    
}