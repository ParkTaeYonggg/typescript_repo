// 레이지 이미지들을 담을 디비역할

interface ImgDB {
    id: number,
    src: string,
    name: string
}

export const imgs: ImgDB[] = [
    {
        id: 0,
        src: "https://cdn.pixabay.com/photo/2021/06/25/10/19/monkey-6363455_1280.jpg",
        name: "monkey"
    },
    {
        id: 1,
        src: "https://cdn.pixabay.com/photo/2021/11/21/22/08/british-shorthair-6815375_1280.jpg",
        name: "cat"
    },
    {
        id: 2,
        src: "https://cdn.pixabay.com/photo/2021/12/28/04/12/snow-6898585_1280.jpg",
        name: "snow"
    },
    {
        id: 3,
        src: "https://cdn.pixabay.com/photo/2016/11/29/03/44/animal-1867125_1280.jpg",
        name: "peng"
    }
]