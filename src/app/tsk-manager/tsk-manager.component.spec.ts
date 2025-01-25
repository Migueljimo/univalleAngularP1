import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TskManagerComponent } from './tsk-manager.component';

describe('TskManagerComponent', () => {
  let component: TskManagerComponent;
  let fixture: ComponentFixture<TskManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TskManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TskManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
