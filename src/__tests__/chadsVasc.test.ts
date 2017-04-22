import chadsVasc  from '../chadsVasc';
describe("chads vasc score", () => {
    it('calculates lowest risk patient', () => {
    let patient = chadsVasc(50, false, false, false, false, false, false) 
    expect(patient).toBe(0);
    });
    it('calculates patient in age for 1 point', () => {
    let patient = chadsVasc(68, false, false, false, false, false, false) 
    expect(patient).toBe(1);
    });
    it('calculates 2 point age patient', () => {
    let patient = chadsVasc(80, false, false, false, false, false, false) 
    expect(patient).toBe(2);
    });
    it('calculates risk for female patient', () => {
    let patient = chadsVasc(50, true, false, false, false, false, false) 
    expect(patient).toBe(1);
    });
    it('calculates risk for patient with heart failure history', () => {
    let patient = chadsVasc(50, false, true, false, false, false, false) 
    expect(patient).toBe(1);
    });
    it('calculates risk for patient with hypertension', () => {
    let patient = chadsVasc(50, false, false, true, false, false, false) 
    expect(patient).toBe(1);
    });
    it('calculates risk for patient with stroke/transient ischemic attack', () => {
    let patient = chadsVasc(50, false, false, false, true, false, false) 
    expect(patient).toBe(2);
    });
    it('calculates risk for patient with diabetes', () => {
    let patient = chadsVasc(50, false, false, false, false, true, false) 
    expect(patient).toBe(1);
    });
    it('calculates risk for patient with vascular disease', () => {
    let patient = chadsVasc(50, false, false, false, false, false, true) 
    expect(patient).toBe(1);
    });
});