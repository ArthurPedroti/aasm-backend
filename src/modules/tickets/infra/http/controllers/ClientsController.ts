import { Response, Request } from 'express';
import axios from 'axios';

export default class ClientsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const clients = await axios.get(
      `${process.env.APP_PROTHEUS_API_URL}/clients`,
    );

    return response.json(clients.data);
  }
}
