import classes from './firstSection.module.css'
import sectionImg from "../../../../public/img/Sub Container.png"
import playIcon from "../../../../public/icon/Icon.png"

export default function FirstSection() {
    return (
        <div className={classes.firstSection}>
            <div className={classes.sectionBg}>
            </div>
            <div className={classes.sectionText}>
                <h1>The Best Streaming Experience</h1>
                <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
                <button><img width={22} src={playIcon} alt="" />Start Watching Now</button>
            </div>
        </div>
    )
}
