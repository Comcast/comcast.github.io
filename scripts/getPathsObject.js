const fs = require('fs');

module.exports = (directory) => {
  const fileObj = {};

  const walkSync = (dir) => {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = `${dir}${file}`;
      const fileStat = fs.statSync(filePath);

      if (fileStat.isDirectory()) {
        walkSync(`${filePath}/`);
      } else {
        const cleanFileName = filePath
          .substr(0, filePath.lastIndexOf('.'))
          .replace(directory, '');

        fileObj[`/${cleanFileName}`] = {
          page: `/${cleanFileName}`,
          lastModified: fileStat.mtime,
        };
      }
    });
  };

  walkSync(directory);

  return fileObj;
};
