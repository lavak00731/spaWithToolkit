
const showHideFunc = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if(target.getAttribute('aria-expanded') === 'false') {
        target.setAttribute('aria-expanded', 'true');
    } else {
        target.setAttribute('aria-expanded', 'false');
    }
}
export default showHideFunc;