import SectionTitle from "../../UI/SectionTitle";
import classes from "./planSection.module.css";
import { useState } from "react";

export default function PlanSection() {
    const [planType, setPlanType] = useState("monthly");

    return (
        <div className="container">
            <div className={classes.planSection}>
                <div className={classes.sectionHeader}>
                    <SectionTitle
                        title="Choose the plan that's right for you"
                        paragraph="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
                    />

                    <div className={classes.planFilter}>
                        <button
                            className={planType === "monthly" ? classes.active : ""}
                            onClick={() => setPlanType("monthly")}
                        >
                            Monthly
                        </button>

                        <button
                            className={planType === "yearly" ? classes.active : ""}
                            onClick={() => setPlanType("yearly")}
                        >
                            Yearly
                        </button>
                    </div>
                </div>
                <div className={classes.planCards}>
                    <div className={classes.planCard}>
                        <div className={classes.cardTitle}>
                            <h5>Basic Plan</h5>
                            <p>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                        </div>
                        <div className={classes.cardPrice}>
                            <h6>$9.99</h6>
                            <span>/month</span>
                        </div>
                        <div className={classes.cardButtons}>
                            <button>Start Free Trial</button>
                            <button>Choose Plan</button>
                        </div>
                    </div>
                    <div className={classes.planCard}>
                        <div className={classes.cardTitle}>
                            <h5>Basic Plan</h5>
                            <p>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                        </div>
                        <div className={classes.cardPrice}>
                            <h6>$9.99</h6>
                            <span>/month</span>
                        </div>
                        <div className={classes.cardButtons}>
                            <button>Start Free Trial</button>
                            <button>Choose Plan</button>
                        </div>
                    </div>
                    <div className={classes.planCard}>
                        <div className={classes.cardTitle}>
                            <h5>Basic Plan</h5>
                            <p>Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.</p>
                        </div>
                        <div className={classes.cardPrice}>
                            <h6>$9.99</h6>
                            <span>/month</span>
                        </div>
                        <div className={classes.cardButtons}>
                            <button>Start Free Trial</button>
                            <button>Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}