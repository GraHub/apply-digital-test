import { Component } from '@angular/core';
import { map } from 'rxjs';
import { ApiCallService } from 'src/service/api-call.service';

type ItemType = {
  author: string;
  story_title: string;
  story_url: string;
  created_at: Date;
  story_id: number;
  liked: boolean;

}
@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})


export class AllItemsComponent {
  items: ItemType[] = [];
  constructor(private service: ApiCallService) {

  }

  loadAngularItems() {
    this.items = [];
    this.service.getAngularItems().subscribe({
      next: (response) => {
        let hits = response.hits.filter((x: { author: null; story_title: null; story_url: null; created_at: null; }) => x.author != null || x.story_title != null || x.story_url != null || x.created_at != null);

        hits.forEach((element: { author: any; story_id: any; story_url: any; story_title: any; created_at: any; }) => {
          this.items.push({
            author: element.author,
            story_id: element.story_id,
            story_url: element.story_url,
            story_title: element.story_title,
            created_at: element.created_at,
            liked: false,
          })
        });
      },
      error: (e) => { console.log('Theres was an error with your choice, please pick other one') }
    })
  }

  loadReactItems() {
    this.items = [];
    this.service.getReactItems().subscribe({
      next: (response) => {
        let hits = response.hits.filter((x: { author: null; story_title: null; story_url: null; created_at: null; }) => x.author != null || x.story_title != null || x.story_url != null || x.created_at != null);

        hits.forEach((element: { author: any; story_id: any; story_url: any; story_title: any; created_at: any; }) => {
          this.items.push({
            author: element.author,
            story_id: element.story_id,
            story_url: element.story_url,
            story_title: element.story_title,
            created_at: element.created_at,
            liked: false,
          })
        });
      },
      error: (e) => { console.log('Theres was an error with your choice, please pick other one') }
    })
  }

  loadVueItems() {
    this.items = [];
    this.service.getVueItems().subscribe({
      next: (response) => {
        let hits = response.hits.filter((x: { author: null; story_title: null; story_url: null; created_at: null; }) => x.author != null || x.story_title != null || x.story_url != null || x.created_at != null);

        hits.forEach((element: { author: any; story_id: any; story_url: any; story_title: any; created_at: any; }) => {
          this.items.push({
            author: element.author,
            story_id: element.story_id,
            story_url: element.story_url,
            story_title: element.story_title,
            created_at: element.created_at,
            liked: false,
          })
        });
      },
      error: (e) => { console.log('Theres was an error with your choice, please pick other one') }
    })
  }

}
