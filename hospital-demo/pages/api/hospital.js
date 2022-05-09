// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import https from 'https';
export default async function handler(req, res) {
  // Workaround to ignore ssl
  const agent = new https.Agent({  
    rejectUnauthorized: false
  });
  console.log(req.method, 'method')
  if(req.method === 'GET'){
    const response = await axios.get(
      "https://localhost:7286/hospital",
      {
        httpsAgent: agent
      }
    );
    res.status(200).json(response.data)
  }
  else if(req.method === 'POST'){
    const response = await axios.post(
      "https://localhost:7286/hospital",
      req.body,
      {
        httpsAgent: agent
      }
    );
    res.status(200).json(response.data)
  }
  else if(req.method === 'DELETE'){
    console.log(req.body, 'req body')
    const url = `https://localhost:7286/hospital/${req.body.id}`      
    console.log(url, 'url')
    const response = await axios.delete(
      `https://localhost:7286/hospital/${req.body.id}`,
      {
        httpsAgent: agent
      }
    );
    res.status(200).json(response.data)
  }
  // res.status(200).json({ name: 'John Doe' })
}
