interface ButtonProps {
    color?: 'green' | 'blue' | 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function Button(props: ButtonProps) {
    const c = props.color ?? 'blue'
    
    return (
        <button onClick={props.onClick} className={`
        bg-gradient-to-r from-${c}-600 to-${c}-800
        text-white px-4 py-2 rounded-md
        ${props.className}`}>
            {props.children}
        </button>
    )
}