export const postAgo = (postDate) => {
    const now = new Date()
    const postTime = new Date(postDate)

    const timeAgo = Math.abs(now.getTime() - postTime.getTime())
    const mins = Math.floor(timeAgo / (1000*60))
    const hours = Math.floor(timeAgo / (1000*60*60))
    const days = Math.floor(timeAgo / (1000*60*60*24))
    const weeks = Math.floor(timeAgo / (1000*60*60*24*7))

    if(weeks >= 1) {
        return `${weeks}w` 
    } else if(days >= 1) {
        return `${days}d`
    } else if(hours >= 1) {
        return `${hours}h`
    } else if(mins > 1) {
        return `${mins}m`
    } else {
        return `1m`
    }
}

export const isEdited = (created, updated) => {
    if(created===updated){
        return null
    } else {
        return "Edited"
    }
}