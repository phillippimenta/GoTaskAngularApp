import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  imports: [HeaderComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
