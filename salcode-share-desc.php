<?php
/**
 * Plugin Name:       salcode Share Description
 * Plugin URI:        https://github.com/salcode/salcode-share-desc
 * Description:       Allows you to set the Share Description in post meta from Gutenberg block editor.
 * Version:           0.1.0
 * Requires at least: 6.0.0
 * Requires PHP:      7.4
 * Author:            Sal Ferrarello
 * Author URI:        https://salferrarello.com/
 * License:           apache-2.0
 * License URI:       http://www.apache.org/licenses/LICENSE-2.0
 * Text Domain:       salcode-share-desc
 * Domain Path:       /languages
 */

namespace salcode\ShareDesc;

/**
 * Expose salcode_share_desc post meta to REST API (and thereby Gutenberg).
 */
add_action( 'init', __NAMESPACE__ . '\salcode_share_desc_register_post_meta' );
function salcode_share_desc_register_post_meta() {
    $post_type = ''; // All post types, see register_post_meta() documentation.
    register_post_meta( $post_type, 'salcode_share_desc', [
        'auth_callback' => function() {
            return current_user_can('edit_posts');
        },
        'sanitize_callback' => 'sanitize_text_field',
        'show_in_rest'      => true,
        'single'            => true,
        'type'              => 'string',
    ]);
}

/**
 * Make WordPress aware of our JavaScript file and tell
 * WordPress to refer to this JavaScript file by the handle
 * "salcode-share-desc".
 */
function register_assets() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	wp_register_script(
		'salcode-share-desc',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version'],
		true
	);
}
add_action( 'init', __NAMESPACE__ . '\register_assets' );

/**
 * Add our JavaScript to the list of files WordPress loads
 * when the Gutenberg editor is loaded.
 *
 * This only loads when the Gutenberg editor is loaded because
 * this function is being run on the "enqueue_block_editor_assets"
 * PHP action.
 */
function enqueue_editor_assets() {
	wp_enqueue_script( 'salcode-share-desc' );
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor_assets' );
