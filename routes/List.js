import {Router} from 'express';
import ListController from '../controllers/ListController.js';

const listRouter = Router();
const listController = new ListController();

listRouter.get('/all', async (req, res, next) => {
  const names = await listController.all();
  return res.json({status: 'success', names});
});

listRouter.get('/allItems', async (req, res, next) => {
  const lists = await listController.allItems();
  return res.json({status: 'success', lists});
});

listRouter.post('/add', async (req, res, next) => {
  const {name} = req.body;
  await listController.add(name);
  return res.status(201).json({status: 'success'});
});

listRouter.delete('/remove', async (req, res, next) => {
  const {name} = req.body;
  await listController.remove(name);
  return res.json({status: 'success'});
});

listRouter.put('/editname', async (req, res, next) => {
  const {name, newName} = req.body;
  await listController.edit(name, newName);
  return res.json({status: 'success'});
});

export {listRouter};
