import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscogerFavoritosComponent } from './escoger-favoritos.component';

describe('EscogerFavoritosComponent', () => {
  let component: EscogerFavoritosComponent;
  let fixture: ComponentFixture<EscogerFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscogerFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscogerFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
