import classes from './sectionHeader.module.css'
import leftArr from "../../../../public/icon/Vector 619.png"
import rightArr from "../../../../public/icon/Vector (25).png"

export default function SectionHeader() {
    return (
        <div>
            <div className={classes.sectionHeader}>
                <div className={classes.headerText}>
                    <h3>Explore our wide variety of categories</h3>
                    <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                </div>
                <div className={classes.headerBtn}>
                    <div className={classes.arrBtn}>
                        <img src={leftArr} alt="" />
                    </div>
                    <div className={classes.center}>
                        <div className={classes.pageLineActive}></div>
                        <div className={classes.pageLine}></div>
                        <div className={classes.pageLine}></div>
                        <div className={classes.pageLine}></div>
                    </div>
                    <div className={classes.arrBtn}>
                        <img src={rightArr} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
