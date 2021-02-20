import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  url = 'https://jsonplaceholder.typicode.com/todos?fbclid=IwAR2wcbmzd8WCrAoh3XhMUcAmEE5XnvTdzs_lbKx7dt5MCpnx9f2Din7q-3s';
  items = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      console.log(data);

      for (let key in data) if (data.hasOwnProperty(key))
        this.items.push(data[key]);
    });
  }
}
