<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
    <head>
        <meta charset="utf-8" />
        <title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="initial-scale=1, width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="<?php bloginfo('description'); ?>" />

        <!-- google analytics -->
        <script type="text/javascript">
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-XXXXX-XX']);
            _gaq.push(['_trackPageview']);

            (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
        </script>

        <?php wp_head(); ?>

    </head>
    <body <?php body_class(); ?>>

        <!-- header -->
        <header class="header">
            <div class="header-nav header-hidden">
                <div class="header-nav-title"><h3><span><span><span>Filip Vušković</span></span></span></h3></div>
                <ul class="header-nav-list">
                    <li class="header-nav-list-item"><a href=#>Skills</a>
                    <li class="header-nav-list-item"><a href=#>About</a>
                    <li class="header-nav-list-item"><a href=#>Projects</a>
                    <li class="header-nav-list-item"><a href=#>Contact</a>
                </ul>
            </div>
            <div class="header-content">
                <div class="header-content-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium praesentium porro ipsam in? Ad repellat placeat nam? Vero, temporibus praesentium quas totam facilis fugit, nisi commodi iusto magni voluptates iste.</div>
                <div class="header-content-menu">
                    <!-- circular img + navigation -->
                    <h1><span><span><span>Filip Vušković</span></span></span></h1>
                    <ul class="header-content-menu-list">
                        <li class="header-content-menu-list-item"><a href=#>Skills</a></li>
                        <li class="header-content-menu-list-item"><a href=#>About</a></li>
                        <li class="header-content-menu-list-item"><a href=#>Projects</a></li>
                        <li class="header-content-menu-list-item"><a href=#>Contact</a></li>
                    </ul>   
                </div>
            </div>
        </header>
        <!-- /header -->

        <div class="tab">
            <svg class="slant-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
                <polygon points="100 0 100 100 0 100" />
            </svg>
            <h3 class="tab-black"><a href="#">Skills</a></h3>
        </div>

        <!-- main -->
        <main class="main">