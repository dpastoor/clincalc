"use strict";
/**
 * calculate CHA2DS2-VASc score for a patient
 * @param age - age in years.
 * @param female - whether patient is female
 * @param hf - whether patient has history of heart failure
 * @param ht - whether patient has history of hypertension
 * @param sti - whether patient has history of stroke or transient ischemic attack
 * @param dbm - whether patient has history of diabetes mellitus
 * @param vd - whether patient has history of vascular disease
 *
 */
function chadsVasc(age, female, hf, ht, sti, dbm, vd) {
    var ageRisk = age < 65 ? 0 : age < 74 ? 1 : 2;
    var femaleRisk = female ? 1 : 0;
    var hfRisk = hf ? 1 : 0;
    var htRisk = ht ? 1 : 0;
    var stiRisk = sti ? 2 : 0;
    var dbmRisk = dbm ? 1 : 0;
    var vdRisk = vd ? 1 : 0;
    return ageRisk + femaleRisk + hfRisk + htRisk + stiRisk + dbmRisk + vdRisk;
}
exports.chadsVasc = chadsVasc;
