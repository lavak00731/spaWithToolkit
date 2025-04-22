export const getProducts = async (productsPerPage:number, skip:number, signal: AbortSignal) =>{   
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip * productsPerPage}`, {signal});
        if(response.ok) {
            const rawResponse = await response;
            const list = await rawResponse.json();
            console.log(list)
            return list;
        }     
    } catch (error) {
        console.log(error)
    }
}
