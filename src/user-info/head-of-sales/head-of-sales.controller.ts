import {
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { HeadOfSalesDto } from './dto/head-of-sales.dto';
import { HeadOfSales } from './entity/head-of-sales.entity';
import { HeadOfSalesService } from './service/head-of-sales.service';

@ApiTags('HeadOfSales')
@ApiBearerAuth()
@Controller('head-of-sales')
@UseGuards(AuthGuard())
export class HeadOfSalesController {
  constructor(private headOfSalesService: HeadOfSalesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() headOfSalesDto: HeadOfSalesDto): Promise<HeadOfSales> {
    return this.headOfSalesService.createHeadOfSales(headOfSalesDto);
  }
}
