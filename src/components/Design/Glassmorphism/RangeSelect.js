function RangeSelect({ type, title }) {
    return (
        <div>
            <label>{ title }</label>
            <input type="range" min={0} max={50} step={10} />
        </div>
    )
}

export default RangeSelect;