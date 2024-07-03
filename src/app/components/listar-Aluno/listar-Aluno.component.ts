import { CrudService } from '../../services/crud.service';


import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-Aluno',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './listar-Aluno.component.html',
  styleUrl: './listar-Aluno.component.scss',
  providers: [CrudService] 
})
export class ListarAlunoComponent {
  Aluno:any;
  Escola: any;
  

  constructor(
    private crudService:CrudService,
    private router: Router 
  ){}

  ngOnInit():void{
    this.crudService.vizualizarAlunos().subscribe(
      response => {
        
        this.Aluno = response;
      },
      error => {
        console.error('Erro ao cadastrar usuário', error);
      }
    )
   
  }




  // excluirAluno(id: number): void {
  //   if (confirm("Você tem certeza que deseja excluir este usuário?")) {
  //     this.crudService.excluirAluno(id).subscribe(
  //       (response) => {
  //         if (response.success) {
  //           alert("Usuário excluído com sucesso!");
  //           location.reload();
  //           // Redirecionar ou atualizar a lista de usuários após a exclusão
  //         } else {
  //           alert("Falha ao excluir o usuário.");
  //         }
  //       },
  //     );
  //   }
  // }
}
