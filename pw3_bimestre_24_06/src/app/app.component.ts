import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { ColetasComponent } from "./pages/coletas/coletas.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ColetasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3_bimestre_24_06';
}
