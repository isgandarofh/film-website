import classes from "./sectionTitle.module.css"


export default function SectionTitle({title,paragraph}:any) {
  return (
    <div className={classes.sectionTitle}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
    </div>
  )
}
