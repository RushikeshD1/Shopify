import axios from 'axios';
import React, { useEffect, useState } from 'react'

const User = () => {

    const [isSelected, setIsSelected] = useState("All");
    const [ isUser, setIsUSer] = useState([]);
    const [isFilterdUser, setIsFilterdUser] = useState([])

    const api = "https://randomuser.me/api/?results=20"

    const userApi = async () => {
        try {
            const response = await axios.get(`${api}`)
            setIsUSer(response.data.results);
        } catch (error) {
            console.log(error);            
        }             
    }

    useEffect(() => {
        userApi();        
    }, [])

    const handledCheckbox = (e) => {
        let value = e.target.value;
        if(isSelected === value){
            setIsSelected("");

        }else{
            setIsSelected(value);
        };           
    };
    
    useEffect(() => {        
        const filterUser = isSelected === 'All' ? isUser : isUser.filter((item) => item.gender === isSelected.toLowerCase());
        setIsFilterdUser(filterUser)
    }, [isSelected, isUser]);         

    const renderTableData = () => {
        return isFilterdUser.map((item,index) => (
            <tr className='p-2' key={index}>
                <td className='text-center flex flex-row justify-center border-r border-b border-gray-400 '><img className='text-center' src={item.picture.medium} alt="user_Image"/></td>
                <td className='text-center border-r border-b border-gray-400'>{item.name.first}</td>
                <td className='text-center border-r border-b border-gray-400'>{item.email}</td>
                <td className='text-center border-b border-gray-400'>{item.gender}</td>
            </tr>
        ))              
    }

  return (
    <div className='flex flex-col px-10 py-4 gap-4'>
        <h1 className='font-semibold text-2xl'>User Deatils</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt doloribus recusandae cupiditate nobis explicabo nemo a dignissimos nihil nesciunt, dolorum, deleniti voluptatum ex voluptate, consequuntur omnis laudantium voluptas quos distinctio velit tenetur aliquam! Commodi cum ipsum mollitia placeat expedita ab.</p>

        <div>
            <table className='w-full'>
                <thead className='border border-black'>                               
                    <tr className='w-full flex flex-row justify-between px-20'>
                        <td className='p-2 text-left'><input onChange={handledCheckbox} type="checkbox" checked={isSelected === "All"} value="All" /> All</td>
                        <td className='p-2 text-left'><input onChange={handledCheckbox} type="checkbox" checked={isSelected === "Male"} value="Male" /> Male</td>
                        <td className='p-2 text-left'><input onChange={handledCheckbox} type="checkbox" checked={isSelected === "Female"} value="Female" /> Female</td>
                    </tr>
                </thead>
            </table>
        </div>

        <div>
            <table className='w-full border border-gray-400'>
                <thead>
                    <tr className=' bg-black text-white'>
                        <td className='border-r border-gray-400 w-44 text-center'>Image</td>
                        <td className='border-r border-gray-400 w-36 text-center'>Name</td>
                        <td className='border-r border-gray-400 w-80 text-center'>Email</td>
                        <td className='w-20 text-center'>Gender</td>
                    </tr>
                </thead>
                <tbody className='border border-gray-400'>
                    {renderTableData()}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User