import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HojitaComponent } from './hojita.component';

describe('HojitaComponent', () => {
  let component: HojitaComponent;
  let fixture: ComponentFixture<HojitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HojitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HojitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
