function RangeSelect({ type, title, changeSettings, defaultValue, min, max, step, backgroundColor, textColor }) {
    return (
        <div className='flex flex-col items-center'>
            <label className='select-none'>{ title }</label>
            <input
                type={ 'range' }
                min={ min }
                max={ max }
                step={ step }
                value={ defaultValue }
                onChange={ e => changeSettings(type, e.target.value) }
                className='w-3/4 appearance-none h-1 rounded-full mt-2 customTransition'
                style={{ backgroundColor: textColor }}
            />
            <style>
                {`
                    input[type=range]::-webkit-slider-thumb {
                        background: ${ backgroundColor };
                        border: 1px solid ${ textColor };
                    }
                `}
            </style>
        </div>
    )
}

export default RangeSelect;