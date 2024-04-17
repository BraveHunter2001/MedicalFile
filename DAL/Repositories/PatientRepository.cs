using DAL.Models;

namespace DAL.Repositories;

public interface IPatientRepository
{
    int CreatePatient(Patient patient);
}

public class PatientRepository(MedicalFileContext context) : Repository<Patient>(context), IPatientRepository
{
    public int CreatePatient(Patient patient)
    {
        Create(patient);

        return patient.Id;
    }
}