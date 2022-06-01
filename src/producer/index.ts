import { client } from '../client'

const producer = client.producer()

async function produce () {

  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: '박찬욱 감독상 축하' },
    ],
  })
  
  await producer.disconnect()
}
produce().then(() => console.log('finish producer'))
