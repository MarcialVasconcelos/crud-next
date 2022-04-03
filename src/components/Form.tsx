import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    client: Client
    onChange?: (client: Client) => void
    cancel?: () => void
}

export default function Form(props: FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    
    return (
        <div>
            {id ? (
                <Input 
                    readOnly
                    text="Código" 
                    value={id} 
                />
            ): false}
            <Input 
                type="text"   
                text="Nome"  
                value={name} 
                onChange={setName}
            />
            <Input 
                type="number" 
                text="Idade" 
                value={age} 
                onChange={setAge}
            />
            <div className="flex justify-end mt-5">
                <Button onClick={() => props.onChange?.(new Client(name, +age, id))} className="mr-2">
                    {id? 'Alterar': 'Salvar'}
                </Button>
                <Button onClick={props.cancel} color="gray">
                    Cancelar
                </Button>
            </div>
        </div>
    )
}