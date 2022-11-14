import RangeSelect from "./RangeSelect";

function Settings({ settings }) {
    return (
        <div
            className='h-2/3 w-1/4 rounded-lg'
            style={{
                backgroundColor: settings.backgroundColor,
                color: settings.textColor
            }}
        >
            <RangeSelect type="transparency" title='Transparency' />
        </div>
    )
}

export default Settings;