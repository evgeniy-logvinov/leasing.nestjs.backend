import { NotFoundException } from '@nestjs/common';

export class ClientNotFoundException extends NotFoundException {
  constructor() {
    super('Client not found', 'Client id empty or not exists');
  }
}
