import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/service/ui.service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title: string= 'My Task-List';
  showAddTask: boolean = false;
  subcription?: Subscription;

  constructor(
    private uiService: UiServiceService
  ) { 
    this.subcription = this.uiService.onToggle().subscribe(value =>this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
}
