import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.less']
})
export class EventComponent implements OnInit {

events$ = this.dataService.getEvents()

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onSelect(event){
    this.router.navigate(['/event' , event.id])
  }

}
