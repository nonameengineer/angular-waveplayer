import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';
  status: boolean = false;

  onDrawerClick(event) {
    if (this.status == true) {
      this.status = false;
    } else {
      this.status = true;
    }
  }
}
