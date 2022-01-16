import React, { useState } from "react";
import axios from "axios";
import StyledInput from "../common/StyledInput";

function Signup () {
    const [values, setValues] = useState([]);

    const handlerSubmit = (e) => { 
        e.preventDefault(); 
        // const frmData = new FormData();
        let dd = {};
        for (const [k,v] of Object.entries(values)) {
            dd = {...dd, [k]:v};
        }
        axios.post(`api/user/`,dd)
        .then(res => console.log(res.data))
        .catch((a,status,c,d,e) => alert(`a : ${a} \n b : ${status} \n c : ${c} \n d : ${d} \n e : ${e}`))
    }

    const handlerValues = (type, e) => { setValues({...values, [type]:e.target.value}) }
    return (
        <form onSubmit={e => handlerSubmit(e)}>
            <StyledInput name="email"
                   type="email"
                   placeholder="email"
                   value={values.email || ""}
                   onChange={e => handlerValues("email", e)}
                   ariaId="testEmail"
                   id="email"
                   labeling="이메일"
                   />
            <input name="password"
                   type="password"
                   placeholder="password"
                   value={values.password || ""}
                   onChange={e => handlerValues("password", e)}
                   />
            <input name="password2"
                   type="password"
                   placeholder="password2"
                   value={values.password2 || ""}
                   onChange={e => handlerValues("password2", e)}
                   />
            <input name="name"
                   type="name"
                   placeholder="name"
                   value={values.name || ""}
                   onChange={e => handlerValues("name", e)}
                   />
            <input name="nickname"
                   type="nickname"
                   placeholder="nickname"
                   value={values.nickname || ""}
                   onChange={e => handlerValues("nickname", e)}
                   />
            <input name="phone"
                   type="phone"
                   placeholder="phone"
                   value={values.phone || ""}
                   onChange={e => handlerValues("phone", e)}
                   />
            <input name="backupEmail"
                   type="backupEmail"
                   placeholder="backupEmail"
                   value={values.backupEmail || ""}
                   onChange={e => handlerValues("backupEmail", e)}
                   />
            <button>회원가입</button>
        </form>
    );
}

export default Signup;