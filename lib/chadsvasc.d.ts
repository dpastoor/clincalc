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
export declare function chadsVasc(age: number, female: boolean, hf: boolean, ht: boolean, sti: boolean, dbm: boolean, vd: boolean): number;
