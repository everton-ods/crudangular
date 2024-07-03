
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastraAlunoComponent } from './cadastra-Aluno.component';



describe('CadastraAlunoComponent', () => {
  let component: CadastraAlunoComponent;
  let fixture: ComponentFixture<CadastraAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastraAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastraAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
