using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public interface IUserRepository
    {
        int Add(User user);
        List<User> GetUsers();
    }

    public class UserRepository(MedicalFileContext context) : Repository<User>(context), IUserRepository
    {
        public int Add(User user)
        {
            Create(user);
            return user.Id;
        }

        public List<User> GetUsers()
        {
            var allUsers = context.Users.ToList();
            return allUsers;
        }
    }
}
