using DAL.DTO;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public interface IUserRepository
    {
        int Add(User user);
        bool UserExist(int id, Role role);
        List<User> GetUsers(UserFilter filter);
    }

    public class UserRepository(MedicalFileContext context) : Repository<User>(context), IUserRepository
    {
        public int Add(User user)
        {
            Create(user);
            return user.Id;
        }

        public bool UserExist(int id, Role role)
        {
            return context.Users.Any(user => user.Id == id && user.Role == role);
        }

        public List<User> GetUsers(UserFilter filter)
        {
            var allUsers = context.Users.Where(user
                => (filter == null
                || ((filter.Role == null
                || user.Role == filter.Role)
                && (string.IsNullOrWhiteSpace(filter.Name)
                || user.Name.StartsWith(filter.Name)))));

            var result = filter.Role == Role.Patient ? allUsers.Include(user => user.PatientCharacteristic) : allUsers;

            var resultWithTake = 
                filter?.Take is not null 
                ? result.Take(filter.Take.Value) 
                : result;

            return resultWithTake.ToList();
        }
    }
}
