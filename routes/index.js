import express from 'express';
const router = express()
router.get('/', (req,res)=>{
    res.render('inicio',{
        pagina: 'Inicio XD'
    })
})

router.get('/nosotros', (req,res)=>{
    res.render('nosotros',{
        pagina: 'Nostros'
    })
})

router.get('/viajes', (req,res)=>{
    res.render('viajes',{
        pagina: 'Viajes'
    })
})


router.get('/testimonios', (req,res)=>{
    res.render('testimoniales',{
        pagina: 'Testimonios'
    })
})



export default router