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

const paginaTestimoniales = (req,res)=>{
    res.render('testimoniales',{
        pagina: 'Testimonios'
    })
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}