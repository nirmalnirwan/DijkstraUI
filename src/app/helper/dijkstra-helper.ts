// dijkstra-helper.ts

export type Edge = [number, number, number]; // [from, to, weight]

class MinHeap {
  private heap: [number, number][] = [];

  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private left(i: number): number {
    return 2 * i + 1;
  }

  private right(i: number): number {
    return 2 * i + 2;
  }

  private heapifyUp(index: number) {
    while (index > 0 && this.heap[this.parent(index)][0] > this.heap[index][0]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private heapifyDown(index: number) {
    const size = this.heap.length;
    while (true) {
      let smallest = index;
      const left = this.left(index);
      const right = this.right(index);

      if (left < size && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }

      if (right < size && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }
  }

  push(item: [number, number]) {
    this.heap.push(item);
    this.heapifyUp(this.heap.length - 1);
  }

  pop(): [number, number] {
    if (this.heap.length === 0) {
      throw new Error("Heap is empty");
    }

    const min = this.heap[0];
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }
    return min;
  }

  size(): number {
    return this.heap.length;
  }
}

function constructAdj(edges: Edge[], V: number): Array<Array<[number, number]>> {
  const adj: Array<Array<[number, number]>> = Array.from({ length: V }, () => []);
  for (const [u, v, w] of edges) {
    adj[u].push([v, w]);
    // adj[v].push([u, w]); // Uncomment if graph is undirected
  }
  return adj;
}

export function dijkstra(V: number, edges: Edge[], src: number): number[] {
  const adj = constructAdj(edges, V);
  const minHeap = new MinHeap();
  const dist: number[] = Array(V).fill(Number.MAX_SAFE_INTEGER);

  minHeap.push([0, src]);
  dist[src] = 0;

  while (minHeap.size() > 0) {
    const [d, u] = minHeap.pop();

    for (const [v, weight] of adj[u]) {
      if (dist[v] > dist[u] + weight) {
        dist[v] = dist[u] + weight;
        minHeap.push([dist[v], v]);
      }
    }
  }

  return dist;
}
