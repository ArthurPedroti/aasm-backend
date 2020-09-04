import { injectable, inject } from 'tsyringe';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ITicketsRepository from '../repositories/ITicketsRepository';
import Ticket from '../infra/typeorm/entities/Ticket';

interface IRequest {
  user_id: string;
  client_id: string;
  client_name: string;
  client_cnpj: string;
  classification: string;
  equipment: string;
  type: string;
  status: string;
  description: string;
}

@injectable()
class CreateTicketService {
  constructor(
    @inject('TicketsRepository')
    private ticketsRepository: ITicketsRepository,

    @inject('NotificationsRepository')
    private notificationsRepository: INotificationsRepository,
  ) {}

  public async execute({
    user_id,
    client_id,
    client_name,
    client_cnpj,
    classification,
    equipment,
    type,
    status,
    description,
  }: IRequest): Promise<Ticket> {
    let statusDefault = 'Não atendido';
    let classificationDefault = 'Sem classificação';

    if (status) {
      statusDefault = status;
    }

    if (classification) {
      classificationDefault = classification;
    }

    const ticket = await this.ticketsRepository.create({
      user_id,
      client_id,
      client_name,
      client_cnpj,
      classification: classificationDefault,
      equipment,
      type,
      status: statusDefault,
      description,
    });

    await this.notificationsRepository.create({
      title: 'Novo chamado!',
      content: `Cliente: ${client_name}`,
      recipient_role: 'admin',
    });

    return ticket;
  }
}

export default CreateTicketService;
