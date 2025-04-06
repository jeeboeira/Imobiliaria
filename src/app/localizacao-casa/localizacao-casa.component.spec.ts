import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacaoCasaComponent } from './localizacao-casa.component';

describe('LocalizacaoCasaComponent', () => {
  let component: LocalizacaoCasaComponent;
  let fixture: ComponentFixture<LocalizacaoCasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalizacaoCasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalizacaoCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
