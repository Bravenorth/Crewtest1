import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetshiplistComponent } from './fleetshiplist.component';

describe('FleetshiplistComponent', () => {
  let component: FleetshiplistComponent;
  let fixture: ComponentFixture<FleetshiplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetshiplistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetshiplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
