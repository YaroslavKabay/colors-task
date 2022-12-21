import {useForm} from "react-hook-form" ;

import './Form.css';
import {createUser,getColors} from "../../services/" ;
import {useState,useEffect} from "react";
import Errors from "../errors/Errors";

export function Form(){

    let [colors, setColors] = useState([]);
    let [results, setResult] = useState([]);

    useEffect(() => {
        getColors()
            .then(value => {
                setColors(value);
            })
    },[])


    let {register, handleSubmit, formState: {errors}} = useForm ({mode: 'all'});

    let submit = (item) => {
        createUser(item).then(result => setResult(result))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>

                <input type="text" placeholder={'Please enter your username'} {...register('username', {
                    required: true,
                    pattern: new RegExp(/^[a-zA-Z]{1,20}$/)
                })}/>

                <select {...register('color'
                    ,{required: true}
                )}>
                    <option value={''} disabled selected> Please choose a color </option>
                    {colors.map((value, index) => <option  key={index} value={value._id}>{value.color}</option>)}
                </select>

                <button>save</button>
                <br/>

            </form>

            <Errors errors={errors} results={results}/>
        </div>
    );
}