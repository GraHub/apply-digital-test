import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() items:any;

  saveAsFavorite(){

  }

  openUrl(url:string){
    window.open(url, '_blank')
  }

}
