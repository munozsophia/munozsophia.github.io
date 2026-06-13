import "./DateBadge.scss"
import React, {useEffect, useState} from 'react'
import InfoBadge from "/src/components/generic/InfoBadge.jsx"

function DateBadge({ dateStart, dateEnd, dates, variant = "default", className = "" }) {
    return (
        <div className={`date-badge-wrapper date-badge-wrapper-${variant} ${className}`}>
            <InfoBadge className={`date-badge w-100`}
                       faIcon={`fa-regular fa-calendar`}>
                {dates ? (
                    // render individual years separated by commas
                    dates.map((date, index) => (
                        <span key={index}>
                            <span dangerouslySetInnerHTML={{__html: date}}/>
                            {index < dates.length - 1 && (
                                <span className={`mx-1 opacity-75`}></span>
                            )}
                        </span>
                    ))
                ) : (
                    // original start/end date behavior
                    <>
                        {dateStart && (
                            <span dangerouslySetInnerHTML={{__html: dateStart}}/>
                        )}
                        {(dateStart && dateEnd) && (
                            <i className={`fa-solid fa-arrow-right-long mx-2 opacity-75`}/>
                        )}
                        {dateEnd && (
                            <span dangerouslySetInnerHTML={{__html: dateEnd}}/>
                        )}
                    </>
                )}
            </InfoBadge>
        </div>
    )
}

DateBadge.Variants = {
    DEFAULT: "default",
    TRANSPARENT: "transparent",
}

export default DateBadge