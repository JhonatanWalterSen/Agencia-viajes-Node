import { Testimonial } from "../models/Testimoniales.js";


const guardarTestimonial = async (req,res) =>{

    //Validar
    const { nombre , correo, mensaje } = req.body
    const errores = []
    if (nombre.trim() === '') {
        errores.push({mensaje : 'El Nombre está vacío'});
    }

    if (correo.trim() === '') {
        errores.push({mensaje : 'El Correo está vacío'});
    }

    if (mensaje.trim() === '') {
        errores.push({mensaje : 'El Mensaje está vacío'});
    }

    if (errores.length > 0) {
        res.render('testimoniales',{
            pagina: 'Testimonios',
            errores,
            nombre,
            correo,
            mensaje
        })
    } else {
        //Almacenar en la bd

        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error);
        }
    }
    console.log(errores);
}

export {
    guardarTestimonial
}