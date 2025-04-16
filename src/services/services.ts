const getProducts = async (productsPerPage:number, skip:number) =>{   
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip * productsPerPage}`);
        if(response.ok) {
            const rawResponse = await response;
            const list = await rawResponse.json();
            return list;
        }     
    } catch (error) {
        console.log(error)
    }
}
export default getProducts;