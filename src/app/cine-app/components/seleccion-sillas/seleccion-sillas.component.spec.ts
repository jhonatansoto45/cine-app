import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionSillasComponent } from './seleccion-sillas.component';

describe('SeleccionSillasComponent', () => {
  let component: SeleccionSillasComponent;
  let fixture: ComponentFixture<SeleccionSillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionSillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionSillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
