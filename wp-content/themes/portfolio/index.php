<?php get_header(); ?>
	
<section class="hero">
	<div class="hero-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium porro ipsam in? Ad repellat placeat nam? Vero, temporibus praesentium quas totam facilis fugit, nisi commodi iusto magni voluptates iste.</div>
	<div class="hero-menu">
		<!-- circular img + navigation -->
		<h1><span><span><span>Filip Vušković</span></span></span></h1>
		<ul class="hero-menu-list">
			<li class="hero-menu-list-item"><a href=#>Skills</a></li>
			<li class="hero-menu-list-item"><a href=#>About</a></li>
			<li class="hero-menu-list-item"><a href=#>Projects</a></li>
			<li class="hero-menu-list-item"><a href=#>Contact</a></li>
		</ul>   
	</div>
</section>

<div class="row">
	<div class="tab tab-right">
		<div class="tab-right-header"><a href="#">Skills</a></div>
		<span class="slant-right"></span>
	</div>
</div>

<section class="main-skills">
	<div class="container">
		<div class ="row center">
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

<div class="row">
	<div class="tab tab-left">
		<div class="tab-left-header"><a href="#">About</a></div>
		<span class="slant-left"></span>
	</div>
</div>

<section class="main-about">
	<div class="container">
		<div class="row center">
			<div class="col-lg-6">

			</div>
			<div class="col-lg-6">
				
			</div>
		</div>
	</div>
</section>

	<?php get_template_part('/template-parts/loop'); ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>