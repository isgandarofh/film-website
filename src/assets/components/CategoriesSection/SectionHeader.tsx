import classes from './sectionHeader.module.css'
import leftArr from "../../../../public/icon/Vector 619.png"
import rightArr from "../../../../public/icon/Vector (25).png"
import SectionTitle from '../../UI/SectionTitle'

export default function SectionHeader() {
    return (
        <div>
            <div className={classes.sectionHeader}>
                <SectionTitle title="Explore our wide variety of categories" paragraph="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new" />
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
