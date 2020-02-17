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
            <div class="header-nav js-hidden-right">
                <div class="header-nav-title"><h3><span><span><span>Filip Vušković</span></span></span></h3></div>
                <ul class="header-nav-list">
                    <li class="header-nav-list-item"><a href=#>Skills</a>
                    <li class="header-nav-list-item"><a href=#>About</a>
                    <li class="header-nav-list-item"><a href=#>Projects</a>
                    <li class="header-nav-list-item"><a href=#>Contact</a>
                </ul>
            </div>
        </header>
        <!-- /header -->

        <!-- main -->
        <main class="main">