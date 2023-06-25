import React from "react";
import Nav from "../components/nav";
function Contact() {
	return (
		<div>
			<Nav />
			<p>
				Apparently recaptcha needs a backend, which makes sense and all but id
				like to make sure you're not a robot before you send me an email. So for
				now, reach out to me through linkedin or github.
			</p>
		</div>
	);
}

export default Contact;
