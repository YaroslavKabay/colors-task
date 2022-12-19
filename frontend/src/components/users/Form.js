import {useForm} from "react-hook-form" ;

import {createUser} from "../../services/" ;
import {useState,useEffect} from "react";
import './Form.css';

export function Form(){

    let [colors, setColors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4444/colors')
            .then(value => value.json())
            .then(value => {
                setColors(value);
            });
    },[])

    let {register, handleSubmit, formState: {errors}} = useForm ();

    let submit = (item) => {
        createUser(item).then()
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>

                <div className={'description'}>Please enter your username: </div>

                <input type="text" {...register('username', {required: true})}/>

                <div className={'description'}> Please choose your color: </div>

                <select {...register('color',{required: true})}>
                    {colors.map((value, index) => <option key={index} value={value._id}>{value.color}</option>)}
                </select>
                <br/>

                <button>save</button>

                <div className={'error'}>{errors.color && <span> Color field is required </span>} </div>
                <div className={'error'}>{errors.username && <span> Username field is required </span>} </div>

            </form>

        </div>
    );
}