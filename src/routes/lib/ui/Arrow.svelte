<script>
    import Icon from '@iconify/svelte';
</script>

<h4>Scroll to begin</h4>
<div class="bounce">
<Icon icon="iconoir:nav-arrow-down" color="#002a41" width="48" />
</div>

<style>
    .bounce {
		-webkit-animation-duration: 2s;
		        animation-duration: 2s;
		-webkit-animation-iteration-count: infinite;
		        animation-iteration-count: infinite;
		-webkit-animation-name: bounce;
		        animation-name: bounce;
		-webkit-animation-timing-function: ease;
		        animation-timing-function: ease;
	}
	@-webkit-keyframes bounce {
		0%   { -webkit-transform: translateY(10px); transform: translateY(10px); }
		30%  { -webkit-transform: translateY(-10px); transform: translateY(-10px); }
		50%  { -webkit-transform: translateY(10px); transform: translateY(10px); }
		100% { -webkit-transform: translateY(10px); transform: translateY(10px); }
	}
	@keyframes bounce {
		0%   { -webkit-transform: translateY(10px); transform: translateY(10px); }
		30%  { -webkit-transform: translateY(-10px); transform: translateY(-10px); }
		50%  { -webkit-transform: translateY(10px); transform: translateY(10px); }
		100% { -webkit-transform: translateY(10px); transform: translateY(10px); }
	}

    h4 {
        color:var(--brandDarkBlue);
        margin-block-end: 0px;

    }
</style>


