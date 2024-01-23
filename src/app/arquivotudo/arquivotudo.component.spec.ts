import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivotudoComponent } from './arquivotudo.component';

describe('ArquivotudoComponent', () => {
  let component: ArquivotudoComponent;
  let fixture: ComponentFixture<ArquivotudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArquivotudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArquivotudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
