import express from 'express';
import { 
    paginaInicio,
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje
}from '../controllers/paginasController.js';

const router = express()
router.get('/', paginaInicio)

router.get('/nosotros',paginaNosotros)

router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViaje)


router.get('/testimonios', paginaTestimoniales)



export default router