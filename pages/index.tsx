import React from 'react'

const Home = () => {
  const [name, setName] = React.useState('')

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const log = async () => {
    let n: string = 'Anon'
    if (name.trim() !== '') n = name

    await fetch('/api/sayHello', {
      method: 'POST',
      body: JSON.stringify({ name: n }),
    })
  }

  return (
    <div>
      <h1>Quirrel Log</h1>
      <input
        placeholder="Enter your name..."
        value={name}
        onChange={changeName}
      />
      <button onClick={log}>Log to the Console</button>
    </div>
  )
}

export default Home
