import Product from '../../../models/Product';
import dbConnect from '../../../utils/mongo';

export default async function handler(req, res) {
  await dbConnect();

  const { method, cookies } = req;

  const token = cookies.token;

  if (method === 'GET') {
    try {
      const products = await Product.find();
      res.status(201).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === 'POST') {
    if (!token && token !== process.env.TOKEN) {
      res.status(401).json('You are not authenticate');
    }
    try {
      const product = await Product.create(req.body);

      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
