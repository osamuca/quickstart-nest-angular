import { Controller, Get, Response as ResponseNest } from '@nestjs/common'
import { Response } from 'express'
import * as path from 'path'

@Controller()
export class FrontEndController {
  @Get('*')
  ping (@ResponseNest() res: Response) {
    res.sendFile(path.join(__dirname, '../..', 'client/index.html'))
  }
}
