"use strict";
module.exports = validate10;
module.exports.default = validate10;
const schema11 = {"$schema":"http://json-schema.org/draft-07/schema#","title":"ChangeRequest","type":"object","required":["number","state"],"properties":{"number":{"type":"string","pattern":"^CHG[0-9]{7}$"},"state":{"type":"string","enum":["-5","1","2","3","4","-1"]}}};
const pattern0 = new RegExp("^CHG[0-9]{7}$", "u");

function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.number === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "number"},message:"must have required property '"+"number"+"'"};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.state === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "state"},message:"must have required property '"+"state"+"'"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.number !== undefined){
let data0 = data.number;
if(typeof data0 === "string"){
if(!pattern0.test(data0)){
const err2 = {instancePath:instancePath+"/number",schemaPath:"#/properties/number/pattern",keyword:"pattern",params:{pattern: "^CHG[0-9]{7}$"},message:"must match pattern \""+"^CHG[0-9]{7}$"+"\""};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
}
else {
const err3 = {instancePath:instancePath+"/number",schemaPath:"#/properties/number/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
}
if(data.state !== undefined){
let data1 = data.state;
if(typeof data1 !== "string"){
const err4 = {instancePath:instancePath+"/state",schemaPath:"#/properties/state/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
if(!((((((data1 === "-5") || (data1 === "1")) || (data1 === "2")) || (data1 === "3")) || (data1 === "4")) || (data1 === "-1"))){
const err5 = {instancePath:instancePath+"/state",schemaPath:"#/properties/state/enum",keyword:"enum",params:{allowedValues: schema11.properties.state.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
}
}
else {
const err6 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
validate10.errors = vErrors;
return errors === 0;
}
