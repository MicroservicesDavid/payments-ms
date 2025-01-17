import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentSessionDto } from './dto/payment-session.dto';
import { Request, Response } from 'express';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  createPaymentSession(@Body() paymentSessionDto: PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
  }

  @Get('success')
  success() {
    return this.paymentsService.success();
  }

  @Get('cancel')
  cancel() {
    return this.paymentsService.cancel();
  }

  @Post('webhook')
  stripeWebhook(@Req() req: Request, @Res() res: Response) {
    return this.paymentsService.stripeWebhhook(req, res);
  }
}
