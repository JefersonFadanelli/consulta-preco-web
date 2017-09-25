import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPrincipalComponent } from './input-principal.component';

describe('InputPrincipalComponent', () => {
  let component: InputPrincipalComponent;
  let fixture: ComponentFixture<InputPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
