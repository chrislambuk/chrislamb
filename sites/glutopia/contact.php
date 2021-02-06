<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Contact</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css?family=Jaldi" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Caveat" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
    <link href="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.css" rel="stylesheet">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<!--
    <script src="https://unpkg.com/cloudinary-core/cloudinary-core-shrinkwrap.min.js" type="text/javascript"></script>
    <script src="https://unpkg.com/cloudinary-video-player/dist/cld-video-player.min.js" type="text/javascript"></script>
-->
</head>

<body>
    <!--header-->
    <div class="sticky-head">
        <header class="header">
            <div class="topper">
                    <div class="logo">
                    glutoPia
                    <div class="tag">
                        GLUTEN FREE - ARTISAN BAKERY
                    </div>
                </div>
                <div class="social">
                    <a href="http://www.twitter.com/Gluten_guru"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.facebook.com/glutenguru"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/glut0pia"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.pinterest.co.uk/Glut0piaBakery/"><i class="fab fa-pinterest"></i></a>
                </div>
            </div>

                <div class="address">
                41 Market Place, Kingston-upon-Thames, Surrey, KT11JQ <br>+ 44 (0)208 974 5444 | <a href="mailto:hello@glutopiabakery.com"> hello@glutopiabakery.com</a>
                </div>
        </header>
        <nav>
            <ul>
                <li><a href="index.php">home</a></li>
                <li><a href="cafe.php">cafe</a></li>
                <li><a href="cakes.php">cakes</a></li>
                <li><a href="contact.php" class="active">contact</a></li>
            </ul>
        </nav>
    </div>
    <!--content-->
    <main class="wrapper">
        <article class="content">
           <div class="contact-info">
                41 Market Place, Kingston-upon-Thames, Surrey, KT11JQ <br>+ 44 (0)208 974 5444 | <a href="mailto:hello@glutopiabakery.com"> hello@glutopiabakery.com</a>
            </div>
            <div class="display_board">
                <section class="careers">
                    <h1>Careers</h1>
                    <p>We will be opening a number of
                        new stores, in the very near future.
                        So we will be regularly looking for
                        candiadates to fill the following roles:</p>
                    <h3>Talented Cake Decorators</h3>
                    <p>min 2 years trade experience required
                        Talented Cake Decorators
                        email us:- your full resume,
                        photos of your most impressive
                        &amp; recent creations
                        + 3 references to:-
                        hello@glutopiabakery.com</p>
                    <h3>Front of House Management
                    </h3>
                    <p>min 5 years trade experience expected
                        Front of House Management
                        email us:- your full resume,
                        covering letter, as to why we
                        should pick you
                        + 3 references to:-
                        hello@glutopiabakery.com</p>
                    <h3>Qualified Baker/Pastry Chef
                    </h3>
                    <p>min 4 years trade experience required
                        Qualified Baker/Pastry Chef
                        email us:- your full resume,
                        photos of your most impressive
                        &amp; recent creations
                        + 3 references to:-
                        hello@glutopiabakery.com</p>
                    <h3>Skilled Baristas
                    </h3>
                    <p>min 2 years trade experience required
                        Skilled Baristas
                        email us:- your full resume,
                        photos of your most
                        impressive latte art shots
                        + 3 references to:-
                        hello@glutopiabakery.com</p>
                </section>
            </div>
        </article>
        <!--        contact form-->
        <div id="contact">

            <?php
	
		// Check for Header Injections
		function has_header_injection($str) {
			return preg_match( "/[\r\n]/", $str );
		}
		
		
		if (isset($_POST['contact_submit'])) {
			
			// Assign trimmed form data to variables
			// Note that the value within the $_POST array is looking for the HTML "name" attribute, i.e. name="email"
			$name	= trim($_POST['name']);
			$email	= trim($_POST['email']);
			$msg	= $_POST['message']; // no need to trim message
		
			// Check to see if $name or $email have header injections
			if (has_header_injection($name) || has_header_injection($email)) {
				
				die(); // If true, kill the script
				
			}
			
			if (!$name || !$email || !$msg) {
				echo '<h4 class="error">All fields required.</h4><a href="contact.php" class="button block">Go back and try again</a>';
				exit;
			}
			
			// Add the recipient email to a variable
			$to	= "mail.lamb@gmail.com";
			
			// Create a subject
			$subject = "$name sent a message via your contact form";
			
			// Construct the message
			$message .= "Name: $name\r\n";
			$message .= "Email: $email\r\n\r\n";
			$message .= "Message:\r\n$msg";
			
			// If the subscribe checkbox was checked
			if (isset($_POST['subscribe']) && $_POST['subscribe'] == 'Subscribe' ) {
			
				// Add a new line to the $message
				$message .= "\r\n\r\nPlease add $email to the mailing list.\r\n";
				
			}
		
			$message = wordwrap($message, 72); // Keep the message neat n' tidy
		
			// Set the mail headers into a variable
			$headers = "MIME-Version: 1.0\r\n";
			$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
			$headers .= "From: " . $name . " <" . $email . ">\r\n";
			$headers .= "X-Priority: 1\r\n";
			$headers .= "X-MSMail-Priority: High\r\n\r\n";
		
			
			// Send the email!
			mail($to, $subject, $message, $headers);
		?>

            <!-- Show success message after email has sent -->
            <h5>Thanks for contacting Glutopia!</h5>
            <p>Please allow 24 hours for a response.</p>
            <p><a href="index.php" class="button block">&laquo; Go to Home Page</a></p>

            <?php
			} else {
		?>
<div class="promo-video">
                <a href="video/Bakery-Intro.mp4" target="_blank">
                    <div class="video glutopia-intro"> 
                    <h3>Glutopia Intro Video</h3>
                </div></a>
                <a href="video/Glutopia-investment.mp4" target="_blank">
                    <div class="video glutopia-invest">
                    <h3>Glutopia Investment Video</h3>
                </div></a>
</div>
            <div id="get-in-touch">
                <h1>Get in touch with us!</h1>
                <div class="form-inputs">
                    <form method="post" action="" id="contact-form">
                    <label for="name">Your name</label>
                    <input type="text" id="name" name="name">

                    <label for="email">Your email</label>
                    <input type="email" id="email" name="email">

                    <label for="message">and your message</label>
                    <textarea id="message" name="message"></textarea>


                    <span><label for="subscribe">Subscribe to newsletter </label><input type="checkbox" id="subscribe" value="Subscribe" name="subscribe"></span>

                    <input id="submit-btn" type="submit" class="button next" name="contact_submit" value="Send Message">
                </form>
                </div>
            </div>
            <?php
			}
		?>
        </div>
        <!-- contact end -->
        <!--php footer -->
        <?php include('includes/footer.php');
            ?>
        <!--
        <footer>
            <h3 class="openclose">
            </h3>
            <table class="hours">
                <caption>CAFE OPENING HOURS</caption>
                <tr>
                    <td>Monday</td>
                    <td>11am - 7pm</td>
                </tr>
                <tr>
                    <td>Tuesday - Friday</td>
                    <td>10am - 7pm</td>
                </tr>
                <tr>
                    <td>Saturday</td>
                    <td>9am - 7pm</td>
                </tr>
                <tr>
                    <td>Sunday</td>
                    <td>10:30am - 6:30pm</td>
                </tr>
            </table>


            <p>&copy; glutopia 2018 | + 44 (0)208 974 5444</p>

        </footer>

    </main>
</body>

</html>
-->
