import classes from './categoriesSection.module.css'
import SectionHeader from './SectionHeader'
import cardImg from "../../../../public/img/Container.png"
import rightArr from "../../../../public/icon/Vector (25).png"


export default function CategoriesSection() {
    return (
        <div className='container'>
            <div className={classes.categoriesSection}>
                <SectionHeader />
                <div className={classes.categoriesCards}>
                    <div className={classes.categoriesCard}>
                        <img width={180} src={cardImg} alt="" />
                        <div className={classes.cardText}>
                            <p>Action</p>
                            <img width={20} src={rightArr} alt="" />
                        </div>
                    </div>
                    <div className={classes.categoriesCard}>
                        <img width={180} src={cardImg} alt="" />
                        <div className={classes.cardText}>
                            <p>Action</p>
                            <img width={20} src={rightArr} alt="" />
                        </div>
                    </div>
                    <div className={classes.categoriesCard}>
                        <img width={180} src={cardImg} alt="" />
                        <div className={classes.cardText}>
                            <p>Action</p>
                            <img width={20} src={rightArr} alt="" />
                        </div>
                    </div>
                    <div className={classes.categoriesCard}>
                        <img width={180} src={cardImg} alt="" />
                        <div className={classes.cardText}>
                            <p>Action</p>
                            <img width={20} src={rightArr} alt="" />
                        </div>
                    </div>
                    <div className={classes.categoriesCard}>
                        <img width={180} src={cardImg} alt="" />
                        <div className={classes.cardText}>
                            <p>Action</p>
                            <img width={20} src={rightArr} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
