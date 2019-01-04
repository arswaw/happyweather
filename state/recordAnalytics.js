async function* recordAnalytics(routeTaken) {
    const history = []

    while (history.length < 25) {
        console.info("routeTaken", routeTaken)
        history.push(routeTaken)
        yield history
    }
}

export { recordAnalytics }