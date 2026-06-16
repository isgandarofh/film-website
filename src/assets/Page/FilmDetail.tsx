import classes from "../components/FilmDetail/filmDetail.module.css"
import playButton from '../../../public/icon/Icon.png'
import plusIcon from "../../../public/icon/Vector (27).png"
import handIcon from "../../../public/icon/Vector (28).png"
import volumeIcon from "../../../public/icon/Vector (29).png"
import leftArr from '../../../public/icon/Vector 619.png'
import RightArr from '../../../public/icon/Vector (25).png'
import authorPhoto from "../../../public/img/7c3e6c5643b2efe0f0d00d99edf8d6e316eb37cb.png"

export default function FilmDetail() {
  return (
    <div className="container">
      <div className={classes.filmDetail}>
        <div className={classes.filmImg}>
          <h2>Kantara</h2>
          <p>
            A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.
          </p>

          <div className={classes.buttons}>
            <button> <img width={30} src={playButton} alt="" />Play Now</button>
            <div className={classes.actionsButtons}>
              <div className={classes.btn}>
                <img width={15} src={plusIcon} alt="" />
              </div>
              <div className={classes.btn}>
                <img width={22} src={handIcon} alt="" />
              </div>
              <div className={classes.btn}>
                <img width={22} src={volumeIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.detailContent}>
          <div className={classes.contentLeft}>
            <div className={classes.descriptionBox}>
              <h5>Description</h5>
              <p>A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands.</p>
            </div>
            <div className={classes.authorImagesBox}>
                <div className={classes.boxHeader}>
                  <div className={classes.headerLeft}>
                    <p>Cast</p>
                  </div>
                  <div className={classes.headerRight}>
                    <div className={classes.arrBox}>
                      <img width={15} src={leftArr} alt="" />
                    </div>
                    <div className={classes.arrBox}>
                      <img width={15} src={RightArr} alt="" />
                    </div>
                  </div>
                </div>
                <div className={classes.images}>
                  <img src={authorPhoto} alt="" />
                  <img src={authorPhoto} alt="" />
                  <img src={authorPhoto} alt="" />
                  
                </div>
            </div>
          </div>
          <div className={classes.contentRight}></div>
        </div>
      </div>
    </div>
  )
}
