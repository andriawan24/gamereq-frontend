import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: String,
  age: Number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({
    name: 'Naufal',
    age: 20,
  });
}
