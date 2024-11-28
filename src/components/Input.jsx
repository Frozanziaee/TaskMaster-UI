
export default function Input({type, value, name, onChange, placeholder, className}) {
   return (
    <div>
        <input 
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
        />
    </div>
   )
}