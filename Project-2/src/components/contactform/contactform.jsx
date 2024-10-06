import Button from "../Buttton/button";
import styles from "./contact.module.css"
import { IoCall } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT"
                        icon={<IoCall />} />
                    <Button text="VIA CALL"
                        icon={<MdOutlineMessage />} />
                </div>

                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM"
                    icon={<IoMdMail />}
                />

                <form >
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </div>

                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea rows={6} />
                    </div>

                    <div style={{
                        display: "flex",
                        padding: " 0rem 5rem ",
                    }}>
                        <Button text="SUBMIT BUTTON" />
                    </div>

                </form>

            </div>
            <div className={styles.contact_image}>
                <img src="/images/contact.svg" alt="" />
            </div>
        </section>
    );
}
export default ContactForm;