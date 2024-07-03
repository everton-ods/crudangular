import { Professor } from './../../services/usuario';
import { Aluno } from '../../services/usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastra-Aluno',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule, FormsModule, HttpClientModule ],
  templateUrl: './cadastra-Aluno.component.html',
  styleUrl: './cadastra-Aluno.component.scss',
  providers: [CrudService] 
})
export class CadastraAlunoComponent implements OnInit {
  
  formularioAluno: FormGroup
  Escola: any;
  Aluno: any;
  Professor: any;
  
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private routes:Router
  
  ) { 
    this.formularioAluno = this.formulario.group({
      
      nome: ['', Validators.required],
      DropProf: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
     
    })

  }
  ngOnInit(): void {
    this.crudService.vizualizarProfessor().subscribe(
      response => {
        
        this.Professor = response;
      },
      error => {
        console.error('Erro ao usuário', error);
      }
    )
  
  }
  enviarDados(): any {
    console.log("sim");
    console.log(this.formularioAluno.value);
    this.crudService.CadastraAluno(this.formularioAluno.value).subscribe(
      response => {
       
      },
      error => {
        console.error('Erro ao cadastrar usuário', error);
      }
    );
    this.routes.navigateByUrl('/listar-Aluno');
  }

}
