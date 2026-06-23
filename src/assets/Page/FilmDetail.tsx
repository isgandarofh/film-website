import classes from "../components/FilmDetail/filmDetail.module.css"
import playButton from '../../../public/icon/Icon.png'
import plusIcon from "../../../public/icon/Vector (27).png"
import handIcon from "../../../public/icon/Vector (28).png"
import volumeIcon from "../../../public/icon/Vector (29).png"
import leftArr from '../../../public/icon/Vector 619.png'
import RightArr from '../../../public/icon/Vector (25).png'
import authorPhoto from "../../../public/img/7c3e6c5643b2efe0f0d00d99edf8d6e316eb37cb.png"
import ratingStar from "../../../public/icon/Shape (1).png"
import yearIcon from "../../../public/icon/Vector (30).png"
import langIcon from "../../../public/icon/Vector (31).png"
import greyStar from "../../../public/icon/Star 5.png"
import gernesIcon from "../../../public/icon/Vector (32).png"

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

            <div className={classes.commentsBox}>
              <div className={classes.boxHeader}>
                <div className={classes.headerLeft}>
                  <p>Reviews</p>
                </div>
                <div className={classes.headerRight}>
                  <button>
                    <img width={18} src={plusIcon} alt="" />
                    Add Your Review</button>
                </div>
              </div>
              <div className={classes.commentBoxes}>
                <div className={classes.commentBox}>
                  <div className={classes.boxHeader}>
                    <div className={classes.headerLeft}>
                      <h2>Aniket Roy</h2>
                      <p>From India</p>
                    </div>
                    <div className={classes.headerRight}>
                      <div className={classes.ratingStarBox}>
                        <img width={18} src={ratingStar} alt="" />
                        <img width={18} src={ratingStar} alt="" />
                        <img width={18} src={ratingStar} alt="" />
                        <img width={18} src={ratingStar} alt="" />
                        <img width={18} src={ratingStar} alt="" />
                        <p>4.5</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.commentParagraph}>
                    <p>This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.</p>
                  </div>
                </div>
                <div className={classes.commentBox}>
                  <div className={classes.boxHeader}>
                    <div className={classes.headerLeft}>
                      <h2>Aniket Roy</h2>
                      <p>From India</p>
                    </div>
                    <div className={classes.headerRight}>
                      <div className={classes.ratingStarBox}>
                        <img width={18} src={ratingStar} alt="" />
                        <img width={18} src={ratingStar} alt="" />
                        <img width={18} src={ratingStar} alt="" />
                        <img width={18} src={ratingStar} alt="" />
                        <img width={18} src={ratingStar} alt="" />
                        <p>4.5</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.commentParagraph}>
                    <p>This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.contentRight}>
            <div className={classes.year}>
              <div className={classes.title}>
                <img width={15} src={yearIcon} alt="" />
                <p>Released Year</p>
              </div>
              <h3>2022</h3>
            </div>
            <div className={classes.language}>
              <div className={classes.title}>
                <img width={15} src={langIcon} alt="" />
                <p>Available Languages</p>
              </div>
              <div className={classes.textBoxes}>
                <div className={classes.textBox}>
                  English
                </div>
                <div className={classes.textBox}>
                  Hindi
                </div>
                <div className={classes.textBox}>
                  Tamil
                </div>
                <div className={classes.textBox}>
                  Telegu
                </div>
                <div className={classes.textBox}>
                  Kannada
                </div>
              </div>
            </div>
            <div className={classes.ratings}>
              <div className={classes.title}>
                <img width={15} src={greyStar} alt="" />
                <p>Ratings</p>
              </div>
              <div className={classes.ratingBoxes}>
                <div className={classes.ratingBox}>
                  <h4>IMDb</h4>
                  <div className={classes.ratingStarBoxRight}>
                    <img width={14} src={ratingStar} alt="" />
                    <img width={14} src={ratingStar} alt="" />
                    <img width={14} src={ratingStar} alt="" />
                    <img width={14} src={ratingStar} alt="" />
                    <img width={14} src={ratingStar} alt="" />
                    <p>5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.gernes}>
              <div className={classes.title}>
                <img width={15} src={gernesIcon} alt="" />
                <p>Gernes</p>
              </div>
              <div className={classes.textBoxes}>
                <div className={classes.textBox}>
                  Action
                </div>
                <div className={classes.textBox}>
                  Adventure
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
