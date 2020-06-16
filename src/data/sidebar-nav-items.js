export default function () {
  return [{
    title: '재고 관리',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'stock',
    },
  },
  {
    title: '입고 이력',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'in',
    },
  },
  {
    title: '출고 이력',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'out',
    },
  },
  {
    title: '거래처 등록',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'account',
    },
  },
];
}
