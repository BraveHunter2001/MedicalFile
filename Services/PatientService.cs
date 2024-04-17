using DAL.Models;
using DAL.Repositories;

namespace Services;

public interface IPatientService
{
    int CreatePatient(Patient patient);
}

public class PatientService(IPatientRepository patientRepository) : IPatientService
{
    public int CreatePatient(Patient patient) => patientRepository.CreatePatient(patient);
}