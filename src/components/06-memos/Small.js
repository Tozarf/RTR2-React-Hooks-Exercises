import React, { memo } from 'react'

export const Small = memo(({value}) => {
    console.log("hi there again!")
    return (
        <small>
            {value}
        </small>
    )
})
