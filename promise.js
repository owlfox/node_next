const fetchData = callback => {
    setTimeout(() => {
        callback('Done!')
    }, 2000)
}
setTimeout(() => {
    console.log("first level done!")
    fetchData(text => {
        console.log(text)
    })
}, 2000)

const fetchNew = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!")
        }, 1000)
    })
    return promise;
}
//cleaner way use promise pattern
setTimeout(() => {
    console.log("timer done.")
    fetchNew()
    .then(text => {
        console.log(text + '1st promise')
        return fetchNew()
    }).then(text2 => {
        console.log("and more " + text2)
    })
}, 2000)

        
