<?php
/* Plugin name: HelloPlugin */
/* Version: 0.0.7 */
add_filter('the_content', 'my_plugin_add_content', 999, 1);
function my_plugin_add_content($content) {
    if ( is_single('test') ) {
        return $content . '<div id="set-content" style="font-size: 55px; color: purple";"><p>HELLO 2.0<p></div>';
    }
    return $content;
}
