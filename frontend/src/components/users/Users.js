import {useForm} from "react-hook-form" ;

import {createUser} from "../../services/" ;
import {useState,useEffect} from "react";

export function Users(){

    let [colors, setColors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4444/colors')
            .then(value => value.json())
            .then(value => {
                setColors(value);
            });
    },[])

    let {register, handleSubmit, formState: {errors}} = useForm ()// register - реєструє поле в обєкті і визначає його назву,  handleSubmit - відхоплює його
    // formState - стан форми, можна звідти витягнути онтач, ерори


    let submit = (item) => {
        createUser(item).then(result => console.log(result))
        console.log(item);
    }

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>

                {errors.name && <span> field is required </span>}

                <input type="text" {...register('username')}/>

                <select {...register('color')}>
                    {colors.map((value, index) => <option key={index} value={value._id}>{value.color}</option>)}
                </select>

                <button>save</button>

            </form>

        </div> // handleSubmit бере інфу з регістер і сетапає в , сабміт допустим
    );
}