import { Component } from '@angular/core';

type Options = {
  value: number;
  optionName: string;
  icon: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allItems: boolean = true;
  onlyFaves: boolean = false;

}
