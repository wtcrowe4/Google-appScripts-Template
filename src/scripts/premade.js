// Page: premade.html
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('inventoryForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const product = document.getElementById('product').value;
    const color = document.getElementById('color').value;
    const sphereType = document.getElementById('sphere_type').value;
    const sphereSize = document.getElementById('sphere_size').value;
    const quantity = document.getElementById('quantity').value;
    const sold = document.getElementById('sold').checked;
    const displayQuantity = sold ? `-${quantity}` : quantity;
    const submissionList = document.getElementById('submissionList');
    const listItem = document.createElement('li');
    listItem.textContent = `${displayQuantity} - ${product} ${color} ${sphereType} ${sphereSize}mm`;
    submissionList.appendChild(listItem);

    // Optionally, reset the form
    this.reset();
  });

  // Edit Inventory Sheet
  //     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Premade');
  //     const data = sheet.getDataRange().getValues();
  //     const lastRow = sheet.getLastRow();
  //     const lastColumn = sheet.getLastColumn();
  //     const lastRowData = data[lastRow - 1];
  //     const product = lastRowData[0];
  //     const color = lastRowData[1];
  //     const sphereType = lastRowData[2];
  //     const sphereSize = lastRowData[3];
  //     const quantity = lastRowData[4];
  //     const sold = lastRowData[5];
  //     const soldQuantity = sold ? -quantity : quantity;

  //     // clear product list on premade.html
  //     const submissionList = document.getElementById('submissionList');
  //     submissionList.innerHTML = '';
  //   });

  document.getElementById('updateInventory').addEventListener('click', function (e) {
    // Clear product list on premade.html
    const submissionList = document.getElementById('submissionList');
    submissionList.innerHTML = '';
    console.log('Inventory updated');
  });
});
