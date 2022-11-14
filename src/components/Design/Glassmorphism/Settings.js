import RangeSelect from "./RangeSelect";
import ColorPicker from "./ColorPicker";

function Settings({ settings, changeSettings }) {
    return (
        <div
            className='h-2/3 w-1/4 rounded-lg flex flex-col items-center justify-between px-12 py-20 customTransition'
            style={{
                backgroundColor: settings.backgroundColor,
                color: settings.textColor
            }}
        >
            <section className='flex flex-col gap-3 w-full'>
                <ColorPicker type='backgroundColor' title='Background Color' changeSettings={ changeSettings } value={ settings.backgroundColor } />
                <ColorPicker type='textColor' title='Text Color' changeSettings={ changeSettings } value={ settings.textColor } />
                <ColorPicker type='panelColor' title='Panel Color' changeSettings={ changeSettings } value={ settings.panelColor } />
            </section>

            <div className='w-1/2 h-0.5 mx-auto' style={{ backgroundColor: settings.textColor }}></div>

            <section className='flex flex-col gap-4 w-full'>
                <RangeSelect
                    type="transparency"
                    title='Transparency'
                    changeSettings={ changeSettings }
                    defaultValue={ settings.transparency }
                    min={0} max={1} step={0.001}
                    backgroundColor={ settings.backgroundColor }
                    textColor={ settings.textColor }
                />
                <RangeSelect
                    type="blur"
                    title='Blur'
                    changeSettings={ changeSettings }
                    defaultValue={ settings.blur }
                    min={0} max={100} step={0.1}
                    backgroundColor={ settings.backgroundColor }
                    textColor={ settings.textColor }
                />
                <RangeSelect
                    type="shadowOpacity"
                    title='Shadow Opacity'
                    changeSettings={ changeSettings }
                    defaultValue={ settings.shadowOpacity }
                    min={0} max={1} step={0.001}
                    backgroundColor={ settings.backgroundColor }
                    textColor={ settings.textColor }
                />
                <RangeSelect
                    type="shadowWidth"
                    title='Shadow Width'
                    changeSettings={ changeSettings }
                    defaultValue={ settings.shadowWidth }
                    min={0} max={50} step={0.05}
                    backgroundColor={ settings.backgroundColor }
                    textColor={ settings.textColor }
                />
            </section>
        </div>
    )
}

export default Settings;