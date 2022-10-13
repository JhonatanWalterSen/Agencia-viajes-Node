import { Testimonial } from "../models/Testimoniales.js"
import { Viaje } from "../models/Viaje.js"



const paginaInicio = async (req,res)=>{

    // consultar 3 viajes de la bd: 

    try {
        const viajes = await Viaje.findAll({ limit:3 })
        const testimoniales = await Testimonial.findAll({ limit:3 })
        res.render('inicio',{
            pagina: 'Inicio XD',
            clase: 'home',
            viajes,
            testimoniales
        })
    } catch (error) {
        console.log(error);
    }
    
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

const paginaTestimoniales = async (req,res)=>{
    try {
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales',{
            pagina: 'Testimonios',
            testimoniales
        }) 
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,paginaDetalleViaje
}