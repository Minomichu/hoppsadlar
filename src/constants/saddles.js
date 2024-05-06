const hopp1 = { saddle: 'Hopp 1', location: 'Dorcas' }
const hopp2 = { saddle: '-', location: '-' }
const hopp3 = { saddle: 'Hopp 3', location: 'HK' }
const hopp4 = { saddle: 'Hopp 4', location: 'Wendy' }
const hopp5 = { saddle: 'Hopp 5', location: 'HK' }
const hopp6 = { saddle: 'Hopp 6', location: 'HK' }
const hopp7 = { saddle: 'Hopp 7', location: 'Kabala' }
const kieffer2 = { saddle: 'Kieffer 2', location: 'Joop'}   // ### Byt ut till Hopp nr
const HS = { saddle: 'HS', location: 'HK' }
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
    horse: 'Centano',
    saddles: [kieffer],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Dorcas',
    saddles: [hopp1],
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
    saddles: [hopp3],
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ]
  },
  {
    horse: 'Harusa',
    saddles: [hopp6, hopp3],
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
    girthLength: { name: '', cm: '' },
    other: [
      { name: '', equipment: [''] }
    ],
    textRow: 'Janne' + confirmSaddle
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
    textRow: 'Lana' + confirmSaddle
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
    horse: 'Unic',
    saddles: [kieffer2],
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