// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from './tuits-dao.js'

const createTuit = async (req, res) => {
    const newTuit = req.body;
    //newTuit._id = (new Date()).getTime()+'';
    newTuit.username = 'Sairam';
    newTuit.handle = "@sairam";
    newTuit.time = "1min";
    newTuit.image = "spacex.jpg";
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.replies = 0;
    newTuit.retuits = 0;
    newTuit.dislikes = 0;
    
    //tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);

    //res.json(newTuit);
  }
  
  
const findTuits  = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits)
};

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;

    const status = await tuitsDao.updateTuit(tuitdIdToUpdate,updates);
    res.json(status);

    // const tuitIndex = tuits.findIndex(
    //   (t) => t._id === tuitdIdToUpdate)
    // tuits[tuitIndex] = 
    //   {...tuits[tuitIndex], ...updates};
    // res.sendStatus(200);
  }
  
  

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);

    // tuits = tuits.filter((t) =>
    //   t._id !== tuitdIdToDelete);
    //res.sendStatus(200);
    res.json(status);

  }
  
  

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}

