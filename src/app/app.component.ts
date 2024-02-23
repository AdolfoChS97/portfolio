import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GreetingsComponent } from './components/greetings/greetings.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavBarComponent,
    GreetingsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
