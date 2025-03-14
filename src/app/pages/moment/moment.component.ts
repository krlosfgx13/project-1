import { Component, OnInit } from '@angular/core';
//import * as moment from 'moment'
import moment from 'moment';

@Component({
  selector: 'app-moment',
  imports: [],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent implements OnInit {
  date: Date = new Date();  
  smallDate: any;
  day: string;
  weekDay: string;
  month: string;    
  year: string;
  hour: string; 

  daysDate: any;
  substractDaysToDate: any;
  monthDate: any;
  substractMonthToDate: any;
  yearDate: any;
  substractYearToDate: any;
  
  ngOnInit(): void {
    this.execute();
  }

  execute() {
    //moment.locale('es');
    this.smallDate = moment(this.date).format('YYYY-MM-DD HH:mm');
    this.day = moment(this.date).format('DD');
    this.weekDay = moment(this.date).format('dddd');    
    this.month = moment(this.date).format('MMMM');
    this.year = moment(this.date).format('YYYY');
    this.hour = moment(this.date).format('HH:mm:ss');

    //calculate
    this.daysDate = moment(this.date).add(7, 'days').format('YYYY-MM-DD HH:mm');
    this.substractDaysToDate = moment(this.date).subtract(7, 'days').format('YYYY-MM-DD HH:mm');
    this.monthDate = moment(this.date).add(1, 'months').format('YYYY-MM-DD HH:mm');
  }
  
}
