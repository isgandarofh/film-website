import SectionTitle from "../../UI/SectionTitle"
import classes from "./planSection.module.css"
export default function PlanSection() {
    return (
        <div className="container">
            <div className={classes.planSection}>
                <div className={classes.sectionHeader}>
                    <SectionTitle title="Choose the plan that's right for you" paragraph="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!" />
                    <div className={classes.planFilter}></div>
                </div>
            </div>
        </div>
    )
}
