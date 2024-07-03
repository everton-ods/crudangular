
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastraProfessorComponent } from './cadastra-Professor.component';



describe('CadastraProfessorComponent', () => {
  let component: CadastraProfessorComponent;
  let fixture: ComponentFixture<CadastraProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastraProfessorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastraProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
