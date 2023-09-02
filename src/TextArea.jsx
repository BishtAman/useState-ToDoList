import React from 'react'
import AddIcon from '@mui/icons-material/Add';
export default function TextArea(props) {
    return (
        <main>
        
            <section className='space-x-5 h-[20vh] flex items-center'>

                <input
                    type="text"
                    value={props.text}
                    onChange={props.changing}
                    onKeyDown={props.enter}
                    placeholder='Enter the task'
                    className='outline-none text-slate-800 p-[10px] w-[19rem] h-[3rem] bg-slate-400 placeholder:text-slate-700'
                />
                <button
                    onClick={props.add}
                    className='bg-slate-300 text-black w-[2rem] rounded'
                >
                    <AddIcon/>
                </button>
            </section>
        </main>
    )
}
