import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildSkillsComponent } from './child-skills.component';

describe('ChildSkillsComponent', () => {
  let component: ChildSkillsComponent;
  let fixture: ComponentFixture<ChildSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildSkillsComponent]
    });
    fixture = TestBed.createComponent(ChildSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
