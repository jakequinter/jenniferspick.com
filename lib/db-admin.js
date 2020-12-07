import { compareDesc, parseISO } from 'date-fns';

import { db } from './firebase-admin';

export async function getAllItems() {
  try {
    const snapshot = await db.collection('items').get();

    const items = [];

    snapshot.forEach(doc => {
      items.push({ id: doc.id, ...doc.data() });
    });

    items.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { items };
  } catch (error) {
    return { error };
  }
}
