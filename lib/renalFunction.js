"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * calculate renal function of a patient
 * @param age - age in years.
 * @param weight - weight in kg.
 * @param scr - serum creainine in mg/dL.
 * @param female - whether patient is female
 */
function renalFunction(age, weight, scr, female) {
    var isFemale = female ? 1 : 0;
    return ((140 - age) * weight / (72 * scr) * (1 - 0.15 * isFemale));
}
exports.renalFunction = renalFunction;
