function solution(record) {
  let history = []

  record.forEach(i => {
    const data = i.split(' ')
    let name
    const action = data[0]
    const id = data[1]

    if (data[2]) name = data[2]
    else name = ''

    switch (action) {
      case 'Enter':
        history.forEach(log => {
          if (id == log.id && name != log.name) log.name = name
        })
        history.push({ id, name, message: 'came in' })
        break;
      case 'Leave':
        history.forEach(log => {
          if (id == log.id) name = log.name
        })
        history.push({ id, name, message: 'has left' })
        break;
      case 'Change':
        history.forEach(log => {
          if (log.id == id) log.name = name
        });
        break;
    }
  })

  return history.map(result => `${result.name} ${result.message}`)
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))
