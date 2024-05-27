using DAL.DTO;
using DAL.Models;
using DAL.Repositories;

namespace Services;

public interface IUserService
{
    int CreatePatient(PatientModel patient);
    int CreateDoctor(UserModel userModel);

    int UpdatePatient(PatientModel patientModel);
    int UpdateDoctor(UserModel userModel);

    bool UserExist(int id, Role role);

    User GetUser(int id);
    List<User> GetUsers(UserFilter filter);
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

    public int UpdatePatient(PatientModel patient)
    {
        if (patient is null) return 0;

        var origin = GetUser(patient.Id);

        origin.Name = patient.Name;
        origin.Login = patient.Login;
        origin.Password = patient.Password;
        origin.PatientCharacteristic.Age = patient.Age;
        origin.PatientCharacteristic.RiskFactor = patient.RiskFactor;

        userRepository.UpdateUser(origin);

        return origin.Id;
    }

    public int UpdateDoctor(UserModel userModel)
    {
        if (userModel is null) return 0;

        var origin = GetUser(userModel.Id);

        origin.Name = userModel.Name;
        origin.Login = userModel.Login;
        origin.Password = userModel.Password;

        userRepository.UpdateUser(origin);

        return origin.Id;
    }

    public bool UserExist(int id, Role role)
    {
        return userRepository.UserExist(id, role);
    }

    public User GetUser(int id)
    {
        return userRepository.GetUser(id);
    }

    public List<User> GetUsers(UserFilter filter)
    {
        List<User> users = userRepository.GetUsers(filter);
        return users;
    }
}