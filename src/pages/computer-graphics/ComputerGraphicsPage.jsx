import "/src/components/articles/ArticlePortfolio.scss"
import "/src/styles/static-pages.scss"
import React, {useEffect, useState} from 'react'
import {useUtils} from "/src/hooks/utils.js"
import ExpandableCard, {BackToPortfolioLink} from "/src/pages/shared/ExpandableCard.jsx"
import ImageGrid from "/src/pages/shared/ImageGrid.jsx"

/**
 * Standalone Computer Graphics course overview page. Each project
 * expands on click to show the full Goals/Process/Result/Sketches/
 * Screenshots/Code/Video structure the professor requires.
 */
function ComputerGraphicsPage() {
    const utils = useUtils()
    const [data, setData] = useState(null)

    useEffect(() => {
        utils.file.loadJSON("/data/pages/computer-graphics.json").then(setData)
    }, [])

    if (!data)
        return <></>

    return (
        <div className={`static-page-container`}>
            <CgHeader course={data.course}/>

            <div className={`article-portfolio-items article-portfolio-items-2-per-row`}>
                {data.projects.map((project) => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </div>
    )
}

function CgHeader({ course }) {
    return (
        <div className={`static-page-header`}>
            <BackToPortfolioLink/>
            <h1>{course.title}</h1>
            {course.instructor && <h3>Instructor: {course.instructor}</h3>}
            <h3>Student: {course.student}</h3>
            <p className={`static-page-header-description`}>{course.description}</p>
        </div>
    )
}

function ProjectCard({ project }) {
    return (
        <ExpandableCard faIcon={project.faIcon}
                        title={project.title}
                        tags={project.tags}
                        summary={project.summary}>
            <div>
                <h6>Goals</h6>
                <p>{project.goals}</p>
            </div>

            <div>
                <h6>Process</h6>
                <p>{project.process}</p>
            </div>

            <div>
                <h6>Result</h6>
                <p>{project.result}</p>
            </div>

            {project.sketches?.length > 0 && (
                <div>
                    <h6>Sketches</h6>
                    <ImageGrid images={project.sketches}/>
                </div>
            )}

            {project.screenshots?.length > 0 && (
                <div>
                    <h6>Screenshots</h6>
                    <ImageGrid images={project.screenshots}/>
                </div>
            )}

            {project.videoEmbedUrl && (
                <div>
                    <h6>Video Demo</h6>
                    <div className={`expandable-card-video`}>
                        <iframe src={project.videoEmbedUrl} allowFullScreen/>
                    </div>
                </div>
            )}

            {project.githubUrl && (
                <div className={`expandable-card-links`}>
                    <a href={project.githubUrl} target={`_blank`} rel={`noreferrer`}>
                        <i className={`fa-brands fa-github`}/> View code on GitHub
                    </a>
                </div>
            )}
        </ExpandableCard>
    )
}

export default ComputerGraphicsPage