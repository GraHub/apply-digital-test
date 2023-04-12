import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiCallService } from './api-call.service';
import { Data } from '@angular/router';

describe('ApiCallService', () => {
  let service: ApiCallService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiCallService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=> {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should request Angular data', () => {
    const testData = {
      author: 'Test author Angular',
      story_title: 'Story title test Angular',
      story_url: 'Story url test Angular',
      created_at: 'somedate Angular'
    }

    service.getAngularItems().subscribe(response =>{
      expect(response.author).toEqual('Test author Angular');
    });

    const req = httpTestingController.expectOne('http://localhost:4200/api/v1/search_by_date?query=angular&page=0');

    req.flush(testData);

  })

  it('it should request React data', () => {
    const testData: Data = {
      author: 'Test author React',
      story_title: 'Story title test React',
      story_url: 'Story url test React',
      created_at: 'somedate React'
    }

    service.getReactItems().subscribe(response =>{
      expect(response.author).toEqual('Test author React');
    });

    const req = httpTestingController.expectOne('http://localhost:4200/api/v1/search_by_date?query=reactjs&page=0');

    req.flush(testData);
  })

  it('it should request Vue data', () => {
    const testData: Data = {
      author: 'Test author Vue',
      story_title: 'Story title test Vue',
      story_url: 'Story url test Vue',
      created_at: 'somedate Vue'
    }

    service.getVueItems().subscribe(response =>{
      expect(response.author).toEqual('Test author Vue');
    });

    const req = httpTestingController.expectOne('http://localhost:4200/api/v1/search_by_date?query=vuetjs&page=0');

    req.flush(testData);
    
  })
});
