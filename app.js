const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Halo,ini percobaan belajar CI dengan Github Action dan CD dengan ArgoCD'))
app.listen(3000, () => console.log('Server ready'))