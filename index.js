document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.01}px;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.015}px;
        --move-2x: ${(e.clientX - window.innerWidth / 2) * -.02}px;
        --move-2y: ${(e.clientY - window.innerHeight / 2) * -.03}px;
        --move-3x: ${(e.clientX - window.innerWidth / 2) * -.03}px;
        --move-3y: ${(e.clientY - window.innerHeight / 2) * -.04}px;
        --move-4x: ${(e.clientX - window.innerWidth / 2) * -.04}px;
        --move-4y: ${(e.clientY - window.innerHeight / 2) * -.05}px;
        `
    })
})