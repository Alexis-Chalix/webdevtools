import { FiCopy } from 'react-icons/fi'
import $ from 'jquery'

function getCode({ settings }) {
    function copyCode() {
        const code = $('#getCode').text();
        navigator.clipboard.writeText(code).then(() => {
            const copyBtn = $('#copyBtn');
            copyBtn.toggleClass('copied');
            setTimeout(() => {
                copyBtn.toggleClass('copied');
            }, 800);
        });
    }

    return (
        <div className="w-4/5 bg-stone-900 p-4 rounded-lg flex flex-col gap-3 relative">
            <div className='flex gap-2'>
                <div className="rounded-full w-4 h-4 bg-red-400"></div>
                <div className="rounded-full w-4 h-4 bg-amber-400"></div>
                <div className="rounded-full w-4 h-4 bg-green-500"></div>
            </div>
            <div>
                <p className='text-sm font-code' id="getCode">
                    <span className='text-orange-300'>#card</span><span> &#123;</span><br/>
                        <span className='text-blue-300 ml-6'>width</span>: <span className='text-amber-400'>400px</span>;<br/>
                        <span className='text-blue-300 ml-6'>height</span>: <span className='text-amber-400'>200px</span>;<br/>
                        <span className='text-blue-300 ml-6'>color</span>: <span className='text-amber-400'>{ settings.textColor }</span>;<br/>
                        <span className='text-blue-300 ml-6'>background-color</span>: <span className='text-amber-400'>{ settings.panelColor + parseInt(settings.transparency).toString(16) }</span>;<br/>
                        <span className='text-blue-300 ml-6'>backdrop-filter</span>: <span className='text-amber-400'>blur({settings.blur}px)</span>;<br/>
                        <span className='text-blue-300 ml-6'>box-shadow</span>: <span className='text-amber-400'>1px 4px {settings.shadowWidth}px 0 rgba(0, 0, 0, {settings.shadowOpacity})</span>;<br/>
                        <span className='text-blue-300 ml-6'>border</span>: <span className='text-amber-400'>1px solid rgba(209, 213, 219, 0.3)</span>;<br/>
                    <span>&#125;</span>
                </p>
            </div>
            <div
                className='absolute top-1 right-1 p-2 flex justify-center items-center text-2xl rounded-lg hover:bg-stone-700 customTransition cursor-pointer'
                id="copyBtn"
                onClick={ copyCode }
            >
                <FiCopy />
            </div>
        </div>
    )
}

export default getCode;