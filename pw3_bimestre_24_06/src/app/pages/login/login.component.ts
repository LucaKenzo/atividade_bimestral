import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup
  private readonly usuarioCadastrado = 'simsoueu@gmail.com'
  private readonly senhaCadastrado = '*123456has*'

  constructor(private fb: FormBuilder)
  {
    this.loginForm = this.fb.group
    ({
      usuario: this.fb.control,
      senha: this.fb.control
    })
  }

  efetuarLogin()
  {
    let usuario = this.loginForm.get('usuario')?.value;
    let senha = this.loginForm.get('senha')?.value;
    if (usuario == this.usuarioCadastrado && senha == this.senhaCadastrado)
    {
      alert("Login efetuado com sucesso")
    }
    else
    {
      alert("Usuário/Senha Inválido!")
    }
  }

}
