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
    if (age <= 0 || scr <= 0 || weight <= 0) {
        return -1;
    }
    var femaleScaling = female ? 0.85 : 1;
    return (140 - age) * weight / (72 * scr) * femaleScaling;
}
exports.renalFunction = renalFunction;
