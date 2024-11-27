import './Button.css'

export default function Button ({children, className, handleclick, type}) {
    return (
    <div>
        <button className={className} onClick={handleclick} type={type}>
           { children}
        </button>
    </div>
    )
}