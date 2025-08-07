import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DijkstraCalculatorComponent } from './dijkstra-calculator/dijkstra-calculator';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule, DijkstraCalculatorComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('DijkstraUI');
}
