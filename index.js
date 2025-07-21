import express from 'express';
import bodyParser from 'body-parser';
import quotes from './data.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function basicAuth(req, res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Basic ")){
        return res.status(401).json({error: "Missing or invalid authorization header"});
    }

    const encodedCreds = authHeader.split(" ")[1]; 
    const convertedCreds = Buffer.from(encodedCreds, "base64").toString("utf-8");
    //username:password
    let [username, password] = convertedCreds.split(":");

    //example username and password
    const USERNAME = "admin";
    const PASSWORD = "admin123";
    console.log(username);
    console.log(password);

    if(username !== USERNAME || password !== PASSWORD){
        return res.status(403).json({error: "Invalid credential for basic Auth"});
    }
    next();
}

// GET random quote
app.get("/random", (req, res)=>{
    const randomNum = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomNum];

    if(!selectedQuote){
        res.status(404).json({error: "Quote not found"});
    }

    res.json(selectedQuote);
});

//GET a specific quote by id
app.get("/quotes/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const foundQuote = quotes.find(j => j.id === id);
    if(!foundQuote){
        res.status(404).json({error: "Quote not found."});
    }else{
        res.json(foundQuote);
    }
});

//GET filtered quotes based on author
app.get("/filter", (req, res) => {
    const author = req.query.author;
    const filteredQuotes = quotes.filter(a => a.quoteAuthor === author);
    if(!filteredQuotes){
        res.status(404).json({error: `Quote with author ${author} is not found.`});
    }else{
        res.json(filteredQuotes);
    }
});

//POST add new quotes (needs basic auth)
app.post("/quotes", basicAuth, (req, res)=>{
    const newQuote = {
        id: quotes.length+1,
        quoteText: req.body.text,
        quoteAuthor: req.body.author
    }

    quotes.push(newQuote);
    console.log(quotes.slice(-1));
    res.json(newQuote).status(200);
});

//PUT update one whole quote based on id
app.put("/quotes/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const existingQuote = quotes.find(q => q.id === id);
    
    if(!existingQuote){
        res.status(404).json({error: "Quote to be updated not found. No quotes updated."});
    }else{
        const quoteIdx = quotes.findIndex(q => q.id === id);
        const changedQuote = {
            id: existingQuote.id,
            quoteText: req.body.text,
            quoteAuthor: req.body.author
        }
        quotes[quoteIdx] = changedQuote;
        console.log(quotes[quoteIdx]);
        res.json(changedQuote).status(200);
    }
});

//PATCH update quote based on id
app.patch("/quotes/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const existingQuote = quotes.find(q => q.id === id);

    if(!existingQuote){
        res.status(404).json({error: "Quote to be updated not found. No quotes updated."});
    }else{
        const quoteIdx = quotes.findIndex(q => q.id === id);
        const changedQuote = {
            id: id,
            quoteText: req.body.text  || existingQuote.quoteText,
            quoteAuthor: req.body.author || existingQuote.quoteAuthor
        }
        quotes[quoteIdx] = changedQuote;
        console.log(quotes[quoteIdx]);
        res.json(changedQuote).status(200);
    }
});

//DELETE a quote based on id
app.delete("/quotes/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const quoteIdx = quotes.findIndex(i => i.id === id);
    if(!quoteIdx === -1){
        res.status(404).json({error: "Quote to be deleted not found. No quotes deleted."});
    }else{
        quotes.splice(quoteIdx, 1);
        res.send(200).json({message: "Quote deleted successfully"});
    }
});

//DELETE all quotes (needs basic authentication)
app.delete("/all", basicAuth, (req, res)=>{
    quotes.splice(0, quotes.length);
    res.status(200).json({message: "All quotes deleted succesfully."})
});

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
});