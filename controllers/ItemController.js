import {db} from '../services/Firebase.js';

class ItemController {
  async get(name) {
    const docRef = db.collection('lists').doc(list);
    const doc = await docRef.get();
    return {name, items: doc.data().items};
  }

  async add(name, item, checked) {
    const docRef = db.collection('lists').doc(name);
    await db.runTransaction(async (t) => {
      const doc = await t.get(docRef);
      const obj = doc.data();
      obj.items.push({item, checked});
      t.set(docRef, obj);
    });
  }

  async remove(name, index) {
    const docRef = db.collection('lists').doc(name);
    await db.runTransaction(async (t) => {
      const doc = await t.get(docRef);
      const obj = doc.data();
      obj.items.splice(index, 1);
      t.set(docRef, obj);
    });
  }

  async editItem(name, index, newItem) {
    const docRef = db.collection('lists').doc(name);
    await db.runTransaction(async (t) => {
      const doc = await t.get(docRef);
      const obj = doc.data();
      obj.items[index].item = newItem;
      t.set(docRef, obj);
    });
  }

  async checkItem(name, index) {
    const docRef = db.collection('lists').doc(name);
    await db.runTransaction(async (t) => {
      const doc = await t.get(docRef);
      const obj = doc.data();
      obj.items[index].checked = !obj.items[index].checked;
      t.set(docRef, obj);
    });
  }
}

export default ItemController;
