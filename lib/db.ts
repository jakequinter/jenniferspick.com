import firebase from './firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export function createItem(data) {
  return firestore.collection('items').add(data);
}
