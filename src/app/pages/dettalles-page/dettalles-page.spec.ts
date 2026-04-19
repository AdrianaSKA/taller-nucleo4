import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettallesPage } from './dettalles-page';

describe('DettallesPage', () => {
  let component: DettallesPage;
  let fixture: ComponentFixture<DettallesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettallesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DettallesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
