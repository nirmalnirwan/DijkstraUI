import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dijkstra, Edge } from '../helper/dijkstra-helper'; 


@Component({
  selector: 'app-dijkstra-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dijkstra-calculator.html',
  styleUrls: ['./dijkstra-calculator.css']
})
export class DijkstraCalculatorComponent {
  nodes = ['A', 'B', 'C', 'D', 'E'];
  fromNode = '';
  toNode = '';
  result: string = '';
  isShowResult : boolean = false;

  // Example graph
  private edges: Edge[] = [
    [0, 1, 4],
    [0, 2, 1],
    [2, 1, 2],
    [1, 3, 1],
    [2, 3, 5],
    [3, 4, 3]
  ];
  
calculate() {
    const fromIndex = this.nodes.indexOf(this.fromNode);
    const toIndex = this.nodes.indexOf(this.toNode);
    const V = this.nodes.length;

    if (fromIndex === -1 || toIndex === -1) {
      alert("Please select valid nodes.");
      return;
    }

    const distances = dijkstra(V, this.edges, fromIndex);
    this.isShowResult = true;
    const distance = distances[toIndex];
    this.result =
      distance === Number.MAX_SAFE_INTEGER
        ? `No path from ${this.fromNode} to ${this.toNode}`
        : `Shortest distance from ${this.fromNode} to ${this.toNode} is ${distance}`;
  }

  clear() {
    this.fromNode = '';
    this.toNode = '';
    this.result = '';
    this.isShowResult = false;
  }  
}
