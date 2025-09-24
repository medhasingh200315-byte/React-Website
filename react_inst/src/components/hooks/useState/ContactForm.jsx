export const ContactForm=()=>{
    return(
        <div>
            <div>
                <h1>Contact Form</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" required autoComplete="off" />

                    <label htmlFor="password">Password</label>
                    <input type="text" name="username" required autoComplete="off" />

                    <label htmlFor="message">Message</label>
                    <textarea
                     name="message"
                     type="message"
                     required
                     autoComplete="off"
                     rows="6"
                     />
                     <button type="submit">Send message</button>

                </form>
            </div>
        </div>
    )
}