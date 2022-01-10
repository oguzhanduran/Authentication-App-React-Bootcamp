import React from 'react'
import {useState} from "react"
import InputField from "../InputField/index"
import IconField from "../IconField/index";
import Button from "../Button/index"
import "./index.css"
import {useHistory} from "react-router-dom"

function Registration() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function signup() {
        let item = {email, password};
        console.warn(item);

        let result = await fetch("https://61c458fef1af4a0017d994c8.mockapi.io/Auth", {
            method: "POST",
            body: JSON.stringify(item), // göndereceğimiz şeyi mutlaka string'e çevirmeliyiz.
            headers:{
                "Content-Type": "application/json", // gönderdiğimiz data
                "Accept": "application/json" // kabul ettiğimiz datalar.
            }

        }) // Ne zaman api'mize veri göndersek bize 2 promise döner biri api'yi çağırır 2.si json'u çözmek için bu yüzden async await kullanıyoruz, bu da işlemlerin sıralı bir şekilde tamamlanmasını sağlıyor. 

        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result)) // local storage'a kaydederken string'e çevirmek zorundayız.
         
       history.push("/loginform")

    }

    return (
        <div>
            <div className="">
                <div className='reg-background'>

                </div>
            </div>
            <div className='registration-container'>
                <div className='reg-titles-container'>
                    <h1 className='reg-title-logo'>Your logo</h1>
                    <h1 className='reg-title-login'>Registration</h1>
                </div>
                <div> 
                    <InputField value={email} onChange={(e) => setEmail(e.target.value)} label="Email" type="email" placeholder="user@gmail.com"/> {/* Burda InputField'da olusturduğumuz propsları isimlendirdik. */}
                    <InputField value={password} onChange={(e) => setPassword(e.target.value)} label="Password" type="password" placeholder="Password"/>
                    <Button onClick={signup} buttonName="Register"/>
                </div>
                <IconField/>
            </div>
    </div>
    )
}

export default Registration
   