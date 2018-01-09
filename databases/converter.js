const fs = require('fs');
const iconv = require('iconv-lite');
const csv = require('csv');

const columns = {
  '行先（終着）': 'distination',
  '始発': 'from',
  '国際会館': 'kokusaikaikan',
  '松ヶ崎': 'matsugasaki',
  '北山': 'kitayama',
  '北大路': 'kitaoji',
  '鞍馬口': 'kuramaguchi',
  '今出川': 'imadegawa',
  '丸太町': 'marutamachi',
  '烏丸御池': 'karasuma',
  '四条': 'shijo',
  '五条': 'gojo',
  '京都': 'kyoto',
  '九条': 'kujo',
  '十条': 'jujo',
  'くいな橋': 'kuinabashi',
  '竹田': 'takeda',
  '新田辺': 'tanabe',
  '近鉄奈良': 'nara'
}

function parseColumns(line) {
  const culumns = [];
  for (let key in line) {
    culumns.push(columns[line[key]]);
  }
  return culumns;
}

function parseCsv(path) {
  console.log(`Convert csv to JSON in ${path}`)
  return new Promise((resolve, reject) => {
    try {
      const parser = csv.parse({columns: parseColumns})
      const rs = fs.createReadStream(`./base/${path}`)
        .pipe(iconv.decodeStream('SJIS'))
        .pipe(iconv.encodeStream('UTF-8'))
        .pipe(parser)
        const timetables = []
        parser.on('readable', () => {
          while (data = parser.read()) {
            timetables.push(data)
          }
        })
        parser.on('end', () => {
          createJsonFile(path, timetables)
          resolve(true)
        })
      } catch (e) {
        console.log(e)
        reject(e)
      }
  })
}

function createJsonFile(path, data) {
  const fileName = path.split('.csv')[0]
  fs.writeFile(`./json/${fileName}.json`, JSON.stringify(data, null, '    '));
  return true
}

function convertBaseData(basePath = './base') {
  return new Promise((resolve, reject) => {
    fs.readdir(basePath, (err, files) => {
      if (err) return reject(err);
      const fileList = files.filter(file => {
        return fs.statSync(`${basePath}/${file}`).isFile() && /.*\.csv$/.test(file); //絞り込み
      })
      resolve(fileList);
    });
  })
}

convertBaseData()
  .then(fileList => Promise.all(fileList.map(parseCsv)))
  .then(data => console.log('convert succeeded'))
  .catch(err => console.log(err))
