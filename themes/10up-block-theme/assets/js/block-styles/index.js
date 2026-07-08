import { unregisterBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

domReady(() => {
	unregisterBlockStyle('core/button', 'fill');
	unregisterBlockStyle('core/button', 'outline');
	unregisterBlockStyle('core/quote', 'default');
	unregisterBlockStyle('core/quote', 'plain');
	unregisterBlockStyle('core/quote', 'large');
	unregisterBlockStyle('core/table', 'regular');
	unregisterBlockStyle('core/table', 'stripes');
	unregisterBlockStyle('core/image', 'default');
	unregisterBlockStyle('core/image', 'rounded');
	unregisterBlockStyle('core/separator', 'default');
	unregisterBlockStyle('core/separator', 'wide');
	unregisterBlockStyle('core/separator', 'dots');
	unregisterBlockStyle('core/site-logo', 'default');
	unregisterBlockStyle('core/site-logo', 'rounded');
});
