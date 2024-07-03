import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [CrudService]
})
export class LoginComponent {
  cpf: string = '';
  senha: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  onSubmit() {
    const user = { cpf: this.cpf, senha: this.senha };
    this.http.post('http://localhost/api/login.php', user)
      .subscribe((response: any) => {
        if (response.message === "Login successful") {
          // Armazena o ID do usuário no local storage
          localStorage.setItem('userId', response.id);
          // Redireciona para outra página após login bem-sucedido
          this.router.navigate(['/listar-usuario']);
        } else {
          console.error('Login falhou:', response.message);
        }
      });
  }
}
