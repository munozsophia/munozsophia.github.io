import "./ExpandableCard.scss"
import React, {useState} from 'react'
import AvatarView from "/src/components/generic/AvatarView.jsx"
import {Tag, Tags} from "/src/components/generic/Tags.jsx"

/**
 * Link back to the main portfolio site's Portfolio section.
 * "/#portfolio" matches the real section id in sections.json, so
 * the SPA scrolls straight to it on load instead of landing at the top.
 */
function BackToPortfolioLink() {
    return (
        <a href={`/#portfolio`} className={`back-to-portfolio-link`}>
            <i className={`fa-solid fa-arrow-left`}/> Back to Portfolio
        </a>
    )
}

/**
 * A portfolio-style card (reuses the real article-portfolio-item CSS
 * and AvatarView/Tags components) that expands in place on click to
 * reveal additional content, instead of always showing full text.
 * This also fixes uneven card heights within a grid row, since all
 * cards show similarly-sized collapsed content until opened.
 *
 * @param {String} faIcon
 * @param {String} title
 * @param {String[]} tags
 * @param {String} summary - shown when collapsed
 * @param {*} children - rendered only when expanded
 */
function ExpandableCard({ faIcon, title, tags, summary, children }) {
    const [expanded, setExpanded] = useState(false)

    const _toggle = () => setExpanded(!expanded)

    return (
        <div className={`article-portfolio-item expandable-card ${expanded ? 'expanded' : ''}`}>
            <AvatarView faIcon={faIcon}
                        className={`article-portfolio-item-avatar`}/>

            <div className={`article-portfolio-item-title`}>
                <h5>{title}</h5>
            </div>

            <div className={`article-portfolio-item-body`}>
                <Tags className={`article-portfolio-item-body-tags`}>
                    {tags.map((tag, key) => (
                        <Tag key={key}
                             text={tag}
                             variant={Tag.Variants.DARK}
                             className={`article-portfolio-item-body-tag text-1`}/>
                    ))}
                </Tags>

                {!expanded && (
                    <div className={`article-portfolio-item-body-description text-2`}>
                        {summary}
                    </div>
                )}

                {expanded && (
                    <div className={`expandable-card-details`}>
                        {children}
                    </div>
                )}
            </div>

            <button className={`expandable-card-toggle`}
                    onClick={_toggle}
                    aria-expanded={expanded}>
                {expanded ? 'Show less' : 'Show more'}
                <i className={`fa-solid fa-chevron-down expandable-card-chevron`}/>
            </button>
        </div>
    )
}

export default ExpandableCard
export {BackToPortfolioLink}