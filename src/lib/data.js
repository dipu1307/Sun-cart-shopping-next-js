export async function getCategories(){
    try{
        const res = await fetch("http://localhost:5000/categories", {
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error("Faild to fetch Categories");
        }
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.error("Error Fetching categories", error);
        return [];
    }
    
}
export async function getProducts(){
    try{
        const res = await fetch("http://localhost:5000/products", {
          cache: "no-store",
        });
        if(!res.ok){
            throw new Error("Faild to fetch Products");
        }
        const data = await res.json();
        console.log(data);
        return data;
    }
    catch(error){
        console.error("Error Fetching Products", error);
        return [];
    }
    
}
export async function getProductsById(id){
    
    try{
        const res = await fetch(`http://localhost:5000/products/${id}`,
            {
                cache:'no-store',
            }
        );
        if(!res.ok){
           return null;
        }
        const data = await res.json();
        console.log(data);
        return data;
        
        
    }
    catch(error){
        console.error("Error Fetching Data",error);

    }
}