import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuporteParaPostesRetosComponent } from './suporte-para-postes-retos.component';

describe('SuporteParaPostesRetosComponent', () => {
  let component: SuporteParaPostesRetosComponent;
  let fixture: ComponentFixture<SuporteParaPostesRetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuporteParaPostesRetosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuporteParaPostesRetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
