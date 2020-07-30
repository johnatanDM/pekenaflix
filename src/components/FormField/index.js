import React from 'react'
import { Input, TextArea, Span} from '../Form'
import { Div } from './styles'

function FormField({label, type, name, value, onChange}){
    return(
        <Div className="formField">
        <label htmlFor="nomeCategoria">
            {type === "textarea" ? 
            <>
                <TextArea 
                    type={type}
                    name={name}
                    id="nomeCategoria"
                    onChange={onChange}
                    value={value}
                />
            </>
            :
            <> 
                <Input 
                    type={type}
                    name={name}
                    id="nomeCategoria"
                    onChange={onChange}
                    value={value}
                />
            </>
            }
            <Span
                type={type}
            >
                {label}:
            </Span> 
        </label>
    </Div>
    )
}

export default FormField