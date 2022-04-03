import { useState } from "react"

export default function useTableForm() {
    const [visible,setVisible] = useState<'table'|'form'>('table')
    
    const showTable = () => setVisible('table')
    const showForm = () => setVisible('form')

    return{
        viewTable: visible === 'table',
        viewForm:  visible === 'form',
        showTable,
        showForm,
    }
}