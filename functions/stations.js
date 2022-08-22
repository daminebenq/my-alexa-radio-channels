// Set your STDLIB_LIBRARY_TOKEN inside env.json
const db = require('lib')({ token: 'tok_dev_77y7nv93neNE1VXdgBJtWCU3KtVJi4U7wbUWNBSJPFGTHce8W9r7m9bpAQPTKhDh' }).utils.kv;

// TO GET MORE STREAMS, GO TO http://directory.shoutcast.com. All URLs should start with https
const sample_cstations = [
	{
		name: 'meditate',
		url: 'https://yp.shoutcast.com/sbin/tunein-station.m3u?id=716503'
	},
	{
		name: 'candles',
		url: 'https://yp.shoutcast.com/sbin/tunein-station.m3u?id=672521'
	},
	{
		name: 'ambient sleeping pill',
		url: 'https://yp.shoutcast.com/sbin/tunein-station.m3u?id=1390835'
	},
	{
		name: 'ibiza',
		url: 'https://yp.shoutcast.com/sbin/tunein-station.m3u?id=1762384'
	},
	{
		name: 'disco',
		url: 'https://yp.shoutcast.com/sbin/tunein-station.m3u?id=1684591'
	}
];

module.exports = async (status = '', info = {}) => {
	
	if (status) {
		// console.log('status', status)
		let res = await db.set({
			key: 'channels',
			value: info
		});
		return res;
	} else {

		info = await db.get({
			key: 'channels'
		});
		// console.log('else', info);
		return info;
	}
};