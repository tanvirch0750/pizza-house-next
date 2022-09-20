import Product from '../../../models/Product';
import dbConnect from '../../../utils/mongo';

export default async function handler(req, res) {
  await dbConnect();

  const {
    method,
    query: { id },
    cookies,
  } = req;

  const token = cookies.token;

  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === 'PATCH') {
    if (!token && token !== process.env.TOKEN) {
      res.status(401).json('You are not authenticate');
    }
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
    if (!token && token !== process.env.TOKEN) {
      res.status(401).json('You are not authenticate');
    }
    try {
      await Product.findByIdAndDelete(id);

      res.status(200).json('Product has been delteted');
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
