import type { ComponentFixture} from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { BotonComponent } from './boton.component';

describe('BotonComponent', () => {
  let component: BotonComponent;
  let fixture: ComponentFixture<BotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
