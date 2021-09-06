const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid')

const arreglo = [];

router.get('/', (req, res) => {

    res.render('index', { arreglo });
});

//VENTANA PRESATAMO CLIENTES
router.get('/asignar', (req, res) => {
    res.render('asignar');
});

router.post('/save', (req, res) => {
    arreglo.push({ ...req.body, id: uuidv4() });
    res.redirect('/')
});

router.get('/entregado/:id', (req, res) => {
    const { id } = req.params;
    const idx = arreglo.findIndex(element => element.id == id);
    arreglo.splice(idx, 1);
    res.redirect('/')
})

router.get('/editar/:id', (req, res) => {
    const { id } = req.params;
     const idx = arreglo.findIndex(element => element.id == id);
    arreglo.splice(idx, 1);
    res.render('editar')
})

router.post('/editar', (req, res) => {
  arreglo.push({ ...req.body, id: uuidv4() });
    res.redirect('/')
})
module.exports = router;