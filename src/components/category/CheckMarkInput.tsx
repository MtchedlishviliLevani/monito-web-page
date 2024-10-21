interface Props {
    value: string;
    checked: boolean;
    onChange: () => void
}
function CheckMarkInput({ value, checked, onChange }: Props) {
    return (
        <input
            onChange={onChange}
            checked={checked}
            value={value}
            type="checkbox"
            className="rounded-[4px] border-[1px] border-[#ccd1d2] border-solid" />
    )
}

export default CheckMarkInput
