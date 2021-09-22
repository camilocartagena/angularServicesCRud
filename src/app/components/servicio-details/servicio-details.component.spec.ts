import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioDetailsComponent } from './servicio-details.component';

describe('ServicioDetailsComponent', () => {
  let component: ServicioDetailsComponent;
  let fixture: ComponentFixture<ServicioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicioDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
