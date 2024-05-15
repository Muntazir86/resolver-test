import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  constructor(private route: ActivatedRoute) {}

  data = ''
  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      if(data && data.resolvedData){
        console.log(data.resolvedData)
        this.data = data.resolvedData
      }
    })
  }
}
