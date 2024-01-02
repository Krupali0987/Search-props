import React, { useState } from "react";
import { Table } from "./table";
import './App.css';


export const Search = () => {

    const [searchhh, setSearchhh] = useState();

    const [inputdata, setInputdata] = useState({
        fname: "",
        email: "",
        pass: "",
        city: "",
    })

    const handleChange = (e) => {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value })
    }

    const [data, setData] = useState(JSON.parse(localStorage.getItem("search")) || []);

    const handleSubmit = () => {
        setData([...data, inputdata]);
        localStorage.setItem('search', JSON.stringify([...data, inputdata]));
        console.log(data);
    }



    return (
        <>

            <div className="bg">
                <div>
                   
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div>
                          
                            <div style={{ marginTop: "20px" }}>
                                <label htmlFor="fname" style={{ fontSize: "20px" }}>First Name : </label>
                                <input type="text" name="fname" placeholder="enter your name" onChange={(e) => handleChange(e)} value={inputdata.fname} style={{ width: "300px", padding: "8px", marginLeft: "10px" }} />
                            </div>

                            <div style={{ marginTop: "20px" }}>
                                <label htmlFor="email" style={{ fontSize: "20px" }}>Email : </label>
                                <input type="email" name="email" placeholder="enter your email" onChange={(e) => handleChange(e)} value={inputdata.email} style={{ width: "300px", padding: "8px", marginLeft: "13%" }} />
                            </div>

                            <div style={{ marginTop: "20px" }}>
                                <label htmlFor="pass" style={{ fontSize: "20px" }}>Password : </label>
                                <input type="password" name="pass" placeholder="enter your password" onChange={(e) => handleChange(e)} value={inputdata.pass} style={{ width: "300px", padding: "8px", marginLeft: "22px" }} />
                            </div>

                            <div style={{ marginTop: "20px" }}>
                                <label htmlFor="city" style={{ fontSize: "20px" }}>City : </label>
                                <input type="city" name="city" placeholder="enter your city name" onChange={(e) => handleChange(e)} value={inputdata.city} style={{ width: "300px", padding: "8px", marginLeft: "16%" }} />
                            </div>

                            <div>
                                <button className="submit" onClick={handleSubmit} style={{ border: "2px solid #4682B4", backgroundColor: "transparent", padding: "7px", width: "120px", fontSize: "18px", marginTop: "20px", marginLeft: "35%" }}>submit</button>
                            </div>

                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <input type="search" name="search" onChange={(e) => setSearchhh(e.target.value)} value={searchhh} placeholder="search..." style={{ padding: "8px", width: "400px", marginBottom: "1%", marginTop: "4%" }} />
                            </div>
                        
                        </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", marginTop: "1%", flexDirection: "column" }}>
                        <Table dataa={data} searchhh={searchhh} setSearchhh={setSearchhh} />
                    </div>
                
                </div>
            </div>


        </>
    )
}