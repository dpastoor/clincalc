/**
 * calculate renal function of a patient 
 * @param age - age in years.
 * @param weight - weight in kg.
 * @param scr - serum creainine in mg/dL.
 * @param female - whether patient is female
 */
export function renalFunction(age: number, weight: number, scr: number, female: boolean) {
    let isFemale = female ? 1 : 0;
    return ((140-age)*weight/(72*scr)*(1-0.15*isFemale))
}