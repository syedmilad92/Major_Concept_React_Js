import React, { useState } from 'react'

export const  SearchComponent = React.memo(({ data }) => {
    console.log("data==>",data)
    const [query,setQuery] = useState("")
    const [filteredData,setFiteredData] = useState(null)
    const handleInputChange = (e) =>{
        console.log("input changing...")
        const value = e.target.value;
        setQuery(value)
        firterData(value)
    }
    const firterData = (value) =>{
        console.log("calling....")
        const lowerCaseValue = value.toLowerCase().trim()
        if(!lowerCaseValue){
            setFiteredData([]);
            return 
        }
        console.log("filter")
        const filterd = data.filter((item,index)=> item.toLowerCase().includes(lowerCaseValue))
        console.log("filterd==>",filterd)
        setFiteredData(filterd)
    }
    return (
        <div>
            <h1>search functionality</h1>
            <input type="text" placeholder='Search...' value={query} onChange={handleInputChange} />

            <ul>
                {filteredData?.length > 0 ? filteredData?.map((item,index)=>{
                    return (
                        <li key={index+1} >{item}</li>
                    )
                }): `${query} is not found....`}
            </ul>
        </div>
    )
})