import React, { useMemo } from "react";
import './App.css';

export const Table = ({dataa,searchhh}) => {

    

    const searching = useMemo(() => {
        if (searchhh) {
            return dataa.filter((item) => item.fname.toLowerCase().includes(searchhh.toLowerCase()))
        } else
            return dataa 
    }, [searchhh, dataa])



    return(
    <>


        <table>
            <thead>
                <th>First name</th>
                <th>Email</th>
                <th>Password</th>
                <th>City</th>
              
            </thead>
            <tbody>
                {searching.map((item)=>{
                    return(
                        <tr>
                            <td>{item.fname}</td>
                            <td>{item.email}</td>
                            <td>{item.pass}</td>
                            <td>{item.city}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>


    </>
    )
}

