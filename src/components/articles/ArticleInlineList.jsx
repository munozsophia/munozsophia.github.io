import "./ArticleInlineList.scss"
import React, {useEffect, useState} from 'react'
import Article from "/src/components/articles/base/Article.jsx"
import Link from "/src/components/generic/Link.jsx"
import {useViewport} from "/src/providers/ViewportProvider.jsx"
import {useLanguage} from "/src/providers/LanguageProvider.jsx"

/**
 * @param {ArticleDataWrapper} dataWrapper
 * @param {Number} id
 * @return {JSX.Element}
 * @constructor
 */
function ArticleInlineList({ dataWrapper, id }) {
    const [selectedItemCategoryId, setSelectedItemCategoryId] = useState(null)

    return (
        <Article id={dataWrapper.uniqueId}
                 type={Article.Types.SPACING_SMALL}
                 dataWrapper={dataWrapper}
                 className={`article-inline-list`}
                 selectedItemCategoryId={selectedItemCategoryId}
                 setSelectedItemCategoryId={setSelectedItemCategoryId}>
            <ArticleInlineListItems dataWrapper={dataWrapper}
                                    selectedItemCategoryId={selectedItemCategoryId}/>
        </Article>
    )
}

/**
 * @param {ArticleDataWrapper} dataWrapper
 * @param {String} selectedItemCategoryId
 * @return {JSX.Element}
 * @constructor
 */
function ArticleInlineListItems({ dataWrapper, selectedItemCategoryId}) {
    const viewport = useViewport()
    const language = useLanguage()
    // cover is section 1
    const isCoverSection = dataWrapper.sectionId === "about"
    const [emailVisible, setEmailVisible] = useState(false)

    const maxItems = viewport.getValueFromBreakpointHash({
        xxl: 5,
        xl: 4,
        md: 3,
        sm: 2,
        default: 2
    })

    const filteredItems = dataWrapper.getOrderedItemsFilteredBy(selectedItemCategoryId)
    const slicedItems = filteredItems.slice(0, maxItems)

    const displayAsList = viewport.innerWidth < dataWrapper.settings.displayAsListIfWidthIsLowerThan
    const listClass = displayAsList ?
        `article-inline-list-items-column-mode` :
        ``

    return (
        <ul className={`article-inline-list-items ${listClass}`}>
            {slicedItems.map((itemWrapper, key) => (
                <ArticleInlineListItem itemWrapper={itemWrapper}
                                       key={key}
                                       // add parameters
                                       emailVisible={emailVisible}
                                       setEmailVisible={setEmailVisible}
                                       showHideEmail={isCoverSection && itemWrapper.faIconWithFallback?.includes('fa-envelope')}
                                       language={language}/>
            ))}
        </ul>
    )
}

/**
 * @param {ArticleItemDataWrapper} itemWrapper
 * @param {Boolean} emailVisible - whether the email address is currently shown
 * @param {Function} setEmailVisible - toggles the email visibility state
 * @param {Boolean} showHideEmail - whether this item should have show/hide behavior
 * @param {Object} lanugage - the language provider for translations
 * @return {JSX.Element}
 * @constructor
 */
function ArticleInlineListItem({ itemWrapper, emailVisible, setEmailVisible, showHideEmail, language }) {
    if (showHideEmail) {
        return (
            <li className={`article-inline-list-item text-4`}
                onClick={(e) => {if (!emailVisible) {e.preventDefault(); setEmailVisible(true)}}}>
                <Link href={emailVisible ? itemWrapper.link?.href : null}
                      tooltip={emailVisible ? itemWrapper.link?.tooltip : null}
                      metadata={itemWrapper.link?.metadata}>
                    <i className={`article-inline-list-item-icon ${itemWrapper.faIconWithFallback}`}
                       style={itemWrapper.faIconStyle}/>
                    <span className={`article-inline-list-item-label`}>
                        {emailVisible ? itemWrapper.label : language.getString("show_my_email")}
                    </span>
                </Link>
            </li>
        )
    }

    return (
        <li className={`article-inline-list-item text-4`}>
            <Link href={itemWrapper.link?.href || null}
                  tooltip={itemWrapper.link?.tooltip}
                  metadata={itemWrapper.link?.metadata}>
                <i className={`article-inline-list-item-icon ${itemWrapper.faIconWithFallback}`}
                   style={itemWrapper.faIconStyle}/>

                <span className={`article-inline-list-item-label`}
                      dangerouslySetInnerHTML={{__html: itemWrapper.locales.label || itemWrapper.label || itemWrapper.placeholder}}/>
            </Link>
        </li>
    )
}

export default ArticleInlineList