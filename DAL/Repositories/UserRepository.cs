using DAL.DTO;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public interface IUserRepository
    {
        int Add(User user);
        List<User> GetUsers(UserFilter filter);
    }

    public class UserRepository(MedicalFileContext context) : Repository<User>(context), IUserRepository
    {
        public int Add(User user)
        {
            Create(user);
            return user.Id;
        }

        public List<User> GetUsers(UserFilter filter)
        {
            var allUsers = context.Users.Where(user
                => (filter == null
                || filter.Role == null
                || user.Role == filter.Role) 
                && (filter == null
                || filter.Name == null
                || filter.Name == " "
                || user.Name.StartsWith(filter.Name)));

            var result = filter != null ? (filter.Take.HasValue
                ? allUsers.Take(filter.Take.Value) : allUsers) : allUsers;

            return result.ToList();
        }
    }
}
