import { Queue } from 'quirrel/next'

export default Queue('api/queues/hello', async (name) => {
  console.log(`Welcome, ${name} 💩`)
})
