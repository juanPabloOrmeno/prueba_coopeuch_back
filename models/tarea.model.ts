import { Schema, model, Document } from 'mongoose'


const tareaSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'la descripcion es requerido']
    },
    fecha: {
        type: Date
    },
    vigente: {
        type: Boolean,
        default: true
    },
})


tareaSchema.pre<iTarea>('save', function( next ) {
    this.fecha = new Date()
    next();
})


interface iTarea extends Document {
    descripcion: string;
    fecha: Date;
    vigente: boolean;
}


export const Tarea = model<iTarea>('Tarea', tareaSchema);