var axios = require('axios'),
fs = require('fs');
module.exports = async (key) => {
var data = await axios.get(`https://bing.biturl.top/`),
image = await axios.get(data.data.url, {responseType: 'arraybuffer'})
fs.writeFileSync('./day.jpg', image.data, (err) => {
if (err) throw err;
})
return data.data
}