const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const discountRoutes = require('./routes/discountRoutes');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/discountDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

app.use('/api/discounts', discountRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
