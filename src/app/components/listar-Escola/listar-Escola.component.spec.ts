import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarEscolaComponent } from './listar-Escola.component';



describe('listarEscolaComponent', () => {
  let component: ListarEscolaComponent;
  let fixture: ComponentFixture<ListarEscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarEscolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
