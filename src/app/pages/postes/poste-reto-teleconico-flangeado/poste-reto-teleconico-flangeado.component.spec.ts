import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteRetoTeleconicoFlangeadoComponent } from './poste-reto-teleconico-flangeado.component';

describe('PosteRetoTeleconicoFlangeadoComponent', () => {
  let component: PosteRetoTeleconicoFlangeadoComponent;
  let fixture: ComponentFixture<PosteRetoTeleconicoFlangeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteRetoTeleconicoFlangeadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteRetoTeleconicoFlangeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
