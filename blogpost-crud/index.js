const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');
const dotenv = require('dotenv');
const authRoutes = require("./routes/authRoutes");

if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}


const app = express();
app.use(bodyParser.json());


const cors = require('cors');
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000' 
}));


app.use("/auth", authRoutes);
app.use('/api', blogRoutes);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.get('/health', (req, res) => {
    res.status(200).json({ message: 'Server is healthy!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
