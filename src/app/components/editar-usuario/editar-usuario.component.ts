import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from './../../services/crud.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  templateUrl: './editar-usuario.component.html',
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
  styleUrls: ['./editar-usuario.component.scss'],
  providers: [CrudService]
})
export class EditarUsuarioComponent implements OnInit {
  formularioUsuarios: FormGroup;
  ID: any;
  usuario: any;
  erroCarregamento: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService,
    public formulario: FormBuilder,
    private routes:Router,
  ) {
    this.ID = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.formularioUsuarios = this.formulario.group({
      nome: ['', Validators.required],
      nomedb: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.crudService.mostrarUsuario(this.ID).subscribe(
      (response) => {
        
        
        if (Array.isArray(response) && response.length > 0) {
          this.formularioUsuarios.setValue({
            nome: response[0]['nome'] || '',
            nomedb: response[0]['nomedb'] || ''

            
        
          });
        }
      },
      (error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
       
          this.erroCarregamento = `Erro ao carregar usuário: ${error.error.message}`;
        } else {
          
          this.erroCarregamento = `Erro ${error.status} ao carregar usuário: ${error.message}`;
        }
        console.error(this.erroCarregamento);
      }
    );
    
  }
  enviarDados():any{
      console.log(this.ID);
      console.log(this.formularioUsuarios.value);
      this.crudService.editarUsuario(this.ID, this.formularioUsuarios.value).subscribe(() =>{
      this.routes.navigateByUrl('/listar-usuario');
      });
    
  
  
  
  }







}
