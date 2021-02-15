function titleCase(str) {
  return str.split(' ').map((item) => {
    return item[0].toUpperCase() + item.slice(1).toLowerCase();
  }).join(' ');
}

titleCase("I'm a little tea pot");