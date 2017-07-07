import { Module } from '@nestjs/common'
import { SpaModule } from './spa.module'
import { UserModule } from './user.module'

@Module({
  modules: [
    UserModule,
    SpaModule // Fix position on end because router '*'
  ]
})
export class ApplicationModule { }
