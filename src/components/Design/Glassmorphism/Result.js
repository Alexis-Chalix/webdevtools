function Result({ settings }) {
    return(
        <div
            className='h-2/3 w-1/4 rounded-lg'
            style={{
                backgroundColor: settings.backgroundColor,
                color: settings.textColor,
            }}
        >
            <p>{ settings.backgroundColor }</p>
            <p>{ settings.textColor }</p>
            <p>{ settings.panelColor }</p>
            <p>{ settings.transparency }</p>
            <p>{ settings.blur }</p>
            <p>{ settings.shadowOpacity }</p>
            <p>{ settings.shadowWidth }</p>
        </div>
    )
}

export default Result;