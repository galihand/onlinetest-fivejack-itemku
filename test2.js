/**
 * get failure rate of each stage
 * reached but not clear / all reached players
 * 
 * return array the stage in descending highest failure rate
 * N = total stage
 * 
 * LIMITATIONS
 * - N = 1 - 500
 * - users.length = 1 - 200.000
 * - users contain = 1 - N+1
 * - Number user represent current stage
 * - N+1 cleared last stage
 * - if Same failure rate, the small stage should be first
 * - if no user reached. failure stage 0
 */

function solution(N, users) {
  var answer = [];
  let data = []
  if (1 <= N <= 500) {
    if (1 <= users.length <= 200.000) {
      for (let i = 0; i < N; i++) {
        let play = 0
        let fail = 0
        users.forEach(res => {
          if (res >= i + 1) play++;
          if (res == i + 1) fail++;
          // console.log(play);
        });
        data.push({
          stage: i + 1,
          rate: fail / play
        })
      }
    }
  }

  data = data.sort((a, b) => {
    return b.rate - a.rate
  });
  data.forEach(res => answer.push(res.stage))

  return answer
}