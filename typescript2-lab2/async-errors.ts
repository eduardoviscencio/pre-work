type urlParam = 'success' | 'error'

type FetchResponse = {
  status: string
  data: number[]
}

type FetchedData = number[]

type ProcessedData = number[]

const fetchData = (url: urlParam): Promise<FetchResponse> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === 'success') {
        const data: FetchResponse = {
          status: 'success',
          data: [1, 2, 3, 4, 5]
        }

        resolve(data)
      }

      reject('An error has occurred')
    }, 2000)
  })

const processData = (fetchedData: FetchedData): Promise<ProcessedData> =>
  new Promise(resolve => {
    setTimeout(() => {
      const processedData: ProcessedData = fetchedData.map(num => num * 2)

      resolve(processedData)
    }, 1000)
  })

const displayData = (processedData: ProcessedData): Promise<void> =>
  new Promise(resolve => {
    console.log(processedData)
    resolve()
  })

const fetchAndProcessData = async () => {
  try {
    const fetchedData = await fetchData('success')
    const processedData = await processData(fetchedData.data)
    await displayData(processedData)
  } catch (e) {
    console.log(e)
  }
}

fetchAndProcessData()
