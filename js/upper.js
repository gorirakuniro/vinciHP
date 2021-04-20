// スマホテキスト内容

//upper js
const upper = document.querySelector('.up_btn');
const wright = document.querySelector('.workitem__right');
upper.addEventListener('click', () => {
	wright.classList.toggle('upper');
	const hsup = wright.classList.contains('upper');
	if (hsup) {
		upper.innerHTML = '↓';
	} else {
		upper.innerHTML = '↑';
	}
});
