import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteCurvoDuploTeleconicoEngastadoComponent } from './poste-curvo-duplo-teleconico-engastado.component';

describe('PosteCurvoDuploTeleconicoEngastadoComponent', () => {
  let component: PosteCurvoDuploTeleconicoEngastadoComponent;
  let fixture: ComponentFixture<PosteCurvoDuploTeleconicoEngastadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteCurvoDuploTeleconicoEngastadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteCurvoDuploTeleconicoEngastadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
