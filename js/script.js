const html_skill = document.getElementById("html_skill")
const css_skill = document.getElementById("css_skill")
const js_skill = document.getElementById("js_skill")
const git_skill = document.getElementById("git_skill")

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
	if (scroll_pos > 1000) {
		html_skill.classList.add("html-skill")
		css_skill.classList.add("css-skill")
		js_skill.classList.add("js-skill")
		git_skill.classList.add("git-skill")
	}
}

window.addEventListener('scroll',function(e){
	last_known_scroll_position = window.scrollY;
	if (!ticking) {
		window.requestAnimationFrame(function() {
			doSomething(last_known_scroll_position);
			ticking - false;
		});
		ticking - true;
		}
});