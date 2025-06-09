import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehandlungenComponent } from './behandlungen.component';

describe('BehandlungenComponent', () => {
  let component: BehandlungenComponent;
  let fixture: ComponentFixture<BehandlungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehandlungenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehandlungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
