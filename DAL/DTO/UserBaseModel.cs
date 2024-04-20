using DAL.Models;

namespace DAL.DTO;

public class UserBaseModel : BaseItem
{
    public Role Role { get; set; }
}
