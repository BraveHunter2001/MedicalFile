using DAL.Models;

namespace DAL.DTO
{
    public class UserFilter
    {
        public Role? Role {  get; set; }
        public string Name { get; set; }
        public int? Take { get; set; }
    }
}
