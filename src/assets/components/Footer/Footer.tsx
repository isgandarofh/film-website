import classes from "./footer.module.css"

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={classes.footer}>
                    <div className={classes.footerTop}>
                        <ul>
                            <li className={classes.menuHeaderText}>Home</li>
                            <li>Categories</li>
                            <li>Devices</li>
                            <li>Pricing</li>
                            <li>FAQ</li>
                        </ul>
                        <ul>
                            <li className={classes.menuHeaderText}>Movies</li>
                            <li>Gernes</li>
                            <li>Trending</li>
                            <li>New Release</li>
                            <li>Popular</li>
                        </ul>
                        <ul>
                            <li className={classes.menuHeaderText}>Shows</li>
                            <li>Gernes</li>
                            <li>Trending</li>
                            <li>New Release</li>
                            <li>Popular</li>
                        </ul>
                        <ul>
                            <li className={classes.menuHeaderText}>Support</li>
                            <li>Contact Us</li>
                        </ul>
                        <ul>
                            <li className={classes.menuHeaderText}>Subscription</li>
                            <li>Plans</li>
                            <li>Features</li>
                        </ul>
                        <ul>
                            <li className={classes.menuHeaderText}>Connect With Us</li>

                        </ul>
                    </div>
                    <div className={classes.footerBottom}>
                        <div className={classes.footerBottomLeft}>
                            <p>@2023 streamvib, All Rights Reserved</p>
                        </div>
                        <div className={classes.footerBottomRight}>
                            <ul>
                                <li>Terms of Use</li>
                                <li>Privacy Policy</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
