import { useState } from 'react'
import Input from '../../components/input'
import './styles.css'
import { useForm } from '../../hooks/useForm'

const initialState = {
    name : { value: '', error: '', hasError: true, active: false, name: 'name' },
    surname : { value: '', error: '', hasError: true, active: false, name: 'surname' },
    document : { value: '', error: '', hasError: true, active: false, name: 'document' },
    email : { value: '', error: '', hasError: true, active: false, name: 'email' },
    phone : { value: '', error: '', hasError: true, active: false, name: 'phone' },
    address : { value: '', error: '', hasError: true, active: false, name: 'address' },
    postalCode : { value: '', error: '', hasError: true, active: false, name: 'postalCode' },
    isFormValid: false,
}

function Checkout() {
    const [formState, inputHandler, clearInputs, inputFocus] = useForm(initialState)
    const onChange = (event) => {
        const { name, value } = event.target
        inputHandler({ name, value })
    }

    const onFocus = ({ name, active }) => {
        inputFocus({ name, active })
    }

    const onBlur = () => {
        // setActive(false)
    }

    console.log({formState})

    return (
        <div className="checkoutContainer">
            <h1 className='checkoutTitle'>Checkout</h1>
            <form className="checkoutForm">
                <div className="checkoutFormContainer">
                    <div className="checkoutFormInputGroup">
                        <Input 
                            placeholder='Pedrito'
                            id='name'
                            name='name'
                            required={true}
                            label='Name'
                            onChange={onChange}
                            onFocus={() => onFocus({ name: 'name', active: true })}
                            onBlur={onBlur}
                            active={formState.name.active}
                        />
                    </div>
                    <div className="checkoutFormInputGroup">
                        <Input 
                            placeholder='Perez'
                            id='surname'
                            name='surname'
                            required={true}
                            label='Apellido'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={formState.surname.active}
                        />
                    </div>
                    <div className="checkoutFormInputGroup">
                        <Input 
                            placeholder='123456789'
                            id='document'
                            name='document'
                            required={true}
                            label='Documento de identidad'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={formState.document.active}
                        />
                    </div>
                    <div className="checkoutFormInputGroup">
                        <Input 
                            placeholder='ejemplo@dominio.com'
                            id='email'
                            name='email'
                            required={true}
                            label='Email'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={formState.email.active}
                        />
                    </div>
                    <div className="checkoutFormInputGroup">
                        <Input 
                            placeholder='+57 1233333'
                            id='phone'
                            name='phone'
                            required={true}
                            label='Telefono'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={formState.phone.active}
                        />
                    </div>
                    <div className="checkoutFormInputGroup">
                        <Input 
                            placeholder='Av Siempre Viva 123, Springfield, USA'
                            id='address'
                            name='address'
                            required={true}
                            label='Direccion'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={formState.address.active}
                        />
                    </div>
                    <div className="checkoutFormInputGroup">
                        <Input 
                            placeholder='11123'
                            id='postalCode'
                            name='postalCode'
                            required={true}
                            label='Codigo postal'
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            active={formState.postalCode.active}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout