//creates html elements (tags, radio buttons)
const htmlCreator = {}
htmlCreator.element = (tagName,attributes,textContent)=>{
  const element = document.createElement(tagName);
  if (attributes){
    Object.keys(attributes).forEach((key)=>{
     element.setAttribute(key,attributes[key])
    });  
  }
  if (textContent){
    element.textContent = textContent;
  }
  return element
};
htmlCreator.radio = (parent,options)=>{
  const newInput = htmlCreator.element("input",{type:"radio", name:options.name,value:options.value,id:options.id});
  parent.append(newInput);
  const newLabel = htmlCreator.element("label",{for:options.id},options.label);
  parent.append(newLabel);
  const brtag = htmlCreator.element("br");
  parent.append(brtag);
};