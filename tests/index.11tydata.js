
function pad(val) {
  return val < 10 ? '0' + val : val;
}

function formatDate(obj) {
  const date = obj.getFullYear() + '-' + pad(obj.getMonth()) + '-' + pad(obj.getDate());
  const time = pad(obj.getHours()) + ':' + pad(obj.getMinutes()) + ':' + pad(obj.getSeconds());
  return date + ' ' + time;
}

module.exports = {
  eleventyComputed: {
    files: data => {
      const files = data.collections.all
        .filter(f => f.url !== data.page.url)
        .map(f => {
          return {
            url: f.data.page.url,
            path: f.filePathStem.substr(1),
            title: f.data.page.title,
            date: formatDate(f.data.page.date)
          };
        });
      files.sort((a, b) => {
        return a.path > b.path ? 1 : -1;
      })
      return files;
    }
  }
}