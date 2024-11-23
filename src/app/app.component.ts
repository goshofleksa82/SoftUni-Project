import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HederComponent } from "./core/heder/heder.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HederComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project-defense-SoftUni';
}
