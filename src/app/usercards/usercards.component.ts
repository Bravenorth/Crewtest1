// usercards.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usercards',
  templateUrl: './usercards.component.html',
  styleUrls: ['./usercards.component.scss']
})
export class UsercardsComponent {
  @Input() pseudo: string = '';
}
