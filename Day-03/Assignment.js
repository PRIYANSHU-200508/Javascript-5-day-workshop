async function myapi() {
  let data = await fetch('https://dummyjson.com/quotes')
  let result = await data.json()

  console.log(result.quotes[0].quote)
  console.log(result.quotes[0].author)

  console.log(result.quotes[1].quote)
  console.log(result.quotes[1].author)
}

myapi()
