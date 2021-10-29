import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteCurvoDuploTeleconicoFlangeadoComponent } from './poste-curvo-duplo-teleconico-flangeado.component';

describe('PosteCurvoDuploTeleconicoFlangeadoComponent', () => {
  let component: PosteCurvoDuploTeleconicoFlangeadoComponent;
  let fixture: ComponentFixture<PosteCurvoDuploTeleconicoFlangeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteCurvoDuploTeleconicoFlangeadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteCurvoDuploTeleconicoFlangeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
