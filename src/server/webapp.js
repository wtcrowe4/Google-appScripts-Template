// WebApp navigation
export const doGet = (e) => {
  const page = e.parameter.page || 'home';
  let fileName = 'home.html';
  let title = 'Wand Inventory Management';

  if (page === 'premade') {
    fileName = 'premade.html';
    title = 'Premade Inventory Management';
  } else if (page === 'order') {
    fileName = 'order.html';
    title = 'Update Inventory for Order';
  }

  // Pass the function, not just a string
  const template = HtmlService.createTemplateFromFile(fileName);
  template.getScriptUrl = () => ScriptApp.getService().getUrl();

  return template.evaluate().setTitle(title).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
};

export const include = (filename) => {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
};

export const getScriptUrl = () => {
  return ScriptApp.getService().getUrl();
};
