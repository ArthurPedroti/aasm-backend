import { Response, Request } from 'express';
import { container } from 'tsyringe';
import ListUserTicketsService from '@modules/tickets/services/ListUserTicketsService';
import UpdateUserTicketsService from '@modules/tickets/services/UpdateUserTicketsService';

export default class UserTicketsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listTickets = container.resolve(ListUserTicketsService);

    const tickets = await listTickets.execute({ user_id });

    return response.json(tickets);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { ticket_id } = request.params;
    const {
      client_id,
      client_name,
      client_cnpj,
      equipment,
      type,
      description,
    } = request.body;

    const updateTicket = container.resolve(UpdateUserTicketsService);

    const ticket = await updateTicket.execute({
      user_id,
      ticket_id,
      client_id,
      client_name,
      client_cnpj,
      equipment,
      type,
      description,
    });

    return response.json(ticket);
  }
}
