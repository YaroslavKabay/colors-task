import {useForm} from "react-hook-form" ;

import './Form.css';
import {createUser,getColors} from "../../services/" ;
import {useState,useEffect} from "react";
import Errors from "../errors/Errors";

export function Form(){

    let [colors, setColors] = useState([]);
    let [results, setResult] = useState([]);
    console.log(results);

    useEffect(() => {
        getColors()
            .then(value => {
                setColors(value);
            })
    },[])


    let {register, handleSubmit, formState: {errors}} = useForm ();

    let submit = (item) => {
        createUser(item).then(result => setResult(result))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>

                <div className={'description'}>Please enter your username: </div>

                <input type="text" {...register('username'
                    , {required: true}
                )}/>

                <div className={'description'}> Please choose a color: </div>

                <select {...register('color'
                    ,{required: true}
                )}>
                    {colors.map((value, index) => <option key={index} value={value._id}>{value.color}</option>)}
                </select>

                <br/>
                <button>save</button>
                <br/>

            </form>

            <Errors errors={errors} results={results}/>
        </div>
    );
}