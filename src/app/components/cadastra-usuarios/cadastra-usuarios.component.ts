import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';
import { noop } from 'rxjs';

@Component({
  selector: 'app-cadastra-usuarios',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, HttpClientModule ],
  templateUrl: './cadastra-usuarios.component.html',
  styleUrl: './cadastra-usuarios.component.scss',
  providers: [CrudService] 
})
export class CadastraUsuariosComponent implements OnInit {
  
  formularioUsuarios: FormGroup
  
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private routes:Router
  
  ) { 
    this.formularioUsuarios = this.formulario.group({
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\\d{3}\\d{3}\\d{2}$/)]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      nascimento: ['', Validators.required],
      
    })
  }
  ngOnInit(): void {
  
  }
  enviarDados(): any {
    console.log("sim");
    console.log(this.formularioUsuarios.value);
    this.crudService.CadastraUsuario(this.formularioUsuarios.value).subscribe(
      response => {
        console.log(response);
        
      },
      error => {
        console.error('Erro ao cadastrar usuário', error);
      }
    );
    this.routes.navigateByUrl('/listar-usuario');
  }

}
