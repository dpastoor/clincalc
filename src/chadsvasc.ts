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
export default function chadsVasc(
    age: number, 
    female: boolean, 
    hf: boolean,
    ht: boolean,
    sti: boolean,
    dbm: boolean,
    vd: boolean
    ) {
    let ageRisk = age < 65 ? 0 : age < 74 ? 1 : 2;
    let femaleRisk = female ? 1 : 0;
    let hfRisk = hf ? 1 : 0;
    let htRisk = ht ? 1 : 0;
    let stiRisk = sti ? 2 : 0;
    let dbmRisk = dbm ? 1 : 0;
    let vdRisk = vd ? 1 : 0;
    return ageRisk + femaleRisk + hfRisk + htRisk + stiRisk + dbmRisk + vdRisk
}