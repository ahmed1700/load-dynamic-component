import { Component, Input } from '@angular/core';
import { Adcomponent } from '../contracts/adcomponent';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements Adcomponent {
  @Input() data: any;
}
