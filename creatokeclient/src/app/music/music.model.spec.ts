import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicModel } from './music.model';

describe('MusicModel', () => {
  let component: MusicModel;
  let fixture: ComponentFixture<MusicModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicModel ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
