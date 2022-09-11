import Product from '../../../models/Product';
import dbConnect from '../../../utils/mongo';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
  }

  if (method === 'POST') {
    try {
      await dbConnect();

      const product = await Product.create(req.body);

      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
