import jwt, { decode } from 'jsonwebtoken'

export default class Token{

    private static seed: string = 'sex-token'
    private static caducidad: string = '30d'

    static getJwsToken( payload: any): string {
        return jwt.sign({
            usuario: payload
        }, this.seed, {expiresIn: this.caducidad})
    }



    static comprobarToken(userToken: string){
        return new Promise((resolve, rejects)=>{
            jwt.verify( userToken, this.seed, (err, decode) => {
                if(err){
                    //no confiar
                    rejects();
                }else{
                    //token valido
                    resolve( decode )
                }
            })
        }) 
    }


}