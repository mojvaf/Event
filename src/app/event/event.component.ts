import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.less']
})
export class EventComponent implements OnInit {

events$ = this.dataService.getEvents()

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
  }

}
