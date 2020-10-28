const rtxGpu1 = 'GeForce RTX™ 2080'
const rtxGpu2 = 'GeForce RTX™ 2070'
const rtxGpu3 = 'GeForce RTX™ 2060'
const rtxGpuSuper = 'GeForce RTX™ 2070 SUPER'
const gtxGpu = 'GeForce GTX 1660Ti'

const intel9Cpu10 = '10th Gen Intel® Core™ i9'
const intel7Cpu10 = '10th Gen Intel® Core™ i7'
const intel7Cpu9 = '9th Gen Intel® Core™ i7'
const intel7Cpu8 = '8th Gen Intel® Core™ i7'

const displaySm = '14 inch display'
const displayMd = '15.6 inch display'
const displayLg = '17.3 inch display'

const performanceSSD = '1TB M.2 NVMe™ PCIe® 3.0 Performance SSD'
const smPerformanceSSD =
  '512GB + 512GB M.2 NVMe™ PCIe® 3.0 Performance RAID0 SSD'
const ssd = '1TB M.2 NVMe™ PCIe® 3.0 SSD'
const smSSD = '512GB M.2 NVMe™ PCIe® 3.0 SSD'
const raidSSD = '1TB + 1TB M.2 NVMe™ PCIe® 3.0 Performance RAID0 SSD'
const doubleRaidSSD = '2TB + 2TB M.2 NVMe™ PCIe® 3.0 Performance RAID0 SSD'

const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9)
}

export const data = [
  {
    id: generateId(),
    name: 'GX550LXS',
    gpu: rtxGpu1,
    cpu: intel9Cpu10,
    display: displayMd,
    storage: raidSSD,
    price: '$4,199',
    img:
      'https://cdn.shopify.com/s/files/1/0228/7629/1136/products/ROGZephyrusDuo15_7_2000x.png?v=1586789904',
  },
  {
    id: generateId(),
    name: 'GX531GX-ES047R',
    gpu: rtxGpu1,
    cpu: intel7Cpu8,
    display: displayMd,
    storage: '1TB M.2 NVMe™ PCIe® 3.0 x4 SSD (HyperDrive)',
    price: '$2,199',
    img:
      'https://dlcdnwebimgs.asus.com/gain/C5B7C2B1-A0AB-4FFB-ACE9-D6B007E34504',
  },
  {
    id: generateId(),
    name: 'GX531GXR-ES012R',
    gpu: rtxGpu1,
    cpu: intel7Cpu9,
    display: displayMd,
    storage: performanceSSD,
    price: '$2,599',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81On9Y2yByL._AC_SL1500_.jpg',
  },
  {
    id: generateId(),
    name: 'GX502LXS-HF066R',
    gpu: rtxGpu1,
    cpu: intel7Cpu10,
    display: displayMd,
    storage: smPerformanceSSD,
    price: '$2,999',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81JZdgi17vL._AC_SL1500_.jpg',
  },
  {
    id: generateId(),
    name: 'GX701LXS-XS78',
    gpu: rtxGpu1,
    cpu: intel7Cpu10,
    display: displayLg,
    storage: performanceSSD,
    price: '$2,999',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81sFhq2FSuL._AC_SL1500_.jpg',
  },
  {
    id: generateId(),
    name: 'ROG Zephyrus Duo 15',
    gpu: rtxGpuSuper,
    cpu: intel7Cpu10,
    display: displayMd,
    storage: raidSSD,
    price: '$3,499',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81Cb9QNSyGL._AC_SX466_.jpg',
  },
  {
    id: generateId(),
    name: 'GX701GWR',
    gpu: rtxGpuSuper,
    cpu: intel7Cpu10,
    display: displayMd,
    storage: ssd,
    price: '$3,699',
    img: 'https://cdn.mwave.com.au/images/400/AC24007_1.jpg',
  },
  {
    id: generateId(),
    name: 'GX701GX',
    gpu: rtxGpu1,
    cpu: intel7Cpu10,
    display: displayLg,
    storage: performanceSSD,
    price: '$2,999',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41QveeKrBGL._AC_.jpg',
  },
  {
    id: generateId(),
    name: 'GX502GV',
    gpu: rtxGpuSuper,
    cpu: intel7Cpu10,
    display: displayMd,
    storage: smPerformanceSSD,
    price: '$2,999',
    img: 'https://www.excaliberpc.com/images/728623_1/large.jpg',
  },
  {
    id: generateId(),
    name: 'ROG Zephyrus M GU502',
    gpu: rtxGpu2,
    cpu: intel7Cpu10,
    display: displayMd,
    storage: smPerformanceSSD,
    price: '$2,299',
    img:
      'https://www.notebookcheck.net/uploads/tx_nbc2/ASUSZephyrusMGU502GU__1_.jpg',
  },
  {
    id: generateId(),
    name: 'ROG Strix SCAR 15',
    gpu: rtxGpuSuper,
    cpu: intel9Cpu10,
    display: displayMd,
    storage: raidSSD,
    price: '$2,799',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71VOUtLV5UL._AC_SL1500_.jpg',
  },
  {
    id: generateId(),
    name: 'ROG Strix SCAR III',
    gpu: gtxGpu,
    cpu: intel7Cpu9,
    display: displayMd,
    storage: ssd,
    price: '$1,599',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81acyeSEDeL._SX466_.jpg',
  },
  {
    id: generateId(),
    name: 'ROG Strix G17',
    gpu: rtxGpu2,
    cpu: intel7Cpu10,
    display: displayLg,
    storage: ssd,
    price: '$2,299',
    img:
      'https://i0.wp.com/toptechkh.com/wp-content/uploads/2020/08/Glacier-Blue.jpg?fit=500%2C500&ssl=1',
  },
  {
    id: generateId(),
    name: 'ROG Strix G',
    gpu: gtxGpu,
    cpu: intel7Cpu9,
    display: displayLg,
    storage:
      '1TB 5400RPM 2.5" SATA FireCuda SSHD,512GB M.2 NVMe™ PCIe® 3.0 SSD',
    price: '$1,499',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71mYNdzMdUL._AC_SL1500_.jpg',
  },
  {
    id: generateId(),
    name: 'ROG Mothership GZ700GX',
    gpu: rtxGpu1,
    cpu: '9th Gen Intel® Core™ i9',
    display: displayLg,
    storage:
      '512GB *3 M.2 NVMe™ PCIe® 3.0 SSD (RAID 0) x 2,512GB *3 M.2 NVMe™ PCIe® 3.0 SSD (RAID 0)',
    price: '$6,499',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81JJ4fGmNhL._AC_SL1500_.jpg',
  },
  {
    id: generateId(),
    name: 'ROG Zephyrus G14',
    gpu: gtxGpu,
    cpu: 'AMD® Ryzen™ 9',
    display: displaySm,
    storage: ssd,
    price: '$1,599',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/61vu2vxYAGL._AC_SX466_.jpg',
  },
  {
    id: generateId(),
    name: 'ROG Zephyrus M15',
    gpu: gtxGpu,
    cpu: intel7Cpu10,
    display: displayMd,
    storage: ssd,
    price: '$1,599',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/61SXhnIUFOL._AC_SL1080_.jpg',
  },
  {
    id: generateId(),
    name: 'TUF Gaming F15',
    gpu: gtxGpu,
    cpu: intel7Cpu10,
    display: displayMd,
    storage: ssd,
    price: '$1,299',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/914o5xV1%2B8L._SL1500_.jpg',
  },
  {
    id: generateId(),
    name: 'ALIENWARE M17 R3',
    gpu: rtxGpu2,
    cpu: intel7Cpu10,
    display: displayLg,
    storage: smPerformanceSSD,
    price: '$2,599',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71hhY4ikVwL._AC_SL1500_.jpg',
  },
  {
    id: generateId(),
    name: 'ALIENWARE M15 R3',
    gpu: rtxGpu2,
    cpu: intel7Cpu10,
    display: displayMd,
    storage: ssd,
    price: '$1,799',
    img:
      'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/alienware_notebooks/alienware_m15_r3/pdp/alienware-m15-r3-laptop-pdp.png?fmt=jpg&wid=570&hei=400',
  },
  {
    id: generateId(),
    name: 'ALIENWARE AREA-51M R2',
    gpu: 'GeForce RTX™ 2080 SUPER',
    cpu: intel9Cpu10,
    display: displayLg,
    storage: doubleRaidSSD,
    price: '$4,699',
    img:
      'https://i.dell.com/sites/csimages/Video_Imagery/all/alienware-area-51m-r2-2020-thumb.jpg',
  },
  {
    id: generateId(),
    name: 'GT76 Titan 10SF',
    gpu: rtxGpu2,
    cpu: intel9Cpu10,
    display: displayLg,
    storage: ssd,
    price: '$2,099',
    img: 'https://www.laptoparena.net/images/MSI_Gaming_GT76_88ff9a.jpg',
  },
  {
    id: generateId(),
    name: 'GS75 Stealth 10SE',
    gpu: rtxGpu3,
    cpu: intel7Cpu10,
    display: displayLg,
    storage: smSSD,
    price: '$1,699',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/710pmUkw2rL._AC_SL1500_.jpg',
  },
  {
    id: generateId(),
    name: 'GS66 Stealth 10SD',
    gpu: gtxGpu,
    cpu: intel7Cpu10,
    display: displayMd,
    storage: smSSD,
    price: '$1,599',
    img:
      'https://asset.msi.com/resize/image/global/product/product_3_20200311103035_5e684d4b13299.png62405b38c58fe0f07fcef2367d8a9ba1/380.png',
  },
  {
    id: generateId(),
    name: 'GE75 Raider 10SFS',
    gpu: rtxGpuSuper,
    cpu: intel9Cpu10,
    display: displayLg,
    storage: ssd,
    price: '$2,399',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81YOhSzeYtL._AC_SL1500_.jpg',
  },
  {
    id: generateId(),
    name: 'GP75 Leopard 10SFSK',
    gpu: rtxGpuSuper,
    cpu: intel7Cpu10,
    display: displayLg,
    storage: smSSD,
    price: '$1,899',
    img:
      'https://cdn.shopify.com/s/files/1/0228/7629/1136/products/GP75Leopard_1_ea3ee74c-13f6-43af-a856-abf5206a6522_2000x.png?v=1599589880',
  },
  {
    id: generateId(),
    name: 'GF75 Thin 10SE',
    gpu: rtxGpu3,
    cpu: intel7Cpu10,
    display: displayLg,
    storage: ssd,
    price: '$1,499',
    img:
      'https://asset.msi.com/resize/image/global/product/product_8_20200319093839_5e72cd1f6d8a0.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png',
  },
]
