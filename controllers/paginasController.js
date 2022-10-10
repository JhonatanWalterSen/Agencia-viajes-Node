import { Viaje } from "../models/Viaje.js"


const paginaInicio = (req,res)=>{
    res.render('inicio',{
        pagina: 'Inicio XD'
    })
}

const paginaNosotros =  (req,res)=>{
    res.render('nosotros',{
        pagina: 'Nostros'
    })
}

const paginaViajes = async (req,res)=>{
    // consultar bd
    const viajes = await Viaje.findAll()
    console.log(viajes);


    res.render('viajes',{
        pagina: 'Próximos Viajes',
        viajes,
    })
}

//Mostrar viaje por el Slug
const paginaDetalleViaje = async (req,res)=>{
    const {slug} = req.params;
    
    try {
        const viaje = await Viaje.findOne({ where: { slug:slug } })
        res.render('viaje',{
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

const paginaTestimoniales = (req,res)=>{
    res.render('testimoniales',{
        pagina: 'Testimonios'
    })
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,paginaDetalleViaje
}