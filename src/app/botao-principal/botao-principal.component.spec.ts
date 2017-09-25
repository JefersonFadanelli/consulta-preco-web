import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPrincipalComponent } from './botao-principal.component';

describe('BotaoPrincipalComponent', () => {
  let component: BotaoPrincipalComponent;
  let fixture: ComponentFixture<BotaoPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
