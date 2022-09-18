import Product from '../../../models/Product';
import dbConnect from '../../../utils/mongo';

export default async function handler(req, res) {
  await dbConnect();

  const {
    method,
    query: { id },
  } = req;

  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === 'PUT') {
    try {
      const product = await Product.create(req.body);

      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === 'DELETE') {
    try {
      const product = await Product.create(req.body);

      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
