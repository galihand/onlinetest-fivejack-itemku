function solution(relation) {
  let answer = 0;
  const colPerRow = relation[0].length
  let candidates = [];

  for (let i = 0; i < colPerRow; i++) {
    let col = []
    relation.map(rel => col.push(rel[i]))
    if (new Set(col).size == col.length) {
      answer++
      candidates.push(i)
    }
  }

  for (let i = 0; i < colPerRow; i++) {
    for (let j = 0; j < colPerRow; j++) {
        const current = candidates.findIndex(cur => cur === i) > -1;
        const next = candidates.findIndex(next => next === j) > -1;
        if (!current && !next) {
            const col = relation.map(rel => `${rel[i]} ${rel[j]}`);
            if (new Set(col).size == col.length) {
                candidates.push(i);
                candidates.push(j);
                answer++;
            }
        }
    }
}
  return answer;
}