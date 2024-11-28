interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  required = false,
  value,
  onChange,
  error,
}) => (
  <label className="flex flex-col text-center gap-1">
    <div className="flex flex-row gap-1">
      <span className="text-red-500">*</span>
      <span className="text-black text-[11px] font-medium">{label}</span>
    </div>
    <input
      type={type}
      className={`border p-2 rounded-md text-black font-medium text-xs ${
        error ? "border-red-500" : "border-black"
      }`}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
    />
    {error && (
      <span className="text-red-700 text-xs font-medium text-start mt-1">
        {error}
      </span>
    )}
  </label>
);
