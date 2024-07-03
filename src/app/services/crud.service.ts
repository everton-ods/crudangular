import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Escola, Usuario, Professor, Aluno } from './usuario';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  API: string = 'http://localhost/crud-angular-php-api/api/';
  

  constructor(private clienteHttp: HttpClient) {}

  CadastraUsuario(dadosUsuario: Usuario): Observable<any> {
    return this.clienteHttp.post<any>(
      `${this.API}?cadastrarUsuario=1`,
      dadosUsuario
    );
  }

  vizualizarUsuarios() {
    return this.clienteHttp.get(`${this.API}?user`);
  }
  vizualizarEscola() {
    return this.clienteHttp.get(`${this.API}?userEscola`);
  }
  vizualizarProfessor() {
    return this.clienteHttp.get(`${this.API}?userProfessor`);
  }
  vizualizarAlunos() {
    return this.clienteHttp.get(`${this.API}?userAluno`);
  }

  excluirUsuario(id: number): Observable<any> {
    return this.clienteHttp.get(`${this.API}?Excluir=${id}`);
  }

  mostrarUsuario(id: any): Observable<any> {
    return this.clienteHttp.get(`${this.API}?consultar=${id}`);
  }
  editarUsuario(id: any, dadosUsuario: any): Observable<any> {
    return this.clienteHttp.post<any>(
      `${this.API}?atualizar=${id}`,
      dadosUsuario
    );
  }

  CadastraEscola(dadosEscola: Escola): Observable<any> {
    return this.clienteHttp.post<any>(
      `${this.API}?cadastrarEscola=1`,
      dadosEscola
    );
  }
  CadastraProfessor(dadosProfessor: Professor): Observable<any> {
    return this.clienteHttp.post<any>(
      `${this.API}?cadastrarProfessor=1`,
      dadosProfessor
    );
  }
  CadastraAluno(dadosAluno: Aluno): Observable<any> {
    return this.clienteHttp.post<any>(
      `${this.API}?cadastrarAluno=1`,
      dadosAluno
    );
  }
}
