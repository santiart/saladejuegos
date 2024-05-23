import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAyorMenorComponent } from './mayor-menor.component';

describe('MAyorMenorComponent', () => {
  let component: MAyorMenorComponent;
  let fixture: ComponentFixture<MAyorMenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MAyorMenorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MAyorMenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
