import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionTorneos } from './creacion-torneos';

describe('CreacionTorneos', () => {
  let component: CreacionTorneos;
  let fixture: ComponentFixture<CreacionTorneos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionTorneos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionTorneos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
