import {Router} from 'express';
import ItemController from '../controllers/ItemController.js';

const itemRouter = Router();
const itemController = new ItemController();

itemRouter.get('/:name/get', async (req, res, next) => {
  const {name} = req.params;
  const list = await itemController.get(name);
  return res.json({status: 'success', list});
});

itemRouter.post('/:name/add', async (req, res, next) => {
  const {name} = req.params;
  const {item, checked} = req.body;
  await itemController.add(name, item, checked);
  return res.status(201).json({status: 'success'});
});

itemRouter.delete('/:name/remove', async (req, res, next) => {
  const {name} = req.params;
  const {index} = req.body;
  await itemController.remove(name, index);
  return res.json({status: 'success'});
});

itemRouter.put('/:name/edit', async (req, res, next) => {
  const {name} = req.params;
  const {index, newItem} = req.body;
  await itemController.editItem(name, index, newItem);
  return res.json({status: 'success'});
});

itemRouter.put('/:name/check', async (req, res, next) => {
  const {name} = req.params;
  const {index} = req.body;
  await itemController.checkItem(name, index);
  return res.json({status: 'success'});
});

export {itemRouter};
