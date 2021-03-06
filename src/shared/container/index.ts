import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';

import ITicketsRepository from '@modules/tickets/repositories/ITicketsRepository';
import TicketsRepository from '@modules/tickets/infra/typeorm/repositories/TicketsRepository';

import ITicketUpdatesRepository from '@modules/ticketupdates/repositories/ITicketUpdatesRepository';
import TicketUpdatesRepository from '@modules/ticketupdates/infra/typeorm/repositories/TicketUpdatesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);

container.registerSingleton<ITicketsRepository>(
  'TicketsRepository',
  TicketsRepository,
);

container.registerSingleton<ITicketUpdatesRepository>(
  'TicketUpdatesRepository',
  TicketUpdatesRepository,
);
