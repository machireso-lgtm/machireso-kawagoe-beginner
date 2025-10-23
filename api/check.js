export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const body = req.body || {};
  const type = body.type || '';
  const value = typeof body.value === 'string' ? body.value.trim() : '';
  // load answers
  const answers = {
    'quiz1': 'かんこう',
    'quiz2': 'はちまん',
    'quiz3': '30',
    'quiz4': 'くれあ',
    'quiz5': '11',
    'quiz6': '1987',
    'quiz7': 'あひる',
    'quiz8': 'こえど',
    'quiz9': 'といれ',
    'quiz10': 'おさいせん',
    'quiz11': '7',
    'quiz12': 'きた',
    'quiz13': 'ときのかね',
    'quiz14': '10601',
    'quiz15': 'おかわり',
    'quiz16': 'まつり',
    'quiz17': 'みなさん',
    'quiz18': 'かしや',
    'quiz19': 'ぽすと',
    'quiz20': '70',
    'password': 'kawagoe2025'
  };

  if(type === 'password'){
    res.json({ ok: value === answers['password'] });
    return;
  }
  // quiz checks
  if(answers[type] !== undefined){
    const correct = answers[type];
    // case-insensitive for hiragana/latin? we'll compare normalized lower-case
    if(value.toLowerCase() === String(correct).toLowerCase()){
      res.json({ ok: true });
    } else {
      res.json({ ok: false });
    }
    return;
  }
  res.json({ ok: false });
}
