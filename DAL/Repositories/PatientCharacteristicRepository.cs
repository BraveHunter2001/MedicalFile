using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories;

public interface IPatientCharacteristicRepository
{
    int Add(PatientCharacteristic patientCharacteristics);
    int Update(PatientCharacteristic patientCharacteristics);

    PatientCharacteristic GetByPatientId(int id);

}
public class PatientCharacteristicRepository(MedicalFileContext context) : Repository<PatientCharacteristic>(context), IPatientCharacteristicRepository
{
    public int Add(PatientCharacteristic patientCharacteristics)
    {
        Create(patientCharacteristics);
        return patientCharacteristics.Id;
    }

    public int Update(PatientCharacteristic patientCharacteristics)
    {
        Insert(patientCharacteristics);
        return patientCharacteristics.Id;
    }

    public PatientCharacteristic GetByPatientId(int id) => context.PatientCharacteristics.FirstOrDefault(p => p.Id == id);

}
