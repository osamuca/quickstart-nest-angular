import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { environment } from '../environments'

/**
 * Root component
 *
 * @export
 * @class AppComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-root',
  template: `
  <img width="75px" height="75px" src="/assets/img/finn.gif" style="position: fixed; top: 5px; right: 50%; z-index: 90991;">
  <h1>App Works!</h1> <br>
  User get: {{user | json}}
  `,
  styleUrls: []
})
export class AppComponent implements OnInit {

  public user: any

  /**
   * Creates an instance of AppComponent.
   * @param {Http} http
   * @memberof AppComponent
   */
  constructor (private http: Http) {}

  /**
   * On page loaded
   *
   * @memberof AppComponent
   */
  ngOnInit (): void {
    const sub = this.http.get(`${environment.apiEndpoint}/user/${Math.round(Math.random() * 1024)}`)
      .map(res => res.json())
      .subscribe(
        user => this.user = user,
        err => alert(err),
        () => {
          sub.unsubscribe()
        }
      )
  }

}
