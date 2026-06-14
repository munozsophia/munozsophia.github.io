import "./ArticleClock.scss"
import React, {useEffect, useRef, useState} from 'react'
import Article from "/src/components/articles/base/Article.jsx"

/**
 * Displays a digital clock and an analog clock (canvas-based) that update every second.
 * @param {ArticleDataWrapper} dataWrapper
 * @param {Number} id
 * @return {JSX.Element}
 * @constructor
 */
function ArticleClock({ dataWrapper, id }) {
    const [time, setTime] = useState(new Date())
    const canvasRef = useRef(null)

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        let radius = canvas.height / 2
        ctx.save()
        ctx.translate(radius, radius)
        radius = radius * 0.90

        drawClock(ctx, radius)

        ctx.restore()
    }, [time])

    const drawClock = (ctx, radius) => {
        ctx.clearRect(-radius * 1.2, -radius * 1.2, radius * 2.4, radius * 2.4)
        drawFace(ctx, radius)
        drawNumbers(ctx, radius)
        drawTime(ctx, radius)
    }

    const drawFace = (ctx, radius) => {
        ctx.beginPath()
        ctx.arc(0, 0, radius, 0, 2 * Math.PI)
        ctx.fillStyle = 'white'
        ctx.fill()

        ctx.beginPath()
        ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI)
        ctx.fillStyle = '#333'
        ctx.fill()

        ctx.lineWidth = radius * 0.05
        ctx.strokeStyle = '#333'
        ctx.beginPath()
        ctx.arc(0, 0, radius * 0.95, 0, 2 * Math.PI)
        ctx.stroke()
    }

    const drawNumbers = (ctx, radius) => {
        ctx.font = radius * 0.15 + "px arial"
        ctx.textBaseline = "middle"
        ctx.textAlign = "center"
        ctx.fillStyle = '#333'

        for (let num = 1; num < 13; num++) {
            const ang = num * Math.PI / 6
            ctx.rotate(ang)
            ctx.translate(0, -radius * 0.85)
            ctx.rotate(-ang)
            ctx.fillText(num.toString(), 0, 0)
            ctx.rotate(ang)
            ctx.translate(0, radius * 0.85)
            ctx.rotate(-ang)
        }
    }

    const drawTime = (ctx, radius) => {
        const now = time
        let hour = now.getHours()
        let minute = now.getMinutes()
        let second = now.getSeconds()

        // hour hand
        hour = hour % 12
        hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60))
        drawHand(ctx, hour, radius * 0.5, radius * 0.07, '#333')

        // minute hand
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60))
        drawHand(ctx, minute, radius * 0.8, radius * 0.07, '#333')

        // second hand
        second = (second * Math.PI / 30)
        drawHand(ctx, second, radius * 0.9, radius * 0.02, 'red')
    }

    const drawHand = (ctx, pos, length, width, color) => {
        ctx.beginPath()
        ctx.lineWidth = width
        ctx.lineCap = "round"
        ctx.strokeStyle = color
        ctx.moveTo(0, 0)
        ctx.rotate(pos)
        ctx.lineTo(0, -length)
        ctx.stroke()
        ctx.rotate(-pos)
    }

    return (
        <Article id={dataWrapper.uniqueId}
                 type={Article.Types.SPACING_DEFAULT}
                 dataWrapper={dataWrapper}
                 className={`article-clock`}>
            <div className={`article-clock-content`}>
                <div className={`article-clock-digital text-2`}>
                    Current time: {time.toString()}
                </div>
                <canvas ref={canvasRef}
                        className={`article-clock-analog`}
                        width="150"
                        height="150"/>
            </div>
        </Article>
    )
}

export default ArticleClock