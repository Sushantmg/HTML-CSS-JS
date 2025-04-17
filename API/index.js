const testDiv = document.getElementById("test")
async function fetchData() {
    try{
        let rawData =await fetch("https://fakestoreapi.com/products")

        if (!rawData.ok){
            throw new Error ("Fetch failed")
        }
        let data = await rawData.json()
        const dataforDiv =data.map((item) =>{
            return `<div class="card">
            <div class="title">${item.title} </div>
            <div  class="desc">${item.description}</div>
            <div  class="pp">$ ${item.price}</div>
            </div>`
        }
    )
    testDiv.innerHTML = dataforDiv.join(" ")

    }
    catch(error){
        console.log(error)
    }
    
}
fetchData()