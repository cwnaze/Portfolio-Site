<script lang="ts">
	import '../app.css';
	let { children } = $props();
	
	import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
</script>

{@render children()}
