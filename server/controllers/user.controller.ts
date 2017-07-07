import { Controller, Get, Param, Response as ResponseNest } from '@nestjs/common'
import { Response } from 'express'

@Controller()
export class UserController {
  @Get('api/user/:id')
  user (@ResponseNest() res: Response, @Param('id') id: string) {
    res.json({
      id: id,
      name: 'User test',
      email: 'test@test.com'
    })
  }
}
