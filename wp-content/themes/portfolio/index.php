<?php get_header(); ?>

	<div class="main-skills">
		<div class="col-md-4 main-skills-single">
			<h2>HTML</h2>
		</div>
		<div class="col-md-4 main-skills-single">
			<h2>CSS</h2>
		</div>
		<div class="col-md-4 main-skills-single">
			<h2>JavaScript</h2>
		</div>
	</div>
	<div class="tab">
		<h3 class="tab-white"><a href="#">About</a></h3>
		<svg class="slant-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
				<polygon points="100 100 100 0 0 0" />
		</svg>
	</div>
	<div class="main-about">
		
	</div>	

	<?php get_template_part('/template-parts/loop'); ?>

<?php get_sidebar(); ?>

<?php get_footer(); ?>