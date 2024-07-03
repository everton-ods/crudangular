import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from '../../services/crud.service';
import { Router } from '@angular/router';
import { config } from '../../app.config.server';
import { Usuario, Escola } from '../../services/usuario';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { response } from 'express';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cadastra-Escola',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule, FormsModule, HttpClientModule ],
  templateUrl: './cadastra-Escola.component.html',
  styleUrl: './cadastra-Escola.component.scss',
  providers: [CrudService] 
})
export class CadastraEscolaComponent implements OnInit {
  
  formularioEscola: FormGroup
  Escola: any;
  
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private routes:Router
  
  ) { 
    this.formularioEscola = this.formulario.group({
      endereco: ['', Validators.required],
      nome: ['', Validators.required],
      
      
      
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
    console.log(this.formularioEscola.value);
    this.crudService.CadastraEscola(this.formularioEscola.value).subscribe(
      response => {
        
      },
      error => {
        console.error('Erro ao cadastrar usuário', error);
      }
    );
    this.routes.navigateByUrl('/listar-Escola');
  }

}
