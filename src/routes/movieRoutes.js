import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ httpMethod: 'GET', message: 'Hello from the movies route!' });
});

router.post('/', (req, res) => {
    res.json({ httpMethod: 'POST', message: 'Hello from the movies route!' });
});

router.put('/', (req, res) => {
    res.json({ httpMethod: 'PUT', message: 'Hello from the movies route!' });
});
router.delete('/', (req, res) => {
    res.json({ httpMethod: 'DELETE', message: 'Hello from the movies route!' });
});

export default router;
