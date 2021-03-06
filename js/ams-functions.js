/**
 * Innovation Forum Kashmir
 * https://www.iforkashmir.com
 * 
 * Designed and developed by
 * Alpha Magnus Studios
 * https://www.alphamstudios.com
 */

function header_top() {
	document.write(`<!-- header-top -->
	<div class="header-top">
		<!-- container -->
		<div class="container">
			<div class="social w3-agileitsicons">
				<ul>
					<li>
						<a href="#">
							<i class="fa fa-facebook" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a class="twt" href="#">
							<i class="fa fa-twitter" aria-hidden="true"></i>
						</a>
					</li>
				</ul>
			</div>
			<div class="w3layouts-details">
				<ul>
					<li>
						<a href="mailto:iforkashmir@gmail.com">
							<span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
							iforkashmir@gmail.com
                        </a>
					</li>
					<li>
					   <a href="tell:+919797757234">
						<span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>(+91) 9797 757 234</li>
						</a>
				</ul>
			</div>
			<div class="clearfix"> </div>
		</div>
		<!-- //container -->
	</div>
	<!-- //header-top -->`);
}


function navbar(page_id) {
	document.write(`
	<li class="home-icon"> <a href="index.html"><span class="glyphicon glyphicon-home" aria-hidden="true"></span></a></li>
	<li> <a href="index.html"` + ((page_id == "index") ? 'class="active"' : '') + `>Home</a></li>
	<li> <a href="gallery.html"` + ((page_id == "gallery") ? 'class="active"' : '') + `>Gallery</a></li>
	<li> <a href="about.html"` + ((page_id == "about") ? 'class="active"' : '') + `>About</a></li>
	<li><a href="register.html"` + ((page_id == "register") ? 'class="active"' : '') + `>Register</a></li>
	
	<li class="dropdown">
                    <a href="#" ` + ((page_id == "message") ? ' class="active"' : '') + ` class="dropdown-toggle" data-toggle="dropdown">Messages <b class="caret"></b></a>
                    <ul class="dropdown-menu agile_short_dropdown">
                        <li><a href="message.html">Prof Saad - Head, IIED Centre </a></li>
                        <li><a class="messages-link" href="#">Innovator 1</a></li>
                        <li><a class="messages-link" href="#">Innovator 2</a></li>
                        <li><a class="messages-link" href="#">Innovator 3</a></li>
                    </ul>
                </li>
	<li> <a href="contact.html"` + ((page_id == "contact") ? 'class="active"' : '') + `>Contact</a></li>
	`)
}

function footer() {
	document.write(`<div class="footer">
		<div class="container">
			<div class="footer-agileinfo">
				<div class="col-md-12 footer">
					<div class="w3-agileitsicons">
						<ul>
							<li>
								<a href="#">
									<i class="fa fa-facebook" aria-hidden="true"></i>
								</a>
							</li>
							<li>
								<a class="twt" href="#">
									<i class="fa fa-twitter" aria-hidden="true"></i>
								</a>
							</li>
						</ul>
					</div>

					<div class="copyright">
						<p> &copy; ` + new Date().getFullYear() + ` Innovation Forum Kashmir | Designed by <a href="https://www.alphamstudios.com" style="color:#10c7bf;" target="_blank">Alpha Magnus Studios</a>
					</p>
					</div>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>`)
}