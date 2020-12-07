import { getAllItems } from '../../lib/db-admin'

export default async (_, res) => {
  try {
    const { items } = await getAllItems();

    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ error });
  }
};