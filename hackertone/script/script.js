let btn_file = document.querySelector('.btn_file');
let btn_add = document.querySelector('.btn_add');
let cab_st = document.querySelector('.cabinet_st');
let pr = document.querySelector('.profil');
let ex = document.querySelector('.exit');

pr.style.display = 'none';

cab_st.onclick = function() {
	pr.style.display = 'block';
}

ex.onclick = function() {
	pr.style.display = 'none';
}

btn_file.onclick = function() {
	btn_add.disabled = false;
}