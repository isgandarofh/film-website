import classes from "./questionsSection.module.css"
import accordionIcon from "../../../../public/icon/Vector (26).png"
import SectionTitle from "../../UI/SectionTitle"
export default function QuestionsSection() {
    return (
        <div className="container">
            <div className={classes.questionsSection}>
                <div className={classes.sectionHeader}>
                    <SectionTitle title="Frequently Asked Questions" paragraph="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."/>
                    <button>Ask a Question</button>

                </div>
                <div className={classes.questionsSectionContent}>
                    <div className={classes.accordions}>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <div className={classes.accordions}>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                        <div className={classes.accordion}>
                            <div className={classes.accordionNumber}>
                                01
                            </div>
                            <div className={classes.accordionText}>
                                <p>How much does StreamVibe cost?</p>
                            </div>
                            <div className={classes.accordionAction}>
                                <img width={25} src={accordionIcon} alt="" />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
