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

  if (method === 'PATCH') {
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      });

      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === 'DELETE') {
    try {
      await Product.findByIdAndDelete(id);

      res.status(200).json('Product has been delteted');
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
