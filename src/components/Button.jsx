import './Button.css'

export default function Button ({children, className}) {
    return (
    <div>
        <button className={className}>
           { children}
        </button>
    </div>
    )
}