import { client } from '../client'

const consumer = client.consumer({ groupId: 'test-group' })

async function consume () {

  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log('=== topic:', topic)
      console.log('=== partition:', partition)
      console.log('=== message', message)
      console.log({
        value: message?.value?.toString(),
      })
    },
  })
}

consume().then(() => console.log('finish consumer!'))
