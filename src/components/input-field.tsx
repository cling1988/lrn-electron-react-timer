

export default function InputField({ label, value, onchange, placeholder }: { label: string, value?: number, onchange?: (value: string) => void, placeholder?: string }) {
    // handle not negetive value and max value of 99
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        if (val === "") {
            onchange?.(val);
            return;
        }
        if (isNaN(Number(val))) return;
        if (Number(val) < 0) val = "0";
        if (Number(val) > 99) val = "99";
        onchange?.(val);
    }

    return (
        <div className="text-3xl">
            <label className="text-stone-300">{label}:</label>
            <input type="number" className="w-20 bg-transparent text-blue-500" placeholder={placeholder || "Input Field"} value={value} onChange={handleChange} />
        </div>
    )
}