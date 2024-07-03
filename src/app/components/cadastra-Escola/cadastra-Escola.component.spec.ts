
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastraEscolaComponent } from './cadastra-Escola.component';



describe('CadastraEscolaComponent', () => {
  let component: CadastraEscolaComponent;
  let fixture: ComponentFixture<CadastraEscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastraEscolaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastraEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
