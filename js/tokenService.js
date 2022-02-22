const setToken = (token, timeToLive = TOKEN_TIME_TO_LIVE_IN_MINUTES) => {
    localStorage.setItem(TOKEN, token)
    setTokenExpirationTime(timeToLive)
}

const setTokenExpirationTime = (minutes) => {
    const expirationTimeInMilliSeconds = minutes * 60 * 1000
    const currentTime = Date.now()
    localStorage.setItem(TOKEN_EXPIRES_TIME, `${currentTime + expirationTimeInMilliSeconds}`)
}