const filter = document.querySelector('#filter__table')

filter.addEventListener('input', filterPatient)

function filterPatient() {
    console.log(this.value);
    const patients = document.querySelectorAll('.patient')
    if (this.value.length > 0) {
        for (let i = 0; i < patients.length; i++) {
            const patient = patients[i];
            const tdName = patient.querySelector('.info-nome')
            const name = tdName.textContent
            const regex = new RegExp(this.value,'i')
            console.log(name);
            if (!regex.test(name)) {
                patient.classList.add('invisible')
            }else{
                patient.classList.remove('invisible')
            }
        }
    }else{
        for (let i = 0; i < patients.length; i++) {
            const patient = patients[i];
            patient.classList.remove('invisible')
            
        }
    }


}