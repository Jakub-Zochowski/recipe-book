import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItemDefaultComponent } from './recipe-item-default.component';

describe('RecipeItemDefaultComponent', () => {
  let component: RecipeItemDefaultComponent;
  let fixture: ComponentFixture<RecipeItemDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeItemDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeItemDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
