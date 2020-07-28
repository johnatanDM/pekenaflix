import React, {useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button';
import Input from '../../../components/Input';
// import { TitleBase } from './styles';


function useFormik({
    initialValues
}) {
    const [values, setValues] = useState(initialValues)
    function handleChange(event){
        const filedName = event.target.getAttribute('name');
        const value = event.target.value
        setValues({
            ...values,
            [filedName]: value,
        })
    }
    return {
        values,
        handleChange
    }
}

function CadastroCategoria() {
    const formik = useFormik({
        initialValues: {
            nomeCategoria: '',
            descricaoCategoria: '',
            corCategoria: '#ff0000'
        }
    })
    return(
        <PageDefault>
            <h1>Nova Categoria</h1>
            <form onSubmit={(event) => {
                event.preventDefault()
                console.log(formik.values)
            }}>
                <div className="formField">
                    <label htmlFor="nomeCategoria">
                        Nome da Categoria:
                    </label>
                    <Input 
                        type="text"
                        name="nomeCategoria"
                        id="nomeCategoria"
                        onChange={formik.handleChange}
                        value={formik.values.nomeCategoria}
                    />
                </div>
                <div className="formField">
                    <label htmlFor="descricaoCategoria">
                        Descrição da Categoria:
                    </label>
                    <textarea 
                        rows = "5"
                        cols = "60"
                        name="descricaoCategoria"
                        id="descricaoCategoria"
                        onChange={formik.handleChange}
                        value={formik.values.descricaoCategoria}
                    />
                </div><div className="formField">
                    <label htmlFor="corCategoria">
                        Cor da Categoria:
                    </label>
                    <input 
                        type="color"
                        name="corCategoria"
                        id="corCategoria"
                        onChange={formik.handleChange}
                        value={formik.values.corCategoria}
                    />
                </div>
                <Button as="submit">Salvar</Button>
            </form>
            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria