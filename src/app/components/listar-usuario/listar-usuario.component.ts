import { CrudService } from './../../services/crud.service';


import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.scss',
  providers: [CrudService] 
})
export class ListarUsuarioComponent {
  Usuario:any;
  Escola: any;

  constructor(
    private crudService:CrudService,
    private router: Router 
  ){}

  ngOnInit():void{
    this.crudService.vizualizarUsuarios().subscribe(
      response => {
        
        this.Usuario = response;
      },
      error => {
        console.error('Erro ao cadastrar usuário', error);
      }
    )
   
  }




  excluirUsuario(id: number): void {
    if (confirm("Você tem certeza que deseja excluir este usuário?")) {
      this.crudService.excluirUsuario(id).subscribe(
        (response) => {
          if (response.success) {
            alert("Usuário excluído com sucesso!");
            location.reload();
            // Redirecionar ou atualizar a lista de usuários após a exclusão
          } else {
            alert("Falha ao excluir o usuário.");
          }
        },
      );
    }
  }
}
