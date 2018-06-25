export const randomAvatar = () => {
    const avatars = [
        "https://images.unsplash.com/photo-1505481354248-2ba5d3b9338e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bdf10e1615dc7c122da9b74cd9cfcc0f&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1506160484494-d2b1d999debd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=758725217d05454551484dc0c92d3a03&auto=format&fit=crop&w=317&q=80",
        "https://images.unsplash.com/photo-1457978064644-ac327d69ad15?ixlib=rb-0.3.5&s=9d8caba1d7a23ebf5fa0b471812b14f4&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1506499422601-ecc792cf898e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96c8170d700aa5a914b043ecc28dc8f6&auto=format&fit=crop&w=334&q=80",
        "https://images.unsplash.com/photo-1456081445129-830eb8d4bfc6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e0bdb66abbe744b922815a9f1b64ee76&auto=format&fit=crop&w=758&q=80",
        "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71d59cd22de21da8d2939bc203617983&auto=format&fit=crop&w=360&q=80"

    ]
    let selected = 0 - 0.5 + Math.random() * ((avatars.length - 1) - 0 + 1);
    selected = Math.round(selected);
    return avatars[selected];
}

export const randomBg = () => {
    const bg = [
        "https://images.unsplash.com/photo-1514377216269-4b6fd357bd92?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ebfa317d92e25c3c80108722901a49ce&auto=format&fit=crop&w=1534&q=80",
        "https://images.unsplash.com/photo-1524261399568-56d8c862aaf8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eb319f95e1b6e9454e00526cbb0daaa4&auto=format&fit=crop&w=801&q=80",
        "https://images.unsplash.com/photo-1524410411359-24e9a0aa7076?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00ae8ec957379832eb16396ddcb43c36&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1502937890112-a62a440db6ee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a85258ef5922ad0e195c1d9401d2b6f6&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1503900311769-9f25e9f06068?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06a1037d8bae296720cc24369d7090d6&auto=format&fit=crop&w=753&q=80",
        "https://images.unsplash.com/photo-1506469265591-1fba55e325ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bf8c37653649d073ce1dc7c86357783e&auto=format&fit=crop&w=1575&q=80",

    ]
    let selected = 0 - 0.5 + Math.random() * ((bg.length - 1) - 0 + 1);
    selected = Math.round(selected);
    return bg[selected];
}

// "https://cdn.pixabay.com/photo/2018/02/02/22/28/nature-3126513_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/01/31/07/36/sunset-3120484_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/02/15/21/55/sunset-3156440_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/01/21/19/57/tree-3097419_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/04/10/11/24/waters-3307099_960_720.jpg",
// "https://cdn.pixabay.com/photo/2017/12/17/19/08/away-3024773_960_720.jpg",
// "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg",
// "https://cdn.pixabay.com/photo/2017/12/22/11/09/schilthorn-3033448_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/02/26/21/01/cyprus-3184019_960_720.jpg",
// "https://cdn.pixabay.com/photo/2017/11/05/12/35/trees-2920264_960_720.jpg",
// "https://cdn.pixabay.com/photo/2017/01/18/21/34/cyprus-1990939_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/04/01/10/10/door-3280451_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/03/31/23/10/window-3279569_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/04/06/22/07/stones-3297163_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/03/31/22/53/nature-3279532_960_720.jpg"

//avatar
// "https://cdn.pixabay.com/photo/2018/04/13/06/53/cat-3315710_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/04/09/08/37/cat-3303455_960_720.jpg",
// "https://cdn.pixabay.com/photo/2017/07/08/08/59/cat-2483826_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/04/19/20/45/cute-3334265_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/03/18/18/06/miniature-3237735_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/04/15/11/44/dog-3321456_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/04/15/07/25/animal-3321002_960_720.jpg",
// "https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/02/15/16/51/cat-3155754_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/04/07/18/12/cat-3299150_960_720.jpg",
// "https://cdn.pixabay.com/photo/2014/05/23/12/06/cat-351926_960_720.jpg",
// "https://cdn.pixabay.com/photo/2018/04/09/08/36/cat-3303454_960_720.jpg",
// "https://cdn.pixabay.com/photo/2017/10/01/21/01/cat-2807043_960_720.jpg",
// "https://cdn.pixabay.com/photo/2017/10/01/17/27/cat-2806304_960_720.jpg" 