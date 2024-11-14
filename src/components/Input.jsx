
export default function Input({type, value, placeholder, className}) {
   return (
    <div>
        <input 
            type={type}
            placeholder={placeholder}
            className={className}
        />
    </div>
   )
}