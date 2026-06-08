import classes from "./experienceSection.module.css"
import cardIcon from "../../../../public/icon/Frame.png"
import SectionTitle from "../../UI/SectionTitle"

export default function ExperienceSection() {
    return (
        <div className="container">
            <div className={classes.experienceSection}>
                <SectionTitle title="We Provide you streaming experience across various devices." paragraph="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."/>
                <div className={classes.experienceCards}>
                    <div className={classes.experienceCard}>
                        <div className={classes.cardTitle}>
                            <div className={classes.cardIcon}>
                                <img src={cardIcon} alt="" />
                            </div>
                            <p>Smartphones</p>
                        </div>

                        <div className={classes.cardText}>
                            <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                    <div className={classes.experienceCard}>
                        <div className={classes.cardTitle}>
                            <div className={classes.cardIcon}>
                                <img src={cardIcon} alt="" />
                            </div>
                            <p>Smartphones</p>
                        </div>

                        <div className={classes.cardText}>
                            <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                    <div className={classes.experienceCard}>
                        <div className={classes.cardTitle}>
                            <div className={classes.cardIcon}>
                                <img src={cardIcon} alt="" />
                            </div>
                            <p>Smartphones</p>
                        </div>

                        <div className={classes.cardText}>
                            <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                    <div className={classes.experienceCard}>
                        <div className={classes.cardTitle}>
                            <div className={classes.cardIcon}>
                                <img src={cardIcon} alt="" />
                            </div>
                            <p>Smartphones</p>
                        </div>

                        <div className={classes.cardText}>
                            <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                    <div className={classes.experienceCard}>
                        <div className={classes.cardTitle}>
                            <div className={classes.cardIcon}>
                                <img src={cardIcon} alt="" />
                            </div>
                            <p>Smartphones</p>
                        </div>

                        <div className={classes.cardText}>
                            <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                    <div className={classes.experienceCard}>
                        <div className={classes.cardTitle}>
                            <div className={classes.cardIcon}>
                                <img src={cardIcon} alt="" />
                            </div>
                            <p>Smartphones</p>
                        </div>

                        <div className={classes.cardText}>
                            <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
