import { NestFactory } from '@nestjs/core'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as morgan from 'morgan'
import * as path from 'path'
import { ApplicationModule } from './modules'

const instance = express()
if (instance.get('env') === 'development') {
  instance.use(cors())
}
const statics = path.join(__dirname, '..', 'client')
console.log(statics)
instance.use(bodyParser.json())
instance.use(morgan('combined'))
instance.use(express.static(statics))
const app = NestFactory.create(ApplicationModule, instance)

app.listen(3000, () => console.log('Application is listening on port 3000.'))
