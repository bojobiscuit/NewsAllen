import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TruckHighlightComponent } from './truck-highlight.component';

describe('TruckHighlightComponent', () => {
  let component: TruckHighlightComponent;
  let fixture: ComponentFixture<TruckHighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckHighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
