import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickstatsComponent } from './quickstats.component';

describe('QuickstatsComponent', () => {
  let component: QuickstatsComponent;
  let fixture: ComponentFixture<QuickstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
