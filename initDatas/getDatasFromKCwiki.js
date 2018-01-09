const ships = [];
const shipTypes = [];
let code = 0;
const shipMixedDoms = Array.from(document.querySelectorAll('body >table>tbody>tr'));
const shipTypesDom = Array.from(shipMixedDoms.filter(item => item.firstElementChild.className === 'navbox-group'));
shipTypesDom.forEach((item) => {
  let ship_type = item.firstElementChild.textContent;
  ship_type = ship_type.replace(/\s+/, '/');
  const subTypeDoms = item.querySelectorAll('.navbox-group');
  for (let i = 1; i < subTypeDoms.length; i += 1) {
    const sub_type = subTypeDoms[i].textContent;
    shipTypes.push({
      ship_type,
      ship_subtype: sub_type,
    });
    const subTypesDom = subTypeDoms[i].parentElement;
    const shipDoms = subTypesDom.querySelectorAll('td.navbox-list.navbox-odd div a');
    shipDoms.forEach((shipDom) => {
      ships.push({
        ship_type: sub_type,
        name: shipDom.textContent,
        code,
      });
      code += 1;
    });
  }
});
console.log(JSON.stringify(shipTypes));
console.log(JSON.stringify(ships));
