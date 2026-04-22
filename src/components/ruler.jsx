import { useState, useEffect } from 'react'
import '../index.css'
import './ruler.css'
import * as assets from '../assets'

export default function Ruler() {
    return (
    <>
    <div className='ruler'>
        <div className='cm'>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        </div>
        <div className='cm'>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        </div>
        <div className='cm'>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        </div>
        <div className='cm'>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        </div>
        <div className='cm'>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        </div>
        <div className='cm'>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        </div>
        <div className='cm'>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        </div>
        <div className='cm'>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        </div>
        <div className='cm'>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        </div>
        <div className='cm'>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        <div className='mm'></div>
        </div>
        <div className='cm'></div>
    </div>
    <div className='v-ruler'>
        <div className='v-cm'>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        </div>
        <div className='v-cm'>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        </div>
        <div className='v-cm'>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        </div>
        <div className='v-cm'>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        </div>
        <div className='v-cm'>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        </div>
        <div className='v-cm'>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        </div>
        <div className='v-cm'>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        </div>
        <div className='v-cm'>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        </div>
        <div className='v-cm'>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        </div>
        <div className='v-cm'>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        <div className='v-mm'></div>
        </div>
        <div className='v-cm'></div>
    </div>
    </>
    )
}
