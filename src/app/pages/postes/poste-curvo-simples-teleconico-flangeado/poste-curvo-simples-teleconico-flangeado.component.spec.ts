import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteCurvoSimplesTeleconicoFlangeadoComponent } from './poste-curvo-simples-teleconico-flangeado.component';

describe('PosteCurvoSimplesTeleconicoFlangeadoComponent', () => {
  let component: PosteCurvoSimplesTeleconicoFlangeadoComponent;
  let fixture: ComponentFixture<PosteCurvoSimplesTeleconicoFlangeadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteCurvoSimplesTeleconicoFlangeadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteCurvoSimplesTeleconicoFlangeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
