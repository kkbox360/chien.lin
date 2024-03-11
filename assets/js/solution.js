function solution(A, B) {
  const N = A.length;

  // adjacency list
  const graph = {};
  for (let i = 0; i < N; i++) {
    const fromNode = A[i];
    const toNode = B[i];
    if (!(fromNode in graph)) {
      graph[fromNode] = [];
    }
    graph[fromNode].push(toNode);
  }

  const dfs = (node, visited, path) => {
    visited[node] = true;
    path.push(node);

    // traverse all neighbors
    for (let neighbor of graph[node] || []) {
      if (!visited[neighbor]) {
        if (dfs(neighbor, visited, path)) {
          return true;
        }
      } else if (neighbor === path[0] && Object.keys(visited).length === N) {
        return true;
      }
    }

    path.pop();
    return false;
  };

  if (dfs(1, {}, [])) return true;

  // found no cycle
  return false;
}

console.log(solution([3, 1, 2], [2, 3, 1])); // Output: true
console.log(solution([1, 2, 1], [2, 3, 3])); // Output: false
console.log(solution([1, 2, 3, 4], [2, 1, 4, 4])); // Output: false
console.log(solution([1, 2, 3, 4], [2, 1, 4, 3])); // Output: false
console.log(solution([1, 2, 2, 3, 3], [2, 3, 3, 4, 5])); // Output: false
