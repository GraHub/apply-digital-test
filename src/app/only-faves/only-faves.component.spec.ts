import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyFavesComponent } from './only-faves.component';

describe('OnlyFavesComponent', () => {
  let component: OnlyFavesComponent;
  let fixture: ComponentFixture<OnlyFavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyFavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyFavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
