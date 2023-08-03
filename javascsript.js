const accessKey = `mBA83_djYl7qinFSmcuoq0mXdFQTZLRwbANtwgIcBSA`
const input = document.querySelector(".value")

async function search() {
  const userValue = input.value.trim()
  let pages = 108
  const res = await fetch(
    `https://api.unsplash.com/search/photos?page=1&per_page=${pages}&query=${userValue}&client_id=${accessKey}`
  )

  const data = await res.json()

  const names = data.results.map((item) => item.urls.small)
  const main = document.querySelector("#results")

  main.innerHTML = ""
  names.forEach((info) => {
    const img = document.createElement("img")
    img.setAttribute("src", info)

    main.appendChild(img)
  })
}

input.addEventListener("change", (e) => {
  search()
})
