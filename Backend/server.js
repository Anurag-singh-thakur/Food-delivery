import express from 'express';
import cors from 'cors';

//add config

const app = express();
const port = 4000;


// Middleware
app.use(express.json());
app.use(cors());

app.get('/' ,  (req, res) => {
   res.send ("API working") ;
})

app.listen(port ,()=>{
    console.log(`Server running on port ${port}`)  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message  ;  // log the server running message
})