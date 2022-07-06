import {db} from '../services/Firebase.js';

class ListController {
  async all() {
    const snapshot = await db.collection('lists').get();
    return snapshot.docs.map((doc) => doc.id);
  }

  async allItems() {
    const snapshot = await db.collection('lists').get();
    return snapshot.docs.map((doc) => {
      return {name: doc.id, items: doc.data().items};
    });
  }

  async add(name) {
    const docRef = db.collection('lists').doc(name);
    await docRef.create({items: []});
  }

  async remove(name) {
    const docRef = db.collection('lists').doc(name);
    await docRef.delete();
  }

  async edit(name, newName) {
    const docRef = db.collection('lists').doc(name);
    const newDocRef = db.collection('lists').doc(newName);
    await db.runTransaction(async (t) => {
      const doc = await t.get(docRef);
      t.create(newDocRef, doc.data());
      t.delete(docRef);
    });
  }
}

export default ListController;
