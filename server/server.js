const express = require('express');
const cors = require('cors')
const axios = require('axios');
require('dotenv').config()
const app = express();
const PORT = 5000;
const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
app.use(cors())
app.use(express.json());

app.get('/api/movies/search', async (req, res) => {
  const { query , page } = req.query;
  try {
    const response = await axios.get(`${TMDB_API_BASE_URL}/search/movie`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: query,
        page: page || 1
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch movie data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
