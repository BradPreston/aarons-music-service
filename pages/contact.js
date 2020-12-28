import Layout from "../components/layout";
import styles from "../styles/contact.module.scss";

export default function Contact() {
  return (
    <Layout>
      <section className={styles.contact}>
        <h2 className={styles.contact_heading}>Contact</h2>
        <div className={styles.contact_info}>
          <p>
            <span>Phone:</span> (269) 649-3929
          </p>
          <p>
            <span>Address:</span> 113 S Main Street Vicksburg, MI 49097
          </p>
          <p>
            <span>Email:</span> Steve@aaronsmusicservice.com
          </p>
          <div className={styles.contact_info_hours}>
            <thead>
              <tr>
                <th>Store Hours: </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>Closed</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>10 am - 6 pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>10 am - 6 pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>10 am - 6 pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>10 am - 6 pm</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10 am - 2 pm</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </div>
        </div>
        <form className={styles.contact_form}>
          <label for="name">Name: </label>
          <input
            id="name"
            type="text"
            placeholder="example: John Smith"
            required
          />
          <label for="email">Email: </label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            required
          />
          <label for="message">Message: </label>
          <textarea id="message"></textarea>
          <input type="submit" value="send" />
        </form>
      </section>
    </Layout>
  );
}
