import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../app/shared/service/register.service';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-resumereport',
  templateUrl: './resumereport.component.html',
  styleUrls: ['./resumereport.component.scss']
})
export class ResumereportComponent implements OnInit {
  public gridData: any[];
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
};
  constructor(private service:RegisterService) { }

  ngOnInit(): void {
    this.refreshData();
  }
  public refreshData(){
    this.service.displayresumereport().subscribe(data=>{
      console.log(data);
      this.gridData=data;
    });
  }
  public onStateChange(state: State) {
    this.gridState = state;

    this.refreshData();
  }
}
