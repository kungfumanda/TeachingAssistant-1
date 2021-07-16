import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "Insira nome", cpf: "Insira CPF", email: "Insira email", login: "Insira login do github"};
   title = 'ta-gui';
}

export class Aluno {
  nome!: string;
  cpf!: string;
  email!: string;
  login!: string;
}
