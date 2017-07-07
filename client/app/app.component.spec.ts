import { async, TestBed } from '@angular/core/testing'
import { Http, HttpModule } from '@angular/http'
import 'rxjs/add/observable/of'
import { Observable } from 'rxjs/Observable'
import { AppComponent } from './app.component'

class HttpStub {
  public get (): Observable<any> {
    return Observable.of({
      id: 1,
      name: 'test',
      email: 'test@test.com'
    })
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: Http, useClass: HttpStub }
      ]
    }).compileComponents()
  }))

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))

})
