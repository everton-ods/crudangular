import { CadastraProfessorComponent } from './components/cadastra-Professor/cadastra-Professor.component';
import { Routes } from '@angular/router';
import { CadastraUsuariosComponent } from './components/cadastra-usuarios/cadastra-usuarios.component'; 
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component'; 
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component'; 
import { CadastraEscolaComponent } from './components/cadastra-Escola/cadastra-Escola.component';
import { CadastraAlunoComponent } from './components/cadastra-Aluno/cadastra-Aluno.component';
import { LoginComponent } from './pages/login/login.component';
import { ListarProfessorComponent } from './components/listar-Professor/listar-Professor.component';
import { ListarAlunoComponent } from './components/listar-Aluno/listar-Aluno.component'; 
import { ListarEscolaComponent } from './components/listar-Escola/listar-Escola.component';




export const routes: Routes = [
    { path: 'cadastra-usuarios', component: CadastraUsuariosComponent },
    { path: 'cadastra-Escola', component: CadastraEscolaComponent },
    { path: 'cadastra-Professor', component: CadastraProfessorComponent },
    { path: 'cadastra-Aluno', component: CadastraAlunoComponent },
    { path: 'editar-usuario/:id', component: EditarUsuarioComponent },
    { path: 'listar-usuario', component: ListarUsuarioComponent },
    { path: 'listar-Professor', component: ListarProfessorComponent },
    { path: 'listar-Aluno', component: ListarAlunoComponent },
    { path: 'listar-Escola', component: ListarEscolaComponent},
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'cadastra-usuarios', pathMatch: 'full' }
];

