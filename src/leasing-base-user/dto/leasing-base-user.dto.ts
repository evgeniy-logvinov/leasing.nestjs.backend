import { ApiProperty } from '@nestjs/swagger';

export class LeasingBaseUserDto {
  @ApiProperty({
    required: false,
  })
  petName: string;

  @ApiProperty({
    type: 'file',
    properties: {
      file: {
        type: 'string',
        format: 'binary',
      },
    },
    required: false,
  })
  photo: string;

  @ApiProperty({
    required: false,
  })
  modifiedPhoto: string;

  @ApiProperty({
    required: false,
  })
  address: string;
}
