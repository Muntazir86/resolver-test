import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [MyService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'resolver-test';
  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['child'])
  }
}
