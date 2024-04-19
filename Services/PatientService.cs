using DAL.DTO;
using DAL.Models;
using DAL.Repositories;

namespace Services;

public interface IPatientService
{
    int CreatePatient(PatientDto patient);
}

public class PatientService(IUserRepository userRepository, IPatientCharacteristicRepository patientCharacteristicRepository) : IPatientService
{
    public int CreatePatient(PatientDto patient)
    {
        var user = new User
        {
            CreatedDate = DateTime.Now,
            Role = Role.Patient,
            Name = patient.Name,
            Login = patient.Login,
            Password = patient.Password,
        };

        int userId = userRepository.Add(user);

        var characteristic = new PatientCharacteristic
        {
            PatientId = userId,
            Age = patient.Age,
            RiskFactor = patient.RiskFactor,
        };

        patientCharacteristicRepository.Add(characteristic);

        return userId;
    }
}