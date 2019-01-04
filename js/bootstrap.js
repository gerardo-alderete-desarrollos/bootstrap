;
((d) => {
    d.addEventListener('DOMContentLoaded', e => {
        const copy = d.querySelector('.Footer small')

        copy.innerHTML = `&copy; ${new Date().getFullYear()} @jonmircha`
    })
})(document);