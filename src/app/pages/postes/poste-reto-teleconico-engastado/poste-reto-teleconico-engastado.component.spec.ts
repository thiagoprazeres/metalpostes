import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteRetoTeleconicoEngastadoComponent } from './poste-reto-teleconico-engastado.component';

describe('PosteRetoTeleconicoEngastadoComponent', () => {
  let component: PosteRetoTeleconicoEngastadoComponent;
  let fixture: ComponentFixture<PosteRetoTeleconicoEngastadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteRetoTeleconicoEngastadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteRetoTeleconicoEngastadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
