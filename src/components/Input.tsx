interface InputProps {
    type?: 'text' | 'number'
    text: string
    value: any
    readOnly?: boolean
    onChange?: (valor: any) => void
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col">
            <label className="mb-2">
                {props.text}
            </label>
            <input 
                type={props.type ?? "text"}
                value={props.value}
                readOnly={props.readOnly}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    border border-red-500 rounded-lg
                    foucus:outline-none bg-gray-100 px-4 py-2
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
} 