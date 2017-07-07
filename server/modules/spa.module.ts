import { Module } from '@nestjs/common'
import { FrontEndController } from '../controllers'

@Module({
  controllers: [
    FrontEndController
  ]
})
export class SpaModule { }
