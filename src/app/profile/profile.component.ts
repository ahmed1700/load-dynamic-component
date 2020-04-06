import { Component, Input } from '@angular/core';
import { Adcomponent } from '../contracts/adcomponent';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements Adcomponent {
  @Input() data: any;
}
