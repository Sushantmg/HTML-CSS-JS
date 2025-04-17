const testDiv = document.getElementById("test")
async function fetchData() {
    try{
        let rawData =await fetch("https://fakestoreapi.com/carts")

        if (!rawData.ok){
            throw new Error ("Fetch failed")
        }
        let data = await rawData.json()
        const dataforDiv =data.map((item) =>{
            return `<div class="card">
            <div class="id">${item.id} </div>
            <div  class="ui">${item.userid}</div>
            <div  class="pdid"> ${item.products.id}</div>
            
            <div  class="pdtitle"> ${item.products.title}</div>
            
            <div  class="pdpp"> ${item.products.price}</div>
            
            <div  class="pddesc"> ${item.products.description}</div>
            
<div  class="pdimg"> ${item.products.image}</div>
            
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