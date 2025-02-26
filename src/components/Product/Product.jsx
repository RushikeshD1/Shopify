import React, { use, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";

const Product = () => {

    const [isData, setIsData] = useState([])
    const [isProduct, setIsProduct] = useState([])

    // const productsApi = ["electronic", "jewelery", "men's clothing", "women's clothing"];
    const getValue = async (e) => {
        let text = e.target.innerText.toLowerCase();

        let category = text ? text : "electronic"
        
        const productApi = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        // console.log(productApi);
        
        setIsProduct(productApi.data);        
    }

    const electronicCategory = async () => {
        try {
            const productApi = await axios.get("https://fakestoreapi.com/products/category/electronics");
            setIsProduct(productApi.data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };
    
    const api = "https://fakestoreapi.com/products/categories"
    // const api1 = ``

    const fetchApi = async () => {
        try{            
            const response = await axios.get(`${api}`)
            setIsData(response.data); 
        }catch(err){
            console.log(err);            
        }  
                    
    }

    // const allProduct = async () => {
    //     const response = await axios.get(`${api1}`)
    // }

    useEffect(() => {
        fetchApi(); 
        electronicCategory()      
    }, [])

    const renderData = () => {
        return isData.map((item,index) => (
            <div onClick={getValue} className=' capitalize cursor-pointer' key={index}>{item}</div>
        ))                
    }

    const renderCategory = () => {
        return isProduct.map((item,index) => (
            <div className=' capitalize cursor-pointer hover:bg-gray-500 p-2 hover:text-white hover:rounded-md' key={index}>{item.title}</div>
        ))                
    }

  return (
    <div className='flex flex-row min-h-screen'>
        <div className='w-96 bg-black text-white flex flex-col text-left p-5 justify-start gap-10 px-10 text-2xl font-semibold'>        
            {renderData()}
        </div>
        <div className='flex gap-8 text-left p-10 justify-start flex-col'>
            {renderCategory()}
        </div>
    </div>
  ) 
}

export default Product