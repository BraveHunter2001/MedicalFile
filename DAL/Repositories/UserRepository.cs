using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public interface IUserRepository
    {
        int Add(User user);

    }
    public class UserRepository(MedicalFileContext context) : Repository<User>(context), IUserRepository
    {
        public int Add(User user)
        {
            Create(user);
            return user.Id;
        }
    }
}
