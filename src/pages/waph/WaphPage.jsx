import "/src/components/articles/ArticlePortfolio.scss"
import "/src/styles/static-pages.scss"
import React, {useEffect, useState} from 'react'
import {useUtils} from "/src/hooks/utils.js"
import ExpandableCard, {BackToPortfolioLink} from "/src/pages/shared/ExpandableCard.jsx"

function WaphPage() {
    const utils = useUtils()
    const [data, setData] = useState(null)

    useEffect(() => {
        utils.file.loadJSON("/data/pages/waph.json").then(setData)
    }, [])

    if (!data)
        return <></>

    return (
        <div className={`static-page-container`}>
            <WaphHeader course={data.course}/>

            <div className={`article-portfolio-items article-portfolio-items-2-per-row`}>
                {data.labs.map((lab) => (
                    <LabCard key={lab.id} lab={lab}/>
                ))}
            </div>
        </div>
    )
}

function WaphHeader({ course }) {
    return (
        <div className={`static-page-header`}>
            <BackToPortfolioLink/>
            <h1>{course.title}</h1>
            <h3>Instructor: {course.instructor}</h3>
            <h3>Student: {course.student}</h3>
            <p className={`static-page-header-description`}>{course.description}</p>
        </div>
    )
}

function LabCard({ lab }) {
    const summary = lab.text.length > 140 ?
        lab.text.slice(0, 140).trim() + '…' :
        lab.text

    return (
        <ExpandableCard faIcon={lab.faIcon}
                        title={lab.title}
                        tags={lab.tags}
                        summary={summary}>
            <div>
                <p>{lab.text}</p>
            </div>
        </ExpandableCard>
    )
}

export default WaphPage