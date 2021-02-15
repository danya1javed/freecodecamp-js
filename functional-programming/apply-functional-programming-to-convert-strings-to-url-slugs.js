// Only change code below this line
function urlSlug(title) {
    return title.trim().split(/\s+/)
        .map(item => item.toLowerCase())
        .join('-');
}
// Only change code above this line