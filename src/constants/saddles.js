const hopp1 = { saddle: 'Hopp 1', location: 'Dorcas' }
const hopp2 = { saddle: 'Hopp 2', location: 'Micro' }
const hopp3 = { saddle: 'Hopp 3', location: 'HK' }
const hopp4 = { saddle: 'Hopp 4', location: 'Cornet' }
const hopp5 = { saddle: 'Hopp 5', location: 'HK' }
//const hopp6 = { saddle: 'Hopp 6', location: 'Tesla' }
const hopp6 = { saddle: '-', location: 'Repareras' }
const hopp7 = { saddle: 'Hopp 7', location: 'Kabala' }
const HS = { saddle: 'HS', location: 'Brad Pitt' }
const kieffer = { saddle: 'Kieffer', location: 'Centano' }
const egen = { saddle: 'Egen', location: ''}  // Egen sadel som inte klassas som hoppsadel
const confirmSaddle = " har inte hoppat på ett tag. När tillbaka: dubbelkolla att utrustningen fortf. stämmer och passar."

const EQUIPMENT = [
  {
    horse: 'Alonso',
    saddles: [hopp4],
    girthLength: { name: 'Sadelgjord', cm: '135' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Brad Pitt',
    saddles: [HS],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Centano',
    saddles: [kieffer],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Cornet',
    saddles: [hopp4],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ],
  },
  {
    horse: 'Dorcas',
    saddles: [egen],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Gainsley',
    saddles: [egen],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Harry',
    saddles: [hopp3, egen],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Harusa',
    saddles: [hopp6, hopp3, hopp4],
    girthLength: { name: 'Sadelgjord', cm: '120' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Ideaal',
    saddles: [hopp4, hopp1],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Janne',
    saddles: [hopp3, HS],
    girthLength: { name: 'Sadelgjord', cm: '120' },
    other: [
      { name: '', equipment: [''] }
    ],
  },
  {
    horse: 'Jedda',
    saddles: [hopp4, hopp3, hopp6, HS],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ],
  },
  {
    horse: 'Joop',
    saddles: [hopp6, hopp3, HS],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ],
  },
  {
    horse: 'Kema',
    saddles: [egen],
    girthLength: { name: '', cm: '' },
    other: [
      { name: 'Övrigt', equipment: ['martingal'] }
    ],
  },
  {
    horse: 'Lana',
    saddles: [HS],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ],
  },
  {
    horse: 'Lulu',
    saddles: [hopp7, hopp5],
    girthLength: { name: 'Sadelgjord', cm: '110' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Micro',
    saddles: [hopp2],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ],
  },
  {
    horse: 'Meije',
    saddles: [egen],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ],
  },
  {
    horse: 'Roy',
    saddles: [HS],
    girthLength: { name: 'Sadelgjord', cm: '120-125' },
    other: [
      { name: 'Övrigt', equipment: ['martingal'] }
    ],
  },
  {
    horse: 'Unic',
    saddles: [hopp2],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Wendy',
    saddles: [hopp4],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  /*
  {
    horse: 'Namn',
    saddles: [hopp3, HS],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ],
    textRow: 'Hästnamn' + confirmSaddle
  },
  */
]

export default EQUIPMENT