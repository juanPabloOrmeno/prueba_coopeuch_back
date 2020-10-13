import { Response, Request, NextFunction } from 'express';
import Token from '../classes/token';
 

export const verificaToken = async ( req: any, res: Response, next: NextFunction  ) => {
    const userToken = req.get('x-token') || '';
    try{
        const decoded:any = await Token.comprobarToken( userToken );
        req.usuario = decoded.usuario;
        next();
    }catch(e){
        res.status(500).json({
            status: false,
            mensaje: 'Token no es correcto'
        });
    }
}


