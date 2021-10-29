import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteCurvoSimplesTeleconicoEngastadoComponent } from './poste-curvo-simples-teleconico-engastado.component';

describe('PosteCurvoSimplesTeleconicoEngastadoComponent', () => {
  let component: PosteCurvoSimplesTeleconicoEngastadoComponent;
  let fixture: ComponentFixture<PosteCurvoSimplesTeleconicoEngastadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosteCurvoSimplesTeleconicoEngastadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosteCurvoSimplesTeleconicoEngastadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
