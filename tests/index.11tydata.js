
function pad(val) {
  return val < 10 ? '0' + val : val;
}

function formatDate(obj) {
  const date = obj.getFullYear() + '-' + pad(obj.getMonth()) + '-' + pad(obj.getDate());
  const time = pad(obj.getHours()) + ':' + pad(obj.getMinutes()) + ':' + pad(obj.getSeconds());
  return date + ' ' + time;
}

function groupFiles(files) {
  const groups = [];
  files.forEach(file => {
    let group = groups.find(g => g.name === file.group);
    if (!group) {
      group = { name: file.group, files: []};
      groups.push(group);
    }
    group.files.push(file);
  });
  groups.sort((a, b) => {
    if (a.name === 'Other') return 1;
    if (b.name === 'Other') return -1;
    return a.name > b.name ? 1 : -1;
  });
  return groups;
}

module.exports = {
  eleventyComputed: {
    groups: data => {
      const files = data.collections.all
        .filter(f => f.url !== data.page.url)
        .map(f => {
          return {
            url: f.data.page.url.endsWith('.html') ? f.data.page.url.substr(1) : f.data.page.url.substr(1) + 'index.html',
            path: f.filePathStem.substr(1),
            title: f.data.title,
            date: formatDate(f.data.page.date),
            group: f.data.group ? f.data.group : 'Other'
          };
        });
      files.sort((a, b) => {
        return a.path > b.path ? 1 : -1;
      })
      return groupFiles(files);
    }
  }
}