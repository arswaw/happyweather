const APIURL = 'https://dogh52o8ca.execute-api.us-east-2.amazonaws.com/production'

const isLocalhost = (function() {
    return window.location.href.startsWith("http://localhost")
})()

export {
    APIURL, isLocalhost
}