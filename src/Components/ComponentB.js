import { useState, useEffect } from 'react';
import { addNewQuote, deleteQuote, getAllQuotes, updateQuote, getQuoteById } from '../services/axiosAPI';

const ComponentB = () => {
    const [quotes, setQuotes] = useState([]);
    const [newQuote, setNewQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => {
        getQuotesList();
    }, []);


    const getQuotesList = async () => {
        const response = await getAllQuotes();
        setQuotes(response.data.quotes);
    };

    const addQuote = async () => {
        const payload = {
           quote: newQuote,
           author: author
          };

          const response = await addNewQuote(payload);
          if(response.data){
          console.log(response.data)

            getQuotesList();
          }
    }

    const updateExisitingQuote = async (quoteId) => {
        const payload = {
            quote: newQuote,
            author: author
           };

          const response = await updateQuote(quoteId, payload);
          
          if(response.data){
          console.log(response.data)

            getQuotesList();
          }
    }

    const deleteExistingQuote = async (quoteId) => {
        const response = await deleteQuote(quoteId);
        if(response.data){
          console.log(response.data)
            getQuotesList();
          }
    }

    return (
        <div>
            <h1>Getting users using Axios</h1>

            <input type='text' onChange={e => setNewQuote(e.target.value)} />
            <input type='text' onChange={e => setAuthor(e.target.value)} />

            <div>
                <button onClick={addQuote}>Add a new Quote</button>
            </div>
            

            {
                quotes.length ? (
                    <div>
                        {quotes.map((data, i) => (
                            <div key={i}>
                                <h1>Quote: {data.quote}</h1>
                                <h2>Author: {data.author}</h2>
                                <button onClick={() => deleteExistingQuote(data._id)}>Delete</button>
                                <button onClick={() => updateExisitingQuote(data._id)}>Update</button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        No Quotes Found
                    </div>
                )
            }
        </div>
    )
}

export default ComponentB;


// using FETCH
// GET = /users
// GET = /users/1
// POST = /users -> req.body
// PUT = /users/1 -> req.body
// DELETE = /users/4 


// “You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
// ― Dr. Seuss

// “You only live once, but if you do it right, once is enough.”
// ― Mae West

// “In three words I can sum up everything I've learned about life: it goes on.”
// ― Robert Frost