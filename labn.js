function onInnerClick(){
    s1.classList.remove('cwhite');
    s1.classList.add('cblack');
    s2.classList.remove('cblack');
    s2.classList.add('cwhite');
    s3.classList.remove('cblack');
    s3.classList.add('cwhite');
    s4.classList.remove('cwhite');
    s4.classList.add('cblack');
    
    
    inner.removeEventListener('click',onInnerClick);

    inner.addEventListener('click',onInnerClickRepeat);


}
function onInnerClickRepeat(){
    s1.classList.remove('cblack');
    s1.classList.add('cwhite');
    s2.classList.remove('cwhite');
    s2.classList.add('cblack');
    s3.classList.remove('cwhite');
    s3.classList.add('cblack');
    s4.classList.remove('cblack');
    s4.classList.add('cwhite');

    inner.removeEventListener('click',onInnerClickRepeat);
    inner.addEventListener('click',onInnerClick);
    
}


const inner = document.querySelector('#innerside');
inner.addEventListener('click',onInnerClick);


const s1 = document.querySelector('#s1');
const s2 = document.querySelector('#s2');
const s3 = document.querySelector('#s3');
const s4 = document.querySelector('#s4');