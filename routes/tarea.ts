import { Router, Request, Response } from "express";
import { Tarea } from "../models/tarea.model";

const tareaRouters = Router();

//ver tareas
tareaRouters.get('/', async (req: any, res: Response) => {
    const body = req.body;
    let query: any = {};

    try {
        const response = await Tarea.find(query).exec();
        res.status(200).send({
            status: true,
            response: response
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            error: e
        })
    }
});


//crear usuario
tareaRouters.post('/create', async (req: Request, res: Response) => {

    try {
        const tarea = {
            descripcion: req.body.descripcion,
            vigente: req.body.vigente
        }
        const userDB = await Tarea.create(tarea);
        res.status(200).send({
            userDB
        });
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
});




// Actualizar usuario
tareaRouters.put('/update', async (req: any, res: Response) => {

    try {
        const tarea = {
            id: req.body.id,
            descripcion: req.body.descripcion,
            vigente: req.body.vigente
        }


        console.log(tarea)

        const userDB = await Tarea.findByIdAndUpdate(tarea.id, tarea, { new: true });
        if (!userDB) {
            res.json({
                ok: false,
                mensaje: 'No existe un usuario con ese ID'
            })
        } else {
            const userDB = await Tarea.create(tarea);
            res.status(200).send({
                userDB
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
});



//borrar tarea
tareaRouters.post('/delete', async (req: any, res: Response) => {

    try {
        const tarea = {
            id: req.body.id,
        }

        const userDB = await Tarea.findOneAndDelete(tarea.id);
        if (userDB === null)
            res.status(200).json({
                status: 'tarea no esta en base de datos',
            })

        res.status(200).json({
            status: 'Tarea borrada',
        })

    } catch (error) {
        res.status(500).json({
            status: 500,
            error: error
        })
    }
});

export default tareaRouters;