/**
 * calculate renal function of a patient 
 * @param age - age in years.
 * @param weight - weight in kg.
 * @param scr - serum creainine in mg/dL.
 * @param female - whether patient is female
 */
export function renalFunction(age: number, weight: number, scr: number, female: boolean) {
    if (age <= 0 || scr <= 0 || weight <= 0) {
            return -1;
        }
    let femaleScaling = female ? 0.85 : 1;
    return (140 - age) * weight / (72 * scr) * femaleScaling;
}