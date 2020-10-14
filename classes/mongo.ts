import mongoose from 'mongoose';



const mongo = "localhost:27017"
export const connectMongo = async (  ) => {

    const config = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    };
    try{
        await mongoose.connect("mongodb://"+mongo+"/tareas",config);
        console.log('Base de datos conectada correctamente');
    }catch(e){
        setTimeout(()=>{
            console.log("Error en la conneccion con mongo - reintentando en 5 segundos");
            connectMongo();
        },5000);
    }
}
