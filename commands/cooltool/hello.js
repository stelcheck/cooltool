exports.describe = {
  en: 'Hello world!',
  ja: '今日は！'
};

exports.params = [{
  name: 'name',
  describe: 'Put in your name!',
  demand: true
}]

exports.options = {
  d: {
    alias: 'debug',
    describe: 'debug command',
    demand: false,
  }
}

exports.execute = function (options, name, callback) {
  if (options.d) {
    console.log('debug -- ', name)
    console.log('debug -- ', options)
  }

  console.log(`Hello ${name}!`)
  callback()
};
