import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracosGalvanizadosComponent } from './bracos-galvanizados.component';

describe('BracosGalvanizadosComponent', () => {
  let component: BracosGalvanizadosComponent;
  let fixture: ComponentFixture<BracosGalvanizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BracosGalvanizadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BracosGalvanizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
