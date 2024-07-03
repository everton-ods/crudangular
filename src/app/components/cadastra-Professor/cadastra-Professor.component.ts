import { Professor } from '../../services/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastra-Professor',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule, FormsModule, HttpClientModule ],
  templateUrl: './cadastra-Professor.component.html',
  styleUrl: './cadastra-Professor.component.scss',
  providers: [CrudService] 
})
export class CadastraProfessorComponent implements OnInit {
  
  formularioProfessor: FormGroup
  Escola: any;
  Professor: any;
  
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private routes:Router
  
  ) { 
    this.formularioProfessor = this.formulario.group({
      endereco: ['', Validators.required],
      nome: ['', Validators.required],
      DropEscola: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      senha: ['', Validators.required],
    })

  }
  ngOnInit(): void {
    this.crudService.vizualizarEscola().subscribe(
      response => {
        
        this.Escola = response;
      },
      error => {
        console.error('Erro ao usuário', error);
      }
    )
  
  }
  enviarDados(): any {
    console.log("sim");
    console.log(this.formularioProfessor.value);
    this.crudService.CadastraProfessor(this.formularioProfessor.value).subscribe(
      response => {
        
      },
      error => {
        console.error('Erro ao cadastrar usuário', error);
      }
    );
    this.routes.navigateByUrl('/listar-Professor');
  }

}
