// path/fs

const fs = require('fs-extra');
const path = require('path');

const modulePath = path.join(__dirname, 'node_modules', 'example');

fs.remove(modulePath)
    .then(() => {
        console.log('Папка удалена успешно');
    })
    .catch((err) => {
        console.error('Ошибка при удалении папки:', err);
    });
