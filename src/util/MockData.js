export let timeline = [];
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0)
        timeline.push(mockArticle(i));
    else timeline.push(mockHitokoto(i));
}

function mockArticle(id) {
    return {
        type: 0,
        id: id,
        title: "Hello World",
        date: "2019-08-23",
        abstract: "nothing to say about.",
        link: "hello-world"
    };
}

function mockHitokoto(id) {
    return {
        type: 1,
        id: id,
        content: "如四方形的永恒。",
        source: "《消失的艺术》"
    };
}
