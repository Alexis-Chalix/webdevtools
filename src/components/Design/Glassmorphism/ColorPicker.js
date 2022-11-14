function ColorPicker({ type, title, changeSettings, value }) {
    return (
        <div className='flex justify-between items-center'>
            <label>{ title }</label>
            <div className='w-9 h-9 rounded-full border border-solid border-black customTransition' style={{ backgroundColor: value }}>
                <input
                    type={ 'color' }
                    value={ value }
                    onChange={ e => changeSettings(type, e.target.value) }
                    className='opacity-0 w-full h-full'
                />
            </div>
        </div>
    )
}

export default ColorPicker;