import axios from "axios";


const api = axios.create({
    baseURL: "https://fakestoreapi.com/products",
});


// HTTP GET METHOD
export const getPruductData = () => {
    return api.get("/all?fields=id,title,category,price,action");
};




// HTTP GET METHOD for the Indvi. country name


export const getProductIndData = (name) =>{
    return api.get(
        `/name/${name}?fullText=true&fields=id,title,category,price,action`,
    );
};

