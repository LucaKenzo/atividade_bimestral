import { Component } from '@angular/core';

@Component({
  selector: 'app-coletas',
  imports: [],
  templateUrl: './coletas.component.html',
  styleUrl: './coletas.component.css'
})
export class ColetasComponent {

  coletas: string[] = ["12/05/2025","13/05/2025","14/05/2025","15/05/2025","16/05/2025"]

  remover(index: number) {
    this.coletas.splice(index, 1);
  }

  coletaNova:any
  adicionar() {
    const inputElement = document.getElementById("ColetaInput") as HTMLInputElement;
    this.coletaNova = inputElement?.value;
    console.log(this.coletaNova)
    if (this.coletaNova == '') {
      this.coletaNova = ''
      alert('Campo Vazio')
      return;
    }

    this.coletas.push(this.coletaNova)
    inputElement.value = '';
  }
}
