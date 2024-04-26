using DAL.DTO;
using DAL.Models;
using DAL.Repositories;

namespace Services;

public interface IUserService
{
    int CreatePatient(PatientModel patient);
    int CreateDoctor(UserModel userModel);

    int UpdatePatient();
    int UpdateDoctor();

    User GetUser();
    List<User> GetUsers();
}

public class UserService(IUserRepository userRepository, IPatientCharacteristicRepository patientCharacteristicRepository) : IUserService
{
    private int CreateUser(UserModel userModel)
    {
        var user = new User
        {
            CreatedDate = DateTime.Now,
            Role = userModel.Role,
            Name = userModel.Name,
            Login = userModel.Login,
            Password = userModel.Password,
        };

        int userId = userRepository.Add(user);
        return userId;
    }

    public int CreatePatient(PatientModel patient)
    {
        patient.Role = Role.Patient;
        int userId = CreateUser(patient);

        var characteristic = new PatientCharacteristic
        {
            PatientId = userId,
            Age = patient.Age,
            RiskFactor = patient.RiskFactor,
        };

        patientCharacteristicRepository.Add(characteristic);

        return userId;
    }

    public int CreateDoctor(UserModel userModel)
    {
        userModel.Role = Role.Doctor;
        return CreateUser(userModel);
    }

    public int UpdatePatient()
    {
        throw new NotImplementedException();
    }

    public int UpdateDoctor()
    {
        throw new NotImplementedException();
    }

    public User GetUser()
    {
        throw new NotImplementedException();
    }

    public List<User> GetUsers()
    {
        List<User> users = userRepository.GetUsers();
        return users;
    }
}