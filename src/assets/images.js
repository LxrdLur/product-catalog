// подстрой путь под свою папку, например: '../img/*'
const modules = import.meta.glob('../img/*.{png,jpg,jpeg,webp,svg}', {
    eager: true,
});

export const images = Object.fromEntries(
    Object.entries(modules).map(([path, mod]) => {
        const file = path.split('/').pop();       // 'gtx1660.jpg'
        return [file, mod.default];               // { 'gtx1660.jpg': '/assets/...' }
    })
);