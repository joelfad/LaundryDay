function importAll(r) {
    let images = [];
    r.keys().forEach((item, index) => { images.push(r(item)); });
    return images;
}

export default importAll(require.context('./icons', false, /\.svg/));
