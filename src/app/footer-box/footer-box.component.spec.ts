import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBoxComponent } from './footer-box.component';

describe('FooterBoxComponent', () => {
  let component: FooterBoxComponent;
  let fixture: ComponentFixture<FooterBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
