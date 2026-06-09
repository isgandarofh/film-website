import SectionTitle from "../../UI/SectionTitle"
import classes from "./bannerSection.module.css"
export default function BannerSection() {
    return (
        <div className="container">
            <div className={classes.bannerSection}>
                <div className={classes.bannerInner}>
                    <div className={classes.bannerText}>
                        <SectionTitle title="Start your free trial today!" paragraph="This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe." />
                    </div>
                    <div className={classes.bannerButton}>
                        <button>Start a Free Trail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
