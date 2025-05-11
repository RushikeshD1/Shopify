import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import ProductData from './ProductData';

const Product = () => {

    const [isData, setIsData] = useState([])
    const [isProduct, setIsProduct] = useState([])

    const navigate = useNavigate()

    const getValue = async (e) => {
        let text = e.target.innerText.toLowerCase();

        let category = text ? text : "electronic"
        
        const productApi = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
                        
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
    
    const fetchApi = async () => {
        try{            
            const response = await axios.get(`${api}`)
            setIsData(response.data); 
        }catch(err){
            console.log(err);            
        }  
                    
    }

    const handleNavigation = (item) => {
        navigate(`/product/${item.id}`, { state : { item } })
    }

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
            <li onClick={() => handleNavigation(item)} className='capitalize cursor-pointer hover:bg-gray-500 p-2 hover:text-white hover:rounded-md' key={index}>{item.title}</li>
        ))                
    }

  return (
    <div className='flex md:flex-row flex-col min-h-screen'>
        <div className='w-96 bg-black text-white flex flex-col text-left p-5 justify-start gap-10 px-10 text-2xl font-semibold'>        
            {renderData()}
        </div>
        <ul className='flex gap-8 text-left p-10 justify-start flex-col'>
            {renderCategory()}
        </ul>
    </div>
  ) 
}

export default Product