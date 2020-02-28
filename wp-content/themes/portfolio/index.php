<?php get_header(); ?>
	
<section class="hero">
	<div class="container-fluid">
		<div class="row">
			<div class="hero-text col-lg-7">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium porro ipsam in? Ad repellat placeat nam? Vero, temporibus praesentium quas totam facilis fugit, nisi commodi iusto magni voluptates iste.
				</p>
			</div>
			<div class="hero-menu col-lg-4">
				<h1><span><span><span>Filip Vušković</span></span></span></h1>
				<ul class="hero-menu-list">
					<li class="hero-menu-list-item"><a class="link" href="skills">Skills</a></li>
					<li class="hero-menu-list-item"><a class="link" href="about">About</a></li>
					<li class="hero-menu-list-item"><a class="link" href="projects">Projects</a></li>
					<li class="hero-menu-list-item"><a class="link" href="contact-info">Contact Information</a></li>
					<li class="hero-menu-list-item"><a class="link" href="contact-form">Contact Form</a></li>
				</ul>   
			</div>
		</div>
	</div>
</section>

<div class="container-fluid">
	<div class="row">
		<div class="tab tab-right">
			<div class="tab-right-header col-lg-4"><a class="link" href="skills">Skills</a></div>
			<span class=" slant slant-right"></span>
		</div>
	</div>
</div>

<section id="skills" class="main-skills">
	<div class="container">
		<div class ="row center around">
			<div class="col-lg-4">
				<div class="main-skills-single">
					<h2>HTML</h2>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="main-skills-single">
					<h2>CSS</h2>
				</div>
			</div>
			<div class="col-lg-4">
				<div class="main-skills-single">
					<h2>JavaScript</h2>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="container-fluid">
	<div class="row">
		<div class="tab tab-left">
			<div class="tab-left-header col-lg-4"><a class="link" href="about">About</a></div>
			<span class="slant slant-left"></span>
		</div>
	</div>
</div>

<section id="about" class="main-about">
	<div class="container">
		<div class="row center">
			<div class="col-lg-12">
				<div class="main-about-text">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestias sunt, ut modi eum magni labore deserunt iusto possimus incidunt rem repellat totam laborum culpa voluptatem. Facere error sequi aperiam?
					</p>
				</div>	
			</div>
		</div>
	</div>
</section>

<div class="container-fluid">
	<div class="row">
		<div class="tab tab-right">
			<div class="tab-right-header col-lg-4"><a class="link" href="projects">Projects</a></div>
			<span class="slant slant-right"></span>
		</div>
	</div>
</div>

<section id="projects" class="main-projects">
	<div class="container">
		<div class="row center">
			<div class="col-lg-12">
				<div class="main-projects-slider">

				</div>
			</div>
		</div>
	</div>
</section>

<div class="container-fluid">
	<div class="row">
		<div class="tab tab-left">
			<div class="tab-left-header col-lg-4"><a class="link" href="contact-info">Contact information</a></div>
			<span class="slant slant-left"></span>
		</div>
	</div>
</div>

<section id="contact-info" class="main-contact">
	<div class="container">
		<div class="row center">
			<div class="col-lg-12">
				<div class="main-contact-info">
					
				</div>
			</div>
		</div>
	</div>
</section>

<div class="container-fluid">
	<div class="row">
		<div class="tab tab-right">
			<div class="tab-right-header col-lg-4"><a class="link" href="contact-form">Contact Form</a></div>
			<span class="slant slant-right"></span>
		</div>
	</div>
</div>

<section id="contact-form" class="form">
	<div class="container">
		<div class="row center">
			<div class="col-lg-12">
				<div class="form-body">
					<form>
						<div class="form-body-title">
							<h1><a>Send me a message</a></h1>
						</div>
						
						<label class="input-group half">
							<input type="text" placeholder="Name" />
							<input type="mail" placeholder="E-mail" />	
						</label>
						<label class="input-group half">
							<!-- <input type="textarea" rows="10" placeholder="Message" /> -->
							<textarea rows="10"></textarea>
							<button class="blue" type="button">Send!</button>	
						</label>
						<label class="input-group">
						</label>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>




	<?php get_template_part('/template-parts/loop'); ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>