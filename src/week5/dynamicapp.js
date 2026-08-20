const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page!</h1><p>Try visiting /user/123, /flights/JFK/LAX, or /search?category=books</p>');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`<h1>User Profile</h1><p>You are viewing the profile of user with ID: ${userId}</p>`);
});

app.get('/flights/:from/:to', (req, res) => {
    const {from, to} = req.params;
    res.send(`<h1>Flight Information</h1><p>Searching for flights from ${from} to ${to}</p>`);
})

app.get('/search', (req, res) => {
    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: 'Search results',
        filteringBy: category || 'none',
        sortingBy: sort || 'default'
    });
});

app.listen(port, () => {
    console.log(`Dynamic server running at http://localhost:${port}`);
});