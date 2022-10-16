const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/helloapi', (req, res) => {
    res.send({status: 200, message: 'success', data: [{user_id:20}]});
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})
